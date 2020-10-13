import { Component, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/comunication.service';

declare global {
  var products: any[];
}

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.css']
})
export class ProductsDisplayComponent implements OnInit {

  productsList:any[] = [];

  constructor(private CS:ComunicationService) { }

  ngOnInit(): void {
    this.updateProducts();
  }

  //SE ACTUALIZAN LOS PRODUCTOS A MOSTRAR
  updateProducts(){
    this.CS.getProducts().subscribe(res => {
      for (let i=0;i<res.length;i++){
        this.productsList.push(JSON.parse(res[i]));
      }
      globalThis.products = this.productsList;
  });
  }

}
