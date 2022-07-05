import { createAction, props } from '@ngrx/store';
import { Customer } from '../../models/customer';

export const addCustomer = createAction(
  '[add customer] add',
  props<{ customer: Customer }>()
);

export const removeCustomer = createAction(
    '[remove customer] remove',
    props<{ customerId: any }>()
);