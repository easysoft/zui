/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.2
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */

/// ----- ZUI change begin -----
/// Add jquery object to namespace

/// (function(){ // Old code
(function($){

    /// ----- ZUI change end -----
    "use strict";

/// ----- ZUI change begin -----
/// Change root to zui shared object
///
///   var root = this, // old code
      var root = $ && $.zui ? $.zui : this,
/// ----- ZUI change end -----
        Chart = root.Chart,
        helpers = Chart.helpers;


    var defaultConfig = {
        //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
        scaleBeginAtZero: true,

        //Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines: true,

        //String - Colour of the grid lines
        scaleGridLineColor: "rgba(0,0,0,.05)",

        //Number - Width of the grid lines
        scaleGridLineWidth: 1,

        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: true,

        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: true,

/// ZUI change begin
        //Boolean - Whether to show beyond lines
        scaleShowBeyondLine: true,
/// ZUI change end
/// 
        //Boolean - If there is a stroke on each bar
        barShowStroke: true,

        //Number - Pixel width of the bar stroke
/// ZUI change begin
///        barStrokeWidth: 2,
        barStrokeWidth: 1,

        // String - Sacle value labels placement
        scaleValuePlacement: 'auto', // none, auto, outside, inside-top, inside-middle, inside-bottom
/// ZUI change end

        //Number - Spacing between each of the X value sets
        barValueSpacing: 5,

        //Number - Spacing between data sets within X values
        barDatasetSpacing: 1,

        //String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    };


    Chart.Type.extend(
    {
        name: "Bar",
        defaults: defaultConfig,
        initialize: function(data)
        {

            //Expose options as a scope variable here so we can access it in the ScaleClass
            var options = this.options;

            this.ScaleClass = Chart.Scale.extend(
            {
                offsetGridLines: true,
                calculateBarX: function(datasetCount, datasetIndex, barIndex)
                {
                    //Reusable method for calculating the xPosition of a given bar based on datasetIndex & width of the bar
                    var xWidth = this.calculateBaseWidth(),
                        xAbsolute = this.calculateX(barIndex) - (xWidth / 2),
                        barWidth = this.calculateBarWidth(datasetCount);

                    return xAbsolute + (barWidth * datasetIndex) + (datasetIndex * options.barDatasetSpacing) + barWidth / 2;
                },
                calculateBaseWidth: function()
                {
                    return (this.calculateX(1) - this.calculateX(0)) - (2 * options.barValueSpacing);
                },
                calculateBarWidth: function(datasetCount)
                {
                    //The padding between datasets is to the right of each bar, providing that there are more than 1 dataset
                    var baseWidth = this.calculateBaseWidth() - ((datasetCount - 1) * options.barDatasetSpacing);

                    return (baseWidth / datasetCount);
                }
            });

            this.datasets = [];

            //Set up tooltip events on the chart
            if (this.options.showTooltips)
            {
                helpers.bindEvents(this, this.options.tooltipEvents, function(evt)
                {
                    var activeBars = (evt.type !== 'mouseout') ? this.getBarsAtEvent(evt) : [];

                    this.eachBars(function(bar)
                    {
                        bar.restore(['fillColor', 'strokeColor']);
                    });
                    helpers.each(activeBars, function(activeBar)
                    {
                        activeBar.fillColor = activeBar.highlightFill;
                        activeBar.strokeColor = activeBar.highlightStroke;
                    });
                    this.showTooltip(activeBars);
                });
            }

            //Declare the extension of the default point, to cater for the options passed in to the constructor
            this.BarClass = Chart.Rectangle.extend(
            {
                strokeWidth: this.options.barStrokeWidth,
                showStroke: this.options.barShowStroke,
                ctx: this.chart.ctx
            });

            //Iterate through each of the datasets, and build this into a property of the chart
            helpers.each(data.datasets, function(dataset, datasetIndex)
            {
/// ----- ZUI change begin -----
// add color theme
                if($.zui && $.zui.Color && $.zui.Color.get)
                {
                    var accentColor = $.zui.Color.get(dataset.color);
                    var accentColorValue = accentColor.toCssStr();

                    if(!dataset.fillColor) dataset.fillColor = accentColor.clone().fade(50).toCssStr();
                    if(!dataset.strokeColor) dataset.strokeColor = accentColorValue;
                }
/// ----- ZUI change begin -----

                var datasetObject = {
                    label: dataset.label || null,
                    fillColor: dataset.fillColor,
                    strokeColor: dataset.strokeColor,
                    bars: []
                };

                this.datasets.push(datasetObject);

                helpers.each(dataset.data, function(dataPoint, index)
                {
                    //Add a new point for each piece of data, passing any required data to draw.
                    datasetObject.bars.push(new this.BarClass(
                    {
                        value: dataPoint,
                        label: data.labels[index],
                        datasetLabel: dataset.label,
                        strokeColor: dataset.strokeColor,
                        fillColor: dataset.fillColor,
                        highlightFill: dataset.highlightFill || dataset.fillColor,
                        highlightStroke: dataset.highlightStroke || dataset.strokeColor
                    }));
                }, this);

            }, this);

            this.buildScale(data.labels);

            this.BarClass.prototype.base = this.scale.endPoint;

            this.eachBars(function(bar, index, datasetIndex)
            {
                helpers.extend(bar,
                {
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
                    y: this.scale.endPoint
                });
                bar.save();
            }, this);

            this.render();
        },
        update: function()
        {
            this.scale.update();
            // Reset any highlight colours before updating.
            helpers.each(this.activeElements, function(activeElement)
            {
                activeElement.restore(['fillColor', 'strokeColor']);
            });

            this.eachBars(function(bar)
            {
                bar.save();
            });
            this.render();
        },
        eachBars: function(callback)
        {
            helpers.each(this.datasets, function(dataset, datasetIndex)
            {
                helpers.each(dataset.bars, callback, this, datasetIndex);
            }, this);
        },
        getBarsAtEvent: function(e)
        {
            var barsArray = [],
                eventPosition = helpers.getRelativePosition(e),
                datasetIterator = function(dataset)
                {
                    barsArray.push(dataset.bars[barIndex]);
                },
                barIndex;

            for (var datasetIndex = 0; datasetIndex < this.datasets.length; datasetIndex++)
            {
                for (barIndex = 0; barIndex < this.datasets[datasetIndex].bars.length; barIndex++)
                {
                    if (this.datasets[datasetIndex].bars[barIndex].inRange(eventPosition.x, eventPosition.y))
                    {
                        helpers.each(this.datasets, datasetIterator);
                        return barsArray;
                    }
                }
            }

            return barsArray;
        },
        buildScale: function(labels)
        {
            var self = this;

            var dataTotal = function()
            {
                var values = [];
                self.eachBars(function(bar)
                {
                    values.push(bar.value);
                });
                return values;
            };

            var scaleOptions = {
                templateString: this.options.scaleLabel,
                height: this.chart.height,
                width: this.chart.width,
                ctx: this.chart.ctx,
                textColor: this.options.scaleFontColor,
                fontSize: this.options.scaleFontSize,
                fontStyle: this.options.scaleFontStyle,
                fontFamily: this.options.scaleFontFamily,
                valuesCount: labels.length,
                beginAtZero: this.options.scaleBeginAtZero,
                integersOnly: this.options.scaleIntegersOnly,
                calculateYRange: function(currentHeight)
                {
                    var updatedRanges = helpers.calculateScaleRange(
                        dataTotal(),
                        currentHeight,
                        this.fontSize,
                        this.beginAtZero,
                        this.integersOnly
                    );
                    helpers.extend(this, updatedRanges);
                },
                xLabels: labels,
                font: helpers.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                lineWidth: this.options.scaleLineWidth,
                lineColor: this.options.scaleLineColor,
                showHorizontalLines: this.options.scaleShowHorizontalLines,
                showVerticalLines: this.options.scaleShowVerticalLines,
/// ZUI change begin
                showBeyondLine: this.options.scaleShowBeyondLine,
/// ZUI change end
                gridLineWidth: (this.options.scaleShowGridLines) ? this.options.scaleGridLineWidth : 0,
                gridLineColor: (this.options.scaleShowGridLines) ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                padding: (this.options.showScale) ? 0 : (this.options.barShowStroke) ? this.options.barStrokeWidth : 0,
                showLabels: this.options.scaleShowLabels,
                display: this.options.showScale
            };

            if (this.options.scaleOverride)
            {
                helpers.extend(scaleOptions,
                {
                    calculateYRange: helpers.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + (this.options.scaleSteps * this.options.scaleStepWidth)
                });
            }

            this.scale = new this.ScaleClass(scaleOptions);
        },
        addData: function(valuesArray, label)
        {
            //Map the values array for each of the datasets
            helpers.each(valuesArray, function(value, datasetIndex)
            {
                //Add a new point for each piece of data, passing any required data to draw.
                this.datasets[datasetIndex].bars.push(new this.BarClass(
                {
                    value: value,
                    label: label,
                    x: this.scale.calculateBarX(this.datasets.length, datasetIndex, this.scale.valuesCount + 1),
                    y: this.scale.endPoint,
                    width: this.scale.calculateBarWidth(this.datasets.length),
                    base: this.scale.endPoint,
                    strokeColor: this.datasets[datasetIndex].strokeColor,
                    fillColor: this.datasets[datasetIndex].fillColor
                }));
            }, this);

            this.scale.addXLabel(label);
            //Then re-render the chart.
            this.update();
        },
        removeData: function()
        {
            this.scale.removeXLabel();
            //Then re-render the chart.
            helpers.each(this.datasets, function(dataset)
            {
                dataset.bars.shift();
            }, this);
            this.update();
        },
        reflow: function()
        {
            helpers.extend(this.BarClass.prototype,
            {
                y: this.scale.endPoint,
                base: this.scale.endPoint
            });
            var newScaleProps = helpers.extend(
            {
                height: this.chart.height,
                width: this.chart.width
            });
            this.scale.update(newScaleProps);
        },
/// ZUI change begin
        drawLabel: function(bar, placement)
        {
            var options = this.options;
            placement = placement || options.scaleValuePlacement;
            placement = placement ? placement.toLowerCase() : 'auto';
            if(placement === 'auto')
            {
                placement = bar.y < 15 ? 'insdie' : 'outside';
            }

            var y = placement === 'insdie' ? (bar.y + 10) : (bar.y - 10);
            var ctx = this.chart.ctx;
            ctx.font = helpers.fontString(options.scaleFontSize, options.scaleFontStyle, options.scaleFontFamily);
            ctx.textBaseline = "middle";
            ctx.textAlign = "center";
            ctx.fillStyle = options.scaleFontColor;
            ctx.fillText(bar.value, bar.x, y);
        },
/// ZUI change end
        draw: function(ease)
        {
            var easingDecimal = ease || 1;
            this.clear();

            var ctx = this.chart.ctx;

            this.scale.draw(easingDecimal);

/// ZUI change begin
            var showScaleValue = this.options.scaleShowLabels && this.options.scaleValuePlacement;
/// ZUI change end
            //Draw all the bars for each dataset
            helpers.each(this.datasets, function(dataset, datasetIndex)
            {
                helpers.each(dataset.bars, function(bar, index)
                {
                    if (bar.hasValue())
                    {
                        bar.base = this.scale.endPoint;
                        //Transition then draw
                        bar.transition(
                        {
                            x: this.scale.calculateBarX(this.datasets.length, datasetIndex, index),
                            y: this.scale.calculateY(bar.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, easingDecimal).draw();
                    }
/// ZUI change begin
                    if(showScaleValue)
                    {
                        this.drawLabel(bar);
                    }
/// ZUI change end
                }, this);

            }, this);
        }
    });

    /// ----- ZUI change begin -----
    /// Use jquery object to create Chart object
    $.fn.barChart = function(data, options)
    {
        var barCharts = [];
        this.each(function()
        {
            var $this = $(this);
            barCharts.push(new Chart(this.getContext("2d")).Bar(data, $.extend($this.data(), options)));
        });
        return barCharts.length === 1 ? barCharts[0] : barCharts;
    }

    /// ----- ZUI change end -----

    /// ----- ZUI change begin -----
    /// Add jquery object to namespace

    /// }).call(this); // Old code
}).call(this, jQuery);

/// ----- ZUI change end -----
