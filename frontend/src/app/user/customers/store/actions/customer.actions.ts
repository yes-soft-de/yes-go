import { Action } from '@ngrx/store';
import { CustomerList } from '../../entity/customer-list';

 // Defiine Customer Actions Type
export enum customerActionsType {
    LOAD_CUSTOMERS = 'Load Customers',
    LOAD_CUSTOMERS_SUCCESS = 'Load Customers Success',
    LOAD_CUSTOMERS_FAILED = 'Load Customers Failed'
}


// Create customers loading action
export class LoadCustomers implements Action {
    readonly type = customerActionsType.LOAD_CUSTOMERS;
}

// Create Customers Loading Success Action
export class LoadCustomersSuccess implements Action {
    readonly type = customerActionsType.LOAD_CUSTOMERS_SUCCESS;
    constructor(public payload: any) {}
}

// Create Customers Loading Failed Action
export class LoadCustomersFailed implements Action {
    readonly type = customerActionsType.LOAD_CUSTOMERS_FAILED;
    constructor(public payload: string) {}
}


// Create Action Type
export type action = 
    | LoadCustomers 
    | LoadCustomersSuccess 
    | LoadCustomersFailed;