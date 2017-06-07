import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SelectorComponent } from './chart-selector.component'
import { NvD3Component } from '//cdn.rawgit.com/krispo/ng2-nvd3/master/lib/index.ts'

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent, SelectorComponent, NvD3Component ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
