import { ActionReducerMap } from '@ngrx/store';
import { employeeReducer, EmployeeState } from '../employees/store/reducer/employee.reducer';
import { customerReducer, CustomerState } from '../customers/store/reducers/customer.reducer';
import { CustomerEffects } from '../customers/store/effects/customer.effects';
import { EmployeeEffects } from '../employees/store/effects/employee.effects';
import { customerCommentsReducer, CustomerCommentsState } from '../customers/store/reducers/customer-comments.reducer';
import { EmployeeCustomerCommentsEffects } from '../customers/store/effects/customer-comments.effects';
import { employeeProjectsReducer, EmployeeProjectsState } from '../employees/store/reducer/employee-projects.reducer';
import { EmployeeProjectsEffects } from '../employees/store/effects/employee-projects.effects';
import { searchReducer, SearchState } from '../search/store/reducers/search.reducer';
import { SearchEffects } from '../search/store/effects/search.effects';


export interface UserState {
    employees: EmployeeState;
    customers: CustomerState;
    customerComments: CustomerCommentsState;
    employeeProjects: EmployeeProjectsState;
    search: SearchState;
}


// Create General Reducers
export const reducers: ActionReducerMap<UserState> = {
    employees: employeeReducer,
    customers: customerReducer,
    customerComments: customerCommentsReducer,
    employeeProjects: employeeProjectsReducer,
    search: searchReducer
};


// Create General Effects
export const effects = [
    EmployeeEffects,
    CustomerEffects,
    EmployeeCustomerCommentsEffects,
    EmployeeProjectsEffects,
    SearchEffects
];
