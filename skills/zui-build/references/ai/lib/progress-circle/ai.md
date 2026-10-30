# 环形进度条

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "progress-circle",
  "summary": "通过 SVG 呈现百分比圆环和中心文字。",
  "keywords": [
    "环形进度",
    "百分比",
    "SVG",
    "ProgressCircle"
  ]
}
```

## overview

用于紧凑进度展示。使用内联 SVG 计算轨道、进度圆环和文字，无独立 CSS 组件类；所有图形由 props 控制。

## setup

workspace：主入口 `@zui/progress-circle` 提供下述原生类和类型，`@zui/progress-circle/react` 提供 Preact 组件（历史路径名不代表 React 支持）。JSX 需项目 Preact/TypeScript 配置；另加载 `@zui/base` 和 `@zui/progress-circle` 的样式。browser：使用包含该库的 `zui` JS/CSS。npm：以目标发布包 `zui` / `zui/css` 的真实导出为准，不承诺独立子路径。本库没有样式入口或 CSS 资源；默认颜色引用 base 主题变量，因此仍需基础主题或显式 circleBg/circleColor。

## vanilla

### vanilla-progress-circle

```json
{"name": "ProgressCircle", "summary": "以原生构造器创建和更新组件。"}
```

`new ProgressCircle(selector, options?)`；选项见下文类型条目。构造、初始化异步时序、实例关联、`render(options?)`、`destroy()`、事件与 `$` 视图 ref 继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；`$` 首次渲染前可能为 null。选项可结合 [ComponentOptions](../core/ai.md#types-component-options)。调用 destroy() 卸载 Preact 子树；宿主由调用者按需移除。

主入口执行 ProgressCircle.register()，`view.render({percent: 90})` 更新图形。没有动画/定时器 API。

workspace（包含所需 CSS）：

```ts
import '@zui/base';
import {ProgressCircle} from '@zui/progress-circle';
const host = document.createElement('div');
document.body.append(host);
const view = new ProgressCircle(host, {percent: 68, size: 48});
// 离开页面时：view.destroy(); host.remove();
```

## preact

### preact-progress-circle

```json
{"name": "ProgressCircle", "summary": "渲染按比例计算的 SVG 圆环。"}
```

参数见 [ProgressCircleOptions](#types-progress-circle)。没有内部进度状态和事件，ref 为普通 Preact 实例，无额外公开方法。根含 role=progressbar、aria-valuemin/max/now；进度从顶部开始。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import {render} from 'preact';
import {ProgressCircle} from '@zui/progress-circle/react';
const host = document.createElement('div');
document.body.append(host);
render(<ProgressCircle percent={68} size={48} text="68%" />, host);
// 离开页面时：render(null, host); host.remove();
```

## web-components

无。

## css

无。

## css-variables

### vars-progress-circle

```json
{"name": "环形进度的主题依赖", "summary": "说明默认颜色引用的外部变量。"}
```

本库不声明变量。默认消费 base 的 `--color-surface` 与 `--color-primary-500`，作用于 SVG stroke；可在 SVG 祖先设置它们，或直接指定 circleBg/circleColor。变量完整定义见 [base](../base/ai.md#vars-base-colors)。

## javascript

无。

## types

### types-progress-circle

```json
{"name": "ProgressCircleOptions", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `className` | `string` | 否 | 无 | SVG 根额外类 |
| `percent` | `number \| string` | 否 | `0` | 字符串用 parseInt；有限值限制到 0…100，非法为 0 |
| `size` | `number` | 否 | `24` | SVG 正方形边长；非有限或 ≤0 回退 24 |
| `circleWidth` | `number` | 否 | `0.1` | <1 按 size 比例，≥1 按像素；非法/负值回退 .1，上限 size |
| `circleBg` | `string` | 否 | `var(--color-surface)` | 轨道 stroke |
| `circleColor` | `string` | 否 | `var(--color-primary-500)` | 进度 stroke |
| `text` | `string \| boolean` | 否 | `true` | true 显示向下取整百分比数值（无 %）；字符串显示自定义文本；false 隐藏 |
| `textStyle` | `string \| JSX.CSSProperties` | 否 | 默认字号 radius px，stroke currentColor | SVG text 样式 |
| `textX` | `number` | 否 | `size / 2` | 文字 x |
| `textY` | `number` | 否 | `size / 2 + 实际线宽 / 2` | 文字 y |
| `children` | `ComponentChildren` | 否 | 无 | 追加到 SVG 内 |

## recipes

需要中心显示单位时传 `text="68%"`。需要粗细固定使用 circleWidth=4；需要始终占尺寸 10% 用 circleWidth=.1。

## constraints

字符串 "12.8" 会被 parseInt 读成 12；不要以字符串小数要求保留精度。circleWidth=0 会绘制零宽 stroke。尺寸和百分比归一化不意味着自动获取真实任务进度。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/progress-circle/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/progress-circle/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/progress-circle/docs/lib/components/index.md>)
- [源码 src/main-react.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/progress-circle/src/main-react.ts>)
- [源码 src/types/index.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/progress-circle/src/types/index.ts>)
