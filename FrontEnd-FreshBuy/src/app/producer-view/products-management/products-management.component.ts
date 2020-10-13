import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ComunicationService } from '../../comunication.service';

@Component({
  selector: 'app-products-management',
  templateUrl: './products-management.component.html',
  styleUrls: ['./products-management.component.css']
})
export class ProductsManagementComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private CS: ComunicationService, private modal:NgbModal) {  }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

  //VENTANA EMERGENTE (pop-up)
  openModal(content){ this.modal.open(content,{size:'sm', centered:true});}

  //SE COMUNICA CON EL SERVIDOR (Comunication Service) PARA CREAR PRODUCTO
  create_product(product_name, category, category_id, sale_mode, availability, price, photo, producer_id){
    this.CS.createProduct(product_name, category, category_id, sale_mode, availability, price, photo, producer_id);
  }

  //SE COMUNICA CON EL SERVIDOR (Comunication Service) PARA ELIMINAR UN PRODUCTO
  delete_product(product_id){
    this.CS.deleteProduct(product_id).subscribe(res => {
    });
  }

  update_product(product_id, product_name, category, category_id, sale_mode, availability, price, photo, producer_id){}



}
