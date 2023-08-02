import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from './store';
import { Customer } from './models/customer.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public customers: Customer[] = [];

  constructor(private store: Store<fromStore.AppState>) {
    store.select('customers').subscribe(
      response => {
        this.customers = response.data;
      }
    )
  }
}
