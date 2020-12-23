import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
BASE_URL = "http://localhost:3000/api/v1/user";
  constructor(private httpClient: HttpClient) { }

  register(payload){
    //returns a JWT in the header: "x-auth-token"
    return this.httpClient.post(`${this.BASE_URL}/register`, payload, {observe: 'response'});
  }

  login(payload) {
    return this.httpClient.post(`${this.BASE_URL}/auth`, payload, {observe: 'response', responseType:'json'});
  }

  isLogged(): boolean{
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');

    if(!token){
      console.log("false")
      return false;
    }

    return !helper.isTokenExpired(token);
  }

}
