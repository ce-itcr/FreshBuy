import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComunicationService } from 'src/app/comunication.service';
import { update_products } from '../../logic';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare global {
  var cartItems: any[];
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

/*[
  {id:2, category:"fruit", picture:"tomato", price:24, sellingMode:"box", availability:"available"},
  {id:3, category:"fruit", picture:"banano", price:13, sellingMode:"box", availability:"available"},
  {id:4, category:"vegetable", picture:"carrot", price:34, sellingMode:"box", availability:"available"}
  ];*/

export class CartComponent implements OnInit {

  itemsToBuy:any[] = [];

  constructor(private CS:ComunicationService, private router: Router, private modal:NgbModal) { }

  //SE INICIALIZA LA VENTANA EMERGENTE (pop-up)
  openModal(content){ this.modal.open(content,{size:'sm', centered:true});}

  ngOnInit(): void {
  }

  //SE ENVÍAN LOS ITEMS DEL CARRITO AL API
  addToJson(product_id:number, amount:number){
    this.itemsToBuy.push({"product_id": product_id, "amount": amount})
    this.CS.sendItemsToBuy(this.itemsToBuy).subscribe(res => { alert(res)
    });
  }

  updateProducts(){
    update_products(this.CS, this.router);
  }

}
