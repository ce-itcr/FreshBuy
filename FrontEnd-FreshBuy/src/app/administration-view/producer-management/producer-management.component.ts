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

  //SE ACTUALIZA LA PÁGINA ACTUAL
  selfUpdate(){
    update_producers(this.router, this.CS);
  }

  //SE ACTUALIZAN LAS CATEGORÍAS A LA HORA DE VIAJAR A DICHO COMPONENTE
  updateCategories(){
    update_categories(this.router, this.CS);
  }

  //SE ACTUALIZAN LAS AFILIACIONES A LA HORA DE VIAJAR A DICHO COMPONENTE
  updateAffiliations(){
    update_affiliations(this.router, this.CS);
  }

  //SE INICIALIZA LA VENTANA EMERGENTE (pop-up)
  openModal(content){ this.modal.open(content,{size:'sm', centered:true});}

  //ENVÍA DATOS PARA CREAR UN PRODUCTOR
  create_producer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number,delivery_locations,username, password){
    this.CS.createProducer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number,delivery_locations,username, password);
  }

  //ENVÍA ID PARA ELIMINAR UN PRODUCTOR
  delete_producer(producer_id){
    this.CS.deleteProducer(producer_id);
  }

  //ENVÍA DATOS PARA ACTUALIZA PRODUCTOR MEDIANTE ID
  update_producer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number,delivery_locations, username, password){
     this.CS.updateProducer(person_id, name, last_name, province, canton, district, birth_date, phone_number, sinpe_number,delivery_locations, username, password);
  }


  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

  }
}

