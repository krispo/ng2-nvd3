import { Component } from '@angular/core';

import { AllOptions, AllData } from './defs'

@Component({
    selector: 'main',
    template: `
  <div>
    <div>Chart type: <chart-selector (select)="selectType($event)"></chart-selector></div>
    <nvd3 [options]="options" [data]="data"></nvd3>
  </div>
  `
})
export class AppComponent {
    options: any;
    data: any;
    chartType: any;

    selectType(e: any){
        this.chartType = e;
        this.options = AllOptions[this.chartType];
        this.data = AllData[this.chartType];
    }
}
