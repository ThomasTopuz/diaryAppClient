import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {
BASE_URL_USER = "http://localhost:3000/api/v1/user/";
BASE_URL_DIARY= "http://localhost:3000/api/v1/diary";

  constructor(
    private readonly http: HttpClient
  ) { }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.BASE_URL_USER}${id}`);
  }

  getDiaryNotes(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'x-auth-token': localStorage.getItem("token")
    });
    return this.http.get(this.BASE_URL_DIARY, {headers: httpHeaders})
  }
}
