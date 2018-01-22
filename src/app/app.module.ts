import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './shared/services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {Auth} from './shared/services/auth.service';
import {SystemModule} from './system/system.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    HttpClientModule,
    SystemModule
  ],
  providers: [UserService, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
