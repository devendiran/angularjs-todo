import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Subscription }   from 'rxjs/Subscription';
import { Router } from '@angular/router';

import '../../public/css/styles.css';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    "[class.dark-primary-color]":"isUnAuthorized"
  }
})
export class AppComponent implements OnDestroy, OnInit{
  isUnAuthorized = true;
  subscription: Subscription;

  private subAuthStatus = (isAuthorized: boolean) => {
    this.isUnAuthorized = !isAuthorized;
    if (!isAuthorized) {
      this.router.navigate(['auth/login']);
    }
  }
  ngOnInit(){
     //called after the constructor and called  after the first ngOnChanges()
  }
  constructor(private authSrv: AuthService, private router: Router) {
    this.subscription = authSrv.isAuthorized$.subscribe(this.subAuthStatus);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
