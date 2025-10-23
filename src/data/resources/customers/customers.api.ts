import { apiClient } from "../../apiClient";

export type Customer = {id: string, name: string}

export const fetchCustomers = () => {
    apiClient<Customer[]>({path: 'api/v1/customers'})
}