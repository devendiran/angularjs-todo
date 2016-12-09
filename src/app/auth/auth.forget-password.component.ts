import { Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output()
  public closePan = new EventEmitter();

  closePannel(event: any) {
    if (!event.target.classList.contains('forget-pass')) {
      this.closePan.emit(null);
    }
  }
  
  ngOnDestroy() {
  }
}
