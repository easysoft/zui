---
description: 为指定 ZUI 组件库生成或优化文档
---

# lib-doc

为指定组件库生成、补全或优化文档。调用时请提供组件库名称，例如：

```text
/lib-doc form-builder
/lib-doc button
/lib-doc checkbox
```

如果用户未提供组件库名称，先询问目标 `lib/<name>`。

## 目标

为 `lib/<name>` 生成高质量、可运行、可维护的文档源文件。文档应帮助使用者快速理解组件用途、复制基础用法、掌握常见场景，并能查阅选项、事件、方法和类型。

## 仓库文档机制

- 文档源必须写在组件库目录下：`lib/<name>/docs/<sidebar>/<section>/<page>.md`。
- 源文件至少要嵌套三层：`docs/<sidebar>/<section>/<file>.md`。层级不足（如 `docs/index.md`、`docs/lib/foo.md`）会被同步流程拒绝并报 `ERROR ... is in wrong place`（见 `scripts/docs/sync.ts`）。
- `docs/_` 目录区分两部分（见 `docs/.gitignore`）：
  - `docs/_/*` 下的**内容文档**是 `pnpm docs:prepare -- --copy` 从各 lib 同步生成的，**不要直接编辑**，改了会被下次同步覆盖。
  - `docs/_/.vitepress/`（`theme-config.ts`、`config.ts`、`theme/**`）是**纳入版本控制的手工源目录**，需要时可以编辑（例如新增侧边栏分区）。
- 同步规则（`lib/<name>/docs/<sidebar>/<section>/...` → `docs/_/<sidebar>/<section>/<name>/...`）：
  - `lib/<name>/docs/lib/components/index.md` -> `docs/_/lib/components/<name>/index.md`
  - `lib/<name>/docs/lib/forms/index.md` -> `docs/_/lib/forms/<name>/index.md`
  - `lib/<name>/assets/*` -> `docs/_/public/assets/<name>/*`
- 侧边栏机制（`docs/_/.vitepress/theme-config.ts`）：
  - 各库的**页面条目**由 `createSidebar()` 遍历 `zui-libs` + 扫描 docs 文件**自动发现**，落在已有分区下时无需手工登记。
  - 分区（section，如 `components`、`forms`、`config`、`skin`）在 `initSidebars()` 里**手工枚举**。若新库需要一个全新分区，必须在此文件中新增；沿用已有分区则不用改。
- 侧边栏标题来自 Markdown 第一行 `# 标题`。
- 标题以 `[WIP]` 结尾时，生产构建默认隐藏。
- 常用栏目：
  - 普通组件：`lib/<name>/docs/lib/components/index.md`
  - 表单控件：`lib/<name>/docs/lib/forms/index.md`
  - Core 基础能力：`lib/<name>/docs/lib/basic/*.md`
  - JS 工具：`lib/<name>/docs/lib/helpers/*.md`
  - 主题配置：`lib/<name>/docs/guide/config/*.md`
  - CSS 工具类：`lib/<name>/docs/utilities/<section>/*.md`

## 工作流程

1. 读取目标库上下文：
   - `lib/<name>/package.json`
   - `lib/<name>/src/main.ts`
   - `lib/<name>/src/**/types*.ts`、`src/types/**`
   - `lib/<name>/src/vanilla/**`
   - `lib/<name>/src/component/**` 或 `src/components/**`
   - `lib/<name>/src/style/**`
   - `lib/<name>/dev.ts` 和 `lib/<name>/dev/**`
   - 已有 `lib/<name>/docs/**`
   - 相近组件的成熟文档，例如 `button`、`search-box`、`menu`、`modal`、`datetime-picker`、`dtable`
2. 判断文档类型与目标路径：
   - 优先根据 `package.json` 的 `zui.type`、组件用途和已有文档分区判断。
   - 如果已有文档，只优化现有文件，不随意移动路径。
3. 提炼公开能力：
   - CSS 类、DOM 结构、数据属性。
   - Vanilla 类名、构造方式、静态名称 `NAME`。
   - 自动初始化方式：`zui-create`、`data-zui`、`<ZUI>`。
   - 选项、默认值、事件回调、公开方法、实例属性。
   - React/Preact 组件形态和 `registerReactComponent` 暴露的名称。
4. 生成或优化文档：
   - 先写可运行示例，再写解释。
   - 每个示例尽量同时给出“示例”和“HTML/JS”。
   - 参数表尽量用 `<Props>`，不要手写难维护的大表格，除非已有文档风格如此。
   - 保持中文说明简洁准确，避免夸张营销语。
5. 验证：
   - 至少检查 Markdown 结构、链接、代码块语言、组件名大小写、选项名拼写。
   - 快速校验同步结果用非阻塞命令 `pnpm docs:prepare -- --copy --build=no`（不触发全库构建）。
   - `pnpm docs:dev` 是常驻服务（内部带 `& pnpm docs:watch`），不会退出，只适合人工本地预览，不要用它做一次性验证。
   - `pnpm docs:build` 会先跑一次完整的 zui 全库构建再构建站点，成本较高，仅在需要验证发布产物时使用；不能运行时说明原因。

## 推荐文档结构

```md
# 组件中文名

一句话说明组件用途。必要时补充它适合什么场景。

## 使用方法

### 基础用法

::: tabs

== 示例

<Example>
  <!-- 可运行示例 -->
</Example>

== HTML

\```html
<!-- 可复制代码 -->
\```

:::

## 常见场景

### 场景一

...

## 选项

<Props>
/** 选项说明。 */
optionName?: string = "default";
</Props>

## 事件

## 方法

## 引入
\```js
import {ComponentName} from '@zui/<name>';
const instance = new ComponentName(element, options);
\```
```

并不是所有章节都必须出现。CSS-only 组件重点写类名、结构、外观和状态；JS 组件重点写初始化、选项、事件、方法。

## 示例写法

### 静态 CSS/HTML 示例

```md
::: tabs

== 示例

<Example class="flex gap-4">
  <button type="button" class="btn primary">主要按钮</button>
</Example>

== HTML

\```html
<button type="button" class="btn primary">主要按钮</button>
\```

:::
```

### 自动初始化示例

优先使用 `zui-create`，旧文档中的 `data-zui` 可以保留但不建议新增。

```md
<Example>
  <div zui-create="SearchBox" zui-create-search-box="{name: 'keyword'}"></div>
</Example>
```

如果组件当前文档或源码仍以 `data-zui` 为主要写法，可以在不扩大改动的前提下沿用：

```md
<Example>
  <div data-zui="SearchBox" data-name="keyword"></div>
</Example>
```

### 使用 `<ZUI>` 创建组件

`<ZUI>` 是文档主题组件，内部会在 `mounted` 后调用：

```ts
zui.create(use, element, options);
```

推荐写法：

```md
<Example>
  <ZUI use="FormBuilder" :options="formBuilderOptions" />
</Example>

<script setup>
const formBuilderOptions = {
    schema: schemaData,
};
</script>
```

不要新增 `create="ComponentName"` 写法；`create` 已被标记为兼容旧用法，新增文档使用 `use`。

### 复杂交互示例

当示例需要在页面 mounted 后执行 JS：

```md
<Example>
  <div id="menuExample" class="w-32"></div>
</Example>

<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.Menu('#menuExample', {
                items: [
                    {text: '复制', icon: 'icon-copy'},
                    {text: '粘贴', icon: 'icon-paste'},
                ],
            });
        });
    },
};
</script>
```

多个复杂示例共享大量数据或函数时，可以把脚本拆到同目录 `.js`，再在 Markdown 底部导入并导出，参考 `lib/dtable/docs/lib/components/index.md`。

### 参数表

```md
<Props>
/** 输入框 ID。 */
id?: string;

/** 是否禁用。 */
disabled?: boolean;

/** 值变化时触发。 */
onChange?: (value: string, event: Event) => void;
</Props>
```

注意：

- `<Props>` 支持 `/** 注释 */` 和行尾 `// 注释`。
- 默认值使用 ` = JSON值`，例如 `size?: string = "md";`、`disabled?: boolean = false;`。
- 联合类型可写成 `'sm' | 'md' | 'lg'`。

## 写作要求

- 第一屏必须有可运行的基础示例。
- 每个示例只展示一个核心点，避免一次堆太多选项。
- 说明文字先讲用户目标，再讲类名或选项。
- 示例代码中的组件名、选项名、事件名必须来自源码，不要凭记忆编造。
- 文档中的链接使用站内绝对路径，例如 `/lib/components/menu/`、`/lib/forms/input-control/`。
- 使用 Tailwind/ZUI 工具类时遵循当前文档风格，普通文档示例多用 `flex gap-4`、`row gap-4` 等 ZUI 类；不要把 Tailwind 配置中的前缀规则误当成拼写错误。
- 避免在文档中加入“开发中”“待完善”等空话；如果功能确实未完成，用 `[WIP]` 标题或明确列出缺口。
- 不要把 `README.md` 的旧 ` ```html:example ` 写法迁入新的官网文档；新的组件文档优先使用 `<Example>` 和 `::: tabs`。

## 质量检查清单

- 文档路径位于 `lib/<name>/docs/...`，不是 `docs/_/...`。
- 第一行有且只有一个明确的 `# 标题`。
- 目标分区（section）已存在于 `docs/_/.vitepress/theme-config.ts` 的 `initSidebars()`；沿用已有分区则页面会被自动发现，新增分区才需手工改该文件。
- 基础示例能在文档站直接渲染。
- HTML/JS 代码块可复制运行，不依赖 Markdown 私有变量。
- `<script setup>` 中的变量名与模板绑定一致。
- `<ZUI>` 使用 `use`，不是新增 `create`。
- `zui.create()` 使用的组件名与源码 `static NAME` 一致。
- 选项表覆盖主要公开配置，并与源码类型一致。
- 如果使用图片或附件，资源放在 `lib/<name>/assets` 并用 `/assets/<name>/...` 引用。
- 没有改动无关组件库或生成目录。

## 验证命令

快速检查同步结果（非阻塞，推荐用于验证）：

```sh
pnpm docs:prepare -- --copy --build=no
```

完整构建文档发布产物（会先跑全库构建，成本较高）：

```sh
pnpm docs:build
```

本地人工预览（常驻服务，不会退出，不要用于一次性验证）：

```sh
pnpm docs:dev
```

## 输出给用户

完成后简要说明：

- 新增或修改了哪些文档文件。
- 文档覆盖了哪些能力。
- 是否运行了验证命令，结果如何。
- 若未验证，说明原因和建议的验证命令。
