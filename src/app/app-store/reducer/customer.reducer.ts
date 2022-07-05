import { Customer } from '../../models/customer';
import { createReducer, on } from '@ngrx/store';
import { addCustomer, removeCustomer } from '../actions/customer.actions';

export const intialState: ReadonlyArray<Customer> = [];

const _customerReducer = createReducer(
  intialState,
  on(addCustomer, (state, { customer }) => [...state, customer]),
  on(removeCustomer, (state, { customerId }) => {
    return [...state.slice(0, customerId), ...state.slice(customerId + 1)];
  })
);

export function customerReducer(state:any, action:any) {
  return _customerReducer(state, action);
}