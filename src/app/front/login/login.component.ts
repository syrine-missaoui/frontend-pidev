import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../models/login-credentials';
import { UserServiceService } from '../service/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Logininfo : LoginCredentials = new LoginCredentials();
  hidden:Boolean =true;

  constructor(private userService: UserServiceService,private jwtHelper: JwtHelperService,private router:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token != null){
      this.router.navigateByUrl('/app')
    }
  }

  login(){
    this.userService.login(this.Logininfo).subscribe((response: any) =>{
      
      const token = response.token
      localStorage.setItem('token',token)
      const decodedToken = this.jwtHelper.decodeToken(token)
      const role = decodedToken.role;
      if(role === 'ADMIN'){
        this.router.navigate(['/admin'])
      }else{
        this.router.navigate(['/user'])
      }

    },(error) =>{
      if(error.error?.message){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: error.error.message,
          showConfirmButton: false,
          timer: 1500
        })
       // console.log(error.error.message)
      }
    })
  }

}
