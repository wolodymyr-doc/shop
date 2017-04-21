import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import {ButtonOverviewExample} from './button-overview-example'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {MenuOverviewExample} from './menu-overview-example';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';



@NgModule({
    imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MaterialModule,],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }