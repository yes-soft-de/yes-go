import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'angular-bootstrap-md';
import { RatingModule } from 'ng-starrating';
// import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from '../controller/user-routing.module';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

import { EmployeeListComponent } from './employees/component/employee-list/employee-list.component';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employees/component/employee-details/employee-details.component';
import { EmployeeShortDetailComponent } from './employees/component/employee-short-detail/employee-short-detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './search/component/search/search.component';
import { UserComponent } from './user.component';
import { CustomerListComponent } from './customers/component/customer-list/customer-list.component';
import { EmployeeKnowledgeComponent } from './employees/component/employee-knowledge/employee-knowledge.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store/app-state';
import {EmployeesGuard} from './employees/guards/employees.guard';
import {EmployeeExistGuard} from './employees/guards/employee-exist.guard';
import { CustomersGuards } from './customers/guards/customers.guard';


@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeListComponent,
    HomeComponent,
    EmployeeDetailsComponent,
    EmployeeShortDetailComponent,
    SearchComponent,
    CustomerListComponent,
    EmployeeKnowledgeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CarouselModule,
    RatingModule,
    // HttpClientModule,
    FormsModule,
    NgxJsonLdModule,
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [
    EmployeesGuard,
    CustomersGuards, 
    EmployeeExistGuard,
  ]
})
export class UserModule { }
