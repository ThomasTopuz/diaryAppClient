import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  BASE_URL_DIARY = 'http://localhost:3000/api/v1/diary';

  constructor(private readonly http: HttpClient) {}

  getDiaryNotes(): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'x-auth-token': localStorage.getItem('token'),
    });
    return this.http.get(this.BASE_URL_DIARY, { headers: httpHeaders });
  }

  getDiaryNote(_id: String): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'x-auth-token': localStorage.getItem('token'),
    });
    return this.http.get(`${this.BASE_URL_DIARY}/${_id}`, {
      headers: httpHeaders,
    });
  }
  createDiaryNote(content: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'x-auth-token': localStorage.getItem('token'),
    });

    return this.http.post(
      this.BASE_URL_DIARY,
      { content: content },
      { headers: httpHeaders }
    );
  }

  putDiaryNote(content: string, _id: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'x-auth-token': localStorage.getItem('token'),
    });
    return this.http.put(
      `${this.BASE_URL_DIARY}/${_id}`,
      { content: content },
      { headers: httpHeaders }
    );
  }

  deleteDiaryNote(_id: string): Observable<any> {
    const httpHeaders = new HttpHeaders({
      'x-auth-token': localStorage.getItem('token'),
    });
    return this.http.delete(`${this.BASE_URL_DIARY}/${_id}`, {
      headers: httpHeaders,
    });
  }
}
