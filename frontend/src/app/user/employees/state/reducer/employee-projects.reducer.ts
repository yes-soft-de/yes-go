import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import * as employeeProjectsAction from '../actions/employee-projects.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeProjects } from '../../entity/employee-projects';

// Generate Our Employee State
export interface EmployeeProjectsState extends EntityState<EmployeeProjects> {
  selectedEmployeeProjectsId: number | null;
  loading: boolean;
  loaded: boolean;
  error: string;
}

// Generate Employee Adepter
export const employeeProjectsAdepter: EntityAdapter<EmployeeProjects> = createEntityAdapter<EmployeeProjects>();

// Defined Default Employee With Some Initial Value
export const defaultEmployeeProjects: EmployeeProjectsState = {
  ids: [],
  entities: {},
  selectedEmployeeProjectsId: null,
  loading: false,
  loaded: false,
  error: ''
};

// Generate The Initial State
export const initialState = employeeProjectsAdepter.getInitialState(defaultEmployeeProjects);

// Generate Employee Reducer
export function employeeProjectsReducer(state = initialState, action: employeeProjectsAction.action) {
    switch(action.type) {        
        case employeeProjectsAction.EmployeeActionsType.LOAD_EMPLOYEE_PROJECTS_SUCCESS:
            return employeeProjectsAdepter.addAll(action.payload, {
                ...state,
                selectedEmployeeId: action.payload.id,
                loading: false,
                loaded: true
            });
        case employeeProjectsAction.EmployeeActionsType.LOAD_EMPLOYEE_PROJECTS_FAILED:
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
const employeeProjectsFeatureSelector = createFeatureSelector<EmployeeProjectsState>('employeeProjects');

// Create Employee Load Selector
export const getEmployeeProjectsSelector = createSelector(
    employeeProjectsFeatureSelector, 
    employeeProjectsAdepter.getSelectors().selectAll
);

export const getEmployeeProjectsLoadingSelector = createSelector(
    employeeProjectsFeatureSelector,
    (state: EmployeeProjectsState) => state.loading
);
  
  export const getEmployeeProjectsLoadedSelector = createSelector(
    employeeProjectsFeatureSelector,
    (state: EmployeeProjectsState) => state.loaded
);
  
// Create Employee Error Selector
export const getEmployeeProjectsErrorSelector = createSelector(
    employeeProjectsFeatureSelector,
    (state: EmployeeProjectsState) => state.error
);
