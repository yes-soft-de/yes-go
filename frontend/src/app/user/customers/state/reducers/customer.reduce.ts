import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as customerActions from '../actions/customer.actions';
import { CustomerList } from '../../entity/customer-list';

// Our Customer State
export interface CustomerState extends EntityState<CustomerList> {
    selectedCustomerId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

// create cutomer adepter
export const customerAdepter: EntityAdapter<CustomerList> = createEntityAdapter<CustomerList>();

// Create Default initial
export const defaultCustomer: CustomerState = {
    ids: [],
    entities: {},
    selectedCustomerId: null,
    loading: false,
    loaded: false,
    error: ''
}

// Assign The Default Customer to The InitialState
export const initialState = customerAdepter.getInitialState(defaultCustomer);

// Customer Reducer
export function customerReducer(state = initialState, action: customerActions.action) {
    switch(action.type) {
        case customerActions.customerActionsType.LOAD_CUSTOMERS_SUCCESS:
            return customerAdepter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        case customerActions.customerActionsType.LOAD_CUSTOMERS_FAILED:
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            }
        default:
            return state;
    }
}


// Create Customers Feature Selector
const customerFeatureSelector = createFeatureSelector<CustomerState>('customers');

// Create Selector To Get All Customers Directly
export const getCustomersSelector = createSelector(
    customerFeatureSelector,
    customerAdepter.getSelectors().selectAll
);

// Create Customer Error Selector
export const customerErrorSelector = createSelector(
    customerFeatureSelector,
    (state: CustomerState) => state.error
);
























