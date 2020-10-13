import { Component, OnInit } from '@angular/core';
import { back_disable, update_producers, update_categories, update_affiliations } from '../../logic';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ComunicationService } from 'src/app/comunication.service';
import { LocationStrategy } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { last } from 'rxjs/operators';

@Component({
  selector: 'app-producer-management',
  templateUrl: './producer-management.component.html',
  styleUrls: ['./producer-management.component.css']
})

export class ProducerManagementComponent implements OnInit {

  constructor(private location: LocationStrategy, private router: Router, private CS: ComunicationService, private modal:NgbModal, private http: HttpClient) {
    back_disable(this.location);
  }

  selfUpdate(){
    update_producers(this.router, this.CS);
  }

  updateCategories(){
    update_categories(this.router, this.CS);
  }

  updateAffiliations(){
    update_affiliations(this.router, this.CS);
  }

  openModal(content){ this.modal.open(content,{size:'sm', centered:true});}

  create_producer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number,delivery_locations,username, password){
    return this.http.post<JSON>("api/login/producer/add",{"person_id":person_id,"name":name,"last_name":last_name,"province":province,"canton":canton,"district":district,"bith_date":birth_date,
                                                            "phone_number":phone_number,"sinpe_number":sinpe_number,"delivery_locations": ["Cartago","Dulce Nombre"], "username": username, "password": password}).subscribe(res => {
                                  console.log("RES", res);
                                })

  }

  delete_producer(producer_id){
    return this.http.post<JSON>("api/admin/producer/delete",{"producer_id": producer_id}).subscribe(res => {
      console.log("RES", res);
    })
  }

  update_producer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number,delivery_locations, username, password){
     return this.http.post<JSON>("api/login/producer/update",{"person_id":person_id,"name":name,"last_name":last_name,"province":province,"canton":canton,"district":district,"bith_date":birth_date,
                                                            "phone_number":phone_number,"sinpe_number":sinpe_number,"delivery_locations": ["Cartago","Dulce Nombre"], "username": username, "password": password}).subscribe(res => {
                                  console.log("RES", res);
                                })
  }


  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

  }
}
