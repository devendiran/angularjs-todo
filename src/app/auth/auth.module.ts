import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AuthRoute } from './auth.router';
import { AuthComponent} from './auth.component';
import { LoginComponent } from "./login.component";
import { SignUpComponent } from "./signup.component";

@NgModule({
  imports: [
    BrowserModule,
    AuthRoute,
    FormsModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent
  ]
})
export class AuthModule {

}
