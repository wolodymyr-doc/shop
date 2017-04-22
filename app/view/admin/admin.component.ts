import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'admin-main',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent {
    categories: any[] = [
    {
      name1: 'Books',
      name2: 'Buecher',
      id: 1,
      level: 0,
      parent: 0
    },
    {
      name1: 'Video',
      name2: 'Video',
      id: 2
    }
   ] ;



    constructor() {
    }

}
