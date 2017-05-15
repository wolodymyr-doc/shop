import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule, MdListModule} from '@angular/material';

import {BuyerComponent} from './buyer.component';
import {BuyerMainComponent} from './main/buyermain.component';
import {BuyerCategoryComponent} from './category/buyercategory.component';
import {BuyerCatalogComponent} from './catalog/buyer.catalog.component';

@NgModule({
    declarations: [
        BuyerComponent,
        BuyerCatalogComponent,
        BuyerCategoryComponent,
        BuyerMainComponent
    ],
    imports: [
        CommonModule, MaterialModule, MdListModule
    ],
    entryComponents: [
    ],
    exports: [
        BuyerComponent,
        BuyerCatalogComponent,
        BuyerCategoryComponent,
        BuyerMainComponent
    ]
})
export class BuyerModule {
}
