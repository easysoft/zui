# Switch

## Examples

<example>
  <div class="row">
    <div class="col-sm-4">
      <div style="border: 1px solid #ddd; padding: 10px">
        <div class="switch">
          <input type="checkbox">
          <label>Night Mode</label>
        </div>
      </div>
    </div>
  </div>
</example>

```html
<div class="switch">
  <input type="checkbox">
  <label>Night Mode</label>
</div>
```

## Align

`.text-left` and `.text-right` ar used to define the alignment of texts.

<example>
  <div class="row">
    <div class="col-sm-4">
      <div style="border: 1px solid #ddd; padding: 10px">
        <div class="switch text-left">
          <input type="checkbox">
          <label>Night Mode</label>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div style="border: 1px solid #ddd; padding: 10px">
        <div class="switch text-right">
          <input type="checkbox">
          <label>Night Mode</label>
        </div>
      </div>
    </div>
  </div>
</example>

```html
<div class="switch text-left">
  <input type="checkbox">
  <label>Night Mode</label>
</div>
```

```html
<div class="switch text-right">
  <input type="checkbox">
  <label>Night Mode</label>
</div>
```

## Inline

`.switch-inline` enables `.switch`to display as `inline-block`.

<example>
  <div class="switch switch-inline hl-warning">
    <input type="checkbox">
    <label>Night Mode</label>
  </div>
</example>

```html
<div class="switch switch-inline">
  <input type="checkbox">
  <label>Night Mode</label>
</div>
```

## Disabled

Add `.disabled` to `.switch`, or add `[disabled]` to `<input>`.

<example>
  <div class="row">
    <div class="col-sm-4">
      <div style="border: 1px solid #ddd; padding: 10px">
        <div class="switch disabled">
          <input type="checkbox" checked>
          <label>Night Mode</label>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div style="border: 1px solid #ddd; padding: 10px">
        <div class="switch">
          <input type="checkbox" disabled>
          <label>Night Mode</label>
        </div>
      </div>
    </div>
  </div>
</example>

```html
<div class="switch disabled">
  <input type="checkbox" checked>
  <label>Night Mode</label>
</div>
```

```html
<div class="switch">
  <input type="checkbox" disabled>
  <label>Night Mode</label>
</div>
```
