import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';



@Component({
    selector: 'admin-main',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})

export class AdminComponent {
   categories: Categories[] = [
   {
     name1: 'Books',
     name2: 'Книги',
     id: 1,
     level: 0,
     parent: 0
   },
   {
     name1: 'Video',
     name2: 'Відео',
     id: 2
   }
  ] as Categories[];



    constructor() {
    }

}
