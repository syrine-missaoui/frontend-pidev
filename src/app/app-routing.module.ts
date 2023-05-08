import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './front/home/home.component';
import { LoginComponent } from './front/login/login.component';
import { RegisterComponent } from './front/register/register.component';
import { AppBodyComponent } from './front/app-body/app-body.component';
import { AdminGuard } from './front/guards/admin.guard';
import { ForgotpasswordComponent } from './front/forgotpassword/forgotpassword.component';
import { NotFoundComponent } from './front/not-found/not-found.component';
import { TestComponentRenderer } from '@angular/core/testing';
import { UserGuard } from './front/guards/user.guard';
import { BackofficeComponent } from './front/backoffice/backoffice.component';
import { ProfileComponent } from './front/profile/profile.component';



const routes: Routes = [
//General empty page and its children FRONT
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'app',component:AppBodyComponent,canActivate:[UserGuard],children:[
    //components of inside the app "product,event,formation..."
    
]},
  {path:'admin',component:BackofficeComponent,canActivate:[AdminGuard]},
{path:'forgotpassword',component:ForgotpasswordComponent},
{path:'profile',component:ProfileComponent},
{path:'notfound',component:NotFoundComponent},
{path:'**',component:NotFoundComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
