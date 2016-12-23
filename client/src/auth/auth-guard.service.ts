import { Component,Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(protected router: Router, protected authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log(state,'ActivatedRouteSnapshotActivatedRouteSnapshot');
    if (state.url !== '/auth/login' && !this.authService.checkAuthenticationStatus()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}
