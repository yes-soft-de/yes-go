import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {EmployeeList} from '../../entity/employee-list';
import * as employeeAction from '../actions/employee.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from 'src/app/user/store/app-state';
import {getRouterState} from '../../../../app/store/router-state';
import {EmployeeDetail} from '../../entity/employee-detail';


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
    switch (action.type) {
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


// Create User Feature Selector
const getAppState = createFeatureSelector<UserState>('user');

// Employees State Selector
const getEmployeesState = createSelector(
    getAppState,
    (state: UserState) => state.employees
);

// Create Employee Entities Selector
export const getEmployeeEntities = createSelector(
  getEmployeesState,
  employeeAdepter.getSelectors().selectEntities
);

export const getSelectorEmployee = createSelector(
  getEmployeeEntities,
  getRouterState,
  (entities, router): EmployeeDetail => {
    return router.state && entities[router.state.params.id];
  }
);

// Create Employee Load Selector
export const getEmployeesSelector = createSelector(
    getEmployeesState,
    employeeAdepter.getSelectors().selectAll
);

export const getEmployeesLoadingSelector = createSelector(
    getEmployeesState,
    (state: EmployeeState) => state.loading
);

export const getEmployeesLoadedSelector = createSelector(
    getEmployeesState,
    (state: EmployeeState) => state.loaded
);

// Create Employee Error Selector
export const getErrorSelector = createSelector(
    getEmployeesState,
    (state: EmployeeState) => state.error
);

// Get Current Id For THis Employee
export const getCurrentEmployeeId = createSelector(
    getEmployeesState,
    (state: EmployeeState) => state.selectedEmployeeId
);

// Get Employee Detail Selector
export const getEmployeeDetailSelector = createSelector(
    getEmployeesState,
    getCurrentEmployeeId,
    state => state.entities[state.selectedEmployeeId]
);

