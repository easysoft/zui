# 漂浮消息

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"messager","summary":"在页面固定位置展示可自动关闭的临时提示消息。","keywords":["漂浮消息","messager","Messager"]}
```

## overview

在页面固定位置展示可自动关闭的临时提示消息。

`Messager.show(textOrOptions,type?)` 创建/复用消息实例并显示，返回 Messager；container 默认为 body，默认 time=5000ms、placement=top、animation/close=true、margin=6px。time=0 关闭自动隐藏。`show(options?)` 合并选项，`hide()` 隐藏，`destroy()` 立即销毁持有的消息视图和节点。

内容继承 [Alert](../alert/ai.md#preact) 的参数，message 是内容别名；多种 type 可以在静态 TypeOptions 映射中配置。MessagerEvents 类型描述内部 MessagerItem 的 show/shown/hide/hidden 事件，外层 Messager 没有显式转发，不要把外层 on('hidden') 当作可靠完成通知。/react 导出的 MessagerItem 是展示组件，不包含外层自动关闭计时器和实例管理。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/messager`](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/messager/react`](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/messager` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-messager

```json
{"name":"Messager","summary":"创建和管理 Messager 原生实例。"}
```

入口：`import {Messager} from '@zui/messager';`。

构造、实例查询和选项/事件基础契约见 [Component](../core/ai.md#vanilla-component)。`setOptions` 合并参数不等于重建 DOM；本类特定方法如下。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

默认值（类内源码声明参考，不是独立脚本）：

```ts
static DEFAULT = {
        placement: 'top',
        animation: true,
        close: true,
        margin: 6,
        time: 5000,
    } as Partial<MessagerOptions>;
```

| 成员 | 签名与返回值 |
| --- | --- |
| `isShown` | `(): boolean` |
| `show` | `(options?: MessagerOptions \| undefined): void` |
| `hide` | `(): void` |
| `destroy` | `(): void` |
| `Messager.show` | `(options: string \| (MessagerOptions & { container?: string \| HTMLElement \| undefined; }), type?: string \| undefined): Messager` |

带类名前缀的是 static 方法；其余在实例/ref 上使用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {Messager} from '@zui/messager';

const instance = Messager.show({content: '保存完成', time: 3000});
// 所属页面退出时清理：instance.destroy();
```

来源：[Messager](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/src/vanilla/messager.ts>)。

## preact

### preact-messager-item

```json
{"name":"MessagerItem","summary":"渲染 MessagerItem Preact 视图。"}
```

入口：`import {MessagerItem} from '@zui/messager/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/messager';
import {MessagerItem} from '@zui/messager/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<MessagerItem content="保存完成" show={true} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[MessagerItem](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/src/component/messager-item.tsx>)。

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
| `.messagers` | 固定定位；`inset-0`（内部样式）；忽略指针命中；Flex 布局；`p-4`（内部样式）；纵向布局；`justify-end`（内部样式）；`items-end`（内部样式）；`z-messager`（内部样式）；`gap-2`（内部样式） |
| `.messagers-top-left, .messagers-top-right` | `justify-start`（内部样式） |
| `.messagers-top-left, .messagers-bottom-left` | `items-start`（内部样式） |
| `.messagers-center, .messagers-bottom, .messagers-top` | 交叉轴居中 |
| `.messagers-top, .messagers-top-left, .messagers-top-right` | `justify-start`（内部样式） |
| `.messagers-center` | 主轴居中 |
| `.messager` | `bg-inverse/80`（内部样式）；`text-canvas`（内部样式）；`backdrop-blur`（内部样式）；`shadow-xl`（内部样式）；`pointer-events-auto`（内部样式）；`duration-300`（内部样式） |

来源：[src/style/messager.css](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/src/style/messager.css>)。最小结构由前面的组件示例生成。
## css-variables

本库没有新增可配置的 CSS 变量声明。依赖组件的变量按其 [AI 索引](../../ai.md) 查找；外部主题变量的使用不等于由本库定义。

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-messager-placement

```json
{"name":"MessagerPlacement","summary":"定义 MessagerPlacement 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type MessagerPlacement = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'center';
```

来源：[MessagerPlacement](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/src/types/messager-placement.ts>)。

### types-messager-events

```json
{"name":"MessagerEvents","summary":"定义 MessagerEvents 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type MessagerEvents = {
    show: [];
    shown: [];
    hide: [];
    hidden: [];
};
```

来源：[MessagerEvents](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/src/types/messager-events.ts>)。

### types-messager-options

```json
{"name":"MessagerOptions","summary":"定义 MessagerOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface MessagerOptions extends AlertOptions {
    margin?: number;
    type?: string;
    placement?: MessagerPlacement;
    animation?: boolean | string;
    time?: number;
    html?: string;
    message?: CustomContentType;
}
```

来源：[MessagerOptions](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/src/types/messager-options.ts>)。

### types-messager-item-options

```json
{"name":"MessagerItemOptions","summary":"定义 MessagerItemOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface MessagerItemOptions extends MessagerOptions {
    show?: boolean;
}
```

来源：[MessagerItemOptions](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/src/types/messager-item-options.ts>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

`Messager.show(textOrOptions,type?)` 创建/复用消息实例并显示，返回 Messager；container 默认为 body，默认 time=5000ms、placement=top、animation/close=true、margin=6px。time=0 关闭自动隐藏。`show(options?)` 合并选项，`hide()` 隐藏，`destroy()` 立即销毁持有的消息视图和节点。

内容继承 [Alert](../alert/ai.md#preact) 的参数，message 是内容别名；多种 type 可以在静态 TypeOptions 映射中配置。MessagerEvents 类型描述内部 MessagerItem 的 show/shown/hide/hidden 事件，外层 Messager 没有显式转发，不要把外层 on('hidden') 当作可靠完成通知。/react 导出的 MessagerItem 是展示组件，不包含外层自动关闭计时器和实例管理。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/messager/docs/lib/components/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/.agents/skills/zui-standards/references/consumption.md>)
