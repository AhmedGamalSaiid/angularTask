import { Component, NgModule, OnInit } from '@angular/core';
import { ICategory } from 'src/app/models/icategory';
import { ShopCartItem } from 'src/app/models/shop-cart-item';
import { ProdServService } from 'src/app/services/prod-serv.service';

@Component({
  selector: 'app-parent-cart',
  templateUrl: './parent-cart.component.html',
  styleUrls: ['./parent-cart.component.scss'],
})
export class ParentCartComponent implements OnInit {
  Category: Array<ICategory> = [];
  mysel: number;
  catId: number;
  tPrice: number = 0;
  prodQuant: Array<ShopCartItem>;
  constructor(private prodServ: ProdServService) {
    this.Category = this.prodServ.getAllCat();
  }

  ngOnInit(): void {}
  totalPricee(e) {
    this.tPrice = e;
  }
  totqu(event): void {
    this.prodQuant = event;
  }
}
