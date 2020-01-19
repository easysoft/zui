# 关系图

## 例子


### 引入资源

关系图为独立组件，你需要从本地或 CDN 单独引入 lib 目录下的资源：

```html
<link href="lib/flowchart/zui.flowchart.min.css" rel="stylesheet">
<script src="lib/flowchart/zui.flowchart.min.js"></script>
```

## 定义

### 关系图结构定义

一个关系图由节点和关系组合而成。节点由节点对象定义，关系由关系对象定义，节点和关系统称为元素，节点和关系对象数组就构成了关系图的数据结构。

### 元素类型

目前包含如下几种基本类型的节点：

| 类型 | 说明 |
|---|---|
| `relation` | 关系基本类型 |
| `rectangle` | 内置基本节点类型，表现为一个矩形方框 |
| `box` | 内置基本节点类型，表现为一个圆角矩形方框 |
| `diamond` | 内置基本节点类型，表现为一个菱形方框 |
| `circle` | 内置基本节点类型，表现为一个圆形方框 |
| `dot` | 内置基本节点类型，表现为一个小圆点 |
| `connection` | 包含文本的连接节点 |
| `start` | 开始节点 |
| `stop` | 停止节点 |
| `action` | 动作节点 |
| `judge` | 判断节点 |
| `result` | 结果节点 |
| `point` | 连接节点 |

### 节点对象定义

关系图中的每一个节点由一个元素（FlowChartElement）来定义。在一个节点对象上可能包含如下属性：

<table>
  <thead>
    <tr>
      <th>属性</th>
      <th>类型</th>
      <th>默认值</th>
      <th>定义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td><code>string</code></td>
      <td>必须项</td>
      <td>节点 ID，用于唯一标识节点的字符串，在导入数据到关系图时每个节点都必须指定 ID，在编辑时添加的新节点会自动生成唯一的 ID 字符串</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td><code>string</code></td>
      <td>必须项</td>
      <td>表示节点的类型，如果不指定，则默认使用初始化选项 <code>defaultNodeType</code> 的值</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td><code>string</code></td>
      <td>默认 <code>''</code></td>
      <td>用于在节点上显示的自定义文本</td>
    </tr>
    <tr>
      <td><code>order</code></td>
      <td><code>number</code></td>
      <td>默认 <code>null</code></td>
      <td>用于导出节点时进行排序的依据</td>
    </tr>
    <tr>
      <td><code>data</code></td>
      <td><code>object</code></td>
      <td>默认 <code>null</code></td>
      <td>节点上的自定义数据，例如 <code>{myData: 'ok'}</code></td>
    </tr>
    <tr>
      <td><code>style</code></td>
      <td><code>object</code></td>
      <td>默认 <code>null</code></td>
      <td>用于定义节点 DOM 元素上的样式，则取初始化选项 <code>nodeStyle</code> 的值。</td>
    </tr>
    <tr>
      <td><code>textStyle</code></td>
      <td><code>object</code></td>
      <td>默认 <code>null</code></td>
      <td>用于定义节点文本 DOM 元素上的样式，如果为 <code>null</code>，则取初始化选项 <code>nodeTextStyle</code> 的值。</td>
    </tr>
    <tr>
      <td><code>className</code></td>
      <td><code>string</code></td>
      <td>默认 <code>null</code></td>
      <td>用于定义节点 DOM 元素上的 <code>class</code> 属性</td>
    </tr>
    <tr>
      <td><code>shapeStyle</code></td>
      <td><code>object</code></td>
      <td>默认 <code>null</code></td>
      <td>用于定义节点表示实际形状的 DOM 元素上的样式</td>
    </tr>
    <tr>
      <td><code>borderStyle</code></td>
      <td><code>string</code></td>
      <td>默认 <code>null</code></td>
      <td>节点边框样式，此选项根据节点实现方式不同可能会覆盖 <code>style</code> 和 <code>shapeStyle</code> 上的设置。</td>
    </tr>
    <tr>
      <td><code>borderWidth</code></td>
      <td><code>number</code></td>
      <td>默认 <code>null</code></td>
      <td>节点边框线宽（粗细），此选项根据节点实现方式不同可能会覆盖 <code>style</code> 和 <code>shapeStyle</code> 上的设置。</td>
    </tr>
    <tr>
      <td><code>borderColor</code></td>
      <td><code>string</code></td>
      <td>默认 <code>null</code></td>
      <td>节点边框颜色，此选项根据节点实现方式不同可能会覆盖 <code>style</code> 和 <code>shapeStyle</code> 上的设置。</td>
    </tr>
    <tr>
      <td><code>position</code></td>
      <td><code>object</code></td>
      <td>默认 <code>null</code></td>
      <td>
        <p>节点的初始位置，可能的值形式包括：</p>
        <ul>
          <li>如果为 <code>null</code> ，则在绘制关系图时自动决定节点的位置；</li>
          <li><code>{left, top}</code> ，使用一个绝对坐标对象，例如 <code>{left: 100, top: 50}</code> 表示节点左上角距离绘图区左侧 100，距离绘图区顶部 50；</li>
          <li><code>{centerLeft, centerTop}</code>，使用一个绝对坐标对象，例如 <code>{centerLeft: 100, centerTop: 50}</code> 表示节点中心位置距离绘图区左侧 100，距离绘图区顶部 50；</li>
          <li><code>{from, direction}</code>，使用相对位置对象，<code>from</code> 表示所相对节点 ID（不能为自身），<code>direction</code> 表示相对方向，所有可用方向包括 <code>'top'</code>（上方）、<code>'right'</code>（右方）、<code>'bottom'</code>（下方）、<code>'left'</code>（左方）；例如 <code>{from: 'node1', direction: 'bottom'}</code> 表示当前节点在 ID 为 <code>'node1'</code> 的节点下方。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>hideArrowToSelf</code></td>
      <td><code>boolean</code></td>
      <td>默认 <code>false</code></td>
      <td>如果为 <code>true</code> 则所有指向当前节点的关系连接线上都不会显示箭头。</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td><code>int</code></td>
      <td>默认 <code>null</code></td>
      <td>如果为 <code>null</code> 则自动根据节点内容调整宽度，否则使用此项设置的值作为节点宽度。</td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td><code>int</code></td>
      <td>默认 <code>null</code></td>
      <td>如果为 <code>null</code> 则尝试使用初始化选项 <code>nodeHeight</code> 的设置，如果没有在初始化选项中设置则自动根据节点内容调整高度，否则使用此项设置的值作为节点高度。</td>
    </tr>
    <tr>
      <td><code>maxWidth</code></td>
      <td><code>int</code></td>
      <td>默认 <code>null</code></td>
      <td>限制节点最大宽度，如果为 <code>null</code> 则尝试使用初始化选项 <code>nodeMaxWidth</code> 的设置。</td>
    </tr>
    <tr>
      <td><code>minHeight</code></td>
      <td><code>int</code></td>
      <td>默认 <code>null</code></td>
      <td>限制节点最小高度，如果为 <code>null</code> 则不限制。</td>
    </tr>
    <tr>
      <td><code>maxHeight</code></td>
      <td><code>int</code></td>
      <td>默认 <code>null</code></td>
      <td>限制节点最大高度，如果为 <code>null</code> 则尝试使用初始化选项 <code>nodeHeight</code> 的设置。</td>
    </tr>
  </tbody>
</table>

### 关系对象定义

关系图中的每一个关系由一个元素（FlowChartElement）来定义。在一个关系对象上可能包含如下属性：

<table>
  <thead>
    <tr>
      <th>属性</th>
      <th>类型</th>
      <th>默认值</th>
      <th>定义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td><code>string</code></td>
      <td>必须项</td>
      <td>关系 ID，用于唯一标识关系的字符串，在导入数据到关系图时每个关系都必须指定 ID，在编辑时添加的新关系会自动生成唯一的 ID 字符串</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td><code>string</code></td>
      <td>必须项</td>
      <td>表示关系的类型，如果不指定，则默认使用初始化选项 <code>defaultRelationType</code> 的值</td>
    </tr>
    <tr>
      <td><code>from</code></td>
      <td><code>string</code></td>
      <td>必须项</td>
      <td>表示关系开始的节点 ID</td>
    </tr>
    <tr>
      <td><code>to</code></td>
      <td><code>string</code></td>
      <td>必须项</td>
      <td>表示关系结束的节点 ID</td>
    </tr>
    <tr>
      <td><code>fromPort</code></td>
      <td><code>string</code></td>
      <td>默认 <code>null</code></td>
      <td>表示连接到开始节点上的端口名称，如果不指定，则自动连接到节点任一自由端口上</td>
    </tr>
    <tr>
      <td><code>toPort</code></td>
      <td><code>string</code></td>
      <td>默认 <code>null</code></td>
      <td>表示连接到结束节点上的端口名称，如果不指定，则自动连接到节点任一自由端口上</td>
    </tr>
    <tr>
      <td><code>text</code></td>
      <td><code>string</code></td>
      <td>默认 <code>''</code></td>
      <td>用于在关系上显示的自定义文本</td>
    </tr>
    <tr>
      <td><code>order</code></td>
      <td><code>number</code></td>
      <td>默认 <code>null</code></td>
      <td>用于导出关系时进行排序的依据</td>
    </tr>
    <tr>
      <td><code>data</code></td>
      <td><code>object</code></td>
      <td>默认 <code>null</code></td>
      <td>关系上的自定义数据，例如 <code>`{myData: 'ok'}`</code></td>
    </tr>
    <tr>
      <td><code>style</code></td>
      <td><code>object</code></td>
      <td>默认 <code>null</code></td>
      <td>用于定义关系 DOM 元素上的样式</td>
    </tr>
    <tr>
      <td><code>textStyle</code></td>
      <td><code>object</code></td>
      <td>默认 <code>null</code></td>
      <td>用于定义关系文本 DOM 元素上的样式，如果为 <code>null</code>，则取初始化选项 <code>relationTextStyle</code> 的值。</td>
    </tr>
    <tr>
      <td><code>className</code></td>
      <td><code>string</code></td>
      <td>默认 <code>null</code></td>
      <td>用于定义关系 DOM 元素上的 `class` 属性</td>
    </tr>
    <tr>
      <td><code>lineStyle</code></td>
      <td><code>string</code></td>
      <td>默认 <code>null</code></td>
      <td>关系连接线样式，如果为 <code>null</code>，则取初始化选项 <code>relationLineStyle</code> 的值，其他可选值包括：<code>'solid'</code>（实线）、<code>'dashed'</code>（长虚线）、<code>'dotted'</code>（短虚线）。</td>
    </tr>
    <tr>
      <td><code>lineWidth</code></td>
      <td><code>number</code></td>
      <td>默认 <code>null</code></td>
      <td>关系连接线线宽（粗细），如果为 <code>null</code>，则取初始化选项 <code>relationLineWidth</code> 的值。</td>
    </tr>
    <tr>
      <td><code>lineColor</code></td>
      <td><code>string</code></td>
      <td>默认 <code>null</code></td>
      <td>关系连接线颜色，如果为 <code>null</code>，则取初始化选项 <code>relationLineColor</code> 的值</td>
    </tr>
    <tr>
      <td><code>lineShape</code></td>
      <td><code>string</code></td>
      <td>默认 <code>null</code></td>
      <td>
        <p>关系连接线形状，可选值包括：</p>
        <ul>
          <li>如果为 <code>null</code> ，则取初始化选项 <code>relationLineShape</code> 的值；</li>
          <li><code>'straight'</code> 使用直线连接；</li>
          <li><code>'curve'</code> 使用曲线连接；</li>
          <li><code>'arc'</code> 使用圆弧连接；</li>
          <li><code>'bessel'</code> 使用贝塞尔曲线连接。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>arrowSize</code></td>
      <td><code>number</code></td>
      <td>默认 <code>null</code></td>
      <td>关系连接线箭头大小，如果为 <code>null</code>，则取初始化选项 <code>relationArrowSize</code> 的值</td>
    </tr>
    <tr>
      <td><code>showArrow</code></td>
      <td><code>string</code> | <code>boolean</code></td>
      <td>默认 <code>null</code></td>
      <td>
        <p>是否显示连接线箭头，可选值包括：</p>
        <ul>
          <li>如果为 <code>null</code> 则默认在连接线结束时显示箭头（但仍然有两种例外情况：初始化选项 <code>hideArrowToResult</code> 为 <code>true</code> 且当前关系所指向的节点类型为 <code>'result'</code>），或者所指向的节点 <code>hideArrowToSelf</code> 属性为 <code>true</code>；</li>
          <li>如果为 <code>'begin'</code> 则在关系连接线开始显示箭头；</li>
          <li>如果为 <code>'end'</code> 或 <code>'false'</code> 则在关系连接线结束显示箭头；</li>
          <li>如果为 <code>'both'</code> 则同时在关系连接线开始和结束显示箭头；</li>
          <li>如果为 <code>false</code> 则不显示箭头。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 初始化

### 初始化方法

要创建一个关系图必须先进行手动初始化。

```html
<div id="flowchart"></div>
```

```js
$('#flowchart').flowChart({
  // ... 初始化选项
});
```

初始化之前必须预留一个空 `<div>` 元素，然后调用 `$(selector).flowChart(options)` 方法即可。

### 初始化选项

初始化时可以通过传入选项对象来定制关系图功能，所有可用的功能选项包括：

<table>
  <thead>
    <tr>
      <th>选项</th>
      <th>类型</th>
      <th>默认值</th>
      <th>定义</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>data</code></td>
      <td><code>[elementData]</code></td>
      <td>默认值为 <code>[{id: 'start', type: 'start', text: 'Start']</code></td>
      <td>关系图上所有元素的初始化数据，详细用法参见 <strong>初始化数据</strong> 章节。</td>
    </tr>
    <tr>
      <td><code>lang</code></td>
      <td><code>string</code></td>
      <td>默认为 <code>null</code></td>
      <td>如果设置为 <code>null</code> 则自动选择合适的语言，目前支持的语言包括 <code>'zh-cn'</code>（简体中文）、<code>'zh-tw'</code>（繁体中文）、<code>'en'</code>（英文）。</td>
    </tr>
    <tr>
      <td><code>langs</code></td>
      <td><code>{[langCode]: {}}</code></td>
      <td>默认为 <code>null</code></td>
      <td>如果要修改默认的语言文本，或者添加新的界面语言，可以使用此选项，此选项用法参见 <strong>自定义界面语言</strong> 章节。</td>
    </tr>
    <tr>
      <td><code>activeColor</code></td>
      <td><code>string</code></td>
      <td>默认值为 <code>'#3280fc'</code></td>
      <td>激活状态颜色</td>
    </tr>
    <tr>
      <td><code>adsorptionGrid</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>5</code></td>
      <td>移动时自动吸附的网格大小，如果设置为 <code>false</code> 或 <code>0</code> 则不使用自动吸附功能。</td>
    </tr>
    <tr>
      <td><code>doubleClickToEdit</code></td>
      <td><code>boolean</code></td>
      <td>默认值为 <code>true</code></td>
      <td>是否启用双击元素进入编辑文本状态。</td>
    </tr>
    <tr>
      <td><code>readonly</code></td>
      <td><code>boolean</code></td>
      <td>默认值为 <code>false</code></td>
      <td>如果设置为 <code>true</code>，则屏蔽所有编辑操作，如果设置为 <code>'only-drag'</code> 则屏蔽所有常规编辑操作，但允许用户通过拖拽来移动节点位置。</td>
    </tr>
    <tr>
      <td><code>showContextMenu</code></td>
      <td><code>boolean</code> | <code>function</code></td>
      <td>默认值为 <code>true</code></td>
      <td>是否在元素上显示上下文菜单（右键菜单），如果设置为 <code>false</code> 则不显示菜单，如果设置为一个回调函数则可以自定义上下文菜单的内容，详细用法参见 <strong>自定义上下文菜单</strong> 章节。</td>
    </tr>
    <tr>
      <td><code>addFromDrop</code></td>
      <td><code>boolean</code> | <code>string</code></td>
      <td>默认值为 <code>true</code></td>
      <td>是否启用拖放来添加节点功能，详细用法参见 <strong>拖放添加节点</strong> 章节。</td>
    </tr>
    <tr>
      <td><code>defaultNodeType</code></td>
      <td><code>string</code></td>
      <td>默认值为 <code>'action'</code></td>
      <td>当添加新节点时默认的节点类型。</td>
    </tr>
    <tr>
      <td><code>defaultRelationType</code></td>
      <td><code>string</code></td>
      <td>默认值为 <code>'relation'</code></td>
      <td>当添加新关系时默认的关系类型。</td>
    </tr>
    <tr>
      <td><code>deleteConfirm</code></td>
      <td><code>boolean</code> | <code>function</code></td>
      <td>默认值为 <code>true</code></td>
      <td>是否在删除元素时进行确认，如果设置为回调函数则使用回调函数进行确认操作。</td>
    </tr>
    <tr>
      <td><code>draggable</code></td>
      <td><code>boolean</code></td>
      <td>默认值为 <code>true</code></td>
      <td>是否允许用户通过拖放来移动节点。</td>
    </tr>
    <tr>
      <td><code>exportDataToSelf</code></td>
      <td><code>boolean</code></td>
      <td>默认值为 <code>true</code></td>
      <td>是否将节点自定义数据导出为节点自身属性，详细用法参见 <strong>数据导出</strong> 章节。</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td><code>string</code> | <code>number</code></td>
      <td>默认值为 <code>'auto'</code></td>
      <td>绘图区宽度，如果设置为 <code>'auto'</code> 则自动根据外部容器元素宽度进行调整。</td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>500</code></td>
      <td>绘图区高度。</td>
    </tr>
    <tr>
      <td><code>padding</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>20</code></td>
      <td>绘图区内边距。</td>
    </tr>
    <tr>
      <td><code>nodeBackground</code></td>
      <td><code>string</code></td>
      <td>默认值为 <code>'#fff'</code></td>
      <td>节点元素背景色。</td>
    </tr>
    <tr>
      <td><code>nodeHeight</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>40</code></td>
      <td>节点元素高度。</td>
    </tr>
    <tr>
      <td><code>nodeMinWidth</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>70</code></td>
      <td>节点元素最小宽度。</td>
    </tr>
    <tr>
      <td><code>nodeMaxWidth</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>200</code></td>
      <td>节点元素最大宽度。</td>
    </tr>
    <tr>
      <td><code>nodeStyle</code></td>
      <td><code>object</code></td>
      <td>默认值为 <code>null</code></td>
      <td>节点元素默认样式。</td>
    </tr>
    <tr>
      <td><code>nodeTextStyle</code></td>
      <td><code>object</code></td>
      <td>默认值为 <code>null</code></td>
      <td>节点文本默认样式。</td>
    </tr>
    <tr>
      <td><code>horzSpace</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>80</code></td>
      <td>节点元素间的默认水平距离。</td>
    </tr>
    <tr>
      <td><code>vertSpace</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>60</code></td>
      <td>节点元素间的默认垂直距离。</td>
    </tr>
    <tr>
      <td><code>relationArrowSize</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>8</code></td>
      <td>关系连接线箭头大小。</td>
    </tr>
    <tr>
      <td><code>relationLineWidth</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>1</code></td>
      <td>关系连接线宽度。</td>
    </tr>
    <tr>
      <td><code>relationLineStyle</code></td>
      <td><code>string</code></td>
      <td>默认值为 <code>'solid'</code></td>
      <td>关系连接线样式，可选值包括：<code>'solid'</code>（实线）、<code>'dashed'</code>（长虚线）、<code>'dotted'</code>（短虚线）。</td>
    </tr>
    <tr>
      <td><code>relationLineColor</code></td>
      <td><code>string</code></td>
      <td>默认值为 <code>'#333'</code></td>
      <td>关系连接线颜色。</td>
    </tr>
    <tr>
      <td><code>relationLineShape</code></td>
      <td><code>string</code></td>
      <td>默认值为 <code>'straight'</code></td>
      <td>
        <p>关系连接线形状，可选值包括：</p>
        <ul>
          <li><code>'straight'</code> 使用直线连接；</li>
          <li><code>'curve'</code> 使用曲线连接；</li>
          <li><code>'arc'</code> 使用圆弧连接；</li>
          <li><code>'bessel'</code> 使用贝塞尔曲线连接。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>relationTextStyle</code></td>
      <td><code>object</code></td>
      <td>默认值为 <code>null</code></td>
      <td>关系文本默认样式。</td>
    </tr>
    <tr>
      <td><code>hideArrowToResult</code></td>
      <td><code>boolean</code></td>
      <td>默认值为 <code>true</code></td>
      <td>是否隐藏指向类型为结果（<code>'result'</code>）的关系结束端的箭头。</td>
    </tr>
    <tr>
      <td><code>hideArrowToResult</code></td>
      <td><code>boolean</code></td>
      <td>默认值为 <code>true</code></td>
      <td>是否隐藏指向结果节点的关系箭头。</td>
    </tr>
    <tr>
      <td><code>besselCurvature</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>0.5</code></td>
      <td>当绘制连接线时贝塞尔曲线时的弧度。</td>
    </tr>
    <tr>
      <td><code>portLineLength</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>0</code></td>
      <td>节点端口连接线的长度。</td>
    </tr>
    <tr>
      <td><code>portLineWidth</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>1</code></td>
      <td>节点端口连接线的宽度。</td>
    </tr>
    <tr>
      <td><code>portLineColor</code></td>
      <td><code>string</code></td>
      <td>默认值为 <code>'#333'</code></td>
      <td>节点端口连接线的颜色。</td>
    </tr>
    <tr>
      <td><code>portLineStyle</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>'solid'</code></td>
      <td>节点端口连接线的样式，可选值包括：<code>'solid'</code>（实线）、<code>'dashed'</code>（长虚线）、<code>'dotted'</code>（短虚线）。</td>
    </tr>
    <tr>
      <td><code>portSpaceSize</code></td>
      <td><code>number</code></td>
      <td>默认值为 <code>20</code></td>
      <td>节点端口单个单位所占空间大小。</td>
    </tr>
    <tr>
      <td><code>activeOnClick</code></td>
      <td><code>boolean</code></td>
      <td>默认值为 <code>true</code></td>
      <td>是否在点击节点时激活节点元素。</td>
    </tr>
    <tr>
      <td><code>nodeTemplate</code></td>
      <td><code>string</code></td>
      <td>默认值为 <code>null</code></td>
      <td>节点 DOM 元素模版字符串，如果为空，则使用默认的 HTML 模版。</td>
    </tr>
    <tr>
      <td><code>relationTemplate</code></td>
      <td><code>string</code></td>
      <td>默认值为 <code>null</code></td>
      <td>关系 DOM 元素模版字符串，如果为空，则使用默认的 HTML 模版。</td>
    </tr>
    <tr>
      <td><code>elementTypes</code></td>
      <td><code>{[elementType]: elementData}</code></td>
      <td>默认值为 <code>null</code></td>
      <td>自定义的元素类型，此选项用法参见 <strong>自定义元素</strong> 章节。</td>
    </tr>
    <tr>
      <td><code>onClickElement</code></td>
      <td><code>function</code></td>
      <td>默认值为 <code>null</code></td>
      <td>当用户点击元素时的回调函数。</td>
    </tr>
    <tr>
      <td><code>onUpdateElement</code></td>
      <td><code>function</code></td>
      <td>默认值为 <code>null</code></td>
      <td>指定一个回调函数监听元素添加和修改，此选项用法参见 <strong>监听元素变更</strong> 章节。</td>
    </tr>
    <tr>
      <td><code>onAddElement</code></td>
      <td><code>function</code></td>
      <td>默认值为 <code>null</code></td>
      <td>指定一个回调函数监听元素添加，此选项用法参见 <strong>监听元素变更</strong> 章节。</td>
    </tr>
    <tr>
      <td><code>onDeleteElement</code></td>
      <td><code>function</code></td>
      <td>默认值为 <code>null</code></td>
      <td>指定一个回调函数监听元素添加操作，此选项用法参见 <strong>监听元素变更</strong> 章节。</td>
    </tr>
    <tr>
      <td><code>onActiveElement</code></td>
      <td><code>function</code></td>
      <td>默认值为 <code>null</code></td>
      <td>指定一个回调函数监听元素被激活时的操作。</td>
    </tr>
    <tr>
      <td><code>onUnactiveElement</code></td>
      <td><code>function</code></td>
      <td>默认值为 <code>null</code></td>
      <td>指定一个回调函数监听元素被取消激活状态时的操作。</td>
    </tr>
    <tr>
      <td><code>onRenderNode</code></td>
      <td><code>function</code></td>
      <td>默认值为 <code>null</code></td>
      <td>指定一个回调函数在渲染节点时进行调用。</td>
    </tr>
    <tr>
      <td><code>onResetData</code></td>
      <td><code>function</code></td>
      <td>默认值为 <code>null</code></td>
      <td>指定一个回调函数监在重置关系图数据后调用。</td>
    </tr>
    <tr>
      <td><code>afterCreate</code></td>
      <td><code>function</code></td>
      <td>默认值为 <code>null</code></td>
      <td>指定一个回调函数监在关系图创建完成后调用（初始化完成之后）。</td>
    </tr>
    <tr>
      <td><code>beforeCreate</code></td>
      <td><code>function</code></td>
      <td>默认值为 <code>null</code></td>
      <td>指定一个回调函数监在关系图创建之前调用（初始化完成但没有绘制）。</td>
    </tr>
  </tbody>
</table>

### 初始化数据

初始化数据为一个数组，包含了关系图中所有节点和关系对象。在初始化时通过 `data` 选项来传入对象数组，这样关系图就在初始化时绘制数组中的元素和节点。

下面为一个简单的初始化数据例子：

```json
[
    {
      "id": "start",
      "type": "start",
      "text": "开始",
      "position": {
          "left": 20,
          "top": 20
      },
    },
    {
      "id": "action1",
      "type": "action",
      "text": "执行动作",
      "position": {
          "left": 130,
          "top": 20
      },
    },
    {
      "id": "stop",
      "type": "stop",
      "text": "结束",
      "position": {
          "left": 260,
          "top": 20
      },
    },
    {
        "from": "start",
        "to": "action1",
        "id": "start-action1",
        "type": "relation",
    },
    {
        "from": "action1",
        "to": "stop",
        "id": "action1-stop",
        "type": "relation",
    }
]
```

## 实例属性和方法

### 获取实例

每个关系图组件都对应了一个 `FlowChart` 类实例，在此实例上可以访问属性和相关方法对关系图进行操作，例如更新元素、显示右键菜单等。

要获取实例属性可以通过 JQuery 元素的 `$().data()` 方法实现：

```js
// 初始化
$('#flowchart').flowChart();

// 获取 #flowchart 对应的关系图实例
var myFlowChart = $('#flowchart').data('zui.flowChart');
```

### 实例属性

可用的实例属性包括。

#### `.id`

获取关系图的 ID。

#### `.$container`

获取关系图组件对应的 DOM 元素（JQuery 类型）。

#### `.$canvas`

获取关系图组件对应的绘图区域 DOM 元素（JQuery 类型）。

#### `.activedElements`

获取关系图上当前所有处于激活状态的元素。

#### `.bounds`

获取关系图绘图区域坐标范围信息。

#### `.elements`

获取关系图上的所有元素数据。

#### `.lang`

获取当前使用语言文本对象。

#### `.nodeList`

获取节点列表。

#### `.relationList`

获取关系列表。

#### `.options`

获取初始化选项对象。

#### `.types`

获取当前关系图所支持的所有元素类型。

#### `.plugins`

获取当前关系图所使用的插件清单。

### 实例方法

#### `.render([partialIDList])`

执行一次绘制操作。如果省略 `partialIDList` 参数则重新绘制所有元素，如果通过 `partialIDList` 指定一个元素 ID 列表则仅仅绘制列表中列出的所有元素。

#### `.getPositionOf(element, [returnCenter])`

获取关系图中 DOM 元素相对于绘图区域的位置。

#### `.createRelation(relationData)`

创建一个关系元素类型的实例。

#### `.createElements(elementData)`

创建一个元素的实例，该方法会通过数组返回结果，如果元素包含相关的元素也会在数组中返回。

#### `.activeElement(elementID)`

激活指定的元素。

#### `.unactiveElement(elementID)`

取消激活指定的元素。

#### `.unactiveElements()`

取消激活所有已经激活的元素。

#### `.isElementActive(elementID)`

判断指定的元素是否处于激活状态

#### `.focusElementText(elementID)`

使得指定的元素文本获得焦点并处于可编辑状态。

#### `.blurElementText()`

取消元素文本的可编辑状态。

#### `.getElement(elementID)`

根据元素 ID 获取元素实例。

#### `.setNodePosition(nodeID, position)`

设置节点元素位置。

#### `.addElement(elementData)`

创建一个元素并添加到关系图中。

#### `.addNode(type, fromNode, fromPort, text, direction)`

创建一个节点元素并添加到关系图中。

#### `.addRelation(fromNode, fromPort, toNode, toPort, text)`

创建一个关系元素并添加到关系图中。

#### `.resetData(data)`

重置关系图元素数据，之前的数据会被清空。

#### `.update(elementsData, [skipRender, silence])`

更新关系图元素数据，支持添加和修改操作。

#### `.delete(idList, [skipRender])`

删除列表中指定的所有元素。

#### `.$findElement(elementID)`

获取指定 ID 的元素在关系图上对应的 DOM 元素（JQuery 类型）。

#### `.exportData()`

导出关系图中所有元素数据。

#### `.setOptions(newOptions, [skipRender])`

重新设置初始化选项。

## 拖放添加节点

## 监听元素变更

使用初始化选项 `onUpdateElement` 来指定一个回调函数监听元素变更，包括向关系图添加或修改元素。

```js
$('#myFlowChart').flowChart({
    onUpdateElement: function(updatedElements) {
      // updatedElements 为本次更新的元素数组
      console.log('已更新的元素列表', updatedElements, this);

        // this 为当前关系图实例对象
        var flowChart = this;
        updatedElements.forEach(function(element) {
            if (element.isNew) {
                console.log('新增加了元素', element);
            } else {
                console.log('修改了元素', element);
            }
        });

        // // 如果要取消本次所有元素的变更，只需要返回 false
        // return false;

        // // 如果需要取消部分元素的变更，则需要返回一个新的元素数组
        // updatedElements.pop(); // 忽略最后一个元素的变更
        // updatedElements[0].text = 'test'; // 将第一个变更的元素 text 属性设置为 'test'
        // return updatedElements;
    }
});
```

如果仅需要监听添加新元素事件，则使用初始化选项 `onAddElement` 指定一个回调函数来监听。

```js
$('#myFlowChart').flowChart({
    onAddElement: function(newElements) {
      // newElements 为本次更新的元素数组
      console.log('新添加的元素列表', newElements, this);

        // this 为当前关系图实例对象
        var flowChart = this;
        newElements.forEach(function(element) {
            console.log('新增加了元素', element);
        });

        // // 如果要取消本次添加的所有新元素，只需要返回 false
        // return false;

        // // 如果需要取消或修改部分元素的添加，则需要返回一个新的元素数组
        // newElements.pop(); // 忽略最后一个元素的添加
        // newElements[0].text = 'test'; // 将第一个新添加的元素 text 属性设置为 'test'
        // return newElements;
    }
});
```

## 自定义元素

### 基本类型继承

### 自定义端口

### 通过初始化选项应用类型

## 数据导出

## 自定义界面语言

## 插件机制



<link href="dist/lib/flowchart/zui.flowchart.min.css" rel="stylesheet">
<script src="dist/lib/flowchart/zui.flowchart.min.js"></script>
