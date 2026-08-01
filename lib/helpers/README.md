# 通用辅助方法

`@zui/helpers` 提供与框架无关的纯函数、常量和通用类型，涵盖日期、字符串、对象和颜色处理，可在浏览器或 Node 环境中直接使用。

## 引入

```js
import {formatDate, convertBytes, deepGet, hslToRgb} from '@zui/helpers';
```

## 示例

下面的调试页会实时运行各分组的正常、边界和错误用例，并把结果输出到面板中（同时打印到控制台）。

```html:example
<div class="col gap-4">
  <div class="toolbar gap-2">
    <button id="runHelpers" class="btn primary">运行示例</button>
    <button id="runError" class="btn danger">触发错误用例</button>
  </div>
  <pre id="helpersOutput" class="ring rounded p-3 -bg-slate-50 -text-sm -whitespace-pre-wrap -min-h-[240px]"></pre>
</div>
```

## 方法分组

* **日期辅助方法**：`createDate`、`addDate`、`formatDate`、`isSameDay`、`isSameWeek`、`isYesterday`、`isTomorrow`、`formatDateSpan` 等。
* **字符串辅助方法**：`formatString`、`convertString`、`formatWithPipes`、`formatBytes`、`convertBytes`、`escapeHtml`、`encodeBase64` 等。
* **对象辅助方法**：`deepGet`、`deepGetPath`、`deepCall`。
* **颜色辅助方法**：`hex2Rgb`、`hslToRgb`、`isLightColor`、`contrastColor`。

更完整的 API 说明见官网文档。
