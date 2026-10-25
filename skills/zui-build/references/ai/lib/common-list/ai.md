# 通用列表

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"common-list","summary":"提供数据条目到 Preact 视图的通用列表基类与原生包装，统一键、条目转换、自定义渲染和点击回调。","keywords":["通用列表","CommonList","列表基类","条目渲染"]}
```

## overview

用于构造自定义列表、工具栏等数据驱动 UI。CommonList 不提供列表皮肤、异步加载、复选和嵌套；这些能力见 [list](../list/ai.md)。本库也是 list、btn-group、toolbar 等库的公共参数来源。

## setup

workspace：`@zui/common-list` 导出原生 CommonList 和类型，并注册原生及 Preact 组件；`@zui/common-list/react` 导出 Preact CommonList 和类型。没有 `/css` 入口或本库样式。JSX 需工作区别名、TypeScript 和 Preact 配置。browser 全局 `zui.CommonList` 需构建包含本库；不推定独立 npm 包或其他子路径。

## vanilla

### vanilla-common-list

```json
{"name":"CommonList","summary":"把条目数据渲染到现有 DOM 容器，并通过 render 更新。"}
```

`new CommonList(selector, options?: Partial<CommonListProps>)`；selector 为现有元素或选择器，不存在或重复实例化会报错。使用 ul 容器时可替换该节点，普通 div 容器内渲染 ul。参数见 [types-common-list-props](#types-common-list-props)。

workspace：

```ts
import {CommonList} from '@zui/common-list';
const container = document.createElement('div');
document.body.append(container);
const list = new CommonList(container, {items: [{id: 'status', type: 'text', text: '已就绪'}]});
list.render({items: [{id: 'status', type: 'text', text: '已完成'}]});
// 页面卸载时：list.destroy(); container.remove();
```

`render(options?, reset?): void` 合并配置并渲染；`$` 是 Preact 实例或 null；`destroy(): void` 卸载子树；`CommonList.get(selector)` 查找现有实例。其他方法、事件和包装选项见 [Component](../core/ai.md#vanilla-component)、[ComponentFromReact](../core/ai.md#vanilla-component-from-react)。

## preact

### preact-common-list

```json
{"name":"CommonList","summary":"可继承的 Preact 列表视图，支持条目渲染器和稳定键。"}
```

入口 `@zui/common-list/react`。默认根标签 ul、条目 li、`itemKey: 'id'`。children 追加在数据条目后。`ref` 接收类组件实例，以下方法也可通过原生包装 `$` 使用：

| 方法/属性 | 参数 | 返回/行为 |
| --- | --- | --- |
| `getItems()` | 无 | 当前原始 Item[] |
| `getItem(key)` | string | 原始条目或 undefined |
| `getRenderedItem(key)` | string | 转换后的条目或 undefined |
| `getItemIndex(key)` | string | 索引，未找到为 -1 |
| `getItemByIndex(index)` | number | 原始条目或 undefined |
| `getKey(index)` | number | 渲染条目 key 或 undefined |
| `name` / `itemName` | 无 | 根/条目类名前缀 |
| `resetState(props?, init?)` | 当前 props、boolean | 重置 HElement 状态并更换条目渲染键；void |

静态扩展点 `NAME`、`ITEM_NAME`、`TAG`、`ItemComponents`、`defaultItemType`、`defaultItemProps`、`defaultItemPropsMap`、`defaultProps` 用于派生类。`ItemComponents` 按 type 选 Preact 组件，可为组件本身或 `[组件, 默认属性/默认属性函数]`；未注册的 type 使用 default/HElement，显式 item.tag/component 可由 CustomContent 渲染。

workspace：

```tsx
import {render} from 'preact';
import {CommonList} from '@zui/common-list/react';
const container = document.createElement('div');
document.body.append(container);
render(<CommonList items={[{id: 'one', type: 'text', text: '第一项'}]} />, container);
// 页面卸载时：render(null, container); container.remove();
```

## web-components

无。组件注册不是自定义元素注册。

## css

无。组件按 name/type 输出类名，但本库不定义 CSS 规则；不要把输出类名当作有独立视觉效果的工具类。

## css-variables

无。

## javascript

无独立工具导出；类的查询方法和扩展点见 [preact-common-list](#preact-common-list)。

## types

### types-common-list-props

```json
{"name":"CommonListProps / ItemRender / ItemsSetting","summary":"所有通用列表派生组件共享的数据、转换、渲染和事件参数。"}
```

入口主包或 `/react` 的类型导出。`CommonListProps<T extends Item = Item> extends HElementProps`；下列均可省略。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `name` | string | 否 | 类的 NAME | 根类名及条目 `name-type` 前缀 |
| `itemName` | string | 否 | `'item'` | 每个条目的公共类 |
| `itemKey` | string | 否 | `'id'` | 从数据字段取 key，再回退 item.key、索引并转字符串 |
| `items` | unknown，CommonList 实际接受 `T[] \| (() => T[])` | 否 | `[]` | 函数在实例上下文同步调用；非数组非函数视为 []，不等待 Promise |
| `itemProps` | `Partial<T>` | 否 | 无 | 所有条目默认属性 |
| `itemPropsMap` | `Partial<Record<ItemType, Partial<T>>>` | 否 | `{}` | 按 type 的默认属性 |
| `getItem` | `(item: T, index: number) => T \| false \| undefined` | 否 | 无 | 合并后转换；false 跳过，undefined 保留 |
| `getItems` | `(items: T[]) => T[] \| undefined` | 否 | 无 | 转换整个数组；undefined 保留 |
| `itemRender` | `ItemRender<T> \| Record<ItemType, ItemRender<T>>` | 否 | 无 | 自定义内容；返回 undefined 才继续默认渲染 |
| `beforeRenderItem` | `(item: T, index: number) => T \| void` | 否 | 无 | 渲染前转换；返回对象替换当前条目 |
| `onClickItem` | `(info: {item: T; index: number; event: MouseEvent; renderedItem: T; relativeTarget?: unknown}) => void` | 否 | 无 | 根部委托点击，先调用此回调再调用原始 item.onClick |
| `relativeTarget` | unknown | 否 | 无 | 原样附带到点击信息 |

`ItemRender<T> = (item: T, index: number) => CustomContentType`；`ItemsSetting<T> = T[] | (() => T[])`。回调一般以 Preact 列表实例为 this。参数合并次序：类公共默认 → 类 type 默认 → itemProps → itemPropsMap[type] → 生成类名 → 单项数据 → 规范化 key/内部字段。`getItem` 位于合并后；`beforeRenderItem` 位于渲染器选择前。

所有 [HElementProps](../core/ai.md#types-helement-props) 继续可用，包括 tag/component、className、attrs/style、children、ref、命令、语言和生命周期。CommonList 不屏蔽继承字段。

### types-item

```json
{"name":"Item / ItemKey / ItemType","summary":"通用条目和键的基础契约，供列表、菜单与工具栏复用。"}
```

`ItemKey = string`；`ItemType = 'item' | 'divider' | 'space' | string`。`Item extends HElementProps`，增加 `type?: ItemType`、`key?: string`、`onClick?: (event: MouseEvent, data?: unknown) => void` 和任意业务字段 `[key: string]: unknown`。业务 id 可为数值，渲染时转为字符串 key。

CommonList 预置 `text`（text 包裹到 span.text）、`divider`（分隔元素）、`space`（space 设置宽高，flex 设置弹性）。普通 item 并不自动把 `text` 变成文字，使用 text 类型、children、tag/component 或 itemRender；需要丰富文本/图标条目请用 Listitem。

## recipes

### recipe-custom-item

```json
{"name":"转换业务数据","summary":"使用 getItem 与 itemRender 适配字段，并保留稳定 id。"}
```

workspace：`new CommonList(container, {items: [{id: 'a', label: '项目 A'}], getItem: item => ({...item, type: 'text', text: item.label})})`；container 的创建与清理见原生示例。点击阻止导航应调用 `info.event.preventDefault()`，返回 false 不是本回调定义的取消协议。

## constraints

- items 工厂是同步协议；异步来源使用 List 或由调用方拿到数组后 render。
- 条目 DOM 由 Preact 管理；不手动重排或改写 `[z-item]`、`[z-key]` 等内部关联属性。
- key 应唯一稳定；过滤后读取未渲染项可能得到 undefined。
- 本库没有默认样式、角色或完整键盘菜单行为，消费方应按用途补齐。

## references

- [公开入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/common-list/package.json>)、[CommonList 实现](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/common-list/src/component/common-list.tsx>)
- [原生包装](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/common-list/src/vanilla/common-list.ts>)、[类型](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/common-list/src/types/common-list-props.ts>)、[Item](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/common-list/src/types/item.ts>)
