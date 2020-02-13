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
import { EmployeeShortDetailComponent } from './employee/component/employee-short-detail/employee-short-detail.component';
import { SearchComponent } from './search/component/search/search.component';
import { EmployeeDetailComponent } from './employee/component/employee-detail/employee-detail.component';
import { EmployeeKnowledgeComponent } from './employee/component/employee-knowledge/employee-knowledge.component';
import {NgxJsonLdModule} from '@ngx-lite/json-ld';



@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CustomerListComponent,
    EmployeeListComponent,
    EmployeeShortDetailComponent,
    SearchComponent,
    EmployeeDetailComponent,
    EmployeeKnowledgeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CarouselModule,
    RatingModule,
    NgxJsonLdModule
  ]
})
export class UserModule { }
