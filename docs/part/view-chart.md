section: view
id: chart
description: 展示曲线图和饼图
icon: icon-bar-chart
filter: tubiao tb quxiantu qxt bingtu bt
---

# 图表

<style>
.text-middle th, .text-middle td {
    vertical-align: middle;
}
</style>

ZUI中的图表视图使用 [Chart.js](http://www.chartjs.org/) 实现。

目前提供曲线图、饼图和柱状图的实现。

在ZUI中 Chart.js 绘制所使用的颜色已经经过更改，可以直接使用 [配色表](#javascript/colorset) 中列明的颜色作为色彩主题，与ZUI的风格保持一致。

## 创建图表

图表视图为独立组件，你需要从本地或 CDN 单独引入 lib 目录下的资源：

```html
<script src="lib/chart/zui.chart.min.js"></script>
```

为了创建图表，首先需要在HTML中置入一个`<canvas>`标签。

```html
<canvas id="myChart" width="400" height="400"></canvas>
```

第二步是实例化一个`Chart`对象。有两种方法来创建`Chart`实例。

### 通过$.zui.Chart创建实例

创建实例需要首先得到`<canvas>`的用于绘图的`2d context`，然后调用`$.zui.Chart`构造函数。

```js
// 使用jquery方法获取 2d context 对象
var ctx = $("#myChart").get(0).getContext("2d");
// 或者使用 document.getElementById 获取 2d context 对象
// var ctx = document.getElementById("myChart").getContext("2d");

// 使用$.zui.Chart构造Chart实例
var myNewChart = new $.zui.Chart(ctx);
```

### 通过$.fn.chart创建实例

ZUI扩展了jQuery的功能函数，可以使用jQuery选择canvas节点对象来创建Chart实例。

```js
// 创建指定Canvas的Chart实例
var myChart = $("#myChart").chart();
```

如果jQuery实例包含多个canvas，则会以数组的形式返回所有Chart实例。

```js
// 以数组的形式返回所有canvas的Chart实例
var allMyCharts = $("canvas").chart();
```

<div class="alert alert-warning">
  <h4>提示</h4>
  <p>通常情况下，在 jQuery 对象上调用 jQuery 方法会返回 jQuery 对象本身，但在调用 `$().chart()` 系列方法（包括 `$().lineChart()`，`$().doughnutChart()`，`$().pieChart()`，`$().barChart()`）**返回的是图表对象实例**。</p>
</div>

## 全局选项

全局选项适用于所有可用的图标类型（包括曲线图、饼图和柱状图）。以下列出所有可用的全局选项及默认值：

```js
{
    // Boolean - 是否执行动画效果
    animation: true,

    // Number - 动画执行的步数，数值越大，动画执行的时间越长
    animationSteps: 60,

    // String - 动画效果
    // 可以选用的动画效果包括:
    // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
    //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
    //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
    //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
    //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
    //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
    //  easeOutElastic, easeInCubic]
    animationEasing: "easeOutQuart",

    // Boolean - 是否显示坐标网格
    showScale: true,

    // Boolean - 是否使用自定义的策略绘制坐标网格来覆盖默认方案
    scaleOverride: false,

    // ** 以下选项在 scaleOverride 设置为 true 的情况下为必填项 **
    // Number - 自定义坐标网格时的格子数目
    scaleSteps: null,
    // Number - 自定义坐标网格每个格子的大小
    scaleStepWidth: null,
    // Number - 自定义坐标网格时起始刻度值
    scaleStartValue: null,

    // String - 坐标网格线条颜色
    scaleLineColor: "rgba(0,0,0,.1)",

    // Number - 坐标网格线条宽度
    scaleLineWidth: 1,

    // Boolean - 是否为坐标网格显示刻度标签文本
    scaleShowLabels: true,

    // Interpolated JS string - 坐标刻度格式化文本
    scaleLabel: "<%=value%>",

    // Boolean - 是否仅仅在坐标为整数值时显示刻度，分数刻度会被跳过
    scaleIntegersOnly: true,

    // Boolean - 坐标的刻度值是否必须从0开始，否则会以数据中的最小值开始
    scaleBeginAtZero: false,

    // String - 坐标刻度文本字体
    scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - 坐标刻度文本字体大小
    scaleFontSize: 12,

    // String - 坐标刻度文本样式
    scaleFontStyle: "normal",

    // String - 坐标刻度文本颜色
    scaleFontColor: "#666",

    // Boolean - 是否启用响应式设计，在窗口尺寸变化时进行重绘
    responsive: false,

    // Boolean - 当启用响应式设计时，是否在缩放时保持原始比例，如果设置为 false，则重新以新的容器大小进行绘制
    maintainAspectRatio: true,

    // Boolean - 是否在触摸或鼠标移动时显示工具提示文本
    showTooltips: true,

    // Boolean - 是否在绘制工具提示文本时使用自定义的函数
    customTooltips: false,

    // Array - 显示工具提示的触发事件
    tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],

    // String - 工具提示背景颜色
    tooltipFillColor: "rgba(0,0,0,0.8)",

    // String - 工具提示字体
    tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - 工具提示字体大小
    tooltipFontSize: 14,

    // String - 工具提示字体样式
    tooltipFontStyle: "normal",

    // String - 工具提示字体颜色
    tooltipFontColor: "#fff",

    // String - 工具提示标题字体
    tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

    // Number - 工具提示标题字体大小
    tooltipTitleFontSize: 14,

    // String - 工具提示标题字体样式
    tooltipTitleFontStyle: "bold",

    // String - 工具提示标题字体颜色
    tooltipTitleFontColor: "#fff",

    // Number - 工具提示在垂直方向上的内边距大小
    tooltipYPadding: 6,

    // Number - 工具提示在水平方向上的内边距大小
    tooltipXPadding: 6,

    // Number - 工具提示三角箭头大小
    tooltipCaretSize: 8,

    // Number - 工具提示边框圆角大小
    tooltipCornerRadius: 6,

    // Number - 工具提示在 X 坐标上的偏移量
    tooltipXOffset: 10,

    // String - 工具提示模板字符串
    tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

    // String - 多条目工具提示的模板字符串
    multiTooltipTemplate: "<%if (datasetLabel){%><%=datasetLabel%>: <%}%><%= value %>",

    // String - 多条目工具提示的背景色
    multiTooltipKeyBackground: '#fff',

    // Function - 当动画执行过程中的回调函数
    onAnimationProgress: function() {},

    // Function - 当动画执行完成时的回调函数
    onAnimationComplete: function() {}
}
```

## 曲线图

曲线图用连接一组或多组点集的曲线来展示数据。通常用曲线图来展示数据的变化趋势，或对比多个数据集的趋势。

### 实例

<div class="example">
  <div class="chart-canvas"><canvas id="myLineChart" width="100" height="36"></canvas></div>
</div>

```js
var data = {
    // labels 数据包含依次在X轴上显示的文本标签
    labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    datasets: [{
        // 数据集名称，会在图例中显示
        label: "红队",

        // 颜色主题，可以是'#fff'、'rgb(255,0,0)'、'rgba(255,0,0,0.85)'、'red' 或 ZUI配色表中的颜色名称
        // 或者指定为 'random' 来使用一个随机的颜色主题
        color: "red",
        // 也可以不指定颜色主题，使用下面的值来分别应用颜色设置，这些值会覆盖color生成的主题颜色设置
        // fillColor: "rgba(220,220,220,0.2)",
        // strokeColor: "rgba(220,220,220,1)",
        // pointColor: "rgba(220,220,220,1)",
        // pointStrokeColor: "#fff",
        // pointHighlightFill: "#fff",
        // pointHighlightStroke: "rgba(220,220,220,1)",

        // 数据集
        data: [65, 59, 80, 81, 56, 55, 40, 44, 55, 70, 30, 40]
    }, {
        label: "绿队",
        color: "green",
        data: [28, 48, 40, 19, 86, 27, 90, 60, 30, 44, 50, 66]
    }]
};

var options = {}; // 图表配置项，可以留空来使用默认的配置

var myLineChart = $("#myLineChart").lineChart(data, options);
```

#### 配置项

以下列出可配置的选项及其默认值：

```js
{
    ///Boolean - 是否在图表上显示网格
    scaleShowGridLines : true,

    //String - 网格线条颜色
    scaleGridLineColor : "rgba(0,0,0,.05)",

    //Number - 网格宽度
    scaleGridLineWidth : 1,

    //Boolean - 是否显示水平坐标，即X轴
    scaleShowHorizontalLines: true,

    //Boolean - 是否显示垂直坐标，即Y轴
    scaleShowVerticalLines: true,

    //Boolean - 是否显示为平滑曲线
    bezierCurve : true,

    //Number - 平滑曲线时所使用的贝塞尔曲线参数
    bezierCurveTension : 0.4,

    //Boolean - 是否显示顶点
    pointDot : true,

    //Number - 顶点半径，单位像素
    pointDotRadius : 4,

    //Number - 顶点描边线条宽度，单位像素
    pointDotStrokeWidth : 1,

    //Number - 检测鼠标点击所使用依据的半径大小，单位像素
    pointHitDetectionRadius : 20,

    //Boolean - 是否
    datasetStroke : true,

    //Number - 数据集线条宽度，单位为像素
    datasetStrokeWidth : 2,

    //Boolean - 是否用颜色来填充数据集
    datasetFill : true,

    //String - 图例模板
    legendTemplate : "<ul class='<%=name.toLowerCase()%>-legend'><% for (var i=0; i<datasets.length; i++){%><li><span style='background-color:<%=datasets[i].strokeColor%>'></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};
```

### 方法

创建图表后得到的图表实例拥有一些有用的方法。

#### .getPointsAtEvent(event)

传入一个jQuery点击事件参数，则返回鼠标在图表上点击所在的水平方向刻度对应的点集合。

```js
$("#myLineChart").on("click", function(evt){
    var activePoints = myLineChart.getPointsAtEvent(evt);
    // activePoints 为一个数组，如果当前点击所在的位置没有对应的数据，则为空
});
```

#### .update()

更新数据集，并重新绘制图表。

```js
// 更新第一个数据集的第三个数据值为50
myLineChart.datasets[0].points[2].value = 50;

// 调用update方法根据更新后的数据集重新绘制图表
myLineChart.update();
```

#### .addData(valuesArray, label)

向图表数据集增加一组新的数据，并立即重回图表。

```js
// 向数据集添加一组新的数据
myLineChart.addData([40, 60], "十三月");
```

#### .removeData()

移除数据集中的第一组数据，并重绘图表，会应用动画效果。

```js
myLineChart.removeData();
```

## 饼图

### 实例

饼图支持一般饼图和环行饼图。

<div class="example">
  <div class="row">
    <div class="col-xs-6 text-center"><canvas id="myPieChart" width="320" height="200"></canvas></div>
    <div class="col-xs-6 text-center"><canvas id="myDoughnutChart" width="320" height="200"></canvas></div>
  </div>
</div>

```js
var data = [{
    value: 150,
    color: "blue", // 使用颜色名称
    label: "蓝队"
}, {
    value: 250,
    color:"#F7464A", // 自定义颜色
    // highlight: "#FF5A5E", // 自定义高亮颜色
    label: "红队"
}, {
    value: 50,
    color: 'green',
    label: "绿队"
}, {
    // 不指定color值，使用随机颜色
    // 
    value: 100,
    label: "随机颜色队"
}];

// 图表配置项，可以留空来使用默认的配置
var options = {
    scaleShowLabels: true, // 展示标签
};

// 创建饼图
var myPieChart = $("#myPieChart").pieChart(data, options);

// 创建环形饼图
var myDoughnutChart = $("#myDoughnutChart").doughnutChart(data, {segmentShowStroke: false});
```

### 配置项

以下列出所有可以配置的选项及其默认值：

```js
{
    //Boolean - 是否显示描边
    segmentShowStroke : true,

    //String - 描边分割线的颜色
    segmentStrokeColor : "#fff",

    //Number - 描边分割线的宽度，单位像素
    segmentStrokeWidth : 2,

    //Number - 环形中间留空圆形半径的百分比
    percentageInnerCutout : 50, // 如果设置为0则为一般实心饼图

    // Boolean - 是否显示标签
    scaleShowLabels: false,

    // 标签文本模板
    scaleLabel: "<%=value%>",

    // String - 标签位置，可选值有：
    // 'outside' - 在扇形区域外显示
    // 'inside' - 在扇形区域内显示
    // 'auto' - 自动决定显示位置
    scaleLabelPlacement: "auto",

    // Number - 标签行高
    scaleLineHeight: 1,

    //Number - 动画执行总步数
    animationSteps : 60,

    //String - 动画效果
    animationEasing : "easeOutBounce",

    //Boolean - 是否启用旋转动画
    animateRotate : true,

    //Boolean - 是否启用缩放动画
    animateScale : false,

    //String - 图例模板
    legendTemplate : "<ul class='<%=name.toLowerCase()%>-legend'><% for (var i=0; i<segments.length; i++){%><li><span style='background-color:<%=segments[i].fillColor%>'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
}
```

### 方法与事件

#### .getSegmentsAtEvent(event)

传入一个鼠标点击事件参数，以数组的形式返回当前点击的扇形区域对应的数据。

```js
$("#myPieChart").on("click", function(evt){
    var activePoints = myPieChart.getSegmentsAtEvent(evt);
    // activePoints 为一个数组，如果当前点击所在的位置没有对应的数据，则为空
});
```

#### .update()

更新数据集，并重新绘制图表。

```js
// 更新第一个数据集（默认只有一个数据集）的第二个数据值为50
myPieChart.segments[1].value = 10;

// 调用update方法根据更新后的数据集重新绘制图表
myPieChart.update();
```

#### .addData(segmentData, index)

向图表数据集增加一组新的数据，并立即重回图表。

```js
myPieChart.addData({
    value: 130,
    color: "purple",
    label: "紫队"
});
```

#### .removeData(index)

移除指定索引位置的数据，如果不指定索引，则默认移除最后一个数据。

```js
myPieChart.removeData();
```

#### 综合示例

<div class="example">
  <div class="row">
    <div class="col-xs-6">
      <table class="table table-bordered text-middle">
        <tbody>
          <tr><th>getSegmentsAtEvent</th><td id="pieGetSegmentsAtEvent"><span class="text-muted"><i class="icon icon-info-sign"></i> 点击图表来获取点击的数据</span></td></tr>
          <tr><th>update</th><td>
            <div class="input-group">
              <span class="input-group-addon">更改第</span>
              <input type="text" id="updatePieNum" name="updatePieNum" class="form-control" value="0">
              <span class="input-group-addon fix-border">个数据值为</span>
              <input type="text" id="updatePieValue" name="updatePieValue" class="form-control" value="100">
              <span class="input-group-btn"><button type="button" id="updatePie" class="btn btn-primary">确定</button></span>
            </div>
          </td></tr>
          <tr><th>addData</th><td>
            <div class="input-group">
              <span class="input-group-addon">增加值为</span>
              <input type="text" id="addPieValue" name="addPieValue" class="form-control" value="50" placeholder="value">
              <span class="input-group-addon fix-border">标题为</span>
              <input type="text" id="addPieLabel" name="addPieLabel" class="form-control" value="新队" placeholder="label">
              <span class="input-group-btn"><button type="button" id="addPie" class="btn btn-primary">确定</button></span>
            </div>
          </td></tr>
          <tr><th>update</th><td>
            <div class="input-group">
              <span class="input-group-addon">移除第</span>
              <input type="text" id="removePieIndex" name="removePieIndex" class="form-control" placeholder="默认最后一个">
              <span class="input-group-addon fix-border">个数据</span>
              <span class="input-group-btn"><button type="button" id="removePieData" class="btn btn-primary">确定</button></span>
            </div>
          </td></tr>
        </tbody>
      </table>
    </div>
    <div class="col-xs-3 text-center"><canvas id="myPieChart2" width="200" height="200"></canvas></div>
    <div class="col-xs-3 text-center"><canvas id="myDoughnutChart2" width="200" height="200"></canvas></div>
  </div>
</div>

## 柱状图

### 实例

<div class="example"><div class="chart-canvas"><canvas id="myBarChart" width="500" height="200"></canvas></div></div>

```js
var data = {
    labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
    datasets: [
        {
            label: "蓝队",
            color: 'blue',
            data: [65, 59, 80, 81, 56, 55, 40]
        }, {
            label: "绿队",
            color: 'green',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

var options = {responsive: true}; // 图表配置项，可以留空来使用默认的配置
var myBarChart = $('#myBarChart').barChart(data, options);
```

### 配置项

以下列出所有可用的选项及其默认值

```js
{
    //Boolean - 垂直刻度是否从0开始，如果为false，则从最小值开始
    scaleBeginAtZero: true,

    //Boolean - 是否显示网格线
    scaleShowGridLines: true,

    //String - 网格线条颜色
    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - 网格线条宽度
    scaleGridLineWidth: 1,

    //Boolean - 是否显示水平轴线
    scaleShowHorizontalLines: true,

    //Boolean - 是否显示垂直轴线
    scaleShowVerticalLines: true,

    //Boolean - 柱状条是否绘制描边
    barShowStroke: true,

    //Number - 柱状条描边宽度
    barStrokeWidth: 1,

    //Number - 每一组值在水平轴上的间隔宽度
    barValueSpacing: 5,

    //Number - 每个数据集相邻的间隔
    barDatasetSpacing: 1,

    //String - 图例模板
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
}
```

### 方法

#### .getBarsAtEvent(event)

#### .update()

#### .addData(valuesArray, label)

#### .removeData()

## 兼容IE8浏览器

因为IE8及早期版本不支持Canvas，所以需要引入 [ExplorerCanvas](https://code.google.com/p/explorercanvas/) 来支持绘图功能。

```html
<!--[if lt IE 9]>
  <script src="dist/lib/ieonly/excanvas.js"></script>
<![endif]-->
```

<script src="dist/lib/chart/zui.chart.min.js"></script>
<script>
function afterPageLoad() {
    var data = {
        labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
        datasets: [
        {
            label: "红队",
            color: "red",
            data: [65, 59, 80, 81, 56, 55, 40, 44, 55, 70, 30, 40]
        }, {
            label: "绿队",
            color: "green",
            data: [28, 48, 40, 19, 86, 27, 90, 60, 30, 44, 50, 66]
        }]
    };
    var myLineChart = $("#myLineChart").lineChart(data, {bezierCurve: true, responsive: true});

    var data2 = [
        {
            value: 150,
            color: "blue", // 使用颜色名称
            label: "蓝队"
        }, {
            value: 250,
            color:"#F7464A", // 自定义颜色
            // highlight: "#FF5A5E", // 自定义高亮颜色
            label: "红队"
        }, {
            value: 50,
            color: 'green',
            label: "绿队"
        }, {
            // 不指定color值，使用随机颜色
            // 
            value: 100,
            label: "随机颜色队"
        }
    ];
    // 创建饼图
    var myPieChart = $("#myPieChart").pieChart(data2, {scaleShowLabels: true});
    // 创建环形饼图
    var myDoughnutChart = $("#myDoughnutChart").doughnutChart(data2, {segmentShowStroke: false, scaleShowLabels: true, scaleLabelPlacement: 'outside'});

    // 综合示例
    var myPieChart2 = $("#myPieChart2").pieChart(data2);
    var myDoughnutChart2 = $("#myDoughnutChart2").doughnutChart(data2, {segmentShowStroke: false});
    $("#myPieChart2").on('click', function(e){
        var point = myPieChart2.getSegmentsAtEvent(e)[0];
        $('#pieGetSegmentsAtEvent').html(point ? '你点击了 <strong><i class="icon text-muted icon-circle"></i> 饼图 </strong>的 <span style="color: #fff; display: inline-block; padding: 0 5px; background-color: ' + point.fillColor + '">' + point.label + '</span>，当前值为 <strong>' + point.value + '</strong>' : '你点击了空白地方。');
    });
    $("#myDoughnutChart2").on('click', function(e){
        var point = myDoughnutChart2.getSegmentsAtEvent(e)[0];
        $('#pieGetSegmentsAtEvent').html(point ? '你点击了 <strong><i class="icon text-muted icon-circle"></i> 环图 </strong>的 <strong style="color: #fff; display: inline-block; padding: 0 5px; background-color: ' + point.fillColor + '">' + point.label + '</strong>，当前值为 <strong>' + point.value + '</strong>' : '你点击了空白地方。');
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
            $.zui.messager.warning('请输入有效的数据。', {placement: 'center'});
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
            $('#addPieLabel').val('幸运' + next);
        } else {
            $.zui.messager.warning('请输入有效的数据。', {placement: 'center'});
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
            $.zui.messager.warning('请输入有效的数据。', {placement: 'center'});
        }
    });

    var data3 = {
        labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
        datasets: 
        [        
            {
                label: "蓝队",
                color: 'blue',
                data: [65, 59, 80, 81, 56, 55, 40]
            }, {
                label: "绿队",
                color: 'green',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };
    var myBarChart = $('#myBarChart').barChart(data3, {responsive: true});
}
</script>
