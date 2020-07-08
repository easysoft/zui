section: view
id: chart
description: Show graphs and pie charts
icon: icon-bar-chart
filter: tubiao tb quxiantu qxt bingtu bt
---

#

<style>
.text-middle th, .text-middle td {
    vertical-align: middle;
}
</style>

ZUI chart view use [Chart.js](http://www.chartjs.org/).

Graphs, pie chart and histogram are currently supported.

Chart.js in ZUI has the color changed. You can use colors listed in [Colorset](#javascript/colorset) as themes and keep is consistent with ZUI style.

## Create a chart

Chart view is an independent component. You need to introduce lib/ resources from local or CDN:

```html
<script src="lib/chart/zui.chart.min.js"></script>
```

In order to create a chart, add a `<canvas>` label to HTML first.

```html
<canvas id="myChart" width="400" height="400"></canvas>
```

The second step is to instantiate one`Chart` object. There are two ways to create `Chart` instance.

### Use $.zui.Chart to create an instance

Creating an instance requires to get `2d context` for `<canvas>`, then call `$.zui.Chart` constructor.

```js
// use jQuery method to get 2d context object
var ctx = $("#myChart").get(0).getContext("2d");
// Or use document.getElementById to get 2d context object
// var ctx = document.getElementById("myChart").getContext("2d");

// Use $.zui.Chart to structure Chart instance
var myNewChart = new $.zui.Chart(ctx);
```

### Use $.fn.chart to create an instance

ZUI extended jQuery functions, so you can use jQuery to select canvas node object to create Chart instance.

```js
// Create a Chart instance of specified canvas
var myChart = $("#myChart").chart();
```

If jQuery instance contains multiple canvas, return all Chart instances as arrays.

```js
// Return all Chart instances of Chart instances as arrays
var allMyCharts = $("canvas").chart();
```

<div class="alert alert-warning">
  <h4>Tips</h4>
  <p>Usually jQuery objects are returned when jQuery methods are called on the object. However, **chart object instances are returned** if you call `$().chart()` methods, including `$().lineChart()`, `$().doughnutChart()`, `$().pieChart()`, `$().barChart()`.</p>
</div>

## Global options

Global options can be applied to all available icon types, including graph, pie and histogram. All available global options and default values are listed below:

```js
{
    // Boolean - Whether to perform animations
    animation: true,

    // Number - Number of steps executed in the animation. The larger the value is, the longer the animation is executed.
    animationSteps: 60,

    // String - Animation
    // Available animations include:
    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
    //  easeOutElastic, easeInCubic]
    animationEasing: "easeOutQuart",

    // Boolean - Whether to display the coordinate grid
    showScale: true,

    // Boolean - Whether to use a custom strategy to draw a coordinate grid to override the default scheme
    scaleOverride: false,

    // ** The following options are required when scaleOverride is set as true **
    // Number - Number of grids when customizing the grid
    scaleSteps: null,
    // Number - Customize the size of each grid of the coordinate grid
    scaleStepWidth: null,
    // Number - Start scale value when customizing the grid
    scaleStartValue: null,

    // String - Coordinate grid line color
    scaleLineColor: "rgba(0,0,0,.1)",

    // Number - Coordinate grid line width
    scaleLineWidth: 1,

    // Boolean - Whether to display the scale label text for the coordinate grid
    scaleShowLabels: true,

    // Interpolated JS string - Coordinate scale formatted text
    scaleLabel: "<%=value%>",

    // Boolean - Whether to display the scale only when the coordinates are integers. Score scale will be skipped.
    scaleIntegersOnly: true,

    // Boolean - Whether the scale value of the coordinate must start from 0. Otherwise it will start with the minimum value in the data.
    scaleBeginAtZero: false,

    // String - Coordinate scale text font
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Coordinate scale text font size
    scaleFontSize: 12,

    // String - Coordinate scale text style
    scaleFontStyle: "normal",

    // String - Coordinate scale text color
    scaleFontColor: "#666",

    // Boolean - Whether to enable responsive design. Redraw it when the window size changes.
    responsive: false,

    // Boolean - If responsive design is enabled, judge whether to maintain the original scale when scaling. If set as false, redraw in the new container size.
    maintainAspectRatio: true,

    // Boolean - Whether to display tooltip text when touch or mouse movement
    showTooltips: true,

    // Boolean - Whether to use a custom function when drawing tooltip text
    customTooltips: false,

    // Array - Show trigger events for tooltips
    tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

    // String - Tooltip background color
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - Tooltip font
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip font size
    tooltipFontSize: 14,

    // String - Tooltip font style
    tooltipFontStyle: "normal",

    // String - Tooltip font color
    tooltipFontColor: "#fff",

    // String - Tooltip title font
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - Tooltip title font size
    tooltipTitleFontSize: 14,

    // String - Tooltip title font style
    tooltipTitleFontStyle: "bold",

    // String - Tooltip title font color
    tooltipTitleFontColor: "#fff",

    // Number - Tooltip size in the vertical direction
    tooltipYPadding: 6,

    // Number - Tooltip size in the horizontal direction
    tooltipXPadding: 6,

    // Number - Tooltip triangle arrow size
    tooltipCaretSize: 8,

    // Number - Tooltip border fillet size
    tooltipCornerRadius: 6,

    // Number - Tooltips at X Offset on coordinates
    tooltipXOffset: 10,

    // String - Tooltip template string
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - Template string for multi-entry tooltips
    multiTooltipTemplate: "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>",

    // String - Background color of multi-entry tooltips
    multiTooltipKeyBackground: '#fff',

    // Function - Callback function when animation is executing
    onAnimationProgress: function() {},

    // Function - Callback function when the animation finishes executing
    onAnimationComplete: function() {}
}
```

## Line Chart

A line chart displays data with curves that connect one or more sets of points. Curves are often used to show trends in data, or comparing trends in multiple data sets.

### Examples

<div class="example">
  <div class="chart-canvas"><canvas id="myLineChart" width="100" height="36"></canvas></div>
</div>

```js
var data = {
    // Label data includes label text displayed on the X axis in sequence
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [{
        // Data set name. It will show up in the example.
        label: "Red team",

        // Color theme. It can be'#fff', 'rgb(255,0,0)', 'rgba(255,0,0,0.85)', 'red' or color name in ZUI colorset.\         // Or specified as 'random' to use a random color theme
        color: "red",
        // You do not have to specify a color theme. Use the values below to apply color settings separately. These values will overwrite color themes generated in color.
        // fillColor: "rgba(220,220,220,0.2)",
        // strokeColor: "rgba(220,220,220,1)",
        // pointColor: "rgba(220,220,220,1)",
        // pointStrokeColor: "#fff",
        // pointHighlightFill: "#fff",
        // pointHighlightStroke: "rgba(220,220,220,1)",

        // data set
        data: [65, 59, 80, 81, 56, 55, 40, 44, 55, 70, 30, 40]
    }, {
        label: "Green team",
        color: "green",
        data: [28, 48, 40, 19, 86, 27, 90, 60, 30, 44, 50, 66]
    }]
};

var options = {}; // Chart configuration item. It can be blank, so the default configuration will be used.

var myLineChart = $("#myLineChart").lineChart(data, options);
```

#### Options

The following list of configurable options and their default values:

```js
{
    ///Boolean - Whether to display the grid on the chart
    scaleShowGridLines : true,

    //String - Grid line color
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - Grid width
    scaleGridLineWidth : 1,

    //Boolean - Whether to display horizontal coordinates, which is an X axis.
    scaleShowHorizontalLines: true,

    //Boolean - Whether to display vertical coordinates, which is an Y axis.
    scaleShowVerticalLines: true,

    //Boolean - Whether it is displayed as a smooth curve
    bezierCurve : true,

    //Number - Bezier parameters used to smooth the curve
    bezierCurveTension : 0.4,

    //Boolean - Whether to display the vertex
    pointDot : true,

    //Number - Vertex radius in pixels
    pointDotRadius : 4,

    //Number - Vertex stroke line width in pixels
    pointDotStrokeWidth : 1,

    //Number - Detects the radius of the mouse click in pixels
    pointHitDetectionRadius : 20,

    //Boolean - whether
    datasetStroke : true,

    //Number - Data set line width in pixels
    datasetStrokeWidth : 2,

    //Boolean - Whether to fill the dataset with color
    datasetFill : true,

    //String - Legend template
    legendTemplate : "<ul class='<%=name.toLowerCase()%>-legend'><% for (var i=0; i<datasets.length; i++){%><li><span style='background-color:<%=datasets[i].strokeColor%>'></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
```

### Methods

The chart instance obtained after creating the chart has some useful methods.

#### .getPointsAtEvent(event)

Pass a jQuery click event parameter, then a set of points corresponding to the horizontal scale of the mouse clicked on the chart is returned.

```js
$("#myLineChart").on("click", function(evt){
    var activePoints = myLineChart.getPointsAtEvent(evt);
    // activePoints is an array. If there is no corresponding data in the placement where the current click is located, it is empty.
});
```

#### .update()

Update data sets and redraw the chart.

```js
// Update the third data value of the first data set as 50
myLineChart.datasets[0].points[2].value = 50;

// Call the update method to redraw the chart based on the updated data set
myLineChart.update();
```

#### .addData(valuesArray, label)

Add a new set of data to the chart dataset and immediately redraw the chart.

```js
// Add a new set of data to the dataset
myLineChart.addData([40, 60], "Thirteen");
```

#### .removeData()

Remove the first set of data in the dataset and redraw the chart. Animation will be applied.

```js
myLineChart.removeData();
```

## Pie chart

### Examples

Pie chart supports general pie charts and doughnut charts.

<div class="example">
  <div class="row">
    <div class="col-xs-6 text-center"><canvas id="myPieChart" width="320" height="200"></canvas></div>
    <div class="col-xs-6 text-center"><canvas id="myDoughnutChart" width="320" height="200"></canvas></div>
  </div>
</div>

```js
var data = [{
    value: 150,
    color: "blue", // Color name
    label: "Team Blue"
}, {
    value: 250,
    color:"#F7464A", // Custom color
    // highlight: "#FF5A5E", // Custom highlight color
    label: "Team Red"
}, {
    value: 50,
    color: 'green',
    label: "Team Green"
}, {
    // If no color value is specified, use random colors.
    //
    value: 100,
    label: "Random team"
}];

// Chart options. It can be left blank, so the default is applied.
var options = {
    scaleShowLabels: true, // Display labels
};

// Create a pie chart
var myPieChart = $("#myPieChart").pieChart(data, options);

// Create a doughnut chart
var myDoughnutChart = $("#myDoughnutChart").doughnutChart(data, {segmentShowStroke: false});
```

### Options

List all the options that can be configured and their default values:

```js
{
    //Boolean - Whether to display strokes
    segmentShowStroke : true,

    //String - Color of stroke split line
    segmentStrokeColor : "#fff",

    //Number - Stroke split line width in pixels
    segmentStrokeWidth : 2,

    //Number - Percentage of the radius of the circle left in the middle of the doughnut
    percentageInnerCutout : 50, // If set as 0, it is a pie chart.

    // Boolean - Whether to display the label
    scaleShowLabels: false,

    // Label text template
    scaleLabel: "<%=value%>",

    // String - Label placement with optional values:
    // 'outside' - Displayed outside the sector
    // 'inside' - Displayed in the sector area
    // 'auto' - Automatically determine the display placement
    scaleLabelPlacement: "auto",

    // Number - Label line height
    scaleLineHeight: 1,

    //Number - Total number of steps performed by the animation
    animationSteps : 60,

    //String - Animation
    animationEasing : "easeOutBounce",

    //Boolean - Whether to enable the rotation
    animateRotate : true,

    //Boolean - Whether to enable the zoom
    animateScale : false,

    //String - Legend template
    legendTemplate : "<ul class='<%=name.toLowerCase()%>-legend'><% for (var i=0; i<segments.length; i++){%><li><span style='background-color:<%=segments[i].fillColor%>'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
}
```

### Methods and events

#### .getSegmentsAtEvent(event)

Pass a parameter of a mouse click event, and the data corresponding to the currently clicked sector will be returned as an array.

```js
$("#myPieChart").on("click", function(evt){
    var activePoints = myPieChart.getSegmentsAtEvent(evt);
    // activePoints is an array. If there is no corresponding data in the position where the current click is located, it is empty.
});
```

#### .update()

Update data set and redraw the chart.

```js
// Update the second data value of the first data set( only one data set by default) as 50
myPieChart.segments[1].value = 10;

// Call the update method to redraw the chart based on the updated data set
myPieChart.update();
```

#### .addData(segmentData, index)

Add a new set of data to the chart dataset, and immediately redraw to the chart.

```js
myPieChart.addData({
    value: 130,
    color: "purple",
    label: "Team Purple"
});
```

#### .removeData(index)

Remove data from the specified index. If you do not specify an index, the last data will be removed by default.

```js
myPieChart.removeData();
```

#### Comprehensive examples

<div class="example">
  <div class="row">
    <div class="col-xs-6">
      <table class="table table-bordered text-middle">
        <tbody>
          <tr><th>getSegmentsAtEvent</th><td id="pieGetSegmentsAtEvent"><span class="text-muted"><i class="icon icon-info-sign"></i> Click on the chart to get the clicked data</span></td></tr>
          <tr><th>update</th><td>
            <div class="input-group">
              <span class="input-group-addon">Change</span>
              <input type="text" id="updatePieNum" name="updatePieNum" class="form-control" value="0">
              <span class="input-group-addon fix-border">value as</span>
              <input type="text" id="updatePieValue" name="updatePieValue" class="form-control" value="100">
              <span class="input-group-btn"><button type="button" id="updatePie" class="btn btn-primary">Confirm</button></span>
            </div>
          </td></tr>
          <tr><th>addData</th><td>
            <div class="input-group">
              <span class="input-group-addon">Increased Value</span>
              <input type="text" id="addPieValue" name="addPieValue" class="form-control" value="50" placeholder="value">
              <span class="input-group-addon fix-border">Title</span>
              <input type="text" id="addPieLabel" name="addPieLabel" class="form-control" value="New team" placeholder="label">
              <span class="input-group-btn"><button type="button" id="addPie" class="btn btn-primary">Confirm</button></span>
            </div>
          </td></tr>
          <tr><th>update</th><td>
            <div class="input-group">
              <span class="input-group-addon">Remove</span>
              <input type="text" id="removePieIndex" name="removePieIndex" class="form-control" placeholder="Default last">
              <span class="input-group-addon fix-border">Data</span>
              <span class="input-group-btn"><button type="button" id="removePieData" class="btn btn-primary">Confirm</button></span>
            </div>
          </td></tr>
        </tbody>
      </table>
    </div>
    <div class="col-xs-3 text-center"><canvas id="myPieChart2" width="200" height="200"></canvas></div>
    <div class="col-xs-3 text-center"><canvas id="myDoughnutChart2" width="200" height="200"></canvas></div>
  </div>
</div>

## Histogram

### Examples

<div class="example"><div class="chart-canvas"><canvas id="myBarChart" width="500" height="200"></canvas></div></div>

```js
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "Team Blue",
            color: 'blue',
            data: [65, 59, 80, 81, 56, 55, 40]
        }, {
            label: "Team Green",
            color: 'green',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

var options = {responsive: true}; // Chart options. It can be left blank, so the default configuration is used.
var myBarChart = $('#myBarChart').barChart(data, options);
```

### Configuration options

All available options and their default values are listed below:

```js
{
    //Boolean - Whether the vertical scale starts from 0S. If false, start from the minimum.
    scaleBeginAtZero: true,

    //Boolean - Whether to display grid lines
    scaleShowGridLines: true,

    //String - Grid line color
    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Grid line width
    scaleGridLineWidth: 1,

    //Boolean - Whether to display the horizontal axis
    scaleShowHorizontalLines: true,

    //Boolean - Whether to display the vertical axis
    scaleShowVerticalLines: true,

    //Boolean - Whether to draw strokes for bars
    barShowStroke: true,

    //Number - Column strip stroke width
    barStrokeWidth: 1,

    //Number - The width of each set of values on the horizontal axis
    barValueSpacing: 5,

    //Number - Adjacent interval for each data set
    barDatasetSpacing: 1,

    //String - Legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
}
```

### Methods

#### .getBarsAtEvent(event)

#### .update()

#### .addData(valuesArray, label)

#### .removeData()

## IE 8 Compatibility

IE 8 and earlier versions are not supported by Canvas, so you need to introduce [ExplorerCanvas](https://code.google.com/p/explorercanvas/) to support the drawing.

```html
<!--[if lt IE 9]>
  <script src="dist/lib/ieonly/excanvas.js"></script>
<![endif]-->
```

<script src="../../dist/lib/chart/zui.chart.min.js"></script>
<script>
function afterPageLoad() {
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
        {
            label: "Team Red",
            color: "red",
            data: [65, 59, 80, 81, 56, 55, 40, 44, 55, 70, 30, 40]
        }, {
            label: "Team Green",
            color: "green",
            data: [28, 48, 40, 19, 86, 27, 90, 60, 30, 44, 50, 66]
        }]
    };
    var myLineChart = $("#myLineChart").lineChart(data, {bezierCurve: true, responsive: true});

    var data2 = [
        {
            value: 150,
            color: "blue", // Color name
            label: "Team Blue"
        }, {
            value: 250,
            color:"#F7464A", // Custom color
            // highlight: "#FF5A5E", // Custom highlight color
            label: "Team Red"
        }, {
            value: 50,
            color: 'green',
            label: "Team Green"
        }, {
            // If no color value is specified, use random colors.
            //
            value: 100,
            label: "Random team"
        }
    ];
    // Create a pie chart
    var myPieChart = $("#myPieChart").pieChart(data2, {scaleShowLabels: true});
    // Create a doughnut chart
    var myDoughnutChart = $("#myDoughnutChart").doughnutChart(data2, {segmentShowStroke: false, scaleShowLabels: true, scaleLabelPlacement: 'outside'});

    // Comprehensive example
    var myPieChart2 = $("#myPieChart2").pieChart(data2);
    var myDoughnutChart2 = $("#myDoughnutChart2").doughnutChart(data2, {segmentShowStroke: false});
    $("#myPieChart2").on('click', function(e){
        var point = myPieChart2.getSegmentsAtEvent(e)[0];
        $('#pieGetSegmentsAtEvent').html(point ? 'You clicked <strong><i class="icon text-muted icon-circle"></i> Pie Chart </strong>: <span style="color: #fff; display: inline-block; padding: 0 5px; background-color: ' + point.fillColor + '">' + point.label + '</span>. Current value is <strong>' + point.value + '</strong>' : 'You clicked on a blank area.');
    });
    $("#myDoughnutChart2").on('click', function(e){
        var point = myDoughnutChart2.getSegmentsAtEvent(e)[0];
        $('#pieGetSegmentsAtEvent').html(point ? 'You clicked <strong><i class="icon text-muted icon-circle"></i> Ring diagram </strong>of <strong style="color: #fff; display: inline-block; padding: 0 5px; background-color: ' + point.fillColor + '">' + point.label + '</strong>，Current value <strong>' + point.value + '</strong>' : 'You clicked on a blank place。');
    });
    $('#updatePie').on('click', function(){
        var num = parseInt($('#updatePieNum').val());
        var val = parseInt($('#updatePieValue').val());
        if(!isNaN(num) && !isNaN(val)) {
            myPieChart2.segments[num].value = val;
            myPieChart2.update();
            myDoughnutChart2.segments[num].value = val;
            myDoughnutChart2.update();
            var next = Math.max(1,Math.round(Math.random() * 100));
            var nextIndex = Math.floor(Math.random() * myPieChart2.segments.length);
            $('#updatePieValue').val(next);
            $('#updatePieNum').val(nextIndex);
        } else {
            $.zui.messager.warning('Please enter valid data。', {placement: 'center'});
        }
    });

    $('#addPie').click(function(){
        var val = parseInt($('#addPieValue').val());
        var label = $('#addPieLabel').val();
        if(!isNaN(val) && label) {
            var dt = {
                value: val,
                label: label
            };
            myPieChart2.addData(dt);
            myDoughnutChart2.addData(dt);

            var next = Math.max(1,Math.round(Math.random() * 100));
            $('#addPieValue').val(next);
            $('#addPieLabel').val('lucky' + next);
        } else {
            $.zui.messager.warning('Please enter valid data。', {placement: 'center'});
        }
    });

    $('#removePieData').click(function(){
        var idx = parseInt($('#removePieIndex').val());
        if(!isNaN(idx) || !idx) {
            idx = undefined;
            myPieChart2.removeData(idx);
            myDoughnutChart2.removeData(idx);
            var nextIndex = Math.floor(Math.random() * myPieChart2.segments.length);
            $('#removePieIndex').val(nextIndex);
        } else {
            $.zui.messager.warning('Please enter valid data。', {placement: 'center'});
        }
    });

    var data3 = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets:
        [
            {
                label: "Blue team",
                color: 'blue',
                data: [65, 59, 80, 81, 56, 55, 40]
            }, {
                label: "Green team",
                color: 'green',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    var myBarChart = $('#myBarChart').barChart(data3, {responsive: true});
}
</script>
