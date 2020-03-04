import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as customerActions from '../actions/customer.actions';
import { CustomerList } from '../../entity/customer-list';
import { UserState } from 'src/app/user/store/app-state';

// Our Customer State
export interface CustomerState extends EntityState<CustomerList> {
    selectedCustomerId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

// create customer adepter
export const customerAdepter: EntityAdapter<CustomerList> = createEntityAdapter<CustomerList>();

// Create Default initial
export const defaultCustomer: CustomerState = {
    ids: [],
    entities: {},
    selectedCustomerId: null,
    loading: false,
    loaded: false,
    error: ''
};

// Assign The Default Customer to The InitialState
export const initialState = customerAdepter.getInitialState(defaultCustomer);

// Customer Reducer
export function customerReducer(state = initialState, action: customerActions.action) {
    switch (action.type) {
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
// const customerFeatureSelector = createFeatureSelector<CustomerState>('customers');
const getAppState = createFeatureSelector<UserState>('user');

export const getCustomersState = createSelector(
    getAppState,
    (state: UserState) => state.customers
);
// Create Selector To Get All Customers Directly
export const getCustomersSelector = createSelector(
    getCustomersState,
    customerAdepter.getSelectors().selectAll
);

// Create Customer Error Selector
export const customersErrorSelector = createSelector(
    getCustomersState,
    (state: CustomerState) => state.error
);

// Create Customer Loaded Success Selector
export const customersLoadedSuccessSelector = createSelector(
    getCustomersState,
    (state: CustomerState) => state.loaded
);
























