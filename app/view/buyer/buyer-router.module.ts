import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BuyerComponent } from './buyer.component';
import { AdvSearchComponent } from './search/searchComp/advSearch/advSearch.component';
import { CustomerSupportComponent } from './search/searchComp/CustSupportSearch/customer-support.component';


const routes: Routes = [
  { path: 'shopping',
    children:
                [
                    {path: 'advanced-search', component: AdvSearchComponent},
                    {path: 'customer-support', component: CustomerSupportComponent}
                ],


     component: BuyerComponent }, ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BuyerRouterModule {}
