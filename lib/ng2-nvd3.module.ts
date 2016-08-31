import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { nvD3Component } from './ng2-nvd3.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        nvD3Component
    ],
    exports: [
        nvD3Component
    ],
    providers: [

    ]
})
export class nvD3 { }