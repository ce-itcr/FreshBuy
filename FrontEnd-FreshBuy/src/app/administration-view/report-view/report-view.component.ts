import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {MatTabsModule} from '@angular/material/tabs';
import { exit } from 'process';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent implements OnInit {

  constructor() {
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
