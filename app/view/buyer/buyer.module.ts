import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule, MdListModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BuyerComponent} from './buyer.component';
import {BuyerMainComponent} from './main/buyermain.component';
import {BuyerCategoryComponent} from './category/buyercategory.component';
import {BuyerCatalogComponent} from './catalog/buyer.catalog.component';
import {LeftSidebarComponent} from './left-sidebar/left-sidebar.component';
import {LeftSidebarInputComponent} from './left-sidebar/search/input/search-input-left-sidebar.component';
import {LeftSidebarCategoriesComponent} from './left-sidebar/search/categories/search-categories-left-sidebar.component';
import {LeftSidebarPrice2Component} from './left-sidebar/search/price/price2/price2-left-sidebar.component';
import {LeftSidebarPrice1Component} from './left-sidebar/search/price/price1/price1-left-sidebar.component';



@NgModule({
    declarations: [
        BuyerComponent,
        BuyerCatalogComponent,
        BuyerCategoryComponent,
        BuyerMainComponent,
        LeftSidebarComponent,
        LeftSidebarInputComponent,
        LeftSidebarCategoriesComponent,
        LeftSidebarPrice2Component,
        LeftSidebarPrice1Component
    ],
    imports: [
        CommonModule, MaterialModule, FormsModule,
    ReactiveFormsModule, MdListModule,
    ],
    entryComponents: [
    ],
    exports: [
        BuyerComponent,
        BuyerCatalogComponent,
        BuyerCategoryComponent,
        BuyerMainComponent,
        LeftSidebarComponent,
        LeftSidebarInputComponent,
        LeftSidebarCategoriesComponent,
        LeftSidebarPrice2Component,
        LeftSidebarPrice1Component

    ]
})
export class BuyerModule {
}
