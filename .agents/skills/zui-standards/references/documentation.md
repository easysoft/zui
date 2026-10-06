# ZUI 正式文档规范

## 目录

- [产品命名](#产品命名)
- [文件位置](#文件位置)
- [事实来源](#事实来源)
- [页面结构](#页面结构)
- [接入与构建说明](#接入与构建说明)
- [官网示例语法](#官网示例语法)
- [示例完整性与反馈](#示例完整性与反馈)
- [质量检查](#质量检查)
- [验证](#验证)
- [示例验收](#示例验收)

## 产品命名

- 对外产品名称统一写作 `ZUI 3`，用于标题、正文、示例展示文案和更新日志。
- 具体版本写作 `ZUI 3.1`、`ZUI 3.1.0`；泛指品牌或全系列时可以简称 `ZUI`。
- 中文与产品名称之间保留空格，例如“欢迎使用 ZUI 3”。
- 仓库名 `zui3`、包名、路径、URL 和代码标识符保留原有写法，不随展示名称替换。

## 文件位置

正式文档源位于：

```text
lib/<name>/docs/lib/<basic|components|forms|helpers>/index.md
```

分类选择：

- `basic`：core、基础样式或底层能力；
- `components`：通用 UI 组件；
- `forms`：表单控件、输入和校验；
- `helpers`：JS helper、store、工具 API。

优先沿用目标库已有分类。`index.md` 是主页面；仅在已有结构或用户明确要求时维护额外页面。

同步后内容会进入 `docs/_`。不要编辑 `docs/_` 中生成的内容；它会被后续同步覆盖。库内资源放在目标库约定的 assets 位置，并按现有同步规则引用。

## 事实来源

按 [共享工作流](workflow.md) 从下列材料核实本次说明所需事实，不要求每次全部读取：

- `package.json` 与 `src/main.ts`；
- 公开 types、component、vanilla、style 和 i18n；
- `README.md` 与 `dev.ts`；
- 现有正式文档；
- 需要设计新页面结构或判断约定时参考相近成熟文档。

从源码提取 options/props、默认值、事件、方法、类型、CSS 类/变量、引入路径和消费方式。不要根据命名猜测，不记录内部或未导出的 API。若源码和文档目标冲突，只修改文档无法解决时，报告差异而不是越界改代码。

## 页面结构

新建或重构页面时，第一屏应让读者快速理解用途并运行最小示例；局部修订只调整请求范围：

1. 标题和一句用途说明；
2. 基础用法与可运行示例；
3. 仅当存在额外接入步骤时，说明所需依赖或引入方式。

随后按实际内容组织：

- 常用场景与视觉/行为变体；
- HTML/CSS、Preact、vanilla、`zui-create`/toggle 等真实消费方式；
- options/props 与默认值；
- 事件、方法和类型；
- CSS 类与 `--<component>-*` 变量；
- 无障碍、限制和关联组件。

不为不存在的 API 保留空章节。中文应简洁、动作明确，代码命名保持英文。

### 接入与构建说明

普通组件页以 ZUI 已按公共指引接入为前提。省略“已包含在默认/全量构建中”、常规 JS/CSS 加载步骤与整库构建命令；安装和整体构建流程放在公共指引中。

组件页只补充影响使用步骤的特殊条件，例如独立资源部署、可选依赖启用、模块或样式入口差异。ESM/npm、Preact 等用法按[源码与文档接入规范](consumption.md)分节说明，并在代码前明确所属环境；`@zui/*` 导入必须标明源码工作区前提，不归入普通 npm 用法。标签已表达的插件类别无需再用“内置、无需引入”重复说明。文档站的构建、同步细节留在验证流程中。

## 官网示例语法

`<Example>`、`<ZUI>` 和 `<Props>` 是官网 Markdown 的渲染语法，不是 ZUI 面向用户的公开 API。代码标签页必须展示用户实际可复制的 HTML、JS、Preact 或 vanilla 写法，不要把这些文档组件放入用户代码。

### ZUI 成员访问

在官网的普通 JS 示例和代码标签页中，默认通过已加载的全局对象 `zui` 访问公开组件、方法及其他成员，不要为普通用法添加模块导入：

```js
new zui.Menu(element, options);

// 同一示例需要多个成员时可以统一解构。
const {Nav, Messager} = zui;
const nav = new Nav(element, options);
Messager.show('操作成功');
```

- 使用少量成员时优先保留 `zui.Menu`、`zui.Messager.show()` 等完整访问形式，使来源一目了然。
- 同一示例反复使用多个成员时可以先从 `zui` 解构，避免重复前缀。
- 不要在普通示例中写 `import {Menu} from 'zui'` 或从 `@zui/*` 导入运行时成员。
- 只有在专门说明 ESM/npm、构建工具、Preact 模块入口或 TypeScript 类型导入时才展示 `import`，并把它作为对应消费方式的补充示例。
- 使用前根据公开入口确认成员确实挂载在当前文档构建的 `zui` 全局对象上，不要根据源码导出名称猜测。

### 示例与代码标签页

同时展示运行结果和源码时使用以下结构，`示例` 放在首个标签。纯 HTML 示例使用 `HTML`；普通浏览器示例需要 HTML、CSS 和 JS 配合时，优先提供包含必要 `<style>`、`<script>` 的单个 `完整代码` 标签。局部 API 说明或其他消费方式可另设 `JS`、`Preact` 等标签，并说明片段所需上下文。

````md
::: tabs

== 示例

<Example class="flex flex-wrap gap-4" background="light-circle">
  <button type="button" class="btn primary">确认</button>
</Example>

== HTML

```html
<button type="button" class="btn primary">确认</button>
```

:::
````

只有运行结果、不需要配套源码时可以单独使用 `<Example>`。基础用法通常应同时给出可复制源码。

### 示例完整性与反馈

- 以公共接入已完成为前提，每组承诺可运行的示例都应包含所需容器、完整数据、样式和初始化，不能依赖前一节变量、其他示例的 DOM 或文档脚本。不要用 `cols: [...]`、省略的子项或“同上”代替复现效果必需的内容；只解释局部 API 的片段应明确标注。
- 对齐预览与代码的内容、数量、布局、初始状态、选项和回调，包含预览展示的全部变体。预览使用 `$replace` 等影响 DOM 或行为的配置时，同步核实复制代码；文档封装的默认行为不能成为隐含依赖。
- Ajax、iframe 等示例依赖配套文件时，提供文件内容、放置位置与路径说明；需要服务端能力时说明接口约定，不能只给官网内部资源地址就承诺可独立运行。
- 选择、排序、确认、撤销、校验和提交等核心交互应有页面可见的结果，必要时使用状态区域和 `aria-live`，不能只输出控制台。按交互补充键盘入口与焦点处理，拖拽场景提供适当的键盘操作方式。
- 需要规避已确认的组件缺陷时，说明受影响行为、当前可用配置和限制；不把临时规避配置写成通用默认要求，也不将它描述为源码缺陷已经修复。

### 可视示例 `<Example>`

使用 `<Example>` 隔离示例外观并在挂载后初始化其中的声明式 ZUI 组件：

````md
<Example class="flex gap-4" background="light-grid" padding="p-4">
  <!-- 示例内容 -->
</Example>
````

- 统一使用 `class` 设置示例布局，不在同一文档中混用 `className`。
- `background` 仅在需要区分透明、阴影或边界时使用，支持 `light-grid`、`blue-circle` 和 `light-circle`。
- `padding` 接受间距类名；使用数字时写成 Vue 绑定形式，例如 `:padding="4"`。默认留白合适时省略。
- 官网示例容器、示例内容和可复制代码遵循 [布局与样式规范](component.md#布局与样式)。新增或修改布局类及 `padding` 等工具类属性时，读取并执行 [CSS utilities 核实流程](utilities.md)；文档站自行生成的 Tailwind 样式不能作为用户产物支持该类的依据。
- 文档装饰外壳（背景、展示区留白等）留在 `<Example>`；复现效果所需的宽高、滚动容器、定位参照、间距与换行布局，应放进示例内容并提供对应复制代码。不能仅因布局原先写在 `<Example>` 上就将其省略。

### 文档实例 `<ZUI>`

需要在预览区挂载 vanilla 组件时使用 `<ZUI>`。它会等待全局 ZUI 就绪后调用 `zui.create`，但不会自行加载缺失的库：

````md
<Example>
  <ZUI
    use="picker"
    :options="{items, defaultValue: 'banana'}"
    :ready="handlePickerReady"
  />
</Example>

<script setup>
const items = [
    {text: 'Apple', value: 'apple'},
    {text: 'Banana', value: 'banana'},
];

function handlePickerReady(instance) {
    console.log(instance);
}
</script>
````

- `use` 是传给 `zui.create` 的组件名；不要使用已弃用的 `create` 属性。
- `:options` 传入真实选项对象；不需要获取实例时省略 `:ready`。
- 需要在实例重新创建前恢复预览数据或反馈时，可使用 `:beforeCreate`；它不接收已创建的实例。`<ZUI>` 在自身卸载时销毁实例，外部持有的实例引用与副作用仍需同步清理。
- 页面需要的库必须已进入文档构建；不要把 `<ZUI>` 描述成依赖加载器。
- `<ZUI>` 只用于运行预览；相邻代码标签应展示 `new zui.Picker(...)`、`zui-create` 或其他真实公开用法。
- 一个 Markdown 页面只维护一个页面级 `<script setup>`，新增数据和回调时合并到已有脚本块。

### 属性表 `<Props>`

使用 `<Props>` 将紧凑的类型声明渲染为属性表：

````md
<Props>
/** 显示模式。 */
mode?: 'button' | 'box' = "button";

disabled?: boolean = false; // 是否禁用。
value: string; // 当前值。
icons?: Record&lt;string, IconType&gt;; // 图标映射。
</Props>
````

- 每行只声明一个字段，格式为 `name[?]: type[ = default];`；必选字段不写 `?`。
- 默认值分隔符必须精确写成两侧带空格的 ` = `，不要写成 `boolean=true`。
- 默认值优先使用合法 JSON 字面量：字符串使用双引号，布尔值和数字不加引号。
- 说明使用字段上一行的单行 `/** ... */`，或字段末尾的 `// ...`；不要写多行注释。
- 泛型中的 `<`、`>` 写成 `&lt;`、`&gt;`，避免被 Markdown/Vue 当作标签解析。
- 类型、可选性和默认值必须来自公开类型与运行时默认值。复杂联合类型可另设类型章节，不要为了塞入表格而改写真实类型。

### 复杂 JS 与生命周期

优先使用声明式写法或 `<ZUI>`。实例的创建与销毁应跟随各自示例容器；标签切换可能卸载并重新挂载内容，不能只依赖整页的 `mounted` / `beforeUnmount`。只有在多个示例需要共享状态、绑定额外交互或调用命令式 API 时，才添加页面脚本。

下面的页面级写法适用于容器随整页挂载和卸载的情况。使用 `mounted` 等待客户端挂载，再用 `onZUIReady` 等待全局 ZUI；在卸载时销毁实例并清理副作用：

````md
<Example>
  <div id="menuExample"></div>
</Example>

<script>
export default {
    data() {
        return {
            menuExample: null,
            menuExampleDisposed: false,
        };
    },
    mounted() {
        this.menuExampleDisposed = false;
        onZUIReady(() => {
            if (this.menuExampleDisposed) {
                return;
            }
            this.menuExample = new zui.Menu('#menuExample', {
                items: [{text: '复制'}, {text: '粘贴'}],
            });
        });
    },
    beforeUnmount() {
        this.menuExampleDisposed = true;
        this.menuExample?.destroy();
        this.menuExample = null;
    },
};
</script>
````

- 示例 ID 必须唯一，并使用能体现组件和场景的名称；复制代码中的 JS 变量也要有独立名称或局部作用域，使多个示例同页运行时互不影响。
- 重新进入示例时，按约定恢复数据、选中状态和反馈文字；需恢复初始状态的数据按实例创建，避免重用已变更的共享对象，有意演示共享状态时明确其边界。持有实例引用的按钮在实例未就绪或销毁后不可继续调用它。
- `onZUIReady` 没有取消句柄；回调可能晚于示例卸载执行，必须用卸载标记阻止其继续创建实例。组件内部按需加载还有独立的就绪阶段，应使用其真实公开的就绪机制，并防止异步完成后操作已卸载容器。
- 同时清理自行创建的计时器、观察器、事件监听和挂到 `body` 的浮层等资源，释放外部实例引用；优先通过组件已有的销毁能力完成其拥有的资源清理。
- 同目录脚本只在目标文档已有该结构时沿用，并确认同步后的相对路径仍然有效。

### ZUI 声明式语法

按目的选择语法，不要把不同阶段的属性混用：

- 页面扫描时创建组件：`<div zui-create="fileSelector" data-mode="grid"></div>`。
- 复杂或多组件选项：`<div zui-create zui-create-list="{items: [...]}"></div>`；多个组件分别使用 `zui-create-<name>`。
- 由点击或悬停触发组件行为：`<button zui-toggle="dropdown" zui-toggle-dropdown="{items: [...]}">菜单</button>`。
- 声明全局事件：`<button zui-on-click="zui.Messager.show('已保存')">保存</button>`。
- `z-use`、`z-use-*` 在 vanilla 组件上是实例创建后的关联标记，不要把它们当作 `zui-create` 的替代写进初始化示例。
- `data-zui` 和 `data-on` 是弃用兼容语法；`data-toggle` 仅在目标组件仍明确保留该公开写法时展示。新文档优先使用对应的 `zui-*` 语法。

### 链接与资源

文档内部链接使用站点绝对路径；库内 assets 会同步到 `/assets/<name>/`：

````md
[菜单组件](/lib/components/menu/)
![示例图片](/assets/<name>/example.png)
````

不要使用依赖当前 Markdown 层级的多级相对路径。资源路径必须与同步后的 public 路径一致。

不要把开发页的 `html:example` 代码围栏写入官网文档；该语法只用于库的 `README.md` 调试页。

### 静态组件预览

每个可视组件库的标准封面是 `lib/<name>/assets/preview.html`，文件、视觉、主题与验收要求统一遵循[组件预览规范](component-preview.md)。官网复用该片段的构建期 include，维护 `docs/docs/lib/previews.md` 中的入口；它不替代可运行的 API 或交互示例。

## 质量检查

- 示例能在文档环境运行，依赖均已进入文档构建。
- 代码标签页不包含文档专用组件，并与预览区展示同一种公开用法和行为。
- 普通 JS 示例默认通过全局 `zui` 访问公开成员；模块导入只出现在明确说明模块化消费方式的章节，并按[接入验证](consumption.md#按变更验证)核实可复制代码的实际入口、类型和运行环境。
- 示例 ID 唯一，不污染全局，不留下计时器或监听器。
- 表格、默认值、事件参数和方法返回值与源码一致。
- 第一屏示例覆盖最常见路径，后续示例覆盖重要状态和边界。
- 交互组件说明键盘、焦点和必要 ARIA。
- 不泄露内部实现，不引用 `docs/_` 生成文件。

## 验证

涉及文档结构、示例依赖、资源或同步规则时，按共享工作流补充必要同步检查，例如：

```sh
pnpm docs:prepare -- --copy --build=no
```

接入路径或可复制示例变化时，按[源码与文档接入规范](consumption.md#按变更验证)验证对应消费环境；文档构建通过不代表代码块可以独立使用。纯文案修订使用对应文案或链接检查；只有相关风险需要时再运行 `pnpm docs:build`。文档生成物与缓存遵循 [共享工作流](workflow.md) 的验证隔离要求；`pnpm docs:dev` 仅在需要浏览器验证时按服务规则复用或启动，并按归属和用途管理。

### 示例验收

新增或改变可运行示例时，按受影响行为选择以下检查，复用已有有效结果；纯文案修订不套用整套浏览器验收：

- 直接提取文档代码块原文，或使用页面复制按钮，在只加载声明依赖的独立页面运行，不手写一份近似代码替代。普通浏览器示例不能借用 Vue、文档专用 CSS、文档页面脚本或其他示例数据；涉及复制控件或标签结构时，同时核对显示代码与实际复制内容。
- 分别检查预览与复制页面的初始状态、布局和核心交互结果；涉及布局时选择代表性的宽屏、窄屏，对照换行、截断、滚动及最终样式。固定列数或横向滚动可以是设计行为，不为通过窄屏检查擅自改成不同示例。
- 涉及多实例或共享状态时，将相关完整代码放在同一页运行，检查 ID、顶层变量、选择器和事件是否冲突，只出现示例明确演示的联动。
- 涉及生命周期时，覆盖标签切出再切回、站内离页再返回，检查旧实例销毁、状态恢复和残留浮层；涉及按需加载时再覆盖加载失败和加载中卸载，检查页面异常与资源请求。
- 替换初始化方式或移除旧脚本时，检索旧符号的调用方及 `tests/unit`、`tests/dom`、`tests/docs`、`tests/e2e` 中的相关测试，同步迁移行为断言并运行受影响检查。旧职责移交公共组件后，由其测试和文档交互回归覆盖，不保留对已删除实现的调用，也不只删除失败断言。

优先扩展已有相关回归；[Cards 文档测试](../../../../tests/docs/cards.spec.ts)可作为预览、复制页面和多例同页验收的参考，不要求每页照搬整个测试矩阵。新增持久测试应保护实际交互或消费契约，不为纯措辞或标签改名增加逐字匹配测试。
