import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent }   from './view/admin/admin.component';
import { BuyerComponent } from './view/buyer/buyer.component';
import { ManagerComponent } from './view/manager/manager.component';
import { SaleComponent } from './view/sale/sale.component';
import { BuyerLenaComponent} from './view/buyer-lena/buyer-lena.component';
import { MenuIconsExample} from './view/buyer-lena/material/buyer-lena-menumaterial.component';
import { BuyerLenaMenu} from './view/buyer-lena/menu/buyer-lena.component';
import { BuyerLenaNavmenu} from './view/buyer-lena/navmenu/navmenu.component';



const routes: Routes = [
  { path: '', redirectTo: '/shopping', pathMatch: 'full' },
  { path: 'admin',  component: AdminComponent },
  { path: 'shopping', component: BuyerComponent },
  { path: 'manager',     component: ManagerComponent },
  { path: 'sale',     component: SaleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouterModule {}
