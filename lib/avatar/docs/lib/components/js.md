# 头像生成器

 头像生成器允许通过 JS 动态创建一个[头像](/lib/components/avatar/index.html)。

## 示例

通过构造一个 `Avatar` 实例, 在一个空的  `<div>` 元素上创建一个头像。

### 文字头像
<Example>
  <div id="avatar1" data-text="User"></div>
</Example>

```html
<div id="avatar1" data-text="User"></div>

<script>
  new zui.Avatar('#avatar1', {});
</script>
```
### 图片头像

<Example>
  <div id="avatar2" data-src="/assets/avatar/avatar.png"></div>
</Example>

```html
<div id="avatar2" data-text="User"></div>

<script>
  new zui.Avatar('#avatar2', {});
</script>
```

<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.Avatar('#avatar1', {});
            new zui.Avatar('#avatar2', {});
            /*
            new zui.Avatar('#avatar3', {});
            new zui.Avatar('#avatar4', {});
            new zui.Avatar('#avatar5', {});
            new zui.Avatar('#avatar6', {});
            */
        })
    }
}
</script>

 ## 引入

 ### 通过 npm

 ```js
 import {Avatar} from 'zui/avatar';

 const avatar = new Avatar(element, options);
 ```

 ### 通过全局对象 `zui`

 ```js
 const avatar = new zui.Avatar(element, options);
 ```

 ### 使用 React 组件

 ```jsx
 import {render} from 'react';
 import {Avatar} from 'zui/avatar/react';

 render(element, <Avatar {...options} />);
 ```

 ### 使用 jQuery 扩展

 ```js
 $(element).avatar(options);

 const avatar = $(element).data('zui.avatar');
 ```

 ## 更新头像

 调用头像组件实例上的 `render` 方法来更新头像项，并重新进行渲染：

 ```js
 avatar.render({
     options: {
         // ... 新的头像参数
     },
 });
 ```

## 构造方法

**定义：**

```ts
constructor(element: HTMLElement | string, options: AvatarOptions);
```

**参数：**

* `element`：指定用于创建头像的容器元素，或者通过字符串指定用于查找容器元素的选择器
* `options`：指定选项

**示例：**

```ts
new zui.Avatar('#menu', options: AvatarOptions);
```

## 选项

### `className`

类名。

* 类型：`string | object | array`
* 必选：否

### `size`

大小。

* 类型：`'xs' | 'sm' | 'lg' | 'xl' | number`
* 必选：否

### `circle`

是否为圆形

* 类型：`boolean`
* 必选： 否

### `rounded`

头像圆角

* 类型：`boolean | 'sm' | 'md' | 'lg' | number`
* 必选：否

### `background`

背景颜色

* 类型：`string`
* 必选：否

### `foreColor`

* 类型：`string`
* 必选： 否

### `text`

字体头像内容

* 类型：`string`
* 必选：否

### `src`

* 类型：`string`
* 必选：否

### `code`

唯一标识, 通常传入头像的用户id等标识码,组件会计算生成一个与该code对应的唯一背景色以作区分。

* 类型：`string`
* 必选：否

## 方法

### `render`

重新渲染，可以指定新的选项。

**定义：**

```ts
render(options: Partial<AvatarOptions>): void;
```

**参数：**

* `options`：需要重新设置的选项

## API

### `AvatarOptions`

选项定义对象。

```ts
interface AvatarOptions {
    className?: string | object | array;
    size?: 'xs' | 'sm' | 'lg' | 'xl' | number;
    circle?: boolean;
    rounded?: boolean | 'sm' | 'md' | 'lg' | number;
    background?: string;
    foreColor?: string;
    text?: string;
    code?: string | number;
    src?: string;
    children?: ComponentChildren | (() => ComponentChildren);
}
```

### `Avatar`

菜单组件类。

**定义**

```ts

class Avatar {

    constructor(element: string | HTMLElement, options: Partial<AvatarOptions>);

    options: AvatarOptions;

    element: HTMLElement;

    render(options: Partial<AvatarOptions>): void;

    setOptions(options?: Partial<AvatarOptions>): AvatarOptions;

    destroy(): void;

}

```
