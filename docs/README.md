# ZUI 3 文档开发说明

## 验证官网示例

在隔离副本中运行 `pnpm docs:build`，再运行 `pnpm test:docs`。后者使用 Chromium 访问已构建的站点，同时将页面代码标签中的 HTML 放入独立页面，使用同次构建的 JS/CSS 验证。它与 `pnpm test:e2e` 的开发页测试分开运行。

正式文档源在 `docs/docs` 和各库的 `docs` 目录。`docs/_` 下的同步页面和构建产物不手工修改；`docs/_/.vitepress` 中受版本管理的配置和主题组件是源码。

完整运行示例使用唯一的 `data-doc-example` 标识包裹已有示例与代码标签；代码必须提供完整数据和唯一 DOM ID。新增标识后，为 `tests/docs/examples.spec.ts` 补充对应的行为断言。组件预览优先使用 `<ZUI>` 管理实例；自行添加的监听器、计时器和实例须在页面卸载时清理。

构建会检查站内 Markdown 链接，浏览器测试补充四个重点页面的资源、锚点、复制、交互和切页清理。API 契约测试从公开类型与源码默认值核对文档；第三方 CDN 地址在调整版本时单独验证。

子路径部署、诊断文件与上线复测方式见 [CI 维护说明](../.github/CI.md#官网示例门禁)。

## 文档网站目录结构

文档网站目录结构分为两级，第一级为网站顶部导航，第二级为左侧垂直导航分组。

* 指引 `guide`
  * 开始 `start`：指引用户快速在项目中使用 ZUI3
  * 设计理念 `concepts`：ZUI3 的设计理念介绍
  * 配置 `config`：介绍 ZUI3 可供配置的内容，指引用户如何对项目进行配置
  * 定制 `customize`：介绍组件库扩展机制，指引开发者进行定制
  * 贡献 `contributes`：指引开发者参与贡献
  * 关于 `about`：关于此项目的其他信息
* CSS 工具类 `utilities`
  * 外观 `style`
  * 背景 `backgrounds`
  * 边框 `borders`
  * 布局 `layout`
  * Flex `flex`
  * 间距 `spacing`
  * 尺寸 `sizing`
  * 排版 `typography`
  * 效果 `effects`
  * 交互 `interactivity`
* 组件 `lib`
  * 布局 `layout`
  * 内容 `content`
  * 图标 `icons`
  * 表单 `forms`
  * 组件 `components`
  * JS 工具方法 `helpers`
* 主题 `themes`
  * 官方主题 `official`
  * 社区主题 `community`
  * 主题制作 `create`

## 组件库文档

组件文档通常在组件开发目录的 `docs` 目录下，每个文档必须属于文档目录中的一个，需要将目录结构与文档的目录名称保持一致。

例如在输入组组件（`input-group`）中为用户文档网站上的**组件（`lib`）/表单（`forms`）**上添加文档的目录结构为：

```
/lib/input-group/docs/lib/forms/index.md
```

同一个组件可以包含多个文档页面，这些页面可以属于同一个目录也可以属于不同的目录。

上面的文档在页面中的实际引用地址为：

```
/lib/forms/input-group/
```
