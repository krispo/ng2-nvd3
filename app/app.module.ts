import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SelectorComponent } from './chart-selector.component';
import { NvD3Component } from 'ng2-nvd3';

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, SelectorComponent, NvD3Component ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
