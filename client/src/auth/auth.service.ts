import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from './user';
import { Http, Response,Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
  // Observable string sources
  private isAuthorizedSource = new Subject<boolean>();
  private isAuthenticated = false;
  private sigupUrl = "/api/users";
  private loginUrl = "/api/users/login";
  // Observable string streams
  isAuthorized$ = this.isAuthorizedSource.asObservable();
  // Service message commands
  authorizationStatus(isAuth: boolean) {
    this.isAuthenticated = isAuth;
    this.isAuthorizedSource.next(isAuth);
  }
  
  constructor(private http: Http) {

  }
  
  checkAuthenticationStatus(): boolean {
    const token = window.localStorage.getItem('authToken');
    this.authorizationStatus(!!token);
    return this.isAuthenticated;
  }

  getAuthenticationStatus(): boolean {
    return this.isAuthenticated;
  }

  signup(user: User): Observable<User> {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    return this.http.post(this.sigupUrl, user)
      .map((res: Response) => res.json())
      .catch((error: Response | any) => { 
        console.log(error, 'Error occured while registering users');
        return Observable.throw(error);
      });
  }

  login(user: User): Observable<User> { 
    return this.http.post(this.loginUrl, user)
      .map((res: Response) => {
        let data = res.json();
        window.localStorage.setItem('authToken', data.id);
        return data;
      })
      .catch((error: Response | any) => { 
        console.log(error, 'Error occured while registering users');
        return Observable.throw(error);
      });
  }
}
