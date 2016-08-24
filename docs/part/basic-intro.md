section: basic
id: intro
description: 为何选择ZUI？
icon: icon-heart
filter: shuoming sm
---

# 说明

## 基于Bootstrap定制

ZUI继承了[Bootstrap 3](http://getbootstrap.com) 中的大部分基础内容，但出于与Bootstrap不同的目的，一些组件都进行了定制和修改。这些变化包括：

*   移除了部分插件的限制，增加了一些适用特性，例如Popover弹出的内容可以指定已有的标签内容,Modal对话框可以自动使用iframe弹出整个页面内容等；
*   增加了实用的视图组件，包括卡片、评论、列表、文章、仪表盘、看板等；
*   新增了几个Javascript组件，包括拖放、排序、灯箱预览，本地存储，图片裁剪等；
*   集成了一些实用的第三方组件，包括cookie、hotkey、chosen、Kindeditor、ChartJs、DatetimePicker等，并且这些组件样式经过重写，风格更为统一；
*   增加了配色表和新的主题模板，最少只需更改一个配置项更换颜色主题；
*   修改了默认字体配置，包含所使用的字体集和字体大小；
*   替换了默认的字体图标，在FontAwesome图标集的基础上去掉了一些图标同时增加了一些新的图标，写法上比FontAwesome更简单；
*   大部分组件的默认样式都不需要额外的指定包含'default'的Class，例如class='btn btn-default'，'panel-default'在ZUI中不需要；
*   增加了一些辅助类，例如文本背景及高亮等；
*   增加了一些可选样式，例如滚动条等；
*   ……

## 选择ZUI还是Bootstrap？

Bootstrap是非常优秀的前端框架，但在构建大型应用的开发时通常远远不够。如果Bootstrap能够完全满足你的项目，建议使用Bootstrap，如果你需要的更多，则建议使用ZUI。使用ZUI的显著理由如下：

*   大部分书写方式继承Bootstrap，从Bootstrap方便迁移到ZUI，学习成本低，而且写法上更精简；
*   ZUI提供更多的功能选项，即使是第三方组件也提供统一的样式和主题支持；
*   ZUI采用核心+独立组件按需加载机制，即使包含的内容更丰富，也会控制核心内容打包后体积大小，一般css不超过150k（目前139k，精简版104k），js不超过100k（目前73k，精简版42k），精简版包含绝大部分功能，但体积更小。非核心的独立组件内容按需加载，推荐自定义编译；
*   ZUI从实际项目中诞生（包括禅道、蝉知和然之），实践证明其有效性，一切为了快速构建你的应用；
*   一些令人激动的新内容正在开发中...
