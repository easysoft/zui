# ZUI 3 文档开发说明

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
