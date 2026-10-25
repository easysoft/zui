# ZUI 3

[English](./README.en.md)

> 开箱即用、可组合、可定制的 Web UI 组件库。

ZUI 3 不绑定特定的 JavaScript 框架，在原生 Web 项目以及各类前端框架中都可以使用。它同时提供 CSS 工具类、CSS 组件与 JavaScript 组件，并支持通过浏览器脚本、ES Module 或定制构建引入。

[官网](https://openzui.com/) · [开发文档](https://easysoft.github.io/zui/dev/) · [GitHub](https://github.com/easysoft/zui) · [更新日志](./CHANGELOG.md)

## 核心特性

- **框架无关**：对外提供原生 DOM API，可以独立使用，也可以集成到现有应用中。
- **组件丰富**：覆盖按钮、表单、导航、卡片、表格、下拉菜单、对话框、数据表格和文件上传等常见场景。
- **风格统一**：使用 CSS 变量管理全局设计配置，支持主题定制与深色模式。
- **灵活引入**：提供 UMD 和 ESM 产物，既可以直接通过 `<script>` 使用，也可以配合现代构建工具。
- **可组合构建**：每个功能都是独立的 workspace 库，可以按项目需求生成定制组合版本。

## Codex 插件

本仓库也是一个仅包含技能的 Codex 插件，提供两种互补工作流：

- `$zui`：识别现有项目的 ZUI 版本和接入方式，并安全地安装、集成、重构或排查 ZUI 3。
- `$zui-build`：从需求描述创建无需安装依赖或构建工具即可运行的独立 ZUI 3 页面或小型静态站点。

### 从 GitHub marketplace 安装

先添加本仓库提供的 marketplace，再安装 `zui` 插件：

```sh
codex plugin marketplace add easysoft/zui
codex plugin add zui@zui
```

安装后请重新启动 Codex，并新建一个会话，让新会话加载插件中的技能。

在已有应用中使用 ZUI 时，可以这样开始：

```text
使用 $zui 检查当前项目，并按现有技术栈接入 ZUI 3。
```

需要从零创建独立页面时，使用：

```text
使用 $zui-build 根据这份需求创建一个可直接运行的响应式页面：……
```

## 快速开始

### 通过 CDN 使用

将 ZUI 的 CSS 和 JavaScript 引入页面，即可使用组件样式与全局 `zui` 对象：

```html
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZUI 3 Demo</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zui/dist/zui.css">
</head>
<body>
    <button id="helloZui" type="button" class="btn primary">Hello ZUI</button>

    <script src="https://cdn.jsdelivr.net/npm/zui/dist/zui.js"></script>
    <script>
        document.querySelector('#helloZui').addEventListener('click', () => {
            zui.Messager.show('ZUI 3 已就绪！');
        });
    </script>
</body>
</html>
```

> 生产环境中建议在 CDN 地址中固定明确的 ZUI 版本。

### 通过包管理器使用

```sh
pnpm add zui
```

```js
import 'zui/css';
import {Messager} from 'zui';

Messager.show('ZUI 3 已就绪！');
```

### 在 TypeScript 中使用

npm 包包含选项、事件、实例方法和 Web Components 的类型声明，无需配置 `@zui/*` 路径别名或安装 `@types/zui`。公开类型引用的第三方依赖会随包自动安装。

页面准备一个 `<div id="productPicker"></div>`，即可在客户端初始化组件：

```ts
import 'zui/css';
import {Picker, type PickerOptions} from 'zui';

const options: PickerOptions = {
    items: [{value: 'zui', text: 'ZUI'}],
    onChange(value, oldValue) {
        // value 和 oldValue 均推断为 string。
        console.log(value, oldValue);
    },
};

const picker = new Picker('#productPicker', options);
picker.render({disabled: true});
// 页面或宿主组件卸载时清理实例。
picker.destroy();
```

已使用 TypeScript 5.9 在 `strict: true`、`skipLibCheck: false` 下验收 `Bundler`、`Node16` 和 `NodeNext` 模块解析，包括 ESM、CommonJS 和 `zui/css` 入口。运行时仍需要浏览器 DOM，SSR 应用应在客户端加载并初始化组件。

同名类型可通过明确的名称导入：`FileListFileInfo` / `FileSelectorFileInfo`、`DashboardBlockProps` / `DTableBlockProps`。`FileInfo`、`BlockProps` 分别对应 FileList、Dashboard；通用 `CustomRenderResult` 系列来自 core，DTable 的版本使用 `DTableCustomRenderResult`、`DTableCustomRenderResultGenerator` 和 `DTableCustomRenderResultList`。

完整的引入方式、组件 API 与示例请查看 [ZUI 文档](https://openzui.com/)。

## 源码开发

### 环境要求

- Node.js 22.13+
- pnpm 12.10.1

### 启动本地开发服务

```sh
git clone https://github.com/easysoft/zui.git
cd zui
pnpm install
pnpm dev
```

开发服务默认运行在 `http://localhost:5173/`。访问 `http://localhost:5173/<lib-name>/` 可以直接打开指定库的调试页，例如 `http://localhost:5173/button/`。

### 常用命令

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动内置库的开发服务 |
| `pnpm dev:exts` | 启动包含 `exts/` 扩展库的开发服务 |
| `pnpm storybook` | 启动独立的组件场景预览（默认端口 6006） |
| `pnpm storybook --extensions` | 启动包含已注册 `exts/` 扩展库的 Storybook |
| `pnpm storybook:build` | 构建 Storybook 静态站点到 `dist/storybook` |
| `pnpm storybook:build --extensions` | 构建包含已注册扩展场景的 Storybook |
| `pnpm typecheck:storybook` | 检查所选库的 Storybook 场景及其导入源码 |
| `pnpm test:storybook` | 用 Chromium 验收已构建的 Storybook 场景（先运行 `storybook:build`） |
| `pnpm lint` | 运行 ESLint 检查 |
| `pnpm typecheck` | 检查源码、工具与测试的 TypeScript 类型 |
| `pnpm test` | 运行 Vitest 单元和 DOM 组件测试 |
| `pnpm test:coverage` | 运行单元和 DOM 测试并生成覆盖率报告 |
| `pnpm test:build` | 验证代表性分发产物，并在仓库外安装 npm 包验收运行时与严格 TypeScript 消费 |
| `pnpm test:e2e` | 使用 Chromium 运行 Playwright 浏览器测试 |
| `pnpm test:e2e:all` | 使用 Chromium、Firefox 和 WebKit 运行浏览器测试 |
| `pnpm check` | 运行 lint、typecheck、单元/DOM 测试和技能测试 |
| `pnpm build` | 构建完整的 ZUI 产物 |
| `pnpm build:npm` | 构建用于 npm 发布的 `dist/zui` 及 TypeScript 声明，不执行发布 |
| `pnpm pack:npm` | 独立构建并打包 npm 候选包，输出 `.tgz` 与摘要清单 |
| `pnpm publish:npm --tarball <file>` | 检查并验证指定包的私有快照，通过后发布同一文件 |
| `pnpm docs:dev` | 准备并启动 VitePress 文档服务 |
| `pnpm docs:build` | 构建文档站点 |

本项目以各库的 `dev.ts` 作为交互调试入口。修改 `lib/<lib-name>/` 后，应在对应的单库页面验证功能与样式。

`pack:npm` 默认输出到 `dist/npm/run-*`，可通过 `--out-dir <directory>` 指定目录；版本读取根 `package.json`，发布模板保持只读，打包失败保留旧包。生成候选包或持有 `artifact.json` 摘要清单不代表通过发布检查。`publish:npm` 必须显式指定 `.tgz`，执行 `check` 和消费该文件的 `test:build` 后发布同字节快照，不重新构建或打包该候选包。CI 保存本次验证过的 npm 包与摘要，不自动发布。完整流程见[打包与发布指南](./docs/docs/guide/customize/build.md#npm-候选包与发布)。

测试分层、浏览器安装和视觉基线更新方式请查看[自动化测试指南](./docs/docs/guide/contributes/testing.md)。

### Storybook 调试

运行 `pnpm storybook` 后访问 <http://127.0.0.1:6006>。目前提供 11 个库共 65 个场景，可以在 Controls 中调整参数，在 Actions 中观察事件，也可以切换视口与 ZUI 主题。主题工具栏提供“浅色”“深色”“跟随系统”，默认跟随系统并实时响应系统外观变化。主题作用于整个预览文档，包含挂到 body 的菜单、弹窗和原生表单控件；切换时保留场景参数。主题选择由 Storybook globals 管理，可通过 `globals=theme:dark` 分享深色场景链接。

预览直接使用 `config/tailwind-theme/` 经 `@zui/base` 生成的颜色变量，通过根元素 `.dark` 切换，原生控件同步设置 `color-scheme`。不维护另一套背景色或组件皮肤；主题只作用于预览区域，Storybook 管理界面沿用自身外观。

| 组件 | 场景数 | 主要验证内容 |
| --- | --- | --- |
| Label | 3 | 外观、状态圆点、长文本省略与完整提示 |
| Button | 7 | Preact、原生 HTML、Web Component、表单、禁用、加载中、长文本 |
| Checkbox | 6 | 未选、已选、半选、禁用恢复、开关、长文案与窄屏、键盘和原生表单 |
| SearchBox | 6 | 受控输入、防抖、Enter／Escape、清空、禁用／只读、紧凑样式、长内容与窄屏、场景卸载 |
| InputControl | 6 | 原生输入、清空、禁用、只读、邮箱校验与恢复、长内容与窄屏 |
| Pager | 8 | 受控与原生接口、Web Component、每页条数、空数据、单页、末页、窄屏布局 |
| Picker | 9 | 受控单选与多选、搜索与清空、禁用、只读、空数据、长选项与窄屏、异步加载／搜索、失败与恢复 |
| DatetimePicker | 6 | 日期与时间联动、手工输入与校验、清空、禁用／只读、范围限制、分钟步长与窄屏 |
| Dropdown | 5 | 点击、悬停、嵌套菜单、禁用触发按钮、长菜单项 |
| Modal | 6 | 尺寸、确认与取消、仅按钮关闭、长标题、长正文滚动、Preact 内容 |
| Tabs | 3 | 受控切换、淡入效果、长标签与窄屏布局 |

`pnpm storybook:build` 生成可由普通 HTTP 静态服务器托管的 `dist/storybook`，包括场景使用的图标字体。它与原有 `pnpm dev`、官网文档和分发构建独立，默认只加载内置库；扩展模式显式启用本机 `exts/`。

场景统一放在库根目录，命名为 `<scene>.stories.ts` 或 `.stories.tsx`，内置库对应 `lib/<lib>/`，扩展库对应注册后的单库或集合中的库目录。使用 HTML/Vite 和 CSF 3，通过组件公开入口导入组件与样式。Storybook、CSS 扫描、TypeScript 检查和浏览器巡检共用所选库清单，无需维护库名列表；已发现库内增删场景会自动更新索引，新增库、注册或修改包元数据后须重启 Storybook。嵌套目录和 `dev.ts` 不会自动转换为场景。Button 的 Web Component 原型场景从本库 `src/web-component` 导入，不代表包主入口已公开该原型。使用已公开的 ZUI CSS 类、确定性数据和独立 DOM 容器，不导入 `dev.ts` 或复用全局实例。

Storybook 的扩展来源与构建命令统一：默认仅加载内置库，`--extensions` 加载全部已注册扩展，重复 `--extension <组名或目录>` 加载指定来源，两者互斥。内置库始终可用；可直接传入单库、集合或含 `lib/` 的项目目录，无须先注册。

```sh
pnpm storybook --extension zentao
pnpm typecheck:storybook --extension zentao
pnpm storybook:build --extension zentao --output-dir dist/storybook-zentao
STORYBOOK_OUTPUT_DIR=dist/storybook-zentao pnpm test:storybook --extension zentao smoke.spec.ts
```

Storybook 默认绑定 `127.0.0.1:6006`，占用即失败；用 `--port` 指定新端口，局域网访问须显式指定 `--host 0.0.0.0`。`--help` 不发现库或准备文件。每次开发服务启动使用独立临时缓存，退出时清理。

扩展库使用自己的包名导入（例如 `@zentao/user-avatar`），使用 `~/.storybook/zui` 导入宿主的 `createPreactRender` / `createZuiRender` 适配器。预览与构建同时接入所选扩展的公开子入口、`zui.replace`、Tailwind 预设、源码扫描和公共资源；修改扩展源码会刷新预览，CSS 继续使用热更新。扩展主题和替换会作用于同一次预览中的内置场景，因此内置视觉基线应在默认模式检查。扩展需要的第三方依赖仍由扩展项目管理。没有 `.stories.ts(x)` 的库可供其他场景导入，但不会自动出现在侧栏。CI 默认不依赖本机扩展；团队复现需先检出并注册相同扩展。

Storybook 按所选库隔离依赖预构建缓存，内置与扩展预览可在不同端口同时运行。

新增场景优先使用公开的 `@zui/<name>/react` 入口，并通过 `.storybook/zui.ts` 的 `createPreactRender` 渲染；纯原生组件或原生接口回归使用 `createZuiRender`。不自动拆解原生包装类，也不将原生 Options 当作 Preact Props。两个适配器都返回 HTML/Vite 可用的 DOM，无需新增 Storybook framework 或插件。

```ts
import '@zui/button/css';
import {Button} from '@zui/button/react';
import {action} from 'storybook/actions';
import {createPreactRender} from '../../.storybook/zui';
import type {Meta, StoryObj} from '@storybook/html-vite';

type Args = {text: string; disabled: boolean};
const clicked = action('click');
const meta = {
    title: '控件/Example',
    args: {text: '保存', disabled: false},
    argTypes: {text: {control: 'text'}, disabled: {control: 'boolean'}},
    render: createPreactRender(Button, {
        props: (args: Args, api) => ({...args, onClick: api.guard(clicked)}),
    }),
} satisfies Meta<Args>;
export default meta;
export const Playground: StoryObj<Args> = {};
```

原生组件可从下面的 Pager 模板开始；显式使用该组件的 `render()` 更新实例，并将用户切页回写 Controls。需要在参数变化时重新构造的组件可使用 `update: 'recreate'`，具体生命周期参考下文。

```ts
import '@zui/button/css';
import '@zui/css-icons';
import '@zui/dropdown';
import '@zui/toolbar';
import '@zui/pager/css';
import {Pager} from '@zui/pager/vanilla';
import {createZuiRender} from '../../.storybook/zui';
import type {Meta, StoryObj} from '@storybook/html-vite';
import type {PagerOptions} from '@zui/pager';

type Args = {page: number};
const meta = {
    title: '组件/Pager 最小示例',
    args: {page: 1},
    argTypes: {page: {control: {type: 'number', min: 1}}},
    render: createZuiRender(Pager<PagerOptions>, {
        options: (args: Args, api): Partial<PagerOptions> => ({
            ...args,
            recTotal: 101,
            recPerPage: 10,
            useState: false,
            items: [
                {type: 'info', text: '第 {page} 页'},
                {type: 'link', page: 'prev', text: '上一页'},
                {type: 'link', page: 'next', text: '下一页'},
            ],
            onChangePageInfo: api.guard(info => api.updateArgs({page: info.page})),
        }),
        update: (instance, options) => instance.render(options),
    }),
} satisfies Meta<Args>;
export default meta;
export const Playground: StoryObj<Args> = {};
```

按组件需求显式导入样式与图标。`props(args, api)` 返回完整受控 props；普通参数更新保留 Preact 树，卸载时执行 `render(null, host)`，从而触发组件及其内部原生实例的清理。构造阶段参数变更需要重新挂载时，提供 `key(args)`；例如 DropdownButton 内部只合并 options，触发方式或浮层配置变化通过 key 重挂载。不要为了普通文字更新更换 key。

原生适配器接受 `createZuiRender(Component, {host, options, update, ready, beforeDestroy})`：

- `host(args, api)` 可选，返回 `{root, target, ...局部状态}`；默认提供独立 div。`options(args, api, host)` 负责完整配置映射。
- `update` 必填，可设为 `'recreate'`，或提供 `(instance, options, args, host, api) => void`。基类 `render()` 不保证重绘，必须根据组件契约明确更新策略；清空参数也要显式映射，不能依赖浅合并删除旧值。
- `ready(instance, args, host, api)` 在 `$onInited` 后绑定依赖实例的交互；此前应禁用触发器。适配器组合原 `$onInited`，初始化期间参数变化会重建，销毁后迟到的就绪通知无效。
- `beforeDestroy(instance, host)` 处理专属关闭行为，随后适配器始终调用 `destroy()`。宿主由适配器管理，固定关闭 dataset 配置、节点替换和延迟 detach 销毁。

两个适配器中的 `api.guard(callback)` 保留回调的 this、参数和返回值，并屏蔽已经卸载、脱离文档或重挂载前的旧回调；`api.updateArgs(patch)` 将用户操作回写 Controls；`api.onCleanup(fn)` 注册局部监听、计时器等清理。监听 Component 事件时使用包含 `instance.namespace` 的专属命名空间，避免 `off('show')` 移除组件内部监听。Actions 与回写都只放在实际用户事件中，程序更新不伪造操作。Pager 使用 `useState: false`，参考 `lib/pager/pager.stories.ts` 中的 Preact 与原生完整示例。

适配器使用 `storybook/preview-api` 的 hooks，不使用 Preact hooks；挂载发生在 Storybook 的预览 effect 中，当前不支持依赖首次挂载内容的 `play()` 交互脚本（该版本先执行 play，再触发预览 effect）。浏览器交互回归使用外部 Playwright。Meta 保持普通对象字面量，使用 `Meta<Args>` / `StoryObj<Args>`。当前 Storybook 的 URL args 校验不接受中文字符串；中文 Controls 在当前预览中生效，但直链刷新不会保留该自定义文字，需保存到 story 的 args 中。

Modal 的 Preact 场景只展示内容布局；完整开关使用无过渡动画的 ModalBase，清理时先隐藏以释放滚动锁，再销毁。现有 Modal 不提供 Tab 焦点循环，场景不额外模拟此能力。Tabs 通过专属 update 更新原有节点，点击后立即同步 Controls 并保留淡入和焦点。自定义元素场景继续使用自身连接/断开生命周期。

InputControl 的公开入口只提供 CSS；场景用原生 `input`／`form` 展示前后缀、清空按钮、禁用与只读，未使用库内尚未导出的 Preact Input。邮箱与必填校验调用原生约束校验，错误关联到字段，只有有效表单触发提交 Action。

Picker 使用公开的 `@zui/picker/react`，选择同步回 Controls，Controls 写入不会重复产生选择 Action；多选按真实 `owner[]` 字段提交。切换单／多选、禁用或只读时重建实例并清理浮层，普通值更新保留实例。空数据通过公开的 `popHeader` 配置提示，`searchEmptyHint` 用于搜索无匹配结果；所有选项为本地确定性数据。

Picker 的搜索键盘操作从已打开的搜索框开始，场景不额外模拟触发器键盘行为。只有一个可用匹配项时，重复按 ArrowDown／ArrowUp 保持该项激活，Enter 选择当前项；多项结果仍循环导航并跳过禁用项。回归同时覆盖单项反复导航后确认、多项导航和空数据。

stories 和 CSS 使用热更新；组件源码的 TS/TSX 变更会刷新预览 iframe，以重新注册自定义元素。

`pnpm typecheck` 同时检查原项目和默认内置 Storybook。`pnpm typecheck:storybook --extension <组名>` 按所选库的包入口与替换关系检查扩展场景。Storybook 使用独立 TypeScript 配置跳过其第三方声明内部检查，避免要求安装其他渲染器；场景与导入的项目源码仍接受严格类型检查，原项目的声明检查策略保持不变。

运行 `pnpm storybook:build` 后执行 `pnpm test:storybook`。测试从构建索引自动发现全部场景，在浅色与深色下检查非空渲染、脚本错误和资源加载，并核对源码文件与索引一致；同时验证主题工具栏、系统外观变化与浮层主题继承，禁用与加载状态恢复、空数据与分页边界、长文本和窄屏浮层，Checkbox 选中状态、Controls 与 Actions、Tab／空格操作、原生表单提交、禁用恢复和长文案换行，InputControl 输入、清空、原生表单语义和校验恢复，SearchBox 防抖输入与 Controls、Enter／Escape、清空取消待执行通知、中文输入、禁用／只读、快捷键重新配置和场景卸载，Picker 单／多选提交、搜索、键盘操作、Controls 同步、异步加载／空结果／失败恢复、快速搜索与浮层卸载，DatetimePicker 日期／时间选择、手工输入校验、清空、范围限制、禁用／只读、分钟步长和浮层卸载，Button 表单与 Actions、三种 Pager 的双向参数同步、Dropdown 和 Modal 的卸载清理、焦点恢复、Tabs 切换及手机宽度下的表单。新增场景自动获得双主题加载巡检，特有交互应补充到 `tests/storybook/`。

浏览器检查不隐式重建，默认在 `http://127.0.0.1:6007/` 临时托管静态产物，结束后关闭自身服务；端口被占用时失败。`STORYBOOK_OUTPUT_DIR` 可选择独立构建目录，`--extension` / `--extensions` 必须与构建时的来源选择一致。复用已确认的服务时设置 `PLAYWRIGHT_STORYBOOK_BASE_URL=http://127.0.0.1:端口/`，该模式不启动服务，要求本地构建索引与服务中的场景一致。截图和 trace 位于 `test-results/storybook/`，HTML 报告位于 `playwright-report/storybook/`。

`tests/storybook/accessibility.spec.ts` 为 InputControl 和 SearchBox 的可清空／禁用／只读状态、Checkbox 的半选／禁用／开关，以及展开的 Dropdown 和 Modal 确认框建立双主题可访问性门禁。axe 执行 WCAG 2.1 A/AA 自动规则（包含对比度，不禁用规则），扫描真实预览和 body 浮层；失败时附加完整违规 JSON。键盘回归验证 Tab 顺序、清空后焦点返回、空格切换、菜单触发器焦点和 Modal 焦点循环／Escape 返回。该门禁随 `pnpm test:storybook` 进入现有 CI，不受视觉基线跳过开关影响。覆盖范围为这些代表场景，不代表完整可访问性认证；InputControl 错误提示、Picker 和 DatetimePicker 的对比度及语义问题尚待独立治理，屏幕阅读器与缩放仍需人工验收。

本机 Chromium 另有 46 张组件区域视觉基线，覆盖 Button 默认／禁用／加载、Checkbox 半选／禁用／开启的开关、SearchBox 默认／禁用／紧凑／窄屏长内容、InputControl 校验错误、Picker 单选／多选／空数据的展开状态及异步加载／失败／空结果、DatetimePicker 日期时间弹层／范围限制／窄屏分钟步长、展开的 Dropdown、打开的 Modal，以及 390px 宽度下的紧凑 Pager，均包含浅色和深色。Picker 和 DatetimePicker 截图同时包含输入区与挂到 body 的浮层；日期场景固定为上海时区的 2026-10-15 09:30，异步场景用受控时钟冻结加载状态并推进确定性响应。桌面视口固定为 1280 × 900，手机视口为 390 × 844；截图只包含组件区域，不包含 Storybook 工具栏。测试等待主题、字体和浮层就绪，截图时禁用动画；错误和资源检查仍然生效。

```sh
pnpm storybook:build
pnpm test:storybook visual.spec.ts --project=chromium
# 确认预期外观后显式更新，并逐张查看 PNG，再运行上面的比较命令
pnpm test:storybook visual.spec.ts --project=chromium --update-snapshots
```

预期 PNG 位于 `tests/storybook/__screenshots__/chromium/<platform>/visual.spec.ts/`。普通运行遇到缺失或变化的基线会失败，不自动写入；更新后应将已评审的 PNG 与测试一起提交。使用锁文件对应的 Playwright Chromium 和一致的本机字体环境，浏览器或字体升级后需重新核查差异。CI 或 `PLAYWRIGHT_SKIP_VISUAL=1` 跳过这 46 项平台相关的像素比对，继续执行现有双主题加载、布局和交互回归，不生成基线。

PR 和 main/nightly 在现有浏览器 job 中执行静态构建与 Chromium 场景检查，失败诊断沿用 runner 本地归档；不自动发布 Storybook。CI 以 `--fail-on-flaky-tests` 拒绝仅靠重试通过的测试，详情见 [.github/CI.md](./.github/CI.md#storybook-场景门禁)。

### 定制构建

构建命令可以按需组合多个库：

```sh
pnpm build --lib button --lib dropdown --name zui-custom
```

产物将输出到 `dist/zui-custom/`。通过 `--extensions` 包含全部已注册扩展，或用可重复的 `--extension <组名或目录>` 指定扩展来源；`--lib` 选择其中的入口。构建不隐式执行类型检查，发布前使用 `pnpm check` 和 `pnpm test:build` 验证。更多选项和旧参数迁移表请查看 [定制构建文档](https://easysoft.github.io/zui/dev/guide/customize/build.html)。

## 仓库结构

| 目录 | 职责 |
| --- | --- |
| `lib/` | 内置组件、辅助 API、样式、调试页与文档源文件 |
| `config/` | 共享的 Tailwind 主题配置 |
| `dev/` | 本地调试页的开发辅助工具 |
| `docs/` | VitePress 文档站点与基础文档 |
| `scripts/` | 构建、文档同步和库元数据处理脚本 |
| `tests/` | 单元、DOM、构建消费和 Playwright 浏览器测试 |
| `exts/` | 通过 `pnpm extend-lib <path>` 接入的本地扩展库 |

## 技术栈

ZUI 3 使用 [TypeScript](https://www.typescriptlang.org/)、[Preact](https://preactjs.com/)、[Cash](https://github.com/fabiospampinato/cash)、[Tailwind CSS](https://tailwindcss.com/)、[Vite](https://vitejs.dev/) 和 [VitePress](https://vitepress.dev/) 开发。

## 参与贡献

欢迎通过 [Issue](https://github.com/easysoft/zui/issues) 报告问题或提交建议，也欢迎提交 Pull Request。提交代码前，请运行 `pnpm check`，并根据改动范围补充代表构建、浏览器测试和对应的单库调试页验证。

> 正在寻找 ZUI 1？请访问 [ZUI 1 官网](https://openzui.com/1/) 或 [`zui1` 分支](https://github.com/easysoft/zui/tree/zui1)。

## 开源许可

ZUI 3 基于 [MIT License](./LICENSE) 开源。
