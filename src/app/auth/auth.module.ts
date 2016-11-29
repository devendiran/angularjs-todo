import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AuthRoute } from './auth.router';
import { AuthComponent} from './auth.component';
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    BrowserModule,
    AuthRoute
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ]
})
export class AuthModule {

}
