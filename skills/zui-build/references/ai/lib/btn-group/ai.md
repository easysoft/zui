# 按钮组

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "btn-group",
  "summary": "将多个按钮连接成一组，支持数据驱动渲染与自定义项目。",
  "keywords": [
    "按钮组",
    "操作组",
    "BtnGroup"
  ]
}
```

## overview

CSS 可连接已有按钮；JS/Preact BtnGroup 基于 CommonList 渲染项目并共享按钮属性。普通工具条可选择 toolbar；组内菜单项需要额外 dropdown 接入。

## setup

workspace：主入口 `@zui/btn-group` 提供下述原生类和类型，`@zui/btn-group/react` 提供 Preact 组件（历史路径名不代表 React 支持）。JSX 需项目 Preact/TypeScript 配置；另加载 `@zui/base` 和 `@zui/btn-group` 的样式。browser：使用包含该库的 `zui` JS/CSS。npm：以目标发布包 `zui` / `zui/css` 的真实导出为准，不承诺独立子路径。本库 style 只导入 btn-group.css；必须另加载 @zui/button 的样式。下拉项目还需加载与注册 dropdown，不能只提供 items 就假定已接入。

## vanilla

### vanilla-btn-group

```json
{"name": "BtnGroup", "summary": "以原生构造器创建和更新组件。"}
```

`new BtnGroup(selector, options?)`；选项见下文类型条目。构造、初始化异步时序、实例关联、`render(options?)`、`destroy()`、事件与 `$` 视图 ref 继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；`$` 首次渲染前可能为 null。选项可结合 [ComponentOptions](../core/ai.md#types-component-options)。调用 destroy() 卸载 Preact 子树；宿主由调用者按需移除。

主入口登记 Preact BtnGroup；原生类源码未主动 register。选项同 Preact，额外实例操作经 `$` 访问 CommonList。

workspace（包含所需 CSS）：

```ts
import '@zui/base';
import '@zui/button';
import {BtnGroup} from '@zui/btn-group';
const host = document.createElement('div');
document.body.append(host);
const view = new BtnGroup(host, {items: [{text: '保存'}, {text: '取消'}]});
// 离开页面时：view.destroy(); host.remove();
```

## preact

### preact-btn-group

```json
{"name": "BtnGroup", "summary": "使用 CommonList 项目管线生成相连按钮。"}
```

默认根 tag 为 nav，NAME=btn-group。项目未给 type 时，包含 dropdown/items 的项目标为 dropdown，其余为 item；默认项目组件是 Button。共享 btnProps、btnType、size 合并到 item/dropdown，具体项后合并。完整通用列表参数与行为见 [CommonList](../common-list/ai.md#types-common-list-props)。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/button';
import '@zui/btn-group';
import {render} from 'preact';
import {BtnGroup} from '@zui/btn-group/react';
const host = document.createElement('div');
document.body.append(host);
render(<BtnGroup items={[{text: '保存'}, {text: '取消'}]} onClickItem={({item}: {item: {text?: unknown}}) => console.log(item.text)} />, host);
// 离开页面时：render(null, host); host.remove();
```

## web-components

无。

## css

### css-btn-group

```json
{"name": ".btn-group", "summary": "连接直接子按钮的边缘。", "role": "component"}
```

根 flex，间隔 1px；直接子 `.btn` 去掉内侧圆角并增加接缝边框。active 按钮 z-index=1，hover/focus-within 为2，disabled 为0。仅作用于直接子 .btn，额外包装层会改变效果。

browser（已加载本库 CSS）：

```html
<nav class="btn-group" aria-label="编辑操作"><button class="btn" type="button">保存</button><button class="btn" type="button">取消</button></nav>
```

## css-variables

无。

## javascript

无。

## types

### types-btn-group

```json
{"name": "BtnGroupOptions / BtnGroupItem", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | 否 | 无 | 传给按钮的统一尺寸 |
| `type` | `string` | 否 | 无 | 继承列表的额外选项；本实现无单独消费逻辑 |
| `btnType` | `string` | 否 | 无 | 传给按钮的统一外观类型 |
| `btnProps` | `Partial<ButtonProps>` | 否 | 无 | 按钮共享属性；具体项目属性随后合并并可覆盖 |

`BtnGroupOptions<T extends Item = BtnGroupItem>` 继承 CommonListProps<T>（完整参数见 [CommonList](../common-list/ai.md#types-common-list-props)，包括 items/itemProps/itemPropsMap/getItem/getItems/itemRender/beforeRenderItem/onClickItem/relativeTarget，以及 HElementProps）。`BtnGroupItem = (ButtonProps | DropdownButtonOptions) & Item`；按钮参数见 [Button](../button/ai.md#types-button-props)，下拉参数见 [Dropdown](../dropdown/ai.md#types-dropdown-button-options)。

## recipes

只需静态连接按钮时使用 CSS；有项目权限、过滤、动态点击信息时选择 BtnGroup 并使用 CommonList 的 getItem/onClickItem。

## constraints

本库不声明专有 CSS 变量，背景/边框/圆角由 button 与主题提供。连接外观不表示单选切换行为，active 状态与 aria-pressed 由应用维护。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/btn-group/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/btn-group/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/btn-group/docs/lib/components/index.md>)
- [源码 src/main-react.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/btn-group/src/main-react.ts>)
- [源码 src/types/index.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/btn-group/src/types/index.ts>)
- [源码 src/style/index.ts](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/btn-group/src/style/index.ts>)
