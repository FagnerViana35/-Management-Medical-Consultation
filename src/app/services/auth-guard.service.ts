import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // const usuarioLogado = this.authService.getUsuarioLogado();
    // if (usuarioLogado && usuarioLogado.temPermissaoPara(route.url)) {
    //   return true;
    // } else {
    //   // Redireciona o usuário para a página de login caso não esteja autenticado
    //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  // }
}
