import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-producer-management',
  templateUrl: './producer-management.component.html',
  styleUrls: ['./producer-management.component.css']
})

export class ProducerManagementComponent implements OnInit {

  constructor(private http: HttpClient) {
  }
  
  producers:any[];
  

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    this.http.post<JSON>("api/Login/Consumer/consult", "").subscribe(res => {
      let parsing:any = JSON.parse(res[0]);
      for(let i = 0; i < parsing.length; i++){
        this.producers[i] = JSON.parse(parsing[i]);
      }
     });

  }

}
