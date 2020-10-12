import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { back_disable, update_producers } from '../../logic';
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


  updateProducers(){
    update_producers(this.router,this.CS);
  }

  openModal(content){ this.modal.open(content,{size:'sm', centered:true});}

  create_category(category_id, category_name){
    return this.http.post<JSON>("api/admin/categories/add",{"category_id": category_id,"category_name": category_name}).subscribe(res => {
                                  console.log("RES", res);
                                  alert("Categoria creada exitosamente. Actualice la página para poder observar los cambios.");
                                }, error => {
                                  alert("Se produjo un error al crear la categoria en la base de datos. Intente más tarde.");
                                })

  }

  delete_category(category_id){
    return this.http.post<JSON>("api/admin/categories/delete",{"category_id": category_id}).subscribe(res => {
      console.log("RES", res);
      alert("Categoria eliminada exitosamente. Actualice la página para poder observar los cambios.");
    }, error => {
      alert("Se produjo un error al eliminar la categoria en la base de datos. Intente más tarde.");
    })
  }

  update_category(category_id, category_name){
    return this.http.post<JSON>("api/admin/categories/update",{"category_id": category_id,"category_name": category_name}).subscribe(res => {
      console.log("RES", res);
      alert("Categoria actualizada exitosamente. Actualice la página para poder observar los cambios.");
    }, error => {
      alert("Se produjo un error al actualizar la categoria en la base de datos. Intente más tarde.");
    })
  }


  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
