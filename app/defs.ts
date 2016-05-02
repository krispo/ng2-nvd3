//
// Options and Data definitions
//
declare let d3, nv: any;

export const ChartTypes = [
  'lineChart',
  'discreteBarChart',
  'pieChart',
  'scatterChart',
  'multiBarChart',
  'candlestickBarChart',
  'ohlcBarChart',
  'boxPlotChart',
  'donutChart',
  'multiBarHorizontalChart',
  'linePlusBarWithFocusChart',
  'forceDirectedGraph'
];

const color = d3.scale.category20()

export const AllOptions = {
  lineChart: {
    chart: {
      type: 'lineChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 40,
        left: 55
      },
      x: function(d){ return d.x; },
      y: function(d){ return d.y; },
      useInteractiveGuideline: true,
      dispatch: {
        stateChange: function(e){ console.log("stateChange"); },
        changeState: function(e){ console.log("changeState"); },
        tooltipShow: function(e){ console.log("tooltipShow"); },
        tooltipHide: function(e){ console.log("tooltipHide"); }
      },
      xAxis: {
        axisLabel: 'Time (ms)'
      },
      yAxis: {
        axisLabel: 'Voltage (v)',
        tickFormat: function(d){
          return d3.format('.02f')(d);
        },
        axisLabelDistance: -10
      },
      callback: function(chart){
        console.log("!!! lineChart callback !!!");
      }
    }
  },
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
  },
  pieChart: {
    chart: {
      type: 'pieChart',
      height: 500,
      x: function(d){return d.key;},
      y: function(d){return d.y;},
      showLabels: true,
      duration: 500,
      labelThreshold: 0.01,
      labelSunbeamLayout: true,
      legend: {
        margin: {
          top: 5,
          right: 35,
          bottom: 5,
          left: 0
        }
      }
    }
  },
  scatterChart: {
    chart: {
      type: 'scatterChart',
      height: 450,
      color: d3.scale.category10().range(),
      scatter: {
        onlyCircles: false
      },
      showDistX: true,
      showDistY: true,
      duration: 350,
      xAxis: {
        axisLabel: 'X Axis',
        tickFormat: function(d){
          return d3.format('.02f')(d);
        }
      },
      yAxis: {
        axisLabel: 'Y Axis',
        tickFormat: function(d){
          return d3.format('.02f')(d);
        },
        axisLabelDistance: -5
      }
    }
  },
  multiBarChart: {
    chart: {
      type: 'multiBarChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 45,
        left: 45
      },
      clipEdge: true,
      //staggerLabels: true,
      duration: 500,
      stacked: true,
      xAxis: {
        axisLabel: 'Time (ms)',
        showMaxMin: false,
        tickFormat: function(d){
          return d3.format(',f')(d);
        }
      },
      yAxis: {
        axisLabel: 'Y Axis',
        axisLabelDistance: -20,
        tickFormat: function(d){
          return d3.format(',.1f')(d);
        }
      }
    }
  },
  candlestickBarChart: {
    chart:{
      type: 'candlestickBarChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 40,
        left: 60
      },
      x: function(d){ return d['date']; },
      y: function(d){ return d['close']; },
      duration: 100,
      xAxis: {
        axisLabel: 'Dates',
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(new Date() - (20000 * 86400000) + (d * 86400000)));
        },
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'Stock Price',
        tickFormat: function(d){
          return '$' + d3.format(',.1f')(d);
        },
        showMaxMin: false
      }
    }
  },
  ohlcBarChart: {
    chart: {
      type: 'ohlcBarChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 40,
        left: 60
      },
      x: function(d){ return d['date']; },
      y: function(d){ return d['close']; },
      duration: 100,
      xAxis: {
        axisLabel: 'Dates',
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(new Date() - (20000 * 86400000) + (d * 86400000)));
        },
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'Stock Price',
        tickFormat: function(d){
          return '$' + d3.format(',.1f')(d);
        },
        showMaxMin: false
      }
    }
  },
  boxPlotChart: {
    chart: {
      type: 'boxPlotChart',
      height: 450,
      margin : {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
      },
      color:['darkblue', 'darkorange', 'green', 'darkred', 'darkviolet'],
      x: function(d){return d.label;},
      //y: function(d){return d.values.Q3;},
      maxBoxWidth: 55,
      yDomain: [0, 500]
    }
  },
  donutChart: {
    chart: {
      type: 'pieChart',
      height: 450,
      donut: true,
      x: function(d){return d.key;},
      y: function(d){return d.y;},
      showLabels: true,
      pie: {
        startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
        endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
      },
      duration: 500,
      legend: {
        margin: {
          top: 5,
          right: 140,
          bottom: 5,
          left: 0
        }
      }
    }
  },
  multiBarHorizontalChart: {
    chart: {
      type: 'multiBarHorizontalChart',
      height: 450,
      x: function(d){return d.label;},
      y: function(d){return d.value;},
      showControls: true,
      showValues: true,
      duration: 500,
      xAxis: {
        showMaxMin: false
      },
      yAxis: {
        axisLabel: 'Values',
        tickFormat: function(d){
          return d3.format(',.2f')(d);
        }
      }
    }
  },
  linePlusBarWithFocusChart: {
    chart: {
      type: 'linePlusBarChart',
      height: 500,
      margin: {
        top: 30,
        right: 75,
        bottom: 50,
        left: 75
      },
      bars: {
        forceY: [0]
      },
      bars2: {
        forceY: [0]
      },
      color: ['#2ca02c', 'darkred'],
      xAxis: {
        axisLabel: 'X Axis',
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(d));
        }
      },
      x2Axis: {
        tickFormat: function(d) {
          return d3.time.format('%x')(new Date(d));
        },
        showMaxMin: false
      },
      y1Axis: {
        axisLabel: 'Y1 Axis',
        tickFormat: function(d){
          return d3.format(',f')(d);
        },
        axisLabelDistance: 12
      },
      y2Axis: {
        axisLabel: 'Y2 Axis',
        tickFormat: function(d) {
          return '$' + d3.format(',.2f')(d)
        }
      },
      y3Axis: {
        tickFormat: function(d){
          return d3.format(',f')(d);
        }
      },
      y4Axis: {
        tickFormat: function(d) {
          return '$' + d3.format(',.2f')(d)
        }
      }
    }
  },
  forceDirectedGraph: {
    chart: {
      type: 'forceDirectedGraph',
      height: 500,
      width: (function(){ return nv.utils.windowSize().width })(),
      margin:{top: 20, right: 20, bottom: 20, left: 20},
      color: function(d){
        return color(d.group)
      },
      nodeExtras: function(node) {
        node && node
          .append("text")
          .attr("dx", 8)
          .attr("dy", ".35em")
          .text(function(d) { return d.name })
          .style('font-size', '10px');
      }
    }
  }
}

export const AllData = {
  lineChart: sinAndCos(),
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
  ],
  pieChart: [
    {
      key: "One",
      y: 5
    },
    {
      key: "Two",
      y: 2
    },
    {
      key: "Three",
      y: 9
    },
    {
      key: "Four",
      y: 7
    },
    {
      key: "Five",
      y: 4
    },
    {
      key: "Six",
      y: 3
    },
    {
      key: "Seven",
      y: .5
    }
  ],
  scatterChart: generateDataScatter(4,40),
  multiBarChart: generateDataMultiBar(),
  candlestickBarChart: [{values: [
    {"date": 15854, "open": 165.42, "high": 165.8, "low": 164.34, "close": 165.22, "volume": 160363400, "adjusted": 164.35},
    {"date": 15855, "open": 165.35, "high": 166.59, "low": 165.22, "close": 165.83, "volume": 107793800, "adjusted": 164.96},
    {"date": 15856, "open": 165.37, "high": 166.31, "low": 163.13, "close": 163.45, "volume": 176850100, "adjusted": 162.59},
    {"date": 15859, "open": 163.83, "high": 164.46, "low": 162.66, "close": 164.35, "volume": 168390700, "adjusted": 163.48},
    {"date": 15860, "open": 164.44, "high": 165.1, "low": 162.73, "close": 163.56, "volume": 157631500, "adjusted": 162.7},
    {"date": 15861, "open": 163.09, "high": 163.42, "low": 161.13, "close": 161.27, "volume": 211737800, "adjusted": 160.42},
    {"date": 15862, "open": 161.2, "high": 162.74, "low": 160.25, "close": 162.73, "volume": 200225500, "adjusted": 161.87},
    {"date": 15863, "open": 163.85, "high": 164.95, "low": 163.14, "close": 164.8, "volume": 188337800, "adjusted": 163.93},
    {"date": 15866, "open": 165.31, "high": 165.4, "low": 164.37, "close": 164.8, "volume": 105667100, "adjusted": 163.93},
    {"date": 15867, "open": 163.3, "high": 164.54, "low": 162.74, "close": 163.1, "volume": 159505400, "adjusted": 162.24},
    {"date": 15868, "open": 164.22, "high": 164.39, "low": 161.6, "close": 161.75, "volume": 177361500, "adjusted": 160.9},
    {"date": 15869, "open": 161.66, "high": 164.5, "low": 161.3, "close": 164.21, "volume": 163587800, "adjusted": 163.35},
    {"date": 15870, "open": 164.03, "high": 164.67, "low": 162.91, "close": 163.18, "volume": 141197500, "adjusted": 162.32},
    {"date": 15873, "open": 164.29, "high": 165.22, "low": 163.22, "close": 164.44, "volume": 136295600, "adjusted": 163.57},
    {"date": 15874, "open": 164.53, "high": 165.99, "low": 164.52, "close": 165.74, "volume": 114695600, "adjusted": 164.87},
    {"date": 15875, "open": 165.6, "high": 165.89, "low": 163.38, "close": 163.45, "volume": 206149500, "adjusted": 162.59},
    {"date": 15876, "open": 161.86, "high": 163.47, "low": 158.98, "close": 159.4, "volume": 321255900, "adjusted": 158.56},
    {"date": 15877, "open": 159.64, "high": 159.76, "low": 157.47, "close": 159.07, "volume": 271956800, "adjusted": 159.07},
    {"date": 15880, "open": 157.41, "high": 158.43, "low": 155.73, "close": 157.06, "volume": 222329000, "adjusted": 157.06},
    {"date": 15881, "open": 158.48, "high": 160.1, "low": 157.42, "close": 158.57, "volume": 162262200, "adjusted": 158.57},
    {"date": 15882, "open": 159.87, "high": 160.5, "low": 159.25, "close": 160.14, "volume": 134848000, "adjusted": 160.14},
    {"date": 15883, "open": 161.1, "high": 161.82, "low": 160.95, "close": 161.08, "volume": 129483700, "adjusted": 161.08},
    {"date": 15884, "open": 160.63, "high": 161.4, "low": 159.86, "close": 160.42, "volume": 160402900, "adjusted": 160.42},
    {"date": 15887, "open": 161.26, "high": 162.48, "low": 161.08, "close": 161.36, "volume": 131954800, "adjusted": 161.36}
  ]}],
  ohlcBarChart: [{values: [
    {"date": 15707, "open": 145.11, "high": 146.15, "low": 144.73, "close": 146.06, "volume": 192059000, "adjusted": 144.65},
    {"date": 15708, "open": 145.99, "high": 146.37, "low": 145.34, "close": 145.73, "volume": 144761800, "adjusted": 144.32},
    {"date": 15709, "open": 145.97, "high": 146.61, "low": 145.67, "close": 146.37, "volume": 116817700, "adjusted": 144.95},
    {"date": 15712, "open": 145.85, "high": 146.11, "low": 145.43, "close": 145.97, "volume": 110002500, "adjusted": 144.56},
    {"date": 15713, "open": 145.71, "high": 145.91, "low": 144.98, "close": 145.55, "volume": 121265100, "adjusted": 144.14},
    {"date": 15714, "open": 145.87, "high": 146.32, "low": 145.64, "close": 145.92, "volume": 90745600, "adjusted": 144.51},
    {"date": 15715, "open": 146.73, "high": 147.09, "low": 145.97, "close": 147.08, "volume": 130735400, "adjusted": 145.66},
    {"date": 15716, "open": 147.04, "high": 147.15, "low": 146.61, "close": 147.07, "volume": 113917300, "adjusted": 145.65},
    {"date": 15719, "open": 146.89, "high": 147.07, "low": 146.43, "close": 146.97, "volume": 89567200, "adjusted": 145.55},
    {"date": 15720, "open": 146.29, "high": 147.21, "low": 146.2, "close": 147.07, "volume": 93172600, "adjusted": 145.65},
    {"date": 15721, "open": 146.77, "high": 147.28, "low": 146.61, "close": 147.05, "volume": 104849500, "adjusted": 145.63},
    {"date": 15722, "open": 147.7, "high": 148.42, "low": 147.15, "close": 148, "volume": 133833500, "adjusted": 146.57},
    {"date": 15723, "open": 147.97, "high": 148.49, "low": 147.43, "close": 148.33, "volume": 169906000, "adjusted": 146.9},
    {"date": 15727, "open": 148.33, "high": 149.13, "low": 147.98, "close": 149.13, "volume": 111797300, "adjusted": 147.69},
    {"date": 15728, "open": 149.13, "high": 149.5, "low": 148.86, "close": 149.37, "volume": 104596100, "adjusted": 147.93},
    {"date": 15729, "open": 149.15, "high": 150.14, "low": 149.01, "close": 149.41, "volume": 146426400, "adjusted": 147.97},
    {"date": 15730, "open": 149.88, "high": 150.25, "low": 149.37, "close": 150.25, "volume": 147211600, "adjusted": 148.8},
    {"date": 15733, "open": 150.29, "high": 150.33, "low": 149.51, "close": 150.07, "volume": 113357700, "adjusted": 148.62},
    {"date": 15734, "open": 149.77, "high": 150.85, "low": 149.67, "close": 150.66, "volume": 105694400, "adjusted": 149.2},
    {"date": 15735, "open": 150.64, "high": 150.94, "low": 149.93, "close": 150.07, "volume": 137447700, "adjusted": 148.62},
    {"date": 15736, "open": 149.89, "high": 150.38, "low": 149.6, "close": 149.7, "volume": 108975800, "adjusted": 148.25},
    {"date": 15737, "open": 150.65, "high": 151.42, "low": 150.39, "close": 151.24, "volume": 131173000, "adjusted": 149.78},
    {"date": 15740, "open": 150.32, "high": 151.27, "low": 149.43, "close": 149.54, "volume": 159073600, "adjusted": 148.09},
    {"date": 15741, "open": 150.35, "high": 151.48, "low": 150.29, "close": 151.05, "volume": 113912400, "adjusted": 149.59}
  ]}],
  boxPlotChart: [
    {
      label: "Sample A",
      values: {
        Q1: 180,
        Q2: 200,
        Q3: 250,
        whisker_low: 115,
        whisker_high: 400,
        outliers: [50, 100, 425]
      }
    },
    {
      label: "Sample B",
      values: {
        Q1: 300,
        Q2: 350,
        Q3: 400,
        whisker_low: 225,
        whisker_high: 425,
        outliers: [175, 450, 480]
      }
    },
    {
      label: "Sample C",
      values: {
        Q1: 100,
        Q2: 200,
        Q3: 300,
        whisker_low: 25,
        whisker_high: 400,
        outliers: [450, 475]
      }
    }
  ],
  donutChart: [
    {
      key: "One",
      y: 5
    },
    {
      key: "Two",
      y: 2
    },
    {
      key: "Three",
      y: 9
    },
    {
      key: "Four",
      y: 7
    },
    {
      key: "Five",
      y: 4
    },
    {
      key: "Six",
      y: 3
    },
    {
      key: "Seven",
      y: .5
    }
  ],
  multiBarHorizontalChart: [
    {
      "key": "Series1",
      "color": "#d62728",
      "values": [
        {
          "label" : "Group A" ,
          "value" : -1.8746444827653
        } ,
        {
          "label" : "Group B" ,
          "value" : -8.0961543492239
        } ,
        {
          "label" : "Group C" ,
          "value" : -0.57072943117674
        } ,
        {
          "label" : "Group D" ,
          "value" : -2.4174010336624
        }
      ]
    },
    {
      "key": "Series2",
      "color": "#1f77b4",
      "values": [
        {
          "label" : "Group A" ,
          "value" : 25.307646510375
        } ,
        {
          "label" : "Group B" ,
          "value" : 16.756779544553
        } ,
        {
          "label" : "Group C" ,
          "value" : 18.451534877007
        } ,
        {
          "label" : "Group D" ,
          "value" : 8.6142352811805
        }
      ]
    }
  ],
  linePlusBarWithFocusChart: [
    {
      "key" : "Quantity" ,
      "bar": true,
      "values" : [ [ 1136005200000 , 1271000.0] , [ 1138683600000 , 1271000.0] , [ 1141102800000 , 1271000.0] , [ 1143781200000 , 0] , [ 1146369600000 , 0] , [ 1149048000000 , 0] , [ 1151640000000 , 0] , [ 1154318400000 , 0] , [ 1156996800000 , 0] , [ 1159588800000 , 3899486.0] , [ 1162270800000 , 3899486.0] , [ 1164862800000 , 3899486.0] , [ 1167541200000 , 3564700.0] , [ 1170219600000 , 3564700.0] , [ 1172638800000 , 3564700.0] , [ 1175313600000 , 2648493.0] , [ 1177905600000 , 2648493.0] , [ 1180584000000 , 2648493.0] , [ 1183176000000 , 2522993.0] , [ 1185854400000 , 2522993.0] , [ 1188532800000 , 2522993.0] , [ 1191124800000 , 2906501.0] , [ 1193803200000 , 2906501.0] , [ 1196398800000 , 2906501.0] , [ 1199077200000 , 2206761.0] , [ 1201755600000 , 2206761.0] , [ 1204261200000 , 2206761.0] , [ 1206936000000 , 2287726.0] , [ 1209528000000 , 2287726.0] , [ 1212206400000 , 2287726.0] , [ 1214798400000 , 2732646.0] , [ 1217476800000 , 2732646.0] , [ 1220155200000 , 2732646.0] , [ 1222747200000 , 2599196.0] , [ 1225425600000 , 2599196.0] , [ 1228021200000 , 2599196.0] , [ 1230699600000 , 1924387.0] , [ 1233378000000 , 1924387.0] , [ 1235797200000 , 1924387.0] , [ 1238472000000 , 1756311.0] , [ 1241064000000 , 1756311.0] , [ 1243742400000 , 1756311.0] , [ 1246334400000 , 1743470.0] , [ 1249012800000 , 1743470.0] , [ 1251691200000 , 1743470.0] , [ 1254283200000 , 1519010.0] , [ 1256961600000 , 1519010.0] , [ 1259557200000 , 1519010.0] , [ 1262235600000 , 1591444.0] , [ 1264914000000 , 1591444.0] , [ 1267333200000 , 1591444.0] , [ 1270008000000 , 1543784.0] , [ 1272600000000 , 1543784.0] , [ 1275278400000 , 1543784.0] , [ 1277870400000 , 1309915.0] , [ 1280548800000 , 1309915.0] , [ 1283227200000 , 1309915.0] , [ 1285819200000 , 1331875.0] , [ 1288497600000 , 1331875.0] , [ 1291093200000 , 1331875.0] , [ 1293771600000 , 1331875.0] , [ 1296450000000 , 1154695.0] , [ 1298869200000 , 1154695.0] , [ 1301544000000 , 1194025.0] , [ 1304136000000 , 1194025.0] , [ 1306814400000 , 1194025.0] , [ 1309406400000 , 1194025.0] , [ 1312084800000 , 1194025.0] , [ 1314763200000 , 1244525.0] , [ 1317355200000 , 475000.0] , [ 1320033600000 , 475000.0] , [ 1322629200000 , 475000.0] , [ 1325307600000 , 690033.0] , [ 1327986000000 , 690033.0] , [ 1330491600000 , 690033.0] , [ 1333166400000 , 514733.0] , [ 1335758400000 , 514733.0]]
    },
    {
      "key" : "Price" ,
      "values" : [ [ 1136005200000 , 71.89] , [ 1138683600000 , 75.51] , [ 1141102800000 , 68.49] , [ 1143781200000 , 62.72] , [ 1146369600000 , 70.39] , [ 1149048000000 , 59.77] , [ 1151640000000 , 57.27] , [ 1154318400000 , 67.96] , [ 1156996800000 , 67.85] , [ 1159588800000 , 76.98] , [ 1162270800000 , 81.08] , [ 1164862800000 , 91.66] , [ 1167541200000 , 84.84] , [ 1170219600000 , 85.73] , [ 1172638800000 , 84.61] , [ 1175313600000 , 92.91] , [ 1177905600000 , 99.8] , [ 1180584000000 , 121.191] , [ 1183176000000 , 122.04] , [ 1185854400000 , 131.76] , [ 1188532800000 , 138.48] , [ 1191124800000 , 153.47] , [ 1193803200000 , 189.95] , [ 1196398800000 , 182.22] , [ 1199077200000 , 198.08] , [ 1201755600000 , 135.36] , [ 1204261200000 , 125.02] , [ 1206936000000 , 143.5] , [ 1209528000000 , 173.95] , [ 1212206400000 , 188.75] , [ 1214798400000 , 167.44] , [ 1217476800000 , 158.95] , [ 1220155200000 , 169.53] , [ 1222747200000 , 113.66] , [ 1225425600000 , 107.59] , [ 1228021200000 , 92.67] , [ 1230699600000 , 85.35] , [ 1233378000000 , 90.13] , [ 1235797200000 , 89.31] , [ 1238472000000 , 105.12] , [ 1241064000000 , 125.83] , [ 1243742400000 , 135.81] , [ 1246334400000 , 142.43] , [ 1249012800000 , 163.39] , [ 1251691200000 , 168.21] , [ 1254283200000 , 185.35] , [ 1256961600000 , 188.5] , [ 1259557200000 , 199.91] , [ 1262235600000 , 210.732] , [ 1264914000000 , 192.063] , [ 1267333200000 , 204.62] , [ 1270008000000 , 235.0] , [ 1272600000000 , 261.09] , [ 1275278400000 , 256.88] , [ 1277870400000 , 251.53] , [ 1280548800000 , 257.25] , [ 1283227200000 , 243.1] , [ 1285819200000 , 283.75] , [ 1288497600000 , 300.98] , [ 1291093200000 , 311.15] , [ 1293771600000 , 322.56] , [ 1296450000000 , 339.32] , [ 1298869200000 , 353.21] , [ 1301544000000 , 348.5075] , [ 1304136000000 , 350.13] , [ 1306814400000 , 347.83] , [ 1309406400000 , 335.67] , [ 1312084800000 , 390.48] , [ 1314763200000 , 384.83] , [ 1317355200000 , 381.32] , [ 1320033600000 , 404.78] , [ 1322629200000 , 382.2] , [ 1325307600000 , 405.0] , [ 1327986000000 , 456.48] , [ 1330491600000 , 542.44] , [ 1333166400000 , 599.55] , [ 1335758400000 , 583.98]]
    }
  ].map(function(series) {
    series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
    return series;
  }),
  forceDirectedGraph: {
    "nodes":[
      {"name":"Myriel","group":1},
      {"name":"Napoleon","group":1},
      {"name":"Mlle.Baptistine","group":1},
      {"name":"Mme.Magloire","group":1},
      {"name":"CountessdeLo","group":1},
      {"name":"Geborand","group":1},
      {"name":"Champtercier","group":1},
      {"name":"Cravatte","group":1},
      {"name":"Count","group":1},
      {"name":"OldMan","group":1},
      {"name":"Labarre","group":2},
      {"name":"Valjean","group":2},
      {"name":"Marguerite","group":3},
      {"name":"Mme.deR","group":2},
      {"name":"Isabeau","group":2},
      {"name":"Gervais","group":2},
      {"name":"Tholomyes","group":3},
      {"name":"Listolier","group":3},
      {"name":"Fameuil","group":3},
      {"name":"Blacheville","group":3},
      {"name":"Favourite","group":3},
      {"name":"Dahlia","group":3},
      {"name":"Zephine","group":3},
      {"name":"Fantine","group":3},
      {"name":"Mme.Thenardier","group":4},
      {"name":"Thenardier","group":4},
      {"name":"Cosette","group":5},
      {"name":"Javert","group":4},
      {"name":"Fauchelevent","group":0},
      {"name":"Bamatabois","group":2},
      {"name":"Perpetue","group":3},
      {"name":"Simplice","group":2},
      {"name":"Scaufflaire","group":2},
      {"name":"Woman1","group":2},
      {"name":"Judge","group":2},
      {"name":"Champmathieu","group":2},
      {"name":"Brevet","group":2},
      {"name":"Chenildieu","group":2},
      {"name":"Cochepaille","group":2},
      {"name":"Pontmercy","group":4},
      {"name":"Boulatruelle","group":6},
      {"name":"Eponine","group":4},
      {"name":"Anzelma","group":4},
      {"name":"Woman2","group":5},
      {"name":"MotherInnocent","group":0},
      {"name":"Gribier","group":0},
      {"name":"Jondrette","group":7},
      {"name":"Mme.Burgon","group":7},
      {"name":"Gavroche","group":8},
      {"name":"Gillenormand","group":5},
      {"name":"Magnon","group":5},
      {"name":"Mlle.Gillenormand","group":5},
      {"name":"Mme.Pontmercy","group":5},
      {"name":"Mlle.Vaubois","group":5},
      {"name":"Lt.Gillenormand","group":5},
      {"name":"Marius","group":8},
      {"name":"BaronessT","group":5},
      {"name":"Mabeuf","group":8},
      {"name":"Enjolras","group":8},
      {"name":"Combeferre","group":8},
      {"name":"Prouvaire","group":8},
      {"name":"Feuilly","group":8},
      {"name":"Courfeyrac","group":8},
      {"name":"Bahorel","group":8},
      {"name":"Bossuet","group":8},
      {"name":"Joly","group":8},
      {"name":"Grantaire","group":8},
      {"name":"MotherPlutarch","group":9},
      {"name":"Gueulemer","group":4},
      {"name":"Babet","group":4},
      {"name":"Claquesous","group":4},
      {"name":"Montparnasse","group":4},
      {"name":"Toussaint","group":5},
      {"name":"Child1","group":10},
      {"name":"Child2","group":10},
      {"name":"Brujon","group":4},
      {"name":"Mme.Hucheloup","group":8}
    ],
    "links":[
      {"source":1,"target":0,"value":1},
      {"source":2,"target":0,"value":8},
      {"source":3,"target":0,"value":10},
      {"source":3,"target":2,"value":6},
      {"source":4,"target":0,"value":1},
      {"source":5,"target":0,"value":1},
      {"source":6,"target":0,"value":1},
      {"source":7,"target":0,"value":1},
      {"source":8,"target":0,"value":2},
      {"source":9,"target":0,"value":1},
      {"source":11,"target":10,"value":1},
      {"source":11,"target":3,"value":3},
      {"source":11,"target":2,"value":3},
      {"source":11,"target":0,"value":5},
      {"source":12,"target":11,"value":1},
      {"source":13,"target":11,"value":1},
      {"source":14,"target":11,"value":1},
      {"source":15,"target":11,"value":1},
      {"source":17,"target":16,"value":4},
      {"source":18,"target":16,"value":4},
      {"source":18,"target":17,"value":4},
      {"source":19,"target":16,"value":4},
      {"source":19,"target":17,"value":4},
      {"source":19,"target":18,"value":4},
      {"source":20,"target":16,"value":3},
      {"source":20,"target":17,"value":3},
      {"source":20,"target":18,"value":3},
      {"source":20,"target":19,"value":4},
      {"source":21,"target":16,"value":3},
      {"source":21,"target":17,"value":3},
      {"source":21,"target":18,"value":3},
      {"source":21,"target":19,"value":3},
      {"source":21,"target":20,"value":5},
      {"source":22,"target":16,"value":3},
      {"source":22,"target":17,"value":3},
      {"source":22,"target":18,"value":3},
      {"source":22,"target":19,"value":3},
      {"source":22,"target":20,"value":4},
      {"source":22,"target":21,"value":4},
      {"source":23,"target":16,"value":3},
      {"source":23,"target":17,"value":3},
      {"source":23,"target":18,"value":3},
      {"source":23,"target":19,"value":3},
      {"source":23,"target":20,"value":4},
      {"source":23,"target":21,"value":4},
      {"source":23,"target":22,"value":4},
      {"source":23,"target":12,"value":2},
      {"source":23,"target":11,"value":9},
      {"source":24,"target":23,"value":2},
      {"source":24,"target":11,"value":7},
      {"source":25,"target":24,"value":13},
      {"source":25,"target":23,"value":1},
      {"source":25,"target":11,"value":12},
      {"source":26,"target":24,"value":4},
      {"source":26,"target":11,"value":31},
      {"source":26,"target":16,"value":1},
      {"source":26,"target":25,"value":1},
      {"source":27,"target":11,"value":17},
      {"source":27,"target":23,"value":5},
      {"source":27,"target":25,"value":5},
      {"source":27,"target":24,"value":1},
      {"source":27,"target":26,"value":1},
      {"source":28,"target":11,"value":8},
      {"source":28,"target":27,"value":1},
      {"source":29,"target":23,"value":1},
      {"source":29,"target":27,"value":1},
      {"source":29,"target":11,"value":2},
      {"source":30,"target":23,"value":1},
      {"source":31,"target":30,"value":2},
      {"source":31,"target":11,"value":3},
      {"source":31,"target":23,"value":2},
      {"source":31,"target":27,"value":1},
      {"source":32,"target":11,"value":1},
      {"source":33,"target":11,"value":2},
      {"source":33,"target":27,"value":1},
      {"source":34,"target":11,"value":3},
      {"source":34,"target":29,"value":2},
      {"source":35,"target":11,"value":3},
      {"source":35,"target":34,"value":3},
      {"source":35,"target":29,"value":2},
      {"source":36,"target":34,"value":2},
      {"source":36,"target":35,"value":2},
      {"source":36,"target":11,"value":2},
      {"source":36,"target":29,"value":1},
      {"source":37,"target":34,"value":2},
      {"source":37,"target":35,"value":2},
      {"source":37,"target":36,"value":2},
      {"source":37,"target":11,"value":2},
      {"source":37,"target":29,"value":1},
      {"source":38,"target":34,"value":2},
      {"source":38,"target":35,"value":2},
      {"source":38,"target":36,"value":2},
      {"source":38,"target":37,"value":2},
      {"source":38,"target":11,"value":2},
      {"source":38,"target":29,"value":1},
      {"source":39,"target":25,"value":1},
      {"source":40,"target":25,"value":1},
      {"source":41,"target":24,"value":2},
      {"source":41,"target":25,"value":3},
      {"source":42,"target":41,"value":2},
      {"source":42,"target":25,"value":2},
      {"source":42,"target":24,"value":1},
      {"source":43,"target":11,"value":3},
      {"source":43,"target":26,"value":1},
      {"source":43,"target":27,"value":1},
      {"source":44,"target":28,"value":3},
      {"source":44,"target":11,"value":1},
      {"source":45,"target":28,"value":2},
      {"source":47,"target":46,"value":1},
      {"source":48,"target":47,"value":2},
      {"source":48,"target":25,"value":1},
      {"source":48,"target":27,"value":1},
      {"source":48,"target":11,"value":1},
      {"source":49,"target":26,"value":3},
      {"source":49,"target":11,"value":2},
      {"source":50,"target":49,"value":1},
      {"source":50,"target":24,"value":1},
      {"source":51,"target":49,"value":9},
      {"source":51,"target":26,"value":2},
      {"source":51,"target":11,"value":2},
      {"source":52,"target":51,"value":1},
      {"source":52,"target":39,"value":1},
      {"source":53,"target":51,"value":1},
      {"source":54,"target":51,"value":2},
      {"source":54,"target":49,"value":1},
      {"source":54,"target":26,"value":1},
      {"source":55,"target":51,"value":6},
      {"source":55,"target":49,"value":12},
      {"source":55,"target":39,"value":1},
      {"source":55,"target":54,"value":1},
      {"source":55,"target":26,"value":21},
      {"source":55,"target":11,"value":19},
      {"source":55,"target":16,"value":1},
      {"source":55,"target":25,"value":2},
      {"source":55,"target":41,"value":5},
      {"source":55,"target":48,"value":4},
      {"source":56,"target":49,"value":1},
      {"source":56,"target":55,"value":1},
      {"source":57,"target":55,"value":1},
      {"source":57,"target":41,"value":1},
      {"source":57,"target":48,"value":1},
      {"source":58,"target":55,"value":7},
      {"source":58,"target":48,"value":7},
      {"source":58,"target":27,"value":6},
      {"source":58,"target":57,"value":1},
      {"source":58,"target":11,"value":4},
      {"source":59,"target":58,"value":15},
      {"source":59,"target":55,"value":5},
      {"source":59,"target":48,"value":6},
      {"source":59,"target":57,"value":2},
      {"source":60,"target":48,"value":1},
      {"source":60,"target":58,"value":4},
      {"source":60,"target":59,"value":2},
      {"source":61,"target":48,"value":2},
      {"source":61,"target":58,"value":6},
      {"source":61,"target":60,"value":2},
      {"source":61,"target":59,"value":5},
      {"source":61,"target":57,"value":1},
      {"source":61,"target":55,"value":1},
      {"source":62,"target":55,"value":9},
      {"source":62,"target":58,"value":17},
      {"source":62,"target":59,"value":13},
      {"source":62,"target":48,"value":7},
      {"source":62,"target":57,"value":2},
      {"source":62,"target":41,"value":1},
      {"source":62,"target":61,"value":6},
      {"source":62,"target":60,"value":3},
      {"source":63,"target":59,"value":5},
      {"source":63,"target":48,"value":5},
      {"source":63,"target":62,"value":6},
      {"source":63,"target":57,"value":2},
      {"source":63,"target":58,"value":4},
      {"source":63,"target":61,"value":3},
      {"source":63,"target":60,"value":2},
      {"source":63,"target":55,"value":1},
      {"source":64,"target":55,"value":5},
      {"source":64,"target":62,"value":12},
      {"source":64,"target":48,"value":5},
      {"source":64,"target":63,"value":4},
      {"source":64,"target":58,"value":10},
      {"source":64,"target":61,"value":6},
      {"source":64,"target":60,"value":2},
      {"source":64,"target":59,"value":9},
      {"source":64,"target":57,"value":1},
      {"source":64,"target":11,"value":1},
      {"source":65,"target":63,"value":5},
      {"source":65,"target":64,"value":7},
      {"source":65,"target":48,"value":3},
      {"source":65,"target":62,"value":5},
      {"source":65,"target":58,"value":5},
      {"source":65,"target":61,"value":5},
      {"source":65,"target":60,"value":2},
      {"source":65,"target":59,"value":5},
      {"source":65,"target":57,"value":1},
      {"source":65,"target":55,"value":2},
      {"source":66,"target":64,"value":3},
      {"source":66,"target":58,"value":3},
      {"source":66,"target":59,"value":1},
      {"source":66,"target":62,"value":2},
      {"source":66,"target":65,"value":2},
      {"source":66,"target":48,"value":1},
      {"source":66,"target":63,"value":1},
      {"source":66,"target":61,"value":1},
      {"source":66,"target":60,"value":1},
      {"source":67,"target":57,"value":3},
      {"source":68,"target":25,"value":5},
      {"source":68,"target":11,"value":1},
      {"source":68,"target":24,"value":1},
      {"source":68,"target":27,"value":1},
      {"source":68,"target":48,"value":1},
      {"source":68,"target":41,"value":1},
      {"source":69,"target":25,"value":6},
      {"source":69,"target":68,"value":6},
      {"source":69,"target":11,"value":1},
      {"source":69,"target":24,"value":1},
      {"source":69,"target":27,"value":2},
      {"source":69,"target":48,"value":1},
      {"source":69,"target":41,"value":1},
      {"source":70,"target":25,"value":4},
      {"source":70,"target":69,"value":4},
      {"source":70,"target":68,"value":4},
      {"source":70,"target":11,"value":1},
      {"source":70,"target":24,"value":1},
      {"source":70,"target":27,"value":1},
      {"source":70,"target":41,"value":1},
      {"source":70,"target":58,"value":1},
      {"source":71,"target":27,"value":1},
      {"source":71,"target":69,"value":2},
      {"source":71,"target":68,"value":2},
      {"source":71,"target":70,"value":2},
      {"source":71,"target":11,"value":1},
      {"source":71,"target":48,"value":1},
      {"source":71,"target":41,"value":1},
      {"source":71,"target":25,"value":1},
      {"source":72,"target":26,"value":2},
      {"source":72,"target":27,"value":1},
      {"source":72,"target":11,"value":1},
      {"source":73,"target":48,"value":2},
      {"source":74,"target":48,"value":2},
      {"source":74,"target":73,"value":3},
      {"source":75,"target":69,"value":3},
      {"source":75,"target":68,"value":3},
      {"source":75,"target":25,"value":3},
      {"source":75,"target":48,"value":1},
      {"source":75,"target":41,"value":1},
      {"source":75,"target":70,"value":1},
      {"source":75,"target":71,"value":1},
      {"source":76,"target":64,"value":1},
      {"source":76,"target":65,"value":1},
      {"source":76,"target":66,"value":1},
      {"source":76,"target":63,"value":1},
      {"source":76,"target":62,"value":1},
      {"source":76,"target":48,"value":1},
      {"source":76,"target":58,"value":1}
    ]
  }
}

// utils
function sinAndCos() {
  var sin = [],sin2 = [],
    cos = [];

  //Data is represented as an array of {x,y} pairs.
  for (var i = 0; i < 100; i++) {
    sin.push({x: i, y: Math.sin(i/10)});
    sin2.push({x: i, y: i % 10 == 5 ? null : Math.sin(i/10) *0.25 + 0.5});
    cos.push({x: i, y: .5 * Math.cos(i/10+ 2) + Math.random() / 10});
  }

  //Line chart data should be sent as an array of series objects.
  return [
    {
      values: sin,      //values - represents the array of {x,y} data points
      key: 'Sine Wave', //key  - the name of the series.
      color: '#ff7f0e'  //color - optional: choose your own line color.
    },
    {
      values: cos,
      key: 'Cosine Wave',
      color: '#2ca02c'
    },
    {
      values: sin2,
      key: 'Another sine wave',
      color: '#7777ff',
      area: true      //area - set to true if you want this line to turn into a filled area chart.
    }
  ];
}
function generateDataScatter(groups, points) {
  var data = [],
    shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
    random = d3.random.normal();

  for (var i = 0; i < groups; i++) {
    data.push({
      key: 'Group ' + i,
      values: []
    });

    for (var j = 0; j < points; j++) {
      data[i].values.push({
        x: random()
        , y: random()
        , size: Math.random()
        , shape: shapes[j % 6]
      });
    }
  }
  return data;
}

// MultiBarChart
/* Random Data Generator (took from nvd3.org) */
function generateDataMultiBar() {
  return stream_layers(3,50+Math.random()*50,.1).map(function(data, i) {
    return {
      key: 'Stream' + i,
      values: data
    };
  });
}

/* Inspired by Lee Byron's test data generator. */
function stream_layers(n, m, o) {
  if (arguments.length < 3) o = 0;
  function bump(a) {
    var x = 1 / (.1 + Math.random()),
      y = 2 * Math.random() - .5,
      z = 10 / (.1 + Math.random());
    for (var i = 0; i < m; i++) {
      var w = (i / m - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  }
  return d3.range(n).map(function() {
    var a = [], i;
    for (i = 0; i < m; i++) a[i] = o + o * Math.random();
    for (i = 0; i < 5; i++) bump(a);
    return a.map(stream_index);
  });
}

function stream_index(d, i) {
  return {x: i, y: Math.max(0, d)};
}
