import { Component, OnInit, OnChanges, ElementRef, Inject } from '@angular/core';
declare var d3, nv: any;

@Component({
  selector: 'nvd3',
  inputs: ['options', 'data'],
  template: ``
})

export class nvD3 {
  options: any;
  data: any;
  el: any;
  chart: any;
  svg: any;

  constructor(@Inject(ElementRef) elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
  }

  ngOnChanges(){
    this.updateWithOptions(this.options);
  }

  updateWithOptions(options){
    let self = this;

    // Clearing
    this.clearElement();

    // Exit if options are not yet bound
    if (!options) return;

    // Initialize chart with specific type
    this.chart = nv.models[options.chart.type]();

    // Generate random chart ID
    this.chart.id = Math.random().toString(36).substr(2, 15);

    for (let key in this.chart) {
      if (!this.chart.hasOwnProperty(key)) continue;

      let value = this.chart[key];

      if (key[0] === '_'){}
      else if ([
          'clearHighlights',
          'highlightPoint',
          'id',
          'options',
          'resizeHandler',
          'state',
          'open',
          'close',
          'tooltipContent'
        ].indexOf(key) >= 0){}

      else if (key === 'dispatch') this.configureEvents(this.chart[key], options.chart[key]);

      else if ([
          'bars',
          'bars1',
          'bars2',
          'boxplot',
          'bullet',
          'controls',
          'discretebar',
          'distX',
          'distY',
          'interactiveLayer',
          'legend',
          'lines',
          'lines1',
          'lines2',
          'multibar',
          'pie',
          'scatter',
          'scatters1',
          'scatters2',
          'sparkline',
          'stack1',
          'stack2',
          'sunburst',
          'tooltip',
          'x2Axis',
          'xAxis',
          'y1Axis',
          'y2Axis',
          'y3Axis',
          'y4Axis',
          'yAxis',
          'yAxis1',
          'yAxis2'
        ].indexOf(key) >= 0 ||
          // stacked is a component for stackedAreaChart, but a boolean for multiBarChart and multiBarHorizontalChart
        (key === 'stacked' && options.chart.type === 'stackedAreaChart')) {
        this.configure(this.chart[key], options.chart[key], options.chart.type);
      }

      //TODO: need to fix bug in nvd3
      else if ((key === 'xTickFormat' || key === 'yTickFormat') && options.chart.type === 'lineWithFocusChart') {}
      else if ((key === 'tooltips') && options.chart.type === 'boxPlotChart') {}
      else if ((key === 'tooltipXContent' || key === 'tooltipYContent') && options.chart.type === 'scatterChart') {}

      else if (options.chart[key] === undefined || options.chart[key] === null) {}
      else this.chart[key](options.chart[key]);
    }

    this.updateWithData(this.data);

    nv.addGraph(function() {
      if (!self.chart) return;

      // Remove resize handler. Due to async execution should be placed here, not in the clearElement
      if (self.chart.resizeHandler) self.chart.resizeHandler.clear();

      // Update the chart when window resizes
      self.chart.resizeHandler = nv.utils.windowResize(function() {
        self.chart && self.chart.update && self.chart.update();
      });

      return self.chart;
    }, options.chart['callback']);
  }

  updateWithData(data){
    if (data) {
      // remove whole svg element with old data
      d3.select(this.el).select('svg').remove();

      var h, w;

      // Select the current element to add <svg> element and to render the chart in
      this.svg = d3.select(this.el).append('svg');
      if (h = this.options.chart.height) {
        if (!isNaN(+h)) h += 'px';
        this.svg.attr('height', h).style({height: h});
      }
      if (w = this.options.chart.width) {
        if (!isNaN(+w)) w += 'px';
        this.svg.attr('width', w).style({width: w});
      } else {
        this.svg.attr('width', '100%').style({width: '100%'});
      }

      this.svg.datum(data).call(this.chart);
    }
  }

  configure(chart, options, chartType){
    if (chart && options){

      for (let key in chart) {
        if (!chart.hasOwnProperty(key)) continue;

        let value = chart[key];

        if (key[0] === '_'){}
        else if (key === 'dispatch') this.configureEvents(value, options[key]);
        else if (key === 'tooltip') this.configure(chart[key], options[key], chartType);
        else if (key === 'contentGenerator') {
          if (options[key]) chart[key](options[key]);
        }
        else if ([
            'axis',
            'clearHighlights',
            'defined',
            'highlightPoint',
            'nvPointerEventsClass',
            'options',
            'rangeBand',
            'rangeBands',
            'scatter',
            'open',
            'close'
          ].indexOf(key) === -1) {
          if (options[key] === undefined || options[key] === null){}
          else chart[key](options[key]);
        }
      }

    }
  }

  configureEvents(dispatch, options){
    if (dispatch && options){
      for (let key in dispatch) {
        if (!dispatch.hasOwnProperty(key)) continue;

        let value = dispatch[key];

        if (options[key] === undefined || options[key] === null){}
        else dispatch.on(key + '._', options[key]);
      }
    }
  }

  clearElement(){
    this.el.innerHTML = '';

    // remove tooltip if exists
    if (this.chart && this.chart.tooltip && this.chart.tooltip.id) {
      d3.select('#' + this.chart.tooltip.id()).remove();
    }

    // To be compatible with old nvd3 (v1.7.1)
    if (nv.graphs && this.chart) {
      for (var i = nv.graphs.length - 1; i >= 0; i--) {
        if (nv.graphs[i] && (nv.graphs[i].id === this.chart.id)) {
          nv.graphs.splice(i, 1);
        }
      }
    }
    if (nv.tooltip && nv.tooltip.cleanup) {
      nv.tooltip.cleanup();
    }
    if (this.chart && this.chart.resizeHandler) this.chart.resizeHandler.clear();
    this.chart = null;
  }
}

