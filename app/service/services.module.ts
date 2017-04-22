import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {CategoriesService} from './categories.service';

@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        CategoriesService
    ]
})
export class ServicesModule {
}
