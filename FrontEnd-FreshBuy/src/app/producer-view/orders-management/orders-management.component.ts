import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { back_disable, update_products_for_producer, } from '../../logic';
import * as $ from 'jquery';
import { ComunicationService } from 'src/app/comunication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-management',
  templateUrl: './orders-management.component.html',
  styleUrls: ['./orders-management.component.css']
})
export class OrdersManagementComponent implements OnInit {

  constructor(private modal:NgbModal, private CS: ComunicationService, private router: Router) {  }

  //SE ACTUALIZAN LOS PRODUCTOS A LA HORA DE NAVEGAR HACIA EL COMPONENTE
  updateProducts(){
    update_products_for_producer(this.CS, this.router);
  }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  //INICIALIZA LA VENTANA EMERGENTE (pop-up)
  openModal(content){ this.modal.open(content,{size:'lg', centered:true});}

}

