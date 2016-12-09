import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AuthRoute } from './auth.router';
import { AuthComponent} from './auth.component';
import { LoginComponent } from "./login.component";
import { SignUpComponent } from "./signup.component";
import { ForgetPasswordComponent} from './auth.forget-password.component';
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth-guard.service";
import { EqualValidator } from "./auth.equal-validator.directive";
import { ClickOutSide } from './auth.click-out.directive';

@NgModule({
  imports: [
    BrowserModule,
    AuthRoute,
    FormsModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    EqualValidator,
    ForgetPasswordComponent,
    ClickOutSide
  ],
  exports:[
    ClickOutSide
  ],
  providers:[{
    provide: AuthService, useClass: AuthService
  },AuthGuard]
})
export class AuthModule {

}
