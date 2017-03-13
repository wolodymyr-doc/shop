import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bc',
  templateUrl: './search-bc.component.html',
  styleUrls: ['./search-bc.component.css']
})
export class SearchBcComponent implements OnInit {
  selectedValue: string;

  foods = [
   {value: 'steak-0', viewValue: 'Steak'},
   {value: 'pizza-1', viewValue: 'Pizza'},
   {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
