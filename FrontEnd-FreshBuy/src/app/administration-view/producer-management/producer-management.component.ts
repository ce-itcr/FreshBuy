import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { ClientsDataTableDataSource } from 'src/app/data-tables/clients-data-table/clients-data-table-datasource';

declare global {
  var producers: any[];
}

@Component({
  selector: 'app-producer-management',
  templateUrl: './producer-management.component.html',
  styleUrls: ['./producer-management.component.css']
})

export class ProducerManagementComponent implements OnInit {

  producerList: any[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    this.http.get<string[]>("api/Admin/Producers/getProducers").subscribe(res => {
      //var parsedRes = JSON.parse(res.toString());
      //alert(res[0]);
      //alert(res.toString())
      for (let i=0;i<res.length;i++){
        this.producerList.push(JSON.parse(res[i]))
        delete this.producerList[i]["username"]
        delete this.producerList[i]["password"]
      }
      //globalThis.producers = JSON.parse(res)
      //this.producerList.push(JSON.parse(res.toString()))
      globalThis.producers = this.producerList;
      alert
      new ClientsDataTableDataSource();
      //globalThis.producers = JSON.parse(res.toString());
     });

  }

}
