import { Component } from '@angular/core';
import { User } from './user';
import {AuthService} from './auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./auth.component.css']
})
export class SignUpComponent {
  public user: User;
  constructor(private authSrv: AuthService) {
    this.user = new User('','');
  };

  public signUp(user: any) {
  	console.log(user, '........hey');
    this.authSrv.signup(this.user)
   .subscribe((response: any) => {
   	console.log('...............success', response);
   }, (error: any) => {
   	console.log('...............Sorry');
   });
  }
}
