import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Store, select } from '@ngrx/store';
import { removeCustomer } from '../app-store/actions/customer.actions';
import { getSelectedCustomer } from '../app-store/selectors/customer.selector';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  customers: Observable<Customer[]> | undefined;
  selectedCustomer: Customer | undefined;

  constructor(private store: Store<{ customers: Customer[] }>) {
    this.selectedCustomer = undefined;
    this.customers = this.store.pipe(select('customers'));
    console.log(this.customers);
  }

  removeCustomer(customerId: number): void {
    this.store.dispatch(removeCustomer({ customerId: customerId }));
  }
  getCustomerDetails(customerId: number) {
    const subscription = this.store
      .pipe(select(getSelectedCustomer(customerId)))
      .subscribe((selectedData) => {
        this.selectedCustomer = selectedData;
        console.log(this.selectedCustomer.email)
      })
      subscription.unsubscribe();
  }
  ngOnInit(): void {}
}
