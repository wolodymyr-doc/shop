import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule, MdListModule} from '@angular/material';

import {AdminComponent} from './admin.component';

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule, MaterialModule, MdListModule
    ],
    entryComponents: [
    ],
    exports: [
        AdminComponent
    ]
})
export class AdminModule {
}
