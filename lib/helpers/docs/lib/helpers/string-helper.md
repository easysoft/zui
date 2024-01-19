# 字符串辅助方法

## `formatString`

格式化字符串。

::: info 定义：

```ts
/** 通过位置参数的形式格式化字符串。 */
function formatString(str: string, ...args: unknown[]): string;

/** 通过映射对象的形式格式化字符串。 */
function formatString(str: string, map: Record<string, unknown>): string;
```

**参数**：

* `str`：字符串；
* `args`：格式化参数；
* `map`：格式化参数映射对象。

**返回值**：`string`：格式化后的字符串。

:::
