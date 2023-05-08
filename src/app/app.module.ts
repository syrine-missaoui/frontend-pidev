
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './front/header/header.component';
import { LoginComponent } from './front/login/login.component';
import { ForgotpasswordComponent } from './front/forgotpassword/forgotpassword.component';
import { NavbarComponent } from './front/navbar/navbar.component';
import { RegisterComponent } from './front/register/register.component';
import { AppBodyComponent } from './front/app-body/app-body.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { JwtModule } from '@auth0/angular-jwt';
import { FooterComponent } from './front/footer/footer.component';
import { BackofficeComponent } from './front/backoffice/backoffice.component';
import { ProfileComponent } from './front/profile/profile.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    ForgotpasswordComponent,
    NavbarComponent,
    RegisterComponent,
    AppBodyComponent,
    NotFoundComponent,
    FooterComponent,
    BackofficeComponent,
    ProfileComponent,
    
   

 
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule.forRoot([]),
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>{
          return localStorage.getItem('token');
        },
        allowedDomains: ['localhost'],
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
