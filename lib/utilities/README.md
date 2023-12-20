# Utilities

## Interactivity

### State

```html:example: blocks
<div class="state"></div>
<div class="state active"></div>
<div class="state selected"></div>
<button class="btn">State Button</button>
<button class="btn active">Active Button</button>
<button class="btn selected">Selected Button</button>
<button class="btn primary">State Button</button>
<button class="btn primary active">Active Button</button>
<button class="btn primary selected">Selected Button</button>
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
<div class="transparent"></div>
```

### Solid

#### Accent

```html:example: blocks
<div class="primary"></div>
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
<div class="gray-50"></div>
<div class="gray-100"></div>
<div class="gray-200"></div>
<div class="gray-300"></div>
<div class="gray-400"></div>
<div class="gray"></div>
<div class="gray-500"></div>
<div class="gray-600"></div>
<div class="gray-700"></div>
<div class="gray-800"></div>
<div class="gray-900"></div>
<div class="gray-950"></div>
<hr>
<div class="gray-50 state"></div>
<div class="gray-100 state"></div>
<div class="gray-200 state"></div>
<div class="gray-300 state"></div>
<div class="gray-400 state"></div>
<div class="gray state"></div>
<div class="gray-500 state"></div>
<div class="gray-600 state"></div>
<div class="gray-700 state"></div>
<div class="gray-800 state"></div>
<div class="gray-900 state"></div>
<div class="gray-950 state"></div>
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
<div class="gray-outline"></div>
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
<div class="gray-outline state"></div>
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
<div class="gray-50-pale"></div>
<div class="gray-100-pale"></div>
<div class="gray-200-pale"></div>
<div class="gray-300-pale"></div>
<div class="gray-400-pale"></div>
<div class="gray-pale"></div>
<div class="gray-500-pale"></div>
<div class="gray-600-pale"></div>
<div class="gray-700-pale"></div>
<div class="gray-800-pale"></div>
<div class="gray-900-pale"></div>
<div class="gray-950-pale"></div>
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
<div class="gray-50-pale state"></div>
<div class="gray-100-pale state"></div>
<div class="gray-200-pale state"></div>
<div class="gray-300-pale state"></div>
<div class="gray-400-pale state"></div>
<div class="gray-pale state"></div>
<div class="gray-500-pale state"></div>
<div class="gray-600-pale state"></div>
<div class="gray-700-pale state"></div>
<div class="gray-800-pale state"></div>
<div class="gray-900-pale state"></div>
<div class="gray-950-pale state"></div>
```

## Typography

### Text Colors

```html:example: blocks
<h4>Accent</h4>
<div class="text-primary"></div>
<div class="text-secondary"></div>
<div class="text-success"></div>
<div class="text-warning"></div>
<div class="text-danger"></div>
<div class="text-important"></div>
<div class="text-special"></div>
<hr>
<div class="text-primary-50"></div>
<div class="text-primary-100"></div>
<div class="text-primary-200"></div>
<div class="text-primary-300"></div>
<div class="text-primary-400"></div>
<div class="text-primary-500"></div>
<div class="text-primary-600"></div>
<div class="text-primary-700"></div>
<div class="text-primary-800"></div>
<div class="text-primary-900"></div>
<div class="text-primary-950"></div>
<hr>
<div class="text-secondary-50"></div>
<div class="text-secondary-100"></div>
<div class="text-secondary-200"></div>
<div class="text-secondary-300"></div>
<div class="text-secondary-400"></div>
<div class="text-secondary-500"></div>
<div class="text-secondary-600"></div>
<div class="text-secondary-700"></div>
<div class="text-secondary-800"></div>
<div class="text-secondary-900"></div>
<div class="text-secondary-950"></div>
<h4>Grays</h4>
<div class="text-gray-50"></div>
<div class="text-gray-100"></div>
<div class="text-gray-200"></div>
<div class="text-gray-300"></div>
<div class="text-gray-400"></div>
<div class="text-gray"></div>
<div class="text-gray-500"></div>
<div class="text-gray-600"></div>
<div class="text-gray-700"></div>
<div class="text-gray-800"></div>
<div class="text-gray-900"></div>
<div class="text-gray-950"></div>
<h4>Surface</h4>
<div class="text-white black"></div>
<div class="text-black"></div>
<div class="text-canvas inverse"></div>
<div class="text-surface-light inverse"></div>
<div class="text-surface inverse"></div>
<div class="text-surface-strong"></div>
<div class="text-inverse"></div>
<div class="text-fore-in-light"></div>
<div class="text-fore-in-dark"></div>
<div class="text-fore"></div>
<div class="text-focus"></div>
<div class="text-link"></div>
<div class="text-link-hover"></div>
<h4>Special</h4>
<div class="text-transparent"></div>
<div class="text-inherit"></div>
<div class="text-current"></div>
```

### Text opacity

```html:example: blocks
<div class="text-fore text-opacity-0"></div>
<div class="text-fore text-opacity-10"></div>
<div class="text-fore text-opacity-20"></div>
<div class="text-fore text-opacity-30"></div>
<div class="text-fore text-opacity-40"></div>
<div class="text-fore text-opacity-50"></div>
<div class="text-fore text-opacity-60"></div>
<div class="text-fore text-opacity-70"></div>
<div class="text-fore text-opacity-80"></div>
<div class="text-fore text-opacity-90"></div>
<div class="text-fore text-opacity-95"></div>
<div class="text-fore text-opacity-100"></div>
```

## Backgrounds

### Background Colors

```html:example: blocks with-inverse-text
<h4>Accent</h4>
<div class="bg-primary"></div>
<div class="bg-secondary"></div>
<div class="bg-success"></div>
<div class="bg-warning"></div>
<div class="bg-danger"></div>
<div class="bg-important"></div>
<div class="bg-special"></div>
<hr>
<div class="bg-primary-50"></div>
<div class="bg-primary-100"></div>
<div class="bg-primary-200"></div>
<div class="bg-primary-300"></div>
<div class="bg-primary-400"></div>
<div class="bg-primary-500"></div>
<div class="bg-primary-600"></div>
<div class="bg-primary-700"></div>
<div class="bg-primary-800"></div>
<div class="bg-primary-900"></div>
<div class="bg-primary-950"></div>
<hr>
<div class="bg-secondary-50"></div>
<div class="bg-secondary-100"></div>
<div class="bg-secondary-200"></div>
<div class="bg-secondary-300"></div>
<div class="bg-secondary-400"></div>
<div class="bg-secondary-500"></div>
<div class="bg-secondary-600"></div>
<div class="bg-secondary-700"></div>
<div class="bg-secondary-800"></div>
<div class="bg-secondary-900"></div>
<div class="bg-secondary-950"></div>
<h4>Grays</h4>
<div class="bg-gray-50"></div>
<div class="bg-gray-100"></div>
<div class="bg-gray-200"></div>
<div class="bg-gray-300"></div>
<div class="bg-gray-400"></div>
<div class="bg-gray"></div>
<div class="bg-gray-500"></div>
<div class="bg-gray-600"></div>
<div class="bg-gray-700"></div>
<div class="bg-gray-800"></div>
<div class="bg-gray-900"></div>
<div class="bg-gray-950"></div>
<h4>Surface</h4>
<div class="bg-white"></div>
<div class="bg-black"></div>
<div class="bg-canvas"></div>
<div class="bg-surface-light"></div>
<div class="bg-surface"></div>
<div class="bg-surface-strong"></div>
<div class="bg-inverse"></div>
<div class="bg-fore-in-light"></div>
<div class="bg-fore-in-dark"></div>
<div class="bg-fore"></div>
<div class="bg-focus"></div>
<div class="bg-transparent"></div>
<h4>Special</h4>
<div class="bg-inherit"></div>
<div class="bg-current"></div>
<div class="bg-none"></div>
```

### Background opacity

```html:example: blocks
<div class="bg-opacity-0 inverse"></div>
<div class="bg-opacity-5 inverse"></div>
<div class="bg-opacity-10 inverse"></div>
<div class="bg-opacity-20 inverse"></div>
<div class="bg-opacity-30 inverse"></div>
<div class="bg-opacity-40 inverse"></div>
<div class="bg-opacity-50 inverse"></div>
<div class="bg-opacity-60 inverse"></div>
<div class="bg-opacity-70 inverse"></div>
<div class="bg-opacity-80 inverse"></div>
<div class="bg-opacity-90 inverse"></div>
<div class="bg-opacity-95 inverse"></div>
<div class="bg-opacity-100 inverse"></div>
```

## Borders

### Ring

#### Default Ring

```html:example: blocks
<div class="ring"></div>
```

#### Ring color

```html:example: blocks
<h4>Ring as Border</h4>
<div class="ring ring-border-light"></div>
<div class="ring ring-border"></div>
<div class="ring ring-border-strong"></div>
<h4>Ring with alpha</h4>
<div class="ring ring-light"></div>
<div class="ring ring-gray"></div>
<div class="ring ring-dark"></div>
<div class="ring ring-darker"></div>
<div class="ring ring-darkest"></div>
<h4>Ring with Accent color</h4>
<div class="ring ring-primary"></div>
<div class="ring ring-secondary"></div>
<div class="ring ring-warning"></div>
<div class="ring ring-success"></div>
<div class="ring ring-danger"></div>
<div class="ring ring-important"></div>
<div class="ring ring-special"></div>
<h4>Grays</h4>
<div class="ring ring-gray-50"></div>
<div class="ring ring-gray-100"></div>
<div class="ring ring-gray-200"></div>
<div class="ring ring-gray-300"></div>
<div class="ring ring-gray-400"></div>
<div class="ring ring-gray-500"></div>
<div class="ring ring-gray"></div>
<div class="ring ring-gray-600"></div>
<div class="ring ring-gray-700"></div>
<div class="ring ring-gray-800"></div>
<div class="ring ring-gray-900"></div>
<div class="ring ring-gray-950"></div>
<h4>Ring with Surface color</h4>
<div class="ring ring-inverse"></div>
<div class="ring ring-canvas"></div>
<div class="ring ring-fore"></div>
<div class="ring ring-black"></div>
<div class="ring ring-white"></div>
<h4>Ring with Special color</h4>
<div class="ring ring-current"></div>
<div class="ring ring-transparent"></div>
<div class="ring ring-inherit"></div>
```

#### Ring width

```html:example: blocks
<div class="ring ring-0"></div>
<div class="ring"></div>
<div class="ring ring-2"></div>
<div class="ring ring-3"></div>
<div class="ring ring-4"></div>
<div class="ring ring-8"></div>
```

#### Ring inset

```html:example: blocks
<div class="ring ring-inset"></div>
<div class="ring ring-inset ring-2"></div>
<div class="ring ring-inset ring-3"></div>
<div class="ring ring-inset ring-4"></div>
<div class="ring ring-inset ring-8"></div>
```

#### Ring opacity

```html:example: blocks
<div class="ring ring-opacity-0"></div>
<div class="ring ring-opacity-5"></div>
<div class="ring ring-opacity-10"></div>
<div class="ring ring-opacity-20"></div>
<div class="ring ring-opacity-30"></div>
<div class="ring ring-opacity-40"></div>
<div class="ring ring-opacity-50"></div>
<div class="ring ring-opacity-60"></div>
<div class="ring ring-opacity-70"></div>
<div class="ring ring-opacity-80"></div>
<div class="ring ring-opacity-90"></div>
<div class="ring ring-opacity-95"></div>
<div class="ring ring-opacity-100"></div>
```

#### Ring Offset

```html:example: blocks
<div class="ring ring-offset-0"></div>
<div class="ring ring-offset-1"></div>
<div class="ring ring-offset-2"></div>
<div class="ring ring-offset-4"></div>
<div class="ring ring-offset-8"></div>
```

### Border

#### Border Width

```html:example: blocks
<h4>All sides</h4>
<div class="border-0"></div>
<div class="border"></div>
<div class="border-2"></div>
<div class="border-4"></div>
<h4>Single side</h4>
<div class="border-t-0"></div>
<div class="border-r-0"></div>
<div class="border-b-0"></div>
<div class="border-l-0"></div>
<div class="border-t"></div>
<div class="border-r"></div>
<div class="border-b"></div>
<div class="border-l"></div>
<div class="border-t-2"></div>
<div class="border-r-2"></div>
<div class="border-b-2"></div>
<div class="border-l-2"></div>
<div class="border-t-4"></div>
<div class="border-r-4"></div>
<div class="border-b-4"></div>
<div class="border-l-4"></div>
```

#### Border Color

```html:example: blocks
<h4>Border defaults</h4>
<div class="border border-light"></div>
<div class="border"></div>
<div class="border border-strong"></div>
<h4>Accent</h4>
<div class="border border-primary"></div>
<div class="border border-secondary"></div>
<div class="border border-warning"></div>
<div class="border border-success"></div>
<div class="border border-danger"></div>
<div class="border border-important"></div>
<div class="border border-special"></div>
<h4>Grays</h4>
<div class="border border-gray-50"></div>
<div class="border border-gray-100"></div>
<div class="border border-gray-200"></div>
<div class="border border-gray-300"></div>
<div class="border border-gray-400"></div>
<div class="border border-gray-500"></div>
<div class="border border-gray"></div>
<div class="border border-gray-600"></div>
<div class="border border-gray-700"></div>
<div class="border border-gray-800"></div>
<div class="border border-gray-900"></div>
<div class="border border-gray-950"></div>
<h4>Surface</h4>
<div class="border border-white"></div>
<div class="border border-black"></div>
<div class="border border-transparent"></div>
<div class="border border-canvas"></div>
<div class="border border-surface-light"></div>
<div class="border border-surface"></div>
<div class="border border-surface-strong"></div>
<div class="border border-inverse"></div>
<div class="border border-fore-in-light"></div>
<div class="border border-fore-in-dark"></div>
<div class="border border-fore"></div>
<div class="border border-focus"></div>
<div class="border border-link"></div>
<div class="border border-link-hover"></div>
<h4>Special</h4>
<div class="border border-current"></div>
<div class="border border-inherit"></div>
```

### Border opacity

```html:example: blocks
<div class="border opacity-0"></div>
<div class="border opacity-5"></div>
<div class="border opacity-10"></div>
<div class="border opacity-20"></div>
<div class="border opacity-30"></div>
<div class="border opacity-40"></div>
<div class="border opacity-50"></div>
<div class="border opacity-60"></div>
<div class="border opacity-70"></div>
<div class="border opacity-80"></div>
<div class="border opacity-90"></div>
<div class="border opacity-95"></div>
<div class="border opacity-100"></div>
```

### Radius

```html:example: blocks
<h4>All Sides</h4>
<div class="border rounded-none"></div>
<div class="border rounded-sm"></div>
<div class="border rounded"></div>
<div class="border rounded-md"></div>
<div class="border rounded-lg"></div>
<div class="border rounded-xl"></div>
<div class="border rounded-2xl"></div>
<div class="border rounded-3xl"></div>
<div class="border rounded-full"></div>
<h4>Remove from specific sides</h4>
<div class="border rounded-lg rounded-t-none"></div>
<div class="border rounded-lg rounded-r-none"></div>
<div class="border rounded-lg rounded-b-none"></div>
<div class="border rounded-lg rounded-l-none"></div>
<div class="border rounded-lg rounded-br-none"></div>
<div class="border rounded-lg rounded-bl-none"></div>
<div class="border rounded-lg rounded-tr-none"></div>
<div class="border rounded-lg rounded-tl-none"></div>
```

## Effects

### Box shadow

#### Box Shadow Size

```html:example: blocks
<div class="shadow-inner canvas"></div>
<div class="shadow-none canvas"></div>
<div class="shadow-sm canvas"></div>
<div class="shadow canvas"></div>
<div class="shadow-md canvas"></div>
<div class="shadow-lg canvas"></div>
<div class="shadow-xl canvas"></div>
<div class="shadow-2xl canvas"></div>
```

#### Box Shadow Colors

```html:example: blocks
<h4>Accent</h4>
<div class="shadow shadow-primary"></div>
<div class="shadow shadow-secondary"></div>
<div class="shadow shadow-success"></div>
<div class="shadow shadow-warning"></div>
<div class="shadow shadow-danger"></div>
<div class="shadow shadow-important"></div>
<div class="shadow shadow-special"></div>
<h4>Grays</h4>
<div class="shadow shadow-gray-50"></div>
<div class="shadow shadow-gray-100"></div>
<div class="shadow shadow-gray-200"></div>
<div class="shadow shadow-gray-300"></div>
<div class="shadow shadow-gray-400"></div>
<div class="shadow shadow-gray-500"></div>
<div class="shadow shadow-gray"></div>
<div class="shadow shadow-gray-600"></div>
<div class="shadow shadow-gray-700"></div>
<div class="shadow shadow-gray-800"></div>
<div class="shadow shadow-gray-900"></div>
<div class="shadow shadow-gray-950"></div>
<h4>Grays</h4>
<div class="shadow shadow-canvas"></div>
<div class="shadow shadow-surface"></div>
<div class="shadow shadow-inverse"></div>
<div class="shadow shadow-fore"></div>
<div class="shadow shadow-focus"></div>
<h4>Special</h4>
<div class="shadow shadow-transparent"></div>
<div class="shadow shadow-inherit"></div>
<div class="shadow shadow-current"></div>
```

### Opacity

```html:example: blocks
<div class="black muted"></div>
<div class="black opacity-0"></div>
<div class="black opacity-5"></div>
<div class="black opacity-10"></div>
<div class="black opacity-20"></div>
<div class="black opacity-30"></div>
<div class="black opacity-40"></div>
<div class="black opacity-50"></div>
<div class="black opacity-60"></div>
<div class="black opacity-70"></div>
<div class="black opacity-80"></div>
<div class="black opacity-90"></div>
<div class="black opacity-95"></div>
<div class="black opacity-100"></div>
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
  white-space: nowrap;
  overflow: hidden;
}
.blocks.with-inverse-text > div::after {
  mix-blend-mode: difference;
  color: white;
}
.blocks > hr,
.blocks > h4,
.blocks > h3 {
  width: 100%;
}
.blocks > .btn {
  padding: 0 0.75rem;
  height: 2rem;
}
</style>
