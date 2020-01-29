import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents  } from './controller/app-routing.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
// import { NgxJsonLdModule } from '@ngx-lite/json-ld';

import { AppComponent } from './app/app.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
