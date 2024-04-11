import { Injectable } from '@angular/core';

const key = 'token'

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    return localStorage.setItem(key, token);
  }

  deleteToken() {
    localStorage.removeItem(key);
  }

  returnToken() {
    return localStorage.getItem(key) ?? '';
  }

  hasToken() {
    return !!this.returnToken();
  }
}
