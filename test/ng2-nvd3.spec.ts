import {bootstrap} from 'angular2/platform/browser';
import {Component, OnInit} from 'angular2/core';
import {nvD3} from '../lib/ng2-nvd3';

declare let describe, beforeEach, it, expect, d3: any;
declare let currentChartType: string;
const chartTypes = [
  'lineChart',
  'discreteBarChart',
  'pieChart',
  'scatterChart'
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

    chartTypes.forEach((type) => {
      it(type + ' chart type should be created correctly', (done) => {
        currentChartType = type;
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
  lineChart:{
    chart: {
      type: 'lineChart',
      height: 450,
      x: function(d){ return d.x; },
      y: function(d){ return d.y; }
    }
  },
  discreteBarChart: {
    chart: {
      type: 'discreteBarChart',
      height: 450,
      x: function(d){return d.label;},
      y: function(d){return d.value;}
    }
  },
  pieChart: {
    chart: {
      type: 'pieChart',
      height: 500,
      x: function(d){return d.key;},
      y: function(d){return d.y;}
    }
  },
  scatterChart: {
    chart: {
      type: 'scatterChart',
      height: 450
    }
  }
}

const allData = {
  lineChart: [
    { key: 'key1', values: [{x: 0, y: 0},{x: 1, y: 1}] },
    { key: 'key2', values: [{x: 1, y: 1},{x: 0, y: 0}] }
  ],
  discreteBarChart: [
    {
      key: "Cumulative Return",
      values: [
        { "label" : "A" , "value" : 10 },
        { "label" : "B" , "value" : 20 }
      ]
    }
  ],
  pieChart: [
    { key: "One", y: 5 },
    { key: "Two", y: 2 }
  ],
  scatterChart: [
    { key: 'key1', values: [{x: 0, y: 0},{x: 1, y: 1}] },
    { key: 'key2', values: [{x: 1, y: 1},{x: 0, y: 0}] }
  ],
}
