import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BuyerComponent } from './main/buyer.component';
import { BuyerDetailsComponent } from './content-main/details/buyer-details.component';
import { BuyerCatalogComponent } from './content-main/catalog/buyer.catalog.component';
//import { AdvSearchComponent } from './navbar/search/searchComp/advSearch/advSearch.component';
import { CustomerSupportComponent } from './navbar/search/CustSupportSearch/customer-support.component';


const searchRoutes: Routes = [

    { path: 'customer-support', component: CustomerSupportComponent },
    { path: 'shopping',
    children:
                [
                    // { path: 'advanced-search', component: AdvSearchComponent},
                    { path: '', redirectTo: 'catalog', pathMatch: 'full' },
                    { path: 'catalog', component: BuyerCatalogComponent },
                    { path: 'details', component: BuyerDetailsComponent }
                ], component: BuyerComponent },




         ];

@NgModule({
  imports: [ RouterModule.forChild(searchRoutes) ],
  exports: [ RouterModule ]
})
export class BuyerRouterModule {}
