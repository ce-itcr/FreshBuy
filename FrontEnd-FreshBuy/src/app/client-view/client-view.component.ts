import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { back_disable } from '../logic'


@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})



export class ClientViewComponent implements OnInit {

  
constructor( private location: LocationStrategy){  
  back_disable(this.location); 
}
  ngOnInit(): void {
  }

}
