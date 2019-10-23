import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresa3',
  templateUrl: './empresa3.page.html',
  styleUrls: ['./empresa3.page.scss'],
})
export class Empresa3Page implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
    
    });
    console.log('Empresa3: ionViewWillEnter');
  }
  
  ionViewWillEnter(){
    this.route.queryParams.subscribe(params => {
      
    });
    console.log('Empresa3: ionViewWillEnter!');
  }
  
  ngOnInit() {
  }
}