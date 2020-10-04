import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})



export class ClientViewComponent implements OnInit {

  
constructor( private location: LocationStrategy){  
  // preventing back button in browser implemented by "Samba Siva"  
  history.pushState(null, null, window.location.href);  
  this.location.onPopState(() => {
  history.pushState(null, null, window.location.href);
  });  
}
  ngOnInit(): void {
  }

}
