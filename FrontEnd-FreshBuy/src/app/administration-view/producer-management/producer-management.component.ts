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

    this.http.get<JSON>("api/Login/Consumer/consult").subscribe(res => {
      let parsing:any = JSON.parse(res[0]);
      for(let i = 0; i < parsing.length; i++){
        this.producers.push(JSON.parse(parsing[i]));
        this.producers[i].delete("username");
        this.producers[i].delete("password");
      }
      alert(this.producers);
     });

  }

}
