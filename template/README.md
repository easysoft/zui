# ![ZUI](https://raw.githubusercontent.com/easysoft/zui/master/docs/img/zui-logo-48.png)

## 简介

本项目是使用ZUI构建的后台管理模板，模板简单易用，同时具备可扩展性，你可以任意修改模板以达到预期效果。

## 说明

关于本模板，你需要知道：

+ ZUI后台管理模板由主页面`index.html`和若干个tab页构成，tab页以iframe的形式嵌入到主页面中，主页面存放于`src/index`下，tab页存放于`src/page/[tab name]/`下，你可以根据自己需求修改或新增tab页目录。
+ 由于本项目使用Webpack进行多页面打包，每个页面目录下存在一个当前页面入口文件`index.js`，负责引入本页面所需的样式文件和脚本文件，它们分别存在于当前目录的less和js目录下，如果你习惯使用css，你也可以新建css目录存放样式，并在入口文件`index.js`中引入即可。
+ `src/public/less`目录下预设了两套主题，你可以按需要在`src/index/less/index.less`中引入。
+ 新增一个tab页，你需要做的事情有：
  1. 在`src/index/index.html`文件中添加左侧导航菜单，并在`data-id`中设置一个ID唯一标识这个tab页，如：
    ```html
      <ul id="treeMenu" class="tree tree-menu" data-ride="tree">
        ...
        <li data-id="new-tab">
          <a href="#"><i class="icon icon-th"></i>新增页</a>
        </li>
        ...
      </ul>
    ```
  2. 在`src/page/`下新建`new-tab`目录，并创建页面文件`new-tab.html`、入口文件`index.js`以及它所需的样式和脚本。
  3. 如果在tab页中使用ZUI需将ZUI正确引入。
+ 关于ZUI的详细使用说明可以访问 https://openzui.com/#basic/download
+ 关于Webpack的使用和配置可以访问 https://webpack.js.org

## 快速使用

如果你安装了Node.js环境，可以按照如下步骤轻松启动后台管理模板网站：

1. 进入当前目录（zui/template）
2. 执行 `npm install` 安装依赖
3. 执行`npm run start` 将自动打开浏览器并访问网站
4. 执行`npm run build`进行生产时构建，构建结果将存放于 zui/template/dist 目录下
5. 此外你还可以执行`npm run watch`和`npm run server`命令，它们分别以观察模式和中间件模式构建项目
