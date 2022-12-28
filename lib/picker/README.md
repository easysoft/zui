# 下拉选择器

用于方便用户从多个选项列表中进行选择。

## 示例

### 单选

```html:example
<div id="singlePicker"></div>
```

### 多选

```html:example
<div id="multiPicker"></div>
```

## 基本用法


## 引入

### 通过 npm

```js
import {Picker} from 'zui/picker';

const picker = new Picker(element, options);
```

### 通过全局对象 `zui`

```js
const picker = new zui.Picker(element, options);
```

### 使用 React 组件

```jsx
import {render} from 'react';
import {Picker} from 'zui/picker/react';

render(element, <Picker {...options} />);
```

### 使用 jQuery 扩展

```js
$(element).picker(options);

const picker = $(element).data('zui.picker');
```

## 更新下拉列表

调用菜单组件实例上的 `render` 方法来更新下拉列表，并重新进行渲染：

```js
Picker.render(options);
```

## 下拉面板宽度

## 下拉多选

## 全选 取消全选

## 可搜索

## 选项

| 属性名称           | 含义             | 类型 | 默认值  |
| ----------------- |:----------------:| ----- |----- |
| `multiple`        | 是否可多选         | `boolean` |  `false` |
| `showSearch`      | 是否可搜索         | `boolean` |  `false` |
| `defaultValue`    | 组件默认展示项     | `string` |  空 |
| `placeholder`     | 占位符             | `string` |  空 |
| `disabled`        | 禁用状态           | `boolean` |  `false` |
| `clearable`       | 允许清除单选值		  | `boolean` |  `false` |
| `items`           | 下拉列表		        | `array` |  `[]` |
| `autoSelectFirst` | 是否自动选中第一项	| `boolean` |  `false` |
| `dropWidth`       | 下拉面板宽度	      | `string` |  `100%` |
| `minDropWidth`    | 下拉面板最小宽度	   | `string` |  `100`  |
| `maxDropWidth`    | 下拉面板最大宽度	   | `string` |  `450` |
| `maxDropHeight`   | 下拉面板最大高度		 | `number` |  `260` |

### `items` 单项属性

| 属性名称           | 含义                | 类型     | 默认值  |
| ----------------- |:-------------------:| -------- |----- |
| `title`           | 名称                 | `string` |   |
| `icon`            | 图标                 | `string` |   |
| `disabled`        | 禁用状态             | `boolean` | `false` |
| `trailingIcon`    | 后缀图标             | `string`   |   |
| `className`       | 类名                 | `string`   |   |
| `key`             | 键值                 | `string`   |   |
| `style`           | 样式                 | `object`   |   |


## 方法

### focus()

激动下拉选择器。

### setValue()

动态设置选中的值。

### getValue()

获取选中的值。

### onChange()

当值变更后时触发。

### show()

展示下拉选择器。

### hide()

隐藏下拉选择器。
