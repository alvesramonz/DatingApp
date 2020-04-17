import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {}; // Responsável por armazenar o Username e Password aqdvindo de "nav.component.html"

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      (next) => {
        console.log('Logged in sucessfully');
      },
      (error) => {
        console.log('Failed to login');
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logget out');
  }
}
