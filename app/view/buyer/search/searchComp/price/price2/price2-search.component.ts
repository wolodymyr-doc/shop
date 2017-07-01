import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';



@Component({
    selector: 'search-price2',
    templateUrl: './price2-search.component.html',
    styleUrls: ['./price2-search.component.css']
})

export class SearchPrice2Component {
lpriceCtrl: FormControl;
filteredLprices: any;

lprices = [
  '100$',
  '200$',
  '500$',
  '1000$',

];

constructor() {
  this.lpriceCtrl = new FormControl();
  this.filteredLprices = this.lpriceCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterLprices(name));
}

filterLprices(val: string) {
  return val ? this.lprices.filter(s => new RegExp(`^${val}`, 'gi').test(s))
             : this.lprices;
}

}
