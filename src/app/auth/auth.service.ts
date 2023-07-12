import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login';
  constructor(private http: HttpClient) {}

  login(email: String, senha: String) {
    return this.http.post(this.apiUrl, { email: email, senha: senha });
  }
}
