// eslint-disable @typescript-eslint/no-explicit-any
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiClientOptions<TBody = unknown> {
  path: string;
  method?: HttpMethod;
  query?: Record<string, string | number | boolean | undefined>;
  body?: TBody;
  signal?: AbortSignal;
  headers?: Record<string, string>;
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

function toQueryString(query?: ApiClientOptions['query']) {
  if (!query) return '';
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(query)) {
    if (v !== undefined && v !== null) params.set(k, String(v));
  }
  const s = params.toString();
  return s ? `?${s}` : '';
}

export async function apiClient<TResponse, TBody = unknown>(
  opts: ApiClientOptions<TBody>
): Promise<TResponse> {
  const { path, method = 'GET', query, body, signal, headers = {} } = opts;

  const url = `${BASE_URL}${path}${toQueryString(query)}`;

  const headersInit: HeadersInit = {
    ...headers,
    ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
  };

  const init: RequestInit = {
    method,
    headers: headersInit,
    ...(signal ? { signal } : {}),
  };

  if (body !== undefined) {
    init.body = JSON.stringify(body);
  }

  const res = await fetch(url, init);

  if (!res.ok) {
    let detail: unknown;
    try {
      detail = await res.json();
    } catch {
      // ignore: response body may not be JSON (could be empty or plain text)
    }
    const error = new Error(`HTTP ${res.status} ${res.statusText}`);
    (error as any).status = res.status;
    (error as any).detail = detail;
    throw error;
  }

  if (res.status === 204) return undefined as unknown as TResponse;
  return (await res.json()) as TResponse;
}