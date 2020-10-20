import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicationService } from 'src/app/comunication.service';
import { updateCart } from '../../logic';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { update_products } from '../../logic';

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
  productsCart:any[] = [];

  constructor(private CS:ComunicationService, private router: Router, private modal:NgbModal) { }

  //SE INICIALIZA LA VENTANA EMERGENTE (pop-up)
  openModal(content){ this.modal.open(content,{size:'sm', centered:true});}

  update_products_local(){
    update_products(this.CS, this.router);
  }

  ngOnInit(): void {

  }

  add(id){
    alert(this.productsCart);
    this.CS.sendId(id).subscribe(res => {
      if(!this.productsList.includes(id)){
        this.productsCart.push(res);
        this.productsList.push(id);
      }
    });
  }

  updateCart(){
    alert(this.productsCart);
    updateCart(this.productsCart, this.router);
  }

}
