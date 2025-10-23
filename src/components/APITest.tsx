import { useQuery } from '@tanstack/react-query';
import { fetchCustomers } from '../data/resources/customers/customers.api';
import { qk } from '../data/queryKeys';

export default function ApiTest() {
  const { data, isLoading } = useQuery({
    queryKey: qk.customers.all(),
    queryFn: fetchCustomers,
  });

  if (isLoading) return <p>Loading...</p>

  return (
    <div>
        <h2>API Response via useQuery</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
