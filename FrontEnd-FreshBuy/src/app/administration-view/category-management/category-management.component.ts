import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { back_disable, update_producers } from '../../logic';
import * as $ from 'jquery';
import { ComunicationService } from 'src/app/comunication.service';
import { Router } from '@angular/router';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {

  constructor(private location: LocationStrategy, private CS: ComunicationService, private router: Router) {
    back_disable(this.location); 
  }

  updateProducers(){
    update_producers(this.router,this.CS);
  }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}
