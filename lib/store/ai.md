# 本地存储

## meta

```json
{
  "schemaVersion": 1,
  "library": "store",
  "summary": "按命名空间读写本地及会话存储，并在不可用时回退内存。",
  "keywords": [
    "存储",
    "localStorage",
    "sessionStorage",
    "Store"
  ]
}
```

## overview

按命名空间使用 localStorage/sessionStorage；适合保存界面偏好与临时会话配置。存储不可用时回退当前实例内存，不能当作服务器持久化或跨标签同步状态库。

## setup

workspace：`import {Store, store} from '@zui/store';`。主入口无 CSS；browser 构建包含 store 后使用 `zui.Store/zui.store`。未声明子入口，不推断独立 npm 包；无 Storage 时可构造并回退内存。

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

### javascript-store

```json
{"name": "Store", "summary": "按配置 ID 隔离持久化或会话存储。"}
```

`new Store(id = '', type: StoreType = 'local')`，底层键为 `ZUI_STORE:<id>:<key>`。type 可为 local/session；读取受限时捕获异常并打印警告，后续写入回退内存。

| 成员 | 参数与返回 |
| --- | --- |
| type | 当前 local/session |
| session | 同 id 的 session 实例，懒创建；session 类型返回自身 |
| switch(id:string):void | 切换配置，清内存缓存，并同步已创建的 session 实例；不删除旧持久数据 |
| get<T>(key,defaultValue?):T或undefined | 内存优先，再解析持久数据；缺失返回默认值 |
| set(key,value):void | null/undefined 删除；字符串加类型前缀，其他 JSON.stringify；写失败回退缓存 |
| setCache(key,value):void | 仅写实例内存，不持久化 |
| remove(key):void | 同时尝试删除缓存与持久值；存储删除失败只警告 |
| parseValue<T>(value,throws=false):T | 识别字符串前缀、尝试 JSON.parse；失败默认保留原值，throws=true 抛错 |
| each(callback:(name,value)=>void):void | 遍历当前命名空间的存储及未重复缓存项 |
| getAll():Record<string,unknown> | 合并当前命名空间所有值，内存覆盖同名持久值 |

JSON.stringify 位于写入 try 之外，循环引用/BigInt 可能抛错；不是任意对象序列化库。缓存对象保留引用。无订阅/destroy API；放弃实例可释放纯内存缓存。

workspace：

```ts
import {Store} from '@zui/store';
const settings = new Store('ai-doc-example');
settings.set('pageSize', 20);
console.log(settings.get('pageSize', 10));
settings.remove('pageSize');
```

来源：[实现](src/store.ts)。


### javascript-default-store

```json
{"name": "store / store.create", "summary": "使用默认存储实例或创建独立配置。"}
```

`store` 是 id='DEFAULT' 的 Store，并增加 `create(name?:string,type:StoreType='local'):Store`。create 每次返回新实例，独立缓存；同名同类型会访问同一持久命名空间。不要 switch 共享默认实例影响其他使用者。

workspace：`import {store} from '@zui/store'; const session = store.create('draft', 'session'); session.set('text','hello'); session.remove('text');`。来源：[入口](src/main.ts)。

## types

### types-store-type

```json
{"name": "StoreType", "summary": "存储后端类型。"}
```

```ts
type StoreType = 'local' | 'session';
```

从 `@zui/store` 使用 import type。

## recipes

按页面建立独立实例：`store.create('preferences')` 保存长期设置，使用其 `.session` 保存当前会话值；清理具体键使用 remove，不清空整个浏览器 Storage。

## constraints

没有 storage 事件订阅和跨实例缓存失效机制。内存回退不跨刷新，remove 失败可能留下持久值。each 回调应避免修改底层 Storage 影响遍历顺序。对象通过 JSON 存储会丢失原型，Date 变字符串。

## references

- [包元数据](package.json)
- [公开入口](src/main.ts)
- [Store 实现](src/store.ts)
