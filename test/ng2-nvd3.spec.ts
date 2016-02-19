import {bootstrap} from 'angular2/platform/browser';
import {Component, OnInit} from 'angular2/core';
import {nvD3} from '../lib/ng2-nvd3';

declare let describe, beforeEach, it, expect, d3: any;
declare let currentChartType: string;
const chartTypes = [
  'discreteBarChart'
];

//
// Define Main Component
//
@Component({
  selector: 'main',
  directives: [nvD3],
  template: `
    <div>
      <h1 class="type">{{options.chart.type}}</h1>
      <nvd3 [options]="options" [data]="data"></nvd3>
    </div>
  `
})

class Main {
  options;
  data;
  ngOnInit(){
    this.options = allOptions[currentChartType];
    this.data = allData[currentChartType];
  }
}

//
// Define Tests
//
const prepare = () => {
  document.body.innerHTML = '';

  let main = document.createElement('main');
  main.setAttribute('class', 'main')
  document.body.appendChild(main);
}

const runTests = () => {
  describe('ng2-nvd3 tests:', () => {

    beforeEach(prepare);

    it('true is true', () => {
      expect(true).toEqual(true)
    });

    it('main element should be created', () => {
      expect(document.querySelectorAll('.main').length).toEqual(1);
    })

    chartTypes.forEach((t) => {
      it(chartTypes[0] + ' chart type should be created correctly', (done) => {
        currentChartType = chartTypes[0];
        bootstrap(Main)
          .then((main) => {
            let options = main.instance.options;
            let h1 = document.querySelector('.type');
            expect(h1.textContent).toEqual(options.chart.type);

            let nvd3 = document.querySelector('nvd3');
            expect(nvd3).toBeDefined();

            let svg = nvd3.querySelector('svg');
            expect(svg).toBeDefined();
            expect(svg.getAttribute('height')).toEqual(options.chart.height + 'px');

            done();
          })
          .catch(err => console.error(err));
      })
    });

  });
}

runTests();

//
// Options and Data definitions
//
const allOptions = {
  discreteBarChart: {
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
}

const allData = {
  discreteBarChart: [
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
  ]
}
