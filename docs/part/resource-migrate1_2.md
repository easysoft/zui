section: resource
id: migrate1_2
description: 一份1.2以下版本升级到最新版的向导
icon: 1.2
filter: cong1.2banbenshengjizhinan c1.2bbsjzn
---

# 从1.2版本升级指南

<div class="alert alert-warning with-icon">
  <i class="icon-info-sign"></i>
  <div class="content">
    <h4>注意</h4>
    <p>本文的适合从1.2及更低的版本升级到1.3的用户，其他用户可以忽略。</p>
  </div>
</div>

## 有哪些变化

为避免全局变量污染，ZUI在1.3中移除了之前在`window`和`jQuery`实例上的对象绑定。现在所有共享对象方法全部绑定在`$.zui`对象上。如果你在代码中用到了如下对象方法，则需要更改您的代码（代码）或者使用兼容插件。

<table class="table table-bordered">
  <thead>
    <tr>
      <th>1.2版本之前的用法</th>
      <th>1.3版本的用法</th>
      <th>相关组件</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`$.uuid`</td>
      <td>`$.zui.uuid`</td>
      <td>ZUI的jQuery扩展</td>
    </tr>
    <tr>
      <td>`$.callEvent`</td>
      <td>`$.zui.callEvent`</td>
      <td>ZUI的jQuery扩展</td>
    </tr>
    <tr>
      <td>`$.clientLang`</td>
      <td>`$.zui.clientLang`</td>
      <td>ZUI的jQuery扩展</td>
    </tr>
    <tr>
      <td>`$.browser`</td>
      <td>`$.zui.browser`</td>
      <td>IE浏览器版本判断插件</td>
    </tr>
    <tr>
      <td>`$.messager` `window.messager`</td>
      <td>`$.zui.messager`</td>
      <td>漂浮消息</td>
    </tr>
    <tr>
      <td>`$.Messager` `window.Messager`</td>
      <td>`$.zui.Messager`</td>
      <td>漂浮消息</td>
    </tr>
    <tr>
      <td>`$.showMessager` `window.showMessager`</td>
      <td>`$.zui.showMessager`</td>
      <td>漂浮消息</td>
    </tr>
    <tr>
      <td>`$.closeModal` `window.closeModal`</td>
      <td>`$.zui.closeModal`</td>
      <td>模态框触发器</td>
    </tr>
    <tr>
      <td>`$.ajustModalPosition` `window.ajustModalPosition`</td>
      <td>`$.zui.ajustModalPosition`</td>
      <td>模态框触发器</td>
    </tr>
    <tr>
      <td>`$.ModalTrigger` `window.ModalTrigger`</td>
      <td>`$.zui.ModalTrigger`</td>
      <td>模态框触发器</td>
    </tr>
    <tr>
      <td>`$.modalTrigger` `window.modalTrigger`</td>
      <td>`$.zui.modalTrigger`</td>
      <td>模态框触发器</td>
    </tr>
    <tr>
      <td>`$.store` `window.store`</td>
      <td>`$.zui.store`</td>
      <td>本地存储</td>
    </tr>
    <tr>
      <td>`window.Color`</td>
      <td>`$.zui.Color`</td>
      <td>色彩辅助方法</td>
    </tr>
    <tr>
      <td>`window.imgReady`</td>
      <td>`$.zui.imgReady`</td>
      <td>图片加载判断</td>
    </tr>
  </tbody>
</table>

## 如何处理

有两种方法来兼容之前的用法。

*   手动将之前的写法更改为新的写法（推荐）；
*   使用1.3中提供的兼容插件，这样可以在1.3中继续使用之前的用法，兼容插件包含在`dist/lib/migrate/`目录下。
