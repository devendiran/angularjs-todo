import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./auth.component.css']
})
export class SignUpComponent {
  public user: User;
  constructor(){
    this.user = new User('','');
  };

  makeSense() {
  	console.log(this.user,'............user');
  }
}
