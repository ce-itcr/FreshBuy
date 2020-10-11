import { Component, OnInit } from '@angular/core';
import { ComunicationService } from 'src/app/comunication.service';

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

  constructor(private CS:ComunicationService) { }

  ngOnInit(): void {
  }

  addToJson(product_id:number, amount:number){
    this.itemsToBuy.push({"product_id": product_id, "amount": amount})
    this.CS.sendItemsToBuy(this.itemsToBuy).subscribe(res => { alert(res)
    },error =>{
      alert(error);
    });
    alert("listo");
  }

}
