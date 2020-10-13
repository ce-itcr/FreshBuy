import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { back_disable, update_producers, update_affiliations } from '../../logic';
import * as $ from 'jquery';
import { ComunicationService } from 'src/app/comunication.service';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  constructor(private location: LocationStrategy, private router: Router, private CS: ComunicationService, private modal:NgbModal, private http: HttpClient) {
    back_disable(this.location);
  }

  //SE ACTUALIZAN LOS PRODUCTOS A LA HORA DE VIAJAR A DICHO COMPONENTE
  updateProducers(){
    update_producers(this.router,this.CS);
  }

  //SE ACTUALIZAN LAS AFILIACIONES A LA HORA DE VIAJAR A DICHO COMPONENTE
  updateAffiliations(){
    update_affiliations(this.router, this.CS);
  }

  //SE INICIALIZA LA VENTANA EMERGENTE (pop-up)
  openModal(content){ this.modal.open(content,{size:'sm', centered:true});}

  //SE ENVÍAN LOS DATOS NECESARIOS PARA CREAR UNA NUEVA CATEGORÍA
  create_category(category_id, category_name){
    this.CS.createCategory(category_id,category_name)
  }

  //SE ENVÍA ID PARA ELIMINAR UNA CATEGORÍA
  delete_category(category_id){
    this.CS.deleteCategory(category_id);
  }

  //SE ENVÍAN LOS DATOS NECESARIOS PARA ACTUALIZAR UNA CATEGORÍA MEDIANTE EL ID
  update_category(category_id, category_name){
    this.CS.updateCategory(category_id, category_name);
  }


  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
