# 上下文菜单

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"contextmenu","summary":"在鼠标右键位置展示上下文菜单，复用 Dropdown 的菜单和浮层行为。","keywords":["上下文菜单","contextmenu","ContextMenu"]}
```

## overview

在鼠标右键位置展示上下文菜单，复用 Dropdown 的菜单和浮层行为。

继承 [Dropdown](../dropdown/ai.md#vanilla-dropdown) 的完整选项、菜单及生命周期，覆盖 `name='contextmenu'`、`trigger='contextmenu'`。默认用触发鼠标事件的 clientX/clientY 建立虚拟定位；显式 `element` 可改为目标定位。不能不带鼠标事件就依赖默认坐标定位；程序调用时传 `event`。遮罩逻辑忽略打开菜单的同一个事件，后续外部点击关闭。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/contextmenu`](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/contextmenu/src/main.ts>) 公开原生组件和相应类型。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/contextmenu` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-context-menu

```json
{"name":"ContextMenu","summary":"创建和管理 ContextMenu 原生实例。"}
```

入口：`import {ContextMenu} from '@zui/contextmenu';`。

构造、实例查询和选项/事件基础契约见 [Component](../core/ai.md#vanilla-component)。`setOptions` 合并参数不等于重建 DOM；本类特定方法如下。

继承 [Dropdown](../dropdown/ai.md#vanilla-dropdown)，下列是当前类新增或覆盖的成员。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

默认值（类内源码声明参考，不是独立脚本）：

```ts
static DEFAULT: Partial<ContextMenuOptions> = {
        ...Dropdown.DEFAULT,
        name: 'contextmenu',
        trigger: 'contextmenu',
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `handleClickOutside` | `(event: MouseEvent): void` |

带类名前缀的是 static 方法；其余在实例/ref 上使用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {ContextMenu} from '@zui/contextmenu';

const host = document.createElement('button');
host.textContent = '操作';
document.body.append(host);
const instance = new ContextMenu(host, {items: [{text: '刷新', onClick: () => console.log('refresh')}]});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[ContextMenu](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/contextmenu/src/vanilla/contextmenu.ts>)。

## preact

无。

## web-components

无。公开入口未提供本库的自定义元素标签；Preact 注册或 `z-use-*` 自动初始化不等于 Web Components。

## css

### css-structure

```json
{"name": "结构与部件", "summary": "定义根节点和内部部件的样式。", "role": "js-component"}
```

选择器保留父子和同节点条件；生成部件由组件维护，不能仅添加类获得 JavaScript 行为。下表中标记“内部样式”的 token 仅说明 CSS 实现，不是额外公开类。

| 选择器或部件 | 功能/样式契约 |
| --- | --- |
| `.contextmenu` | 隐藏 |
| `.contextmenu.popup, .contextmenu .popup .popup` | 绝对定位 |

来源：[src/style/contextmenu.css](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/contextmenu/src/style/contextmenu.css>)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.contextmenu.show` | 块级显示 |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
## css-variables

本库没有新增可配置的 CSS 变量声明。依赖组件的变量按其 [AI 索引](../../ai.md) 查找；外部主题变量的使用不等于由本库定义。

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-context-menu-options

```json
{"name":"ContextMenuOptions","summary":"定义 ContextMenuOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ContextMenuOptions = DropdownOptions;
```

来源：[ContextMenuOptions](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/contextmenu/src/types/contextmenu-options.ts>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

继承 [Dropdown](../dropdown/ai.md#vanilla-dropdown) 的完整选项、菜单及生命周期，覆盖 `name='contextmenu'`、`trigger='contextmenu'`。默认用触发鼠标事件的 clientX/clientY 建立虚拟定位；显式 `element` 可改为目标定位。不能不带鼠标事件就依赖默认坐标定位；程序调用时传 `event`。遮罩逻辑忽略打开菜单的同一个事件，后续外部点击关闭。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/contextmenu/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/contextmenu/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/contextmenu/docs/lib/components/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/.agents/skills/zui-standards/references/consumption.md>)
