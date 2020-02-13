import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {EmployeeList} from '../../entity/employee-list';
import * as employeeAction from '../actions/employee.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// Generate Our Employee State
export interface EmployeeState extends EntityState<EmployeeList> {
  selectedEmployeeId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}


// Generate Employee Adepter
export const employeeAdepter: EntityAdapter<EmployeeList> = createEntityAdapter<EmployeeList>();

// Defined Default Employee With Some Initial Value
export const defaultEmployee: EmployeeState = {
  ids: [],
  entities: {},
  selectedEmployeeId: null,
  loading: false,
  loaded: false,
  error: ''
};

// Generate The Initial State
export const initialState = employeeAdepter.getInitialState(defaultEmployee);

// Generate Employee Reducer
export function employeeReducer(state = initialState, action: employeeAction.action) {
    switch(action.type) {
        case employeeAction.EmployeeActionsType.LOAD_EMPLOYEES_SUCCESS:
            return employeeAdepter.addAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            });
        case employeeAction.EmployeeActionsType.LOAD_EMPLOYEES_FAILED:
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        
        case employeeAction.EmployeeActionsType.LOAD_EMPLOYEE_SUCCESS:
            return employeeAdepter.addOne(action.payload, {
                ...state,
                selectedEmployeeId: action.payload.id,
                loading: false,
                loaded: true
            });
        case employeeAction.EmployeeActionsType.LOAD_EMPLOYEE_FAILED:
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


// Create Feature Selector for our employees
const employeeFeatureSelector = createFeatureSelector<EmployeeState>('employees');

// Create Employee Load Selector
export const getEmployeesSelector = createSelector(
    employeeFeatureSelector, 
    employeeAdepter.getSelectors().selectAll
);

export const getEmployeesLoadingSelector = createSelector(
    employeeFeatureSelector,
    (state: EmployeeState) => state.loading
);
  
  export const getEmployeesLoadedSelector = createSelector(
    employeeFeatureSelector,
    (state: EmployeeState) => state.loaded
);
  
// Create Employee Error Selector
export const getErrorSelector = createSelector(
    employeeFeatureSelector,
    (state: EmployeeState) => state.error
);

// Get Current Id For THis Employee
export const getCurrentEmployeeId = createSelector(
    employeeFeatureSelector,
    (state: EmployeeState) => state.selectedEmployeeId
);

// Get Employee Detail Selector
export const getEmployeeDetailSelector = createSelector(
    employeeFeatureSelector,
    getCurrentEmployeeId,
    state => state.entities[state.selectedEmployeeId]
);

