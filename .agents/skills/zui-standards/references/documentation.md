# ZUI 正式文档规范

## 目录

- [文件位置](#文件位置)
- [事实来源](#事实来源)
- [页面结构](#页面结构)
- [官网示例语法](#官网示例语法)
- [质量检查](#质量检查)
- [验证](#验证)

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

写作前阅读：

- `package.json` 与 `src/main.ts`；
- 公开 types、component、vanilla、style 和 i18n；
- `README.md` 与 `dev.ts`；
- 现有正式文档；
- 两个相似成熟库的正式文档。

从源码提取 options/props、默认值、事件、方法、类型、CSS 类/变量、引入路径和消费方式。不要根据命名猜测，不记录内部或未导出的 API。若源码和文档目标冲突，只修改文档无法解决时，报告差异而不是越界改代码。

## 页面结构

第一屏应让读者快速理解用途并运行最小示例：

1. 标题和一句用途说明；
2. 基础用法与可运行示例；
3. 必要的依赖或引入方式。

随后按实际内容组织：

- 常用场景与视觉/行为变体；
- HTML/CSS、Preact、vanilla、`zui-create`/toggle 等真实消费方式；
- options/props 与默认值；
- 事件、方法和类型；
- CSS 类与 `--<component>-*` 变量；
- 无障碍、限制和关联组件。

不为不存在的 API 保留空章节。中文应简洁、动作明确，代码命名保持英文。

## 官网示例语法

`<Example>`、`<ZUI>` 和 `<Props>` 是官网 Markdown 的渲染语法，不是 ZUI 面向用户的公开 API。代码标签页必须展示用户实际可复制的 HTML、JS、Preact 或 vanilla 写法，不要把这些文档组件放入用户代码。

### 示例与代码标签页

同时展示运行结果和源码时使用以下结构。`示例` 放在首个标签；根据真实消费方式保留或增加 `HTML`、`JS`、`Preact` 等标签。

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
- 官网示例和用户代码使用 `@zui/utilities` 实际公开的无前缀类名，例如 `flex`、`gap-4`、`p-4`。前导 `-` 是 CSS 源码中 `@apply` Tailwind utility 的内部写法；不要假设每个 Tailwind utility 都有公开的无前缀别名。
- 示例自身的布局类只服务于展示，不要混入用户复制的代码。

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

优先使用声明式写法或 `<ZUI>`。只有在多个示例需要共享状态、绑定额外交互或调用命令式 API 时，才添加页面脚本。使用 `mounted` 等待客户端挂载，再用 `onZUIReady` 等待全局 ZUI；在卸载时销毁实例并清理副作用：

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

- 页面内的示例 ID 必须唯一，并使用能体现组件和场景的名称。
- `onZUIReady` 没有取消句柄；回调可能晚于页面卸载执行，必须用卸载标记阻止其继续创建实例。
- 同时清理自行创建的计时器、观察器以及绑定到 `window`、`document` 的监听器。
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

## 质量检查

- 示例能在文档环境运行，依赖均已进入文档构建。
- 代码标签页不包含文档专用组件，并与预览区展示同一种公开用法和行为。
- 示例 ID 唯一，不污染全局，不留下计时器或监听器。
- 表格、默认值、事件参数和方法返回值与源码一致。
- 第一屏示例覆盖最常见路径，后续示例覆盖重要状态和边界。
- 交互组件说明键盘、焦点和必要 ARIA。
- 不泄露内部实现，不引用 `docs/_` 生成文件。

## 验证

优先运行：

```sh
pnpm docs:prepare -- --copy --build=no
```

根据修改风险再运行 `pnpm docs:build`。`pnpm docs:dev` 是持续进程，只在需要浏览器验证时启动，并在完成后结束。
