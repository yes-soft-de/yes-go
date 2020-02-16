import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './controller/app-routing.module';

// import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { AppComponent } from './app/app.component';
import { NotFoundComponent } from '../app/user/static/not-found/not-found.component';
import { UserModule } from './user/user.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomSerializer } from './user/store/router-state';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    // StoreModule.forRoot({     // initialize the root application state
    //   router: routerReducer,
    // }),
    StoreModule.forRoot({}),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),  // initialize the root application state
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
