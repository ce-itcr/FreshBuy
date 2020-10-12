import { Component, OnInit } from '@angular/core';
import { back_disable, update_producers, update_categories } from '../../logic';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ComunicationService } from 'src/app/comunication.service';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-producer-management',
  templateUrl: './producer-management.component.html',
  styleUrls: ['./producer-management.component.css']
})

export class ProducerManagementComponent implements OnInit {

  constructor(private location: LocationStrategy, private router: Router, private CS: ComunicationService) {
    back_disable(this.location); 
  }
  
  selfUpdate(){
    update_producers(this.router,this.CS);
  }

  updateCategories(){
    update_categories(this.router, this.CS);
  }

  ngOnInit(): void {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

  }
}
