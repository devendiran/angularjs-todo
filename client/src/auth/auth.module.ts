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
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    AuthRoute,
    FormsModule,
    SharedModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    EqualValidator,
    ForgetPasswordComponent
  ],
  providers:[{
    provide: AuthService, useClass: AuthService
  },AuthGuard]
})
export class AuthModule {

}
