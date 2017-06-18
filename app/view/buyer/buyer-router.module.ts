import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { BuyerComponent } from './view/buyer/buyer.component';


const routes: Routes = [
  { path: 'shopping', component: BuyerComponent }

  ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class BuyerRouterModule {}
