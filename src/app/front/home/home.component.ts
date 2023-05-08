import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'
],
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private jwt:JwtHelperService) { }

  ngOnInit(): void {
    const token:any = localStorage.getItem('token');
    const decTok = this.jwt.decodeToken(token);
    if (token != null && decTok.role === 'ADMIN'){
      this.router.navigateByUrl('/admin')
    }else{
      this.router.navigateByUrl('/app')
    }
  }

}
