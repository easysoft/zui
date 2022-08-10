# 基础

## Tailwind CSS

Tailwind CSS is imported globally.

```CSS
@tailwind base;
@tailwind utilities;
@tailwind components;
```

## Global font and text setting

<p>root-font-size</p>

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
