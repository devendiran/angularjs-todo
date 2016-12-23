import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { User } from './user';
import { Http, Response,Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
  // Observable string sources
  private isAuthorizedSource = new Subject<boolean>();
  private isAuthenticated = false;
  private sigupUrl = "/api/users"
  // Observable string streams
  isAuthorized$ = this.isAuthorizedSource.asObservable();
  // Service message commands
  authorizationStatus(isAuth: boolean) {
    this.isAuthenticated = isAuth;
    this.isAuthorizedSource.next(isAuth);
  }
  
  constructor(private http: Http) {

  }

  getAuthenticationStatus() {
    return this.isAuthenticated;
  }

  signup(user: User): Observable<User> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.sigupUrl, user, options)
      .map((res: Response) => res.json())
      .catch((error: Response | any) => { 
        console.log(error, 'Error occured while registering users');
        return Observable.throw(error);
      });
  }
}
