# 拖动排序

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "sortable",
  "summary": "异步加载 SortableJS，为 DOM、列表和树提供拖动排序。",
  "keywords": [
    "Sortable",
    "SortableList",
    "SortableTree",
    "排序",
    "拖拽"
  ]
}
```

## overview

给已有 DOM 或 List/Tree 提供拖动重排；底层 SortableJS 通过 LibLoader 异步加载。需要自由移动坐标或拖入任意目标时使用 [dnd](../dnd/ai.md)。

## setup

workspace 原生：`import {Sortable, SortableList, SortableTree} from '@zui/sortable';`；Preact：`@zui/sortable/react`。主入口加载本库样式；纯 /react 使用时需额外导入主入口样式副作用。底层资源名 sortablejs，默认路径 sortable/sortable.min.js，需正确配置 core setLibRoot 并部署对应资源，或预先提供全局 Sortable。browser 构建包含本库后使用 zui 同名类。包没有 /css 子入口。

## vanilla

### vanilla-sortable

```json
{"name": "Sortable", "summary": "包装 SortableJS，排序现有子元素。"}
```

`new Sortable(element,options?)` 继承 [Component](../core/ai.md#vanilla-component)，本库默认 animation=150ms，其他 SortableJS 选项透传；dragShadow 默认未设遵循原生，false 隐藏拖动影像，Element 指定影像。

初始化异步，module 可能 undefined。`Sortable.loadModule({noCache?:boolean}?)` 返回 Promise<SortableClass|undefined>，失败可用 noCache:true 重试；静态 Module 在未加载时不可用。预加载成功也要等待实例 module 建立后调用下表方法。

| 成员 | 参数、返回与行为 |
| --- | --- |
| module | SortableJS 实例，未就绪 undefined |
| option(name[,value]) | 获取/设置 SortableJS 选项；未就绪 no-op/undefined |
| closest(element:HTMLElement,selector?) | 最近匹配元素或 null；selector 默认 draggable |
| sort(order:readonly string[],useAnimation=false) | 按 dataIdAttr 值顺序调整 DOM；void |
| toArray() | 子项 dataIdAttr 字符串数组 |
| save() | 调用 SortableJS store.set；void |
| destroy() | 移除影像及 SortableJS 实例，然后销毁 Component |

closest/sort/save/toArray 要求 module 已就绪，否则可能抛错；不是自动等待方法。本库没有调用 Sortable.register()，自动属性接入须由应用显式注册。

workspace：

```ts
import {Sortable} from '@zui/sortable';
const list = document.createElement('ul');
list.innerHTML = '<li data-id="a">A</li><li data-id="b">B</li>';
document.body.append(list);
const moduleClass = await Sortable.loadModule();
if (moduleClass) {
    const sortable = new Sortable(list, {onEnd: event => console.log(event.oldIndex, event.newIndex)});
    // 页面卸载：sortable.destroy(); list.remove();
}
```

来源：[包装器](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/sortable/src/vanilla/sortable.ts>)。


### vanilla-sortable-list-tree

```json
{"name": "SortableList / SortableTree", "summary": "用原生构造器创建可排序列表或树。"}
```

两者继承 ComponentFromReact，构造参数 `(element,options)` 对应 [SortableListProps / SortableTreeProps](#types-sortable-views)，视图接口通过 .$ 访问。继承 List/Tree 的选项与方法，卸载时 destroy；本库未主动调用它们的 register。SortableTree 每个嵌套级别使用独立排序器，onSort 多出 parentKey。

workspace：

```ts
import {SortableList} from '@zui/sortable';
const host = document.createElement('div');
document.body.append(host);
const list = new SortableList(host, {items: [{key: 'a', text: 'A'}, {key: 'b', text: 'B'}], onSort: (_event, keys) => console.log(keys)});
// 页面卸载：list.destroy(); host.remove();
```

来源：[原生入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/sortable/src/vanilla/index.ts>)。

## preact

### preact-sortable-views

```json
{"name": "SortableList / SortableTree (Preact)", "summary": "在 List/Tree 上挂载排序器并返回新顺序。"}
```

从 @zui/sortable/react 导入；List/Tree 通用项和回调分别见 [List](../list/ai.md#preact)、[Tree](../tree/ai.md#preact)。sortable 默认为 true，false 禁用初始化，对象传 SortableOptions。dataIdAttr 默认 z-key，draggable 默认 .list-item 或 .tree-item；使用稳定且唯一的 key。

onSort(event,orders[,parentKey]) 报告 ItemKey[]；canSortTo(event,from,to[,parentKey]) 返回 false 拒绝、true 允许、-1/1 决定插入前后、undefined 使用默认判断。getOrders() 获取当前排列（需底层 module 就绪）。组件卸载自动销毁排序器。sortable 和处理函数在挂载时创建，更新配置应重新挂载，不假设 prop 更新会重建实例。

workspace/TSX：

```tsx
import {h, render} from 'preact';
import {SortableList, type SortableEvent} from '@zui/sortable/react';
import type {ItemKey} from '@zui/common-list';
import '@zui/sortable';
const host = document.createElement('div');
document.body.append(host);
render(<SortableList items={[{key: 'a', text: 'A'}, {key: 'b', text: 'B'}]} onSort={(_event: SortableEvent, keys: ItemKey[]) => console.log(keys)} />, host);
// 页面卸载：render(null, host); host.remove();
```

顺序持久化由应用负责，收到 onSort 后更新业务数据；单纯 DOM 位置改变不应当作数据源更新。

## web-components

无。

## css

### css-sortable-list

```json
{"name": "sortable-list", "summary": "可排序列表的内容和拖动影像样式。", "role": "js-component"}
```

.sortable-list 内 .listitem 设置 padding、canvas 背景与 move cursor；.sortable-ghost > .listitem 标记占位为 warning-50。依赖 List 的生成结构，不能单独构造一个同名 div 得到列表行为；.sortable-tree 是树根标记，本库无专门匹配规则。示例见 Preact 条目。来源：[样式](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/sortable/src/style/sortable-list.css>)。


### css-sortable-shadow

```json
{"name": "sortable-ghost / sortable-empty-shadow", "summary": "拖动占位和隐藏拖动影像辅助类。", "role": "helper"}
```

sortable-ghost 由底层 SortableJS 写入，占位规则限 .sortable-list；sortable-empty-shadow 由 dragShadow:false 创建，绝对定位、1px 且透明不可点击，onEnd/destroy 删除。不要当作公开布局工具类。

## css-variables

无自定义变量声明。颜色来自 base 的 canvas 与 warning-50 主题。

## javascript

无独立运行时函数。加载方法和 Module 访问器属于 Sortable 静态 API。

## types

### types-sortable-options

```json
{"name": "SortableOptions / SortableJSOptions / SortableEvent / SortableModule / SortableClass", "summary": "透传 SortableJS 参数并扩展拖动影像。"}
```

SortableJSOptions 是 sortablejs 的 Sortable.Options；SortableEvent 是底层事件类型，SortableModule 是实例，SortableClass 是构造器。SortableOptions 追加 dragShadow?:boolean|Element。

常用参数：group:string 或 {name,pull,put} 控制跨容器；sort:boolean 默认 true；disabled:boolean 默认 false；handle/draggable/filter 为 CSS selector；dataIdAttr 默认 data-id（List/Tree 改为 z-key）；animation:number 本包装默认150；ghostClass 默认 sortable-ghost，chosenClass 默认 sortable-chosen，dragClass 默认 sortable-drag；onStart/onEnd/onAdd/onUpdate/onRemove/onSort 回调接收 SortableEvent；onMove(event,originalEvent) 返回 boolean/-1/1/void 决定插入。事件包含 item/from/to、oldIndex/newIndex（可能 undefined）、clone。底层的完整扩展类型随依赖 sortablejs 版本提供，不推断插件已安装。

workspace：`import type {SortableOptions, SortableEvent} from '@zui/sortable';`。来源：[扩展选项](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/sortable/src/types/sortable-options.ts>)、[类型别名](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/sortable/src/types/sortablejs.ts>)。


### types-sortable-views

```json
{"name": "SortableListProps / SortableTreeProps / SortableListState / SortableTreeState", "summary": "可排序视图属性及继承状态。"}
```

```ts
export interface SortableListProps extends ListProps {
    sortable?: boolean | SortableOptions;
    onSort?: (event: SortableEvent, orders: ItemKey[]) => void;
    canSortTo?: (event: MoveEvent, from: Item, to: Item) => (boolean | -1 | 1 | void);
}
```

来源：[src/types/sortable-list-props.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/sortable/src/types/sortable-list-props.ts>)。

```ts
export interface SortableTreeProps extends TreeOptions {
    sortable?: boolean | SortableOptions;
    onSort?: (event: SortableEvent, orders: ItemKey[], parentKey: string | undefined) => void;
    canSortTo?: (event: MoveEvent, from: Item, to: Item, parentKey: string | undefined) => (boolean | -1 | 1 | void);
}
```

来源：[src/types/sortable-tree-props.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/sortable/src/types/sortable-tree-props.ts>)。

SortableListState 和 SortableTreeState 都是 ListState 别名。公共 ListProps、Item、ItemKey 见 [common-list 类型](../common-list/ai.md#types) 和 [List](../list/ai.md#types)，TreeOptions 见 [Tree](../tree/ai.md#types)。

## recipes

远程保存顺序：在 onSort 中取得稳定 keys，构造业务请求；失败时用原业务数组重绘或就绪后的 Sortable.sort 恢复顺序。不要用可视下标作跨层级的稳定 ID。

## constraints

异步资源未成功加载时不会建立可排序实例；调用前检查 module。没有自动更新后端/数组的行为，复杂嵌套移动需应用合并数据。工作区入口不等于发布 npm 包子入口。

## references

- [包入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/sortable/package.json>)
- [公开导出](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/sortable/src/main.ts>)
- [资源加载器](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/sortable/src/helper/sortable-loader.ts>)
