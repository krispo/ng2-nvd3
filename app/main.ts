import {bootstrap}  from 'angular2/platform/browser'
import {Component} from 'angular2/core'
import {nvD3} from '//cdn.rawgit.com/krispo/ng2-nvd3/master/lib/ng2-nvd3.ts'
import {ChartTypes, AllOptions, AllData} from './defs'
import {ChartSelector} from './chart-selector'

@Component({
  selector: 'main',
  directives: [nvD3, ChartSelector],
  template: `
  <div>
    <div>Chart type: <chart-selector (select)="selectType($event)"></chart-selector></div>
    <nvd3 [options]="options" [data]="data"></nvd3>
  </div>
  `
})
export class Main {
  options;
  data;
  chartType;

  selectType(e){
    this.chartType = e;
    this.options = AllOptions[this.chartType];
    this.data = AllData[this.chartType];
  }
}

bootstrap(Main);