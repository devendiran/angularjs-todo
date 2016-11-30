import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./auth.component.css']
})
export class LoginComponent {
  public user: User;
  constructor(){
    this.user = new User('','');
  };
}
