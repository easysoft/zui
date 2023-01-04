# 基础

## Tailwind CSS

Tailwind CSS is imported globally.

```CSS
@tailwind base;
@tailwind utilities;
@tailwind components;
```

## Global font style

<p style="font-size:var(--root-font-size)">root-font-size: 16px</p>
<p style="font-size:1em">base-text-size: 13px</p>

```css
html {
    font-size: var(--root-font-size);
}
body {
    @apply -text-base -text-fore;
}
```

## Link colors

```html:example
<a href="/base/">This is a link!</a>
```
