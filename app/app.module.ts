import {NgModule} from '@angular/core';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule, MdListModule, MdMenuItem} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './view/main/app.component';
import {GoodsComponent} from './view/goods/goods.component';
import {GoodsControlComponent} from './view/goods/goods-control/goods-control.component';
import {GoodsDescriptionComponent} from './view/goods/goods-description/goods-description.component';
import {GoodsService} from './service/goods.service';
import {ProjectItemComponent} from './view/project/project-item/project-item.component';
import {AddProjectComponent, AddProjectDialogComponent} from './view/project/add-project/add-project.component';
import {HelpersModule} from './helpers/helpers.module';
import {
    DeleteItemComponent,
    DeleteItemDialogComponent
} from './view/project/project-item/delete-item/delete-item.component';
import {EditItemComponent, EditProjectDialogComponent} from './view/project/project-item/edit-item/edit-item.component';
import {ProjectService} from './service/project.service';
import {ProjectComponent} from './view/project/project.component';
import {ProjectItemDragOverDirective} from './view/project/project-item/project-item-drag-over.directive';
import {AddGoodsComponent, AddGoodsDialogComponent} from './view/add-goods/add-goods.component';
import {SearchBcComponent} from './view/search-bc/search-bc.component';
import {HeaderComponent} from './view/header/header.component';
import {HeaderService} from './service/header.service';
import {UserService} from './service/user.service';
import 'hammerjs';


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
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        FlexLayoutModule,
        MdListModule,
        HelpersModule
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        AddProjectDialogComponent,
        DeleteItemDialogComponent,
        EditProjectDialogComponent
    ],
    providers: [GoodsService,
        ProjectService,
        HeaderService,
        UserService
    ]
})
export class AppModule {
}
