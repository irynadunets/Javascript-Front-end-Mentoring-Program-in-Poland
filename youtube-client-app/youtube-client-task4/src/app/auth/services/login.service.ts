import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public logined: BehaviorSubject<boolean>;

  constructor() {
    const isLoggedIn: boolean = localStorage.getItem('user') !== null;
    this.logined = new BehaviorSubject(isLoggedIn);
  }

  public auth(username: string, password: string, logged: boolean): boolean {
    localStorage.setItem('user', username);
    localStorage.setItem('password', password);
    this.logined.next(true);
    return true;
  }

  public logout(name: string): void {
    name = 'Your Name';
    localStorage.removeItem('user');
    localStorage.removeItem('password');
    this.logined.next(false);
  }

  public loggedIn(): boolean {
    return (localStorage.getItem('user') !== null);
  }

  public get getName(): string {
    return localStorage.getItem('user');
  }
}
