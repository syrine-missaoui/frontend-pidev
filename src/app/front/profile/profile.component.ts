import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import Swal from 'sweetalert2';
import { UpdateProfile } from '../models/update-profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  jsonData!: any
  oldPassword!: string
  newPassword!: string
  hidePassword = true
  confirmPassword!:string

  updateDetails: UpdateProfile = new UpdateProfile();

  constructor(private userService: UserServiceService,private jwt : JwtHelperService) { }

  ngOnInit(): void {
      const token : any = localStorage.getItem('token')
      const decodedToken = this.jwt.decodeToken(token);
      const id = decodedToken.userId
      this.userService.getUserDetails(id).subscribe((response:any)=>{
        this.jsonData = response
      },(error)=>{
        if(error.error){
          Swal.fire(
            'Bad Request',
            error.error,
            'error'
          )
        }
      })
  }
  changePass(){
    const data = {
      "oldPassword" : this.oldPassword,
      "newPassword" : this.newPassword
    }
    if(this.newPassword !== this.confirmPassword){
      Swal.fire(
        'Bad Request',
        'Password don\'t match',
        'error'
      )
    }else{
      this.userService.changePassword(data).subscribe((response:any)=>{
        Swal.fire(
          response.message,
          'success'
        )
      },(error)=>{
        if(error.error?.message){
          Swal.fire(
            'Bad Request',
             error.error.message,
            'error'
          )
        }
      })
    }
  }
  updateProfile(){
    const token : any = localStorage.getItem('token')
    const decodedToken = this.jwt.decodeToken(token);
    const iduser = decodedToken.userId
    console.log(this.updateDetails)
    console.log(iduser)
    this.userService.updateProfile(this.updateDetails,iduser).subscribe((response:any)=>{
      Swal.fire(
        'Success !',
         response.message,
        'success'
      )
    },(error)=>{
      if(error.error?.message){
        Swal.fire(
          'ERROR !',
           error.error.message,
          'error'
        )
      }
    })
  }


}
