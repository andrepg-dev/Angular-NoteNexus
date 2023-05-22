import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, map, of } from 'rxjs';
import { DataBaseService } from '../Services/database.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private cookieSvc: CookieService,
    private DBS: DataBaseService,
    private navegar: Router
  ) {}

  redirect(token: boolean) {
    if (!token) {
      this.navegar.navigate(['/authentication']);
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const TokenCookie = this.cookieSvc.check('token');
    this.redirect(TokenCookie);

    // Hacer verificacion del token usando la base de datos del DataService
    return this.DBS.verifyToken().pipe(
      map(() => {
        return true;
      }),
      catchError((err) => {
        console.error('Ha ocurrido un error =>', err);
        this.redirect(false);
        return of(false);
      })
    );
  }
}
