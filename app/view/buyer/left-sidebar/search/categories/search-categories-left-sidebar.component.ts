import {Component} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';



@Component({
    selector: 'left-sidebar-categories',
    templateUrl: './search-categories-left-sidebar.component.html',
    styleUrls: ['./search-categories-left-sidebar.component.css']
})

export class LeftSidebarCategoriesComponent {
categoryCtrl: FormControl;
filteredCategories: any;

categories = [
  'Category1',
  'Category2',
  'Category3',
  'Category4',
  'Category5',
  'Category6',
  'Category7',


];

constructor() {
  this.categoryCtrl = new FormControl();
  this.filteredCategories = this.categoryCtrl.valueChanges
      .startWith(null)
      .map(name => this.filterCategories(name));
}

filterCategories(val: string) {
  return val ? this.categories.filter(s => new RegExp(`^${val}`, 'gi').test(s))
             : this.categories;
}

}
