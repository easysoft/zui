section: view
id: comment
description: 展示评论的列表视图
icon: icon-comments
filter: pinglun pl
---

# 评论

评论视图用于展示评论消息，评论列表允许进行嵌套。

## 结构

评论视图使用 `.comments` 作为父级容器，并使用如下特殊类标记子容器：

<table class="table">
  <tbody>
    <tr>
      <td style="width: 150px">`<header>`</td>
      <td style="width: 80px">头部</td>
      <td>标题等信息</td>
    </tr>
    <tr>
      <td>`.comments-list`</td>
      <td>列表项组</td>
      <td>`.comments-list` 也可以嵌套放入 `.comment` 内。</td>
    </tr>
    <tr>
      <td>`<footer>`</td>
      <td>底部</td>
      <td>显示评论表达及分页信息等。</td>
    </tr>
  </tbody>
</table>

一般 HTML 结构如下：

```html
<div class="comments">
  <header>
    <h1>所有评论</h1>
  </header>
  <div class="comments-list">
    <div class="comment">
      ...
    </div>
    ...
  </div>
  <footer>
    <form action="">
      ...
    </form>
  </footer>
</div>
```

## 评论条目

评论条目使用 `.comment` 类标识。在评论条目内可以使用如下特殊类：

 - `.avatar`，可选，用于包含一张图片作为发表评论的用户头像；
 - `.content`，用于包含评论内容的容器；
 - `.text`，用于包裹评论正文内容的容器，作为 `.content` 的直接子元素；
 - `.actions`，用于包裹评论操作按钮或链接，作为 `.content` 的直接子元素；
 - `.comments-list`，为该条评论嵌套一个新的评论列表，一般用于显示用户回复的评论条目。

### 一般形式

包含用户头像、用户名称、操作链接、发布时间等。

<example>
  <div class="comment">
    <a href="###" class="avatar">
      <i class="icon-user icon-2x"></i>
    </a>
    <div class="content">
      <div class="pull-right text-muted">2 个小时前</div>
      <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
      <div class="text">你到底把我家钥匙放哪里了...</div>
      <div class="actions">
        <a href="##">回复</a>
        <a href="##">编辑</a>
        <a href="##">删除</a>
      </div>
    </div>
  </div>
</example>

```html
<div class="comment">
  <a href="###" class="avatar">
    <i class="icon-user icon-2x"></i>
  </a>
  <div class="content">
    <div class="pull-right text-muted">2 个小时前</div>
    <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
    <div class="text">你到底把我家钥匙放哪里了...</div>
    <div class="actions">
      <a href="##">回复</a>
      <a href="##">编辑</a>
      <a href="##">删除</a>
    </div>
  </div>
</div>
```

<div class="alert alert-primary-inverse">
  <h4>自定义头像</h4>
  <p>文档内使用图标作为头像内容仅仅作为演示，并非 ZUI 提供，你需要在 .avatar 内包含一张图片用作头像内容。</p>
</div>

### 不包含头像

直接移除 `.avatar` 元素即可。

<example>
  <div class="comment">
    <div class="content">
      <div class="pull-right text-muted">2 个小时前</div>
      <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
      <div class="text">你到底把我家钥匙放哪里了...</div>
      <div class="actions">
        <a href="##">回复</a>
        <a href="##">编辑</a>
        <a href="##">删除</a>
      </div>
    </div>
  </div>
</example>

```html
<div class="comment">
  <div class="content">
    <div class="pull-right text-muted">2 个小时前</div>
    <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
    <div class="text">你到底把我家钥匙放哪里了...</div>
    <div class="actions">
      <a href="##">回复</a>
      <a href="##">编辑</a>
      <a href="##">删除</a>
    </div>
  </div>
</div>
```

### 嵌套评论列表

在 `.comment` 内直接包含一个新的 `.comments-list` 即可。

<example>
  <div class="comment">
    <a href="###" class="avatar">
      <i class="icon-camera-retro icon-2x"></i>
    </a>
    <div class="content">
      <div class="pull-right text-muted">3 个小时前</div>
      <div><a href="###"><strong>张士超</strong></a></div>
      <div class="text">今天玩的真开心！~~~~~~</div>
      <div class="actions">
        <a href="##">回复</a>
      </div>
    </div>
    <div class="comments-list">
      <div class="comment">
        <a href="###" class="avatar">
          <i class="icon-user icon-2x"></i>
        </a>
        <div class="content">
          <div class="pull-right text-muted">2 个小时前</div>
          <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
          <div class="text">你到底把我家钥匙放哪里了...</div>
          <div class="actions">
            <a href="##">回复</a>
            <a href="##">编辑</a>
            <a href="##">删除</a>
          </div>
        </div>
        <div class="comments-list">
          <div class="comment">
            <a href="###" class="avatar">
              <i class="icon-yinyang icon-2x"></i>
            </a>
            <div class="content">
              <div class="pull-right text-muted">1 个小时前</div>
              <div><a href="###"><strong>门口大爷</strong></a> <span class="text-muted">回复</span> <a href="###">Catouse</a></div>
              <div class="text">不在我这儿...</div>
              <div class="actions">
                <a href="##">回复</a>
              </div>
            </div>
          </div>
          <div class="comment">
            <a href="###" class="avatar">
              <i class="icon-cube-alt icon-2x"></i>
            </a>
            <div class="content">
              <div class="pull-right text-muted">1 个小时前</div>
              <div><a href="###"><strong>队长</strong></a> <span class="text-muted">回复</span> <a href="###">Catouse</a></div>
              <div class="text">也不在我这儿...</div>
              <div class="actions">
                <a href="##">回复</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <a href="###" class="avatar">
          <i class="icon-heart-empty icon-2x"></i>
        </a>
        <div class="content">
          <div class="pull-right text-muted">30 分钟前</div>
          <div><a href="###"><strong>华师大第一美女</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
          <div class="text">很开心~~~</div>
          <div class="actions">
            <a href="##">回复</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="comment">
  <a href="###" class="avatar">
    <i class="icon-camera-retro icon-2x"></i>
  </a>
  <div class="content">
    <div class="pull-right text-muted">3 个小时前</div>
    <div><a href="###"><strong>张士超</strong></a></div>
    <div class="text">今天玩的真开心！~~~~~~</div>
    <div class="actions">
      <a href="##">回复</a>
    </div>
  </div>
  <div class="comments-list">
    <div class="comment">
      <a href="###" class="avatar">
        <i class="icon-user icon-2x"></i>
      </a>
      <div class="content">
        <div class="pull-right text-muted">2 个小时前</div>
        <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
        <div class="text">你到底把我家钥匙放哪里了...</div>
        <div class="actions">
          <a href="##">回复</a>
          <a href="##">编辑</a>
          <a href="##">删除</a>
        </div>
      </div>
      <div class="comments-list">
        <div class="comment">
          <a href="###" class="avatar">
            <i class="icon-yinyang icon-2x"></i>
          </a>
          <div class="content">
            <div class="pull-right text-muted">1 个小时前</div>
            <div><a href="###"><strong>门口大爷</strong></a> <span class="text-muted">回复</span> <a href="###">Catouse</a></div>
            <div class="text">不在我这儿...</div>
            <div class="actions">
              <a href="##">回复</a>
            </div>
          </div>
        </div>
        <div class="comment">
          <a href="###" class="avatar">
            <i class="icon-cube-alt icon-2x"></i>
          </a>
          <div class="content">
            <div class="pull-right text-muted">1 个小时前</div>
            <div><a href="###"><strong>队长</strong></a> <span class="text-muted">回复</span> <a href="###">Catouse</a></div>
            <div class="text">也不在我这儿...</div>
            <div class="actions">
              <a href="##">回复</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="comment">
      <a href="###" class="avatar">
        <i class="icon-heart-empty icon-2x"></i>
      </a>
      <div class="content">
        <div class="pull-right text-muted">30 分钟前</div>
        <div><a href="###"><strong>华师大第一美女</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
        <div class="text">很开心~~~</div>
        <div class="actions">
          <a href="##">回复</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

<div class="alert alert-primary-inverse">
  <h4>限制嵌套层次</h4>
  <p>虽然你可以无限的嵌套评论列表，但受限于视窗大小和便于用户阅读，不应该使用超过 3 个层级的嵌套。</p>
</div>

## 评论表单

评论表单通常放置在 `<footer>` 内。在 `<form>` 上添加 `.reply-form` 类来获得外观一致性的评论表单。

<example>
  <div class="comments">
    <section class="comments-list">
      <div class="comment">
        <a href="###" class="avatar">
          <i class="icon-user icon-2x"></i>
        </a>
        <div class="content">
          <div class="pull-right text-muted">2 个小时前</div>
          <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
          <div class="text">你到底把我家钥匙放哪里了...</div>
          <div class="actions">
            <a href="##">回复</a>
            <a href="##">编辑</a>
            <a href="##">删除</a>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="reply-form" id="commentReplyForm1">
        <a href="###" class="avatar"><i class="icon-user icon-2x"></i></a>
        <form class="form">
          <div class="form-group">
            <textarea class="form-control new-comment-text" rows="2" placeholder="撰写评论..."></textarea>
          </div>
          <div class="form-group comment-user">
            <div class="row">
              <div class="col-md-3">
                <span class="pull-right">或者</span>
                <a href="#">登录</a> &nbsp;<a href="##">注册</a>
              </div>
              <div class="col-md-7">
                <div class="form-group">
                  <input type="text" class="form-control" id="nameInputEmail1" placeholder="输入评论显示名称">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="输入电子邮件（不会在评论显示）">
                </div>
              </div>
              <div class="col-md-2"><button type="submit" class="btn btn-block btn-primary"><i class="icon-ok"></i></button></div>
            </div>
          </div>
        </form>
      </div>
    </footer>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="comments">
  <section class="comments-list">
    <div class="comment">
      <a href="###" class="avatar">
        <i class="icon-user icon-2x"></i>
      </a>
      <div class="content">
        <div class="pull-right text-muted">2 个小时前</div>
        <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
        <div class="text">你到底把我家钥匙放哪里了...</div>
        <div class="actions">
          <a href="##">回复</a>
          <a href="##">编辑</a>
          <a href="##">删除</a>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div class="reply-form" id="commentReplyForm1">
      <a href="###" class="avatar"><i class="icon-user icon-2x"></i></a>
      <form class="form">
        <div class="form-group">
          <textarea class="form-control new-comment-text" rows="2" placeholder="撰写评论..."></textarea>
        </div>
        <div class="form-group comment-user">
          <div class="row">
            <div class="col-md-3">
              <span class="pull-right">或者</span>
              <a href="#">登录</a> &nbsp;<a href="##">注册</a>
            </div>
            <div class="col-md-7">
              <div class="form-group">
                <input type="text" class="form-control" id="nameInputEmail1" placeholder="输入评论显示名称">
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="输入电子邮件（不会在评论显示）">
              </div>
            </div>
            <div class="col-md-2"><button type="submit" class="btn btn-block btn-primary"><i class="icon-ok"></i></button></div>
          </div>
        </div>
      </form>
    </div>
  </footer>
</div>
```

## 综合示例

<example style="padding-bottom: 0">
  <div class="comments">
    <header>
      <div class="pull-right"><a href="#commentReplyForm2" class="btn btn-primary"><i class="icon-comment-alt"></i> 发表评论</a></div>
      <h3>所有评论</h3>
    </header>
    <section class="comments-list">
      <div class="comment">
        <a href="###" class="avatar">
          <i class="icon-camera-retro icon-2x"></i>
        </a>
        <div class="content">
          <div class="pull-right text-muted">3 个小时前</div>
          <div><a href="###"><strong>张士超</strong></a></div>
          <div class="text">今天玩的真开心！~~~~~~</div>
          <div class="actions">
            <a href="##">回复</a>
          </div>
        </div>
        <div class="comments-list">
          <div class="comment">
            <a href="###" class="avatar">
              <i class="icon-user icon-2x"></i>
            </a>
            <div class="content">
              <div class="pull-right text-muted">2 个小时前</div>
              <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
              <div class="text">你到底把我家钥匙放哪里了...</div>
              <div class="actions">
                <a href="##">回复</a>
                <a href="##">编辑</a>
                <a href="##">删除</a>
              </div>
            </div>
            <div class="comments-list">
              <div class="comment">
                <a href="###" class="avatar">
                  <i class="icon-yinyang icon-2x"></i>
                </a>
                <div class="content">
                  <div class="pull-right text-muted">1 个小时前</div>
                  <div><a href="###"><strong>门口大爷</strong></a> <span class="text-muted">回复</span> <a href="###">Catouse</a></div>
                  <div class="text">不在我这儿...</div>
                  <div class="actions">
                    <a href="##">回复</a>
                  </div>
                </div>
              </div>
              <div class="comment">
                <a href="###" class="avatar">
                  <i class="icon-cube-alt icon-2x"></i>
                </a>
                <div class="content">
                  <div class="pull-right text-muted">1 个小时前</div>
                  <div><a href="###"><strong>队长</strong></a> <span class="text-muted">回复</span> <a href="###">Catouse</a></div>
                  <div class="text">也不在我这儿...</div>
                  <div class="actions">
                    <a href="##">回复</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="comment">
            <a href="###" class="avatar">
              <i class="icon-heart-empty icon-2x"></i>
            </a>
            <div class="content">
              <div class="pull-right text-muted">30 分钟前</div>
              <div><a href="###"><strong>华师大第一美女</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
              <div class="text">很开心~~~</div>
              <div class="actions">
                <a href="##">回复</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="reply-form" id="commentReplyForm2">
        <a href="###" class="avatar"><i class="icon-user icon-2x"></i></a>
        <form class="form">
          <div class="form-group">
            <textarea class="form-control new-comment-text" rows="2" placeholder="撰写评论..."></textarea>
          </div>
          <div class="form-group comment-user">
            <div class="row">
              <div class="col-md-3">
                <span class="pull-right">或者</span>
                <a href="#">登录</a> &nbsp;<a href="##">注册</a>
              </div>
              <div class="col-md-7">
                <div class="form-group">
                  <input type="text" class="form-control" id="nameInputEmail1" placeholder="输入评论显示名称">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="输入电子邮件（不会在评论显示）">
                </div>
              </div>
              <div class="col-md-2"><button type="submit" class="btn btn-block btn-primary"><i class="icon-ok"></i></button></div>
            </div>
          </div>
        </form>
      </div>
    </footer>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="comments">
  <header>
    <div class="pull-right"><a href="#commentReplyForm2" class="btn btn-primary"><i class="icon-comment-alt"></i> 发表评论</a></div>
    <h3>所有评论</h3>
  </header>
  <section class="comments-list">
    <div class="comment">
      <a href="###" class="avatar">
        <i class="icon-camera-retro icon-2x"></i>
      </a>
      <div class="content">
        <div class="pull-right text-muted">3 个小时前</div>
        <div><a href="###"><strong>张士超</strong></a></div>
        <div class="text">今天玩的真开心！~~~~~~</div>
        <div class="actions">
          <a href="##">回复</a>
        </div>
      </div>
      <div class="comments-list">
        <div class="comment">
          <a href="###" class="avatar">
            <i class="icon-user icon-2x"></i>
          </a>
          <div class="content">
            <div class="pull-right text-muted">2 个小时前</div>
            <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
            <div class="text">你到底把我家钥匙放哪里了...</div>
            <div class="actions">
              <a href="##">回复</a>
              <a href="##">编辑</a>
              <a href="##">删除</a>
            </div>
          </div>
          <div class="comments-list">
            <div class="comment">
              <a href="###" class="avatar">
                <i class="icon-yinyang icon-2x"></i>
              </a>
              <div class="content">
                <div class="pull-right text-muted">1 个小时前</div>
                <div><a href="###"><strong>门口大爷</strong></a> <span class="text-muted">回复</span> <a href="###">Catouse</a></div>
                <div class="text">不在我这儿...</div>
                <div class="actions">
                  <a href="##">回复</a>
                </div>
              </div>
            </div>
            <div class="comment">
              <a href="###" class="avatar">
                <i class="icon-cube-alt icon-2x"></i>
              </a>
              <div class="content">
                <div class="pull-right text-muted">1 个小时前</div>
                <div><a href="###"><strong>队长</strong></a> <span class="text-muted">回复</span> <a href="###">Catouse</a></div>
                <div class="text">也不在我这儿...</div>
                <div class="actions">
                  <a href="##">回复</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="comment">
          <a href="###" class="avatar">
            <i class="icon-heart-empty icon-2x"></i>
          </a>
          <div class="content">
            <div class="pull-right text-muted">30 分钟前</div>
            <div><a href="###"><strong>华师大第一美女</strong></a> <span class="text-muted">回复</span> <a href="###">张士超</a></div>
            <div class="text">很开心~~~</div>
            <div class="actions">
              <a href="##">回复</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div class="reply-form" id="commentReplyForm2">
      <a href="###" class="avatar"><i class="icon-user icon-2x"></i></a>
      <form class="form">
        <div class="form-group">
          <textarea class="form-control new-comment-text" rows="2" placeholder="撰写评论..."></textarea>
        </div>
        <div class="form-group comment-user">
          <div class="row">
            <div class="col-md-3">
              <span class="pull-right">或者</span>
              <a href="#">登录</a> &nbsp;<a href="##">注册</a>
            </div>
            <div class="col-md-7">
              <div class="form-group">
                <input type="text" class="form-control" id="nameInputEmail1" placeholder="输入评论显示名称">
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="输入电子邮件（不会在评论显示）">
              </div>
            </div>
            <div class="col-md-2"><button type="submit" class="btn btn-block btn-primary"><i class="icon-ok"></i></button></div>
          </div>
        </div>
      </form>
    </div>
  </footer>
</div>
```
