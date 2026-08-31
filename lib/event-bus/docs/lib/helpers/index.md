# Event Bus

`@zui/event-bus` 基于浏览器原生 [`EventTarget`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget) 提供事件订阅与派发能力。页面已加载 ZUI 时，通过全局对象上的 `zui.EventBus` 使用事件总线。

## 绑定与派发事件

使用 `on` 绑定监听，使用 `emit` 派发事件。字符串事件名如果属于原生事件（如 `click`）会创建 `Event`，否则创建 `CustomEvent`，派发时传入的第二个参数会作为事件的 `detail`。

```js
const bus = new zui.EventBus();

bus.on('greet', (event) => {
    console.log(event.detail); // {name: 'ZUI'}
});

bus.emit('greet', {name: 'ZUI'});
```

## 一次性监听

使用 `once` 绑定的监听只会触发一次，之后自动移除。即使在选项中传入 `{once: false}`，也仍然只触发一次。

```js
const bus = new zui.EventBus();
let count = 0;

bus.once('tick', () => { count += 1; });
bus.emit('tick');
bus.emit('tick');

console.log(count); // 1
```

## 移除监听

使用 `off` 移除监听。通过 `once` 绑定的一次性监听也可以在触发前用**原始回调**取消。

```js
const bus = new zui.EventBus();
const listener = () => console.log('hi');

bus.once('hi', listener);
bus.off('hi', listener); // 在触发前取消
bus.emit('hi');          // 不会输出
```

## 模块引入（ESM / npm）

在构建工具中，也可以从包根导入；其中 `EventHub`、`EventEmitter` 仅通过包导出使用，不会挂载到全局 `zui` 对象：

```js
import {EventBus, EventHub, EventEmitter} from '@zui/event-bus';
```

### 批量移除（`EventHub`）

`EventHub` 会记录每一次监听注册，`offAll` 可移除通过该实例绑定的所有监听。即使同一个回调被复用于多个事件类型，也不会遗漏。

```js
import {EventHub} from '@zui/event-bus';

const hub = new EventHub();
const listener = () => console.log('hit');

hub.on('a', listener);
hub.on('b', listener);

hub.offAll();
hub.emit('a'); // 不会输出
hub.emit('b'); // 不会输出
```

### 自定义事件后缀（`EventHub`）

创建 `EventHub` 时可指定 `customEventSuffix`，非原生事件名会自动追加该后缀，便于在共享的事件目标上避免命名冲突。原生事件名（如 `click`）不受影响。

```js
import {EventHub} from '@zui/event-bus';

const hub = new EventHub('', {customEventSuffix: '.zui'});

hub.on('update', (event) => console.log(event.type)); // 'update.zui'
hub.emit('update');
```
