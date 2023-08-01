import { Action } from '@ngrx/store';

export const LOAD_CUSTOMERS: string = '[Customer] Load customers';

export class LoadCustomers implements Action {
  readonly type: string = LOAD_CUSTOMERS;
}

export type CustomerActions = LoadCustomers;
