import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './AuthService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isLoggedIn!: boolean;
  constructor(private authService: AuthService, private router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    console.log(!!token)
    if(!!token === true) this.isLoggedIn === true

    if (!!token === true) {
      console.log('',this.isLoggedIn)
      return true; // Permite a navegação para a rota
    } else {
      console.log('',this.isLoggedIn)
      // Redireciona para a página de login ou outra rota não autorizada
      return this.router.parseUrl('/login');
    }
  }
}