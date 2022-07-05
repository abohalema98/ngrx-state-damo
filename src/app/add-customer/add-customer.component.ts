import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Store } from '@ngrx/store';
import { addCustomer } from '../app-store/actions/customer.actions';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {}

  onSubmit(name: any, email: any) {
    // console.log(typeof(name));
    const name1 = name.value;
    const email1 = email.value;
    if (name1 && name1 == undefined) {
console.log(true)    }
    const customer = new Customer();
    customer.name = name;
    customer.email = email;
    this.store.dispatch(addCustomer({ customer: customer }));
  }
}
