import { useQuery } from '@tanstack/react-query';
import { qk } from '@/data/queryKeys';
import { fetchCustomers } from './customers.api';

export const useCustomers = () => {
  useQuery({ queryKey: qk.customers.all(), queryFn: fetchCustomers });
};
