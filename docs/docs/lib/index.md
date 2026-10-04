# 组件库

按界面需求选择组件，每个页面提供用法、示例及相关 API。首次接入请先完成[快速上手](/guide/start/)；只需要调整布局与外观时，查看 [CSS 工具类](/utilities/)。

## 从常用组件开始

| 需求 | 推荐入口 |
| --- | --- |
| 展示按钮、导航与内容 | [按钮](/lib/components/button/)、[导航](/lib/components/nav/)、[面板](/lib/components/panel/) |
| 收集用户输入 | [表单](/lib/forms/form/)、[表单控件](/lib/forms/form-control/)、[下拉选择器](/lib/forms/picker/) |
| 展示和操作数据 | [表格](/lib/components/table/)、[数据表格](/lib/components/dtable/)、[分页](/lib/components/pager/) |
| 提供交互反馈 | [对话框](/lib/components/modal/)、[浮动消息](/lib/components/messager/)、[提示消息](/lib/components/tooltip/) |

## 分类目录

- **基础**：[基础排版](/lib/basic/typography/)、[CSS 组件](/lib/basic/core/css-component.html)、[组件基类](/lib/basic/core/component.html)、[便捷组件声明](/lib/basic/core/zui-create.html)。
- **图标**：[字体图标目录](/lib/icons/icons/)、[CSS 图标](/lib/icons/css-icons/)。
- **布局与内容**：[列表](/lib/components/list/)、[菜单](/lib/components/menu/)、[标签页](/lib/components/tabs/)、[侧边栏](/lib/components/sidebar/)、[仪表盘](/lib/components/dashboard/)。
- **表单与文件**：[复选框和单选框](/lib/forms/checkbox/)、[日期选择器](/lib/forms/datetime-picker/date.html)、[表单助手](/lib/forms/form-helper/)、[文件选择](/lib/components/file-selector/)、[上传文件](/lib/components/upload/)。
- **数据交互**：[数据表格插件](/lib/components/dtable/plugins.html)、[树形菜单](/lib/components/tree/)、[看板](/lib/components/kanban/)、[虚拟渲染](/lib/components/virtualize/)。
- **JS 工具**：[通用辅助方法](/lib/helpers/helpers/)、[本地存储](/lib/helpers/store/)、[Event Bus](/lib/helpers/event-bus/)、[拖拽排序](/lib/helpers/sortable/)。

侧栏列出了各分类下的全部文档，也可使用页面顶部的“搜索文档”按名称查找。

## 组件的调用方式

- 使用原生 JavaScript：从[创建组件实例](/lib/basic/core/component.html#创建组件实例)开始。
- 在 React 应用中接入：使用 [React 集成指南](/lib/basic/core/use-zui-in-react.html)中的生命周期桥接方式。
- 使用自定义元素：查看 [Web Component 使用与开发](/lib/basic/core/web-component.html)及具体组件的标签说明。
