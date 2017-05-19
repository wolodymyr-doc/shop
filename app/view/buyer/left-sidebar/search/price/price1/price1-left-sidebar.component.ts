import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';



@Component({
    selector: 'left-sidebar-price1',
    templateUrl: './price1-left-sidebar.component.html',
    styleUrls: ['./price1-left-sidebar.component.css']
})

export class LeftSidebarPrice1Component {
priceCtrl: FormControl;
filteredPrices: any;

prices = [
  '5$',
  '10$',
  '15$',
  '20$',

];

constructor() {
  this.priceCtrl = new FormControl();
  this.filteredPrices = this.priceCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterPrices(name));
}

filterPrices(val: string) {
  return val ? this.prices.filter(s => new RegExp(`^${val}`, 'gi').test(s))
             : this.prices;
}

}
