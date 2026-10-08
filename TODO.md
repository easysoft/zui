# TODO

## 构建：支持可选 CSS 容器作用域

目标：在构建 CSS 时自动限定 ZUI 样式的生效范围，方便已有 Web 项目逐步接入，减少同名类和全局基础样式对宿主页面的影响。保留现有组件类名、HTML 和 JS 用法。

拟议配置（尚未实现）：

```json
{
    "css": {
        "scope": ".zui-scope"
    }
}
```

实施路径：

- [ ] 在 `scripts/build/config.ts` 的 `BuildOptions`、`BuildPlan` 及配置校验中增加可选的 `css.scope`，默认关闭，未配置时保持现有构建行为。
- [ ] 接入 `scripts/build/css-config.cjs` 的 PostCSS 处理链，在 CSS 导入、Tailwind 展开之后，Autoprefixer 和压缩之前转换选择器，确保覆盖最终产物中的样式并保留 source map。优先评估复用 [postcss-prefix-selector](https://github.com/RadValentin/postcss-prefix-selector)，通过自定义转换补齐 ZUI 规则；避免直接对 CSS 文本做正则替换。
- [ ] 按下表处理普通选择器与特殊规则，避免重复添加作用域前缀。

| 规则 | 转换要求 |
| --- | --- |
| `.btn`、`.menu > li` 等普通选择器 | 添加 `.zui-scope ` 前缀；逗号分隔的选择器分别转换，正确处理 `:is()`、`:not()` 等函数内的选择器列表。 |
| `@media`、`@supports` 等条件规则 | 保留条件，转换内部样式选择器。 |
| `:root`、`html`、`body` 及其组合 | 按语义将主题变量和基础样式映射到容器，避免生成 `.zui-scope :root`、`.zui-scope body` 等无效匹配。 |
| `*`、`::before`、`::after` 等基础规则 | 限定范围，同时覆盖容器自身、后代及其伪元素。 |
| `.dark`、`.light-in-dark`、`.dark-auto` 等主题规则 | 兼顾主题类位于容器自身或内部的情况，明确宿主页面主题的继承策略。 |
| `@keyframes` 及带厂商前缀的动画规则 | 保留动画定义，不给 `from`、`to`、百分比关键帧添加选择器前缀。 |
| `@font-face` | 保留字体定义；字体名与动画名的隔离不属于本次选择器作用域能力。 |

接入边界：

- 作用域只限制 ZUI CSS 的匹配范围，旧项目的全局规则仍可能影响容器内的组件；动画名、字体名仍处于全局命名空间，不宣称双向或完全隔离。
- 动态 Dropdown、Tooltip、Popover、Modal 等浮层须通过各组件的 `container` 选项挂到带相同作用域类的容器；仅包裹触发元素不够。验证定位、裁剪和层叠行为。
- `rem` 仍相对文档 `html` 字号，不能通过设置容器字号改变其基准。明确默认跟随宿主字号，需要固定尺寸时评估现有 `css.remToPx`，不修改宿主 `html`。
- 可搭配按需构建及 `css.preflight: false` 减少影响，但关闭 Tailwind Preflight 不会移除 ZUI 自身的全部全局基础规则。

完成条件：

- [ ] 选择器转换测试覆盖列表、组合选择器、函数伪类、根选择器、容器自身、主题、条件规则、动画及重复处理。
- [ ] 构建产物验证覆盖启用与未启用作用域、压缩与 source map；未启用时保持原有消费契约。
- [ ] 浏览器验证同页容器内外存在同名类时的样式边界，以及按钮、表单和动态浮层在深浅主题、不同宿主根字号下的表现。
- [ ] 补充构建配置和接入文档，说明只加载作用域版 CSS、容器标记、浮层挂载、尺寸策略及隔离限制。

## 长期：清理构建工具链中的 braces 依赖

目标：通过升级或替换上游工具，移除 `braces` 的全部引入路径，最终删除本地补丁及对应的安全审计例外。

背景（2026-10-04）：`braces@3.0.3` 的 [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) 尚无正式修复版本。当前已回补 [上游 PR #72](https://github.com/micromatch/braces/pull/72) 的深度保护，并通过回归测试；补丁和单项审计例外配置在 `pnpm-workspace.yaml`。由 ZUI 仓库维护者在 **2026-11-04 前复核**上游进展。

实施路径：

- [ ] 升级直接使用的 `chokidar@3` 到不再依赖 `braces` 的版本。由于新版本移除了 glob 支持，将 `scripts/docs/watch.ts` 改为监听目录并筛选文件，保留文档和扩展目录的新增、修改、删除同步及监听资源清理行为。
- [ ] 评估以 Node.js 原生文件遍历或 glob 能力替换直接使用的 `fast-glob`，核对 Node.js 版本要求、匹配语义、隐藏文件、忽略规则、符号链接和路径转义。涉及 `scripts/build/metadata.ts`、`scripts/build/zip.ts`、`scripts/docs/sync.ts`、`scripts/utilities/recursive-last-modified.ts`。
- [ ] 评估将 Tailwind CSS 3 迁移到不再引入 `braces` 的工具链，例如 Tailwind CSS 4。核对 `scripts/build/css-config.cjs` 中的 PostCSS 接线、`tailwindcss/loadConfig`、主题及变量插件，以及现有 `@apply` 前缀、CSS 产物和浏览器兼容性；形成迁移方案后分步实施。

注意：只升级仓库直接依赖的 `chokidar` 或替换 `fast-glob`，仍不能移除 Tailwind CSS 3 自身引入的 `braces`，需以完整依赖图为准。

完成条件：

- [ ] `pnpm why braces` 不再显示引入路径，锁文件中不再包含该包。
- [ ] 删除 `patches/braces@3.0.3.patch`、对应 `patchedDependencies` 注册和该 GHSA 的 `audit.ignore` 项；移除仅服务于该补丁的 `tests/unit/braces-security.test.ts`，保留迁移后文件扫描、监听和样式构建所需的回归覆盖。
- [ ] 无该项例外时，`pnpm audit --audit-level=high` 通过；`pnpm check`、`pnpm test:build`、`pnpm docs:build` 及文件监听验收通过，CSS 行为和浏览器兼容性符合 ZUI 的支持范围。

过渡处理：若上游先发布正式修复版，优先验证并升级，移除临时补丁及审计例外；工具链迁移继续按其兼容性和维护收益评估。
