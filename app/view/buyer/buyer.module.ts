import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule, MdListModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {BuyerComponent} from './main/buyer.component';
import {BuyerCategoryComponent} from './navbar/category/buyercategory.component';
import {BuyerCatalogComponent} from './content-main/catalog/buyer.catalog.component';
import {BuyerRegComponent} from './navbar/registration/buyerreg.component';
import {BuyerDetailsComponent} from './content-main/details/buyer-details.component';

import {SearchComponent} from './navbar/search/main/search.component';
import {SearchCategoriesComponent} from './navbar/search/categories/search-categories.component';
import {SearchInputComponent} from './navbar/search/input/search-input.component';
import {SearchPrice1Component} from './navbar/search/price/price1/price1-search.component';
import {SearchPrice2Component} from './navbar/search/price/price2/price2-search.component';
import {SearchButtonComponent} from './navbar/search/button/search-button.component';
import {AdvSearchComponent} from './navbar/search/advSearch/advSearch.component';
import {CustomerSupportComponent} from './navbar/search/CustSupportSearch/customer-support.component';

import {BuyerRouterModule} from './buyer-router.module';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BuyerComponent,
        BuyerCatalogComponent,
        BuyerCategoryComponent,
        BuyerRegComponent,
        BuyerDetailsComponent,

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
        BuyerRegComponent,
        BuyerDetailsComponent,


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
