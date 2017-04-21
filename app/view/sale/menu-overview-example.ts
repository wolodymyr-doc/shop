import {Component} from '@angular/core';


@Component({
  selector: 'menu-overview-example',
  templateUrl: '<button md-button [mdMenuTriggerFor]="menu">Menu</button>
				<md-menu #menu="mdMenu">
				<button md-menu-item>Item 1</button>
				<button md-menu-item>Item 2</button>
				</md-menu>
				',
})
export class MenuOverviewExample {}


/**  Copyright 2016 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */