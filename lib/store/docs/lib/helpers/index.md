# 本地存储

本地存储（Local storage）是在浏览器本地存储应用数据的好途径。相比较 cookie 拥有更大的存储空间（相同域下一般达到 5M 以上存储空间），使用更灵活，而且不会在每次提交中发送到服务器。几乎所有浏览器都支持本地存储，甚至包括 IE。

本地存储包括持久存储和会话存储，对应的是浏览器内置的 [`localStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 和 [`sessionStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)。

此 JS 插件提供了一系列方法用于读写本地存储数据。相比较直接使用这些浏览器原生接口，`Store` 类在读写数据时会自动进行转换，所以你可以存储任何可以被系列化为 JSON 的数据，例如数值、数组和复杂对象，而不仅仅是字符串。

`zui.store` 为默认的持久存储管理实例，可以直接使用上面的各种方法进行数据操作。如需使用会话存储数据，则只需要通过 `store.session` 访问会话存储类型的管理实例即可。

## 存储数据

存储数据使用 `Store` 实例上的 `set` 方法。

**示例**

```js
store.set('mySecretCode', 1314520);
```

## 读取数据

读取数据使用 `Store` 实例上的 `get` 方法。

**示例**

```js
store.get('mySecretCode'); // 基于存储数据的例子应该返回 1314520
```

## 移除数据

移除数据使用 `Store` 实例上的 `remove` 方法。

**示例**

```js
store.remove('mySecretCode');
```

## 遍历数据

遍历数据使用 `Store` 实例上的 `each` 方法。

**示例**

```js
store.each((name, value) => {
    console.log(name, '=', 'value');
});
```

## 获取所有数据

获取所有数据使用 `Store` 实例上的 `getAll` 方法。

**示例**

```js
store.set('mySecretCode', 1314520);
store.set('myName', 'Jue');

store.getAll(); // 返回 {mySecretCode: 1314520, myName: 'Jue'}
```

## 操作本地会话数据

要操作此次会话在本地的数据可以通过 `store.session` 实例上的方法。

**示例**

```js
store.session.set('mySecretCode', 1314520);
store.session.set('myName', 'Jue');

store.session.getAll(); // 返回 {mySecretCode: 1314520, myName: 'Jue'}
```

::: warning
相比较本地存储，会话存储的数据会在浏览器会话结束时（例如浏览器被关闭）被清除。在会话期间，数据仍然可以跨页面访问。
:::

## 创建独立的读写实例

通常使用 `Store` 的默认实例 `store` 即可读写数据，但有时需要一个独立的存储实例，可以通过 `store.create` 方法创建一个 `Store` 实例实现。

**示例**

```js
/* 分别创建一个本地存储和会话存储实例 */
const myStore = store.create('myStore');
const mySessionStore = store.create('mySessionStore');

/* 分别设置同名的存储的值 */
store.set('mySecretCode', 1);
myStore.set('mySecretCode', 2);
mySessionStore.set('mySecretCode', 3);

/* 他们可以读取到同名的各自的值 */
store.get('mySecretCode');          // 返回 1
myStore.get('mySecretCode');        // 返回 2
mySessionStore.get('mySecretCode'); // 返回 3
```
