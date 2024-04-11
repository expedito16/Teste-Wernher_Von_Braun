import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import  {jwtDecode} from 'jwt-decode';
import { User } from '../user';

interface AuthResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/lista-usuarios';
  accessToken: string = '';
  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) {
    // if(this.tokenService.hasToken()) {
    //   this.decodeJWT();
    // }
  }

  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  createNewUser(newUser: any): Observable<User[]> {
    return this.http.post<User[]>(this.url, newUser);
  }

  // private decodeJWT() {
  //   const token = this.tokenService.hasToken();
  //   const user = jwtDecode(token) as User;
  //   this.userSubject.next(user);
  // }

  returnUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    // this.decodeJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next(null);
  }

  isLoggedIn() {
    return this.tokenService.hasToken();
  }
}
