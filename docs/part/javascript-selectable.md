# 拖拽选取

<div class="alert alert-warning">
  <h4>兼容性提示</h4>
  <p>在触摸屏上无法支持拖拽范围选取功能，所以不支持多选，但仍然支持点选单个元素。</p>
</div>

## 综合示例

拖拽选取允许通过按住鼠标左键不放并拖动来选取范围内的元素。

在目标元素上单击鼠标左键来选取或者取消选取元素

当再次拖选时会取消上选中的元素，如果按住 <kbd>Ctrl</kbd> 键的同时进行拖拽选取操作则不会取消上次选中的元素，这样就可以实现分批次多选。

<style>
.selectable-example {padding: 10px;}
.selectable-example > .message {margin: -10px -10px 10px; background-color: #e5e5e5; padding: 8px 10px;}
#selectableExample1 > .tile {text-align: center; padding: 20px 0; background-color: #e5e5e5; margin: 10px; float: left; width: 70px; font-size: 20px;}
#selectableExample1 > .tile.active {background-color: #3280FC; color: #fff;}

#selectableExample3 {position: relative; height: 300px;}
#selectableExample3 > .shape {text-align: center; border: transparent 4px solid; background-color: #e5e5e5; position: absolute; font-size: 12px;}
#selectableExample3 > .shape.selected {border-color: #3280FC; background-color: #fff}
#shape-sqaure1 {width: 150px; height: 150px; line-height: 150px; left: 50%;}
#shape-sqaure2 {width: 100px; height: 100px; line-height: 100px; left: 20%; bottom: 10px}
#shape-sqaure3 {width: 80px; height: 120px; line-height: 120px; left: 0; bottom: 50px}
#shape-sqaure4 {width: 180px; height: 60px; line-height: 60px; left: 10%;}
#shape-circle1 {width: 70px; height: 70px; line-height: 70px; left: 35%; border-radius: 50%;}
#shape-circle2 {width: 100px; height: 100px; line-height: 100px; right: 20px; top: 50px; border-radius: 50%;}
#shape-circle3 {width: 160px; height: 60px; line-height: 60px; right: 10%; bottom: 50px; border-radius: 30px;}
@keyframes example-move-circle {
  0% { left: 0%; }
  100% { left: 80%; }
}
#shape-circle4 {width: 100px; height: 60px; line-height: 60px; left: 0%; bottom: 110px; border-radius: 30px; animation: example-move-circle 10s infinite alternate linear; box-shadow: 0 1px 6px rgba(50,128,252,.3);}
</style>

<example class="clearfix selectable-example" id="selectableExample1">
  <div class="message">用光标点击并拖拽选取下方的方块。</div>
</example>

```html
<div id="selectableExample1">
  <div class="tile" data-id="1">1</div>
  <div class="tile" data-id="2">2</div>
  <div class="tile" data-id="3">3</div>
  ....
</div>
```

```css
// 为选中的元素应用不同的外观样式
#selectableExample1 > .tile.active {
  background: blue;
  color: #fff;
}
```

```js
$('#selectableExample1').selectable({
    selector: '.tile',
    select: function(e) {
        console.log('你选取了方块 #' + e.id + '，共选择了 ' + e.selected.length + ' 个。');
    }
});
```

## 选取不规则元素

拖拽选取对待选取的目标元素并没有尺寸及位置要求，你可以应用在表格，列表或者任意形状的元素。通过 `selector` 来指定选择器来定义所有可能会被选中的元素。

<example class="selectable-example" id="selectableExample2">
  <div class="message">选取表格的行。</div>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>名称</th>
        <th>积分</th>
        <th>排名</th>
      </tr>
    </thead>
    <tbody>
      <tr data-id="1526">
        <td>1526</td>
        <td>小马虎</td>
        <td>1056</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 1 </td>
      </tr>
      <tr data-id="1001">
        <td>1001</td>
        <td>勇敢的小鸭</td>
        <td>999</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 12 </td>
      </tr>
      <tr data-id="1045">
        <td>1045</td>
        <td>鸡大爷</td>
        <td>998</td>
        <td class="text-green"><i class="icon icon-double-angle-up"></i> 23 </td>
      </tr>
      <tr data-id="1025">
        <td>1025</td>
        <td>猪无畏</td>
        <td>860</td>
        <td class="text-green"><i class="icon icon-double-angle-down"></i> 25 </td>
      </tr>
      <tr data-id="1102">
        <td>1102</td>
        <td>糊涂虫</td>
        <td>749</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 30 </td>
      </tr>
    </tbody>
  </table>
</example>

```js
$('#selectableExample2').selectable({
    selector: 'tr',
    select: function(e) {
        console.log('你选取了行 #' + e.id + '，共选择了 ' + e.selected.length + ' 个。');
    }
});
```

<example class="selectable-example" id="selectableExample3">
  <div class="message">选取下方的图形</div>
  <div class="shape" id="shape-sqaure1" data-id="sqaure1">正方形1</div>
  <div class="shape" id="shape-sqaure2" data-id="sqaure2">正方形2</div>
  <div class="shape" id="shape-sqaure3" data-id="sqaure3">矩形1</div>
  <div class="shape" id="shape-sqaure4" data-id="sqaure4">矩形2</div>
  <div class="shape" id="shape-circle1" data-id="circle1">圆形1</div>
  <div class="shape" id="shape-circle2" data-id="circle2">圆形2</div>
  <div class="shape" id="shape-circle3" data-id="circle3">圆形3</div>
  <div class="shape" id="shape-circle4" data-id="circle4">圆形4</div>
</example>

```js
$('#selectableExample3').selectable({
    selector: '.shape',
    selectClass: 'selected',
    select: function(e) {
        console.log('你选取了形状 #' + e.id + '，共选择了 ' + e.selected.length + ' 个。');
    }
});
```

## 如何使用

### 设置目标元素 ID

```html
<div id="selectableExample1">
  <div class="tile" data-id="1">1</div>
  <div class="tile" data-id="2">2</div>
  <div class="tile" data-id="3">3</div>
  ....
</div>
```

应该为所有可以被选中的目标元素设置 `[data-id]` 属性，这样便于跟踪哪些元素被选中。如果不设置 ID，则会生成随机的 ID 值。

### 选项

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 100px;">选项</th>
      <th style="width: 100px;">名称</th>
      <th style="width: 180px;">可选值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`selector`</td>
      <td>带选取目标元素选择器</td>
      <td>有效的 CSS 选择器字符串，默认值为 `"li,tr,div"`</td>
      <td></td>
    </tr>
    <tr>
      <td>`trigger`</td>
      <td>拖拽点击事件触发选择器</td>
      <td>有效的 CSS 选择器字符串，默认值为 `null`</td>
      <td>如果设置为null，则整个父级容器都可以触发拖选事件。</td>
    </tr>
    <tr>
      <td>`rangeStyle`</td>
      <td>拖选时的矩形指示样式表</td>
      <td>默认为: <br> <pre style="padding: 5px; margin: 0">{
    border: '1px solid #3280fc',
    backgroundColor: 'rgba(50, 128, 252, 0.2)'
}</pre></td>
      <td>默认为蓝色边框，半透明矩形。</td>
    </tr>
    <tr>
      <td>`clickBehavior`</td>
      <td>点击选取行为</td>
      <td>
        <ul>
          <li>`"toggle"`（默认）；</li>
          <li>`"multi"`；</li>
          <li>`"single"`。</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>`"toggle"`：单击目标元素，会切换其选择或非选择状态，每次选中（包括单击或拖拽）都会取消之前的所有选择（除非选择时按住了 <kbd>Ctrl</kbd> 键）；</li>
          <li>`"multi"`：单击目标元素，会切换其选择或非选择状态，但不会取消之前的选择，拖拽选择会取消之前的所有选择（除非选择时按住了 <kbd>Ctrl</kbd> 键）；</li>
          <li>`"single"`：单击目标元素会取消已选择的元素，并选中当前点击的元素，拖拽选择会取消之前的所有选择（除非选择时按住了 <kbd>Ctrl</kbd> 键）。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`ignoreVal`</td>
      <td>范围选取时的忽略值</td>
      <td>默认值为`3`，单位为像素</td>
      <td>当鼠标一次拖选时移动的范围小于此值，则忽略此次拖选操作。</td>
    </tr>
    <tr>
      <td>`start`</td>
      <td>拖选开始之前的回调事件</td>
      <td>
        默认无设置，允许的回调函数形式为：<br>
        <pre style="padding: 5px; margin: 0">function(e) {}</pre>
      </td>
      <td>在此回调事件中返回 `false` 来取消此次拖选操作。</td>
    </tr>
    <tr>
      <td>`finish`</td>
      <td>单击或拖选结束时的回调事件</td>
      <td>
        默认无设置，允许的回调函数形式为：
        <pre style="padding: 5px; margin: 0">function(data) {}</pre>
      </td>
      <td>
        `data` 参数为一个对象，包含如下属性：
        <ul>
          <li>`data.selections`：所有元素的选中或非选中状态，例如 `{1: true, 2: false, ...}`；</li>
          <li>`data.selected`：所有已选中的元素 ID 值的数组，例如 `["1", "3"]`。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`select`</td>
      <td>当有目标元素被选中时的回调事件</td>
      <td>
        默认无设置，允许的回调函数形式为：
        <pre style="padding: 5px; margin: 0">function(data) {}</pre>
      </td>
      <td>
        `data` 参数为一个对象，包含如下属性：
        <ul>
          <li>`id`：当前正在被选中的目标元素 ID；</li>
          <li>`data.selections`：所有元素的选中或非选中状态，例如 `{1: true, 2: false, ...}`；</li>
          <li>`data.selected`：所有已选中的元素 ID 值的数组，例如 `["1", "3"]`。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`unselect`</td>
      <td>当有目标元素被取消选中时的回调事件</td>
      <td>
        默认无设置，允许的回调函数形式为：
        <pre style="padding: 5px; margin: 0">function(data) {}</pre>
      </td>
      <td>
        `data` 参数为一个对象，包含如下属性：
        <ul>
          <li>`id`：当前正在被取消选中的目标元素 ID；</li>
          <li>`data.selections`：所有元素的选中或非选中状态，例如 `{1: true, 2: false, ...}`；</li>
          <li>`data.selected`：所有已选中的元素 ID 值的数组，例如 `["1", "3"]`。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### 初始化和获取选中的元素

```js
var options = {
    selector: 'div', // #selectable 内的所有 div 都可以进行选中
    rangeStyle: {
      border: '1px solid red' // 拖选范围指示矩形边框设置为红色
    },
    finish: function(data) {  // 选择结束时的回调函数
        // 所有元素的选中或非选中状态
        console.log(data.selections);

        // 所有已选中的元素 ID 值的数组
        console.log(data.selected);
    }
};

$('#selectable').selectable(options);
```

### 方法

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 120px;">方法</th>
      <th style="width: 200px;">参数</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`toggle()`</td>
      <td></td>
      <td>切换选中或取消选中所有目标元素。</td>
    </tr>
    <tr>
      <td>`toggle(elementOrId)`</td>
      <td>`elementOrId`：要切换显示的目标元素或者其 id。</td>
      <td>切换指定目标元素的选中或取消选中状态。</td>
    </tr>
    <tr>
      <td>`select()`</td>
      <td></td>
      <td>选中所有目标元素。</td>
    </tr>
    <tr>
      <td>`select(elementOrId)`</td>
      <td>`elementOrId`：要选中的目标元素或其 id。</td>
      <td>选中指定目标元素。</td>
    </tr>
    <tr>
      <td>`unselect()`</td>
      <td></td>
      <td>取消选中所有目标元素。</td>
    </tr>
    <tr>
      <td>`unselect(elementOrId)`</td>
      <td>`elementOrId`：要取消选中的目标元素或其 id。</td>
      <td>取消选中指定目标元素。</td>
    </tr>
  </tbody>
</table>

#### 调用方法

```js
// 初始化
$('#selectable').selectable();

// 获取 selectable 实例
var mySelectable = $('#selectable').data('zui.selectable');

// 调用方法全选方法
mySelectable.select();

// 选中 id 为 1030 的目标元素
mySelectable.select('1030');
```


## 数据表格

ZUI 中的 [数据表格](#view/datatable) 现已支持拖拽选择，只需要在数据表格中的 `selectable` 选项设置为 `true` 即可，或者将该选项直接设置为 `selectable` 所支持的选项对象。

<example class="selectable-example">
  <div class="message">为数据表格启用拖拽选择。</div>
  <table class="table" id="selectableDatableExample">
    <thead>
      <tr>
        <th>ID</th>
        <th class="flex-col">名称</th>
        <th class="flex-col">积分</th>
        <th>排名</th>
      </tr>
    </thead>
    <tbody>
      <tr data-id="1526">
        <td>1526</td>
        <td>小马虎</td>
        <td>1056</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 1 </td>
      </tr>
      <tr data-id="1001">
        <td>1001</td>
        <td>勇敢的小鸭</td>
        <td>999</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 12 </td>
      </tr>
      <tr data-id="1045">
        <td>1045</td>
        <td>鸡大爷</td>
        <td>998</td>
        <td class="text-green"><i class="icon icon-double-angle-up"></i> 23 </td>
      </tr>
      <tr data-id="1025">
        <td>1025</td>
        <td>猪无畏</td>
        <td>860</td>
        <td class="text-green"><i class="icon icon-double-angle-down"></i> 25 </td>
      </tr>
      <tr data-id="1102">
        <td>1102</td>
        <td>糊涂虫</td>
        <td>749</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 30 </td>
      </tr>
    </tbody>
  </table>
</example>

```javasript
$('#selectableDatableExample').datatable({
    checkable: true, // 启用数据表格的选中功能
    selectable: {    // 设置拖拽选择的选项
        finish: function(e) {
            console.log('当前选中的行数：', e.selected.length);
        }
    }
});
```

<script>
$(function() {
    var onTileSelect = function(e, that, a) {
      this.$.children('.message').html('你选取了 <strong>#' + e.id + '</strong>，共选择了 <strong>' + e.selected.length + '</strong> 个。');
    };

    var $example1 = $('#selectableExample1');
    for(var i = 0; i < 36; ++i) {
        $example1.append('<div class="tile" data-id="' + (i + 1) + '">' + (i + 1) + '</div>');
    }
    $example1.selectable({
        selector: '.tile',
        clickBehavior: 'single',
        select: onTileSelect,
        unselect: onTileSelect
    });

    $('#selectableExample2').selectable({
        selector: 'tr',
        select: onTileSelect,
        unselect: onTileSelect
    });

    $('#selectableExample3').selectable({
        selectClass: 'selected',
        selector: '.shape',
        select: onTileSelect,
        unselect: onTileSelect
    });

    $('#selectableDatableExample').datatable({
        checkable: true,
        selectable: {
            finish: function(e) {
                $('#selectableDatableExample').prev('.message').html('你共选择了 <strong>' + e.selected.length + '</strong> 个。');
            }
        }
    });
});
</script>
