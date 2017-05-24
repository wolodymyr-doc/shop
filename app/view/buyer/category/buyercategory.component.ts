import {Component} from '@angular/core';


@Component({
  selector: 'buyer-category',
  templateUrl: './buyercategory.component.html',
})
export class BuyerCategoryComponent {
categories = ['Books',
            'Software',
            'Electronics', 
            'Home',
            'Garden',
            'Sport',
            'Art',
            'Auto',];
}
