import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from './store';
import { Customer } from './models/customer.model';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public customers: Customer[] = [];

  constructor(
    private store: Store<fromStore.AppState>,
    private customerService: CustomerService
  ) {
    /* store.select('customers').subscribe(
      response => {
        this.customers = response.data;
      }
    ) */
    customerService.getCustomers().subscribe(
      response => {
        this.customers = response;
        console.log(response);
      }
    )
  }
}
