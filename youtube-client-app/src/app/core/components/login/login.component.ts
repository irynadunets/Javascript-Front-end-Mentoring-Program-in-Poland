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

  constructor(public loginService: LoginService, private router: Router ) {
   this.name = this.loginService.getName ? this.loginService.getName : 'Your Name';
  }

  public ngOnInit(): void { }

  public login(): void {
    this.router.navigate(['auth']);
  }

  public logout(): void {
    this.loginService.logout(this.name);
    this.router.navigate(['']);
  }

}
