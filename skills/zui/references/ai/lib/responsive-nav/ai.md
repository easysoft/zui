# 响应式导航

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"responsive-nav","summary":"通过宽度测量将既有导航溢出项收纳到更多下拉菜单。","keywords":["响应式导航","ResponsiveNavHelper","更多菜单","溢出"]}
```

## overview

对已经渲染的导航测量宽度，将溢出项放入“更多”下拉；适合动态工具导航。它直接操作现有 DOM，不是数据 Nav 的替代品。

## setup

唯一公开入口 `@zui/responsive-nav` 导出 ResponsiveNavHelper 和 ResponsiveNavHelperProps，并注册原生组件。src/component 有实现但未通过包入口导出，不提供公开 Preact 组件。没有 /css 子入口，显示依赖 nav/dropdown/基础样式。浏览器需 DOM 布局测量与 resize 观察能力。

## vanilla

### vanilla-responsive-nav

```json
{"name":"ResponsiveNavHelper","summary":"测量并收纳导航中的溢出 DOM 条目。"}
```

`new ResponsiveNavHelper(selector, options?:Partial<ResponsiveNavHelperProps>)`，selector 指向已渲染且有可测量宽度的导航根。render(options?,reset?) 重新测量；destroy 销毁下拉/ResizeObserver/window 监听并移除更多项。共有实例管理见 [Component](../core/ai.md#vanilla-component)。

workspace：

```ts
import {ResponsiveNavHelper} from '@zui/responsive-nav';
import '@zui/nav/css';
const nav = document.createElement('ul');
nav.className = 'nav';
nav.style.width = '240px';
nav.innerHTML = '<li class="nav-item"><a href="/">首页</a></li><li class="nav-item"><a href="/projects">项目列表</a></li><li class="nav-item"><a href="/settings">项目设置</a></li>';
document.body.append(nav);
const helper = new ResponsiveNavHelper(nav);
// 页面卸载时：helper.destroy(); nav.remove();
```

public `getContainer():Cash`、`getItems():Cash` 返回目标容器/条目；`getContainerSize(container?):number`、`getItemSize(element):number` 返回像素；`getMoreItems():Item[]` 生成收纳数据；`getMoreItem(element):Item|undefined` 转换单项；`getMore():Cash` 获取或创建更多项（有 DOM/下拉副作用）。外部增加或更改导航后调用 render；监听只在初始化按 watch 安装，不假设修改 watch 会重绑。

## preact

无。

## web-components

无。

## css

无独立 CSS 输出。运行时写入 rsh-overflowed、rsh-has-more-items、rsh-overflow-item、rsh-fixed-item 及 rsh-more/rsh-more-btn 状态/部件标记；它们不作为独立工具类。隐藏通过内联 display 完成。

## css-variables

无。

## javascript

无。

## types

### types-responsive-nav-props

```json
{"name":"ResponsiveNavHelperProps","summary":"收纳、测量、监听和更多菜单的完整选项。"}
```

全部可选。Comparator/Selector 为 core/Cash 支持的选择或过滤规则。

| 参数 | 类型 | 默认值 / 说明 |
| --- | --- | --- |
| watch | ('window' 或 'self' 或 'parent' 或 'container' 或 Selector)[] | ['container']；监听尺寸变化 |
| debounce | number | 20ms；实现使用 `值 \|\| 20`，0 不关闭延迟 |
| container | Selector | 自身；特殊 'parent' 为父元素 |
| items / ignoreItems | Comparator | 'li' / 无；直接子条目及排除项 |
| fixedItems / moreItems | Comparator | '.is-rsh-fixed' / '.is-rsh-more'；常驻与固定收纳 |
| showSelected | boolean 或 Comparator | true；更多按钮显示被收纳的 active/selected 项 |
| more | string 或 {html?:string;text?:string;icon?:string或IconClass;caret?:boolean;attrs?:Record<string,string>} | 内置 more-vert 图标和国际化标题；字符串视为 text |
| moreDropdown | Partial<DropdownOptions> | 默认 placement='bottom-start'、items 动态生成；配置可覆盖 |
| mergeDropdown | boolean 或 Comparator | 无；匹配时展开合并子菜单条目 |
| scrollbarDetect | boolean 或 ()=>boolean | 默认检测 window.innerWidth - body.clientWidth；false 跳过检测 |
| scrollbarSize | number | 10px；检测结果为假时从容器宽度扣除 |
| getContainerSize | (container:HTMLElement)=>number | 默认 offsetWidth |
| getItemSize | (item:HTMLElement)=>number | 默认 offsetWidth + 左右 margin |
| getMoreItem | (item:HTMLElement)=>Item或false或void | 单项转换；false/void 跳过 |
| getMoreItems | (items:HTMLElement[])=>Item[] | 优先整体转换已收纳元素 |
| onCreateMore | ($more:Cash,dropdown:Dropdown)=>void | 更多项首次创建通知 |

默认普通项复制现有内部 HTML/属性到菜单；dropdown 项尝试读取已有实例或创建 Dropdown。来自业务的 html 属性应是可信内容。

## recipes

### recipe-responsive-fixed

```json
{"name":"保留关键动作","summary":"为必须常驻的条目添加 is-rsh-fixed。"}
```

browser 或 workspace：在已有导航 li 上加 `is-rsh-fixed`，重新 `helper.render()`。固定项仍占用宽度；如果它们本身超过容器，组件不能保证所有内容可见。

## constraints

- 不能在 display:none 或零宽容器完成有效测量；显示后主动 render。
- helper 直接改写条目 display/opacity 并追加更多项，不要同时由其他渲染器重写同一子树。
- destroy 不承诺恢复所有已隐藏项的内联状态；需继续复用原导航时由应用重新渲染数据。

## references

- [入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/responsive-nav/package.json>)、[实现](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/responsive-nav/src/vanilla/responsive-nav-helper.ts>)、[完整类型](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/responsive-nav/src/types/responsive-nav-helper-props.ts>)
