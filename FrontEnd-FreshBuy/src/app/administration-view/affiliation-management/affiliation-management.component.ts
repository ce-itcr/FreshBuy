import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { ComunicationService } from 'src/app/comunication.service';
import { back_disable, update_producers } from '../../logic'

@Component({
  selector: 'app-affiliation-management',
  templateUrl: './affiliation-management.component.html',
  styleUrls: ['./affiliation-management.component.css']
})
export class AffiliationManagementComponent implements OnInit {

  constructor(private location: LocationStrategy, private CS: ComunicationService, private router: Router) {
    back_disable(this.location); 
  }

  updateProducers(){
    update_producers(this.router, this.CS);
  }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}
