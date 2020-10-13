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

  openModal(content){ this.modal.open(content,{size:'sm', centered:true});}

  updateProducers(){
    update_producers(this.router, this.CS);
  }

  updateCategories(){
    update_categories(this.router, this.CS);
  }

  deny_affiliation(producer_id){
    this.CS.denyAffiliation(producer_id);
  }

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
