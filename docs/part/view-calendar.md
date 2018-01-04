section: view
id: calendar
description: 在日历上展示有时间限定的内容
icon: icon-calendar
filter: rili rl
---

# 日历

在日历上能够让用户直观了解日常安排并进行规划。ZUI提供了实用简单的日历插件。

<div class="alert alert-warning">
  <h4>兼容性提示</h4>
  <ul>
    <li>在触摸屏上无法支持拖拽功能；</li>
    <li>在小屏幕上无法获得最佳体验。</li>
  </ul>
</div>

## 实例

在下面的示例中展示了按月展示的日程安排。点击日历上方的操作按钮切换月份，拖动日历中的事件到其他位置来重新安排时间。

按周或查看某一天的日程视图将在后续版本中到来。

<div class="example">
  <div class="calendar" id="calendarExample"></div>
</div>

```html
<!-- HTML 代码 -->
<div id="calendar" class="calendar"></div>
```

```js
/* JS 代码 */
$('#calendar').calendar();
```

## 使用方法

### 引入资源

日历为独立组件，你需要从本地或 CDN 单独引入 lib 目录下的资源：

```html
<link href="lib/calendar/zui.calendar.min.css" rel="stylesheet">
<script src="lib/calendar/zui.calendar.min.js"></script>
```

### 启动参数

<table class="table table-bordered">
  <thead>
    <tr>
      <th>参数</th>
      <th>值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`startView`</td>
      <td>*   `"month"` (默认)，月份视图</td>
      <td>起始视图，默认为月份视图</td>
    </tr>
    <tr>
      <td>`startDate`</td>
      <td>*   `"today"` (默认)，其实日期为当天
*   `"2014-8-14"`，表示日期的字符串
*   一个`Date`实例</td>
      <td>起始视图所在的日期</td>
    </tr>
    <tr>
      <td>`limitEventTitle`</td>
      <td>*   `true` (默认)
*   `false`</td>
      <td>是否限制事件标题长度，如果为`true`则会限制事件标题在一行显示，超出部分将隐藏</td>
    </tr>
    <tr>
      <td>`storage`</td>
      <td>*   `true` (默认)
*   `false`</td>
      <td>是否启用本地存储来增强体验，如果为`ture`则会记录用户所在的视图和日期，刷新或关闭浏览器再次访问会重现最后的视图</td>
    </tr>
    <tr>
      <td>`withHeader`</td>
      <td>*   `true` (默认)
*   `false`</td>
      <td>是否显示带操作栏的头部，如果为`true`则会显示头部，包含切换视图或日期的按钮</td>
    </tr>
    <tr>
      <td>`dragThenDrop`</td>
      <td>*   `true` (默认)
*   `false`</td>
      <td>是否启用事件拖放功能，如果为`true`则能够拖拽一个事件到另一个日期方框内来更改事件日程</td>
    </tr>
    <tr>
      <td>`hideEmptyWeekends`</td>
      <td>*   `true` (默认)
*   `false`</td>
      <td>当周末没有事件时是否自动缩小周末所在对列已节省空间。</td>
    </tr>
    <tr>
      <td>`lang`</td>
      <td>*   `null` (默认)
*   `"zh-cn"`</td>
      <td>当前界面所使用的语言，如果留空则会从`html`标签上读取lang属性</td>
    </tr>
    <tr>
      <td>`data`</td>
      <td>`{calendars: {}, events: []}`</td>
      <td>初始加载的日历数据</td>
    </tr>
  </tbody>
</table>

### 方法

日历插件提供一组方法来向日历添加新的时间、更改已有事件或者删除已有事件。

#### 获取日历对象实例

要使用日历对象方法，需要首先获取日历对象实例。每一个日历对象示例的引用都存储在对应的jQuery对象的data中，名称为`zui.calendar`。

```js
/* 获取日历对象实例 */
var calendar = $('#calendar').data('zui.calendar');
```

#### 切换或刷新视图

要切换不同的视图或所显示的日期范围，请使用日历对象的`display(view, date)`方法。

```js
/* 切换视图或刷新视图 */
var calendar = $('#calendar').data('zui.calendar');
calendar.display('month', '2014-8-14');   // 切换视图为月份视图，并将日期范围限定为2014年8月
calendar.display('month');                // 切换视图为月份视图，使用当前日期范围
calendar.display();                       // 重新刷新当前视图
```

#### 增加事件

##### 增加一个事件

将一个新的事件对象作为参数来调用`addEvents`方法。

```js
/* 增加一个事件 */
var calendar = $('#calendar').data('zui.calendar');
var newEvent = {title: '吃饭了', desc: '要吃更多', start: new Date(2018,1,4,12,10,0), end: new Date(2018,1,3,13,10,0)};
calendar.addEvents(newEvent);
```

##### 增加多个事件

将包含一组事件的数组作为参数调用`addEvents`方法则可以一次性添加多个事件。

```js
/* 增加多个事件 */
var calendar = $('#calendar').data('zui.calendar');
var newEvents =
[
  {title: '吃饭了', desc: '要吃更多', start: new Date(2018,1,4,12,10,0), end: new Date(2018,1,3,13,10,0)},
  {title: '学习了', desc: '要学更多', start: new Date(2018,1,3,13,10,0), end: new Date(2018,1,4,10,0,0)}
];
calendar.addEvents(newEvents);
```

##### 事件对象

事件对象实例可以指定以下属性：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性</th>
      <th>值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`title`</td>
      <td>字符串</td>
      <td>事件标题</td>
    </tr>
    <tr>
      <td>`desc`</td>
      <td>字符串， 可选</td>
      <td>事件描述</td>
    </tr>
    <tr>
      <td>`allDay`</td>
      <td>*   `true`
*   `false` (默认)</td>
      <td>是否为全天事件</td>
    </tr>
    <tr>
      <td>`start`</td>
      <td>*   `"2014-8-14"`，表示日期的字符串
*   一个`Date`实例</td>
      <td>事件开始的时间</td>
    </tr>
    <tr>
      <td>`end`</td>
      <td>*   `"2014-8-14"`，表示日期的字符串
*   一个`Date`实例</td>
      <td>事件结束的时间，如果`allDay`属性为`true`(即为全天事件)时该属性可选</td>
    </tr>
    <tr>
      <td>`calendar`</td>
      <td>字符串，可选</td>
      <td>事件所在的日历</td>
    </tr>
    <tr>
      <td>`data`</td>
      <td>任何值</td>
      <td>一个额外的属性用来存储其他与该事件关联的数据</td>
    </tr>
  </tbody>
</table>

#### 移除事件

指定需要移除的事件的`id`属性，或者同时指定多个`id`并放在一个数组中作为参数来调用`removeEvents`方法。

```js
/* 移除事件 */
var calendar = $('#calendar').data('zui.calendar');
calendar.removeEvents('4343');                   // 移除id为4343的事件
calendar.removeEvents(['4343', '4344', '4345']); // 一次性移除多个事件
```

#### 更新事件

##### 更新事件属性

将更新对象或者由包含更新对象的数组作为参数来调用方法`updateEvents`。

```js
/* 移除事件 */
var calendar = $('#calendar').data('zui.calendar');
calendar.updateEvents({    // 更新一个事件
    event: '343',          // 要更新的事件
    changes: [{
          change: 'title',          // 要更改的属性名称,
          to:     '一个新的事件标题'   // 更改后的值
       }, {                         // 同时更改另一个属性
          change: 'start',          // 要更改的属性名称,
          to:     new Date(2018,1,4,0,0,0)  // 更改后的值
       }
    ]
});
calendar.updateEvents([    // 一次性更新多个事件
    {
        event: '343', // 更新第一个事件
        changes: [{
              change: 'title',          // 要更改的属性名称,
              to:     '一个新的事件标题'  // 更改后的值
         }, {                            // 同时更改另一个属性
            change: 'start',          // 要更改的属性名称,
            to:     new Date(2018,1,4,0,0,0)  // 更改后的值
         }]
    }, {
        event: '344', // 更新另一个事件
        changes: [
            // ...
        ]
    },
]);
```

#### 增加日历

##### 增加一个日历

将一个新的日历对象作为参数来调用`addCalendars`方法。

```js
/* 增加一个日历 */
var calendar = $('#calendar').data('zui.calendar');
var newCalendar = {name: 'work', title: '工作', desc: '这是一个工作日历', color: '#ff0000'};
calendar.addCalendars(newCalendar);
```

##### 增加多个日历

将包含一组日历的数组作为参数调用`addCalendars`方法则可以一次性添加多个日历。

```js
/* 增加多个日历 */
var calendar = $('#calendar').data('zui.calendar');
var newCalendars =
[
  {name: 'work', title: '工作', desc: '这是一个工作日历', color: '#ff0000'},
  {name: 'home', title: '家庭', desc: '这是一个家庭日历', color: '#00ff00'}
];
calendar.addCalendars(newCalendars);
```

##### 日历对象

日历对象实例可以指定以下属性：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性</th>
      <th>值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`name`</td>
      <td>字符串，为全英文标识</td>
      <td>日历名称</td>
    </tr>
    <tr>
      <td>`title`</td>
      <td>字符串，可选</td>
      <td>日历标题</td>
    </tr>
    <tr>
      <td>`desc`</td>
      <td>字符串， 可选</td>
      <td>日历描述</td>
    </tr>
    <tr>
      <td>`color`</td>
      <td>表示十六进制颜色值的字符串，可选</td>
      <td>日历颜色</td>
    </tr>
  </tbody>
</table>

#### 获取和同步数据

当进行日历事件的添加、更新或者移除操作时注意同步数据。

你随时可以获取当前所有日历或事件的数据。

```js
/* 获取日历数据 */
var calendar  = $('#calendar').data('zui.calendar');
var calendars = calendar.calendars; // 获取所有日历对象实例
var events    = calendar.events;    // 获取所有事件对象实例
```

当前获取了日历事件数据后可以手动直接更改所有属性，不过需要调用`display()`方法才能够将更改应用到界面中。

### 事件

日历中的事件既可以使用jQuery原生方法来绑定，也可以写在启动参数中。

<table class="table table-bordered">
  <thead>
    <tr>
      <th>事件名称</th>
      <th>jQuery事件名称</th>
      <th>说明</th>
      <th>特别的事件参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`clickTodayBtn`</td>
      <td>`"clickTodayBtn.zui.calendar"`</td>
      <td>点击日历头部的当天按钮时发生</td>
      <td>无</td>
    </tr>
    <tr>
      <td>`clickNextBtn`</td>
      <td>`"clickNextBtn.zui.calendar"`</td>
      <td>点击当前视图下一个日期范围按钮时发生</td>
      <td>无</td>
    </tr>
    <tr>
      <td>`clickPrevBtn`</td>
      <td>`"clickPrevBtn.zui.calendar"`</td>
      <td>点击当前视图上一个日期范围按钮时发生</td>
      <td>无</td>
    </tr>
    <tr>
      <td>`clickEvent`</td>
      <td>`"clickEvent.zui.calendar"`</td>
      <td>当点击一个事件时发生</td>
      <td>*   `event.element` 获取当前点击的DOM对象实例
*   `event.event` 事件对象实例，当前点击的事件对象实例
*   `event.events` 事件对象实例数组，当前所有事件</td>
    </tr>
    <tr>
      <td>`beforeAddCalendars`</td>
      <td>`"beforeAddCalendars.zui.calendar"`</td>
      <td>在向日历添加一个新的日历之前发生，如果在该事件处理函数中返回`false`，则会取消添加</td>
      <td>*   `event.newCalendar` 新的日历对象实例
*   `event.data` 所有日历事件数据</td>
    </tr>
    <tr>
      <td>`addCalendars`</td>
      <td>`"addCalendars.zui.calendar"`</td>
      <td>在向日历添加一个新的日历之后发生</td>
      <td>*   `event.newCalendars` 所有新的日历对象实例
*   `event.data` 所有日历事件数据</td>
    </tr>
    <tr>
      <td>`beforeAddEvent`</td>
      <td>`"beforeAddEvent.zui.calendar"`</td>
      <td>在向日历添加一个新的事件之前发生，如果在该事件处理函数中返回`false`，则会取消添加</td>
      <td>*   `event.newEvent` 新的事件对象实例
*   `event.data` 所有日历事件数据</td>
    </tr>
    <tr>
      <td>`addEvents`</td>
      <td>`"addEvents.zui.calendar"`</td>
      <td>在向日历添加一个或多个新的事件之后发生</td>
      <td>*   `event.newEvents` 所有新的事件对象实例
*   `event.data` 所有日历事件数据</td>
    </tr>
    <tr>
      <td>`beforeRemoveEvent`</td>
      <td>`"beforeRemoveEvent.zui.calendar"`</td>
      <td>在向日历移除一个事件之前发生，如果在该事件处理函数中返回`false`，则会取消移除</td>
      <td>*   `event.event` 需要移除的事件对象实例
*   `event.eventId` 需要移除的事件id
*   `event.data` 所有日历事件数据</td>
    </tr>
    <tr>
      <td>`removeEvents`</td>
      <td>`"removeEvents.zui.calendar"`</td>
      <td>在向日历移除一个或多个事件之后发生</td>
      <td>*   `event.removedEvents` 所有需要移除的事件对象实例
*   `event.data` 所有日历事件数据</td>
    </tr>
    <tr>
      <td>`beforeChange`</td>
      <td>`"beforeChange.zui.calendar"`</td>
      <td>更改一个事件之前发生，如果在该事件处理函数中返回`false`，则会取消本次更改</td>
      <td>*   `event.event` 要更改的事件对象实例
*   `event.change` 要更改的属性名称
*   `event.from` 更改之前该属性的值
*   `event.to` 更改之后新的值</td>
    </tr>
    <tr>
      <td>`change`</td>
      <td>`"change.zui.calendar"`</td>
      <td>当一个或多个事件发生更改时发生</td>
      <td>*   `event.data` 所有日历事件数据
*   `event.changes` 数组，所有更改明细，每一项包含下列属性：
-   `event.event` 要更改的事件对象实例
-   `event.change` 要更改的属性名称
-   `event.from` 更改之前该属性的值
-   `event.to` 更改之后新的值</td>
    </tr>
    <tr>
      <td>`beforeDisplay`</td>
      <td>`"beforeDisplay.zui.calendar"`</td>
      <td>在重新显示视图之前发生，如果在该事件处理函数中返回`false`，则会取消显示</td>
      <td>*   `event.view` 字符串，要显示的视图名称
*   `event.date` 日期事件对象实例，要显示的日期</td>
    </tr>
    <tr>
      <td>`display`</td>
      <td>`"display.zui.calendar"`</td>
      <td>在重新显示视图之后发生</td>
      <td>*   `event.view` 字符串，要显示的视图名称
*   `event.date` 日期事件对象实例，要显示的日期</td>
    </tr>
    <tr>
      <td>`clickCell`</td>
      <td>`"clickCell.zui.calendar"`</td>
      <td>当点击一个日期单元格时发生</td>
      <td>*   `event.element` 获取被点击的单元格实例
*   `event.view` 字符串，当前视图名称
*   `event.date` 日期事件对象实例，当前单元格的日期</td>
    </tr>
  </tbody>
</table>

#### 使用启动参数处理事件

```js
$('calendar').calendar({
    clickEvent: function(event) {
        console.log(event);
        // console.log("你点击了一个事件");
        // 处理 clickEvent 事件
        // ...
    }
});
```

#### 使用jQuery方法绑定事件处理函数

```js
$('calendar').calendar().on("clickEvent.zui.calendar", function(event) {
    console.log(event);
    // console.log("你点击了一个事件");
    // 处理 clickEvent 事件
    // ...
});
```

<script src="dist/lib/calendar/zui.calendar.js"></script>
<link href="dist/lib/calendar/zui.calendar.css" rel="stylesheet">
<script>
function afterPageLoad() {
  var now = new Date();
  var start = now.getSeconds(),
      calendars = ['success', 'danger', 'important', 'warning', 'info', 'specail', 'primary'],
      rooms = ['A003', 'A004', 'A010', 'A143', 'B008', 'B098', 'B487', 'B340', 'Z000', 'Z431', 'Z018', 'Z864'],
      peoples = ['奥特曼', '行者孙', '地卜师', '绿巨人', 'Catouse', '路人丙'],
      events = ['进食', '喝水', '交谈', '睡觉', '捶打墙壁', '自言自语', '搬动椅子', '唱歌', '上网', '梦游', '观望天花板'],
      eventsTypes = ['happy', 'sad', ':]'],
      tools = ['桌子', '椅子', '水杯', '枪', '随从'],
      descs = ['没有完成', '这次失败了', '徒劳', '很满意', '禁止再次发生', '也行', '情况不明', '发现未知征兆'];
  var calEventGenerater = function() {
          var start = now.clone().addDays(Math.random() * 400 - 200);
          var e = {
              title: (Math.random() > 0.5 ? ('和' + peoples[Math.floor(Math.random()*peoples.length)]) : '') + events[Math.floor(Math.random()*events.length)],
              desc: descs[Math.floor(Math.random()*descs.length)],
              calendar: calendars[Math.floor(Math.random()*calendars.length)],
              allDay: Math.random() > 0.9,
              start: start,
              end: start.clone().addDays(Math.random() > 0.9 ? Math.random() * 5 : 0)
          };
          return e;
      };
  var dtDataGenerater = function(rowsCount) {
          var data = {
              cols: [
                  {width: 100, text: '#', type: 'number', flex: false, colClass: 'text-center'},
                  {sort: 'down', width: 160, text: '时间', type: 'date', flex: false, colClass: ''},
                  {width: 80, text: '房间', type: 'string', flex: false, colClass: ''},
                  {width: 100, text: '人物', type: 'string', flex: false, colClass: ''},
                  {width: 'auto', text: '事件', type: 'string', flex: false, colClass: ''},
                  {width: 100, text: '事件类型', type: 'string', flex: true, colClass: 'text-center'},
                  {sort: false, width: 200, text: '描述', type: 'string', flex: true, colClass: ''},
                  {width: 100, text: '相关人物', type: 'string', flex: true, colClass: ''},
                  {width: 100, text: '相关物品', type: 'string', flex: true, colClass: ''},
                  {width: 60, text: '评分', type: 'number', flex: false, colClass: 'text-center text-important'},
                  {sort: false, width: 'auto', text: '操作', type: 'string', flex: false, colClass: ''},
              ],
              rows: []
          };
          for (var i = 0; i < rowsCount; i++) {
              var row = {checked: Math.random() > 0.9, data: [
                  start + i + 101000,
                  now.format('yyyy-MM-dd hh:mm:ss'),
                  rooms[Math.floor(Math.random()*rooms.length)],
                  peoples[Math.floor(Math.random()*peoples.length)],
                  events[Math.floor(Math.random()*events.length)],
                  eventsTypes[Math.floor(Math.random()*eventsTypes.length)],
                  descs[Math.floor(Math.random()*descs.length)],
                  peoples[Math.floor(Math.random()*peoples.length)],
                  tools[Math.floor(Math.random()*tools.length)],
                  Math.floor(Math.random()*100)/10,
                  "<a href='###'><i class='icon-ok-sign'></i></a> &nbsp; <a href='###' class='text-danger'><i class='icon-trash'></i></a> "
              ]};
              data.rows.push(row);
              now = new Date(now.getTime() - (Math.random()*1000*60*60));
          };
          return data;
      },
      calDataGenerater = function(count) {
          var data = {
              calendars: [
                  {name: "success", color: 'green'},
                  {name: "warning", color: 'yellow'},
                  {name: "danger", color: 'red'},
                  {name: "info", color: 'blue'},
                  {name: "important", color: 'brown'},
                  {name: "special", color: 'purple'},
                  {name: "primary", color: 'primary'}
              ],
              events: []
          };
          for (var i = count - 1; i >= 0; i--) {
              data.events.push(calEventGenerater());
          }
          return data;
      };
  $(function() {
      $('#pageContent .calendar').each(function() {
          var $this = $(this);
          var data = calDataGenerater($this.data('exampleCount') || 100);
          $this.calendar({data: data, clickEvent: function(e) {
              console.log(e);
              $.zui.messager.show('您点击了 <strong>' + e.event.title + '</strong>');
          }, beforeChange: function(e) {
              if(e.change === 'start')
              {
                  $.zui.messager.show('起始时间更改为 ' + e.to.format('yyyy年MM月dd日 hh:mm'));
              }
          }});
      });
  });
}
</script>
