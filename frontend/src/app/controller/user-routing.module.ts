import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from '../user/user.component';
import {HomeComponent} from '../user/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: '', component: HomeComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forChild(routes),
      CommonModule
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
