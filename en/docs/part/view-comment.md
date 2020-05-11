section: view
id: comment
description: Show a list view of comments
icon: icon-comments
filter: pinglun pl
---

# Comment 

Comment view is used to display comments. Comment list allows embedding.

## Structure

Comment view use `.comments` as a parent container and the following special classes to mark child containers:

<table class="table">
  <tbody>
    <tr>
      <td style="width: 150px">`<header>`</td>
      <td style="width: 80px">header</td>
      <td>Title and other information</td>
    </tr>
    <tr>
      <td>`.comments-list`</td>
      <td>List item group</td>
      <td>`.comments-list` can also be embedded in`.comment`</td>
    </tr>
    <tr>
      <td>`<footer>`</td>
      <td>bottom</td>
      <td>Display comments and pager information, etc.</td>
    </tr>
  </tbody>
</table>

HTML structure is as follows:

```html
<div class="comments">
  <header>
    <h1>All comments</h1>
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

## Comment items

Comment items use `.comment` class as identifiers. The following special classes can be used in the comment items:

 - `.avatar`: Optional. Used to include an image as a user avatar when posting a comment;
 - `.content`: Container for comment contents;
 - `.text`: Container for the body of a comment as a child element of `.content`;
 - `.actions`: Embed comment action buttons or links as a child element of `.content`;
 - `.comments-list`: Embed a new comment list in a comment. Used to display comment items for user replies.

### General style

A comment usually contains user avatar, user name, action link, post time, etc.

<example>
  <div class="comment">
    <a href="###" class="avatar">
      <i class="icon-user icon-2x"></i>
    </a>
    <div class="content">
      <div class="pull-right text-muted">2 Hours ago</div>
      <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
      <div class="text">Where did you put my home key?...</div>
      <div class="actions">
        <a href="##">Reply</a>
        <a href="##">Edit</a>
        <a href="##">Delete</a>
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
    <div class="pull-right text-muted">2 Hours ago</div>
    <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
    <div class="text">Where did you put my home key?...</div>
    <div class="actions">
      <a href="##">Reply</a>
      <a href="##">Edit</a>
      <a href="##">Delete</a>
    </div>
  </div>
</div>
```

<div class="alert alert-primary-inverse">
  <h4>Custom avatar</h4>
  <p>Using icons as avatar content in a file is for demonstration only. It is not provided in ZUI. You need to embed an image in .avatar for avatar content.</p>
</div>

### No avatar

Remove `.avatar` can do it.

<example>
  <div class="comment">
    <div class="content">
      <div class="pull-right text-muted">2 Hours ago</div>
      <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
      <div class="text">Where did you put my home key?...</div>
      <div class="actions">
        <a href="##">Reply</a>
        <a href="##">Edit</a>
        <a href="##">Delete</a>
      </div>
    </div>
  </div>
</example>

```html
<div class="comment">
  <div class="content">
    <div class="pull-right text-muted">2 Hours ago</div>
    <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
    <div class="text">Where did you put my home key?...</div>
    <div class="actions">
      <a href="##">Reply</a>
      <a href="##">Edit</a>
      <a href="##">Delete</a>
    </div>
  </div>
</div>
```

### Nested comment list

Embed `.comments-list` in `.comment` to create a nested comment list.

<example>
  <div class="comment">
    <a href="###" class="avatar">
      <i class="icon-camera-retro icon-2x"></i>
    </a>
    <div class="content">
      <div class="pull-right text-muted">3 Hours ago</div>
      <div><a href="###"><strong>Zhang Shichao</strong></a></div>
      <div class="text">I am really happy to play today.！~~~~~~</div>
      <div class="actions">
        <a href="##">Reply</a>
      </div>
    </div>
    <div class="comments-list">
      <div class="comment">
        <a href="###" class="avatar">
          <i class="icon-user icon-2x"></i>
        </a>
        <div class="content">
          <div class="pull-right text-muted">2 Hours ago</div>
          <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
          <div class="text">Where did you put my home key?...</div>
          <div class="actions">
            <a href="##">Reply</a>
            <a href="##">Edit</a>
            <a href="##">Delete</a>
          </div>
        </div>
        <div class="comments-list">
          <div class="comment">
            <a href="###" class="avatar">
              <i class="icon-yinyang icon-2x"></i>
            </a>
            <div class="content">
              <div class="pull-right text-muted">1 Hours ago</div>
              <div><a href="###"><strong>Grandfather at the door</strong></a> <span class="text-muted">Reply</span> <a href="###">Catouse</a></div>
              <div class="text">Not here...</div>
              <div class="actions">
                <a href="##">Reply</a>
              </div>
            </div>
          </div>
          <div class="comment">
            <a href="###" class="avatar">
              <i class="icon-cube-alt icon-2x"></i>
            </a>
            <div class="content">
              <div class="pull-right text-muted">1 Hours ago</div>
              <div><a href="###"><strong>team leader</strong></a> <span class="text-muted">Reply</span> <a href="###">Catouse</a></div>
              <div class="text">Not here with me...</div>
              <div class="actions">
                <a href="##">Reply</a>
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
          <div class="pull-right text-muted">30 minutes ago</div>
          <div><a href="###"><strong>The first beauty of China Normal University</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
          <div class="text">Very happy~~~</div>
          <div class="actions">
            <a href="##">Reply</a>
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
    <div class="pull-right text-muted">3 Hours ago</div>
    <div><a href="###"><strong>Zhang Shichao</strong></a></div>
    <div class="text">I am really happy to play today.！~~~~~~</div>
    <div class="actions">
      <a href="##">Reply</a>
    </div>
  </div>
  <div class="comments-list">
    <div class="comment">
      <a href="###" class="avatar">
        <i class="icon-user icon-2x"></i>
      </a>
      <div class="content">
        <div class="pull-right text-muted">2 Hours ago</div>
        <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
        <div class="text">Where did you put my home key?...</div>
        <div class="actions">
          <a href="##">Reply</a>
          <a href="##">edit</a>
          <a href="##">delete</a>
        </div>
      </div>
      <div class="comments-list">
        <div class="comment">
          <a href="###" class="avatar">
            <i class="icon-yinyang icon-2x"></i>
          </a>
          <div class="content">
            <div class="pull-right text-muted">1 Hours ago</div>
            <div><a href="###"><strong>Grandfather at the door</strong></a> <span class="text-muted">Reply</span> <a href="###">Catouse</a></div>
            <div class="text">Not here...</div>
            <div class="actions">
              <a href="##">Reply</a>
            </div>
          </div>
        </div>
        <div class="comment">
          <a href="###" class="avatar">
            <i class="icon-cube-alt icon-2x"></i>
          </a>
          <div class="content">
            <div class="pull-right text-muted">1 Hours ago</div>
            <div><a href="###"><strong>team leader</strong></a> <span class="text-muted">Reply</span> <a href="###">Catouse</a></div>
            <div class="text">Not here with me...</div>
            <div class="actions">
              <a href="##">Reply</a>
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
        <div class="pull-right text-muted">30 minutes ago</div>
        <div><a href="###"><strong>The first beauty of China Normal University</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
        <div class="text">Very happy~~~</div>
        <div class="actions">
          <a href="##">Reply</a>
        </div>
      </div>
    </div>
  </div>
</div>
```

<div class="alert alert-primary-inverse">
  <h4>Limited levels</h4>
  <p>Although you can nest a list of comments infinitely, you should not be create a nested comment list that is more than three levels due to the window size and easiness for users to read. </p>
</div>

## Comment form

Comment form is usually placed in `<footer>`. Add `.reply-form` classes in `<form>` to get comment forms with the same look.

<example>
  <div class="comments">
    <section class="comments-list">
      <div class="comment">
        <a href="###" class="avatar">
          <i class="icon-user icon-2x"></i>
        </a>
        <div class="content">
          <div class="pull-right text-muted">2 Hours ago</div>
          <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
          <div class="text">Where did you put my home key?...</div>
          <div class="actions">
            <a href="##">Reply</a>
            <a href="##">Edit</a>
            <a href="##">Delete</a>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="reply-form" id="commentReplyForm1">
        <a href="###" class="avatar"><i class="icon-user icon-2x"></i></a>
        <form class="form">
          <div class="form-group">
            <textarea class="form-control new-comment-text" rows="2" placeholder="Write a review..."></textarea>
          </div>
          <div class="form-group comment-user">
            <div class="row">
              <div class="col-md-3">
                <span class="pull-right">or</span>
                <a href="#">log in</a> &nbsp;<a href="##">register</a>
              </div>
              <div class="col-md-7">
                <div class="form-group">
                  <input type="text" class="form-control" id="nameInputEmail1" placeholder="Enter a comment display name">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email（Will not show in comments）">
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
        <div class="pull-right text-muted">2 Hours ago</div>
        <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
        <div class="text">Where did you put my home key?...</div>
        <div class="actions">
          <a href="##">Reply</a>
          <a href="##">Edit</a>
          <a href="##">Delete</a>
        </div>
      </div>
    </div>
  </section>
  <footer>
    <div class="reply-form" id="commentReplyForm1">
      <a href="###" class="avatar"><i class="icon-user icon-2x"></i></a>
      <form class="form">
        <div class="form-group">
          <textarea class="form-control new-comment-text" rows="2" placeholder="Write a review..."></textarea>
        </div>
        <div class="form-group comment-user">
          <div class="row">
            <div class="col-md-3">
              <span class="pull-right">or</span>
              <a href="#">log in</a> &nbsp;<a href="##">register</a>
            </div>
            <div class="col-md-7">
              <div class="form-group">
                <input type="text" class="form-control" id="nameInputEmail1" placeholder="Enter a comment title">
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email(now show in comments)">
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

## Comprehensive examples

<example style="padding-bottom: 0">
  <div class="comments">
    <header>
      <div class="pull-right"><a href="#commentReplyForm2" class="btn btn-primary"><i class="icon-comment-alt"></i> Post a comment</a></div>
      <h3>All comments</h3>
    </header>
    <section class="comments-list">
      <div class="comment">
        <a href="###" class="avatar">
          <i class="icon-camera-retro icon-2x"></i>
        </a>
        <div class="content">
          <div class="pull-right text-muted">3 Hours ago</div>
          <div><a href="###"><strong>Zhang Shichao</strong></a></div>
          <div class="text">I am really happy to play today.！~~~~~~</div>
          <div class="actions">
            <a href="##">Reply</a>
          </div>
        </div>
        <div class="comments-list">
          <div class="comment">
            <a href="###" class="avatar">
              <i class="icon-user icon-2x"></i>
            </a>
            <div class="content">
              <div class="pull-right text-muted">2 Hours ago</div>
              <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
              <div class="text">Where did you put my home key?...</div>
              <div class="actions">
                <a href="##">Reply</a>
                <a href="##">Edit</a>
                <a href="##">Delete</a>
              </div>
            </div>
            <div class="comments-list">
              <div class="comment">
                <a href="###" class="avatar">
                  <i class="icon-yinyang icon-2x"></i>
                </a>
                <div class="content">
                  <div class="pull-right text-muted">1 Hours ago</div>
                  <div><a href="###"><strong>Grandfather at the door</strong></a> <span class="text-muted">Reply</span> <a href="###">Catouse</a></div>
                  <div class="text">Not here...</div>
                  <div class="actions">
                    <a href="##">Reply</a>
                  </div>
                </div>
              </div>
              <div class="comment">
                <a href="###" class="avatar">
                  <i class="icon-cube-alt icon-2x"></i>
                </a>
                <div class="content">
                  <div class="pull-right text-muted">1 Hours ago</div>
                  <div><a href="###"><strong>team leader</strong></a> <span class="text-muted">Reply</span> <a href="###">Catouse</a></div>
                  <div class="text">Not here with me...</div>
                  <div class="actions">
                    <a href="##">Reply</a>
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
              <div class="pull-right text-muted">30 minutes ago</div>
              <div><a href="###"><strong>The first beauty of China Normal University</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
              <div class="text">Very happy~~~</div>
              <div class="actions">
                <a href="##">Reply</a>
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
            <textarea class="form-control new-comment-text" rows="2" placeholder="Write a review..."></textarea>
          </div>
          <div class="form-group comment-user">
            <div class="row">
              <div class="col-md-3">
                <span class="pull-right">or</span>
                <a href="#">log in</a> &nbsp;<a href="##">register</a>
              </div>
              <div class="col-md-7">
                <div class="form-group">
                  <input type="text" class="form-control" id="nameInputEmail1" placeholder="Enter a comment display name">
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email（Will not show in comments）">
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
    <div class="pull-right"><a href="#commentReplyForm2" class="btn btn-primary"><i class="icon-comment-alt"></i> Post a comment</a></div>
    <h3>All comments</h3>
  </header>
  <section class="comments-list">
    <div class="comment">
      <a href="###" class="avatar">
        <i class="icon-camera-retro icon-2x"></i>
      </a>
      <div class="content">
        <div class="pull-right text-muted">3 Hours ago</div>
        <div><a href="###"><strong>Zhang Shichao</strong></a></div>
        <div class="text">I am really happy to play today.！~~~~~~</div>
        <div class="actions">
          <a href="##">Reply</a>
        </div>
      </div>
      <div class="comments-list">
        <div class="comment">
          <a href="###" class="avatar">
            <i class="icon-user icon-2x"></i>
          </a>
          <div class="content">
            <div class="pull-right text-muted">2 Hours ago</div>
            <div><a href="###"><strong>Catouse</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
            <div class="text">Where did you put my home key?...</div>
            <div class="actions">
              <a href="##">Reply</a>
              <a href="##">edit</a>
              <a href="##">delete</a>
            </div>
          </div>
          <div class="comments-list">
            <div class="comment">
              <a href="###" class="avatar">
                <i class="icon-yinyang icon-2x"></i>
              </a>
              <div class="content">
                <div class="pull-right text-muted">1 Hours ago</div>
                <div><a href="###"><strong>Grandfather at the door</strong></a> <span class="text-muted">Reply</span> <a href="###">Catouse</a></div>
                <div class="text">Not here...</div>
                <div class="actions">
                  <a href="##">Reply</a>
                </div>
              </div>
            </div>
            <div class="comment">
              <a href="###" class="avatar">
                <i class="icon-cube-alt icon-2x"></i>
              </a>
              <div class="content">
                <div class="pull-right text-muted">1 Hours ago</div>
                <div><a href="###"><strong>team leader</strong></a> <span class="text-muted">Reply</span> <a href="###">Catouse</a></div>
                <div class="text">Not here with me...</div>
                <div class="actions">
                  <a href="##">Reply</a>
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
            <div class="pull-right text-muted">30 minutes ago</div>
            <div><a href="###"><strong>The first beauty of China Normal University</strong></a> <span class="text-muted">Reply</span> <a href="###">Zhang Shichao</a></div>
            <div class="text">Very happy~~~</div>
            <div class="actions">
              <a href="##">Reply</a>
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
          <textarea class="form-control new-comment-text" rows="2" placeholder="Write a review..."></textarea>
        </div>
        <div class="form-group comment-user">
          <div class="row">
            <div class="col-md-3">
              <span class="pull-right">or</span>
              <a href="#">log in</a> &nbsp;<a href="##">register</a>
            </div>
            <div class="col-md-7">
              <div class="form-group">
                <input type="text" class="form-control" id="nameInputEmail1" placeholder="Enter a comment title">
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email( not show in comments)">
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
