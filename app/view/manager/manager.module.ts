import {NgModule} from '@angular/core';
import {MaterialModule, MdListModule} from '@angular/material';
import {CommonModule} from '@angular/common';

import {ManagerComponent} from './manager.component';

@NgModule({
    declarations: [
        ManagerComponent
    ],
    imports: [
        CommonModule, MaterialModule, MdListModule
    ],
    entryComponents: [
    ],
    exports: [
        ManagerComponent
    ]
})
export class ManagerModule {
}
