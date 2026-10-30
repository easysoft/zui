# Event Bus

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"event-bus","summary":"基于 EventTarget 提供类型化事件订阅、一次性监听、自定义事件后缀及批量解除。","keywords":["事件总线","事件订阅","EventBus","EventHub","EventEmitter"]}
```

## overview

适合模块间同步通知、包装已有 DOM 事件目标，以及在页面或组件生命周期中集中释放监听。`EventEmitter` 只包装原生事件，`EventBus` 增加类型推断与按名称创建事件，`EventHub` 再增加命名后缀和批量移除。

派发是同步的，监听器没有 Promise 聚合、结果收集或异步排队机制。需要异步任务编排时，应由调用方管理 Promise。

## setup

环境：`workspace`。以下示例用于 ZUI 源码工作区，需要能解析 `@zui/*` 并编译 TypeScript；无需 CSS、Preact 或组件注册。

```ts
import {EventEmitter, EventBus, EventHub, nativeEvents} from '@zui/event-bus';
import type {CustomEventMap, CustomEventListener} from '@zui/event-bus';
```

源码入口为 [src/main.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/event-bus/src/main.ts>)。传入字符串或省略构造参数会访问 `document`，创建并挂载一个注释节点；需要避免创建节点时传入自己持有的 `EventTarget`。只要运行环境提供所需的 `EventTarget`、`Event`、`CustomEvent`，显式目标用法不需要 `document`。工作区入口可用不等于聚合包可在无 DOM 环境使用。

标准 npm/浏览器消费遵循[接入规范](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/.agents/skills/zui-standards/references/consumption.md>)，并确认目标包或构建包含这几个导出；不推导 `zui/event-bus` 子路径。

## vanilla

无。

## preact

无。

## web-components

无。

## css

无。

## css-variables

无。

## javascript

### javascript-event-emitter

```json
{"name":"EventEmitter","summary":"包装 EventTarget 的监听、一次性监听、移除与同步派发。","keywords":["原生事件","EventTarget"]}
```

#### 构造与方法

`new EventEmitter(descOrTarget?: EventTarget | string)`。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `descOrTarget` | `EventTarget \| string` | 否 | `''` | 对象直接作为事件目标；字符串作为新建注释节点内容，并将节点追加到 `document`。不接受 `null`。 |

| 方法 | 参数 | 返回值 | 行为 |
| --- | --- | --- | --- |
| `on(type, listener, options?)` | `type: string`；`listener: (event: Event) => void`；`options?: AddEventListenerOptions` | `void` | 调用目标的 `addEventListener`。 |
| `once(type, listener, options?)` | 同 `on` | `void` | 强制 `once: true`，即使选项传入 `once: false`。 |
| `off(type, listener, options?)` | 同 `on` | `void` | 用原始监听函数及匹配的 `capture` 移除；可提前取消 `once`。 |
| `emit(event)` | `event: Event`，必填 | 同一个 `Event` 对象 | 调用 `dispatchEvent`；不返回其布尔结果。 |

`options` 默认不传，使用原生事件监听行为；常用字段为 `capture`、`once`、`passive` 和 `signal`。这些方法不是链式 API，也不返回取消订阅函数。相同目标、类型、回调和 capture 的重复注册遵循原生 `EventTarget` 规则。

#### 最小示例

环境：`workspace`，需要原生 `EventTarget` 和 `Event`。

```ts
import {EventEmitter} from '@zui/event-bus';

const emitter = new EventEmitter(new EventTarget());
const listener = (event: Event) => console.log(event.type);
emitter.on('refresh', listener);
emitter.emit(new Event('refresh'));
emitter.off('refresh', listener);
```

没有 `destroy()` 或 `offAll()`。调用方保留监听函数并主动解除；若使用自己创建的注释节点，还应自己持有并按生命周期移除该节点。

来源：[实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/event-bus/src/event-emitter.ts>)。

### javascript-event-bus

```json
{"name":"EventBus","summary":"在 EventEmitter 上提供事件映射泛型与按名称创建 Event 或 CustomEvent。","keywords":["类型安全","detail"]}
```

`EventBus<E extends CustomEventMap = CustomEventMap, TYPES extends string = Extract<keyof E, string>>` 继承 `EventEmitter`。构造参数及目标所有权与 [EventEmitter](#javascript-event-emitter) 相同。

| 方法 | 参数 | 返回值与行为 |
| --- | --- | --- |
| `on<T extends TYPES>(type, listener, options?)` | `type: T`；`listener: CustomEventListener<E[T]>`；`options?: AddEventListenerOptions` | `void`；类型化订阅。 |
| `once<T extends TYPES>(type, listener, options?)` | 同 `on` | `void`；强制一次性监听。 |
| `off<T extends TYPES>(type, listener, options?)` | 同 `on` | `void`；传入同一回调及 capture 解除。 |
| `emit<T extends TYPES>(event, detail?)` | `event: T`；若 `E[T]` 为 `CustomEvent`，`detail` 类型为该事件的 `detail`，否则为 `never` | `E[T]`；按名称创建并同步派发。 |
| `emit<T extends TYPES>(event)` | `event: E[T]` | `E[T]`；原对象派发并返回，不重建事件或覆盖 detail。 |
| `EventBus.createEvent<T extends Event = Event>(event, detail?)` | `event: string \| T`；`detail?: T extends CustomEvent ? T['detail'] : never` | `T`；只创建事件，不派发；事件对象输入原样返回。 |

`detail` 不传时为 `undefined`。名称属于 [nativeEvents](#javascript-native-events) 时创建普通 `Event` 并附加 `detail` 属性，否则创建 `CustomEvent`。例如名称是 `click` 时也不会创建 `MouseEvent`。按名称创建的事件未启用 `bubbles`、`cancelable`、`composed`，需要这些选项时传入自己构造的事件对象；可通过返回对象的 `defaultPrevented` 检查取消状态。

#### 最小示例

环境：`workspace`，需要原生 `EventTarget`、`Event` 和 `CustomEvent`。

```ts
import {EventBus} from '@zui/event-bus';

type Events = {saved: CustomEvent<{id: number}>};
const bus = new EventBus<Events>(new EventTarget());
const onSaved = (event: Events['saved']) => console.log(event.detail.id);
bus.on('saved', onSaved);
const event = bus.emit('saved', {id: 42});
console.log(event.detail.id);
bus.off('saved', onSaved);

const prepared = EventBus.createEvent<Events['saved']>('saved', {id: 43});
bus.emit(prepared);
```

没有批量清理方法；需要批量释放时选择 `EventHub`。来源：[实现及泛型签名](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/event-bus/src/event-bus.ts>)。

### javascript-event-hub

```json
{"name":"EventHub","summary":"为自定义事件追加后缀，并记录本实例的监听以支持 offAll。","keywords":["命名空间","批量解除"]}
```

`EventHub<E extends CustomEventMap = CustomEventMap, TYPES extends string = Extract<keyof E, string>>` 继承 `EventBus`。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `descOrTarget` | `EventTarget \| string` | 否 | `''` | 与 [EventEmitter](#javascript-event-emitter) 相同。 |
| `options` | `{customEventSuffix?: string}` | 否 | `undefined` | 构造选项。 |
| `options.customEventSuffix` | `string` | 否 | `undefined` | 给非原生事件追加后缀；已经以该后缀结尾的名称保持原样。 |

继承 [EventBus 的方法签名](#javascript-event-bus)，以下行为有区别：

| 方法 | 行为 | 返回值 |
| --- | --- | --- |
| `on` / `once` | 归一化事件名并记录绑定；`once` 触发后释放记录。 | `void` |
| `off` | 归一化事件名，移除所有匹配“类型 + 原始回调 + capture”的本实例记录，包含尚未触发的 `once`。 | `void` |
| `emit` | 仅字符串事件名会自动追加后缀；事件对象保持其原有 `type`。 | 同派发的事件对象 |
| `offAll()` | 无参数，移除通过本实例记录的全部监听；可重复调用。不会清除其他实例的独立监听。 | `void` |

后缀只隔离自定义事件名。`click` 等 `nativeEvents` 中的名称不加后缀；对象形式派发时要自行使用匹配的完整名称。静态 `createEvent` 继承自 `EventBus`，不会读取实例后缀。

#### 最小示例

环境：`workspace`，需要原生事件相关 API。

```ts
import {EventHub} from '@zui/event-bus';

type Events = {saved: CustomEvent<{id: number}>};
const hub = new EventHub<Events>(new EventTarget(), {customEventSuffix: '.panel'});
hub.once('saved', event => console.log(event.type, event.detail.id));
hub.emit('saved', {id: 42}); // type 为 saved.panel
hub.offAll();
```

`offAll()` 只释放监听，不移除构造时创建的注释节点。多个 Hub 共享目标、事件名及同一回调时，原生目标仍使用相同的监听身份，不能将它们当作完全独立的注册。来源：[实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/event-bus/src/event-hub.ts>)。

### javascript-native-events

```json
{"name":"nativeEvents","summary":"EventBus 与 EventHub 判断事件对象类型和是否追加后缀的公开 Set。"}
```

`Set<string>`，从入口直接导出。集合包含：

```text
click dblclick mouseup mousedown contextmenu mousewheel DOMMouseScroll
mouseover mouseout mousemove selectstart selectend keydown keypress keyup
orientationchange touchstart touchmove touchend touchcancel pointerdown
pointermove pointerup pointerleave pointercancel gesturestart gesturechange
gestureend focus blur change reset select submit focusin focusout load unload
beforeunload resize move DOMContentLoaded readystatechange error abort scroll
```

这是库内的明确列表，不是浏览器全部事件名称的自动检测结果；没有列入的名称走自定义事件逻辑。集合可变且被所有实例共享，修改会改变全局判断，通常只读取。

环境：`workspace`。

```ts
import {nativeEvents} from '@zui/event-bus';
console.log(nativeEvents.has('click')); // true
```

来源：[定义](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/event-bus/src/event-bus.ts>)。

## types

### types-custom-events

```json
{"name":"CustomEventMap / CustomEventListener","summary":"描述事件名到事件对象的映射，以及接收该事件对象的回调。"}
```

```ts
type CustomEventMap = Record<string, Event>;
type CustomEventListener<E extends Event = Event> = (evt: E) => void;
```

从 `@zui/event-bus` 通过 `import type` 导入。推荐具体事件映射使用 type 别名，例如 `type Events = {saved: CustomEvent<{id: number}>}`，避免将事件载荷直接作为映射值。`EventBus` / `EventHub` 的第一个泛型是事件对象映射，第二个是可用事件名，默认取第一个映射的字符串键。

来源：[类型定义](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/event-bus/src/event-bus.ts>)。

## recipes

### recipe-owned-target

```json
{"name":"组件生命周期中的事件清理","summary":"自行拥有事件目标，在页面退出时批量释放 Hub 的监听。"}
```

环境：`workspace`，在支持原生事件 API 的浏览器中执行。此工厂不会向 document 追加注释节点。

```ts
import {EventHub} from '@zui/event-bus';

type Events = {refresh: CustomEvent<{reason: string}>};
function createPanelEvents() {
    const hub = new EventHub<Events>(new EventTarget());
    hub.on('refresh', event => console.log(event.detail.reason));
    return {hub, dispose: () => hub.offAll()};
}

const panel = createPanelEvents();
panel.hub.emit('refresh', {reason: 'saved'});
panel.dispose(); // 在所属页面或组件销毁时调用
```

## constraints

- 本库是事件工具类，不是 `@zui/core` 的 vanilla UI 组件，没有 `NAME`、`get()`、DOM 自动初始化或 Web Components 标签。
- 不传目标会向 document 插入注释节点，且没有自动移除接口。长生命周期或频繁创建场景宜显式持有 `EventTarget`。
- 监听函数返回值被忽略；异常和取消行为遵循原生 `EventTarget`，库不捕获、不聚合错误，也不等待异步监听器。
- `off` 需要同一函数引用和匹配 capture；匿名函数再次创建不是原来的监听函数。
- 使用 `AbortSignal` 可以由原生目标取消实际监听，但 Hub 的登记记录直到显式 `off` / `offAll` 等清理操作才会被移除；长期持有 Hub 时仍应释放记录。
- 本页描述当前源码契约，不能据此确认某个已发布版本含有相同行为。

## references

- [公开入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/event-bus/src/main.ts>)
- [EventEmitter](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/event-bus/src/event-emitter.ts>)
- [EventBus、nativeEvents 与公共类型](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/event-bus/src/event-bus.ts>)
- [EventHub](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/event-bus/src/event-hub.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/event-bus/docs/lib/helpers/index.md>)
- [现有单元测试](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/tests/unit/event-bus.test.ts>)
