import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<boolean>(`${this.apiUrl}/api/v1/auth/authenticate`, credentials);
  }
}
