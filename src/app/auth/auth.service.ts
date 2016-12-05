import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class AuthService {
  // Observable string sources
  private isAuthorizedSource = new Subject<boolean>();
  private isAuthenticated = false;
  // Observable string streams
  isAuthorized$ = this.isAuthorizedSource.asObservable();
  // Service message commands
  authorizationStatus(isAuth: boolean) {
    this.isAuthenticated = isAuth;
    this.isAuthorizedSource.next(isAuth);
  }

  getAuthenticationStatus() {
    return this.isAuthenticated;
  }
}
