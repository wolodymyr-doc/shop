import {Component} from '@angular/core';



@Component({
    selector: 'adv-search',
    templateUrl: './advSearch.component.html',
    styleUrls: ['./advSearch.component.css']
})

export class AdvSearchComponent {
    colors = [
        {value: 'blue-0', viewValue: 'Blue'},
        {value: 'red-1', viewValue: 'Red'},
        {value: 'blacck-2', viewValue: 'Black'}
    ];
    constructor() {
    }

}
