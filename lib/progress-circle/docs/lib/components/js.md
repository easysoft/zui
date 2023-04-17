# 环形进度条生成器

环形进度条生成器允许通过 JS 动态创建一个[环形进度条](/lib/components/progress-circle/index.html)。

## 使用方法

通过构建一个 `ProgressCircle` 实例, 在一个空的 `<div>` 元素上创建一个菜单。

<Example>
  <div id="progress1"></div>
</Example>

<script>
export default {
    mounted() {
        onZUIReady(() => {
            const progressCircle = new zui.ProgressCircle('#progress1', {
                percent: 40,
            });
        })
    }
 }
 </script>

 ```html
 <div id="progress1"></div>

 <script>
    const progressCircle = new zui.ProgressCircle('#progress1', {
        percent: 40
    });
 </script>
 ```

## 引入

### 通过 npm

```js
import {ProgressCircle} from 'zui/progress-circle';

const ProgressCircle = new ProgressCircle(element, options);
```

### 通过全局对象 `zui`

```js
const progressCircle = new zui.ProgressCircle(element, options);
```

### 使用 React 组件

```jsx
import {render} from 'react';
import {ProgressCircle} from 'zui/progress-circle/react';

render(element, <Menu {...options} />);
```

### 使用 jQuery 扩展

```js
$(element).ProgressCircle(options);

const progressCircle = $(element).data('zui.progressCircle')
```

## 更新环形进度条

调用环形进度条组件实例上的 `render` 方法来更新实例, 并重新进行渲染:

```js
progressCircle.render({options});
```

## 构造方法

 **定义：**

```ts
constructor(element: HTMLElement | string, options: ProgressCircleOptions);
```

 **参数：**

* `element`: 指定用于创建环形进度条的容器元素, 或者通过字符串指定用于查找容易元素的选择器
* `options`: 指定选项

 **示例：**

```ts
new zui.ProgressCircle('#progress', {
    percent: 40
});
```

## 选项

### `className`

类名。

* 类型：`string | object | array`
* 必选：否

###  `circleSize`

进度条控件整体大小。

* 类型：`number`
* 必选：否
* 默认值: 24

### `circleBorderSize`

进度条环宽度。

* 类型：`number`
* 必选：否
* 默认值: 2

### `circleBgColor`

进度条环背景色。

* 类型：`number`
* 必选：否
* 默认值: `var(--progress-circle-bg)`

### `circleColor`

进度条环颜色。

* 类型：`number`
* 必选：否
* 默认值: `var(--progress-circle-bar-color)`

## 方法

### `render`

重新渲染，可以指定新的选项。

**定义：**

```ts
render(options: Partial<MenuOptions>): void;
```

**参数：**

* `options`：需要重新设置的选项
