# 卡片

## meta

```json
{"schemaVersion":1,"library":"cards","summary":"提供 Card 与 CardList，组合标题、正文、动作、嵌入列表和卡片网格。","keywords":["卡片","Card","CardList","网格"]}
```

## overview

单条内容用 Card；数据列表用 CardList，继承 List 的加载、选择和分批显示。纯 HTML 可直接使用卡片 CSS。

## setup

workspace 主入口 `@zui/cards` 导出原生 Card/CardList、类型、注册与样式；`@zui/cards/react` 导出 Preact Card/CardList 与类型；`@zui/cards/css` 只加载样式。CardItem 文件存在但未从 component/index 导出，不作为独立公共组件。依赖主题、avatar/list/toolbar 等按所用内容加载。browser 构建包含 cards 后使用 zui.Card/zui.CardList。

## vanilla

### vanilla-cards

```json
{"name":"Card / CardList","summary":"把单卡片或卡片集合渲染进现有 DOM 容器。"}
```

`new Card(selector, options?: Partial<CardProps>)`、`new CardList(selector, options?: Partial<CardListProps>)`。selector 必须匹配现有元素；Card 默认替换宿主，CardList 在容器内渲染。render(options?,reset?) 更新，$ 为视图实例，destroy 卸载，类的 get(selector) 取已有实例；继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)。

workspace：

```ts
import {Card, CardList} from '@zui/cards';
const single = document.createElement('div');
const group = document.createElement('div');
document.body.append(single, group);
const card = new Card(single, {title: '项目', content: '说明'});
const cards = new CardList(group, {countPerRow: 2, items: [{id: 'a', title: 'A'}, {id: 'b', title: 'B'}]});
// 页面卸载时：card.destroy(); cards.destroy(); single.remove(); group.remove();
```

## preact

### preact-cards

```json
{"name":"Card / CardList","summary":"Preact 卡片和 List 派生的卡片网格。"}
```

workspace（需配置工作区别名、TypeScript 与 Preact JSX）：

```tsx
import {render} from 'preact';
import {CardList} from '@zui/cards/react';
import '@zui/cards/css';
const container = document.createElement('div');
document.body.append(container);
render(<CardList countPerRow={2} items={[{id: 'a', title: 'A'}]} />, container);
// 页面卸载时：render(null, container); container.remove();
```
Card 使用 CardProps，可将上例改为 `<Card title="标题" content="说明" />` 并导入 Card。Card ref 为类实例，继承 HElement，selected 由调用方传入；CardList ref 为 List 派生类，方法见 [List](../list/ai.md#preact-list)。children 在卡片已有区域后追加。CardList 默认 div 根和 div 条目，countPerRow 非零时输出 card-grid。

## web-components

无。

## css

### css-card

```json
{"name":".card 及内容区域","summary":"可独立构建带标题和正文的卡片。","role":"component"}
```

browser：`<article class="card"><header class="card-heading"><span class="card-title">标题</span></header><div class="card-content">正文</div></article>`，需加载 cards 与主题 CSS。`.card` 有阴影、圆角、细环和 hover 阴影；`.card-heading` 水平布局，`.card-header` 背景；`.card-content` 纵向内容；`.card-footer` 页脚内边距。
### css-card-helpers

```json
{"name":"卡片网格与部件类","summary":"配合卡片容器控制网格、状态和内容强调。","role":"helper"}
```

.card-list 放在集合根；.card-list-item 放在卡片的直接外包装，设置宽度/内边距；.card-grid 在集合根开启换行 flex，卡片等高。`.card.selected` 为选中外观；`.card-actions` 为右上角操作，后接 card-heading 时预留空间；`.card-icon` 弱化，`.card-subtitle` 小号弱化。prefix/title/suffix 等类是结构标记，不全部具有专有规则。

## css-variables

### css-cards-vars

```json
{"name":"--list-gap / --list-count-per-row","summary":"控制卡片间距和每行数量。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--list-gap` | `.625rem` | 总间距，容器和条目各用一半 | `.card-list` | 目标 card-list，或 gap prop |
| `--list-count-per-row` | `1` | 每行正数卡片数 | `.card-list` | 目标 card-list，或 countPerRow prop |

## javascript

无。

## types

### types-card-props

```json
{"name":"CardProps / CardItemProps","summary":"卡片各区域与动作的完整配置。"}
```

CardProps 继承 [Item](../common-list/ai.md#types-item)，以下均可省略，默认无：

| 字段 | 类型 / 含义 |
| --- | --- |
| header, prefix, title, suffix, heading, subtitle, content, footer | CustomContentType；头部、标题前后、额外标题、次标题、正文、页脚 |
| headerClass, prefixClass, titleClass, suffixClass, headingClass, subtitleClass, contentClass, footerClass | ClassNameLike；对应区域类 |
| titleUrl / titleAttrs | string / Record<string,string>；标题链接和属性 |
| icon | IconType；标题前图标 |
| avatar | AvatarOptions 或 (item:Item)=>AvatarOptions |
| actions / footActions | ToolbarSetting<[CardProps]>；右上/底部动作，工厂参数为当前卡片 props |
| items | ListItemsSetting 或 ListProps；嵌入列表，当前推荐 `{items: [...]}` 对象形式 |
| selected | boolean；选中外观 |

`CardItemProps extends CardProps`，增加 innerComponent（Preact组件或HTML标签）、innerClass（ClassNameLike）、innerAttrs（属性对象），用于列表包装。该类型公开不代表 CardItem 组件可独立导入。
### types-card-list-props

```json
{"name":"CardListProps","summary":"卡片集合复用全部 ListProps，并增加布局参数。"}
```

`CardListProps<T extends Item = CardProps> extends ListProps<T>`。`countPerRow?:number` 默认无，非零启用网格并设置每行数量；`gap?:SizeSetting` 默认由 CSS 的 .625rem 提供，指定值经过 toCssSize。其他参数、事件和数据来源见 [ListProps](../list/ai.md#types-list-props)。

## recipes

### recipe-card-inner-list

```json
{"name":"嵌入卡片列表","summary":"使用明确的 ListProps 对象传递内部条目。"}
```

workspace，复用 card：`card.render({items: {items: [{id: 'task', text: '待处理任务'}]}})`。

## constraints

- CardProps.items 的类型允许数组，但当前 Card._renderList 会把对象（含数组）当 ListProps 合并；使用 `{items: [...]}` 可获得明确的嵌入列表行为。
- 卡片动作与图标依赖对应库；selected 只改变外观。

## references

- [入口](package.json)、[Card](src/component/card.tsx)、[CardList](src/component/card-list.tsx)、[类型](src/types/index.ts)、[样式](src/style/index.ts)
