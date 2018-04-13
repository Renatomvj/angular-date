import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {


  
  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canActivate');
    return this.possuiAcesso();
  }
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canload');
    return this.possuiAcesso();
  }

  private possuiAcesso()
  {
    if (this.authService.usuarioAutenticado()) {
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }

}
