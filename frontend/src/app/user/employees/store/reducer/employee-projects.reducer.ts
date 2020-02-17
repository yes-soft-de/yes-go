import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import * as employeeProjectsAction from '../actions/employee-projects.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeProjects } from '../../entity/employee-projects';
import {UserState} from '../../../store/app-state';
import { getRouterState } from 'src/app/app/store/router-state';

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
    switch (action.type) {
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

const getAppState = createFeatureSelector<UserState>('user');
// export const getRouteState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

// Employees Projects State Selector
const getEmployeesProjectsState = createSelector(
  getAppState,
  (state: UserState) => state.employeeProjects
);

// Create Employee Load Selector
export const getEmployeeProjectsSelector = createSelector(
  getEmployeesProjectsState,
  employeeProjectsAdepter.getSelectors().selectAll
);

export const getEmployeeProjectsLoadingSelector = createSelector(
  getEmployeesProjectsState,
  (state: EmployeeProjectsState) => state.loading
);

export const getEmployeeProjectsLoadedSelector = createSelector(
  getEmployeesProjectsState,
  (state: EmployeeProjectsState) => state.loaded
);

// Create Employee Error Selector
export const getEmployeeProjectsErrorSelector = createSelector(
  getEmployeesProjectsState,
  (state: EmployeeProjectsState) => state.error
);
