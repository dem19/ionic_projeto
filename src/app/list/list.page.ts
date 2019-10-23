import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {


  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
    
    });
    console.log('List: ionViewWillEnter');
  }
  
  ionViewWillEnter(){
    this.route.queryParams.subscribe(params => {
      
    });
    console.log('List: ionViewWillEnter!');
  }
  
  ngOnInit() {
  }


}



