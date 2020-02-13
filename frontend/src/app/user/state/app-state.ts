import { ActionReducerMap } from '@ngrx/store';
import { employeeReducer, EmployeeState } from '../employees/state/reducer/employee.reducer';
import { customerReducer, CustomerState } from '../customers/state/reducers/customer.reduce';
import { CustomerEffects } from '../customers/state/effects/customer.effects';
import { EmployeeEffects } from '../employees/state/effects/employee.effects';
import { customerCommentsReducer, CustomerCommentsState } from '../customers/state/reducers/customer-comments.reducer';
import { EmployeeCustomerCommentsEffects } from '../customers/state/effects/customer-comments.effects';
import { employeeProjectsReducer, EmployeeProjectsState } from '../employees/state/reducer/employee-projects.reducer';
import { EmployeeProjectsEffects } from '../employees/state/effects/employee-projects.effects';
import { searchReducer, SearchState } from '../search/state/reducers/search.reducer';
import { SearchEffects } from '../search/state/effects/search.effects';

// export interface Root {
//     user: AppState
// }

export interface AppState {
    employees: EmployeeState;
    customers: CustomerState;
    customerComments: CustomerCommentsState;
    employeeProjects: EmployeeProjectsState;
    search: SearchState;
}


// Create General Reducers
export const reducers: ActionReducerMap<AppState> = {
    employees: employeeReducer,
    customers: customerReducer,
    customerComments: customerCommentsReducer,
    employeeProjects: employeeProjectsReducer,
    search: searchReducer   
}


// Create General Effects
export const effects = [
    EmployeeEffects, 
    CustomerEffects, 
    EmployeeCustomerCommentsEffects, 
    EmployeeProjectsEffects,
    SearchEffects
];