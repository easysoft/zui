section: component
id: alert
description: 使用消息框引起用户注意
icon: icon-warning-sign
filter: xiaoxikuang xxk
---

# Alert

Alert is used to bring up something that users should be noted.

## Colors

5 colors are provided for alerts in different scenarios.

<div class="example">
  <div class="alert">
    <h4>Hello</h4>
    <hr>
    <p>Things users should know.</p>
  </div>
  <div class="alert alert-primary">
    <h4>Hello, World!</h4>
    <hr>
    <p>Primary color.</p>
  </div>
  <div class="alert alert-success">
    <h4>Done!</h4>
    <hr>
    <strong>Everything is ready.</strong>
  </div>
  <div class="alert alert-info">
    <strong>Hi!</strong> Things that you should pay attention to.
  </div>
  <div class="alert alert-warning">
    <strong>Warning!</strong> Something is not right.
  </div>
  <div class="alert alert-danger">
    <h4>Danger!</h4>
    <p>Something is wrong.</p>
  </div>
</div>

```html
<div class="alert">...</div>
<div class="alert alert-primary">...</div>
<div class="alert alert-danger">...</div>
<div class="alert alert-success">...</div>
<div class="alert alert-warning">...</div>
<div class="alert alert-info">...</div>
```

## Alert Icon

An eye-catching icon could help users get notified faster. Use `.alert` and `.with-icon` to make this happen.

<div class="example">
  <div class="alert with-icon">
    <i class="icon-inbox"></i>
    <div class="content">
      <h4>Hello</h4>
      <hr>
      <p>Things that users should know.</p>
    </div>
  </div>
  <div class="alert alert-success with-icon">
    <i class="icon-ok-sign"></i>
    <div class="content">
      <h4>Done!</h4>
      <hr>
      <strong>Everything is ready.</strong>
    </div>
  </div>
  <div class="alert alert-primary with-icon">
    <i class="icon-star"></i>
    <div class="content">
      <h4>Hello, World!</h4>
      <hr>
      <p>Primary color.</p>
    </div>
  </div>
  <div class="alert alert-info with-icon">
    <i class="icon-info-sign"></i>
    <div class="content"><strong>Hi!</strong> Things that you should pay attention to.
    </div>
  </div>
  <div class="alert alert-warning with-icon">
    <i class="icon-frown"></i>
    <div class="content"><strong>Warning!</strong> Something is not right.</div>
  </div>
  <div class="alert alert-danger with-icon">
    <i class="icon-remove-sign"></i>
    <div class="content">
      <h4>Danger!</h4>
      <p>Something is wrong.</p>
    </div>
  </div>
</div>

```html
<div class="alert alert-success with-icon">
  <i class="icon-ok-sign"></i>
  <div class="content">...</div>
</div>
```

## Inverse Color

<div class="example">
  <div class="alert alert-inverse with-icon">
    <i class="icon-inbox"></i>
    <div class="content">
      <h4>Hello</h4>
      <hr>
      <p>Things that users should know.</p>
    </div>
  </div>
  <div class="alert alert-primary-inverse with-icon">
    <i class="icon-star"></i>
    <div class="content">
      <h4>Hello, World!</h4>
      <hr>
      <p>Primary color.</p>
    </div>
  </div>
  <div class="alert alert-success-inverse with-icon">
    <i class="icon-ok-sign"></i>
    <div class="content">
      <h4>Done!</h4>
      <hr>
      <strong>Everything is ready.</strong>
    </div>
  </div>
  <div class="alert alert-info-inverse with-icon">
    <i class="icon-info-sign"></i>
    <div class="content"><strong>Hi!</strong> Things that you should pay attention to.</div>
  </div>
  <div class="alert alert-warning-inverse with-icon">
    <i class="icon-frown"></i>
    <div class="content"><strong>Warning!</strong> Something is not right.</div>
  </div>
  <div class="alert alert-danger-inverse with-icon">
    <i class="icon-remove-sign"></i>
    <div class="content">
      <h4>Danger!</h4>
      <p>Something is wrong.</p>
    </div>
  </div>
</div>

```html
<div class="alert alert-inverse">...</div>
<div class="alert alert-primary-inverse">...</div>
<div class="alert alert-danger-inverse">...</div>
<div class="alert alert-success-inverse">...</div>
<div class="alert alert-warning-inverse">...</div>
<div class="alert alert-info-inverse">...</div>
```

## Alert Block

Alert block has no padding or rounded corners. It is to be displayed at the the top of a page or floated.

<div class="example no-padding borderless">
  <div class="alert alert-success alert-block with-icon">
    <i class="icon-ok-sign"></i>
    <div class="content"><strong>Done!</strong> Everything is ready.</div>
  </div>
</div>

```html
<div class="alert alert-block">...</div>
```

## Links

Use `.alert-link` to keep the tyle of the link the same as the alert.

<div class="example">
  <div class="alert with-icon">
    <i class="icon-inbox"></i>
    <div class="content"><strong>Hello!</strong> <a class="alert-link" href="###">Things</a> you might have to know.</div>
  </div>
  <div class="alert alert-primary with-icon">
    <i class="icon-star"></i>
    <div class="content">
      <h4>Hello</h4>
      <hr>
      <p><a href="###">World.</a></p>
    </div>
  </div>
  <div class="alert with-icon alert-success">
    <i class="icon-ok-sign"></i>
    <div class="content"><strong>Done!</strong> Everything is <a class="alert-link" href="###">Ready</a>.</div>
  </div>
  <div class="alert with-icon alert-info">
    <i class="icon-info-sign"></i>
    <div class="content"><strong>Hi!</strong> This message requires <a class="alert-link" href="###"> your attention</a>.</div>
  </div>
  <div class="alert with-icon alert-warning">
    <i class="icon-frown"></i>
    <div class="content"><strong>Warning!</strong> Something is <a class="alert-link" href="###"> wrong</a>.</div>
  </div>
  <div class="alert with-icon alert-danger">
    <i class="icon-remove-sign"></i>
    <div class="content"><strong>Done!</strong> Something is wrong. <a class="alert-link" href="###">Fix it now</a>.</div>
  </div>
</div>

```html
<div class="alert">Be aware of <a class="alert-link" href="your/url/">links</a> in an alert dialog.</div>
```

## Close

Use `.alert-dismissable` to close an alert.

<div class="example example-alert-dismissable">
  <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
    <strong>Warning!</strong> Something is not right.
    <p>Click <i class="icon-remove"></i> to close this alert.</p>
  </div>
</div>

```html
<div class="alert alert-warning alert-dismissable">
  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
  <p>Click <i class="icon-remove"></i> to close this alert.</p>
</div>
```
