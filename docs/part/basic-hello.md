section: basic
id: hello
description: 文档基本结构
icon: icon-smile
filter: helloworld helloworld
---

# Hello world

使用ZUI进行构建现代应用非常简单。一般情况下，ZUI仅依赖于jQuery，ZUI中的Javascript组件构建于jQuery之上。

下面给出一个非常简单的Hello world页面。

```
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello world!</title>
    <!-- zui -->
    <link href="css/zui.min.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- 在此处挥洒你的创意 -->

    <!-- jQuery (ZUI中的Javascript组件依赖于jQuery) -->
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <!-- ZUI Javascript组件 -->
    <script src="js/zui.min.js"></script>
  </body>
</html>
```

如果你的网站需要兼容IE8，请参考“[兼容IE浏览器](#basic/ie)”章节。
