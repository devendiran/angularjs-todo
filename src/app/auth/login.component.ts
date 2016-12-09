import { Component } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import * as $ from "jquery";
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./auth.component.css']
})
export class LoginComponent {
  public user: User;
  public displayFroPassPanel: boolean = false;

  constructor(public router: Router, private authSrv: AuthService){
    this.user = new User('','');
  };

  signin(){
    this.router.navigate(['home'],{});
    this.authSrv.authorizationStatus(true);
  }

  togglePasswordPanel() {
    this.displayFroPassPanel = !this.displayFroPassPanel;
  }

}
