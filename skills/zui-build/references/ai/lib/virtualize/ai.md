# 虚拟渲染

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "virtualize",
  "summary": "使用 TanStack Virtual 渲染大列表，提供原生、Preact 与无 UI 控制器。",
  "keywords": [
    "VirtualList",
    "虚拟列表",
    "动态高度",
    "RTL",
    "Virtualizer"
  ]
}
```

## overview

虚拟渲染长列表，只挂载可见项和 overscan 缓冲区；支持横向、RTL、多 lane 和动态尺寸。需要常规菜单/键盘导航行为时选 List/Menu，VirtualList 本身只负责布局和测量。

## setup

workspace：主入口 `@zui/virtualize` 导出原生 VirtualList 和控制器；`@zui/virtualize/react` 导出 Preact VirtualList；`@zui/virtualize/virtualizer` 导出无 UI 的控制器及底层类型，是可在 SSR 阶段导入的入口。主入口和 /react 依赖 core/DOM，不能由适配器的 SSR 安全性推导整个库 SSR 安全。VirtualList 自动带入 utilities 和自身样式。browser 构建包含库时使用 zui.VirtualList。

## vanilla

### vanilla-virtual-list

```json
{"name": "VirtualList", "summary": "以原生构造器创建虚拟列表。"}
```

继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)，`new VirtualList(element,props)`，必须 count、estimateSize、renderItem，并给视口明确高度（横向给宽度）。使用的 props 与 [Preact](#preact-virtual-list) 一致；构造器已经 register。

`virtualizer` 挂载后可用，之前 undefined；`scrollToIndex(index,options?)`、`scrollToOffset(offset,options?)`、`measure()` 均 void，未挂载时 no-op。options 为 `{align?:'start'|'center'|'end'|'auto',behavior?:'auto'|'smooth'|'instant'}`，具体以 ScrollToOptions 类型为准。通过 render(partialProps) 更新 count/renderItem；destroy() 释放视图及观察器。

workspace：

```ts
import {VirtualList} from '@zui/virtualize';
const host = document.createElement('div');
document.body.append(host);
const list = new VirtualList(host, {count: 10000, height: 320, estimateSize: () => 32, renderItem: item => `第 ${item.index + 1} 项`});
list.render();
list.scrollToIndex(100, {align: 'start'});
// 页面卸载：list.destroy(); host.remove();
```

来源：[原生类](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/virtualize/src/vanilla/virtual-list.ts>)。

## preact

### preact-virtual-list

```json
{"name": "VirtualList (Preact)", "summary": "按可见区创建 item 包装节点并测量尺寸。"}
```

基于 HElement 的 class 组件，公共选项见 [完整属性](#types-virtual-list-props)。

| 参数 | 类型 / 默认 | 用途 |
| --- | --- | --- |
| count | number，必填 | 总项数 |
| estimateSize | (index:number)=>number，必填 | 像素尺寸预估 |
| renderItem | (item:VirtualItem,virtualizer)=>ComponentChildren，必填 | 渲染项内容 |
| width / height | number或string，未设置 | 视口尺寸；否则必须由 CSS 约束 |
| dynamic | boolean，未设置即固定尺寸 | true 使用 ResizeObserver/measureElement |
| itemClassName | ClassNameLike，未设置 | 每项附加类 |
| itemStyle | CSSProperties或(item)=>CSSProperties | 每项外观；布局定位和主轴尺寸由列表控制 |
| overscan | number，底层默认1 | 可见范围两端额外项数 |
| horizontal / isRtl | boolean，底层默认false | 横向布局 / RTL 逻辑偏移 |
| getItemKey | (index)=>number或string或bigint，默认index | 数据重排时应返回稳定 ID |
| lanes | number，底层默认1 | 平行 lane 数 |
| onChange | (instance,sync:boolean)=>void，未设置 | 布局/滚动变化通知，不是业务 selection 事件 |

其余 TanStack 参数如 paddingStart/paddingEnd/scrollPaddingStart/scrollPaddingEnd/scrollMargin/gap 默认为0、enabled 默认为true；具体继承类型见适配器条目。根 role=list、tabIndex=0，项 role=listitem/aria-posinset/aria-setsize；不自动管理业务焦点或选中状态。

workspace/TSX：

```tsx
import {h, render} from 'preact';
import {VirtualList} from '@zui/virtualize/react';
const host = document.createElement('div');
document.body.append(host);
render(<VirtualList count={1000} height={300} estimateSize={() => 36} renderItem={item => <span>第 {item.index + 1} 行</span>} />, host);
// 页面卸载：render(null, host); host.remove();
```

实例 virtualizer 稳定，可 scrollToIndex/scrollToOffset/measure。horizontal/dynamic/estimateSize 改变会清测量并重新挂载包装节点；内容高度改变可调用 measure。组件自动 mount/update/destroy 控制器。来源：[实现](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/virtualize/src/component/virtual-list.tsx>)。

## web-components

无。

## css

### css-virtual-list

```json
{"name": "virtual-list / virtual-list-content / virtual-list-item", "summary": "虚拟列表视口、撑高容器和定位项。", "role": "js-component"}
```

均为 JS 生成结构：virtual-list 禁用 overflow-anchor，结合 relative overflow-auto；virtual-list-content 使用总尺寸撑开滚动空间；virtual-list-item 使用 border-box 和 inline 定位。布局依赖 JS 计算，不可只加类获得虚拟渲染。不要覆盖项的 transform/position/主轴尺寸。源码示例见 VirtualList。来源：[样式入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/virtualize/src/style/index.ts>)。

## css-variables

无。本库没有声明自定义 CSS 变量；通过 width/height/itemStyle 或容器 CSS 控制外观。

## javascript

### javascript-virtualizer-factories

```json
{"name": "createVirtualizer / createWindowVirtualizer / VirtualizerController", "summary": "创建不负责 DOM 渲染的虚拟布局控制器。"}
```

workspace 从 @zui/virtualize/virtualizer 导入：

```ts
import {createVirtualizer} from '@zui/virtualize/virtualizer';
const viewport = document.createElement('div');
viewport.style.cssText = 'height:300px;overflow:auto';
document.body.append(viewport);
const controller = createVirtualizer({count: 500, getScrollElement: () => viewport, estimateSize: () => 30, onChange: instance => console.log(instance.getVirtualItems())});
controller.mount();
// 应用根据 getVirtualItems()/getTotalSize() 提交 DOM 后调用 controller.update()。
// 卸载：controller.destroy(); viewport.remove();
```

`createVirtualizer<TScrollElement extends Element=HTMLElement,TItemElement extends Element=HTMLElement>(options:ElementVirtualizerOptions):VirtualizerController` 需要 count/getScrollElement/estimateSize，补齐 observeElementRect/observeElementOffset/scrollToFn；横向 RTL 自动转换负 scrollLeft。

`createWindowVirtualizer<TItemElement extends Element=HTMLElement>(options:WindowVirtualizerOptions):VirtualizerController` 默认 getScrollElement 返回当前 window（SSR 返回 null），默认初始偏移读取 scrollX/scrollY；补齐 window 观察与滚动函数。可覆盖这些默认适配方法。

Controller 的 instance 是稳定 Virtualizer；mount():void 开始观察，重复安全；update():void 在 DOM 提交后同步容器，mount 前 no-op；setOptions(options):void **替换全部用户选项**并重施默认值，随后需要 update；destroy():void 清理观察/监听/待执行滚动和元素缓存，幂等且终止，之后不能重新启用。构造器 `(options,resolveOptions)` 也公开，通常使用工厂以获得正确环境默认值。

这些 API 不创建列表 DOM，也不自动订阅框架；调用方负责虚拟项、总尺寸、动态 measureElement 和 DOM 提交时机。来源：[适配器](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/virtualize/src/virtualizer.ts>)。


### javascript-tanstack-virtualizer

```json
{"name": "Virtualizer / defaultRangeExtractor", "summary": "使用底层虚拟布局实例或默认范围算法。"}
```

从主入口或 /virtualizer 导出。Virtualizer(options) 要求完整 VirtualizerOptions（包含容器观察和 scrollToFn），通常用工厂返回的 instance。主要方法：getVirtualItems():VirtualItem[]、getTotalSize():number、scrollToIndex(index,options?)、scrollToOffset(offset,options?)、scrollBy(delta,options?)、measure():void（清缓存）、measureElement(element|null):void（登记/清理项节点）、resizeItem(index,size):void（显式尺寸）。不要同一项同时用测量和手工 resizeItem。

`defaultRangeExtractor(range:Range):number[]` 返回 startIndex/endIndex 加 overscan 并限定 0..count-1 的连续下标，供 rangeExtractor 扩展，例如保留粘性标题。Range 的字段 startIndex/endIndex/overscan/count 均 number。源码依赖固定 @tanstack/virtual-core 3.17.9；不把未导出的底层辅助函数假设为本库 API。

## types

### types-virtual-list-props

```json
{"name": "VirtualListProps", "summary": "列表渲染属性及继承的虚拟器配置。"}
```

```ts
export type VirtualListProps = Omit<HElementProps, 'onChange'> & Omit<ElementVirtualizerOptions, 'getScrollElement'> & {
    renderItem: (item: VirtualItem, virtualizer: Virtualizer<HTMLElement, HTMLElement>) => ComponentChildren;
    width?: number | string;
    height?: number | string;
    dynamic?: boolean;
    itemClassName?: ClassNameLike;
    itemStyle?: JSX.CSSProperties | ((item: VirtualItem) => JSX.CSSProperties);
};
```

来源：[src/types/virtual-list-props.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/virtualize/src/types/virtual-list-props.ts>)。

HElementProps 见 [core](../core/ai.md#types-helement-props)；本组件占用 onChange 为虚拟器通知，且自己提供 getScrollElement。


### types-virtualizer

```json
{"name": "ElementVirtualizerOptions / WindowVirtualizerOptions / VirtualItem / VirtualizerOptions / Rect / Range / ScrollToOptions", "summary": "无 UI 适配器及测量数据类型。"}
```

ElementVirtualizerOptions<TScrollElement,TItemElement> 是 VirtualizerOptions 把 observeElementRect/observeElementOffset/scrollToFn 设为可选；WindowVirtualizerOptions<TItemElement> 额外把 getScrollElement 设为可选。

VirtualItem：key:number|string|bigint、index:number、start/end/size:number（像素）、lane:number；Rect：width/height:number；Range：startIndex/endIndex/overscan/count:number；ScrollToOptions：align、behavior。VirtualizerOptions 除主要参数外还支持 rangeExtractor、initialRect、initialOffset、measureElement、indexAttribute、scrollToFn、观察器与滚动结束检测设置，遵循安装的 TanStack 类型。

从 /virtualizer 导入这些底层类型；主入口只额外 re-export ElementVirtualizerOptions/WindowVirtualizerOptions，不能假设 VirtualItem 等也在主入口导出。workspace：`import type {VirtualItem, ScrollToOptions, ElementVirtualizerOptions} from '@zui/virtualize/virtualizer';`。

## recipes

动态高度：设 dynamic=true、estimateSize 返回合理上限估计，renderItem 返回自然高度内容；高度异步变化由 ResizeObserver 测量。数据顺序变化时用 getItemKey 稳定标识；视口隐藏时不要期待立即取得正确尺寸，显示后 measure。

## constraints

DOM 之外的项并未挂载，不能依赖 querySelector 查询所有行。虚拟布局不内置分页请求、搜索或选中模型。动态尺寸与平滑滚动的精确定位取决于测量收敛，业务应验证实际内容。

## references

- [包入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/virtualize/package.json>)
- [公开导出](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/virtualize/src/main.ts>)
- [适配器](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/virtualize/src/virtualizer.ts>)
- [组件](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/virtualize/src/component/virtual-list.tsx>)
