import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './controller/app-routing.module';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';

// import { NgxJsonLdModule } from '@ngx-lite/json-ld';
import { AppComponent } from './app/app.component';
import { NotFoundComponent } from './user/static/not-found/not-found.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {StoreRouterConnectingModule, RouterStateSerializer} from '@ngrx/router-store';
import {CustomSerializer, reducers} from './app/store/router-state';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // StoreModule.forRoot({     // initialize the root application state
    //   router: routerReducer,
    // }),
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),  // initialize the root application state
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument(),
    NgxPageScrollCoreModule.forRoot({duration: 500})
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule { }
