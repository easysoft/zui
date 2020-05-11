section: basic
id: ie
description: For IE compatibility
icon: icon-ie
filter: jianrongieliulanqi jriellq
---

# IE Compatible

IE browser is much different from major browsers, so it is often necessary to customize for IE browser to ensure a consistent experience in all browsers. ZUI supports IE 8, but some configuration is required.

If only IE 9+ is supported, skip this chapter. However, it is suggested that you prepare a tip for older version  users.

## Forbid IE Compatible

The code below should be added to the header to ensure that IE can use the latest rendering instead of being compatible.

```html
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  ...
```

## Tip for IE 7 and down users

For IE 7- users, a tip should be prepared to remind users upgrade their browsers. Add the following code after the body`to display the tip on conditions and guide the users to visit [browsehappy.com](http://browsehappy.com/)：

```html
<body>
  <!--[if lt IE 8]>
    <div class="alert alert-danger">You are using an <strong>outdated</strong> browser. Time to <a href="http://browsehappy.com/"> switch to a better browser</a> to improve the user experience.</div>
  <![endif]-->
  ...
```

Even if IE 9+ supported, it is suggested that you prepare a tip for older version users. Just change `[if lt IE 8]` to `[if lt IE 9]` in the code above.

<div class="alert alert-primary-inverse">
  <h4>Tips</h4>
  <p>You can use ZUI built-in browser-compatible plugin to display such tip. Refer to  <a href="#basic/browser/1" class="alert-link">”Browse”.</p>
</div>

## IE 8 users

Polyfill scrpts in `dist/lib/ieonly/` are used to make IE 8 compatible.

html5shiv is introduced to make HTML5 tags work in IE 8 and down. Add the code below to the HTML file:

```html
<!--[if lt IE 9]>
  <script src="dist/lib/ieonly/html5shiv.js"></script>
<![endif]-->
```

respond.js is introduced to make media query work in IE 8 and down. Add the code below to the HTML file:

```html
<!--[if lt IE 9]>
  <script src="dist/lib/ieonly/respond.js"></script>
<![endif]-->
```

Canvas is not supported inin IE 8 and down. If you use [Chart](#view/chart) of ZUI, [ExplorerCanvas](https://code.google.com/p/explorercanvas/) has to be introduced to support it.

```html
<!--[if lt IE 9]>
  <script src="dist/lib/ieonly/excanvas.js"></script>
<![endif]-->
```
