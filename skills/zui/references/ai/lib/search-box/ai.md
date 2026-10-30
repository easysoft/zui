# 搜索框

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"search-box","summary":"提供带图标、清空按钮、延迟通知与键盘操作的搜索输入框。","keywords":["搜索框","search-box","SearchBox"]}
```

## overview

提供带图标、清空按钮、延迟通知与键盘操作的搜索输入框。

默认 delay=500ms（onChange 防抖）、searchIcon/clearIcon/hotkeys=true。value 为受控值，defaultValue 初始化内部状态；受控使用方在 onChange 回写 value。等待防抖通知期间保留输入草稿，回写上一次通知值不会覆盖更新的草稿；外部传入不同的新值会替换草稿并取消旧的待执行通知，输入法组合期间延后到组合结束再应用。onChange 保留原始输入字符串，不自动 trim，Enter 调用 onEnter，清除立即取消等待并触发 onClear，再对非空旧值触发 onChange('',event)。disabled/readonly 下不执行清除。

视图公开 id/input getter 及 focus/blur/clear；vanilla 通过实例 `$` 访问。compact/circle/mergeIcon 和前后缀类影响外观，底层依赖 input-control；不会自动发起搜索请求。卸载清理防抖计时器和 hotkeys。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/search-box`](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/search-box/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/search-box/react`](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/search-box/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/search-box` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-search-box

```json
{"name":"SearchBox","summary":"创建和管理 SearchBox 原生实例。"}
```

入口：`import {SearchBox} from '@zui/search-box';`。

构造 `new SearchBox(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {SearchBox} from '@zui/search-box';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new SearchBox(host, {placeholder: '搜索', onChange: value => console.log(value)});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[SearchBox](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/search-box/src/vanilla/search-box.ts>)。

## preact

### preact-search-box

```json
{"name":"SearchBox","summary":"渲染 SearchBox Preact 视图。"}
```

入口：`import {SearchBox} from '@zui/search-box/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps: Partial<SearchBoxOptions> = {
        clearIcon: true,
        searchIcon: true,
        delay: 500,
        hotkeys: true,
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `id` | `(): string` |
| `input` | `(): HTMLInputElement \| null` |
| `focus` | `(): void` |
| `blur` | `(): void` |
| `clear` | `(event?: Event \| undefined): void` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/search-box';
import {SearchBox} from '@zui/search-box/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<SearchBox placeholder="搜索" onChange={value => console.log(value)} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[SearchBox](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/search-box/src/components/search-box.tsx>)。

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
| `.search-box .form-control` | `outline-offset-0`（内部样式） |

来源：[src/style/search-box.css](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/search-box/src/style/search-box.css>)。最小结构由前面的组件示例生成。
## css-variables

### css-variables-config

```json
{"name":"CSS 变量","summary":"配置本库主题、尺寸和状态外观。"}
```

下表按实际声明节点列出默认表达式。主题颜色、圆角等上游变量见 [base](../base/ai.md) 与 [utilities](../utilities/ai.md#css-variables)；在表中所列实际节点覆盖，避免祖先值被组件同名声明盖过。长度按 CSS 单位、颜色按 CSS 颜色/渐变，opacity 为 0–1，duration/delay 为时间。

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--input-control-prefix` | `24px` | 尺寸/间距长度 | `.search-box.compact.has-prefix-icon` | `.search-box.compact.has-prefix-icon` 的实际匹配元素 |
| `--input-control-suffix` | `24px` | 尺寸/间距长度 | `.search-box.compact.has-suffix-icon` | `.search-box.compact.has-suffix-icon` 的实际匹配元素 |

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-search-box-options

```json
{"name":"SearchBoxOptions","summary":"定义 SearchBoxOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type SearchBoxOptions = {
    id?: string;
    name?: string;
    compact?: boolean;
    className?: ClassNameLike;
    rootClass?: ClassNameLike;
    rootStyle?: JSX.CSSProperties;
    circle?: boolean;
    style?: JSX.CSSProperties;
    delay?: number;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearIcon?: boolean | IconType;
    searchIcon?: boolean | IconType;
    mergeIcon?: boolean | IconType;
    prefixClass?: ClassNameLike;
    suffixClass?: ClassNameLike;
    hotkeys?: HotkeysSettings;
    onChange?: (value: string, event: Event | undefined) => void;
    onEnter?: (value: string, event: Event | undefined) => void;
    onClear?: (event: Event | undefined) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
};
```

来源：[SearchBoxOptions](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/search-box/src/types/search-box-options.ts>)。

### types-search-box-state

```json
{"name":"SearchBoxState","summary":"定义 SearchBoxState 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type SearchBoxState = {
    focus: boolean;
    value: string;
};
```

来源：[SearchBoxState](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/search-box/src/types/search-box-state.ts>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

清空按钮具有可访问名称，跟随 `@zui/core` 的全局 `i18n` 语言（`zh_cn`／`zh_tw`／`en`，其他语言回退英文）。可通过 `i18n.addLang({zh_cn: {searchBox: {clear: '清空搜索'}}})` 覆盖名称；`i18n.setCode()` 不主动重绘已挂载组件，新语言在下一次渲染时生效。输入框本身仍需调用方通过 `id` 与外部 `<label>` 关联。

默认 delay=500ms（onChange 防抖）、searchIcon/clearIcon/hotkeys=true。value 为受控值，defaultValue 初始化内部状态；受控使用方在 onChange 回写 value。等待防抖通知期间保留输入草稿，回写上一次通知值不会覆盖更新的草稿；外部传入不同的新值会替换草稿并取消旧的待执行通知，输入法组合期间延后到组合结束再应用。onChange 保留原始输入字符串，不自动 trim，Enter 调用 onEnter，清除立即取消等待并触发 onClear，再对非空旧值触发 onChange('',event)。disabled/readonly 下不执行清除。

视图公开 id/input getter 及 focus/blur/clear；vanilla 通过实例 `$` 访问。compact/circle/mergeIcon 和前后缀类影响外观，底层依赖 input-control；不会自动发起搜索请求。卸载清理防抖计时器和 hotkeys。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/search-box/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/search-box/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/search-box/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/search-box/docs/lib/components/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/.agents/skills/zui-standards/references/consumption.md>)
