import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../user/home/home.component';
import { UserComponent } from '../user/user.component';
import { EmployeeDetailsComponent } from '../user/employees/component/employee-details/employee-details.component';
import { EmployeesGuard } from '../user/employees/guards/employees.guard';
import { EmployeeExistGuard } from '../user/employees/guards/employee-exist.guard';
import { CustomersGuards } from '../user/customers/guards/customers.guard';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        canActivate: [EmployeesGuard, CustomersGuards],
        component: HomeComponent
      },
      {
        path: 'employee/:id',
        canActivate: [EmployeeExistGuard],
        component: EmployeeDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
