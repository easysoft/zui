# ZUI 正式文档规范

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

- 可视示例使用 `<Example>`。
- 示例与代码切换使用 `::: tabs`。
- 属性表使用 `<Props>`，并确保数据来自真实类型。
- 需要加载库时使用 `<ZUI use="...">`。
- 复杂 JS 示例按现有文档使用 mounted/onZUIReady 或同目录脚本。
- 声明式示例优先展示当前支持的 `zui-create`/`z-use-*`，不要把过时写法作为首选。
- 文档内部链接使用站点绝对路径；资源路径与文档同步后的 public 路径一致。

不要把开发页的 `html:example` 代码围栏写入官网文档；该语法只用于库的 `README.md` 调试页。

## 质量检查

- 示例能在文档环境运行，依赖均被加载。
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
