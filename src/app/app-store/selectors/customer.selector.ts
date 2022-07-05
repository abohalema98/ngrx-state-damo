import { createSelector } from '@ngrx/store';
import { Customer } from '../../models/customer';
import { AppState } from './customer.state';

export const CustomerSelector = (state: AppState) => state.customers;

export const getSelectedCustomer = (customerId: number) =>
  createSelector(CustomerSelector, (customers: Customer[]) => {
    return customers[customerId];
  });
 