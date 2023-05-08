import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hidelink!:boolean
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') === null){this.hidelink = true}else{this.hidelink =false}
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['home'])
  }

}
