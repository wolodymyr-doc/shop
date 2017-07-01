import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule, MdListModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BuyerComponent} from './buyer.component';
import {BuyerMainComponent} from './main/buyermain.component';
import {BuyerCategoryComponent} from './category/buyercategory.component';
import {BuyerCatalogComponent} from './catalog/buyer.catalog.component';
import {BuyerRegComponent} from './registration/buyerreg.component';
import {SearchComponent} from './search/search.component';
import {SearchCategoriesComponent} from './search/searchComp/categories/search-categories.component';
import {SearchInputComponent} from './search/searchComp/input/search-input.component';
import {SearchPrice1Component} from './search/searchComp/price/price1/price1-search.component';
import {SearchPrice2Component} from './search/searchComp/price/price2/price2-search.component';
import {SearchButtonComponent} from './search/searchComp/button/search-button.component';
import {AdvSearchComponent} from './search/searchComp/advSearch/advSearch.component';
import {CustomerSupportComponent} from './search/searchComp/CustSupportSearch/customer-support.component';

import {BuyerRouterModule} from './buyer-router.module'
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        BuyerComponent,
        BuyerCatalogComponent,
        BuyerCategoryComponent,
        BuyerMainComponent,
        BuyerRegComponent,
        SearchComponent,
        SearchCategoriesComponent,
        SearchInputComponent,
        SearchPrice1Component,
        SearchPrice2Component,
        SearchButtonComponent,
        CustomerSupportComponent,
        AdvSearchComponent
    ],
    imports: [
        CommonModule, MaterialModule, FormsModule,
        ReactiveFormsModule, MdListModule, RouterModule],

    entryComponents: [
    ],
    exports: [
        BuyerComponent,
        BuyerCatalogComponent,
        BuyerCategoryComponent,
        BuyerMainComponent,
        BuyerRegComponent,
        SearchComponent,
        SearchCategoriesComponent,
        SearchInputComponent,
        SearchPrice1Component,
        SearchPrice2Component,
        SearchButtonComponent,
        CustomerSupportComponent,
        AdvSearchComponent,
        BuyerRouterModule
    ]
})
export class BuyerModule {
}
