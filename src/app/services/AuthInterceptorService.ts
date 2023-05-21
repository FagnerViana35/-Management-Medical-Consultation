import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    if (token) {
      const headers = new HttpHeaders().set('Token_Authorization', `Bearer ${token}`);
      request = request.clone({ headers });
      console.log("headers",headers)
    }

    return next.handle(request);
  }
}
