import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empresa2',
  templateUrl: './empresa2.page.html',
  styleUrls: ['./empresa2.page.scss'],
})
export class Empresa2Page implements OnInit {


  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
    
    });
    console.log('Empresa2: ionViewWillEnter');
  }
  
  ionViewWillEnter(){
    this.route.queryParams.subscribe(params => {
      
    });
    console.log('Empresa2: ionViewWillEnter!');
  }
  
  ngOnInit() {
  }

}

export class SegmentExample {
  segmentChanged(ev: any) {
    console.log('Empresa2', ev);
  }
}


