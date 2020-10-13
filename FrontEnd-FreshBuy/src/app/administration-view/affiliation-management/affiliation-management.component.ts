import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComunicationService } from 'src/app/comunication.service';
import { back_disable, update_producers, update_categories } from '../../logic'

@Component({
  selector: 'app-affiliation-management',
  templateUrl: './affiliation-management.component.html',
  styleUrls: ['./affiliation-management.component.css']
})
export class AffiliationManagementComponent implements OnInit {

  constructor(private location: LocationStrategy, private CS: ComunicationService, private router: Router,
              private http: HttpClient, private modal:NgbModal) {
    back_disable(this.location);
  }

  //INICIALIZA LA VENTANA EMERGENTE (pop-up)
  openModal(content){ this.modal.open(content,{size:'sm', centered:true});}

  //SE ACTUALIZAN LOS PRODUCTOS A LA HORA DE VIAJAR A DICHO COMPONENTE
  updateProducers(){
    update_producers(this.router, this.CS);
  }

  //SE ACTUALIZAN LAS CATEGORÍAS A LA HORA DE VIAJAR A DICHO COMPONENTE
  updateCategories(){
    update_categories(this.router, this.CS);
  }

  //SE DENIEGA UNA AFILIACIÓN MEDIANTE ID
  deny_affiliation(producer_id){
    this.CS.denyAffiliation(producer_id);
  }

  //SE ACEPTA UNA AFILIACIÓN MEDIANTE ID
  accept_affiliation(producer_id){
    this.CS.acceptAffiliation(producer_id);
  }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}
