# ZUI AI 使用索引

<!-- 本文件由 pnpm ai:build 自动生成，请修改 lib/<name>/ai.md 后重新生成。 -->

本索引用于查找 ZUI 内置库及其主要能力。先按场景和关键词选择库，再读取库级 `ai.md` 中的入口、参数、示例和约束。文档描述当前仓库源码，不能据此推定已经发布的版本具有相同行为。

## 使用方式

- `pnpm ai:read --lib menu`：读取整库使用参考。
- `pnpm ai:read --lib menu --section vanilla`：读取固定章节。
- `pnpm ai:read --lib menu --section vanilla --entry vanilla-menu`：读取单个条目。
- `pnpm ai:build` 更新索引；`pnpm ai:check` 只读检查结构、链接、覆盖和索引同步状态。

消费环境须按各库 `setup` 章节确认：`browser` 使用已加载的全局 `zui`；`npm` 以目标发布包的真实导出为准；`workspace` 使用源码工作区的公开入口。`@zui/*` 路径、Preact 入口、独立插件和自定义元素实现文件不能自动视为 npm 入口或已注册能力。

## 文档覆盖

已发现 65 个内置库，65 个具有结构有效的使用参考，0 个缺少参考。仅收录内置库，不包含本机 exts。

状态按清单分别标记：`wip` 表示默认全量构建排除；`separately` 表示独立使用、默认全量构建排除；`notReady` 表示使用 `--exclude-not-ready` 时排除。未标记不等于已完成所有运行验收。

顶层 package.json.wip 排除项：无。

## css-base

### base

包：`@zui/base`；状态：无额外构建标记。

[使用参考](lib/base/ai.md) — 提供样式重置、全局字体和深浅主题基础变量。

关键词：基础样式、主题、颜色、字号、base。

- [.dark / .light-in-dark / .dark-auto](lib/base/ai.md#css-base-theme)（css / utility）：为区域选择深浅主题变量。
- [基础尺寸与阴影变量](lib/base/ai.md#vars-base-layout)（css-variables）：配置外观变量及其作用节点。
- [主题色板与界面变量](lib/base/ai.md#vars-base-colors)（css-variables）：列出全部主题颜色及深浅映射。

### typography

包：`@zui/typography`；状态：无额外构建标记。

[使用参考](lib/typography/ai.md) — 提供正文、标题、引用、代码和文章区域的基础排版。

关键词：排版、文章、标题、typography。

- [.h1…h6 / .blockquote / .code](lib/typography/ai.md#css-typography-blocks)（css / component）：在任意节点上使用标题、引用和行内代码样式。
- [.article](lib/typography/ai.md#css-article)（css / component）：为长文提供段落间距、换行与表格样式。
- [.article-block](lib/typography/ai.md#css-article-block)（css / helper）：为文章自定义内容提供段落间距。
- [排版变量](lib/typography/ai.md#vars-typography)（css-variables）：配置外观变量及其作用节点。

## control

### alert

包：`@zui/alert`；状态：无额外构建标记。

[使用参考](lib/alert/ai.md) — 提供静态提示消息布局和 Preact Alert，组合图标、标题、内容、操作和关闭按钮。

关键词：提示消息、Alert、警告、通知。

- [Alert](lib/alert/ai.md#preact-alert)（preact）：无内部关闭状态的提示内容函数组件。
- [提示消息布局及部件](lib/alert/ai.md#css-alert)（css / component）：以 .alert 包裹图标、内容、动作和关闭按钮。
- [.alert-close / .alert-link](lib/alert/ai.md#css-alert-helpers)（css / helper）：消息内部关闭按钮和链接辅助样式。
- [--alert-bg](lib/alert/ai.md#css-alert-variables)（css-variables）：提示消息背景变量。
- [AlertOptions](lib/alert/ai.md#types-alert-options)（types）：完整提示消息属性，全部可选。
- [关闭提示](lib/alert/ai.md#recipe-alert-close)（recipes）：由应用控制提示是否继续渲染。

### breadcrumb

包：`@zui/breadcrumb`；状态：无额外构建标记。

[使用参考](lib/breadcrumb/ai.md) — 通过有序层级导航显示当前位置和上级入口。

关键词：面包屑、导航路径、breadcrumb。

- [.breadcrumb](lib/breadcrumb/ai.md#css-breadcrumb)（css / component）：排列层级项目并自动添加分隔符。
- [.active](lib/breadcrumb/ai.md#css-breadcrumb-active)（css / helper）：标记面包屑当前项目。
- [面包屑变量](lib/breadcrumb/ai.md#vars-breadcrumb)（css-variables）：配置外观变量及其作用节点。

### button

包：`@zui/button`；状态：无额外构建标记。

[使用参考](lib/button/ai.md) — 提供可独立使用的按钮样式和 Preact Button，支持链接、图标、尺寸、禁用及加载状态。

关键词：按钮、button、操作、提交、链接按钮、加载状态。

- [Button](lib/button/ai.md#preact-button)（preact）：通过属性生成原生 button 或 a 元素，组合图标、文本、尺寸和交互状态。
- [.btn](lib/button/ai.md#css-btn)（css / component）：可独立用于 button 或 a 的按钮布局与默认外观。
- [按钮外观、尺寸与内容辅助类](lib/button/ai.md#css-button-helpers)（css / helper）：在 .btn 上调整链接外观、尺寸、方形和宽度。
- [按钮变量](lib/button/ai.md#css-button-variables)（css-variables）：覆盖按钮的背景、边框、圆角和高度。
- [ButtonProps](lib/button/ai.md#types-button-props)（types）：Button 的公开属性类型，继承 core 的 HElementProps。
- [表单提交与加载反馈](lib/button/ai.md#recipe-submit-and-loading)（recipes）：用原生 submit 和调用方维护的 loading 状态表达操作进度。

### checkbox

包：`@zui/checkbox`；状态：无额外构建标记。

[使用参考](lib/checkbox/ai.md) — 提供原生选择框、主题选择框、开关和可控选项列表。

关键词：复选框、单选、开关、Checkbox、CheckList。

- [Checkbox](lib/checkbox/ai.md#vanilla-checkbox)（vanilla）：以原生构造器创建和更新组件。
- [Checkbox / Radio / Switch](lib/checkbox/ai.md#preact-checkbox)（preact）：渲染受控或非受控的单项选择控件。
- [CheckList](lib/checkbox/ai.md#preact-check-list)（preact）：展示本地或异步加载的单选/多选列表。
- [.checkbox / .radio](lib/checkbox/ai.md#css-checkbox-native)（css / component）：给真实原生输入与标签提供布局。
- [.checkbox-primary / .radio-primary / .switch](lib/checkbox/ai.md#css-checkbox-primary)（css / component）：使用自定义主题图形或开关外观。
- [.check-list / .check-list-inline](lib/checkbox/ai.md#css-check-list)（css / component）：纵向或水平排列选择框。
- [.checked / .indeterminate / .focus / .disabled](lib/checkbox/ai.md#css-checkbox-state)（css / helper）：配合主题选择框呈现状态。
- [选择框变量](lib/checkbox/ai.md#vars-checkbox)（css-variables）：配置外观变量及其作用节点。
- [CheckboxProps / RadioProps / SwitchProps](lib/checkbox/ai.md#types-checkbox)（types）：列出组件完整专有参数和回调约定。
- [CheckListProps / CheckListItem / CheckListState](lib/checkbox/ai.md#types-check-list)（types）：列出组件完整专有参数和回调约定。

### collapsible

包：`@zui/collapsible`；状态：无额外构建标记。

[使用参考](lib/collapsible/ai.md) — 用原生 details 或动态组件按需显示内容。

关键词：折叠、details、收起、Collapsible。

- [Collapsible](lib/collapsible/ai.md#vanilla-collapsible)（vanilla）：以原生构造器创建和更新组件。
- [Collapsible](lib/collapsible/ai.md#preact-collapsible)（preact）：渲染可受控、带标题操作的原生折叠区域。
- [.details](lib/collapsible/ai.md#css-details)（css / component）：给原生 details 提供箭头和显隐过渡。
- [.collapsible 及标题/内容部件](lib/collapsible/ai.md#css-collapsible)（css / js-component）：定义动态折叠组件生成的结构样式。
- [.bordered / .no-transition](lib/collapsible/ai.md#css-collapsible-helpers)（css / helper）：为折叠区域添加边框或禁用过渡。
- [折叠变量](lib/collapsible/ai.md#vars-collapsible)（css-variables）：配置外观变量及其作用节点。
- [CollapsibleProps / CollapsibleState](lib/collapsible/ai.md#types-collapsible)（types）：列出组件完整专有参数和回调约定。

### common-list

包：`@zui/common-list`；状态：无额外构建标记。

[使用参考](lib/common-list/ai.md) — 提供数据条目到 Preact 视图的通用列表基类与原生包装，统一键、条目转换、自定义渲染和点击回调。

关键词：通用列表、CommonList、列表基类、条目渲染。

- [CommonList](lib/common-list/ai.md#vanilla-common-list)（vanilla）：把条目数据渲染到现有 DOM 容器，并通过 render 更新。
- [CommonList](lib/common-list/ai.md#preact-common-list)（preact）：可继承的 Preact 列表视图，支持条目渲染器和稳定键。
- [CommonListProps / ItemRender / ItemsSetting](lib/common-list/ai.md#types-common-list-props)（types）：所有通用列表派生组件共享的数据、转换、渲染和事件参数。
- [Item / ItemKey / ItemType](lib/common-list/ai.md#types-item)（types）：通用条目和键的基础契约，供列表、菜单与工具栏复用。
- [转换业务数据](lib/common-list/ai.md#recipe-custom-item)（recipes）：使用 getItem 与 itemRender 适配字段，并保留稳定 id。

### form

包：`@zui/form`；状态：无额外构建标记。

[使用参考](lib/form/ai.md) — 提供表单字段、标签、提示、横向与栅格布局样式。

关键词：表单、横向表单、字段布局、form。

- [.form](lib/form/ai.md#css-form)（css / component）：纵向组织表单字段与操作区。
- [.form-horz / .form-grid](lib/form/ai.md#css-form-layout)（css / helper）：为表单启用水平标签和多列布局。
- [表单部件与状态类](lib/form/ai.md#css-form-parts)（css / helper）：定义标签、提示、字段包装与状态展示。
- [表单布局变量](lib/form/ai.md#vars-form)（css-variables）：配置外观变量及其作用节点。

### form-control

包：`@zui/form-control`；状态：无额外构建标记。

[使用参考](lib/form-control/ai.md) — 提供基础输入外观及输入、选择、动态控件和键值编辑的 Preact 组件。

关键词：输入框、下拉选择、表单控件、MapEdit、StringListEdit。

- [FormControl](lib/form-control/ai.md#preact-form-control)（preact）：根据 widget 动态选择输入控件。
- [Input / TextArea / Select](lib/form-control/ai.md#preact-inputs)（preact）：渲染基础输入、文本域和原生选择框。
- [MapEdit](lib/form-control/ai.md#preact-map-edit)（preact）：编辑可增删的字符串键值列表。
- [StringListEdit](lib/form-control/ai.md#preact-string-list-edit)（preact）：编辑可增删的字符串列表。
- [FormGroup](lib/form-control/ai.md#preact-form-group)（preact）：组织字段标签、控件、提示和可选帮助。
- [.form-control / .form-static-text](lib/form-control/ai.md#css-form-control)（css / component）：为原生 input、textarea、select 提供统一外观。
- [.size-sm / .size-md / .size-lg / .focus / .disabled / .readonly / .has-\*](lib/form-control/ai.md#css-form-control-state)（css / helper）：设置控件尺寸及校验外观。
- [.map-edit\* / .string-list-edit\*](lib/form-control/ai.md#css-edit-lists)（css / js-component）：描述动态编辑器生成的行与操作结构。
- [控件与编辑器变量](lib/form-control/ai.md#vars-form-control)（css-variables）：配置外观变量及其作用节点。
- [FormControlProps](lib/form-control/ai.md#types-form-control)（types）：列出组件完整专有参数和回调约定。
- [InputProps](lib/form-control/ai.md#types-input)（types）：列出组件完整专有参数和回调约定。
- [TextAreaProps](lib/form-control/ai.md#types-textarea)（types）：列出组件完整专有参数和回调约定。
- [SelectProps / SelectState](lib/form-control/ai.md#types-select)（types）：列出组件完整专有参数和回调约定。
- [MapEditProps / MapValue / MapPair / MapValuePair](lib/form-control/ai.md#types-map-edit)（types）：列出组件完整专有参数和回调约定。
- [StringListEditProps / StringListValue](lib/form-control/ai.md#types-string-list-edit)（types）：列出组件完整专有参数和回调约定。
- [FormGroupProps](lib/form-control/ai.md#types-form-group)（types）：列出组件完整专有参数和回调约定。

### icons

包：`@zui/icons`；状态：无额外构建标记。

[使用参考](lib/icons/ai.md) — 通过 ZenIcon 字体提供有界图标名称和尺寸辅助类。

关键词：图标、字体图标、ZenIcon、icons。

- [.icon 与 icon 字形类](lib/icons/ai.md#css-font-icons)（css / component）：渲染字体字形并固定基础对齐。
- [.icon-lg / .icon-2x / .icon-3x / .icon-4x / .icon-5x](lib/icons/ai.md#css-icon-size)（css / helper）：调整字体图标尺寸。

### input-control

包：`@zui/input-control`；状态：无额外构建标记。

[使用参考](lib/input-control/ai.md) — 为表单控件添加前后缀、图标与尺寸辅助样式。

关键词：输入框、input-control。

- [结构与部件](lib/input-control/ai.md#css-structure)（css / component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/input-control/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [has-prefix / has-suffix / size-\*](lib/input-control/ai.md#css-input-affixes)（css / helper）：为输入组合保留前后缀空间并调整尺寸。
- [CSS 变量](lib/input-control/ai.md#css-variables-config)（css-variables）：配置本库主题、尺寸和状态外观。

### label

包：`@zui/label`；状态：无额外构建标记。

[使用参考](lib/label/ai.md) — 展示简短分类、计数或圆点状态标记。

关键词：标签、徽标、圆点、label。

- [.label](lib/label/ai.md#css-label)（css / component）：显示带背景、边框和圆角的短标签。
- [.label-dot / .size-sm / .size-lg](lib/label/ai.md#css-label-variants)（css / helper）：调整标签尺寸或显示圆点。
- [标签变量](lib/label/ai.md#vars-label)（css-variables）：配置外观变量及其作用节点。

### list

包：`@zui/list`；状态：无额外构建标记。

[使用参考](lib/list/ai.md) — 提供丰富条目、异步数据、选择与复选、分批显示和嵌套展开的原生及 Preact 列表。

关键词：列表、List、NestedList、Listitem、异步加载、树形数据、复选。

- [List / NestedList](lib/list/ai.md#vanilla-list)（vanilla）：在现有容器渲染普通或多级列表，包装 Preact 状态和方法。
- [List](lib/list/ai.md#preact-list)（preact）：支持加载、激活、复选及分批显示的 Preact 列表。
- [NestedList](lib/list/ai.md#preact-nested-list)（preact）：复用 List，并通过冒号键路径管理多级展开、激活与复选联动。
- [Listitem](lib/list/ai.md#preact-listitem)（preact）：单项视图，组合标题、文字、图标、头像、复选框、动作和自定义内容。
- [.list / .listitem](lib/list/ai.md#css-list)（css / component）：可独立使用的列表重置和单项布局。
- [条目部件和辅助状态类](lib/list/ai.md#css-list-parts)（css / helper）：配合 Listitem 管理内容布局、选择外观、懒显示和嵌套状态。
- [--list-indent / --list-nested-indent](lib/list/ai.md#css-list-indent)（css-variables）：由嵌套列表计算并用于各层缩进。
- [ListProps / ListItemsSetting / ListItemsFetcher](lib/list/ai.md#types-list-props)（types）：列表数据、选择、加载、分批显示和生命周期的完整继承契约。
- [NestedListProps / NestedItem / NestedListItem](lib/list/ai.md#types-nested-list-props)（types）：多级数据、展开控制、图标和父子复选行为。
- [ListitemProps / ListItem](lib/list/ai.md#types-listitem-props)（types）：普通列表项的完整可配置内容和样式字段。
- [ListState / NestedListState / ItemInfo / MouseEventInfo](lib/list/ai.md#types-list-state)（types）：列表状态快照及嵌套查询、点击信息的结构。
- [大量条目分批显示](lib/list/ai.md#recipe-limited-list)（recipes）：通过初始上限和更多按钮减少一次渲染数量。

### menu

包：`@zui/menu`；状态：无额外构建标记。

[使用参考](lib/menu/ai.md) — 提供静态菜单样式、原生与 Preact 菜单生成器，支持嵌套、选择、动态数据及搜索过滤。

关键词：菜单、menu、搜索菜单、多级菜单、导航、操作列表。

- [Menu](lib/menu/ai.md#vanilla-menu)（vanilla）：在现有容器中创建菜单，通过 render 更新数据并通过 $ 操作嵌套列表。
- [SearchMenu](lib/menu/ai.md#vanilla-search-menu)（vanilla）：创建带文本搜索和嵌套匹配的菜单，可显示搜索框及无结果提示。
- [Menu](lib/menu/ai.md#preact-menu)（preact）：Preact 嵌套菜单视图，使用 MenuOptions，并公开列表展开、选择和数据访问方法。
- [SearchMenu](lib/menu/ai.md#preact-search-menu)（preact）：Preact 可搜索菜单，复用 Menu 的选项与实例方法。
- [.menu / .menu-item / .menu-heading](lib/menu/ai.md#css-menu)（css / component）：无需 JS 的菜单容器、链接条目和分组标题。
- [菜单结构与状态辅助类](lib/menu/ai.md#css-menu-helpers)（css / helper）：调整菜单布局、图标、紧凑程度和单项状态。
- [.search-menu 及匹配状态类](lib/menu/ai.md#css-search-menu)（css / js-component）：SearchMenu 管理的头尾、匹配项和空结果提示样式。
- [菜单主题与尺寸变量](lib/menu/ai.md#css-menu-variables)（css-variables）：控制背景、高亮、标题、图标及嵌套缩进。
- [Menu.render](lib/menu/ai.md#javascript-menu-render)（javascript）：把数组、选项对象或选项工厂统一转换为 Preact 菜单 VNode。
- [SearchMenu.getSearchKeys / isItemMatch / underlineKeys](lib/menu/ai.md#javascript-search-menu-helpers)（javascript）：从 Preact SearchMenu 类访问关键词解析、条目匹配和高亮片段生成。
- [MenuOptions / MenuItemOptions / MenuSetting](lib/menu/ai.md#types-menu-options)（types）：菜单选项、嵌套条目和动态菜单设置的公开类型。
- [SearchMenuOptions / SearchMenuState](lib/menu/ai.md#types-search-menu-options)（types）：搜索框、关键词、嵌套匹配和结果上限的公开选项。
- [更新菜单与展开分支](lib/menu/ai.md#recipe-update-menu)（recipes）：通过包装实例更新数据，通过视图实例控制嵌套展开。

### messager

包：`@zui/messager`；状态：无额外构建标记。

[使用参考](lib/messager/ai.md) — 在页面固定位置展示可自动关闭的临时提示消息。

关键词：漂浮消息、messager、Messager。

- [Messager](lib/messager/ai.md#vanilla-messager)（vanilla）：创建和管理 Messager 原生实例。
- [MessagerItem](lib/messager/ai.md#preact-messager-item)（preact）：渲染 MessagerItem Preact 视图。
- [结构与部件](lib/messager/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [MessagerPlacement](lib/messager/ai.md#types-messager-placement)（types）：定义 MessagerPlacement 的字段、参数或取值范围。
- [MessagerEvents](lib/messager/ai.md#types-messager-events)（types）：定义 MessagerEvents 的字段、参数或取值范围。
- [MessagerOptions](lib/messager/ai.md#types-messager-options)（types）：定义 MessagerOptions 的字段、参数或取值范围。
- [MessagerItemOptions](lib/messager/ai.md#types-messager-item-options)（types）：定义 MessagerItemOptions 的字段、参数或取值范围。

### progress

包：`@zui/progress`；状态：无额外构建标记。

[使用参考](lib/progress/ai.md) — 通过 CSS 或动态组件呈现有界百分比、条纹和分段进度。

关键词：进度条、百分比、条纹、ProgressBar。

- [ProgressBar](lib/progress/ai.md#vanilla-progress)（vanilla）：以原生构造器创建和更新组件。
- [ProgressBar](lib/progress/ai.md#preact-progress)（preact）：渲染带 ARIA 数值的进度条。
- [.progress / .progress-bar](lib/progress/ai.md#css-progress)（css / component）：组成纯 CSS 进度容器和直接子进度段。
- [.progress-striped / .active](lib/progress/ai.md#css-progress-effects)（css / helper）：显示条纹与循环移动效果。
- [进度条变量](lib/progress/ai.md#vars-progress)（css-variables）：配置外观变量及其作用节点。
- [ProgressBarOptions](lib/progress/ai.md#types-progress)（types）：列出组件完整专有参数和回调约定。

### progress-circle

包：`@zui/progress-circle`；状态：无额外构建标记。

[使用参考](lib/progress-circle/ai.md) — 通过 SVG 呈现百分比圆环和中心文字。

关键词：环形进度、百分比、SVG、ProgressCircle。

- [ProgressCircle](lib/progress-circle/ai.md#vanilla-progress-circle)（vanilla）：以原生构造器创建和更新组件。
- [ProgressCircle](lib/progress-circle/ai.md#preact-progress-circle)（preact）：渲染按比例计算的 SVG 圆环。
- [环形进度的主题依赖](lib/progress-circle/ai.md#vars-progress-circle)（css-variables）：说明默认颜色引用的外部变量。
- [ProgressCircleOptions](lib/progress-circle/ai.md#types-progress-circle)（types）：列出组件完整专有参数和回调约定。

### scrollbar

包：`@zui/scrollbar`；状态：无额外构建标记。

[使用参考](lib/scrollbar/ai.md) — 提供 Preact 自定义滚动条，以及浏览器原生滚动条样式工具类。

关键词：滚动条、scrollbar、Scrollbar。

- [Scrollbar](lib/scrollbar/ai.md#preact-scrollbar)（preact）：渲染 Scrollbar Preact 视图。
- [结构与部件](lib/scrollbar/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/scrollbar/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [scrollbar-thin / scrollbar-hover / scrollbar-light](lib/scrollbar/ai.md#css-native-scrollbar)（css / utility）：调整原生滚动条细度、悬停显示和配色。
- [CSS 变量](lib/scrollbar/ai.md#css-variables-config)（css-variables）：配置本库主题、尺寸和状态外观。
- [OnScrollListener](lib/scrollbar/ai.md#types-on-scroll-listener)（types）：定义 OnScrollListener 的字段、参数或取值范围。
- [ScrollbarProps](lib/scrollbar/ai.md#types-scrollbar-props)（types）：定义 ScrollbarProps 的字段、参数或取值范围。
- [ScrollbarState](lib/scrollbar/ai.md#types-scrollbar-state)（types）：定义 ScrollbarState 的字段、参数或取值范围。

### time-span

包：`@zui/time-span`；状态：无额外构建标记。

[使用参考](lib/time-span/ai.md) — 格式化显示日期时间或自动刷新的相对时间，并提供 timeago 工具函数。

关键词：时间标签、time-span、TimeSpan、TimeAgo。

- [TimeSpan](lib/time-span/ai.md#vanilla-time-span)（vanilla）：创建和管理 TimeSpan 原生实例。
- [TimeAgo](lib/time-span/ai.md#vanilla-time-ago)（vanilla）：创建和管理 TimeAgo 原生实例。
- [TimeSpan](lib/time-span/ai.md#preact-time-span)（preact）：渲染 TimeSpan Preact 视图。
- [TimeAgo](lib/time-span/ai.md#preact-time-ago)（preact）：渲染 TimeAgo Preact 视图。
- [time-span / time-ago / is-invalid](lib/time-span/ai.md#css-time-markers)（css / js-component）：标识生成的时间内容，供业务样式选择。
- [timeago](lib/time-span/ai.md#javascript-timeago)（javascript）：将日期与基准时间的差值格式化为本地化相对时间。
- [TimeSpanProps](lib/time-span/ai.md#types-time-span-props)（types）：定义 TimeSpanProps 的字段、参数或取值范围。
- [TimeAgoProps](lib/time-span/ai.md#types-time-ago-props)（types）：定义 TimeAgoProps 的字段、参数或取值范围。
- [TimeAgoState](lib/time-span/ai.md#types-time-ago-state)（types）：定义 TimeAgoState 的字段、参数或取值范围。

## js-helpers

### core

包：`@zui/core`；状态：无额外构建标记。

[使用参考](lib/core/ai.md) — 提供组件生命周期、Preact 与 signals、DOM、请求、查询和资源加载基础设施。

关键词：核心、原生组件、Preact、signals、AJAX、query、Web Components、DOM。

- [Component](lib/core/ai.md#vanilla-component)（vanilla）：原生组件的实例关联、选项和事件生命周期基类。
- [ComponentFromReact](lib/core/ai.md#vanilla-component-from-react)（vanilla）：把 Preact 组件封装成原生构造器。
- [Custom](lib/core/ai.md#vanilla-custom)（vanilla）：将 CustomContent 放入原生组件容器。
- [Sticky](lib/core/ai.md#vanilla-sticky)（vanilla）：为元素添加吸附定位并跟踪 pinned 状态。
- [HElement](lib/core/ai.md#preact-helement)（preact）：有 HTML 根节点、命令与查询生命周期的 Preact 基类。
- [HtmlContent / LazyContent / CustomContent / CustomContentClass / CustomRender / Icon](lib/core/ai.md#preact-content)（preact）：渲染 HTML、异步内容、自定义内容和图标。
- [ZUI / QueryClientProvider / QueryClientContext / Portal](lib/core/ai.md#preact-bridge)（preact）：在 Preact 中托管原生组件、查询客户端与 portal。
- [ZuiElement / ComponentElement / PreactElement / createWebComponent / defineWebComponent / property](lib/core/ai.md#web-components-factory)（web-components）：构建和注册具有显式属性契约的自定义元素。
- [$ / cash](lib/core/ai.md#javascript-cash)（javascript）：使用 Cash DOM 集合及 ZUI 扩展。
- [create / init / getComponent / registerComponent / initGlobalComponents / defineFn](lib/core/ai.md#javascript-creator)（javascript）：注册原生组件并初始化声明式节点。
- [signal / computed / effect / batch / untracked / Signal](lib/core/ai.md#javascript-signals)（javascript）：使用不依赖 hooks 的响应式状态。
- [createQuery / createInfiniteQuery / createMutation / QueryClient](lib/core/ai.md#javascript-query)（javascript）：通过 signals 读取共享查询缓存与 mutation 状态。
- [Ajax / fetchData / isFetchSetting](lib/core/ai.md#javascript-ajax)（javascript）：请求数据并统一处理响应、错误和取消。
- [getClassList / classes](lib/core/ai.md#javascript-classes)（javascript）：组合条件类名，后出现的同名条件覆盖前者。
- [storeData / takeData / clearData](lib/core/ai.md#javascript-data)（javascript）：WeakMap 关联对象数据。
- [evalValue / parseRawData / jsRaw](lib/core/ai.md#javascript-raw-data)（javascript）：evalValue 用 new Function 求值。
- [getZData / setZData](lib/core/ai.md#javascript-z)（javascript）：读取/写入 z- 前缀属性。
- [mergeProps / removeUndefinedProps](lib/core/ai.md#javascript-merge-props)（javascript）：直接修改第一个 props 对象。
- [parseSize / toCssSize](lib/core/ai.md#javascript-size)（javascript）：数字默认 px，百分比保留，分数转换百分比。
- [isDiff](lib/core/ai.md#javascript-is-diff)（javascript）：递归比较对象与数组，函数比较 toString。
- [nextGid](lib/core/ai.md#javascript-gid)（javascript）：模块内递增数值，不是跨窗口或持久化唯一 ID。
- [delay](lib/core/ai.md#javascript-delay)（javascript）：ms 为毫秒，setTimerID 可接收定时器 ID。
- [debounce](lib/core/ai.md#javascript-debounce)（javascript）：默认 delay=0、immediate=false。
- [waitUntil](lib/core/ai.md#javascript-wait-until)（javascript）：interval 默认100ms，timeout默认60000ms。
- [tryExec](lib/core/ai.md#javascript-try-exec)（javascript）：仅捕获同步调用异常，调用 onError 后返回 undefined。
- [copyText / copy](lib/core/ai.md#javascript-copy)（javascript）：copy 支持字符串、{text,html,MIME:Blob/string} 或 ClipboardItems。
- [readFile](lib/core/ai.md#javascript-read-file)（javascript）：FileReader 按 UTF-8 文本读取，读取错误 reject。
- [selectFile](lib/core/ai.md#javascript-select-file)（javascript）：options 可为 accept 字符串或 {accept,multiple}。
- [downloadFile](lib/core/ai.md#javascript-download-file)（javascript）：接受 Blob、Response 或 URL，触发下载并返回 Blob。
- [disableScroll](lib/core/ai.md#javascript-scroll)（javascript）：disable 默认 true，切换目标滚动锁定。
- [getHotkeysMap / bindHotkeys / unbindHotkeys / hotkeys](lib/core/ai.md#javascript-hotkeys)（javascript）：getHotkeysMap 归并默认配置。
- [getFullscreenElement / enterFullscreen / toggleFullscreen](lib/core/ai.md#javascript-fullscreen)（javascript）：进入使用目标 selector 或 {target,onError,onSuccess,afterEnter,afterExit}，依赖浏览器全屏权限。
- [parseCommand / parseCommands / executeCommand / executeCommands / registerGlobalCommand / bindCommands / unbindCommands](lib/core/ai.md#javascript-commands)（javascript）：命令形如 /scope~name/参数?选项=值。
- [registerGlobalListener](lib/core/ai.md#javascript-global-event)（javascript）：设置 document 上委托的 zui-on/zui-on-事件/data-on 监听。
- [runJS](lib/core/ai.md#javascript-run-js)（javascript）：执行目标节点中的脚本或指定 jsCode，可用 removeAfterRun 控制移除。
- [Computed](lib/core/ai.md#javascript-computed)（javascript）：按显式依赖缓存计算结果。
- [Bus / bus](lib/core/ai.md#javascript-bus)（javascript）：提供基于 Cash 的 DOM 事件总线。
- [getLib / registerLib / setLibRoot / loadJS / loadCSS / loadModule / LibLoader](lib/core/ai.md#javascript-loader)（javascript）：按需加载并缓存外部脚本、样式或模块。
- [dom](lib/core/ai.md#javascript-dom)（javascript）：集中提供可见性、滚动、尺寸观察和选择文本方法。
- [createFormData / setFormDataValue / i18n / getLang / registerReactComponent / getReactComponent / html / jsx / VERSION / BUILD / BUILD\_MODE / BUILD\_HASH / shareData](lib/core/ai.md#javascript-form-i18n-registry)（javascript）：表单数据、词典、视图注册和构建信息。
- [ComponentOptions / ComponentBaseOptions](lib/core/ai.md#types-component-options)（types）：原生组件共享选项和生命周期回调。
- [HElementProps](lib/core/ai.md#types-helement-props)（types）：Preact HTML 根节点组件共享属性。
- [AjaxSetting / FetcherSetting / AJAX 回调](lib/core/ai.md#types-ajax)（types）：网络请求与数据提供器的完整选项。
- [HtmlContentProps / LazyContentProps / CustomContentProps / IconProps](lib/core/ai.md#types-content)（types）：内容渲染器的属性定义。
- [ClassNameLike / SizeSetting / DebounceOptions / WaitUntilOptions / GetLibOptions 等](lib/core/ai.md#types-helper-options)（types）：工具方法选项与公开类型入口。
- [CommandContext / CommandCallback / CommandsBindOptions / CommandExecutionOptions](lib/core/ai.md#types-command-options)（types）：命令解析、参数、回调与批量执行结构。
- [LoadJSOptions / LoadJSModuleOptions / LoadCSSOptions / GetLibOptions](lib/core/ai.md#types-loading-options)（types）：异步脚本、样式和命名模块的加载配置。
- [HotkeysBindingOptions / HotkeysMap / CopyContents / EnterFullscreenOptions / StickyOptions / GlobalEventOptions](lib/core/ai.md#types-interaction-options)（types）：键盘、剪贴板、全屏、吸附与全局事件选项。
- [ComponentEvents / ComponentToggleConfig / ComponentCreateOptions / ZUIInitOptions](lib/core/ai.md#types-component-events)（types）：组件事件、初始化与触发配置。
- [WebComponentConfig / ElementProperty / ElementSlotMap 及工厂类型](lib/core/ai.md#types-web-component-config)（types）：自定义元素属性转换、注册、slot和适配配置。
- [QueryController / InfiniteQueryController / MutationController / QueryClientProviderProps](lib/core/ai.md#types-query-controllers)（types）：查询生命周期和数据泛型。

### dnd

包：`@zui/dnd`；状态：无额外构建标记。

[使用参考](lib/dnd/ai.md) — 为现有 DOM 提供拖放、区域约束移动和八方向尺寸调整。

关键词：Draggable、Moveable、Resizable、拖拽、尺寸。

- [Draggable](lib/dnd/ai.md#vanilla-draggable)（vanilla）：在容器中拖动 DOM 并处理合法放置目标。
- [Moveable](lib/dnd/ai.md#vanilla-moveable)（vanilla）：按鼠标位移移动或滚动目标并约束区域。
- [Resizable](lib/dnd/ai.md#vanilla-resizable)（vanilla）：为现有元素生成八方向尺寸手柄。
- [resizable / resizable-handle](lib/dnd/ai.md#css-resizable)（css / js-component）：尺寸调整容器与手柄外观。
- [has-dragging / is-dragging / is-droppable / is-dropping / has-moving / is-moving / has-resizing / is-resizing](lib/dnd/ai.md#css-dnd-states)（css / helper）：组件写入的操作状态钩子。
- [--side-handle-\* / --corner-handle-width](lib/dnd/ai.md#css-variables-resizable)（css-variables）：在 .resizable 上设置手柄尺寸与颜色。
- [DraggableOptions / DraggableState](lib/dnd/ai.md#types-draggable)（types）：拖放目标、回调和状态。
- [MoveableOptions / MoveableState / MoveableStrategy / DistanceRect](lib/dnd/ai.md#types-moveable)（types）：移动区域、策略、回调和坐标。
- [ResizableOptions / ResizableState / ResizableDirection](lib/dnd/ai.md#types-resizable)（types）：调整尺寸的选项、更新结果和方向。

### event-bus

包：`@zui/event-bus`；状态：无额外构建标记。

[使用参考](lib/event-bus/ai.md) — 基于 EventTarget 提供类型化事件订阅、一次性监听、自定义事件后缀及批量解除。

关键词：事件总线、事件订阅、EventBus、EventHub、EventEmitter。

- [EventEmitter](lib/event-bus/ai.md#javascript-event-emitter)（javascript）：包装 EventTarget 的监听、一次性监听、移除与同步派发。 关键词：原生事件、EventTarget。
- [EventBus](lib/event-bus/ai.md#javascript-event-bus)（javascript）：在 EventEmitter 上提供事件映射泛型与按名称创建 Event 或 CustomEvent。 关键词：类型安全、detail。
- [EventHub](lib/event-bus/ai.md#javascript-event-hub)（javascript）：为自定义事件追加后缀，并记录本实例的监听以支持 offAll。 关键词：命名空间、批量解除。
- [nativeEvents](lib/event-bus/ai.md#javascript-native-events)（javascript）：EventBus 与 EventHub 判断事件对象类型和是否追加后缀的公开 Set。
- [CustomEventMap / CustomEventListener](lib/event-bus/ai.md#types-custom-events)（types）：描述事件名到事件对象的映射，以及接收该事件对象的回调。
- [组件生命周期中的事件清理](lib/event-bus/ai.md#recipe-owned-target)（recipes）：自行拥有事件目标，在页面退出时批量释放 Hub 的监听。

### form-helper

包：`@zui/form-helper`；状态：无额外构建标记。

[使用参考](lib/form-helper/ai.md) — 统一读取和设置原生表单字段及 ZUI 控件值。

关键词：表单、字段、取值、赋值、FormHelper。

- [FormHelper / formHelper](lib/form-helper/ai.md#javascript-form-helper)（javascript）：在一个表单作用域中定位和更新字段。
- [FormHelperOptions / FormField / FormControlInfo / 查找器](lib/form-helper/ai.md#types-form-helper)（types）：定义字段、控件值适配和查询行为。

### sortable

包：`@zui/sortable`；状态：无额外构建标记。

[使用参考](lib/sortable/ai.md) — 异步加载 SortableJS，为 DOM、列表和树提供拖动排序。

关键词：Sortable、SortableList、SortableTree、排序、拖拽。

- [Sortable](lib/sortable/ai.md#vanilla-sortable)（vanilla）：包装 SortableJS，排序现有子元素。
- [SortableList / SortableTree](lib/sortable/ai.md#vanilla-sortable-list-tree)（vanilla）：用原生构造器创建可排序列表或树。
- [SortableList / SortableTree (Preact)](lib/sortable/ai.md#preact-sortable-views)（preact）：在 List/Tree 上挂载排序器并返回新顺序。
- [sortable-list](lib/sortable/ai.md#css-sortable-list)（css / js-component）：可排序列表的内容和拖动影像样式。
- [sortable-ghost / sortable-empty-shadow](lib/sortable/ai.md#css-sortable-shadow)（css / helper）：拖动占位和隐藏拖动影像辅助类。
- [SortableOptions / SortableJSOptions / SortableEvent / SortableModule / SortableClass](lib/sortable/ai.md#types-sortable-options)（types）：透传 SortableJS 参数并扩展拖动影像。
- [SortableListProps / SortableTreeProps / SortableListState / SortableTreeState](lib/sortable/ai.md#types-sortable-views)（types）：可排序视图属性及继承状态。

### split

包：`@zui/split`；状态：无额外构建标记。

[使用参考](lib/split/ai.md) — 创建可拖动、折叠的水平或垂直分栏。

关键词：分栏、拖动、侧栏、Split。

- [Split](lib/split/ai.md#vanilla-split)（vanilla）：创建、拖动并折叠分栏。
- [.split / .split-cell / .gutter](lib/split/ai.md#css-split)（css / js-component）：为原生 Split 提供容器、分栏和间隔样式。
- [.split-vert / .has-animation / .is-collapsed](lib/split/ai.md#css-split-state)（css / helper）：配合分栏的方向、动画与折叠标记。
- [--split-gutter-size](lib/split/ai.md#variables-split)（css-variables）：控制折叠间隔的偏移计算。
- [Split.SplitJS](lib/split/ai.md#javascript-splitjs)（javascript）：访问随库提供的 Split.js 原始函数。
- [SplitOptions](lib/split/ai.md#types-split-options)（types）：ZUI 分栏配置与 Split.js 继承项。

### store

包：`@zui/store`；状态：无额外构建标记。

[使用参考](lib/store/ai.md) — 按命名空间读写本地及会话存储，并在不可用时回退内存。

关键词：存储、localStorage、sessionStorage、Store。

- [Store](lib/store/ai.md#javascript-store)（javascript）：按配置 ID 隔离持久化或会话存储。
- [store / store.create](lib/store/ai.md#javascript-default-store)（javascript）：使用默认存储实例或创建独立配置。
- [StoreType](lib/store/ai.md#types-store-type)（types）：存储后端类型。

## component

### avatar

包：`@zui/avatar`；状态：无额外构建标记。

[使用参考](lib/avatar/ai.md) — 展示图片、图标或文字缩写，并根据身份生成稳定背景色。

关键词：头像、成员、缩写、图片回退、Avatar。

- [Avatar](lib/avatar/ai.md#vanilla-avatar)（vanilla）：以原生构造器创建和更新组件。
- [Avatar](lib/avatar/ai.md#preact-avatar)（preact）：按图片、图标、文字优先级渲染头像。
- [.avatar](lib/avatar/ai.md#css-avatar)（css / component）：显示裁剪为方形的图片、文字或图标。
- [.size-xs / .size-sm / .size-lg / .size-xl](lib/avatar/ai.md#css-avatar-size)（css / helper）：设置头像预设大小。
- [.avatar-img / .avatar-text / .has-img / .has-icon / .has-text](lib/avatar/ai.md#css-avatar-generated)（css / js-component）：标识 Avatar 生成的内容和状态。
- [头像变量](lib/avatar/ai.md#vars-avatar)（css-variables）：配置外观变量及其作用节点。
- [AvatarOptions](lib/avatar/ai.md#types-avatar)（types）：列出组件完整专有参数和回调约定。

### avatar-group

包：`@zui/avatar-group`；状态：无额外构建标记。

[使用参考](lib/avatar-group/ai.md) — 将多个头像叠放并使用描边区分相邻成员。

关键词：头像组、成员列表、avatar group。

- [.avatar-group](lib/avatar-group/ai.md#css-avatar-group)（css / component）：水平叠放直接子头像。
- [.size-xs / .size-sm / .size-lg / .size-xl](lib/avatar-group/ai.md#css-avatar-group-size)（css / helper）：改变头像组的堆叠距离。
- [头像组变量](lib/avatar-group/ai.md#vars-avatar-group)（css-variables）：配置外观变量及其作用节点。

### btn-group

包：`@zui/btn-group`；状态：无额外构建标记。

[使用参考](lib/btn-group/ai.md) — 将多个按钮连接成一组，支持数据驱动渲染与自定义项目。

关键词：按钮组、操作组、BtnGroup。

- [BtnGroup](lib/btn-group/ai.md#vanilla-btn-group)（vanilla）：以原生构造器创建和更新组件。
- [BtnGroup](lib/btn-group/ai.md#preact-btn-group)（preact）：使用 CommonList 项目管线生成相连按钮。
- [.btn-group](lib/btn-group/ai.md#css-btn-group)（css / component）：连接直接子按钮的边缘。
- [BtnGroupOptions / BtnGroupItem](lib/btn-group/ai.md#types-btn-group)（types）：列出组件完整专有参数和回调约定。

### calendar

包：`@zui/calendar`；状态：无额外构建标记。

[使用参考](lib/calendar/ai.md) — 展示按日期组织的日历事件及日历集，支持月视图导航和事件交互。

关键词：日历、calendar、Calendar。

- [Calendar](lib/calendar/ai.md#vanilla-calendar)（vanilla）：创建和管理 Calendar 原生实例。
- [Calendar](lib/calendar/ai.md#preact-calendar)（preact）：渲染 Calendar Preact 视图。
- [结构与部件](lib/calendar/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/calendar/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [mergeCategories / mergeEvents / getMonthViewInfo](lib/calendar/ai.md#javascript-calendar-helpers)（javascript）：归并日历集和事件，并计算月份视图边界。
- [CalendarEvent](lib/calendar/ai.md#types-calendar-event)（types）：定义 CalendarEvent 的字段、参数或取值范围。
- [CalendarViewMode](lib/calendar/ai.md#types-calendar-view-mode)（types）：定义 CalendarViewMode 的字段、参数或取值范围。
- [CalendarCategory](lib/calendar/ai.md#types-calendar-category)（types）：定义 CalendarCategory 的字段、参数或取值范围。
- [CalendarProps](lib/calendar/ai.md#types-calendar-props)（types）：定义 CalendarProps 的字段、参数或取值范围。
- [CalendarState](lib/calendar/ai.md#types-calendar-state)（types）：定义 CalendarState 的字段、参数或取值范围。
- [CalendarMonthViewProps](lib/calendar/ai.md#types-calendar-month-view-props)（types）：定义 CalendarMonthViewProps 的字段、参数或取值范围。

### color-picker

包：`@zui/color-picker`；状态：无额外构建标记。

[使用参考](lib/color-picker/ai.md) — 提供预设颜色弹出选择器和原生颜色输入框，支持颜色同步。

关键词：颜色选择器、color-picker、ColorPicker、ColorInput。

- [ColorPicker](lib/color-picker/ai.md#vanilla-color-picker)（vanilla）：创建和管理 ColorPicker 原生实例。
- [ColorInput](lib/color-picker/ai.md#vanilla-color-input)（vanilla）：创建和管理 ColorInput 原生实例。
- [ColorPicker](lib/color-picker/ai.md#preact-color-picker)（preact）：渲染 ColorPicker Preact 视图。
- [ColorInput](lib/color-picker/ai.md#preact-color-input)（preact）：渲染 ColorInput Preact 视图。
- [结构与部件](lib/color-picker/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/color-picker/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [CSS 变量](lib/color-picker/ai.md#css-variables-config)（css-variables）：配置本库主题、尺寸和状态外观。
- [ColorPickerOptions](lib/color-picker/ai.md#types-color-picker-options)（types）：定义 ColorPickerOptions 的字段、参数或取值范围。
- [ColorInputOptions](lib/color-picker/ai.md#types-color-input-options)（types）：定义 ColorInputOptions 的字段、参数或取值范围。

### copy-btn

包：`@zui/copy-btn`；状态：无额外构建标记。

[使用参考](lib/copy-btn/ai.md) — 为按钮提供文本或 HTML 复制、成功提示及异步复制回调。

关键词：复制按钮、copy-btn、CopyBtn。

- [CopyBtn](lib/copy-btn/ai.md#vanilla-copy-btn)（vanilla）：创建和管理 CopyBtn 原生实例。
- [CopyBtn](lib/copy-btn/ai.md#preact-copy-btn)（preact）：渲染 CopyBtn Preact 视图。
- [is-copying / is-copied](lib/copy-btn/ai.md#css-copy-state)（css / helper）：复制过程中由原生组件维护的状态标记。
- [CopyBtnOptions](lib/copy-btn/ai.md#types-copy-btn-options)（types）：定义 CopyBtnOptions 的字段、参数或取值范围。
- [CopyBtnProps](lib/copy-btn/ai.md#types-copy-btn-props)（types）：定义 CopyBtnProps 的字段、参数或取值范围。

### datetime-picker

包：`@zui/datetime-picker`；状态：无额外构建标记。

[使用参考](lib/datetime-picker/ai.md) — 提供日期、时间和日期时间输入选择器，以及可组合的日期与时间菜单。

关键词：日期时间选择器、datetime-picker、TimePicker、DatePicker、DatetimePicker。

- [TimePicker](lib/datetime-picker/ai.md#vanilla-time-picker)（vanilla）：创建和管理 TimePicker 原生实例。
- [DatePicker](lib/datetime-picker/ai.md#vanilla-date-picker)（vanilla）：创建和管理 DatePicker 原生实例。
- [DatetimePicker](lib/datetime-picker/ai.md#vanilla-datetime-picker)（vanilla）：创建和管理 DatetimePicker 原生实例。
- [TimePicker](lib/datetime-picker/ai.md#preact-time-picker)（preact）：渲染 TimePicker Preact 视图。
- [TimePickerMenu](lib/datetime-picker/ai.md#preact-time-picker-menu)（preact）：渲染 TimePickerMenu Preact 视图。
- [DatePicker](lib/datetime-picker/ai.md#preact-date-picker)（preact）：渲染 DatePicker Preact 视图。
- [DatePickerMenu](lib/datetime-picker/ai.md#preact-date-picker-menu)（preact）：渲染 DatePickerMenu Preact 视图。
- [DatetimePicker](lib/datetime-picker/ai.md#preact-datetime-picker)（preact）：渲染 DatetimePicker Preact 视图。
- [结构与部件](lib/datetime-picker/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/datetime-picker/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [CSS 变量](lib/datetime-picker/ai.md#css-variables-config)（css-variables）：配置本库主题、尺寸和状态外观。
- [getDate / campDate](lib/datetime-picker/ai.md#javascript-date-helpers)（javascript）：解析日期设置并按上下界钳制日期。
- [DateGetter](lib/datetime-picker/ai.md#types-date-getter)（types）：定义 DateGetter 的字段、参数或取值范围。
- [DateSetting](lib/datetime-picker/ai.md#types-date-setting)（types）：定义 DateSetting 的字段、参数或取值范围。
- [TimePickerOptions](lib/datetime-picker/ai.md#types-time-picker-options)（types）：定义 TimePickerOptions 的字段、参数或取值范围。
- [TimePickerMenuProps](lib/datetime-picker/ai.md#types-time-picker-menu-props)（types）：定义 TimePickerMenuProps 的字段、参数或取值范围。
- [DatePickerOptions](lib/datetime-picker/ai.md#types-date-picker-options)（types）：定义 DatePickerOptions 的字段、参数或取值范围。
- [DatePickerMenuProps](lib/datetime-picker/ai.md#types-date-picker-menu-props)（types）：定义 DatePickerMenuProps 的字段、参数或取值范围。
- [DatePickerMenuState](lib/datetime-picker/ai.md#types-date-picker-menu-state)（types）：定义 DatePickerMenuState 的字段、参数或取值范围。
- [DatetimePickerOptions](lib/datetime-picker/ai.md#types-datetime-picker-options)（types）：定义 DatetimePickerOptions 的字段、参数或取值范围。
- [MiniCalendarProps](lib/datetime-picker/ai.md#types-mini-calendar-props)（types）：定义 MiniCalendarProps 的字段、参数或取值范围。

### file-list

包：`@zui/file-list`；状态：无额外构建标记。

[使用参考](lib/file-list/ai.md) — 展示本地或服务器文件，支持四种布局、图标、标签、缩略图和悬停预览。

关键词：文件列表、FileList、附件、缩略图、文件网格。

- [FileList](lib/file-list/ai.md#vanilla-file-list)（vanilla）：在容器显示文件集合。
- [FileList](lib/file-list/ai.md#preact-file-list)（preact）：List 派生的文件视图，自动规范文件元信息。
- [文件列表和视图部件](lib/file-list/ai.md#css-file-list)（css / js-component）：根据 mode 和 thumbnail 配置输出的布局。
- [网格与头像变量](lib/file-list/ai.md#css-file-list-vars)（css-variables）：设置文件网格尺寸。
- [FileList.getFileIcon / getFileIconMap / fileIconOfTypes](lib/file-list/ai.md#javascript-file-icons)（javascript）：Preact 类静态文件图标映射工具。
- [FileListProps 与图标类型](lib/file-list/ai.md#types-file-list-props)（types）：文件显示专有配置，其他行为继承 ListProps。
- [FileInfo / OriginFileInfo / FileInfoLike](lib/file-list/ai.md#types-file-info)（types）：服务器文件和原生 File 的输入结构。
- [带缩略图的网格](lib/file-list/ai.md#recipe-file-grid)（recipes）：启用网格和图片预览。

### file-selector

包：`@zui/file-selector`；状态：无额外构建标记。

[使用参考](lib/file-selector/ai.md) — 选择、预览、校验、重命名与移除文件，支持静态文件回显及图片网格。

关键词：文件选择器、file-selector、FileSelector、ImageSelector。

- [FileSelector](lib/file-selector/ai.md#vanilla-file-selector)（vanilla）：创建和管理 FileSelector 原生实例。
- [ImageSelector](lib/file-selector/ai.md#vanilla-image-selector)（vanilla）：创建和管理 ImageSelector 原生实例。
- [FileSelector](lib/file-selector/ai.md#preact-file-selector)（preact）：渲染 FileSelector Preact 视图。
- [ImageSelector](lib/file-selector/ai.md#preact-image-selector)（preact）：渲染 ImageSelector Preact 视图。
- [结构与部件](lib/file-selector/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/file-selector/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [CSS 变量](lib/file-selector/ai.md#css-variables-config)（css-variables）：配置本库主题、尺寸和状态外观。
- [FileSize](lib/file-selector/ai.md#types-file-size)（types）：定义 FileSize 的字段、参数或取值范围。
- [FileInfo](lib/file-selector/ai.md#types-file-info)（types）：定义 FileInfo 的字段、参数或取值范围。
- [StaticFileInfo](lib/file-selector/ai.md#types-static-file-info)（types）：定义 StaticFileInfo 的字段、参数或取值范围。
- [FileSelectorMode](lib/file-selector/ai.md#types-file-selector-mode)（types）：定义 FileSelectorMode 的字段、参数或取值范围。
- [FileSelectorProps](lib/file-selector/ai.md#types-file-selector-props)（types）：定义 FileSelectorProps 的字段、参数或取值范围。
- [FileSelectorState](lib/file-selector/ai.md#types-file-selector-state)（types）：定义 FileSelectorState 的字段、参数或取值范围。
- [ImageSelectorProps](lib/file-selector/ai.md#types-image-selector-props)（types）：定义 ImageSelectorProps 的字段、参数或取值范围。

### form-builder

包：`@zui/form-builder`；状态：无额外构建标记。

[使用参考](lib/form-builder/ai.md) — 依据表单 Schema 生成控件、维护数据、动态字段与校验结果。

关键词：表单生成器、form-builder、FormBuilder。

- [FormBuilder](lib/form-builder/ai.md#vanilla-form-builder)（vanilla）：创建和管理 FormBuilder 原生实例。
- [FormBuilder](lib/form-builder/ai.md#preact-form-builder)（preact）：渲染 FormBuilder Preact 视图。
- [结构与部件](lib/form-builder/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/form-builder/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [FormWidgetType](lib/form-builder/ai.md#types-form-widget-type)（types）：定义 FormWidgetType 的字段、参数或取值范围。
- [FormWidgetValueChangeHandler](lib/form-builder/ai.md#types-form-widget-value-change-handler)（types）：定义 FormWidgetValueChangeHandler 的字段、参数或取值范围。
- [FormWidgetSetting](lib/form-builder/ai.md#types-form-widget-setting)（types）：定义 FormWidgetSetting 的字段、参数或取值范围。
- [FormWidgetSettingDefinition](lib/form-builder/ai.md#types-form-widget-setting-definition)（types）：定义 FormWidgetSettingDefinition 的字段、参数或取值范围。
- [FormWidgetMap](lib/form-builder/ai.md#types-form-widget-map)（types）：定义 FormWidgetMap 的字段、参数或取值范围。
- [FormBuilderOptions](lib/form-builder/ai.md#types-form-builder-options)（types）：定义 FormBuilderOptions 的字段、参数或取值范围。
- [JSONSchemaType](lib/form-builder/ai.md#types-jsonschema-type)（types）：定义 JSONSchemaType 的字段、参数或取值范围。
- [FormValidateRule](lib/form-builder/ai.md#types-form-validate-rule)（types）：定义 FormValidateRule 的字段、参数或取值范围。
- [FormExtra](lib/form-builder/ai.md#types-form-extra)（types）：定义 FormExtra 的字段、参数或取值范围。
- [FormGridWidth](lib/form-builder/ai.md#types-form-grid-width)（types）：定义 FormGridWidth 的字段、参数或取值范围。
- [FormDisplayType](lib/form-builder/ai.md#types-form-display-type)（types）：定义 FormDisplayType 的字段、参数或取值范围。
- [FormDisplayMode](lib/form-builder/ai.md#types-form-display-mode)（types）：定义 FormDisplayMode 的字段、参数或取值范围。
- [FormValidateRulePattern](lib/form-builder/ai.md#types-form-validate-rule-pattern)（types）：定义 FormValidateRulePattern 的字段、参数或取值范围。
- [BaseSchema](lib/form-builder/ai.md#types-base-schema)（types）：定义 BaseSchema 的字段、参数或取值范围。
- [StringSchema](lib/form-builder/ai.md#types-string-schema)（types）：定义 StringSchema 的字段、参数或取值范围。
- [NumberSchema](lib/form-builder/ai.md#types-number-schema)（types）：定义 NumberSchema 的字段、参数或取值范围。
- [IntegerSchema](lib/form-builder/ai.md#types-integer-schema)（types）：定义 IntegerSchema 的字段、参数或取值范围。
- [BooleanSchema](lib/form-builder/ai.md#types-boolean-schema)（types）：定义 BooleanSchema 的字段、参数或取值范围。
- [ObjectSchema](lib/form-builder/ai.md#types-object-schema)（types）：定义 ObjectSchema 的字段、参数或取值范围。
- [MapSchema](lib/form-builder/ai.md#types-map-schema)（types）：定义 MapSchema 的字段、参数或取值范围。
- [ArraySchema](lib/form-builder/ai.md#types-array-schema)（types）：定义 ArraySchema 的字段、参数或取值范围。
- [JSONSchema](lib/form-builder/ai.md#types-jsonschema)（types）：定义 JSONSchema 的字段、参数或取值范围。
- [JSONSchemaTypes](lib/form-builder/ai.md#types-jsonschema-types)（types）：定义 JSONSchemaTypes 的字段、参数或取值范围。
- [JSONSchemaDataType](lib/form-builder/ai.md#types-jsonschema-data-type)（types）：定义 JSONSchemaDataType 的字段、参数或取值范围。
- [ExpressionOrValue](lib/form-builder/ai.md#types-expression-or-value)（types）：定义 ExpressionOrValue 的字段、参数或取值范围。
- [FormLayout](lib/form-builder/ai.md#types-form-layout)（types）：定义 FormLayout 的字段、参数或取值范围。
- [FormSchema](lib/form-builder/ai.md#types-form-schema)（types）：定义 FormSchema 的字段、参数或取值范围。
- [FieldSchemaInfo](lib/form-builder/ai.md#types-field-schema-info)（types）：定义 FieldSchemaInfo 的字段、参数或取值范围。

### input-group

包：`@zui/input-group`；状态：无额外构建标记。

[使用参考](lib/input-group/ai.md) — 把输入框、附加文字与按钮连接成连续的横向控件。

关键词：输入组、前缀、后缀、input group。

- [.input-group](lib/input-group/ai.md#css-input-group)（css / component）：连接输入框及其直接子项。
- [.input-group-addon / .input-group-control / .size-sm / .size-lg](lib/input-group/ai.md#css-input-group-parts)（css / helper）：提供附加块、伸展包装与尺寸。
- [输入组变量](lib/input-group/ai.md#vars-input-group)（css-variables）：配置外观变量及其作用节点。

### json-ui

包：`@zui/json-ui`；状态：无额外构建标记。

[使用参考](lib/json-ui/ai.md) — 将 JSON 节点或带状态的文档渲染为已注册组件，连接宿主事件并约束内容权限。

关键词：JSON UI、声明式界面、状态、表达式、绑定、宿主动作、JsonUI、validateJsonUI。

- [JsonUI](lib/json-ui/ai.md#vanilla-json-ui)（vanilla）：创建界面、更新 schema 并管理文档状态。
- [JsonUI](lib/json-ui/ai.md#preact-json-ui)（preact）：使用 Preact 管理节点树或有状态文档。
- [.json-ui-error](lib/json-ui/ai.md#css-json-ui-error)（css / js-component）：标识内容或协议失败时生成的错误占位。
- [validateJsonUI](lib/json-ui/ai.md#javascript-validate)（javascript）：不渲染、不加载远程内容地校验 UI 协议。
- [JsonUIError](lib/json-ui/ai.md#javascript-error)（javascript）：提供可定位 JSON 路径的标准错误。
- [JsonUIProps / JsonUIOptions 与完整协议类型](lib/json-ui/ai.md#types-json-ui)（types）：定义公开节点、文档、动作、权限和状态类型。
- [JsonUINode 与五种节点](lib/json-ui/ai.md#types-nodes)（types）：说明每种节点的字段、默认值和递归位置。
- [JsonUIDocument / bind / model / when](lib/json-ui/ai.md#types-document)（types）：定义有状态文档及受控绑定。
- [JsonUIExpression](lib/json-ui/ai.md#types-expressions)（types）：使用受限 JSON 表达式读取和组合数据。
- [JsonUICommand / JsonUICommands / JsonUIWatch](lib/json-ui/ai.md#types-commands)（types）：在同步事务中修改 state、分支、返回和响应字段变化。
- [原生输入双向绑定](lib/json-ui/ai.md#recipe-native-model)（recipes）：利用 event 投影更新文档 state。
- [本地省市联动](lib/json-ui/ai.md#recipe-local-cascade)（recipes）：通过 computed、model 和 watch 连接两个 Picker，无需业务回调。 关键词：级联选择、Picker、组件联动。
- [宿主事件、Markdown、HTML 与异步内容](lib/json-ui/ai.md#recipe-host-and-permissions)（recipes）：为声明式节点提供受控的宿主能力。

### modal

包：`@zui/modal`；状态：无额外构建标记。

[使用参考](lib/modal/ai.md) — 提供静态模态框、动态内容对话框，以及 alert、confirm、prompt 异步交互。

关键词：模态框、modal、ModalBase、Modal、ModalTrigger。

- [ModalBase](lib/modal/ai.md#vanilla-modal-base)（vanilla）：创建和管理 ModalBase 原生实例。
- [Modal](lib/modal/ai.md#vanilla-modal)（vanilla）：创建和管理 Modal 原生实例。
- [ModalTrigger](lib/modal/ai.md#vanilla-modal-trigger)（vanilla）：创建和管理 ModalTrigger 原生实例。
- [ModalDialog](lib/modal/ai.md#preact-modal-dialog)（preact）：渲染 ModalDialog Preact 视图。
- [ModalIframeContent](lib/modal/ai.md#preact-modal-iframe-content)（preact）：渲染 ModalIframeContent Preact 视图。
- [结构与部件](lib/modal/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/modal/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [CSS 变量](lib/modal/ai.md#css-variables-config)（css-variables）：配置本库主题、尺寸和状态外观。
- [ModalPosition](lib/modal/ai.md#types-modal-position)（types）：定义 ModalPosition 的字段、参数或取值范围。
- [ModalPositionPreset](lib/modal/ai.md#types-modal-position-preset)（types）：定义 ModalPositionPreset 的字段、参数或取值范围。
- [ModalPositionCallback](lib/modal/ai.md#types-modal-position-callback)（types）：定义 ModalPositionCallback 的字段、参数或取值范围。
- [ModalPositionSetting](lib/modal/ai.md#types-modal-position-setting)（types）：定义 ModalPositionSetting 的字段、参数或取值范围。
- [ModalBackdropType](lib/modal/ai.md#types-modal-backdrop-type)（types）：定义 ModalBackdropType 的字段、参数或取值范围。
- [ModalSizePreset](lib/modal/ai.md#types-modal-size-preset)（types）：定义 ModalSizePreset 的字段、参数或取值范围。
- [ModalSizeSetting](lib/modal/ai.md#types-modal-size-setting)（types）：定义 ModalSizeSetting 的字段、参数或取值范围。
- [ModalBaseOptions](lib/modal/ai.md#types-modal-base-options)（types）：定义 ModalBaseOptions 的字段、参数或取值范围。
- [ModalEvents](lib/modal/ai.md#types-modal-events)（types）：定义 ModalEvents 的字段、参数或取值范围。
- [ModalTriggerStaticOptions](lib/modal/ai.md#types-modal-trigger-static-options)（types）：定义 ModalTriggerStaticOptions 的字段、参数或取值范围。
- [ModalTriggerOptions](lib/modal/ai.md#types-modal-trigger-options)（types）：定义 ModalTriggerOptions 的字段、参数或取值范围。
- [ModalDialogOptions](lib/modal/ai.md#types-modal-dialog-options)（types）：定义 ModalDialogOptions 的字段、参数或取值范围。
- [ModalDialogState](lib/modal/ai.md#types-modal-dialog-state)（types）：定义 ModalDialogState 的字段、参数或取值范围。
- [ModalOptions](lib/modal/ai.md#types-modal-options)（types）：定义 ModalOptions 的字段、参数或取值范围。
- [ModalCustomOptions](lib/modal/ai.md#types-modal-custom-options)（types）：定义 ModalCustomOptions 的字段、参数或取值范围。
- [ModalAjaxOptions](lib/modal/ai.md#types-modal-ajax-options)（types）：定义 ModalAjaxOptions 的字段、参数或取值范围。
- [ModalIframeOptions](lib/modal/ai.md#types-modal-iframe-options)（types）：定义 ModalIframeOptions 的字段、参数或取值范围。
- [ModalAlertOptions](lib/modal/ai.md#types-modal-alert-options)（types）：定义 ModalAlertOptions 的字段、参数或取值范围。
- [ModalConfirmOptions](lib/modal/ai.md#types-modal-confirm-options)（types）：定义 ModalConfirmOptions 的字段、参数或取值范围。
- [ModalPromptOptions](lib/modal/ai.md#types-modal-prompt-options)（types）：定义 ModalPromptOptions 的字段、参数或取值范围。
- [ModalTypedOptions](lib/modal/ai.md#types-modal-typed-options)（types）：定义 ModalTypedOptions 的字段、参数或取值范围。
- [ModalIframeContentProps](lib/modal/ai.md#types-modal-iframe-content-props)（types）：定义 ModalIframeContentProps 的字段、参数或取值范围。
- [确认后执行动作](lib/modal/ai.md#recipe-confirm)（recipes）：使用 Promise 获得用户的确认结果。

### nav

包：`@zui/nav`；状态：无额外构建标记。

[使用参考](lib/nav/ai.md) — 提供原生及 Preact 数据导航和多种纯 CSS 导航外观。

关键词：导航、Nav、标签导航、胶囊、步骤。

- [Nav](lib/nav/ai.md#vanilla-nav)（vanilla）：从数据创建导航列表。
- [Nav](lib/nav/ai.md#preact-nav)（preact）：List 派生的导航类组件。
- [.nav / .nav-item / .nav-heading](lib/nav/ai.md#css-nav)（css / component）：可独立使用的导航结构。
- [导航变体与状态类](lib/nav/ai.md#css-nav-variants)（css / helper）：在导航根和内部链接上设置外观。
- [导航变量](lib/nav/ai.md#css-nav-vars)（css-variables）：导航尺寸、色彩及分隔设置。
- [Nav.render](lib/nav/ai.md#javascript-nav-render)（javascript）：将导航设置转换为 VNode。
- [NavOptions / NavSetting / NavItemOptions](lib/nav/ai.md#types-nav-options)（types）：导航外观与条目配置。
- [回传当前路由的激活项](lib/nav/ai.md#recipe-nav-active)（recipes）：将业务路由映射为条目 key。

### pager

包：`@zui/pager`；状态：无额外构建标记。

[使用参考](lib/pager/ai.md) — 按记录总数生成分页信息、页码导航、条数菜单和跳转输入，提供原生、Preact 与 zui-pager 自定义元素。

关键词：分页、pager、pagination、页码、每页条数、翻页。

- [Pager](lib/pager/ai.md#vanilla-pager)（vanilla）：在 DOM 容器内创建分页控件，使用 render 更新分页信息，destroy 清理实例。
- [Pager](lib/pager/ai.md#preact-pager)（preact）：Preact 分页工具栏，以 PagerOptions 配置分页状态与条目。
- [PagerInfoItem / PagerLink / PagerNav / PagerSizeMenu / PagerGoto](lib/pager/ai.md#preact-pager-items)（preact）：可由 Pager items 驱动，也可从 Preact 子入口单独渲染的分页部件。
- [zui-pager / ZuiPagerElement](lib/pager/ai.md#web-component-pager)（web-components）：自动注册的分页自定义元素，以属性设置页码和记录数，通过 zui-change 通知用户操作。
- [.pager](lib/pager/ai.md#css-pager)（css / component）：可独立组合按钮与说明文字的分页行布局。
- [.pager-size-menu / .pager-goto-group](lib/pager/ai.md#css-pager-parts)（css / js-component）：配合分页条数菜单和跳转输入的部件样式。
- [Pager.format](lib/pager/ai.md#javascript-pager-format)（javascript）：从记录数与每页条数计算总页数，并将页码限制在有效范围。
- [updatePagerInfo](lib/pager/ai.md#javascript-update-pager-info)（javascript）：按目标页名称或页码计算新的分页信息，保留有效的显式总页数。
- [PagerOptions / PagerInfo / PageName / PageLinkCreator](lib/pager/ai.md#types-pager-options)（types）：分页信息、页码名称、链接生成及顶层控件选项。
- [PagerInfoProps / PagerLinkProps / PagerNavProps / PagerSizeMenuProps / PagerGotoProps](lib/pager/ai.md#types-pager-item-props)（types）：分页 items 各种 type 的公开配置类型。
- [PagerElementOptions / PagerChangeDetail / ZuiPagerElement](lib/pager/ai.md#types-pager-element)（types）：仅 Web Component 子入口导出的元素选项、事件载荷及实例类型。
- [输入页码并刷新数据](lib/pager/ai.md#recipe-goto)（recipes）：通过 goto 的独立 onChange 更新分页，并控制是否继续链接导航。

### panel

包：`@zui/panel`；状态：无额外构建标记。

[使用参考](lib/panel/ai.md) — 提供带标题、操作区、正文和页脚的纯 CSS 面板布局。

关键词：面板、panel、内容分组。

- [.panel 及结构部件](lib/panel/ai.md#css-panel)（css / component）：纯 HTML 面板容器。
- [.size-sm / .size-lg](lib/panel/ai.md#css-panel-size)（css / helper）：调整面板头部、正文和页脚的内边距。
- [面板背景变量](lib/panel/ai.md#css-panel-vars)（css-variables）：控制头部和页脚背景。
- [在面板内放表单](lib/panel/ai.md#recipe-panel-form)（recipes）：用 panel-body 容纳表单控件，panel-footer 放操作。

### pick

包：`@zui/pick`；状态：无额外构建标记。

[使用参考](lib/pick/ai.md) — 提供选择器触发器、值同步和弹出层基础框架，供具体选择器组合。

关键词：选择器、pick、Pick。

- [Pick](lib/pick/ai.md#vanilla-pick)（vanilla）：创建和管理 Pick 原生实例。
- [Pick](lib/pick/ai.md#preact-pick)（preact）：渲染 Pick Preact 视图。
- [PickPop](lib/pick/ai.md#preact-pick-pop)（preact）：渲染 PickPop Preact 视图。
- [PickTrigger](lib/pick/ai.md#preact-pick-trigger)（preact）：渲染 PickTrigger Preact 视图。
- [结构与部件](lib/pick/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/pick/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [EVENT\_PICK](lib/pick/ai.md#javascript-event-pick)（javascript）：标记由 Pick 内部同步产生的 input change。
- [PickOptions](lib/pick/ai.md#types-pick-options)（types）：定义 PickOptions 的字段、参数或取值范围。
- [PickState](lib/pick/ai.md#types-pick-state)（types）：定义 PickState 的字段、参数或取值范围。
- [PickerStateChanger](lib/pick/ai.md#types-picker-state-changer)（types）：定义 PickerStateChanger 的字段、参数或取值范围。
- [PickPopProps](lib/pick/ai.md#types-pick-pop-props)（types）：定义 PickPopProps 的字段、参数或取值范围。
- [PickTriggerProps](lib/pick/ai.md#types-pick-trigger-props)（types）：定义 PickTriggerProps 的字段、参数或取值范围。
- [PickPopLayout](lib/pick/ai.md#types-pick-pop-layout)（types）：定义 PickPopLayout 的字段、参数或取值范围。
- [PickPopPlacement](lib/pick/ai.md#types-pick-pop-placement)（types）：定义 PickPopPlacement 的字段、参数或取值范围。

### picker

包：`@zui/picker`；状态：无额外构建标记。

[使用参考](lib/picker/ai.md) — 提供单选、多选、搜索、树形选项和远程数据的下拉选择器。

关键词：下拉选择器、picker、Picker。

- [Picker](lib/picker/ai.md#vanilla-picker)（vanilla）：创建和管理 Picker 原生实例。
- [Picker](lib/picker/ai.md#preact-picker)（preact）：渲染 Picker Preact 视图。
- [PickerSingleSelect](lib/picker/ai.md#preact-picker-single-select)（preact）：渲染 PickerSingleSelect Preact 视图。
- [PickerMultiSelect](lib/picker/ai.md#preact-picker-multi-select)（preact）：渲染 PickerMultiSelect Preact 视图。
- [PickerMenu](lib/picker/ai.md#preact-picker-menu)（preact）：渲染 PickerMenu Preact 视图。
- [PickerSearch](lib/picker/ai.md#preact-picker-search)（preact）：渲染 PickerSearch Preact 视图。
- [结构与部件](lib/picker/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/picker/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [CSS 变量](lib/picker/ai.md#css-variables-config)（css-variables）：配置本库主题、尺寸和状态外观。
- [PickerOptions](lib/picker/ai.md#types-picker-options)（types）：定义 PickerOptions 的字段、参数或取值范围。
- [PickerMenuProps](lib/picker/ai.md#types-picker-menu-props)（types）：定义 PickerMenuProps 的字段、参数或取值范围。
- [PickerSearchProps](lib/picker/ai.md#types-picker-search-props)（types）：定义 PickerSearchProps 的字段、参数或取值范围。
- [PickerItemBasic](lib/picker/ai.md#types-picker-item-basic)（types）：定义 PickerItemBasic 的字段、参数或取值范围。
- [PickerItemOptions](lib/picker/ai.md#types-picker-item-options)（types）：定义 PickerItemOptions 的字段、参数或取值范围。
- [PickerItemProps](lib/picker/ai.md#types-picker-item-props)（types）：定义 PickerItemProps 的字段、参数或取值范围。
- [PickerSelectProps](lib/picker/ai.md#types-picker-select-props)（types）：定义 PickerSelectProps 的字段、参数或取值范围。
- [PickerState](lib/picker/ai.md#types-picker-state)（types）：定义 PickerState 的字段、参数或取值范围。
- [PickerSearchState](lib/picker/ai.md#types-picker-search-state)（types）：定义 PickerSearchState 的字段、参数或取值范围。

### popover

包：`@zui/popover`；状态：无额外构建标记。

[使用参考](lib/popover/ai.md) — 提供触发定位、动态面板、箭头及显示隐藏生命周期的浮层。

关键词：弹出面板、popover、PopoverPanel、Popover。

- [PopoverPanel](lib/popover/ai.md#vanilla-popover-panel)（vanilla）：创建和管理 PopoverPanel 原生实例。
- [Popover](lib/popover/ai.md#vanilla-popover)（vanilla）：创建和管理 Popover 原生实例。
- [PopoverPanel](lib/popover/ai.md#preact-popover-panel)（preact）：渲染 PopoverPanel Preact 视图。
- [结构与部件](lib/popover/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/popover/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [PopoverSide](lib/popover/ai.md#types-popover-side)（types）：定义 PopoverSide 的字段、参数或取值范围。
- [PopoverLayoutInfo](lib/popover/ai.md#types-popover-layout-info)（types）：定义 PopoverLayoutInfo 的字段、参数或取值范围。
- [PopoverOptions](lib/popover/ai.md#types-popover-options)（types）：定义 PopoverOptions 的字段、参数或取值范围。
- [PopoverEvents](lib/popover/ai.md#types-popover-events)（types）：定义 PopoverEvents 的字段、参数或取值范围。
- [PopoverPanelOptions](lib/popover/ai.md#types-popover-panel-options)（types）：定义 PopoverPanelOptions 的字段、参数或取值范围。
- [PopoverShowOptions](lib/popover/ai.md#types-popover-show-options)（types）：定义 PopoverShowOptions 的字段、参数或取值范围。

### responsive-nav

包：`@zui/responsive-nav`；状态：无额外构建标记。

[使用参考](lib/responsive-nav/ai.md) — 通过宽度测量将既有导航溢出项收纳到更多下拉菜单。

关键词：响应式导航、ResponsiveNavHelper、更多菜单、溢出。

- [ResponsiveNavHelper](lib/responsive-nav/ai.md#vanilla-responsive-nav)（vanilla）：测量并收纳导航中的溢出 DOM 条目。
- [ResponsiveNavHelperProps](lib/responsive-nav/ai.md#types-responsive-nav-props)（types）：收纳、测量、监听和更多菜单的完整选项。
- [保留关键动作](lib/responsive-nav/ai.md#recipe-responsive-fixed)（recipes）：为必须常驻的条目添加 is-rsh-fixed。

### search-box

包：`@zui/search-box`；状态：无额外构建标记。

[使用参考](lib/search-box/ai.md) — 提供带图标、清空按钮、延迟通知与键盘操作的搜索输入框。

关键词：搜索框、search-box、SearchBox。

- [SearchBox](lib/search-box/ai.md#vanilla-search-box)（vanilla）：创建和管理 SearchBox 原生实例。
- [SearchBox](lib/search-box/ai.md#preact-search-box)（preact）：渲染 SearchBox Preact 视图。
- [结构与部件](lib/search-box/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [CSS 变量](lib/search-box/ai.md#css-variables-config)（css-variables）：配置本库主题、尺寸和状态外观。
- [SearchBoxOptions](lib/search-box/ai.md#types-search-box-options)（types）：定义 SearchBoxOptions 的字段、参数或取值范围。
- [SearchBoxState](lib/search-box/ai.md#types-search-box-state)（types）：定义 SearchBoxState 的字段、参数或取值范围。

### sidebar

包：`@zui/sidebar`；状态：无额外构建标记。

[使用参考](lib/sidebar/ai.md) — 提供可拖动调宽、折叠、宽度保存与同步的侧边栏原生组件和 Preact 包装。

关键词：侧边栏、Sidebar、拖动调宽、折叠。

- [Sidebar](lib/sidebar/ai.md#vanilla-sidebar)（vanilla）：管理现有侧栏元素的宽度和折叠。
- [Sidebar](lib/sidebar/ai.md#preact-sidebar)（preact）：挂载后创建原生 Sidebar 的 Preact 包装。
- [侧栏及拖动槽样式](lib/sidebar/ai.md#css-sidebar)（css / js-component）：配合原生实例控制侧栏、折叠和调宽。
- [侧栏尺寸变量](lib/sidebar/ai.md#css-sidebar-vars)（css-variables）：由实例和样式共同维护宽度及过渡。
- [SidebarOptions / SidebarProps](lib/sidebar/ai.md#types-sidebar-options)（types）：侧栏选项和 Preact 外观扩展。
- [同步两个侧栏宽度](lib/sidebar/ai.md#recipe-sidebar-share)（recipes）：使用非空 shareWidth 分组。

### table

包：`@zui/table`；状态：无额外构建标记。

[使用参考](lib/table/ai.md) — 为原生 HTML table 提供表头、斑马纹、悬停、边框和紧凑布局样式。

关键词：表格、table、静态表格、斑马纹。

- [.table](lib/table/ai.md#css-table)（css / component）：原生 table 的全宽、行边框和单元格间距。
- [表格修饰类](lib/table/ai.md#css-table-helpers)（css / helper）：在 table 根节点组合斑马纹、悬停和尺寸。
- [表格变量](lib/table/ai.md#css-table-vars)（css-variables）：变量直接声明在 .table，因此优先在目标表格上覆盖。
- [紧凑可扫描表格](lib/table/ai.md#recipe-table-dense)（recipes）：组合有限的表格修饰类。

### toolbar

包：`@zui/toolbar`；状态：无额外构建标记。

[使用参考](lib/toolbar/ai.md) — 把按钮、下拉菜单、分隔线、弹性空白和按钮组组合成原生或 Preact 工具栏。

关键词：工具栏、Toolbar、操作按钮、按钮组。

- [Toolbar](lib/toolbar/ai.md#vanilla-toolbar)（vanilla）：在现有容器中创建数据驱动的操作工具栏。
- [Toolbar](lib/toolbar/ai.md#preact-toolbar)（preact）：以 ToolbarOptions 和条目数据渲染 nav 工具栏。
- [.toolbar](lib/toolbar/ai.md#css-toolbar)（css / component）：可独立组合按钮的水平 flex 工具栏。
- [.divider / .toolbar-space](lib/toolbar/ai.md#css-toolbar-parts)（css / helper）：工具栏中的分隔线和弹性空白。
- [Toolbar.render](lib/toolbar/ai.md#javascript-toolbar-render)（javascript）：将数组、选项或工厂转换为 Preact 工具栏 VNode。
- [ToolbarOptions](lib/toolbar/ai.md#types-toolbar-options)（types）：工具栏的完整专有选项及按钮组、列表继承契约。
- [ToolbarItemOptions / ToolbarSetting](lib/toolbar/ai.md#types-toolbar-items)（types）：工具栏条目的联合类型与动态设置。
- [按业务状态更新操作](lib/toolbar/ai.md#recipe-toolbar-update)（recipes）：通过新 items 设置动作的禁用状态。

### tooltip

包：`@zui/tooltip`；状态：无额外构建标记。

[使用参考](lib/tooltip/ai.md) — 提供基于 Popover 的工具提示与无需 JavaScript 的 CSS hint。

关键词：提示消息、tooltip、Tooltip。

- [Tooltip](lib/tooltip/ai.md#vanilla-tooltip)（vanilla）：创建和管理 Tooltip 原生实例。
- [结构与部件](lib/tooltip/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [hint](lib/tooltip/ai.md#css-hint)（css / component）：用伪元素与 data-hint 显示无需 JS 的提示。
- [CSS 变量](lib/tooltip/ai.md#css-variables-config)（css-variables）：配置本库主题、尺寸和状态外观。
- [TooltipOptions](lib/tooltip/ai.md#types-tooltip-options)（types）：定义 TooltipOptions 的字段、参数或取值范围。

### tree

包：`@zui/tree`；状态：无额外构建标记。

[使用参考](lib/tree/ai.md) — 提供 Tree 与 SearchTree，支持层级、连线、状态图标、分支动作和搜索。

关键词：树、Tree、SearchTree、目录、层级。

- [Tree / SearchTree](lib/tree/ai.md#vanilla-tree)（vanilla）：创建树列表或可搜索树。
- [Tree / SearchTree](lib/tree/ai.md#preact-tree)（preact）：菜单派生的树形视图，保留展开、查询和选择方法。
- [.tree 及部件](lib/tree/ai.md#css-tree)（css / js-component）：配合树视图的行、图标、动作与选中布局。
- [树缩进与主题](lib/tree/ai.md#css-tree-vars)（css-variables）：复用列表和菜单变量，并计算连接线缩进。
- [Tree.getTreeItem](lib/tree/ai.md#javascript-tree-item)（javascript）：为树条目补默认图标和动作。
- [TreeOptions / SearchTreeOptions / TreeState](lib/tree/ai.md#types-tree-options)（types）：树特有配置及完整继承关系。
- [展开指定树节点](lib/tree/ai.md#recipe-tree-expand)（recipes）：使用稳定键路径操作。

### upload

包：`@zui/upload`；状态：无额外构建标记。

[使用参考](lib/upload/ai.md) — 提供文件选择列表、拖放、重命名与大小数量限制，供表单提交文件。

关键词：上传文件、upload、Upload。

- [Upload](lib/upload/ai.md#vanilla-upload)（vanilla）：创建和管理 Upload 原生实例。
- [结构与部件](lib/upload/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [UploadOptions](lib/upload/ai.md#types-upload-options)（types）：定义 UploadOptions 的字段、参数或取值范围。

### upload-imgs

包：`@zui/upload-imgs`；状态：无额外构建标记。

[使用参考](lib/upload-imgs/ai.md) — 在 Upload 基础上提供图片预览网格和文件数量提示。

关键词：上传图片、upload-imgs、UploadImgs。

- [UploadImgs](lib/upload-imgs/ai.md#vanilla-upload-imgs)（vanilla）：创建和管理 UploadImgs 原生实例。
- [结构与部件](lib/upload-imgs/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [UploadImgsOptions](lib/upload-imgs/ai.md#types-upload-imgs-options)（types）：定义 UploadImgsOptions 的字段、参数或取值范围。

### virtualize

包：`@zui/virtualize`；状态：无额外构建标记。

[使用参考](lib/virtualize/ai.md) — 使用 TanStack Virtual 渲染大列表，提供原生、Preact 与无 UI 控制器。

关键词：VirtualList、虚拟列表、动态高度、RTL、Virtualizer。

- [VirtualList](lib/virtualize/ai.md#vanilla-virtual-list)（vanilla）：以原生构造器创建虚拟列表。
- [VirtualList (Preact)](lib/virtualize/ai.md#preact-virtual-list)（preact）：按可见区创建 item 包装节点并测量尺寸。
- [virtual-list / virtual-list-content / virtual-list-item](lib/virtualize/ai.md#css-virtual-list)（css / js-component）：虚拟列表视口、撑高容器和定位项。
- [createVirtualizer / createWindowVirtualizer / VirtualizerController](lib/virtualize/ai.md#javascript-virtualizer-factories)（javascript）：创建不负责 DOM 渲染的虚拟布局控制器。
- [Virtualizer / defaultRangeExtractor](lib/virtualize/ai.md#javascript-tanstack-virtualizer)（javascript）：使用底层虚拟布局实例或默认范围算法。
- [VirtualListProps](lib/virtualize/ai.md#types-virtual-list-props)（types）：列表渲染属性及继承的虚拟器配置。
- [ElementVirtualizerOptions / WindowVirtualizerOptions / VirtualItem / VirtualizerOptions / Rect / Range / ScrollToOptions](lib/virtualize/ai.md#types-virtualizer)（types）：无 UI 适配器及测量数据类型。

## js-ui

### cards

包：`@zui/cards`；状态：无额外构建标记。

[使用参考](lib/cards/ai.md) — 提供 Card 与 CardList，组合标题、正文、动作、嵌入列表和卡片网格。

关键词：卡片、Card、CardList、网格。

- [Card / CardList](lib/cards/ai.md#vanilla-cards)（vanilla）：把单卡片或卡片集合渲染进现有 DOM 容器。
- [Card / CardList](lib/cards/ai.md#preact-cards)（preact）：Preact 卡片和 List 派生的卡片网格。
- [.card 及内容区域](lib/cards/ai.md#css-card)（css / component）：可独立构建带标题和正文的卡片。
- [卡片网格与部件类](lib/cards/ai.md#css-card-helpers)（css / helper）：配合卡片容器控制网格、状态和内容强调。
- [--list-gap / --list-count-per-row](lib/cards/ai.md#css-cards-vars)（css-variables）：控制卡片间距和每行数量。
- [CardProps / CardItemProps](lib/cards/ai.md#types-card-props)（types）：卡片各区域与动作的完整配置。
- [CardListProps](lib/cards/ai.md#types-card-list-props)（types）：卡片集合复用全部 ListProps，并增加布局参数。
- [嵌入卡片列表](lib/cards/ai.md#recipe-card-inner-list)（recipes）：使用明确的 ListProps 对象传递内部条目。

### contextmenu

包：`@zui/contextmenu`；状态：无额外构建标记。

[使用参考](lib/contextmenu/ai.md) — 在鼠标右键位置展示上下文菜单，复用 Dropdown 的菜单和浮层行为。

关键词：上下文菜单、contextmenu、ContextMenu。

- [ContextMenu](lib/contextmenu/ai.md#vanilla-context-menu)（vanilla）：创建和管理 ContextMenu 原生实例。
- [结构与部件](lib/contextmenu/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/contextmenu/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [ContextMenuOptions](lib/contextmenu/ai.md#types-context-menu-options)（types）：定义 ContextMenuOptions 的字段、参数或取值范围。

### dashboard

包：`@zui/dashboard`；状态：无额外构建标记。

[使用参考](lib/dashboard/ai.md) — 以网格模块构建可拖动仪表盘，支持可见时加载、内容缓存和布局变化通知。

关键词：仪表盘、Dashboard、工作台、模块、拖动布局。

- [Dashboard](lib/dashboard/ai.md#vanilla-dashboard)（vanilla）：在现有容器挂载模块仪表盘。
- [Dashboard](lib/dashboard/ai.md#preact-dashboard)（preact）：管理模块集合、异步加载和拖动布局的 Preact 类组件。
- [仪表盘模块与拖动状态类](lib/dashboard/ai.md#css-dashboard)（css / js-component）：配合计算布局定位块和绘制模块内容。
- [--dashboard-gap](lib/dashboard/ai.md#css-dashboard-vars)（css-variables）：控制格子内部的模块间距。
- [DashboardOptions](lib/dashboard/ai.md#types-dashboard-options)（types）：仪表盘配置与事件的完整契约。
- [BlockSetting / BlockInfo / BlockProps / DashboardLayout](lib/dashboard/ai.md#types-dashboard-blocks)（types）：输入块、规范化状态、渲染属性与布局数据。
- [刷新一个模块](lib/dashboard/ai.md#recipe-dashboard-refresh)（recipes）：通过视图实例发起指定块加载。

### dropdown

包：`@zui/dropdown`；状态：无额外构建标记。

[使用参考](lib/dropdown/ai.md) — 为触发元素展示下拉菜单，支持嵌套菜单与 Preact 下拉按钮。

关键词：下拉菜单、dropdown、Dropdown。

- [Dropdown](lib/dropdown/ai.md#vanilla-dropdown)（vanilla）：创建和管理 Dropdown 原生实例。
- [DropdownButton](lib/dropdown/ai.md#preact-dropdown-button)（preact）：渲染 DropdownButton Preact 视图。
- [DropdownMenu](lib/dropdown/ai.md#preact-dropdown-menu)（preact）：渲染 DropdownMenu Preact 视图。
- [结构与部件](lib/dropdown/ai.md#css-structure)（css / js-component）：定义根节点和内部部件的样式。
- [状态与尺寸辅助类](lib/dropdown/ai.md#css-modifiers)（css / helper）：在指定组件节点和上下文中修改显示或交互外观。
- [CSS 变量](lib/dropdown/ai.md#css-variables-config)（css-variables）：配置本库主题、尺寸和状态外观。
- [DropdownMenuOptions](lib/dropdown/ai.md#types-dropdown-menu-options)（types）：定义 DropdownMenuOptions 的字段、参数或取值范围。
- [DropdownOptions](lib/dropdown/ai.md#types-dropdown-options)（types）：定义 DropdownOptions 的字段、参数或取值范围。
- [DropdownButtonOptions](lib/dropdown/ai.md#types-dropdown-button-options)（types）：定义 DropdownButtonOptions 的字段、参数或取值范围。

### dtable

包：`@zui/dtable`；状态：无额外构建标记。

[使用参考](lib/dtable/ai.md) — 固定列、虚拟滚动、定制单元格与可组合插件的数据表格。

关键词：DTable、数据表格、固定列、勾选、分页、表格插件。

- [DTable](lib/dtable/ai.md#vanilla-dtable)（vanilla）：原生方式创建数据表格并通过 .$ 操作视图。
- [DTable (Preact)](lib/dtable/ai.md#preact-dtable)（preact）：渲染行列和插件并提供布局查询与滚动 API。
- [Cell / Cells / Block](lib/dtable/ai.md#preact-table-parts)（preact）：复用 DTable 的单元格和块渲染函数。
- [dtable 及布局部件](lib/dtable/ai.md#css-dtable)（css / js-component）：数据表格的根节点和虚拟布局结构。
- [表格样式、交互状态及插件部件](lib/dtable/ai.md#css-dtable-helpers)（css / helper）：配合生成结构控制边框、条纹、悬停和插件外观。
- [--dtable-\*](lib/dtable/ai.md#css-variables-dtable)（css-variables）：表格主题、勾选和嵌套图标变量。
- [DTable.definePlugin / removePlugin / getPlugin / plugins](lib/dtable/ai.md#javascript-plugin-registry)（javascript）：注册、选择和配置 DTable 插件。
- [rich](lib/dtable/ai.md#javascript-plugin-rich)（javascript）：日期、映射、HTML、链接和进度单元格。
- [sort](lib/dtable/ai.md#javascript-plugin-sort)（javascript）：客户端按一列或多列排序。
- [custom](lib/dtable/ai.md#javascript-plugin-custom)（javascript）：按列提供自定义 Preact 或 HTML 内容。
- [checkable](lib/dtable/ai.md#javascript-plugin-checkable)（javascript）：勾选行、全选和勾选汇总。
- [nested / NestedRowState](lib/dtable/ai.md#javascript-plugin-nested)（javascript）：通过 parent ID 组织嵌套行并折叠。
- [avatar](lib/dtable/ai.md#javascript-plugin-avatar)（javascript）：头像、头像按钮和头像名称单元格。
- [sortType](lib/dtable/ai.md#javascript-plugin-sort-type)（javascript）：表头排序状态和远端排序链接。
- [group](lib/dtable/ai.md#javascript-plugin-group)（javascript）：相邻列分组边界。
- [headerGroup](lib/dtable/ai.md#javascript-plugin-header-group)（javascript）：两层分组表头。
- [cellspan](lib/dtable/ai.md#javascript-plugin-cellspan)（javascript）：按回调合并单元格。
- [sortable](lib/dtable/ai.md#javascript-plugin-sortable)（javascript）：鼠标拖动表格行顺序。
- [pager](lib/dtable/ai.md#javascript-plugin-pager)（javascript）：表格底部分页与本地切片。
- [DTableOptions / DTableDataOptions / DTableLayoutOptions / DTableStyleOptions / DTableCallbackOptions](lib/dtable/ai.md#types-options)（types）：表格全部基础配置。
- [RowInfo / RowData / ColInfo / ColSetting 及关联别名](lib/dtable/ai.md#types-rows-columns)（types）：业务数据、布局行和布局列的区别。
- [CellInfo / CellProps / CellsProps / BlockProps / CustomRenderResult](lib/dtable/ai.md#types-rendering)（types）：单元格渲染与子部件配置。
- [DTableLayout / DTableColsLayout 及布局类型](lib/dtable/ai.md#types-layout)（types）：计算后的表格几何结构。
- [DTableState / DTablePointerInfo / DTableEventListener](lib/dtable/ai.md#types-state-events)（types）：滚动状态与事件参数。
- [DTablePlugin / DTablePluginTypes / DTableWithPlugin 及泛型辅助类型](lib/dtable/ai.md#types-plugins)（types）：插件选项、方法、生命周期和依赖的类型组合。

### tabs

包：`@zui/tabs`；状态：无额外构建标记。

[使用参考](lib/tabs/ai.md) — 将现有导航链接与内容面板连接，切换 active 状态并发送 show/shown 事件。

关键词：标签页、Tabs、tab-pane、选项卡。

- [Tabs](lib/tabs/ai.md#vanilla-tabs)（vanilla）：在导航根节点管理标签面板。
- [.tab-pane / .tab-pane.active](lib/tabs/ai.md#css-tab-pane)（css / js-component）：标签面板的隐藏和显示。
- [程序切换](lib/tabs/ai.md#recipe-tabs-programmatic)（recipes）：传入现有导航项激活。

## css-utilities

### css-icons

包：`@zui/css-icons`；状态：无额外构建标记。

[使用参考](lib/css-icons/ai.md) — 以 CSS 绘制操作、方向、时间、加载和气泡尖角图标。

关键词：图标、无需字体、方向、加载、css icons。

- [.icon / .i-\* / .close / .spinner / .magnifier / .more](lib/css-icons/ai.md#css-action-icons)（css / component）：显示独立 CSS 操作与状态图标。
- [.caret\* / .chevron-\* / .toggle-icon\*](lib/css-icons/ai.md#css-direction-icons)（css / component）：展示方向与展开收起图标。
- [.arrow](lib/css-icons/ai.md#css-arrow)（css / component）：创建继承背景和边框的气泡尖角。
- [方向、展开状态与禁用辅助类](lib/css-icons/ai.md#css-icon-helpers)（css / helper）：配合 CSS 图标提供上下文状态。
- [CSS 图标变量](lib/css-icons/ai.md#vars-css-icons)（css-variables）：配置外观变量及其作用节点。

### utilities

包：`@zui/utilities`；状态：无额外构建标记。

[使用参考](lib/utilities/ai.md) — 提供布局、间距、尺寸、文字、皮肤、边框和交互状态等有界 CSS 工具类及组合样式。

关键词：CSS、工具类、布局、主题、皮肤、间距、状态。

- [宽高比](lib/utilities/ai.md#css-layout-aspect-ratio)（css / utility）：约束元素宽高比：auto 为自动，square 为 1/1，video 为 16/9。
- [居中容器](lib/utilities/ai.md#css-layout-container)（css / utility）：宽度为 100%，并按主题断点限制最大宽度，额外包含水平自动 margin；不是固定宽度或自带内边距的容器。
- [显示方式](lib/utilities/ai.md#css-layout-display)（css / utility）：控制 display。
- [浮动与清除](lib/utilities/ai.md#css-layout-floats)（css / utility）：pull-left/right 设置浮动；clearfix 用块级 ::after 清除两侧浮动，应加在包住浮动子项的容器。
- [替换元素适配与位置](lib/utilities/ai.md#css-layout-object)（css / utility）：object-fit 类用于图片/视频等替换元素，需元素有约束尺寸才表现裁切；object-position 类控制内容位置。
- [溢出](lib/utilities/ai.md#css-layout-overflow)（css / utility）：控制全部或单轴溢出。
- [弹出层外观](lib/utilities/ai.md#css-layout-popup)（css / component）：单个 \`.popup\` 元素获得 xl 阴影、低透明度外圈、85% canvas 背景、背景模糊和默认圆角。
- [定位模式](lib/utilities/ai.md#css-layout-position)（css / utility）：设置 static/fixed/absolute/relative/sticky。
- [定位偏移](lib/utilities/ai.md#css-layout-top-right-bottom-left)（css / utility）：top/right/bottom/left 需配合非 static 定位。
- [可见性](lib/utilities/ai.md#css-layout-visibility)（css / utility）：visible/invisible 使用 !important 控制 visibility；invisible 仍保留布局空间，不等同 hidden。
- [层叠顺序](lib/utilities/ai.md#css-layout-z-index)（css / utility）：设置 z-index。
- [多行交叉轴分布](lib/utilities/ai.md#css-flex-align-content)（css / utility）：用于有额外交叉轴空间的多行 flex 等布局；单行 flex 通常看不到效果。
- [交叉轴对齐](lib/utilities/ai.md#css-flex-align-items)（css / utility）：用于 flex/grid 容器，控制子项起点、终点、居中、基线或拉伸。
- [子项交叉轴对齐](lib/utilities/ai.md#css-flex-align-self)（css / utility）：放在 flex/grid 子项，覆盖容器的 align-items；auto 继承容器规则，baseline 按基线。
- [Flex 基础尺寸](lib/utilities/ai.md#css-flex-basis)（css / utility）：设置 flex-basis，只对 flex 子项有效；auto 由内容/尺寸决定，full 为 100%，分数按比例。
- [Flex 方向与居中](lib/utilities/ai.md#css-flex-direction)（css / utility）：row/col 及 reverse 同时开启 flex 并指定方向。
- [Flex 子项伸缩组合](lib/utilities/ai.md#css-flex-flex)（css / utility）：用于 flex 子项：flex-1 为 1 1 0%，flex-auto 为 1 1 auto，flex-initial 为 0 1 auto，flex-none 为 0 0 auto。
- [子项间隙](lib/utilities/ai.md#css-flex-gap)（css / utility）：用于支持 gap 的 flex/grid 容器；gap-x/y 限定轴向，gap-3px 是额外的 3px 类（没有 gap-x-3px/y-3px）。
- [Flex 增长](lib/utilities/ai.md#css-flex-grow)（css / utility）：用于 flex 子项，grow 为 flex-grow:1，grow-0 为 0，均使用 !important。
- [主轴对齐](lib/utilities/ai.md#css-flex-justify-content)（css / utility）：用于 flex 等支持 justify-content 的容器；start/end/center/between/around/evenly 分别对应两端、居中和三种剩余空间分配方式。
- [Flex 顺序](lib/utilities/ai.md#css-flex-order)（css / utility）：用于 flex/grid 子项，order-1 到 order-12 设置对应整数，first=-9999、last=9999、none=0；只改变视觉顺序，不改变 DOM/键盘顺序。
- [Flex 收缩](lib/utilities/ai.md#css-flex-shrink)（css / utility）：用于 flex 子项，shrink 为 flex-shrink:1，shrink-0 为 0，均使用 !important。
- [Flex 换行](lib/utilities/ai.md#css-flex-wrap)（css / utility）：用于 flex 容器，控制不换行、换行及反向换行。
- [外边距](lib/utilities/ai.md#css-spacing-margin)（css / utility）：m 为四边、mx/my 为横/纵两边、mt/mr/mb/ml 为单边。
- [内边距](lib/utilities/ai.md#css-spacing-padding)（css / utility）：p 为四边、px/py 为横/纵两边、pt/pr/pb/pl 为单边。
- [相邻子项间距](lib/utilities/ai.md#css-spacing-space)（css / utility）：加在容器上，以相邻未隐藏直接子元素的 margin 实现横/纵间距；不同于 gap，不应在换行布局中假定效果相同。
- [高度与高度限制](lib/utilities/ai.md#css-sizing-height)（css / utility）：h 设置高度，min-h/max-h 设置上下界；百分比高度通常需要包含块具有确定高度，screen 为 100vh。
- [宽度与宽度限制](lib/utilities/ai.md#css-sizing-width)（css / utility）：w 设置宽度，min-w/max-w 设置上下界。
- [幽灵皮肤](lib/utilities/ai.md#css-skin-ghost)（css / utility）：包含 skin，透明背景和透明外圈，颜色用于文字及交互状态；ghost 默认继承文字，语义 ghost 使用对应 500 色阶。
- [描边皮肤](lib/utilities/ai.md#css-skin-outline)（css / utility）：包含 skin，透明背景并使用指定颜色文字/边框/外圈；outline 默认取前景 RGB，gray-300/400-outline 文字取 gray-500。
- [浅色皮肤](lib/utilities/ai.md#css-skin-pale)（css / utility）：这些类自身包含 skin；背景取指定 RGB 的 10% 透明度，文字取相应实色，较浅 gray 50/100/200 的文字用 gray-400、gray-300/400 用 gray-500。
- [自定义皮肤](lib/utilities/ai.md#css-skin-skin)（css / utility）：\`.skin\` 将 --skin-\* 变量应用到背景、文字、边框和 1px 外圈，并处理 hover 背景/文字；使用前至少配置 --skin-color、--skin-text，或组合后续已有皮肤类。
- [实色皮肤](lib/utilities/ai.md#css-skin-solid)（css / utility）：这些类自身包含 skin 基础效果；语义颜色默认使用相应 500 色阶，浅灰 50/100/200/300 使用普通前景，其他实色使用深色背景前景。
- [语义表面皮肤](lib/utilities/ai.md#css-skin-surface)（css / utility）：同时设置背景和文字（surface 系列及 white/black 还设置 ring 颜色）；transparent 仅透明背景/外圈，不设置文字。
- [文字装饰线](lib/utilities/ai.md#css-typography-decoration)（css / utility）：underline/overline/line-through/no-underline 分别添加或移除装饰线，不改变链接行为。
- [字体族](lib/utilities/ai.md#css-typography-font-family)（css / utility）：font-sans/serif/mono 设置对应主题字体栈，不加载字体文件。
- [字号](lib/utilities/ai.md#css-typography-font-size)（css / utility）：text-root 为 16px；sm/base/md/lg/xl/2xl/3xl/4xl 分别为 .75/.8125/.875/1/1.125/1.5/1.875/2.25rem，并包含配置行高。
- [字重](lib/utilities/ai.md#css-typography-font-weight)（css / utility）：thin/light/normal/medium/semibold/bold/black 对应 100/300/400/500/600/700/900，实际效果受字体字重支持影响。
- [行高](lib/utilities/ai.md#css-typography-leading)（css / utility）：数字行高为 n×.25rem；none/tight/snug/normal/relaxed/loose 为无单位 1/1.25/1.375/1.5/1.625/2，覆盖字号类附带行高时注意层叠。
- [多行截断](lib/utilities/ai.md#css-typography-line-clamp)（css / utility）：line-clamp-1 到 6 使用 -webkit-box、纵向 box-orient、overflow:hidden 与对应行数；会改变 display，不提供 line-clamp-none。
- [列表标记](lib/utilities/ai.md#css-typography-list-style)（css / utility）：list-none/disc/decimal 控制标记；list-unstyled 还去除左内边距，应用于 ul/ol 等列表容器。
- [文字与行内对齐](lib/utilities/ai.md#css-typography-text-align)（css / utility）：text-\* 设置容器文本对齐；align-\* 设置 vertical-align，主要对行内/表格单元格生效，不是 flex 对齐。
- [文字颜色](lib/utilities/ai.md#css-typography-text-color)（css / utility）：设置 color。
- [文字透明度](lib/utilities/ai.md#css-typography-text-opacity)（css / utility）：设置 --tw-text-opacity 为数字/100，需组合读取该变量的文字颜色；不会使子元素背景透明，且 current/inherit 等不保证受此变量控制。
- [单行溢出](lib/utilities/ai.md#css-typography-text-overflow)（css / utility）：text-ellipsis/ellipsis 同时开启 overflow:hidden、nowrap 和省略号；text-clip/clip 同样单行截断但不用省略号。
- [大小写转换](lib/utilities/ai.md#css-typography-text-transform)（css / utility）：uppercase/lowercase/capitalize/normal-case 控制文本绘制的大小写，不修改实际文本数据。
- [空白与换行](lib/utilities/ai.md#css-typography-whitespace)（css / utility）：控制 CSS white-space，nowrap/pre/pre-line/pre-wrap 为同名 whitespace-\* 的别名；不提供 break-spaces。
- [断词](lib/utilities/ai.md#css-typography-word-break)（css / utility）：break-normal 为正常 overflow-wrap/word-break；break-words 为 overflow-wrap:break-word；break-all 为 word-break:break-all。
- [背景图像布局](lib/utilities/ai.md#css-backgrounds-background-image)（css / utility）：仅控制 background-size/repeat/position/attachment，图像 URL 由业务 CSS 或 style 提供。
- [背景透明度](lib/utilities/ai.md#css-backgrounds-background-opacity)（css / utility）：设置 --tw-bg-opacity 为数字/100，需搭配使用该变量的背景颜色；不影响内容，区别于 opacity。
- [背景颜色](lib/utilities/ai.md#css-backgrounds-background)（css / utility）：设置背景色；bg-none 仅清除背景图像。
- [边框颜色](lib/utilities/ai.md#css-borders-border-color)（css / utility）：设置边框颜色，不创建宽度；light/strong 使用主题 border-light/strong，语义色默认 500；gray 为 gray-500。
- [边框透明度](lib/utilities/ai.md#css-borders-border-opacity)（css / utility）：设置 --tw-border-opacity 为数字/100，需与读取该变量的边框颜色组合；显式 transparent/current/inherit 等颜色不保证受此变量控制。
- [边框线型](lib/utilities/ai.md#css-borders-border-style)（css / utility）：设置 solid/dashed/dotted/double/hidden/none，仍需边框宽度；hidden/none 会影响是否绘制。
- [边框宽度](lib/utilities/ai.md#css-borders-border-width)（css / utility）：border 是四边 1px，border-0/2/4 是四边相应像素；t/r/b/l 仅指定边。
- [分隔线](lib/utilities/ai.md#css-borders-divider)（css / component）：单个 .divider 同时设置 1px 左/上边框、currentColor、10% 整体透明度与 align-self:stretch；适合放在 flex 容器子项中，横/纵实际形态由容器方向和尺寸决定。
- [外圈](lib/utilities/ai.md#css-borders-ring)（css / utility）：ring 默认 1px 与主题 border 色；ring-0/2/3/4/8 设置相应像素。
- [圆角](lib/utilities/ai.md#css-borders-rounded)（css / utility）：普通 rounded 类使用主题 --radius-\*；circle 是 rounded-full 的已弃用别名。
- [循环动画与文字渐变](lib/utilities/ai.md#css-effects-animation)（css / utility）：animate-spin/ping/pulse/bounce 及无 animate- 别名执行对应无限动画；highlight 为 2s 无限高亮；text-shimmer/aurora/breathe 使用裁剪文字的渐变，分别为 3s/3s/4s 无限动画。
- [滤镜](lib/utilities/ai.md#css-effects-filters)（css / utility）：blur/backdrop-blur 分别模糊元素/其后景；后景模糊需透明或半透明背景才能可见。
- [整体透明度](lib/utilities/ai.md#css-effects-opacity)（css / utility）：opacity-N 按 N/100 设置元素整体透明度（包括子元素）；!opacity-0/!opacity-100 是显式 important 类。
- [阴影颜色](lib/utilities/ai.md#css-effects-shadow-color)（css / utility）：设置阴影颜色，需同时有实际阴影（例如 shadow）。
- [阴影尺寸](lib/utilities/ai.md#css-effects-shadow)（css / utility）：设置主题 --shadow-\* 对应 box-shadow；shadow-none 移除阴影，shadow-inner 为内阴影。
- [缩放与旋转](lib/utilities/ai.md#css-effects-transforms)（css / utility）：scale-N 对两个轴缩放为 N/100；flip-x/y 把对应轴缩放设为 -1；rotate-N 单位为度。
- [过渡与淡入](lib/utilities/ai.md#css-effects-transition)（css / utility）：transition 类限定过渡属性，默认 150ms；duration 类数字为毫秒。
- [光标](lib/utilities/ai.md#css-interactivity-cursor)（css / utility）：设置列出的光标类型；光标只表达外观，不赋予交互能力。
- [禁用外观](lib/utilities/ai.md#css-interactivity-disabled)（css / utility）：\`.disabled\` 或 \[disabled\] 及其后代变为禁止光标、灰度和 --opacity-disabled 透明度。
- [Hover 与 active 变体](lib/utilities/ai.md#css-interactivity-hover)（css / utility）：hover:\* 作用于元素 :hover；group-hover:\* 需要某个祖先带 group 且处于 :hover。
- [加载指示器](lib/utilities/ai.md#css-interactivity-loading)（css / component）：在定位容器（通常同时有 relative）上加 load-indicator，通过 ::before 创建遮罩/可选 data-loading 文案，::after 创建转圈。
- [指针事件](lib/utilities/ai.md#css-interactivity-pointer-events)（css / utility）：pointer-events-none/events-none 禁止指针命中；auto/events-auto 恢复。
- [滚动行为](lib/utilities/ai.md#css-interactivity-scroll)（css / utility）：在滚动容器上设置自动或平滑滚动行为，不负责触发滚动或创建溢出区域。
- [交互状态效果](lib/utilities/ai.md#css-interactivity-state)（css / component）：\`.state\` 使元素 relative、cursor:pointer，使用 ::before 展示 hover/active/focus-visible 及 selected 状态；\`.btn\` 和 \`.item \> a\` 也被本文件接入此效果，但其基础结构属于 button/item 库。
- [文字选择](lib/utilities/ai.md#css-interactivity-user-select)（css / utility）：设置 user-select 的 none/text/all/auto；不影响输入值的读取。
- [active / selected / loading / in / group](lib/utilities/ai.md#css-state-modifiers)（css / helper）：配合基础效果或变体类的状态和分组标记。
- [状态和加载变量](lib/utilities/ai.md#css-variables-state)（css-variables）：配置交互伪元素、禁用/弱化透明度和加载动画时序。
- [皮肤变量](lib/utilities/ai.md#css-variables-skin)（css-variables）：控制 skin 组合的背景、文字、边框、外圈及悬停颜色。
- [文字动画颜色](lib/utilities/ai.md#css-variables-text-animation)（css-variables）：在文字渐变动画元素上覆盖各个色标。
- [带右侧操作区的布局](lib/utilities/ai.md#recipe-layout)（recipes）：组合布局、间距、尺寸及文字截断类。
- [加载遮罩和状态切换](lib/utilities/ai.md#recipe-loading)（recipes）：用 load-indicator 与 loading 显示加载外观，并同步原生可访问状态。
- [局部皮肤与交互效果](lib/utilities/ai.md#recipe-custom-skin)（recipes）：在实际皮肤节点配置变量，组合 state 提供 hover/focus 外观。

## js-lib

### helpers

包：`@zui/helpers`；状态：无额外构建标记。

[使用参考](lib/helpers/ai.md) — 提供日期、字符串、颜色和对象路径的独立工具方法。

关键词：日期、格式化、颜色、对象路径、helpers。

- [createDate / getDateTime / TIME\_DAY](lib/helpers/ai.md#javascript-create-date)（javascript）：创建日期并统一读取毫秒时间戳。
- [addDate](lib/helpers/ai.md#javascript-add-date)（javascript）：按本地日历单位增加或减少日期。
- [isSameDay / isSameWeek / isSameMonth / isSameYear / isToday / isYesterday / isTomorrow / isValidDate](lib/helpers/ai.md#javascript-date-comparison)（javascript）：比较本地日历日期或校验日期有效性。
- [formatDate / formatDateSpan](lib/helpers/ai.md#javascript-format-date)（javascript）：格式化单个日期或日期范围。
- [isNotEmptyString / formatString / formatWithPipes / convertString](lib/helpers/ai.md#javascript-string-format)（javascript）：替换字符串占位符并按管道转换值。
- [formatBytes / convertBytes](lib/helpers/ai.md#javascript-bytes)（javascript）：转换字节数量与带单位字符串。
- [escapeHtml / encodeBase64 / decodeBase64 / getUniqueCode](lib/helpers/ai.md#javascript-encoding)（javascript）：转义 HTML 文本、编码 Base64 和计算简单字符串编码。
- [hex2Rgb / isLightColor / contrastColor / hslToRgb](lib/helpers/ai.md#javascript-color)（javascript）：解析颜色、判断亮度并选择前景色。
- [deepGetPath / deepGet / deepCall](lib/helpers/ai.md#javascript-deep-access)（javascript）：沿对象路径取值、返回访问过程或调用方法。
- [DateLike / DurationType / DateFormatter / StringConverter / RGBColor](lib/helpers/ai.md#types-helper-values)（types）：工具方法的输入与回调类型。
