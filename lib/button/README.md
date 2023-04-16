# 按钮

## Button

使用组件类 `.btn` 来获得按钮外观，通常搭配 `<button>` 或 `<a>` 元素使用。

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="btn">Button</button>
<a class="btn">Button</a>
<a class="btn btn-default">Button</a>
<a class="btn btn-link">A Link</a>
<a class="btn primary">A Primary Link</a>
<button type="button" class="btn">中文按钮</button>
<button type="button" class="btn" disabled="disabled">禁用的按钮</button>
<button type="button" class="btn text-primary ghost">Link</button>
```

## Button Square

使用工具类 `.square` 获得方形按钮外观。

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="btn square">S</button>
<button type="button" class="btn square">中</button>
<button type="button" class="btn square" disabled="disabled">禁</button>
```

## Button Sizes

```html:example: -flex -gap-3 -items-end -flex-wrap
<button type="button" class="btn size-xl">Extra Large Button</button>
<button type="button" class="btn size-lg">Large Button</button>
<button type="button" class="btn">Normal Button</button>
<button type="button" class="btn size-sm">Small Button</button>
<button type="button" class="btn size-xs">Extra Small Button</button>
```

## Button Styles

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="btn primary">Primary</button>
<button type="button" class="btn secondary">secondary</button>
<button type="button" class="btn success">success</button>
<button type="button" class="btn warning">warning</button>
<button type="button" class="btn danger">danger</button>
<button type="button" class="btn important">important</button>
<button type="button" class="btn special">special</button>
<button type="button" class="btn white">white</button>
<button type="button" class="btn lighter">lighter</button>
<button type="button" class="btn light">light</button>
<button type="button" class="btn gray">gray</button>
<button type="button" class="btn dark">dark</button>
<button type="button" class="btn darker">darker</button>
<button type="button" class="btn black">black</button>
<button type="button" class="btn inverse">inverse</button>
<button type="button" class="btn surface">surface</button>
<button type="button" class="btn canvas">canvas</button>
<button type="button" class="btn ghost">ghost</button>
```

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="btn primary-outline">Primary</button>
<button type="button" class="btn secondary-outline">secondary</button>
<button type="button" class="btn success-outline">success</button>
<button type="button" class="btn warning-outline">warning</button>
<button type="button" class="btn danger-outline">danger</button>
<button type="button" class="btn important-outline">important</button>
<button type="button" class="btn special-outline">special</button>
<button type="button" class="btn white-outline">white</button>
<button type="button" class="btn lighter-outline">lighter</button>
<button type="button" class="btn light-outline">light</button>
<button type="button" class="btn gray-outline">gray</button>
<button type="button" class="btn dark-outline">dark</button>
<button type="button" class="btn darker-outline">darker</button>
<button type="button" class="btn black-outline">black</button>
<button type="button" class="btn inverse-outline">inverse</button>
<button type="button" class="btn surface-outline">surface</button>
<button type="button" class="btn canvas-outline">canvas</button>
<button type="button" class="btn ghost-outline">ghost</button>
```

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="btn primary-pale">Primary</button>
<button type="button" class="btn secondary-pale">secondary</button>
<button type="button" class="btn success-pale">success</button>
<button type="button" class="btn warning-pale">warning</button>
<button type="button" class="btn danger-pale">danger</button>
<button type="button" class="btn important-pale">important</button>
<button type="button" class="btn special-pale">special</button>
<button type="button" class="btn lighter-pale">lighter</button>
<button type="button" class="btn light-pale">light</button>
<button type="button" class="btn gray-pale">gray</button>
<button type="button" class="btn dark-pale">dark</button>
```

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="btn primary-pale bd-primary">Primary</button>
<button type="button" class="btn secondary-pale bd-secondary">secondary</button>
<button type="button" class="btn success-pale bd-success">success</button>
<button type="button" class="btn warning-pale bd-warning">warning</button>
<button type="button" class="btn danger-pale bd-danger">danger</button>
<button type="button" class="btn important-pale bd-important">important</button>
<button type="button" class="btn special-pale bd-special">special</button>
<button type="button" class="btn white-pale bd-gray">white</button>
<button type="button" class="btn lighter-pale bd-gray">lighter</button>
<button type="button" class="btn light-pale bd-gray">light</button>
<button type="button" class="btn gray-pale bd-gray">gray</button>
<button type="button" class="btn dark-pale bd-dark">dark</button>
<button type="button" class="btn darker-pale bd-darker">darker</button>
<button type="button" class="btn black-pale bd-black">black</button>
```

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="btn text-primary">Primary</button>
<button type="button" class="btn text-secondary">secondary</button>
<button type="button" class="btn text-success">success</button>
<button type="button" class="btn text-warning">warning</button>
<button type="button" class="btn text-danger">danger</button>
<button type="button" class="btn text-important">important</button>
<button type="button" class="btn text-special">special</button>
<button type="button" class="text-white btn">white</button>
<button type="button" class="btn text-lighter">lighter</button>
<button type="button" class="btn text-light">light</button>
<button type="button" class="btn text-gray">gray</button>
<button type="button" class="btn text-dark">dark</button>
<button type="button" class="btn text-darker">darker</button>
<button type="button" class="text-black btn">black</button>
```

## Radius

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="rounded-none btn primary">Button</button>
<button type="button" class="rounded-sm btn primary">Button</button>
<button type="button" class="rounded btn primary">Button</button>
<button type="button" class="rounded-md btn primary">Button</button>
<button type="button" class="rounded-lg btn primary">Button</button>
<button type="button" class="btn primary rounded-xl">Button</button>
<button type="button" class="btn primary circle">Button</button>
```

## Shadow

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="shadow-none btn">Button</button>
<button type="button" class="shadow-sm btn">Button</button>
<button type="button" class="shadow btn">Button</button>
<button type="button" class="shadow-md btn">Button</button>
<button type="button" class="shadow-lg btn">Button</button>
<button type="button" class="shadow-xl btn">Button</button>
```
