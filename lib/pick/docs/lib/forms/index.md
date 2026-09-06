# 通用弹出选择器

`Pick` 管理触发元素、弹出区域和字符串值，适合构建自定义选择界面。需要现成的选项列表、多选或搜索时，使用 [下拉选择器 Picker](/lib/forms/picker/)；`Pick` 本身不提供 `items`、`multiple` 或搜索选项。

## 基本使用

下面使用按钮作为触发元素，在弹出内容中通过 `data-pick-value` 指定选择值。

::: tabs

== 示例

<Example>
  <ZUI use="pick" :options="pickOptions" />
</Example>

== HTML

```html
<div id="themePick"></div>
```

== JS

```js
const pick = new zui.Pick('#themePick', {
    tagName: 'button',
    className: 'btn',
    attrs: {type: 'button', tabIndex: 0, 'aria-label': '选择配色'},
    defaultValue: '浅色',
    clickType: 'toggle',
    popWidth: 200,
    popHeader: {html: '<div class="p-2 flex gap-2"><button type="button" class="btn" data-pick-value="浅色">浅色</button><button type="button" class="btn" data-pick-value="深色">深色</button></div>'},
});
```

:::

`data-pick-value` 会把值转换为字符串，更新当前值并关闭面板。`data-dismiss="pick"` 只关闭面板。示例中的 HTML 为固定内容，不应直接拼入未经处理的用户输入。

<script setup>
const pickOptions = {
    tagName: 'button',
    className: 'btn',
    attrs: {type: 'button', tabIndex: 0, 'aria-label': '选择配色'},
    defaultValue: '浅色',
    clickType: 'toggle',
    popWidth: 200,
    popHeader: {html: '<div class="p-2 flex gap-2"><button type="button" class="btn" data-pick-value="浅色">浅色</button><button type="button" class="btn" data-pick-value="深色">深色</button></div>'},
};
</script>

## 值与表单

- `defaultValue` 设置初始字符串值。
- `value` 可以由调用方传入并更新；更新时会通过 `setValue` 同步到内部状态。
- `name` 用于表单值。没有可关联的同 ID 输入框时，触发区会创建隐藏输入框。
- `onChange(value, oldValue)` 通知内部值发生变化。

```js
pick.render({
    onChange(value, oldValue) {
        zui.Messager.show(`从 ${oldValue} 切换为 ${value}`);
    },
});
```

`beforeChange` 在调用 `setValue` 时执行，可以返回 `false` 拒绝修改、返回字符串替换值，或返回相应的 Promise。通过 `data-pick-value` 直接选择不经过该回调；需要校验时，应在自定义面板中调用 `setValue`。

## 自定义内容

`popHeader`、`popFooter` 支持 ZUI 自定义内容。需要完整替换界面时，可通过 Preact 组件 `Trigger`、`Pop` 分别替换触发区和弹出区；它们接收当前 `state`、`changeState` 和 `togglePop` 等属性。

默认 `PickTrigger` 显示当前值，默认 `PickPop` 渲染头部、子内容和底部。普通页面用法通常只需自定义内容选项。

## 选项

<Props>
id?: string; // 值输入框的 ID，未设置时自动生成。
tagName?: string = "div"; // 触发区元素类型。
className?: ClassNameLike; // 触发区类名。
attrs?: Record&lt;string, unknown&gt;; // 触发区 DOM 属性。
defaultValue?: string = ""; // 初始值。
value?: string; // 调用方传入的值。
name?: string; // 表单字段名。
disabled?: boolean; // 禁止打开和交互。
readonly?: boolean; // 只读，禁止打开面板。
clickType?: "toggle" | "open" = "open"; // 点击时切换或只打开。
hidePopWhenEmpty?: boolean; // 值为空时不渲染弹出区。
popContainer?: string | HTMLElement = "body"; // 弹出区挂载容器。
popClass?: ClassNameLike = "popup"; // 弹出区附加类名。
popPlacement?: PickPopPlacement = "auto"; // 定位方向，auto 会按空间选择方向。
popWidth?: number | "auto" | "100%" | (() =&gt; number | "auto") = "100%"; // 弹出区宽度。
popMinWidth?: number | string = 50; // 最小宽度。
popMinHeight?: number | string = 32; // 最小高度。
popMaxHeight?: number | string = 300; // 最大高度。
limitPopInScreen?: boolean = true; // 限制面板在屏幕中的尺寸。
popHeader?: CustomContentType; // 弹出区头部。
popFooter?: CustomContentType; // 弹出区底部。
onChange?: (value: string, oldValue: string) =&gt; void; // 值变化回调。
beforeChange?: (value: string, oldValue: string) =&gt; boolean | string | void | Promise&lt;boolean | string | void&gt;; // setValue 的异步或同步校验。
</Props>

`popHeight`、`popMaxWidth`、`popStyle` 可进一步控制尺寸和外观。`onPopShow`、`onPopShown`、`onPopHide`、`onPopHidden` 提供开关过程通知；需要等待 `open()`、`close()` 流程完成时可等待其返回的 Promise。

## 实例方法

原生实例使用 `render(options)` 更新选项，初始化完成后通过 `$` 访问选择器实例：

```js
await pick.$?.open();
await pick.$?.close();
await pick.$?.toggle();
await pick.$?.setValue('深色');
const value = pick.$?.value;
pick.destroy();
```

`setValue(value, true)` 的静默参数用于抑制关联输入框的 `change` 事件，不会抑制 `onChange`。销毁原生实例会卸载触发区和弹出区。

## 模块引入与键盘交互

```ts
import {Pick} from '@zui/pick';
import {Pick as PickView, PickTrigger, PickPop} from '@zui/pick/react';
import type {PickOptions, PickState} from '@zui/pick';
```

使用 Preact 入口时可引入 `@zui/pick/css` 加载样式。触发区默认为不可 Tab 聚焦的 `div`；示例使用按钮并通过 `attrs.tabIndex` 使其可聚焦。自定义弹出区应提供语义正确的按钮或链接，并按场景管理关闭快捷键和焦点返回。
