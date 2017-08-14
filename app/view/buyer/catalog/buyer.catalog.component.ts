import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'buyer-catalog-component',
  templateUrl: './buyer.catalog.component.html',
  styleUrls: ['./buyer.catalog.component.css'],
})
export class BuyerCatalogComponent {
  good ="This item";
  cart = [];
  goodList = ['IPhone5',
              'IPhone6',
              'IPhone7',
              'Panasonic',
              'Alcatel',
              'Nokia',
              'HTC',
              'phone1',
              'phone2',
              'phone3',
              'phone4',
              'phone5',];
  selectedGood(good) {
    this.good = good;
    this.cart.push(good);
    alert(good + ' '+'now in your cart');
    }
}
