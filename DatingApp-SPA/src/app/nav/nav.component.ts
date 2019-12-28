import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(private authServices: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authServices.login(this.model).subscribe(next => {
      console.log('Login seccessfully');
    }, error => {
      console.log('Failed to login');
    });
  }

  LoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  LogOut() {
    localStorage.removeItem('token');
    console.log('Logged out');
  }

}
