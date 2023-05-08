import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/login-credentials';
import { RegisterCredentials } from '../models/register-credentials';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl = "http://localhost:8082"

  constructor(private http: HttpClient) { }

  login(data: LoginCredentials){
    return this.http.post(`${this.baseUrl}/user/login`,data,{headers:new HttpHeaders({ 'Content-Type' : 'application/json'})})
  }
  register(data: RegisterCredentials){
    return this.http.post(`${this.baseUrl}/user/signup`,data,{headers:new HttpHeaders({ 'Content-Type' : 'application/json'})})
  }
  forgotPassword(data: any){
    return this.http.post(`${this.baseUrl}/user/forgotpassword`,data,{headers:new HttpHeaders({ 'Content-Type' : 'application/json'})})
  }
  getUsers(){
    const token = localStorage.getItem('token');
    return this.http.get(`${this.baseUrl}/user/getUsers`,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
  activateAccount(data: any){
    const token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/user/accountdone`,data,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
  deleteUser(id:string){
    const token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/user/deleteUser/${id}`,null,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
  changeRole(data:any){
    const token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/user/Updaterole`,data,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
  getUserDetails(id: string){
    const token = localStorage.getItem('token');
    return this.http.get(`${this.baseUrl}/user/get/${id}`,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
  changePassword(data:any){
    const token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/user/changePassword`,data,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
  updateProfile(data:any,id:string){
    const token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/user/updateProfile/${id}`,data,{headers:new HttpHeaders({'Content-Type' : 'application/json', 'Authorization' : `Bearer ${token}`})})
  }
}
