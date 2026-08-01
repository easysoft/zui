# 颜色辅助方法

用于在 HEX、HSL 与 RGB 之间转换，以及根据背景色计算可读的前景色。RGB 颜色值以 `[r, g, b]` 数组表示，每个通道取值范围为 `[0, 255]`。

## `hex2Rgb`

将 HEX 颜色字符串转换为 RGB 颜色值。

::: info 定义：

```ts
type RGBColor = [r: number, g: number, b: number];

function hex2Rgb(hex: string): RGBColor;
```

**参数**：

* `hex`：3 位或 6 位 HEX 颜色，可带 `#` 前缀，例如 `#f00`、`ff0000`。

**返回值**：`RGBColor`：RGB 颜色值。当输入不是合法的 3/6 位 HEX 颜色时抛出错误。

:::

**示例**

```js
hex2Rgb('#f00');    // [255, 0, 0]
hex2Rgb('00ff00');  // [0, 255, 0]
hex2Rgb('zzzzzz');  // 抛出 Error: Invalid HEX color "zzzzzz".
```

## `hslToRgb`

将 HSL 颜色转换为 RGB 颜色值。

::: info 定义：

```ts
function hslToRgb(h: number, s: number, l: number): RGBColor;
```

**参数**：

* `h`：色相，单位为度，任意实数（内部按 360 取模）；
* `s`：饱和度，取值范围 `[0, 1]`，越界会被夹取到该范围；
* `l`：亮度，取值范围 `[0, 1]`，越界会被夹取到该范围。

**返回值**：`RGBColor`：RGB 颜色值，各通道始终位于 `[0, 255]`。

:::

**示例**

```js
hslToRgb(0, 1, 0.5);    // [255, 0, 0]
hslToRgb(120, 1, 0.5);  // [0, 255, 0]
```

## `isLightColor`

判断颜色是否为亮色（基于人眼感知亮度）。

::: info 定义：

```ts
function isLightColor(color: string | RGBColor): boolean;
```

**参数**：

* `color`：HEX 颜色字符串或 RGB 颜色值。

**返回值**：`boolean`：为亮色时返回 `true`。

:::

## `contrastColor`

根据背景色选取可读的前景色。

::: info 定义：

```ts
function contrastColor(color: string | RGBColor, options?: {dark: string; light: string}): string;
```

**参数**：

* `color`：背景色，HEX 颜色字符串或 RGB 颜色值；
* `options.dark`：亮色背景使用的前景色，默认 `#333333`；
* `options.light`：暗色背景使用的前景色，默认 `#ffffff`。

**返回值**：`string`：与背景对比度较高的前景色。

:::

**示例**

```js
contrastColor('#ffffff'); // '#333333'
contrastColor('#000000'); // '#ffffff'
```
