import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-affiliation-management',
  templateUrl: './affiliation-management.component.html',
  styleUrls: ['./affiliation-management.component.css']
})
export class AffiliationManagementComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }
}
