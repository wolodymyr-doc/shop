import {Component} from '@angular/core';


@Component({
  selector: 'menu-1',
  templateUrl: './menu.component1.html',
})
export class SaleMenuComponent1 {
  foods = [
    {value: 'goods-0', viewValue: 'Sport'},
    {value: 'goods-1', viewValue: 'Clothes'},
    {value: 'goods-2', viewValue: 'Mobile Phones'},
    {value: 'goods-3', viewValue: 'Bicycle'},
    {value: 'goods-4', viewValue: 'Building'},
    {value: 'goods-5', viewValue: 'For Home'},
    {value: 'goods-6', viewValue: 'Acessories'},
    {value: 'goods-7', viewValue: 'Clothes'},
    {value: 'goods-8', viewValue: 'Battery'},

  ];
}


/**  Copyright 2016 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
