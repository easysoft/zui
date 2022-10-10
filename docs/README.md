# ZUI 3 文档开发说明

## 文档网站目录结构

文档网站目录结构分为两级，第一级为网站顶部导航，第二级为左侧垂直导航分组。

* 指引 `guide`：
  * 开始  `guide`
  * 定制  `customize`
  * 贡献  `contributes`
  * 关于  `about`
* 基础 `basic`：
  * 配置     `config`
  * 设计理念  `concepts`
* CSS 工具类 `utilities`：
  * 样式  `style`
  * 背景  `backgrounds`
  * 边框  `borders`
  * 布局  `layout`
  * Flex  `flex`
  * 间距  `spacing`
  * 尺寸  `sizing`
  * 排版  `typography`
  * 效果  `effects`
  * 交互  `interactivity`
* 组件 `lib`：
  * 布局  `layout`
  * 内容  `content`
  * 图标  `icons`
  * 表单  `forms`
  * 组件  `components`
* JavaScript `js`：`
  * 工具方法  `helpers`
* 主题 `themes`：
  * 官方主题  `official`
  * 社区主题  `community`
  * 主题制作  `create`

## 组件库文档

组件库文档通常在组件库的 `docs` 目录下，每个文档必须属于文档目录中的一个，需要将目录结构与文档的目录结构保持一致。

例如在输入组组件（`input-group`）中为用户文档网站上的**组件（`lib`）/表单（`form`）**上添加文档的目录结构为：

```txt
/lib/input-group/docs/lib/forms/index.md
```

上面的文档在页面中的实际引用地址为：

```html
/lib/forms/input-group/
```
