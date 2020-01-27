import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(public authServices: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login() {
    this.authServices.login(this.model).subscribe(next => {
      this.alertify.seccess('logged in seccessfully');
    }, error => {
      this.alertify.error(error);
    });
  }

  LoggedIn() {
    return this.authServices.loggedIn();
  }

  LogOut() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
  }
}
