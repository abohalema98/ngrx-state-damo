import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { NotFoundComponent } from './error-page/not-found/not-found.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'customerlist', component: CustomerListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
