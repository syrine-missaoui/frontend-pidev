import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { RegisterCredentials } from '../models/register-credentials';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
]
})
export class RegisterComponent implements OnInit {

  mindate="1900-01-01"
  maxdate="2035-12-30"
 


  signUpCredentials:RegisterCredentials = new RegisterCredentials();
  hidden = true;

  constructor(private userService: UserServiceService,private jwtHelper: JwtHelperService,private router:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token != null){
      if(this.jwtHelper.decodeToken(token).role == 'ADMIN'){this.router.navigateByUrl('/admin')}
      else {this.router.navigateByUrl('/user')}
    }
  }
  register(){
    if(this.signUpCredentials.password !== this.signUpCredentials.confirmPassword){
      // alert('password don\'t match')
      // Swal.fire(
      //   'password don\'t match',
      //   'That thing is still around?',
      //   'error'
        
      // )
      Swal.fire({
        position: 'top-end',
       title: 'password don\'t match',
        icon: 'error',
        showConfirmButton: false,
        timer: 1500
      })
  
    }else{
      this.userService.register(this.signUpCredentials).subscribe((response:any) =>{
        // alert(response.message)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: response.message,
          showConfirmButton: false,
          timer: 1500
        })
        // this.signUpCredentials.confirmPassword = ''
        // this.signUpCredentials.password = ''
        // this.signUpCredentials.contactNumber = ''
        // this.signUpCredentials.dateOfBirth = ''
        // this.signUpCredentials.email = ''
        // this.signUpCredentials.firstName = ''
        // this.signUpCredentials.lastName = ''
      },(error) =>{
        if(error.error?.message){
          // alert(error.error.message)
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: error.error.message,
            showConfirmButton: false,
            timer: 1500
          })


        }

      })
    }
  }

}
