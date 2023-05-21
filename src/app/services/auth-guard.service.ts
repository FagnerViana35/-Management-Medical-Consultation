import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // Usuário autenticado, permitir acesso à rota protegida
      return true;
    } else {
      // Usuário não autenticado, redirecionar para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
