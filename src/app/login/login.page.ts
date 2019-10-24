import { Component, OnInit } from '@angular/core';
import { Router, NavigationError, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {


  constructor(private router: Router,) { }

  irParaHome(){
    this.router.navigate(['home']);
    let extras: NavigationExtras = {
    };
    this.router.navigate(['/home'], extras)
  }
}