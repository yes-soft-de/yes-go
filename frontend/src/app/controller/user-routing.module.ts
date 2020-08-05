import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../user/home/home.component';
import { UserComponent } from '../user/user.component';
import { EmployeesGuard } from '../user/employees/guards/employees.guard';
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
