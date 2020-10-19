import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LocationStrategy } from '@angular/common';
import { back_disable, update_producers, update_categories, update_affiliations } from '../../logic'
import { ComunicationService } from 'src/app/comunication.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  constructor(private location: LocationStrategy, private CS: ComunicationService, private router: Router, private modal:NgbModal) {
    back_disable(this.location);
  }
  //SE ACTUALIZAN LOS PRODUCTOS A LA HORA DE VIAJAR A DICHO COMPONENTE
  updateProducers(){
    update_producers(this.router, this.CS);
  }

  //SE ACTUALIZAN LAS AFILIACIONES A LA HORA DE VIAJAR A DICHO COMPONENTE
  updateAffiliations(){
    update_affiliations(this.router, this.CS);
  }

  //SE ACTUALIZAN LAS CATEGORÍAS A LA HORA DE VIAJAR A DICHO COMPONENTE
  updateCategories(){
    update_categories(this.router, this.CS);
  }
  refreshData(){}

  //SE INICIALIZA LA VENTANA EMERGENTE (pop-up)
  openModal(content){ this.modal.open(content,{size:'sm', centered:true});}

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}
