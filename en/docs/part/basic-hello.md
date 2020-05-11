section: basic
id: hello
description: Document structure
icon: icon-smile
filter: helloworld helloworld
---

# Hello World

It is simple to code an application using ZUI. Usually, ZUI is only dependent on jQuery which JS components of ZUI are based on.

Below is the page of Hello World.

```html
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
    <h1>Hello, World!</h1>

    <!-- 在此处编码你的创意 -->

    <!-- jQuery (ZUI中的Javascript组件依赖于jQuery) -->
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <!-- ZUI Javascript组件 -->
    <script src="js/zui.min.js"></script>
  </body>
</html>
```

Refer to “[IE Compatible]](#basic/ie) if your website has to be compatible with IE8.
