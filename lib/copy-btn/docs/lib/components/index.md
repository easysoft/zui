# 复制按钮

复制按钮组件可以快速复制指定内容到剪贴板，并通过工具提示或内容覆盖的方式给用户反馈复制成功的提示。

## 使用方法

为按钮元素添加 `data-toggle="copyBtn"` 属性即可激活复制按钮功能。通过 `data-content` 属性指定要复制的文本内容。

::: tabs

== 示例

<Example class="flex gap-4">
  <button type="button" class="btn" data-toggle="copyBtn" data-content="这是要复制的文本">
    <i class="icon icon-copy"></i> 复制文本
  </button>
</Example>

== HTML

```html
<button type="button" class="btn" data-toggle="copyBtn" data-content="这是要复制的文本">
  <i class="icon icon-copy"></i> 复制文本
</button>
```

:::

## 复制目标元素内容

通过 `href` 或 `data-target` 属性指定目标元素的选择器，可以复制目标元素的文本内容。

::: tabs

== 示例

<Example class="col gap-4">
  <div id="copyTarget" class="p-4 surface rounded">这是目标元素中的内容，点击下方按钮复制此内容。</div>
  <button type="button" class="btn" data-toggle="copyBtn" href="#copyTarget">
    <i class="icon icon-copy"></i> 复制目标内容
  </button>
</Example>

== HTML

```html
<div id="copyTarget" class="p-4 surface rounded">这是目标元素中的内容，点击下方按钮复制此内容。</div>
<button type="button" class="btn" data-toggle="copyBtn" href="#copyTarget">
  <i class="icon icon-copy"></i> 复制目标内容
</button>
```

:::

## 提示模式

复制按钮支持两种提示模式：工具提示模式（`tooltip`，默认）和内容覆盖模式（`overlay`）。

### 工具提示模式

使用工具提示显示复制成功的消息（默认模式）。

::: tabs

== 示例

<Example class="flex gap-4">
  <button type="button" class="btn" data-toggle="copyBtn" data-mode="tooltip" data-content="工具提示模式">
    <i class="icon icon-copy"></i> 工具提示
  </button>
</Example>

== HTML

```html
<button type="button" class="btn" data-toggle="copyBtn" data-mode="tooltip" data-content="工具提示模式">
  <i class="icon icon-copy"></i> 工具提示
</button>
```

:::

### 内容覆盖模式

使用内容覆盖方式显示复制成功的提示，会在按钮内部显示成功图标和文本。

::: tabs

== 示例

<Example class="flex gap-4">
  <button type="button" class="btn" data-toggle="copyBtn" data-mode="overlay" data-content="内容覆盖模式" data-copied-icon="check">
    <i class="icon icon-copy"></i> 内容覆盖
  </button>
</Example>

== HTML

```html
<button type="button" class="btn" data-toggle="copyBtn" data-mode="overlay" data-content="内容覆盖模式" data-copied-icon="check">
  <i class="icon icon-copy"></i> 内容覆盖
</button>
```

:::

## 自定义提示文本

通过 `data-copied-text` 属性可以自定义复制成功后的提示文本。

::: tabs

== 示例

<Example class="flex gap-4">
  <button type="button" class="btn" data-toggle="copyBtn" data-content="自定义提示" data-copied-text="复制成功！">
    <i class="icon icon-copy"></i> 自定义提示文本
  </button>
</Example>

== HTML

```html
<button type="button" class="btn" data-toggle="copyBtn" data-content="自定义提示" data-copied-text="复制成功！">
  <i class="icon icon-copy"></i> 自定义提示文本
</button>
```

:::

## 自定义提示持续时间

通过 `data-duration` 属性可以设置提示消息显示的持续时间（毫秒），默认为 3000 毫秒。

::: tabs

== 示例

<Example class="flex gap-4">
  <button type="button" class="btn" data-toggle="copyBtn" data-content="短暂提示" data-duration="1000">
    <i class="icon icon-copy"></i> 1秒提示
  </button>
  <button type="button" class="btn" data-toggle="copyBtn" data-content="较长提示" data-duration="5000">
    <i class="icon icon-copy"></i> 5秒提示
  </button>
</Example>

== HTML

```html
<button type="button" class="btn" data-toggle="copyBtn" data-content="短暂提示" data-duration="1000">
  <i class="icon icon-copy"></i> 1秒提示
</button>
<button type="button" class="btn" data-toggle="copyBtn" data-content="较长提示" data-duration="5000">
  <i class="icon icon-copy"></i> 5秒提示
</button>
```

:::

## JavaScript 方式

### 创建实例

可以通过 JavaScript 创建复制按钮实例。

```js
import {CopyBtn} from '@zui/copy-btn';

// 创建复制按钮实例
const copyBtn = new CopyBtn('#myBtn', {
    content: '要复制的内容',
    copiedText: '已复制到剪贴板',
});
```

### 动态获取内容

通过 `onCopy` 回调可以在复制时动态获取要复制的内容。

```js
import {CopyBtn} from '@zui/copy-btn';

const copyBtn = new CopyBtn('#myBtn', {
    onCopy: () => {
        // 动态返回要复制的内容
        return {
            text: '动态生成的文本内容',
            html: '<strong>动态生成的 HTML 内容</strong>',
        };
    },
    onCopied: () => {
        console.log('复制成功！');
    },
});
```

### 主动触发复制

可以通过实例的 `copy()` 方法主动触发复制操作。

```js
import {CopyBtn} from '@zui/copy-btn';

const copyBtn = new CopyBtn('#myBtn', {
    content: '要复制的内容',
});

// 主动触发复制
copyBtn.copy();
```

## 选项

<Props>
mode?: 'tooltip' | 'overlay'; // 提示方式，可选值为工具提示（'tooltip'）或内容覆盖（'overlay'），默认为 'tooltip'
content?: string | {text?: string, html?: string}; // 要复制的内容，可以是字符串或包含 text 和 html 的对象
target?: string | HTMLElement; // 复制目标元素的选择器或元素，用于复制目标元素的内容
copiedText?: string; // 复制成功后显示的文本，默认为 '已复制'
copiedIcon?: string; // 复制成功后显示的图标名称（仅在 overlay 模式下有效）
copiedClass?: string; // 复制成功后添加到按钮的 CSS 类，默认为 'is-copied'
copyingClass?: string; // 复制过程中添加到按钮的 CSS 类，默认为 'is-copying'
overlayClass?: string; // 内容覆盖模式下添加的 CSS 类，默认为 'success-pale'
duration?: number; // 提示消息显示的持续时间（毫秒），默认为 3000
tooltipOptions?: object; // 工具提示选项，用于自定义 tooltip 样式和行为
onCopy?: (content) => content | Promise | void | false; // 复制前的回调函数，可返回新的内容或 false 取消复制
onCopied?: () => void; // 复制成功后的回调函数
</Props>

## API

### 方法

| 方法名 | 说明 | 参数 |
| ------ | ---- | ---- |
| `copy()` | 主动触发复制操作 | - |
| `getContent()` | 获取要复制的内容 | - |
| `destroy()` | 销毁组件实例 | - |

### 静态属性

| 属性名 | 说明 |
| ------ | ---- |
| `CopyBtn.NAME` | 组件名称，值为 `'CopyBtn'` |
| `CopyBtn.DEFAULT` | 默认选项配置 |

## CSS 类

复制按钮组件会在不同状态下为元素添加以下 CSS 类：

| 类 | 说明 |
| --- | --- |
| `is-copying` | 复制过程中添加到按钮的类 |
| `is-copied` | 复制成功后添加到按钮的类 |
| `success-pale` | 内容覆盖模式下的默认背景类 |
| `hide-children` | 内容覆盖模式下隐藏子元素的类 |
| `copied-overlay` | 内容覆盖模式下覆盖内容的类 |
