# 工具栏

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"toolbar","summary":"把按钮、下拉菜单、分隔线、弹性空白和按钮组组合成原生或 Preact 工具栏。","keywords":["工具栏","Toolbar","操作按钮","按钮组"]}
```

## overview

用于一行操作、表格头部工具和页面动作区。Toolbar 扩展 [btn-group](../btn-group/ai.md)，共享 [common-list](../common-list/ai.md) 的数据渲染契约。单按钮用 [button](../button/ai.md)；需要带页码的工具栏用 [pager](../pager/ai.md)。

## setup

workspace `@zui/toolbar` 导出原生 Toolbar、类型并加载样式与 Preact 注册；`@zui/toolbar/react` 导出 Preact Toolbar 与类型。无 `/css` 公开入口；仅使用 `/react` 时可另导入 `@zui/toolbar` 加载样式/注册。按钮、下拉及主题样式须随应用构建加载。browser 使用已包含 toolbar 及其依赖的全局 zui。JSX 使用 Preact 工作区配置，不推定其他 npm 子入口。

## vanilla

### vanilla-toolbar

```json
{"name":"Toolbar","summary":"在现有容器中创建数据驱动的操作工具栏。"}
```

`new Toolbar(selector, options?: Partial<ToolbarOptions>)`，选择器必须匹配现有容器。`render(options?, reset?): void` 更新；`$` 访问 Preact 工具栏；`destroy(): void` 卸载；`Toolbar.get(selector)` 取已存在实例。共享实例 API 与选项见 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)。

workspace：

```ts
import {Toolbar} from '@zui/toolbar';
const container = document.createElement('div');
document.body.append(container);
const toolbar = new Toolbar(container, {items: [
    {id: 'save', text: '保存', onClick: () => console.log('保存')},
    {type: 'space'},
    {id: 'help', text: '帮助', url: '/help'},
]});
// 页面卸载时：toolbar.destroy(); container.remove();
```

## preact

### preact-toolbar

```json
{"name":"Toolbar","summary":"以 ToolbarOptions 和条目数据渲染 nav 工具栏。"}
```

`@zui/toolbar/react` 导出类组件，默认根 nav、类 toolbar；默认 `btnProps.btnType = 'ghost'`。props、children、ref 及查询方法继承 [CommonList](../common-list/ai.md#preact-common-list)。状态由传入 items 和按钮选项控制；工具栏没有独立选择状态。

workspace：

```tsx
import {render} from 'preact';
import {Toolbar} from '@zui/toolbar/react';
import '@zui/toolbar';
const container = document.createElement('div');
document.body.append(container);
render(<Toolbar items={[{id: 'save', text: '保存'}]} />, container);
// 页面卸载时：render(null, container); container.remove();
```

## web-components

无。

## css

### css-toolbar

```json
{"name":".toolbar","summary":"可独立组合按钮的水平 flex 工具栏。","role":"component"}
```

`.toolbar` 为水平 flex、居中对齐、relative 定位。browser，已加载 toolbar/button 及主题 CSS：`<nav class="toolbar"><button class="btn" type="button">保存</button></nav>`。

### css-toolbar-parts

```json
{"name":".divider / .toolbar-space","summary":"工具栏中的分隔线和弹性空白。","role":"helper"}
```

`.toolbar > .divider` 为 1px 竖向分隔和外边距；`.toolbar-space` 为 1px 基础尺寸并 flex 自动伸展，放在工具栏内部推开两组动作。`.toolbar > .dropdown.show:not(.dropdown-menu)` 调整已展开下拉触发器布局；show 由下拉组件管理。工具栏没有自己的独立按钮皮肤。

## css-variables

无本库专有变量；按钮与分隔色消费基础主题及 button 变量。

## javascript

### javascript-toolbar-render

```json
{"name":"Toolbar.render","summary":"将数组、选项或工厂转换为 Preact 工具栏 VNode。"}
```

仅 Preact 类静态 `Toolbar.render<T extends unknown[]>(setting: ToolbarSetting<T> | undefined, args: T, defaultProps?: Partial<ToolbarOptions> & Attributes, thisObject?: unknown)`。函数 setting 以 args 调用；数组包装成 `{items}`；setting 覆盖 defaultProps；无 setting 返回 undefined，否则返回 VNode。同步，不修改业务数组。workspace：从 `@zui/toolbar/react` 导入 Toolbar 后使用 `Toolbar.render([{text: '保存'}], [])`；与原生实例 render 更新方法不同。

## types

### types-toolbar-options

```json
{"name":"ToolbarOptions","summary":"工具栏的完整专有选项及按钮组、列表继承契约。"}
```

`ToolbarOptions<T extends Item = ToolbarItemOptions> extends BtnGroupOptions<T>`；主入口和 `/react` 均导出。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `gap` | number 或 string | 否 | 无 | 非零数值输出 `gap-N` 类，需构建确有该工具类；字符串写 style.gap；数值 0 不生成额外样式 |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | 否 | 无 | 共享按钮尺寸 |
| `type` | string | 否 | 无 | 继承的通用配置字段；当前共享按钮属性由 btnType/btnProps 决定 |
| `btnType` | string | 否 | 无 | 共享按钮外观，覆盖 btnProps.btnType |
| `btnProps` | `Partial<ButtonProps>` | 否 | `{btnType: 'ghost'}` | 共享按钮配置，单项数据可覆盖 |

完整共享列表参数由 [CommonListProps](../common-list/ai.md#types-common-list-props) 提供：items、name/itemName/itemKey、itemProps/itemPropsMap、getItem/getItems、itemRender、beforeRenderItem、onClickItem、relativeTarget；根 DOM、children、命令和生命周期见 [HElementProps](../core/ai.md#types-helement-props)。本库不删减这些字段。items 无配置时为空数组，支持同步数组工厂；工具栏本身不加载 URL 数据。

未提供 item.type 时，有 dropdown 或 items 字段的条目被判为 dropdown，否则 item。`btn-group`/`btnGroup` 内部继承共享按钮 props；dropdown 和按钮组若未传 relativeTarget 会继承工具栏值。下拉渲染依赖 dropdown 的注册与资源，见 [dropdown](../dropdown/ai.md)。

### types-toolbar-items

```json
{"name":"ToolbarItemOptions / ToolbarSetting","summary":"工具栏条目的联合类型与动态设置。"}
```

| 导出类型 | 结构 / 用途 |
| --- | --- |
| `ToolbarBtnOptions` | `ButtonProps & Item`，普通按钮，text/icon/url/disabled/onClick 等见 ButtonProps |
| `ToolbarDropdownOptions` | `DropdownButtonOptions & Item`，下拉按钮及菜单 |
| `ToolbarDividerOptions` | `{type: 'divider'} & Item`，分隔线 |
| `ToolbarSpaceOptions` | `{type: 'space'} & Item`，弹性空白；可带 space/flex |
| `ToolbarBtnGroupOptions` | `{type: 'btn-group'} & BtnGroupOptions & Item`，嵌套按钮组 |
| `ToolbarAngleOptions` | `{type: 'angle'} & Item`，方向分隔图标 |
| `ToolbarItemOptions` | 上述六种联合 |
| `ToolbarSetting<T extends unknown[] = []>` | `ToolbarItemOptions[] \| ToolbarOptions \| ((...args: T) => ToolbarItemOptions[] \| ToolbarOptions)` |

共享 Item 字段见 [Item](../common-list/ai.md#types-item)，按钮选项见 [ButtonProps](../button/ai.md#types-button-props)，按钮组专有配置见 [btn-group](../btn-group/ai.md)。

## recipes

### recipe-toolbar-update

```json
{"name":"按业务状态更新操作","summary":"通过新 items 设置动作的禁用状态。"}
```

workspace，复用原生示例：`toolbar.render({items: [{id: 'save', text: '保存', disabled: true}]})`。不手动操作内部 `.disabled` 类；Button 会同步原生 disabled 与事件行为。

## constraints

- Toolbar 组织操作，不自动实现权限、请求状态或表单提交；由各按钮属性与回调决定。
- `gap` 数字值依赖真实 utility，不表示任意数值都有类；精确间距可使用 `'6px'`。
- 主入口没有 Web Component 标签。卸载原生实例或 Preact 子树以清理嵌套下拉资源。

## references

- [入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/toolbar/package.json>)、[Toolbar 实现](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/toolbar/src/component/toolbar.tsx>)、[原生包装](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/toolbar/src/vanilla/index.ts>)
- [选项](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/toolbar/src/types/toolbar-options.ts>)、[条目类型](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/toolbar/src/types/toolbar-item-options.ts>)、[样式](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/toolbar/src/style/toolbar.css>)
