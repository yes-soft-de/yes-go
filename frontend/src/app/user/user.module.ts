import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from '../controller/user-routing.module';
import { RatingModule } from 'ng-starrating';
import { CarouselModule } from 'angular-bootstrap-md';

import { UserComponent } from './user.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CustomerListComponent } from './customer/component/customer-list/customer-list.component';
import { EmployeeListComponent } from './employee/component/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/component/employee-detail/employee-detail.component';
import { SearchComponent } from './search/component/search/search.component';



@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerListComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CarouselModule,
    RatingModule
  ]
})
export class UserModule { }
