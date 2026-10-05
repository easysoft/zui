# 卡片

卡片用于把标题、说明、操作和附加内容组合为一个独立的信息单元。可以直接使用 HTML 结构，也可以通过 `Card` 创建单张卡片，通过 `CardList` 根据数据生成卡片列表。

## 基础结构

在 `.card` 内按需组合头部、标题区、内容区和底部。卡片默认带圆角、细描边和轻阴影，鼠标悬停时阴影加深。

::: tabs

== 示例

<Example id="cards-structure-example">
  <div class="w-64 max-w-full">
    <div class="card">
      <div class="card-header">迭代计划</div>
      <div class="card-heading">
        <span class="card-title">客户门户升级</span>
      </div>
      <div class="card-content">
        <div class="card-subtitle">客户服务 · 九月迭代</div>
        <div>支持客户自助查询工单进展，减少重复咨询。</div>
      </div>
      <div class="card-footer">负责人：林悦</div>
    </div>
  </div>
</Example>

== HTML

```html
<div class="card">
  <div class="card-header">迭代计划</div>
  <div class="card-heading">
    <span class="card-title">客户门户升级</span>
  </div>
  <div class="card-content">
    <div class="card-subtitle">客户服务 · 九月迭代</div>
    <div>支持客户自助查询工单进展，减少重复咨询。</div>
  </div>
  <div class="card-footer">负责人：林悦</div>
</div>
```

:::

`.card-header` 是带背景的可选头部，标题放在 `.card-heading` 内。正文使用 `.card-content`，副标题 `.card-subtitle` 也位于内容区。没有对应内容时可以省略整个区域。

## 通过 JavaScript 创建

`Card` 根据选项生成同样的卡片结构。`header`、`title`、`subtitle`、`content` 和 `footer` 分别对应上例中的内容区域。

::: tabs

== 示例

<Example id="cards-js-example">
  <div class="w-64 max-w-full">
    <ZUI use="card" :options="{$replace: false, header: '迭代计划', title: '客户门户升级', subtitle: '客户服务 · 九月迭代', content: '支持客户自助查询工单进展，减少重复咨询。', footer: '负责人：林悦'}" />
  </div>
</Example>

== HTML

```html
<div id="projectCard"></div>
```

== JS

```js
const card = new zui.Card('#projectCard', {
    header: '迭代计划',
    title: '客户门户升级',
    subtitle: '客户服务 · 九月迭代',
    content: '支持客户自助查询工单进展，减少重复咨询。',
    footer: '负责人：林悦',
});
```

:::

设置 `titleUrl` 可以将标题渲染为链接，其他链接属性通过 `titleAttrs` 设置。`title` 等内容选项支持 `CustomContentType`，可以传入文本或 `{component: 'span', children: '内容'}` 这样的自定义内容对象。

## 操作区

`actions` 在卡片右上角生成工具栏，`footActions` 在底部生成工具栏，两者都使用[工具栏配置](/lib/components/toolbar/js.html)。按钮的 `onClick` 处理对应操作。

下面使用 `footerClass` 将底部说明与按钮水平排列。点击按钮只更新示例中的操作提示。

::: tabs

== 示例

<Example id="cards-actions-example">
  <div class="w-64 max-w-full">
    <ZUI use="card" :options="{$replace: false, ...actionCardOptions}" />
  </div>
  <p role="status">{{ cardAction }}</p>
</Example>

== HTML

```html
<div id="projectActionCard"></div>
<p id="projectCardAction" role="status">点击卡片上的按钮查看操作结果。</p>
```

== JS

```js
const result = document.getElementById('projectCardAction');
const actionCard = new zui.Card('#projectActionCard', {
    title: '客户门户升级',
    subtitle: '客户服务 · 九月迭代',
    content: '支持客户自助查询工单进展，减少重复咨询。',
    actions: [{
        icon: 'star',
        hint: '关注项目',
        attrs: {'aria-label': '关注项目'},
        onClick: () => { result.textContent = '已点击“关注项目”。'; },
    }],
    footer: '负责人：林悦',
    footerClass: 'flex items-center justify-between gap-2',
    footActions: [{
        text: '查看进展',
        onClick: () => { result.textContent = '当前进展：正在验收附件预览功能。'; },
    }],
});
```

:::

## 卡片内的列表

通过 `items` 向卡片嵌入一个[列表](/lib/components/list/)。下面传入列表配置对象，列表条目放在 `items.items` 中；它展示的是一张卡片内的内容，而不是多张卡片。

::: tabs

== 示例

<Example id="cards-content-list-example">
  <div class="w-64 max-w-full">
    <ZUI use="card" :options="{$replace: false, title: '发布前检查', items: {items: [{id: 'preview', text: '完成附件预览验收'}, {id: 'mobile', text: '检查移动端上传'}, {id: 'notice', text: '确认消息通知范围'}]}, footer: '共 3 项检查'}" />
  </div>
</Example>

== HTML

```html
<div id="releaseChecklistCard"></div>
```

== JS

```js
new zui.Card('#releaseChecklistCard', {
    title: '发布前检查',
    items: {
        items: [
            {id: 'preview', text: '完成附件预览验收'},
            {id: 'mobile', text: '检查移动端上传'},
            {id: 'notice', text: '确认消息通知范围'},
        ],
    },
    footer: '共 3 项检查',
});
```

:::

## 选中状态

为 `.card` 添加 `.selected`，或为 `Card` 设置 `selected: true`，可以显示选中的背景和描边。该选项只控制外观，点击卡片不会自动切换选中状态。

::: tabs

== 示例

<Example id="cards-selected-example" class="flex flex-wrap gap-4">
  <div class="card w-64 max-w-full">
    <div class="card-heading"><span class="card-title">团队知识库</span></div>
    <div class="card-content">待选择</div>
  </div>
  <div class="card selected w-64 max-w-full">
    <div class="card-heading"><span class="card-title">客户门户升级</span></div>
    <div class="card-content">已选择</div>
  </div>
</Example>

== HTML

```html
<div class="card">
  <div class="card-heading"><span class="card-title">团队知识库</span></div>
  <div class="card-content">待选择</div>
</div>
<div class="card selected">
  <div class="card-heading"><span class="card-title">客户门户升级</span></div>
  <div class="card-content">已选择</div>
</div>
```

== JS

```js
// 更新已创建的 Card 实例。
card.render({selected: true});
card.render({selected: false});
```

:::

## 卡片列表

`CardList` 的 `items` 数组定义每张卡片的内容，每项可使用 `Card` 的选项。通过 `countPerRow` 指定每行的卡片数量，通过 `gap` 设置卡片间距，数字值的单位是像素。

::: tabs

== 示例

<Example id="cards-list-example">
  <ZUI use="cardList" :options="{countPerRow: 2, gap: 16, items: [{id: 'portal', title: '客户门户', subtitle: '客户服务', content: '集中查看工单与处理进展。', selected: true}, {id: 'knowledge', title: '团队知识库', subtitle: '知识协作', content: '整理常见问题与解决方案。'}, {id: 'mobile', title: '移动端工单', subtitle: '现场支持', content: '现场上传截图并补充工单。'}, {id: 'reports', title: '服务报表', subtitle: '数据分析', content: '汇总响应时间与处理结果。'}]}" />
</Example>

== HTML

```html
<div id="projectCards"></div>
```

== JS

```js
const cardList = new zui.CardList('#projectCards', {
    countPerRow: 2,
    gap: 16,
    items: [
        {id: 'portal', title: '客户门户', subtitle: '客户服务', content: '集中查看工单与处理进展。', selected: true},
        {id: 'knowledge', title: '团队知识库', subtitle: '知识协作', content: '整理常见问题与解决方案。'},
        {id: 'mobile', title: '移动端工单', subtitle: '现场支持', content: '现场上传截图并补充工单。'},
        {id: 'reports', title: '服务报表', subtitle: '数据分析', content: '汇总响应时间与处理结果。'},
    ],
});
```

:::

不设置 `countPerRow` 时按单列排列；设置后使用固定列数，不会根据屏幕宽度自动改变。可以通过 `cardList.render({countPerRow: 1})` 切换为单列。同一行的卡片会填满该行高度。

## 选项

### Card

<Props>
header?: CustomContentType; // 卡片顶部的附加内容。
title?: CustomContentType; // 标题区中的标题。
titleUrl?: string; // 标题链接；未设置时标题使用 span 元素。
titleAttrs?: Record&lt;string, string&gt;; // 标题元素的附加属性。
icon?: IconType; // 标题区前置图标。
prefix?: CustomContentType; // 标题前的内容。
suffix?: CustomContentType; // 标题后的内容。
heading?: CustomContentType; // 标题区末尾的附加内容。
subtitle?: CustomContentType; // 内容区顶部的副标题。
content?: CustomContentType; // 卡片正文。
footer?: CustomContentType; // 底部附加内容。
avatar?: AvatarOptions | ((item: Item) =&gt; AvatarOptions); // 头像配置或根据卡片选项返回头像配置的函数。
actions?: ToolbarSetting&lt;[CardProps]&gt;; // 右上角工具栏。
footActions?: ToolbarSetting&lt;[CardProps]&gt;; // 底部工具栏。
items?: ListItemsSetting | ListProps; // 卡片内的列表；配置对象写法见上例。
selected?: boolean; // 是否显示选中外观。
className?: ClassNameLike; // 卡片根元素的附加类名。
</Props>

使用 `headerClass`、`headingClass`、`titleClass`、`prefixClass`、`suffixClass`、`contentClass`、`subtitleClass` 和 `footerClass` 为对应区域追加 CSS 类，类型均为 `ClassNameLike`。例如 `titleClass: 'font-bold'` 加粗标题，`footerClass: 'flex items-center justify-between'` 调整底部布局。

### CardList

<Props>
items?: ListItemsSetting&lt;CardProps&gt;; // 卡片数据；每项可设置 title、content、selected 等 Card 选项。
countPerRow?: number; // 每行卡片数量，使用正整数；不设置时单列排列。
gap?: SizeSetting; // 卡片间距，数字按像素处理；默认由 --list-gap 控制。
itemKey?: string = "id"; // 用于标识条目的字段，建议为每张卡片提供稳定的 id。
</Props>

条目的 `innerClass`、`innerAttrs` 和 `innerComponent` 分别设置内部 `.card` 元素的附加类、属性和标签；条目的 `className` 作用于外层 `.card-list-item`。动态数据与条目点击回调参见[列表](/lib/components/list/)和[通用列表](/lib/components/common-list/)。

## 更新与销毁

原生实例通过 `render(options)` 更新内容和外观；删除组件所在区域前调用 `destroy()`。

```js
card.render({content: '附件预览已验收，等待发布。', selected: true});
cardList.render({items: [{id: 'portal', title: '客户门户', content: '已发布'}]});

// 页面不再使用这些组件时销毁实例。
card.destroy();
cardList.destroy();
```

## 源码工作区与 Preact

以下入口用于 ZUI 源码工作区，需要解析 `@zui/*` 并编译 TypeScript；使用 JSX 时还需配置 Preact。普通项目按前文通过全局 `zui` 使用卡片，标准 npm 包的入口为 `zui` 和 `zui/css`。

在源码工作区中，原生组件从库的公开入口导入：

```js
import {Card, CardList} from '@zui/cards';
```

Preact 组件从 `@zui/cards/react` 导入，并加载卡片样式：

```tsx
import {render} from 'preact';
import {Card, CardList} from '@zui/cards/react';
import '@zui/cards/css';

render(
    <Card title="客户门户升级" content="支持客户自助查询工单进展。" />,
    document.getElementById('projectCard')!,
);

render(
    <CardList countPerRow={2} items={[{id: 'portal', title: '客户门户'}, {id: 'knowledge', title: '团队知识库'}]} />,
    document.getElementById('projectCards')!,
);
```

`CardProps`、`CardListProps` 和 `CardItemProps` 可从 `@zui/cards` 或 `@zui/cards/react` 导入。Preact 挂载的组件通过 `render(null, container)` 卸载。

## CSS 类

| 类 | 作用 |
| --- | --- |
| `card` | 卡片容器，提供背景、圆角、描边和阴影 |
| `card-header` | 带背景的顶部区域 |
| `card-heading` | 横向排列图标、标题及前后附加内容的标题区 |
| `card-title` | 标题元素 |
| `card-icon` | 标题区图标，默认降低透明度 |
| `card-prefix`、`card-suffix` | 标题前后的附加内容 |
| `card-content` | 内容区，内部按纵向排列 |
| `card-subtitle` | 使用较小字号和弱化颜色的副标题 |
| `card-footer` | 底部内容区 |
| `card-actions` | 位于卡片右上角的工具栏 |
| `card-foot-actions` | 位于底部区域内的工具栏 |
| `selected` | 与 `card` 一起使用，显示选中背景和描边 |
| `card-list` | 卡片列表容器 |
| `card-list-item` | 卡片列表中包裹单张卡片的外层元素 |
| `card-grid` | 与 `card-list` 一起使用，启用可换行的多列布局 |

## CSS 变量

卡片列表支持以下变量，均定义在 `.card-list` 上：

| 变量 | 作用 | 默认值 |
| --- | --- | --- |
| `--list-gap` | 相邻卡片的间距；列表与条目分别使用其一半作为内边距 | `.625rem` |
| `--list-count-per-row` | 每行卡片数量，用于计算条目宽度 | `1` |

`CardList` 的 `gap` 和 `countPerRow` 会通过内联 CSS 变量设置对应值。

<script setup>
import {ref} from 'vue';

const cardAction = ref('点击卡片上的按钮查看操作结果。');
const actionCardOptions = {
    title: '客户门户升级',
    subtitle: '客户服务 · 九月迭代',
    content: '支持客户自助查询工单进展，减少重复咨询。',
    actions: [{
        icon: 'star',
        hint: '关注项目',
        attrs: {'aria-label': '关注项目'},
        onClick: () => { cardAction.value = '已点击“关注项目”。'; },
    }],
    footer: '负责人：林悦',
    footerClass: 'flex items-center justify-between gap-2',
    footActions: [{
        text: '查看进展',
        onClick: () => { cardAction.value = '当前进展：正在验收附件预览功能。'; },
    }],
};
</script>
