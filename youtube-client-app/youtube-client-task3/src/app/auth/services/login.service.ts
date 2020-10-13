import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public logined: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public auth(username: string, password: string, logged: boolean): boolean {
    localStorage.setItem('user', username);
    localStorage.setItem('password', password);
    this.logined.emit(logged);
    return true;
  }

  public logout(name: string): void {
    name = 'Your Name';
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    this.logined.emit(false);
  }

  public loggedIn(): boolean {
    return (localStorage.getItem('user') !== null);
  }

  public get getName(): string {
    return localStorage.getItem('user');
  }
}
