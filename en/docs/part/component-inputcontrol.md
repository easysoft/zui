# Input box

Input box allows small icons to be placed to the left and right of the normal input box，Or provide a preset label。

## With icon

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control has-icon-left">
        <input id="inputAccountExample1" type="text" class="form-control" placeholder="username">
        <label for="inputAccountExample1" class="input-control-icon-left"><i class="icon icon-user "></i></label>
      </div>
      <br />
      <div class="input-control has-icon-left has-icon-right">
        <input id="inputEmailExample1" type="email" class="form-control" placeholder="password">
        <label for="inputEmailExample1" class="input-control-icon-left"><i class="icon icon-envelope "></i></label>
        <label for="inputEmailExample1" class="input-control-icon-right"><i class="icon icon-check"></i></label>
      </div>
      <br />
      <div class="input-control has-icon-right">
        <input id="inputPasswordExample1" type="password" class="form-control" placeholder="password">
        <label for="inputPasswordExample1" class="input-control-icon-right"><i class="icon icon-key"></i></label>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control has-icon-left">
  <input id="inputAccountExample1" type="text" class="form-control" placeholder="username">
  <label for="inputAccountExample1" class="input-control-icon-left"><i class="icon icon-user "></i></label>
</div>
```

```html
<div class="input-control has-icon-right">
  <input id="inputPasswordExample1" type="password" class="form-control" placeholder="password">
  <label for="inputPasswordExample1" class="input-control-icon-right"><i class="icon icon-key"></i></label>
</div>
```

```html
<div class="input-control has-icon-left has-icon-right">
  <input id="inputEmailExample1" type="email" class="form-control" placeholder="password">
  <label for="inputEmailExample1" class="input-control-icon-left"><i class="icon icon-envelope "></i></label>
  <label for="inputEmailExample1" class="input-control-icon-right"><i class="icon icon-check"></i></label>
</div>
```

## Labeled

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control has-label-left">
        <input id="inputAccountExample2" type="text" class="form-control" placeholder="">
        <label for="inputAccountExample2" class="input-control-label-left">username:</label>
      </div>
      <br />
      <div class="input-control has-label-left has-icon-right">
        <input id="inputEmailExample2" type="email" class="form-control" placeholder="">
        <label for="inputEmailExample2" class="input-control-label-left">mailbox:</label>
        <label for="inputEmailExample2" class="input-control-icon-right"><i class="icon icon-check"></i></label>
      </div>
      <br />
      <div class="input-control has-label-left has-label-right">
        <input id="inputPasswordExample2" type="password" class="form-control" placeholder="">
        <label for="inputPasswordExample2" class="input-control-label-left">password:</label>
        <label for="inputPasswordExample2" class="input-control-label-right text-right text-success">Safety!!!</label>
      </div>
      <br />
      <div class="input-control has-icon-left has-icon-right">
        <input id="inputGiftExample2" type="text" class="form-control" placeholder="Gift code">
        <label for="inputGiftExample2" class="input-control-icon-left"><i class="icon icon-gift"></i></label>
        <label for="inputPasswordExample2" class="input-control-label-right text-right text-red">enjoy 8 fold</label>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control has-label-left">
  <input id="inputAccountExample2" type="text" class="form-control" placeholder="">
  <label for="inputAccountExample2" class="input-control-label-left">username:</label>
</div>
```

```html
<div class="input-control has-label-left has-icon-right">
  <input id="inputEmailExample2" type="email" class="form-control" placeholder="">
  <label for="inputEmailExample2" class="input-control-label-left">mailbox:</label>
  <label for="inputEmailExample2" class="input-control-icon-right"><i class="icon icon-check"></i></label>
</div>
```

```html
<div class="input-control has-icon-left has-icon-right">
  <input id="inputGiftExample2" type="text" class="form-control" placeholder="Gift code">
  <label for="inputGiftExample2" class="input-control-icon-left"><i class="icon icon-gift"></i></label>
  <label for="inputPasswordExample2" class="input-control-label-right text-right text-red">enjoy 8 fold</label>
</div>
```

```html
<div class="input-control has-label-left has-label-right">
  <input id="inputPasswordExample2" type="password" class="form-control" placeholder="">
  <label for="inputPasswordExample2" class="input-control-label-left">password:</label>
  <label for="inputPasswordExample2" class="input-control-label-right text-right text-success">Safety!!!</label>
</div>
```

### The left label is aligned to the right

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control has-label-left">
        <input id="inputAccountExample3" type="text" class="form-control" placeholder="">
        <label for="inputAccountExample3" class="input-control-label-left text-right">username:</label>
      </div>
      <br />
      <div class="input-control has-label-left has-icon-right">
        <input id="inputEmailExample3" type="email" class="form-control" placeholder="">
        <label for="inputEmailExample3" class="input-control-label-left text-right">mailbox:</label>
        <label for="inputEmailExample3" class="input-control-icon-right"><i class="icon icon-check"></i></label>
      </div>
      <br />
      <div class="input-control has-label-left has-label-right">
        <input id="inputPasswordExample3" type="password" class="form-control" placeholder="">
        <label for="inputPasswordExample3" class="input-control-label-left text-right">password:</label>
        <label for="inputPasswordExample3" class="input-control-label-right text-right text-success">Safety!!!</label>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control has-label-left">
  <input id="inputAccountExample3" type="text" class="form-control" placeholder="">
  <label for="inputAccountExample3" class="input-control-label-left text-right">username:</label>
</div>
```

```html
<div class="input-control has-label-left has-icon-right">
  <input id="inputEmailExample3" type="email" class="form-control" placeholder="">
  <label for="inputEmailExample3" class="input-control-label-left text-right">mailbox:</label>
  <label for="inputEmailExample3" class="input-control-icon-right"><i class="icon icon-check"></i></label>
</div>
```

```html
<div class="input-control has-label-left has-label-right">
  <input id="inputPasswordExample3" type="password" class="form-control" placeholder="">
  <label for="inputPasswordExample3" class="input-control-label-left text-right">password:</label>
  <label for="inputPasswordExample3" class="input-control-label-right text-right text-success">Safety!!!</label>
</div>
```

### Label width size

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <p>use `.has-label-left-sm` with `.has-label-right-sm` instead `.has-label-left` with `.has-label-right` Make the label occupy a small horizontal space。</p>
      <div class="input-control has-label-left-sm">
        <input id="inputAccountExample4" type="text" class="form-control" placeholder="">
        <label for="inputAccountExample4" class="input-control-label-left text-right">username:</label>
      </div>
      <br />
      <div class="input-control has-label-left-sm has-icon-right-sm">
        <input id="inputEmailExample4" type="email" class="form-control" placeholder="">
        <label for="inputEmailExample4" class="input-control-label-left text-right">mailbox:</label>
        <label for="inputEmailExample4" class="input-control-icon-right"><i class="icon icon-check"></i></label>
      </div>
      <br />
      <div class="input-control has-label-left-sm has-label-right-sm">
        <input id="inputPasswordExample4" type="password" class="form-control" placeholder="">
        <label for="inputPasswordExample4" class="input-control-label-left text-right">password:</label>
        <label for="inputPasswordExample4" class="input-control-label-right text-right text-success">Safety!!!</label>
      </div>
    </div>
    <div class="col-md-6">
      <p>use `.has-label-left-lg` with `.has-label-right-lg` instead `.has-label-left` with `.has-label-right` Make the label occupy a large horizontal space。</p>
      <div class="input-control has-label-left-lg">
        <input id="inputAccountExample5" type="text" class="form-control" placeholder="">
        <label for="inputAccountExample5" class="input-control-label-left text-right">username:</label>
      </div>
      <br />
      <div class="input-control has-label-left-lg has-icon-right-lg">
        <input id="inputEmailExample5" type="email" class="form-control" placeholder="">
        <label for="inputEmailExample5" class="input-control-label-left text-right">mailbox:</label>
        <label for="inputEmailExample5" class="input-control-icon-right"><i class="icon icon-check"></i></label>
      </div>
      <br />
      <div class="input-control has-label-left-lg has-label-right-lg">
        <input id="inputPasswordExample5" type="password" class="form-control" placeholder="">
        <label for="inputPasswordExample5" class="input-control-label-left text-right">password:</label>
        <label for="inputPasswordExample5" class="input-control-label-right text-right text-success">Safety!!!</label>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control has-label-left-sm">
  ...
</div>
```

```html
<div class="input-control has-icon-right-sm">
  ...
</div>
```

```html
<div class="input-control has-label-left-sm has-label-right-sm">
  ...
</div>
```

```html
<div class="input-control has-label-left-lg">
  ...
</div>
```

```html
<div class="input-control has-icon-right-lg">
  ...
</div>
```

```html
<div class="input-control has-label-left-lg has-label-right-lg">
  ...
</div>
```

## search bar

for `.input-control` Add to `.search-box` Class and use the following HTML Structure to create a search box component。
use simultaneously `.search-box-circle` Can make the search box get a rounded border appearance。

If you want to use the search box JavaScript Enhanced，Please refer to [JavaScript -> search bar](#javascript/searchbox)。

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control search-box has-icon-left has-icon-right" id="searchboxExample">
        <input id="inputSearchExample1" type="search" class="form-control search-input" placeholder="search for">
        <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-control search-box search-box-circle has-icon-left has-icon-right" id="searchboxExample">
        <input id="inputSearchExample2" type="search" class="form-control search-input" placeholder="search for">
        <label for="inputSearchExample2" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control search-box has-icon-left has-icon-right" id="searchboxExample">
  <input type="search" class="form-control search-input" placeholder="search for">
  <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
  <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
</div>
```


```html
<div class="input-control search-box search-box-circle has-icon-left has-icon-right" id="searchboxExample">
  <input id="inputSearchExample1" type="search" class="form-control search-input" placeholder="search for">
  <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
  <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
</div>
```

## Disable

for `.form-control` Add to `disabled` Attributes。

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control has-label-left">
        <input disabled="disabled" id="inputAccountExample6" type="text" class="form-control" placeholder="">
        <label for="inputAccountExample6" class="input-control-label-left">username:</label>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control has-label-left">
  <input disabled="disabled" id="inputAccountExample4" type="text" class="form-control" placeholder="">
  <label for="inputAccountExample4" class="input-control-label-left">username:</label>
</div>
```
