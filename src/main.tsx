import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './data/queryClient';

import './index.css';
import App from './App';
import { AppShell } from './layouts/AppShell';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppShell>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppShell>
  </StrictMode>,
);
