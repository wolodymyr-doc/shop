<<<<<<< HEAD
import {NgModule} from '@angular/core';
import {MaterialModule, MdListModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {SaleComponent} from './sale.component';
import {SaleButtonComponent} from './button/button.component';
import {SaleMenuComponent} from './menu0/menu.component';
import {SaleMenuComponent1} from './menu1/menu.component1';

@NgModule({
    declarations: [
        SaleComponent,
        SaleButtonComponent,
        SaleMenuComponent,
        SaleMenuComponent1
    ],
    imports: [
        CommonModule, MaterialModule, MdListModule, BrowserModule, FormsModule, ReactiveFormsModule,
    ],
    entryComponents: [
    ],
    exports: [
        SaleComponent,
        SaleButtonComponent,
        SaleMenuComponent,
        SaleMenuComponent1,
    ]
})
export class SaleModule {
}
=======
import {NgModule} from '@angular/core';
import {MaterialModule, MdListModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {SaleComponent} from './sale.component';
import {SaleButtonComponent} from './button/button.component';
import {SaleMenuComponent} from './menu0/menu.component';
import {SaleMenuComponent1} from './menu1/menu.component1';

@NgModule({
    declarations: [
        SaleComponent,
        SaleButtonComponent,
        SaleMenuComponent,
        SaleMenuComponent1
    ],
    imports: [
        CommonModule, MaterialModule, MdListModule, BrowserModule, FormsModule, ReactiveFormsModule,
    ],
    entryComponents: [
    ],
    exports: [
        SaleComponent,
        SaleButtonComponent,
        SaleMenuComponent,
        SaleMenuComponent1,
    ]
})
export class SaleModule {
}
>>>>>>> 72a3efd8a5d3168b2c465b7844908949f789ca70
