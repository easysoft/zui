# 树形菜单

用层级菜单展示组织、目录和导航。以下示例以已按[快速上手](/guide/start/)加载 ZUI 为前提。

## 基础用法

点击技术中心左侧的箭头展开或折叠团队。
<div id="tree-basic" data-doc-example="tree-basic">

::: tabs

== 示例

<Example>
  <ZUI id="treeBasic" use="tree" :options="treeBasicOptions" />
</Example>

== HTML

```html
<div id="treeBasic"></div>

<script>
const instance = new zui.Tree('#treeBasic', {items: [{id: 'team', text: '技术中心', items: [{id: 'dev', text: '研发团队'}, {id: 'qa', text: '测试团队'}]}]});
</script>
```

:::

</div>

## 节点图标

图标名称来自 ZUI 图标库；定制构建时需包含 icons。
<div id="tree-icons" data-doc-example="tree-icons">

::: tabs

== 示例

<Example>
  <ZUI id="treeIcons" use="tree" :options="treeIconsOptions" />
</Example>

== HTML

```html
<div id="treeIcons"></div>

<script>
const instance = new zui.Tree('#treeIcons', {items: [{id: 'team', text: '技术中心', items: [{id: 'dev', text: '研发团队'}, {id: 'qa', text: '测试团队'}]}], collapsedIcon: 'folder-close', expandedIcon: 'folder-open', normalIcon: 'file'});
</script>
```

:::

</div>

## 悬停与连接线

可同时启用悬停效果、连接线和默认展开。
<div id="tree-hover" data-doc-example="tree-hover">

::: tabs

== 示例

<Example>
  <ZUI id="treeHover" use="tree" :options="treeHoverOptions" />
</Example>

== HTML

```html
<div id="treeHover"></div>

<script>
const instance = new zui.Tree('#treeHover', {items: [{id: 'team', text: '技术中心', items: [{id: 'dev', text: '研发团队'}, {id: 'qa', text: '测试团队'}]}], hover: true, lines: true, defaultNestedShow: true});
</script>
```

:::

</div>

## 工具栏与事件

条目点击回调接收一个包含 item、index、event 的对象；onToggle 返回 false 可以取消本次展开或折叠。
<div id="tree-actions" data-doc-example="tree-actions">

::: tabs

== 示例

<Example>
  <ZUI id="treeActions" use="tree" :options="treeActionsOptions" />
<output id="treeActionsResult" aria-live="polite">等待操作</output>
</Example>

== HTML

```html
<div id="treeActions"></div>
<output id="treeActionsResult" aria-live="polite">等待操作</output>

<script>
const instance = new zui.Tree('#treeActions', {
    items: [{id: 'docs', text: '项目文档', items: [{id: 'guide', text: '使用指南'}]}],
    defaultNestedShow: true,
    itemActions: [{icon: 'edit', text: '编辑', onClick() {
        document.querySelector('#treeActionsResult').textContent = '已点击编辑';
    }}],
    onClickItem({item}) {
        document.querySelector('#treeActionsResult').textContent = '选择：' + item.text;
    },
    onToggle(key, expanded) {
        document.querySelector('#treeActionsResult').textContent = key + (expanded ? ' 已展开' : ' 已折叠');
    },
});
</script>
```

:::

</div>

## 选项

Tree 继承 [Menu](/lib/components/menu/) 和 [List](/lib/components/list/) 的选项。常用选项如下；未列出的默认值表示未显式设置。

<Props>
/** 节点数组；子节点通过节点的 items 提供。 */
items?: NestedListItem[];
/** 每级缩进，单位像素。 */
indent?: number = 12;
/** 是否显示连接线。 */
lines?: boolean;
/** 节点工具栏，使用 ListitemProps 的 actions 配置。 */
itemActions?: ListitemProps['actions'];
collapsedIcon?: IconType; // 折叠节点图标。
expandedIcon?: IconType; // 展开节点图标。
normalIcon?: IconType; // 叶节点图标。
hover?: boolean; // 鼠标悬停效果。
defaultNestedShow?: boolean | Record&lt;ItemKey, boolean&gt;; // 非受控展开状态的初始值。
nestedShow?: boolean | Record&lt;ItemKey, boolean&gt;; // 受控展开状态，由调用方更新。
</Props>

## 事件与节点数据

- `onClickItem({item, index, event, renderedItem, relativeTarget})`：点击条目；`item` 是节点数据，`event` 是鼠标事件。
- `onToggle(key, expanded, reset?)`：展开状态变化前调用；返回 `false` 取消变更。使用 `nestedShow` 时，需要调用方更新状态。
- 节点通过 `id` 标识，`text` 指定文本，`items` 指定子节点；链接使用 `url`，工具栏使用 `actions`。完整结构见 [List 节点类型](/lib/components/list/)。

## 更新与销毁

保存 `new zui.Tree(...)` 返回的实例，调用 `instance.render({items: nextItems})` 更新数据；容器移除前调用 `instance.destroy()`。这里的 `nextItems` 是业务提供的新节点数组。

框架组件中的创建、更新和清理方式见[在 React 中使用 ZUI vanilla 组件](/lib/basic/core/use-zui-in-react.html)。

## 键盘与限制

本组件沿用菜单条目的交互。需要键盘访问的节点应提供可聚焦链接或按钮，并为图标操作提供文字或提示；这里不承诺 ARIA tree 的完整方向键导航。工具栏配置参见[工具栏](/lib/components/toolbar/)。

<script setup>
const treeBasicOptions = {items: [{id: 'team', text: '技术中心', items: [{id: 'dev', text: '研发团队'}, {id: 'qa', text: '测试团队'}]}]};

const treeIconsOptions = {items: [{id: 'team', text: '技术中心', items: [{id: 'dev', text: '研发团队'}, {id: 'qa', text: '测试团队'}]}], collapsedIcon: 'folder-close', expandedIcon: 'folder-open', normalIcon: 'file'};

const treeHoverOptions = {items: [{id: 'team', text: '技术中心', items: [{id: 'dev', text: '研发团队'}, {id: 'qa', text: '测试团队'}]}], hover: true, lines: true, defaultNestedShow: true};

const treeActionsOptions = {
    items: [{id: 'docs', text: '项目文档', items: [{id: 'guide', text: '使用指南'}]}],
    defaultNestedShow: true,
    itemActions: [{icon: 'edit', text: '编辑', onClick() {
        document.querySelector('#treeActionsResult').textContent = '已点击编辑';
    }}],
    onClickItem({item}) {
        document.querySelector('#treeActionsResult').textContent = '选择：' + item.text;
    },
    onToggle(key, expanded) {
        document.querySelector('#treeActionsResult').textContent = key + (expanded ? ' 已展开' : ' 已折叠');
    },
};
</script>
