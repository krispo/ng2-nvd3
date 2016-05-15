import {Component, Output, EventEmitter} from '@angular/core';
import {ChartTypes} from './defs';

@Component({
  selector: 'chart-selector',
  template: `
    <select (change)="select.emit($event.target.value)">
      <option *ngFor="#type of cTypes">{{type}}</option>
    </select>
  `
})

export class ChartSelector {
  @Output() select = new EventEmitter();
  cTypes = ChartTypes;

  ngOnInit(){
    this.select.emit(this.cTypes[0]);
  }
}