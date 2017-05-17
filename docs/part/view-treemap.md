# 树状图

## 综合示例

### 从 <span class="code">data</span> 选项创建

使用 `data` 选项来指定树结构。

<example>
  <div id="treemapExample1"></div>
</example>

```html
<div id="treemapExample1"></div>
```

```js
$('#treemapExample1').treemap({
    data: {
        text: '蔬菜',
        children: [{
            html: '<i class="icon icon-heart text-danger"></i> 我的菜',
            children: [{
                textColor: 'green',
                text: '青菜'
            }, {
                html: '<span class="text-info">菠菜</span>'
            }]
        }, {
            text: '你的瓜',
            style: {border: '1px solid green'},
            collapsed: true,
            tooltip: '点击展开或折叠',
            children: ['南瓜', '西瓜', '丝瓜', '苦瓜']
        }, {
            text: '甘蓝',
            children: ['大甘蓝']
        }, {
            color: 'orange',
            textColor: 'white',
            text: '土豆'
        }]
    }
});
```

### 从 <span class="code text-danger">&lt;ul class="treemap-data"&gt;</span> 元素创建

在 `<ul class="treemap-data">` 内使用 `<li>` 来指定节点内容，嵌套 `<ul>` 来表达层级结构。为 `<li>` 添加 `[data-*=]` 来设置节点属性，在 `<li>` 内使用  `<div class="content">` 来设置节点的 `html` 属性（用于设置节点内容），使用 `<div class="text">` 来设置节点 `text` 属性。

<example>
  <div id="treemapExample2" class="treemap">
    <ul class="treemap-data hide">
      <li>
        水果
        <ul>
          <li>
            苹果
            <ul>
              <li>
                大苹果
                <ul>
                  <li><strong class="text-danger">大红苹果</strong></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            热带水果
            <ul>
              <li>香蕉</li>
              <li>芒果</li>
              <li>椰子</li>
              <li>菠萝</li>
            </ul>
          </li>
          <li>
            <div class="content">
              <strong>杏</strong>
              <div><span class="label label-danger">最爱</span></div>
            </div>
          </li>
          <li data-collapsed="true">
            桃子
            <ul>
              <li>油桃</li>
              <li>蟠桃</li>
            </ul>
          </li>
          <li>梅子</li>
        </ul>
      </li>
    </ul>
  </div>
</example>

```html
<div id="treemapExample2" class="treemap">
  <!-- 嵌套 ul 元素来表达树状结构 -->
  <ul class="treemap-data hide">
    <li>
      水果
      <ul>
        <li>
          苹果
          <ul>
            <li>
              大苹果
              <ul>
                <li><strong class="text-danger">大红苹果</strong></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          热带水果
          <ul>
            <li>香蕉</li>
            <li>芒果</li>
            <li>椰子</li>
            <li>菠萝</li>
          </ul>
        </li>
        <li>
          <div class="content">
            <strong>杏</strong>
            <div><span class="label label-danger">最爱</span></div>
          </div>
        </li>
        <li data-collapsed="true">
          桃子
          <ul>
            <li>油桃</li>
            <li>蟠桃</li>
          </ul>
        </li>
        <li>梅子</li>
      </ul>
    </li>
  </ul>
</div>
```

```js
$('#treemapExample2').treemap();
```

## 使用

### 引入资源

文件上传为独立组件，你需要从本地或 CDN 单独引入 lib 目录下的资源：

```html
<link href="lib/treemap/zui.treemap.min.css" rel="stylesheet">
<script src="lib/treemap/zui.treemap.min.js"></script>
```

### 初始化

```html
<div class="treemap"></div>
```

```js
$('#myTreemap').treemap({
    // 初始化选项
});
```

### 节点对象

树状图中的每一个节点使用一个 JS 对象来存储，在树状图插件中使用到的属性有：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性</th>
      <th style="width: 80px">名称</th>
      <th style="width: 300px">可选值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>节点的 ID</td>
      <td>字符串或数字</td>
      <td>所有节点必须有一个图内唯一值的ID，如果不指定，会使用  `$.zui.uuid()` 生成一个。</td>
    </tr>
    <tr>
      <td>`text`</td>
      <td>节点上显示的文本</td>
      <td>字符串, 默认 `''`</td>
      <td>如果 `text` 属性和 `html` 属性都没有指定，则节点元素上不回显示内容。</td>
    </tr>
    <tr>
      <td>`html`</td>
      <td>节点上显示的HTML格式文本</td>
      <td>字符串, 默认 `''`</td>
      <td>如果 `text` 属性和 `html` 属性都没有指定，则节点元素上不回显示内容。</td>
    </tr>
    <tr>
      <td>`children`</td>
      <td>子节点</td>
      <td>对象数组，默认 `[]`</td>
      <td>如果没有子节点，可以忽略此属性</td>
    </tr>
    <tr>
      <td>`order`</td>
      <td>节点显示顺序</td>
      <td>默认 `''`</td>
      <td>如果指定此值则按此属性来比较同一层级的节点并重新排序，否则安装数组中设置的顺序显示。</td>
    </tr>
    <tr>
      <td>`style`</td>
      <td>节点外观样式</td>
      <td>对象，默认 `{}`</td>
      <td>可以使用 jQuery 的 css 方法参数对象。</td>
    </tr>
    <tr>
      <td>`textColor`</td>
      <td>文本颜色</td>
      <td>表示颜色的字符串，例如 `'#f00'`</td>
      <td></td>
    </tr>
    <tr>
      <td>`color`</td>
      <td>背景颜色</td>
      <td>表示颜色的字符串，例如 `'#f00'`</td>
      <td></td>
    </tr>
    <tr>
      <td>`border`</td>
      <td>边框样式</td>
      <td>定义边框样式的字符串，使用 CSS 格式，例如 `'1px solid #f00'`</td>
      <td>也可以单独指定一项，例如 `'#f00'`</td>
    </tr>
    <tr>
      <td>`title`</td>
      <td>备注信息</td>
      <td>字符串，默认 `''`</td>
      <td>会作为节点元素的 `title` 属性的值</td>
    </tr>
    <tr>
      <td>`tooltip`</td>
      <td>工具提示</td>
      <td>字符串，默认 `''`</td>
      <td>当鼠标悬浮在节点上时显示的工具提示内容</td>
    </tr>
    <tr>
      <td>`attrs`</td>
      <td>节点元素属性</td>
      <td>对象，默认 `{}`</td>
      <td>会作为 `$().attr(attrs)` 的参数使用</td>
    </tr>
  </tbody>
</table>

节点对象数组用于存放一组相同层级的节点，下面为存储根节点数据对象示例：

```js
{
        text: '蔬菜',
        children: [{
            html: '<i class="icon icon-heart text-danger"></i> 我的菜',
            children: [{
                textColor: 'green',
                text: '青菜'
            }, {
                html: '<span class="text-info">菠菜</span>'
            }]
        }, {
            text: '你的瓜',
            style: {border: '1px solid green'},
            collapsed: true,
            tooltip: '点击展开或折叠',
            children: ['南瓜', '西瓜', '丝瓜', '苦瓜']
        }, {
            text: '甘蓝',
            children: ['大甘蓝']
        }, {
            color: 'orange',
            textColor: 'white',
            text: '土豆'
        }]
    }
}
```

### 选项

在初始化时可用传入一个对象来设定选项，或者为 `.treemap` 添加 `[data-*=]` 属性来指定选项， 可用选项如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>选项</th>
      <th style="width: 80px">名称</th>
      <th style="width: 300px">可选值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`data`</td>
      <td>树形结构数据</td>
      <td>对象或数组，默认 `null`</td>
      <td>决定图中显示哪些节点，及节点的层次结构</td>
    </tr>
    <tr>
      <td>`rowSpace`</td>
      <td>节点层级之间的间距</td>
      <td>数字，默认 `30`</td>
      <td></td>
    </tr>
    <tr>
      <td>`nodeSpace`</td>
      <td>同一层级相邻节点间的间距</td>
      <td>数字，默认 `20`</td>
      <td></td>
    </tr>
    <tr>
      <td>`foldable`</td>
      <td>是否可以折叠子节点</td>
      <td>默认 `true`</td>
      <td>如果设置为 `false`，则不会在节点下方显示折叠和展开的图标，`clickNodeToFold` 选项也不会生效</td>
    </tr>
    <tr>
      <td>`clickNodeToFold`</td>
      <td>是否允许直接点击节点折叠子节点</td>
      <td>默认 `true`</td>
      <td>如果关闭此选项，则无法直接点击节点来折叠和展开子节点，但仍然可以通过点击节点下方的折叠图标实现。</td>
    </tr>
    <tr>
      <td>`sort`</td>
      <td>是否启用排序</td>
      <td>布尔值或函数，默认 `false`</td>
      <td>如果设置为一个函数，则使用此函数来比较节点，如果设置为 `true`，则使用节点的 `order` 属性来比较。</td>
    </tr>
    <tr>
      <td>`cableWdth`</td>
      <td>连接线宽度</td>
      <td>数字，默认 `1`</td>
      <td>如果为 `0`，则不会显示连接线</td>
    </tr>
    <tr>
      <td>`cableColor`</td>
      <td>连接线颜色</td>
      <td>表示颜色的字符串，默认 `#808080`</td>
      <td>如果为 `0`，则不会显示连接线</td>
    </tr>
    <tr>
      <td>`cableStyle`</td>
      <td>连接线样式</td>
      <td>定义线条样式的字符串，默认 `solid`</td>
      <td>你可以使用 CSS `border-style` 属性的所有值</td>
    </tr>
    <tr>
      <td>`listenNodeResize`</td>
      <td>监听节点尺寸变化</td>
      <td>默认 `true`</td> 
      <td>如果为 `true` 则当任何一个节点尺寸发生变化时重新绘制连接线，如果确认节点尺寸不会在树状图绘制完成后发生变化，则可以设置为 `false` 关闭此选项来避免额外的程序执行。</td>
    </tr>
    <tr>
      <td>`tooltip`</td>
      <td>工具提示选项</td>
      <td>对象，默认 `{}`</td>
      <td>可以使用工具提示插件的选项来设置如何显示节点上的工具提示</td>
    </tr>
    <tr>
      <td>`nodeStyle`</td>
      <td>定义节点的默认样式</td>
      <td>对象，默认 `{}`</td>
      <td>可以使用 jQuery 的 css 方法参数对象</td>
    </tr>
    <tr>
      <td>`nodeTemplate`</td>
      <td>节点元素模板</td>
      <td>字符串或函数</td>
      <td>默认值为 `<div class="treemap-node"><a class="treemap-node-wrapper"></a></div>`；如果设置为函数，则通过函数返回创建的节点元素（jQuery 对象），该函数的第一个参数为节点对象。</td>
    </tr>
  </tbody>
</table>

### 方法

```js
// 重新渲染树状图
$('#myTreemap').treemap('render');

// 使用新的数据渲染树状图
$('#myTreemap').treemap('render', data);

// 重新计算并绘制连接线
$('#myTreemap').treemap('drawLines');
```



### 事件

### 其他问题

#### 重新绘制图

#### 自定义节点模板

#### 展开和折叠节点

#### 监听节点点击事件

#### 多个根节点


<script src="dist/lib/treemap/zui.treemap.js"></script>
<link href="dist/lib/treemap/zui.treemap.css" rel="stylesheet">

<script>
function afterPageLoad() {
    $('#treemapExample1').treemap({
        data: {
            text: '蔬菜',
            children: [{
                html: '<i class="icon icon-heart text-danger"></i> 我的菜',
                children: [{
                    textColor: 'green',
                    text: '青菜'
                }, {
                    html: '<span class="text-info">菠菜</span>'
                }]
            }, {
                text: '你的瓜',
                style: {border: '1px solid green'},
                collapsed: true,
                tooltip: '点击展开或折叠',
                children: ['南瓜', '西瓜', '丝瓜', '苦瓜']
            }, {
                text: '甘蓝',
                children: ['大甘蓝']
            }, {
                color: 'orange',
                textColor: 'white',
                text: '土豆'
            }]
        }
    });
    $('#treemapExample2').treemap();
}
</script>

