import {Component} from '@angular/core';


@Component({
  selector: 'menu-0',
  template: '<button md-button [mdMenuTriggerFor]="menu">Menu</button><md-menu #menu="mdMenu"><button md-menu-item>Item 1</button><button md-menu-item>Item 2</button></md-menu>'
})
export class SaleMenuComponent {}
