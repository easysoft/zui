# 通用辅助方法

`@zui/helpers` 提供一组与框架无关的纯函数、常量和通用类型，涵盖日期、字符串、对象和颜色处理。所有方法均可在浏览器或 Node 环境中直接使用，不依赖 DOM。

页面已加载 ZUI 时，通过全局对象 `zui` 访问这些方法：

```js
zui.formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss.SSS');
zui.deepGet({a: [{b: 1}]}, 'a[0].b', 0);
```

## 方法分组

| 分组 | 说明 | 详细文档 |
| --- | --- | --- |
| 日期辅助方法 | 创建、计算、比较和格式化日期时间 | [查看](./date-helper.md) |
| 字符串辅助方法 | 格式化、转换、编码和字节单位处理 | [查看](./string-helper.md) |
| 对象辅助方法 | 按路径读取对象深层值和调用方法 | [查看](./object-helper.md) |
| 颜色辅助方法 | HEX/HSL 与 RGB 转换及对比色计算 | [查看](./color-helper.md) |

## 常用示例

```js
// 日期：格式化与相对日期判断
zui.formatDate(Date.now(), 'yyyy-MM-dd hh:mm:ss.SSS'); // 例如 '2026-08-01 09:30:00.005'
zui.isSameWeek('2026-06-01', '2026-06-07');            // true（同一周，周一为周首）

// 字符串：字节单位与脱敏
zui.convertBytes('1.5MB');                              // 1572864
zui.convertString('12345678901', 'mask');              // '123****8901'

// 对象：按路径安全取值
zui.deepGet({a: [{b: 1}]}, 'a[0].b', 0);               // 1

// 颜色：HSL 转 RGB（越界的 s/l 会夹取到 [0, 1]）
zui.hslToRgb(120, 1, 0.5);                              // [0, 255, 0]
```

## 模块引入（ESM / npm）

在构建工具或 Node 环境中，也可以从包根按名导入：

```js
import {formatDate, convertBytes, deepGet, hslToRgb} from '@zui/helpers';
```
