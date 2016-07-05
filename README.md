# ng2-nvd3
[![Build Status](https://travis-ci.org/krispo/ng2-nvd3.svg?branch=master)](https://travis-ci.org/krispo/ng2-nvd3)
[![NPM Version](http://img.shields.io/npm/v/ng2-nvd3.svg?style=flat)](https://www.npmjs.org/package/ng2-nvd3)

Angular2 component for nvd3. It has similar technique as [angular-nvd3](http://krispo.github.io/angular-nvd3) for angular 1, but designed for angular 2 and without extra features (like extended mode) you won't need.

## Demos

Online demos:

1. [web page](http://krispo.github.io/ng2-nvd3)
2. [plnkr](http://plnkr.co/edit/T4i7Zh?p=preview)

## Install

    npm install ng2-nvd3
    
it requires `angular2`, `d3` and `nvd3` as dependencies. Tested with the current `@angular` version `^2.0.0-rc.4`.
    
## Basic usage

### Simple bar chart
Note: `d3` and `nvd3` should be also included in your project bundle.

Simple discrete bar chart: 
    
```js
import {Component, OnInit} from '@angular/core';
import {nvD3} from 'ng2-nvd3'
declare let d3: any;

@Component({
  selector: 'main',
  directives: [nvD3],
  template: `
    <div>
      <nvd3 [options]="options" [data]="data"></nvd3>
    </div>
  `
})

export class Main implements OnInit{
  options;
  data;
  ngOnInit(){
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : -29.765957771107
          } ,
          {
            "label" : "B" ,
            "value" : 0
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
          } ,
          {
            "label" : "D" ,
            "value" : 196.45946739256
          } ,
          {
            "label" : "E" ,
            "value" : 0.19434030906893
          } ,
          {
            "label" : "F" ,
            "value" : -98.079782601442
          } ,
          {
            "label" : "G" ,
            "value" : -13.925743130903
          } ,
          {
            "label" : "H" ,
            "value" : -5.1387322875705
          }
        ]
      }
    ];
  }

}
```    

### Usage directive `api`

No need to use `api` as in angular 1 case. We can get access to directive instance from parent component via `@ViewChild`:

```js
import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {nvD3} from 'ng2-nvd3';

@Component({
  selector: 'main',
  directives: [nvD3],
  template: `<div><nvd3 [options]="options" [data]="data"></nvd3></div>`
})
export class Main {
  options;
  data;

  @ViewChild(nvD3)
  nvD3: nvD3;

  ngOnInit(){
    this.options = {...};
    this.data = [...];
  }

  ngAfterViewInit() {
    // this.nvD3 - directive instance
    // for example, to update the chart
    this.nvD3.chart.update()
  } 
}
```

## Tests

    npm test
    
## Change Log

#### 1.1.3 (master)
* Angular2 - v2.0.0-rc4 

#### 1.1.2
* Angular2 - v2.0.0-rc3 

#### 1.1.1
* Angular2 - v2.0.0-rc2 

#### 1.1.0
* Angular2 - v2.0.0-rc1 

#### 1.0.7
* Angular2 - v2.0.0-beta.3 
    

## License
MIT
