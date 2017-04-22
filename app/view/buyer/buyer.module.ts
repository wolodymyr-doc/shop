import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule, MdListModule} from '@angular/material';

import {BuyerComponent} from './buyer.component';
import {BuyerMainComponent} from './main/buyermain.component';
import {BuyerDetailsComponent} from './details/buyerdetails.component';
import {BuyerCatalogComponent} from './catalog/buyercatalog.component';

@NgModule({
    declarations: [
        BuyerComponent,
        BuyerCatalogComponent,
        BuyerDetailsComponent,
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
        BuyerDetailsComponent,
        BuyerMainComponent
    ]
})
export class BuyerModule {
}
