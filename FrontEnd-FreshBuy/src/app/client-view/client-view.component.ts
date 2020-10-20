import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { back_disable } from '../logic'
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})



export class ClientViewComponent implements OnInit {

  idToPhoto(product_name, temporary_path){

    switch (product_name) {
      case "manzana":
        temporary_path = "./../../assets/img/products/manzana_freshbuy.png";
        break;
      case "Productor":
        temporary_path = "./../../assets/img/products/manzana_freshbuy.png";
        break;
      case "Consumidor":
        temporary_path = "./../../assets/img/products/manzana_freshbuy.png";
        break;

      default:
        temporary_path = "./../../assets/img/products/manzana_freshbuy.png";
        break;
    }

  }



  constructor( private location: LocationStrategy, private router: Router){
    back_disable(this.location);
  }
  ngOnInit(): void {
  }

}
