import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from '../user/static/not-found/not-found.component';


const routes: Routes = [
  {path: '', loadChildren: () => import('../user/user.module').then(m => m.UserModule)},
  {path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'}),
      // CommonModule
  ],
    exports: [RouterModule]
})
export class AppRoutingModule { }

