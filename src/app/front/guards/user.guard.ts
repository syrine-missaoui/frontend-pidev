import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private jwt: JwtHelperService,private router : Router){}
  canActivate():boolean{

    const decodeedtoken = this.jwt.decodeToken(localStorage.getItem('token') || '');
    const role = decodeedtoken.role;
    if(role === 'USER'){
      return true;
    }else{
      this.router.navigate(['/notfound'])
      alert('you are not allowed to access')
      return false;
    }
    
  }
  
  
}
