import * as fromCustomerActions from '../actions';
import { Customer } from '../../models/customer.model';

export interface CustomerState {
  data: Customer[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: CustomerState = {
  data: [
    {
      id: 5,
      name: 'Javier Sanhueza',
      age: 30,
      email: 'javier@javier.cl'
    },
    {
      id: 6,
      name: 'Theo Sanhueza',
      age: 1,
      email: 'theo@theo.cl'
    },
    {
      id: 7,
      name: 'Iveth Riveros',
      age: 32,
      email: 'iveth@iveth.cl'
    }
  ],
  loaded: false,
  loading: false,
  error: ''
}

export function reducer(state: CustomerState = initialState, action: any) {
  switch (action.type) {
    case fromCustomerActions.LOAD_CUSTOMERS:
      return {
        ...state,
        loading: true
      }
    default:
      return {
        ...state
      }
  }
}
