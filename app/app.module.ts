import {NgModule} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule, MdListModule, MdMenuItem} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';


import {AppRouterModule} from './app-router.module';
import {AdminModule} from './view/admin/admin.module';
import {BuyerModule} from './view/buyer/buyer.module';
import {ManagerModule} from './view/manager/manager.module';
import {SaleModule} from './view/sale/sale.module';
import {ServicesModule} from './service/services.module';
import {HelpersModule} from './helpers/helpers.module';

import {AppComponent} from './view/main/app.component';

import 'hammerjs';

// lena's
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavButtonComponent} from './view/buyer/navbutton/navbutton.component';

@NgModule({
    declarations: [
        AppComponent,
        GoodsComponent,
        GoodsControlComponent,
        GoodsDescriptionComponent,
        ProjectItemComponent,
        AddProjectComponent,
        AddProjectDialogComponent,
        DeleteItemComponent,
        DeleteItemDialogComponent,
        EditItemComponent,
        EditProjectDialogComponent,
        ProjectComponent,
        ProjectItemDragOverDirective,
        AddGoodsComponent,
        AddGoodsDialogComponent,
        SearchBcComponent,
        HeaderComponent,
        ManagerComponent,
        BuyerComponent,
        AdminComponent,
        SaleComponent,

        //lena's
        NavButtonComponent


    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        FlexLayoutModule,
        MdListModule,
        HelpersModule,
        AppRouterModule,

        //lena's
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

//lena's
platformBrowserDynamic().bootstrapModule(AppModule);
