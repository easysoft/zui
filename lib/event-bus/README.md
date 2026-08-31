# Event Bus

`@zui/event-bus` 基于原生 `EventTarget` 提供一组事件相关的类：

* `EventEmitter`：最基础的事件发射器，封装 `addEventListener`/`removeEventListener`/`dispatchEvent`。
* `EventBus`：在 `EventEmitter` 之上提供类型安全的 `on`/`once`/`off`/`emit`，并自动为字符串事件创建 `Event` 或 `CustomEvent`。
* `EventHub`：在 `EventBus` 之上支持自定义事件后缀，并提供 `offAll` 批量移除。

## 引入

```js
import {EventBus, EventHub} from '@zui/event-bus';
```

## 示例

下面的调试页演示 `on`、`once`、`off`、`emit`、原生事件和自定义 `detail` 的行为，交互结果会输出到面板并打印到控制台。

```html:example
<div class="col gap-4">
  <div class="toolbar gap-2 flex-wrap">
    <button id="ebEmit" class="btn primary">emit ping（普通监听）</button>
    <button id="ebEmitOnce" class="btn">emit once（一次性监听）</button>
    <button id="ebEmitDetail" class="btn">emit 带 detail</button>
    <button id="ebOffAll" class="btn danger">offAll</button>
    <button id="ebClear" class="btn ghost">清空日志</button>
  </div>
  <pre id="ebOutput" class="ring rounded p-3 -bg-slate-50 -text-sm -whitespace-pre-wrap -min-h-[200px]"></pre>
</div>
```
