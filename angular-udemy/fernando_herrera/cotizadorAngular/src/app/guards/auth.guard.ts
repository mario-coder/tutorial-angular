import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }

  constructor(private auth: AuthService,
              private router: Router) {
    
  }

  canActivate(): boolean {
    console.log('Guard');
    if(this.auth.estaAutenticado()) {
      return true;
    } else {
      this.router.navigateByUrl('/home');
      return false;
    }
  }
}
