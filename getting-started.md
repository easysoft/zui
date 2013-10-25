# 准备要点 #
----------


## 1 兼容IE浏览器 ##

因为IE浏览器与各大浏览器区别太大，为了尽可能的保证在所有浏览器中有一致的体验，很多时候需要单独对待IE浏览器。为了保证代码精简及一致，ZUI只支持IE8+。为了保证IE能够使用最新渲染模式而不是兼容模式，在html文档头部应加入以下代码：

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        ...

针对IE7及更早的版本，应该给出提示，让用户升级浏览器。在`body`之后加入以下代码可以有选择性的出现浏览器升级提示，并给出链接引导用户访问[abetterbrowser.org](http://abetterbrowser.org/)：

    <body>
        <!--[if lt IE 8]>
            <p class="abetterbrowser">您正在使用 <strong>过时的</strong> 浏览器. 是时候 <a href="http://abetterbrowser.org/">更换一个更好的浏览器</a> 来提升用户体验.</p>
        <![endif]-->
        ...

因为IE8及早期版本不支持HTML5标签，所以针对IE8浏览器，我们引入html5shiv来使得HTML5标签在IE8中也能使用。在HTML文档的script区域加入以下代码（示例中html5shiv库来自maxcdn）：

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <![endif]-->

因为IE8及早期版本同样不支持media query来实现响应式布局，我们同样可以通过条件注释引入respond.js来帮助ie实现该功能。（示例中的respond.js来自maxcdn，可以和html5shiv共享同一个条件注释区域。）

    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
    <![endif]-->


## 2 css normalize ##

为了能在不同的浏览器具有一直的体验，采用开源项目 [normalize.css](http://necolas.github.io/normalize.css/) 进行样式重置。


## 4 响应式布局 ##

现代web应用应该支持响应式布局。栅格系统已提供良好的基础构建响应式布局页面，同时也提供一些辅助工具类来控制内容在不同设备的展现方式。

在ZUI中提供针对4中不同尺寸的设备屏幕进行分别控制。

    屏幕                    名称       尺寸
    超小屏幕（手机）         xs        <768px
	小屏幕（平板）           sm        >=768px
    中等屏幕（笔记本电脑）    md        >=992px
    大屏幕（桌面电脑）        lg        >=1200px

针对4种屏幕类型各定义两种辅助类来在不同的设备上显示或隐藏内容。

                  超小屏幕   小屏幕   中等屏幕   大屏幕
    .visible-xs   可见       隐藏     隐藏      隐藏
    .visible-sm   隐藏       可见     隐藏      隐藏
    .visible-md   隐藏       隐藏     可见      隐藏
    .visible-lg   隐藏       隐藏     隐藏      可见
    .hidden-xs    隐藏       可见     可见      可见
    .hidden-sm    可见       隐藏     可见      可见
    .hidden-md    可见       可见     隐藏      可见
    .hidden-lg    可见       可见     可见      隐藏

其中显示辅助类`.visible-xs`、`.visible-sm`、`.visible-md`、`.visible-lg`可以组合使用，同理对于隐藏辅助类也可以组合使用以达到不同的效果。但不要将显示辅助类和隐藏辅助类混合使用。

ZUI也提供用来控制打印机的显示与隐藏的辅助类。显示和隐藏不能同时使用。

- `.visible-print`：在打印时显示，在浏览器正常浏览时隐藏。
- `.hidden-print`：在浏览器正常浏览时显示，在打印时隐藏。


## 3 栅格系统 ##

- 采用bootstrap3的网格设计。具体使用参考[bootstrap3-grid](http://v3.bootcss.com/css/#grid)
- 通过.container包含行（row），行再包含列（column）。
- 系统默认12列
- 分为col-xs-*/col-sm-*/col-md-*/col-lg-*四种设计分别对应超小屏幕(<768)/小屏幕(>=768)/中等屏幕(>=992)/大屏幕(>=1200)
- 通过col-xs-offset-*来向右偏移，通过col-xs-pull-*/col-xs-push-*来左右移动
