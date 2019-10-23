import { Component } from '@angular/core';
import { Router, NavigationError, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(private router: Router,) { }

    irParaEmpresa1(){
    this.router.navigate(['empresa1']);
    let extras: NavigationExtras = {
    };
    this.router.navigate(['/empresa1'], extras)
  }
  irParaEmpresa2(){
    this.router.navigate(['empresa2']);
    let extras: NavigationExtras = {
    };
    this.router.navigate(['/empresa2'], extras)
  }
  irParaEmpresa3(){
    this.router.navigate(['empresa3']);
    let extras: NavigationExtras = {
    };
    this.router.navigate(['/empresa3'], extras)
  }


};
