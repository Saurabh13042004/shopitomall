import { create } from 'zustand';
import { Customer } from '../types/customer';

interface CustomerStore {
  customers: Customer[];
  addCustomer: (customer: Customer) => void;
}

export const useCustomerStore = create<CustomerStore>((set) => ({
  customers: [
    {
      id: '1',
      fullName: 'John Doe',
      email: 'john@example.com',
      country: 'United States',
      phoneNumber: '+1234567890',
      submittedAt: '2024-03-15T10:30:00Z',
    },
    {
      id: '2',
      fullName: 'Jane Smith',
      email: 'jane@example.com',
      country: 'Canada',
      phoneNumber: '+1987654321',
      submittedAt: '2024-03-15T11:45:00Z',
    }
  ],
  addCustomer: (customer) =>
    set((state) => ({ customers: [...state.customers, customer] })),
}));