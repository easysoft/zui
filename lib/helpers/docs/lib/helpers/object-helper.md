# 对象辅助方法

用于按访问路径读取对象的深层值。路径支持点语法 `a.b.c` 和方括号语法 `a[0].b`，方括号内的键既可用于数组下标，也可用于 `Map`。

## `deepGet`

按路径读取对象的深层值，读取失败时返回默认值。

::: info 定义：

```ts
function deepGet<T>(
    object: object,
    pathName: string | string[],
    defaultValue?: T,
    onGetParent?: (parent: object, name: string) => void,
): T | undefined;
```

**参数**：

* `object`：要访问的对象；
* `pathName`：访问路径，点字符串或路径片段数组；
* `defaultValue`：路径不存在或读取出错时返回的默认值；
* `onGetParent`：可选回调，读取到最终值前会以最终值所在的父对象及其属性名调用。

**返回值**：`T | undefined`：路径对应的值，读取失败时为 `defaultValue`。

:::

**示例**

```js
const object = {a: [{b: {c: 1}, d: 2}]};

zui.deepGet(object, 'a[0].b.c');   // 1
zui.deepGet(object, 'a[0].d');     // 2
zui.deepGet(object, 'a.x.y', 0);   // 0（路径不存在，返回默认值）
```

`deepGet` 不会修改传入的路径数组，可安全地复用同一个数组多次调用。

## `deepGetPath`

返回沿访问路径经过的所有值，数组第一个元素为源对象本身，最后一个元素为最终值。

::: info 定义：

```ts
function deepGetPath(object: object, pathName: string | string[]): unknown[];
```

**参数**：

* `object`：要访问的对象；
* `pathName`：访问路径，点字符串或路径片段数组。

**返回值**：`unknown[]`：路径上经过的所有值。当方括号子路径作用于非对象，或路径无法完整解析时抛出错误。

:::

**示例**

```js
const object = {a: [{b: {c: 1}}]};

zui.deepGetPath(object, 'a[0].b.c');
// [object, [{b: {c: 1}}], {b: {c: 1}}, {c: 1}, 1]
```

## `deepCall`

按路径取出对象中的函数并调用它。

::: info 定义：

```ts
function deepCall(
    object: object,
    pathName: string | string[],
    args?: unknown[],
    thisObj?: unknown,
    throws?: boolean,
): unknown;
```

**参数**：

* `object`：要访问的对象；
* `pathName`：访问路径；
* `args`：调用函数时传入的参数；
* `thisObj`：调用时的 `this`，留空时默认使用函数所在的父对象；
* `throws`：目标不是函数时是否抛出错误。

**返回值**：`unknown`：函数调用结果；目标非函数且未要求抛错时返回该值本身。

:::

**示例**

```js
const object = {math: {add: (a, b) => a + b}};

zui.deepCall(object, 'math.add', [1, 2]); // 3
```
