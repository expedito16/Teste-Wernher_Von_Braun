import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/lista-usuarios';

  constructor(
    private http: HttpClient
  ) { }

  listUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  createNewUser(newUser: any): Observable<any> {
    return this.http.post(this.url, newUser);
  }
}
