
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class SaveService {
  private apiUrl = 'http://localhost:8080';
  errorMessage!: string;

  constructor(private http: HttpClient) { }

  signup(userData: any): Observable<Object> {
    return this.http.post(`${this.apiUrl}/api/v1/auth/register`, userData);
  }

}
