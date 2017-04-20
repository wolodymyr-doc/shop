import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ChildComponent }   from './child.component';
import { ButtonComponent }   from './button.component';


@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, ChildComponent, ButtonComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }