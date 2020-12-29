import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  BASE_URL = 'https://mysterious-taiga-12627.herokuapp.com/api/v1/user';
  constructor(private http: HttpClient) {}

  register(payload): Observable<any> {
    //returns a JWT in the header: "x-auth-token"
    return this.http.post(`${this.BASE_URL}/register`, payload, {
      observe: 'response',
    });
  }

  login(payload): Observable<any> {
    return this.http.post(`${this.BASE_URL}/auth`, payload, {
      observe: 'response',
      responseType: 'json',
    });
  }

  isLogged(): boolean {
    const helper = new JwtHelperService();
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('false');
      return false;
    }

    return !helper.isTokenExpired(token);
  }

  getCurrentUser(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'x-auth-token': localStorage.getItem('token'),
    });
    return this.http.get(`${this.BASE_URL}/me`, { headers: httpHeaders });
  }
}
