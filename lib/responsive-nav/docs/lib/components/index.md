# 响应式导航

`ResponsiveNavHelper` 为已有导航添加宽度适配：空间不足时把末尾条目移入“更多”下拉菜单，容器变宽后重新显示。导航内容和样式仍由 [导航](/lib/components/nav/) 提供。

## 基本使用

拖动示例容器的右下角调整宽度，可以观察条目在导航和下拉菜单之间移动。

::: tabs

== 示例

<Example>
  <div style="width: 320px; max-width: 100%; min-width: 180px; resize: horizontal; overflow: auto; padding-bottom: 12px;">
    <ul id="responsiveNavDemo" class="nav" zui-create="responsiveNavHelper" data-scrollbar-detect="false" data-show-selected="false" data-more='{"html":"<button type=\"button\" class=\"btn\">更多</button>"}'>
      <li class="nav-item is-rsh-fixed"><a href="#基本使用"><span class="text">概览</span></a></li>
      <li class="nav-item"><a href="#条目规则"><span class="text">产品需求</span></a></li>
      <li class="nav-item"><a href="#尺寸更新"><span class="text">开发任务</span></a></li>
      <li class="nav-item"><a href="#选项"><span class="text">测试用例</span></a></li>
      <li class="nav-item"><a href="#实例方法"><span class="text">发布记录</span></a></li>
    </ul>
  </div>
</Example>

== HTML

```html
<ul id="projectNav" class="nav">
  <li class="nav-item is-rsh-fixed"><a href="#overview"><span class="text">概览</span></a></li>
  <li class="nav-item"><a href="#stories"><span class="text">产品需求</span></a></li>
  <li class="nav-item"><a href="#tasks"><span class="text">开发任务</span></a></li>
  <li class="nav-item"><a href="#tests"><span class="text">测试用例</span></a></li>
  <li class="nav-item"><a href="#releases"><span class="text">发布记录</span></a></li>
</ul>
```

== JS

```js
const responsiveNav = new zui.ResponsiveNavHelper('#projectNav', {
    more: {html: '<button type="button" class="btn">更多</button>'},
    showSelected: false,
    scrollbarDetect: false,
});
```

:::

导航需要位于宽度受约束的容器中。示例关闭滚动条宽度修正，直接按导航元素的宽度计算；“更多”使用原生按钮，支持 Tab 聚焦和键盘激活。

## 条目规则

- 默认处理导航的直接子元素 `li`，保持原有顺序。
- `.is-rsh-fixed` 条目始终留在导航中；固定条目总宽度应小于容器宽度。
- `.is-rsh-more` 条目始终放入“更多”菜单。
- `ignoreItems` 匹配的条目不参与自动收纳。
- `showSelected: true` 时，若收纳项带有 `.active` 或 `.selected`，会用该项内容更新“更多”按钮。也可传入自定义匹配条件。

默认转换会保留条目内部 HTML 和链接属性。直接绑定在原始 DOM 节点上的监听器不会随 HTML 复制；需要自定义操作时，可使用事件委托，或通过 `getMoreItem` 返回带 `onClick` 的菜单项。

```js
responsiveNav.render({
    getMoreItem(element) {
        return {
            text: element.textContent.trim(),
            onClick() {
                element.querySelector('a, button')?.click();
            },
        };
    },
});
```

## 尺寸更新

默认监听计算容器的尺寸变化。`watch` 还支持 `window`、`self`、`parent` 和自定义选择器；`container: 'parent'` 表示使用导航父元素的宽度。

```js
const responsiveNav = new zui.ResponsiveNavHelper('#projectNav', {
    container: 'parent',
    watch: ['container', 'window'],
    debounce: 40,
    more: {html: '<button type="button" class="btn">更多</button>'},
});
```

初始化时导航应可见且有实际宽度。隐藏面板显示后，或增删条目、修改文本后，调用 `render()` 重新测量。`watch` 的监听在初始化时建立，需要改变监听目标时重新创建实例。

## 选项

<Props>
container?: Selector; // 计算可用宽度的容器，默认导航自身，也支持 "parent"。
items?: Comparator = "li"; // 匹配直接子条目。
ignoreItems?: Comparator; // 不参与收纳的条目。
fixedItems?: Comparator = ".is-rsh-fixed"; // 始终显示的条目。
moreItems?: Comparator = ".is-rsh-more"; // 始终放入下拉菜单的条目。
more?: string | object; // 更多按钮的文本，或包含 html、text、icon、caret、attrs 的配置。
showSelected?: boolean | Comparator = true; // 在更多按钮上显示被收纳的选中项。
moreDropdown?: Partial&lt;DropdownOptions&gt;; // 更多下拉菜单选项，默认定位 bottom-start。
mergeDropdown?: boolean | Comparator; // 将条目自身的下拉项合并到更多菜单。
watch?: Array&lt;string | Selector&gt; = ["container"]; // 监听尺寸变化的目标。
debounce?: number = 20; // 尺寸变化后重新测量的防抖时间，毫秒。
scrollbarDetect?: boolean | (() =&gt; boolean); // 滚动条检测；false 禁用宽度修正。
scrollbarSize?: number = 10; // 宽度修正使用的滚动条尺寸。
getContainerSize?: (container: HTMLElement) =&gt; number; // 自定义可用宽度。
getItemSize?: (item: HTMLElement) =&gt; number; // 自定义条目宽度。
getMoreItem?: (item: HTMLElement) =&gt; Item | false | void; // 转换单个收纳项；false 或空值跳过该项。
getMoreItems?: (items: HTMLElement[]) =&gt; Item[]; // 完全替换收纳项转换过程。
onCreateMore?: ($more: Cash, dropdown: Dropdown) =&gt; void; // 更多按钮创建后回调。
</Props>

`moreDropdown` 使用 [下拉菜单](/lib/components/dropdown/) 的选项，转换得到的条目使用 [菜单生成器](/lib/components/menu/js.html) 的数据格式。

## 实例方法

```js
responsiveNav.render();                       // 重新计算并更新布局
responsiveNav.render({showSelected: false});  // 更新选项并重新计算
const items = responsiveNav.getMoreItems();   // 获取当前收纳项的数据
const instance = zui.ResponsiveNavHelper.get('#projectNav');
responsiveNav.destroy();                     // 释放尺寸监听和下拉菜单
```

## 模块引入

```ts
import {ResponsiveNavHelper} from '@zui/responsive-nav';
import '@zui/nav';
import '@zui/button';
import type {ResponsiveNavHelperProps} from '@zui/responsive-nav';
```

公开入口提供作用于已有 DOM 的 `ResponsiveNavHelper`。页面还需加载 ZUI 样式，或相应导航、按钮和下拉菜单样式。
