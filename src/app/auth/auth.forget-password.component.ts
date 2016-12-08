import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'forget-password',
  templateUrl: './auth.forget-password.component.html',
  styleUrls: ['./auth.forget-password.component.css'],
  host: {
    "[class.dark-primary-color]":"isUnAuthorized"
  }
})
export class ForgetPasswordComponent implements OnDestroy, OnInit {
  public user: User;
  ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges()
  }
  constructor() {
    this.user = new User('','');
  }

  ngOnDestroy() {
  }
}
