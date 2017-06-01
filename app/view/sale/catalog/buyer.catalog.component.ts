import {Component} from '@angular/core';


@Component({
  selector: 'buyer-catalog-component',
  templateUrl: './buyer.catalog.component.html',
  styleUrls: ['./buyer.catalog.component.css'],
})
export class BuyerCatalogComponent {
  good ="This item";
  cart = [];
  goodList = ['IPhone5', 'IPhone6', 'IPhone7', 'Panasonic', 'Alcatel', 'Nokia', 'HTC'];
  selectedGood(good) {
    this.good = good;
    this.cart.push(good);
    alert(good + ' '+'now in your cart');
    }
}
