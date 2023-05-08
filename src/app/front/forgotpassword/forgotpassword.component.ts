import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotPasswordInput!: string
  constructor(private userService: UserServiceService,private jwtHelper: JwtHelperService,private router:Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token != null){
      this.router.navigateByUrl('/app')
      
    }

    
  }
  forgotpassword(){
    let data = {
      "email" : this.forgotPasswordInput
    }
    
    this.userService.forgotPassword(data).subscribe((response:any)=>{
     //alert(response.message)
     Swal.fire({
      title:response.message,
      imageUrl: 'https://i.gifer.com/GeSE.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })

    },(error) =>{
      if(error.error?.message){
//alert(error.error.message)
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
