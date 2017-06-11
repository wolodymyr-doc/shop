import {NgModule} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule, MdListModule, MdMenuItem} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

//own modules
import {AppRouterModule} from './app-router.module';
import {AdminModule} from './view/admin/admin.module';
import {BuyerModule} from './view/buyer/buyer.module';
import {ManagerModule} from './view/manager/manager.module';
import {SaleModule} from './view/sale/sale.module';
import {ServicesModule} from './service/services.module';
import {HelpersModule} from './helpers/helpers.module';

import {AppComponent} from './view/main/app.component';

import 'hammerjs';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        FlexLayoutModule,
        MdListModule,
        HelpersModule,
        
//own modules
        AppRouterModule,
        AdminModule,
        BuyerModule,
        ManagerModule,
        SaleModule,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
