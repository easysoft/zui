# 本地存储

本地存储（Local storage）是在浏览器本地存储应用数据的好途径。相比较 cookie 拥有更大的存储空间（相同域下一般达到 5M 以上存储空间），使用更灵活，而且不会在每次提交中发送到服务器。几乎所有浏览器都支持本地存储，甚至包括 IE。

本地存储包括持久存储和会话存储，对应的是浏览器内置的 [`localStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 和 [`sessionStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)。

此 JS 插件提供了一系列方法用于读写本地存储数据。相比较直接使用这些浏览器原生接口，`Store` 类在读写数据时会自动进行转换，所以你可以存储任何可以被系列化为 JSON 的数据，例如数值、数组和复杂对象，而不仅仅是字符串。

`zui.store` 为默认的持久存储管理实例，可以直接使用上面的各种方法进行数据操作。如需使用会话存储数据，则只需要通过 `zui.store.session` 访问会话存储类型的管理实例即可。

## 存储数据

存储数据使用 `Store` 实例上的 `set` 方法。

**示例**

```js
zui.store.set('mySecretCode', 1314520);
```

## 读取数据

读取数据使用 `Store` 实例上的 `get` 方法。

**示例**

```js
zui.store.get('mySecretCode'); // 基于存储数据的例子应该返回 1314520
```

## 移除数据

移除数据使用 `Store` 实例上的 `remove` 方法。

**示例**

```js
zui.store.remove('mySecretCode');
```

## 遍历数据

遍历数据使用 `Store` 实例上的 `each` 方法。

**示例**

```js
zui.store.each((name, value) => {
    console.log(name, '=', value);
});
```

## 获取所有数据

获取所有数据使用 `Store` 实例上的 `getAll` 方法。

**示例**

```js
zui.store.set('mySecretCode', 1314520);
zui.store.set('myName', 'Jue');

zui.store.getAll(); // 返回 {mySecretCode: 1314520, myName: 'Jue'}
```

## 操作本地会话数据

要操作此次会话在本地的数据可以通过 `zui.store.session` 实例上的方法。

**示例**

```js
zui.store.session.set('mySecretCode', 1314520);
zui.store.session.set('myName', 'Jue');

zui.store.session.getAll(); // 返回 {mySecretCode: 1314520, myName: 'Jue'}
```

::: warning
相比较本地存储，会话存储的数据会在浏览器会话结束时（例如浏览器被关闭）被清除。在会话期间，数据仍然可以跨页面访问。
:::

## 创建独立的读写实例

通常使用默认实例 `zui.store` 即可读写数据，但有时需要一个独立的存储实例，可以通过 `zui.store.create` 方法创建一个 `Store` 实例实现。

**示例**

`zui.store.create(name, type)` 的第二个参数用于指定存储类型，留空时默认创建**本地存储**（`local`）；需要会话存储时必须显式传入 `'session'`。

```js
/* 分别创建一个本地存储和会话存储实例 */
const myStore = zui.store.create('myStore');
const mySessionStore = zui.store.create('mySessionStore', 'session');

/* 分别设置同名的存储的值 */
zui.store.set('mySecretCode', 1);
myStore.set('mySecretCode', 2);
mySessionStore.set('mySecretCode', 3);

/* 他们可以读取到同名的各自的值 */
zui.store.get('mySecretCode');          // 返回 1
myStore.get('mySecretCode');            // 返回 2
mySessionStore.get('mySecretCode');     // 返回 3
```

## 切换存储配置

使用 `switch` 方法可以将实例切换到另一个存储配置（`id`）。切换后已经通过 `zui.store.session` 创建的会话实例也会同步到新的配置，不会继续写入旧配置。

```js
zui.store.switch('userA'); // 之后 zui.store 和 zui.store.session 都读写 userA 的数据
```

## 直接使用 `Store` 类

除了默认的 `zui.store` 实例，也可以通过全局对象上的 `zui.Store` 类创建自己的实例。

```js
const myStore = new zui.Store('myProfile', 'local');
myStore.set('token', 'abc');
```

## 模块引入（ESM / npm）

在构建工具中，也可以从包根导入 `Store` 类或默认实例：

```js
import {Store, store} from '@zui/store';

const myStore = new Store('myProfile', 'local');
myStore.set('token', 'abc');
```

## 存储不可用时的回退

在禁用本地存储或受限的环境（如部分沙箱化 iframe）中，`Store` 不会构造失败或抛出异常，而是自动回退到实例内部的内存缓存。此时数据在页面刷新后不会保留，读写行为仍然可用。
