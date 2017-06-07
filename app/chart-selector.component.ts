import {Component, Output, EventEmitter} from '@angular/core';
import {ChartTypes} from './defs';

@Component({
  selector: 'chart-selector',
  template: `
    <select (change)="select.emit($event.target.value)">
      <option *ngFor="let type of cTypes">{{type}}</option>
    </select>
  `
})

export class SelectorComponent {
  @Output() select = new EventEmitter();
  cTypes = ChartTypes;

  ngOnInit(){
    this.select.emit(this.cTypes[0]);
  }
}