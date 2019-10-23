import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empresa1',
  templateUrl: './empresa1.page.html',
  styleUrls: ['./empresa1.page.scss'],
})
export class Empresa1Page implements OnInit {


  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
    
    });
    console.log('Empresa1: ionViewWillEnter');
  }
  
  ionViewWillEnter(){
    this.route.queryParams.subscribe(params => {
      
    });
    console.log('Empresa1: ionViewWillEnter!');
  }
  
  ngOnInit() {
  }
}