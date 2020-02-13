import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../user/home/home.component';
import { UserComponent } from '../user/user.component';
import { EmployeeListComponent } from '../user/employees/component/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from '../user/employees/component/employee-details/employee-details.component';
import { CustomerListComponent } from '../user/customers/component/customer-list/customer-list.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: '', component: HomeComponent},
      // {path: 'employees', component: EmployeeListComponent},
      {path: 'employee/:id', component: EmployeeDetailsComponent},
      // {path: 'customers', component: CustomerListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
