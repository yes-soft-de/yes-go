import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as customerCommentsActions from '../actions/customer-comments.actions';
import { EmployeeCustomerComments } from '../../entity/employee-customer-comments';

// Our Customer State
export interface CustomerCommentsState extends EntityState<EmployeeCustomerComments> {
    selectedCustomerCommentsId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

// create cutomer adepter
export const customerCommentsAdepter: EntityAdapter<EmployeeCustomerComments> = createEntityAdapter<EmployeeCustomerComments>();

// Create Default initial
export const defaultCustomerComments: CustomerCommentsState = {
    ids: [],
    entities: {},
    selectedCustomerCommentsId: null,
    loading: false,
    loaded: false,
    error: ''
}

// Assign The Default Customer to The InitialState
export const initialState = customerCommentsAdepter.getInitialState(defaultCustomerComments);

// Customer Reducer
export function customerCommentsReducer(state = initialState, action: customerCommentsActions.action) {
    switch(action.type) {
        case customerCommentsActions.EmployeeCustomerCommentsActionsType.LOAD_EMPLOYEE_CUSTOMER_COMMENTS_SUCCESS:
            return customerCommentsAdepter.addAll(action.payload, {
                ...state,
                selectedEmployeeId: action.payload.id,
                loading: false,
                loaded: true
            });
        case customerCommentsActions.EmployeeCustomerCommentsActionsType.LOAD_EMPLOYEE_CUSTOMER_COMMENTS_FAILED:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        default:
            return state;
    }
}


// Create Customers Feature Selector
const customerCommentsFeatureSelector = createFeatureSelector<CustomerCommentsState>('customerComments');

// Create Selector To Get All Customers Directly
export const getCustomerCommentsSelector = createSelector(
    customerCommentsFeatureSelector,
    customerCommentsAdepter.getSelectors().selectAll
);

// Create Customer Error Selector
export const customerCommentsErrorSelector = createSelector(
    customerCommentsFeatureSelector,
    (state: CustomerCommentsState) => state.error
);
























