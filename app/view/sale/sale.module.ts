import {NgModule} from '@angular/core';
import {MaterialModule, MdListModule} from '@angular/material';
import {CommonModule} from '@angular/common';

import {SaleComponent} from './sale.component';
import {SaleButtonComponent} from './button.component';
import {SaleMenuComponent} from './menu.component';

@NgModule({
    declarations: [
        SaleComponent,
        SaleButtonComponent,
        SaleMenuComponent
    ],
    imports: [
        CommonModule, MaterialModule, MdListModule
    ],
    entryComponents: [
    ],
    exports: [
        SaleComponent,
        SaleButtonComponent,
        SaleMenuComponent
    ]
})
export class SaleModule {
}
                                            