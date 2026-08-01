# 本地存储

`@zui/store` 封装浏览器的 `localStorage` 和 `sessionStorage`，读写时自动进行 JSON 序列化，可存储数值、数组和复杂对象。存储不可用时自动回退到内存缓存。

## 引入

```js
import {store, Store} from '@zui/store';
```

* `store`：默认的持久存储实例，并附带 `store.create` 和 `store.session`；
* `Store`：存储类，可用于创建独立实例。

## 示例

下面的调试页演示读写、遍历、会话存储、配置隔离、`switch` 和序列化行为，结果会输出到面板并打印到控制台。

```html:example
<div class="col gap-4">
  <div class="toolbar gap-2 flex-wrap">
    <button id="storeSet" class="btn primary">写入示例数据</button>
    <button id="storeGetAll" class="btn">读取全部</button>
    <button id="storeIsolation" class="btn">配置隔离演示</button>
    <button id="storeSwitch" class="btn">switch 配置</button>
    <button id="storeClear" class="btn danger">清空日志</button>
  </div>
  <pre id="storeOutput" class="ring rounded p-3 -bg-slate-50 -text-sm -whitespace-pre-wrap -min-h-[200px]"></pre>
</div>
```
