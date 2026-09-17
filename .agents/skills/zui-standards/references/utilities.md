# CSS utilities 使用与核实

组件实现、调试页和官网文档新增或修改布局类、示例容器类及可复制代码时，使用本规范。只核实本次涉及的类和消费方式；复用仍有效的源码证据，不重复全量扫描。

## 公开类与内部 Tailwind

- `@zui/utilities` 提供预定义的公开 CSS 类，HTML/JSX 的 `class` / `className` 使用这些无前缀类，例如 `flex items-center gap-2 p-4`。类名相似不代表完整兼容 Tailwind。
- CSS 内部的 Tailwind `@apply` 使用仓库 `-` 前缀，例如 `.p-4 {@apply -p-4;}`。内部可用的 Tailwind 能力可以多于公开类；看到 `@apply -xxx` 或主题配置中存在某个值，不足以证明 HTML 可使用 `xxx`。
- 不通过给 HTML 类名加 `-` 前缀使其在开发环境碰巧生效；也不把已有源码中的 Tailwind 变体、任意值直接搬成公开类。组件类和自定义类按其自身定义、入口与适用条件核实，不要求全部属于 utilities。

## 使用前核实

1. 根据所需效果查阅 [utilities 文档](../../../../lib/utilities/docs/utilities/)，再在 [utilities 源码](../../../../lib/utilities/src/) 定位实际选择器。文档或历史示例只能提供候选，是否支持以当前源码及目标产物为准。
2. 读取完整规则，核对类名边界、伪类、父子选择器和组合条件；再跟踪 `@apply`、CSS 变量及 [主题配置](../../../../config/tailwind-theme/) 确认实际值、优先级和副作用。不要直接套用 Tailwind 默认字号、颜色或其他同名语义。
3. 从 [utilities 入口](../../../../lib/utilities/src/main.ts) 沿 CSS 导入确认对应文件已接入，再核对目标库及消费方式的依赖、样式入口和构建选库。仅在源码中找到定义，不能证明消费者会加载到它。
4. 若 utilities 未提供该类，再检查目标组件或已接入的自定义样式；仍无定义时，按下文选择已有组合或最少自定义 CSS，不能继续把候选类当作可用类。

在仓库根目录使用固定字符串查询，例如：

```sh
rg -n -F 'p-4' lib/utilities/docs/utilities/
rg -n -F '.p-4' lib/utilities/src/spacing/padding.css
rg -n -F '.hover\:text-primary' lib/utilities/src/interactivity/hover.css
rg -n -F '.p-0\.5' lib/utilities/src/spacing/padding.css
rg -n -F '.w-1\/2' lib/utilities/src/sizing/width.css
```

HTML 中写 `hover:text-primary`、`p-0.5`、`w-1/2`；CSS 选择器中冒号、小数点和斜杠需要转义，以上 shell 单引号保留反斜杠。`rg -F` 命中只是定位：`.p-4` 也可能匹配更长类名，文档、注释或 `@apply` 中出现同名文本也不等于定义了公开选择器。未命中时先核对转义和样式来源，不凭一次搜索断言不存在。

## 当前实现中的典型差异

下列是当前源码示例，用于提示核实方向，不是永久黑名单或完整类名清单；后续以实时源码和目标产物为准。

| 候选写法或类名 | 当前事实与使用要求 |
| --- | --- |
| `p-12`、`grid-cols-2`、`md:flex`、`w-[137px]` | 默认 utilities 未公开这些类；不能按 Tailwind 的数值范围、响应式或任意值语法推导支持。 |
| `hover:text-primary` | [hover.css](../../../../lib/utilities/src/interactivity/hover.css) 显式提供此组合，但不能据此推导所有 `hover:*` / `group-hover:*` 组合都存在。 |
| `text-base` | [字号配置](../../../../config/tailwind-theme/font-size.cjs) 为 `0.8125rem`，默认根字号下是 13px；不能按 Tailwind 默认 16px 设计布局。 |
| `container` | [container.css](../../../../lib/utilities/src/layout/container.css) 额外应用 `-mx-auto`，包含水平居中。 |
| `outline` | [outline.css](../../../../lib/utilities/src/skin/outline.css) 是皮肤组合，涉及背景、文字、边框和外圈；不能当作单一 CSS `outline-style` 工具类。 |
| `hidden` | [display.css](../../../../lib/utilities/src/layout/display.css) 使用 `!-hidden`，生成 `display: none !important`，组合显示类时要核对优先级。 |

## 工具类不足时

优先直接组合已核实的公开类。无法快捷、清晰地表达目标时，只为缺失部分补充带组件作用域的最少 CSS，并简述原因；不要把已有组合再包装成无必要的新选择器，也不要用静态内联样式绕过这一原则。动态计算值可按 [布局与样式规范](component.md#布局与样式) 通过 CSS 变量或 `style` 传入。

缺少公开的 Grid、响应式或任意值类，不意味着禁止相应 CSS 能力。可在目标组件样式中使用原生 CSS、媒体查询或经当前配置验证的 `@apply`，例如 `@apply -grid -grid-cols-2;`；内部合法的 `@apply` 不受公开类清单限制。不要仅为某个示例自动扩展公共 utilities 或修改 Tailwind 配置；跨库改动仍遵循已有任务范围。

## 验证与评审

- [主构建配置](../../../../tailwind.config.cjs) 在开发环境扫描源码，默认生产配置的 `content` 为空；[文档站配置](../../../../docs/tailwind.config.cjs) 又有自己的扫描入口。页面显示正常可能来自开发/文档环境生成的样式或完整 ZUI，不能证明单库或用户产物包含所需类。
- 源码和入口足以确认时复用证据；仍有疑问或涉及消费契约时，按 [共享工作流](workflow.md) 检查目标生产 CSS，必要时使用内存编译或隔离输出，再针对受影响状态验证实际效果。不要覆盖用户已有构建产物，也不要用 lint、类型检查通过代替样式验证。
- 评审结合选择器定义、组件自定义样式、主题覆盖和实际消费入口判断。只有确认类不存在、效果不符或样式未进入目标产物，并能说明具体影响时才报告问题；utilities 中未收录某个类，本身不是缺陷。
