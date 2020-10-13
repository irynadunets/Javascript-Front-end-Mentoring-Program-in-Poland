import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../../../auth/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public name: string;
  public logined: boolean;

  constructor(public loginService: LoginService, private router: Router ) {
   this.name = this.loginService.getName ? this.loginService.getName : 'Your Name';
   this.logined = this.loginService.logined.value;
  }

  public ngOnInit(): void { }

  public login(): void {
    this.logined = !this.logined;
    this.router.navigate(['auth']);
  }

  public logout(): void {
    this.logined = !this.logined;
    this.loginService.logout(this.name);
    this.router.navigate(['']);
  }

}
