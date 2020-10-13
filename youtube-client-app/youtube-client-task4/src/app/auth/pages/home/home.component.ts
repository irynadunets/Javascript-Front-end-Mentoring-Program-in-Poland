import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public logged: boolean;

  constructor(public loginService: LoginService, private router: Router) { }

  public ngOnInit(): void {
    this.logged = this.loginService.loggedIn();
    if (this.logged) { this.router.navigate(['main']); }
  }

}
