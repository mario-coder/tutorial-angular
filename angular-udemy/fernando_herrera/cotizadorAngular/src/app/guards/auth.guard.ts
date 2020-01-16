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
    return true
    // if(this.auth.estaAutenticado()) {
    //   console.log("---: autenticado = TRUE")
    //   return true;
    // } else {
    //   console.log("---: autenticado = FALSE")
    //   this.router.navigateByUrl('/home');
    //   return false;
    // }
  }
}
