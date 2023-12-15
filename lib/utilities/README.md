# Utilities

## Interactivity

### State

```html:example: blocks
<div class="state"></div>
<button class="btn">State Button</button>
```

### Loading

```html:example: -flex -flex-row -gap-4
<div class="relative rounded-lg w-56 h-28 load-indicator loading surface"></div>
<div class="relative rounded-lg w-56 h-28 load-indicator loading gray"></div>
<div class="relative rounded-lg w-56 h-28 load-indicator loading primary" data-loading="正在加载…"></div>
```

### Disabled

```html:example: blocks
<div class="state disabled"></div>
<button class="btn" disabled>Disabled Button</button>
```

## Skin

### Surface

```html:example: blocks
<div class="canvas"></div>
<div class="surface-light"></div>
<div class="surface"></div>
<div class="surface-strong"></div>
<div class="inverse"></div>
<div class="white"></div>
<div class="black"></div>
```

### Solid

#### Accent

```html:example: blocks
<div class="secondary"></div>
<div class="success"></div>
<div class="warning"></div>
<div class="danger"></div>
<div class="important"></div>
<div class="special"></div>
<hr>
<div class="primary state"></div>
<div class="secondary state"></div>
<div class="success state"></div>
<div class="warning state"></div>
<div class="danger state"></div>
<div class="important state"></div>
<div class="special state"></div>
```

#### Grays

```html:example: blocks
<div class="bright"></div>
<div class="lightest"></div>
<div class="lighter"></div>
<div class="light-gray"></div>
<div class="gray"></div>
<div class="dark-gray"></div>
<div class="darker"></div>
<div class="darkest"></div>
<div class="inky"></div>
<hr>
<div class="bright state"></div>
<div class="lightest state"></div>
<div class="lighter state"></div>
<div class="light-gray state"></div>
<div class="gray state"></div>
<div class="dark-gray state"></div>
<div class="darker state"></div>
<div class="darkest state"></div>
<div class="inky state"></div>
```

### Ghost

```html:example: blocks
<div class="ghost"></div>
<div class="primary-ghost"></div>
<div class="secondary-ghost"></div>
<div class="success-ghost"></div>
<div class="warning-ghost"></div>
<div class="danger-ghost"></div>
<div class="important-ghost"></div>
<div class="special-ghost"></div>
<hr>
<div class="ghost state"></div>
<div class="primary-ghost state"></div>
<div class="secondary-ghost state"></div>
<div class="success-ghost state"></div>
<div class="warning-ghost state"></div>
<div class="danger-ghost state"></div>
<div class="important-ghost state"></div>
<div class="special-ghost state"></div>
```

### Outline

```html:example: blocks
<h4>Accent</h4>
<div class="outline"></div>
<div class="primary-outline"></div>
<div class="secondary-outline"></div>
<div class="success-outline"></div>
<div class="warning-outline"></div>
<div class="danger-outline"></div>
<div class="important-outline"></div>
<div class="special-outline"></div>
<h4>Grays</h4>
<div class="light-gray-outline"></div>
<div class="gray-outline"></div>
<div class="dark-gray-outline"></div>
<hr>
<h4>Accent State</h4>
<div class="outline state"></div>
<div class="primary-outline state"></div>
<div class="secondary-outline state"></div>
<div class="success-outline state"></div>
<div class="warning-outline state"></div>
<div class="danger-outline state"></div>
<div class="important-outline state"></div>
<div class="special-outline state"></div>
<h4>Grays State</h4>
<div class="light-gray-outline state"></div>
<div class="gray-outline state"></div>
<div class="dark-gray-outline state"></div>
```

### Pale

```html:example: blocks
<h4>Accent</h4>
<div class="primary-pale"></div>
<div class="secondary-pale"></div>
<div class="success-pale"></div>
<div class="warning-pale"></div>
<div class="danger-pale"></div>
<div class="important-pale"></div>
<div class="special-pale"></div>
<h4>Grays</h4>
<div class="bright-pale"></div>
<div class="lightest-pale"></div>
<div class="lighter-pale"></div>
<div class="light-gray-pale"></div>
<div class="gray-pale"></div>
<div class="dark-gray-pale"></div>
<div class="darker-pale"></div>
<div class="darkest-pale"></div>
<div class="inky-pale"></div>
<hr>
<h4>Accent State</h4>
<div class="primary-pale state"></div>
<div class="secondary-pale state"></div>
<div class="success-pale state"></div>
<div class="warning-pale state"></div>
<div class="danger-pale state"></div>
<div class="important-pale state"></div>
<div class="special-pale state"></div>
<h4>Grays State</h4>
<div class="bright-pale state"></div>
<div class="lightest-pale state"></div>
<div class="lighter-pale state"></div>
<div class="light-gray-pale state"></div>
<div class="gray-pale state"></div>
<div class="dark-gray-pale state"></div>
<div class="darker-pale state"></div>
<div class="darkest-pale state"></div>
<div class="inky-pale state"></div>
```

## Text Colors

```html:example: blocks
<div class="text-primary"></div>
<div class="text-secondary"></div>
<div class="text-success"></div>
<div class="text-warning"></div>
<div class="text-danger"></div>
<div class="text-important"></div>
<div class="text-special"></div>

<div class="text-white"></div>
<div class="text-lighter"></div>
<div class="text-light"></div>
<div class="text-gray"></div>
<div class="text-dark"></div>
<div class="text-darker"></div>
<div class="text-black"></div>

<div class="text-canvas"></div>
<div class="text-surface"></div>
<div class="text-inverse"><span class="text-white"></span></div>
<div class="text-current"><span class="text-white"></span></div>
<div class="text-inherit"></div>
<div class="text-transparent"></div>
```

## Background

```html:example: blocks
<div class="bg-primary">bg-primary</div>
<div class="bg-secondary">bg-secondary</div>
<div class="bg-success">bg-success</div>
<div class="bg-warning">bg-warning</div>
<div class="bg-danger">bg-danger</div>
<div class="bg-important">bg-important</div>
<div class="bg-special">bg-special</div>

<div class="bg-white">bg-white</div>
<div class="bg-lighter">bg-lighter</div>
<div class="bg-light">bg-light</div>
<div class="bg-gray">bg-gray</div>
<div class="bg-dark">bg-dark</div>
<div class="bg-darker">bg-darker</div>
<div class="bg-black">bg-black</div>

<div class="bg-canvas">bg-canvas</div>
<div class="bg-surface">bg-surface</div>
<div class="bg-inverse"><span class="text-white">bg-inverse</span></div>
<div class="bg-current"><span class="text-white">bg-current</span></div>
<div class="bg-inherit">bg-inherit</div>
<div class="bg-transparent">bg-transparent</div>
```

## Background opacity

```html:example: blocks
<div class="bg-opacity-0 black">bg-opacity-0</div>
<div class="black bg-opacity-10">bg-opacity-10</div>
<div class="black bg-opacity-20">bg-opacity-20</div>
<div class="black bg-opacity-30">bg-opacity-30</div>
<div class="black bg-opacity-40">bg-opacity-40</div>
<div class="bg-opacity-50 black">bg-opacity-50</div>
<div class="black bg-opacity-60">bg-opacity-60</div>
<div class="black bg-opacity-70">bg-opacity-70</div>
<div class="black bg-opacity-80">bg-opacity-80</div>
<div class="black bg-opacity-90">bg-opacity-90</div>
<div class="black bg-opacity-95">bg-opacity-95</div>
<div class="bg-opacity-100 black">bg-opacity-100</div>
```

## Ring

### Ring color

```html:example: blocks
<div class="ring ring-light">ring-light</div>
<div class="ring">ring</div>
<div class="ring ring-dark">ring-dark</div>
<div class="ring ring-darker">ring-darker</div>
<div class="ring ring-darkest">ring-darkest</div>
<div class="ring ring-primary">ring-primary</div>
<div class="ring ring-secondary">ring-secondary</div>
<div class="ring ring-success">ring-success</div>
<div class="ring ring-warning">ring-warning</div>
<div class="ring ring-danger">ring-danger</div>
<div class="ring ring-important">ring-important</div>
<div class="ring ring-special">ring-special</div>
<div class="ring ring-canvas">ring-canvas</div>
<div class="ring ring-inverse">ring-inverse</div>
<div class="ring ring-inherit">ring-inherit</div>
<div class="ring ring-current">ring-current</div>
<div class="ring ring-black">ring-black</div>
<div class="ring ring-white">ring-white</div>
```

### Ring width

```html:example: blocks
<div class="ring ring-0">ring-0</div>
<div class="ring">ring</div>
<div class="ring ring-2">ring-2</div>
<div class="ring ring-3">ring-3</div>
<div class="ring ring-4">ring-4</div>
<div class="ring ring-8">ring-8</div>
```

### Ring inset

```html:example: blocks
<div class="ring ring-inset ring-0">ring-0</div>
<div class="ring ring-inset">ring</div>
<div class="ring ring-inset ring-2">ring-2</div>
<div class="ring ring-inset ring-3">ring-3</div>
<div class="ring ring-inset ring-4">ring-4</div>
<div class="ring ring-inset ring-8">ring-8</div>
```

### Ring opacity

```html:example: blocks
<div class="opacity-0 ring ring-black">ring-opacity-0</div>
<div class="ring ring-black opacity-5">ring-opacity-5</div>
<div class="ring ring-black opacity-10">ring-opacity-10</div>
<div class="ring ring-black opacity-20">ring-opacity-20</div>
<div class="ring ring-black opacity-30">ring-opacity-30</div>
<div class="ring ring-black opacity-40">ring-opacity-40</div>
<div class="opacity-50 ring ring-black">ring-opacity-50</div>
<div class="ring ring-black opacity-60">ring-opacity-60</div>
<div class="ring ring-black opacity-70">ring-opacity-70</div>
<div class="ring ring-black opacity-80">ring-opacity-80</div>
<div class="ring ring-black opacity-90">ring-opacity-90</div>
<div class="ring ring-black opacity-95">ring-opacity-95</div>
<div class="opacity-100 ring ring-black">ring-opacity-100</div>
```

## Border

### Border Color

```html:example: blocks
<div class="border border-primary">border-primary</div>
<div class="border border-secondary">border-secondary</div>
<div class="border border-success">border-success</div>
<div class="border border-warning">border-warning</div>
<div class="border border-danger">border-danger</div>
<div class="border border-important">border-important</div>
<div class="border border-special">border-special</div>

<div class="border border-white">border-white</div>
<div class="border border-lighter">border-lighter</div>
<div class="border border-light">border-light</div>
<div class="border border-gray">border-gray</div>
<div class="border border-dark">border-dark</div>
<div class="border border-darker">border-darker</div>
<div class="border border-black">border-black</div>

<div class="border border-canvas">border-canvas</div>
<div class="border border-surface">border-surface</div>
<div class="border border-inverse">border-inverse</div>

<div class="border border-current">border-current</div>
<div class="border border-inherit">border-inherit</div>
<div class="border border-transparent">border-transparent</div>
```

### Border Size

```html:example: blocks
<div class="border-0 border-current">border-0</div>
<div class="border border-current">border</div>
<div class="border-2 border-current">border-2</div>
<div class="border-4 border-current">border-4</div>
```

### Border Radius

```html:example: blocks
<div class="border border-current rounded-none">rounded-none</div>
<div class="border border-current rounded-sm">rounded-sm</div>
<div class="border border-current rounded">rounded</div>
<div class="border border-current rounded-md">rounded-md</div>
<div class="border border-current rounded-lg">rounded-lg</div>
<div class="border border-current rounded-xl">rounded-xl</div>
<div class="border border-current circle">rounded-full</div>
```

### Border opacity

```html:example: blocks
<div class="border opacity-0 border-inverse">border-opacity-0</div>
<div class="border border-inverse opacity-5">border-opacity-5</div>
<div class="border border-inverse opacity-10">border-opacity-10</div>
<div class="border border-inverse opacity-20">border-opacity-20</div>
<div class="border border-inverse opacity-30">border-opacity-30</div>
<div class="border border-inverse opacity-40">border-opacity-40</div>
<div class="border opacity-50 border-inverse">border-opacity-50</div>
<div class="border border-inverse opacity-60">border-opacity-60</div>
<div class="border border-inverse opacity-70">border-opacity-70</div>
<div class="border border-inverse opacity-80">border-opacity-80</div>
<div class="border border-inverse opacity-90">border-opacity-90</div>
<div class="border border-inverse opacity-95">border-opacity-95</div>
<div class="border opacity-100 border-inverse">border-opacity-100</div>
```

## Box shadow

### Box Shadow Size

```html:example: blocks
<div class="shadow-inner canvas">shadow-inner</div>
<div class="shadow-none canvas">shadow-none</div>
<div class="shadow-sm canvas">shadow-sm</div>
<div class="shadow canvas">shadow</div>
<div class="shadow-md canvas">shadow-md</div>
<div class="shadow-lg canvas">shadow-lg</div>
<div class="shadow-xl canvas">shadow-xl</div>
<div class="shadow-2xl canvas">shadow-2xl</div>
```

### Box Shadow Color

```html:example: blocks
<div class="shadow-md bg-surface shadow-primary">shadow-primary</div>
<div class="shadow-md bg-surface shadow-secondary">shadow-secondary</div>
<div class="shadow-md bg-surface shadow-success">shadow-success</div>
<div class="shadow-md bg-surface shadow-warning">shadow-warning</div>
<div class="shadow-md bg-surface shadow-danger">shadow-danger</div>
<div class="shadow-md bg-surface shadow-important">shadow-important</div>
<div class="shadow-md bg-surface shadow-special">shadow-special</div>

<div class="shadow-md bg-surface shadow-white">shadow-white</div>
<div class="shadow-md bg-surface shadow-lighter">shadow-lighter</div>
<div class="shadow-md bg-surface shadow-light">shadow-light</div>
<div class="shadow-md bg-surface shadow-gray">shadow-gray</div>
<div class="shadow-md bg-surface shadow-dark">shadow-dark</div>
<div class="shadow-md bg-surface shadow-darker">shadow-darker</div>
<div class="shadow-md bg-surface shadow-black">shadow-black</div>

<div class="shadow-md bg-surface shadow-transparent">shadow-transparent</div>
<div class="shadow-md bg-surface shadow-inherit">shadow-inherit</div>
<div class="shadow-md bg-surface shadow-current">shadow-current</div>
```

## Opacity

```html:example: blocks
<div class="opacity-0 black">opacity-0</div>
<div class="black opacity-5">opacity-5</div>
<div class="black opacity-10">opacity-10</div>
<div class="black opacity-20">opacity-20</div>
<div class="black opacity-30">opacity-30</div>
<div class="black opacity-40">opacity-40</div>
<div class="opacity-50 black">opacity-50</div>
<div class="black opacity-60">opacity-60</div>
<div class="black opacity-70">opacity-70</div>
<div class="black opacity-80">opacity-80</div>
<div class="black opacity-90">opacity-90</div>
<div class="black opacity-95">opacity-95</div>
<div class="opacity-100 black">opacity-100</div>
```

## Text opacity

```html:example: blocks
<div class="text-opacity-0 text-primary">text-opacity-0</div>
<div class="text-primary text-opacity-10">text-opacity-10</div>
<div class="text-primary text-opacity-20">text-opacity-20</div>
<div class="text-primary text-opacity-30">text-opacity-30</div>
<div class="text-primary text-opacity-40">text-opacity-40</div>
<div class="text-opacity-50 text-primary">text-opacity-50</div>
<div class="text-primary text-opacity-60">text-opacity-60</div>
<div class="text-primary text-opacity-70">text-opacity-70</div>
<div class="text-primary text-opacity-80">text-opacity-80</div>
<div class="text-primary text-opacity-90">text-opacity-90</div>
<div class="text-primary text-opacity-95">text-opacity-95</div>
<div class="text-opacity-100 text-primary">text-opacity-100</div>
```

<style>
.blocks {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.blocks > div {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
}
.blocks > div::after {
  content: attr(class);
}
.blocks > hr,
.blocks > h4,
.blocks > h3 {
  width: 100%;
}
.blocks > .btn {
  padding: 0 0.75rem;
  height: 2rem;
  background-color: var(--color-surface);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--radius);
}
</style>
