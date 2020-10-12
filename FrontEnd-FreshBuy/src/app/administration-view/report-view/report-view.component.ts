import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LocationStrategy } from '@angular/common';
import { back_disable, update_producers, update_categories } from '../../logic'
import { ComunicationService } from 'src/app/comunication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  constructor(private location: LocationStrategy, private CS: ComunicationService, private router: Router) {
    back_disable(this.location); 
  }

  updateProducers(){
    update_producers(this.router, this.CS);
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

  public refreshData(){
    console.log("Sí´entra");
    window.location.reload();
  }
}
