# 头像生成器

 头像生成器允许通过 JS 动态创建一个[头像](/lib/components/avatar/index.html)。

## 示例

通过构造一个 `Avatar` 实例, 在一个空的  `<div>` 元素上创建一个头像。

### 文字头像
<Example>
  <div id="avatar1"></div>
</Example>

```html
<div id="avatar1"></div>

<script>
    new zui.Avatar('#avatar1', {
        text:"user",
    });
</script>
```
### 图片头像

<Example>
  <div id="avatar2"></div>
</Example>

```html
<div id="avatar2"></div>

<script>
    new zui.Avatar('#avatar2', {
        src: "/assets/avatar/avatar.png",
    });
</script>
```

<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.Avatar('#avatar1', {
                text: "user",
            });
            new zui.Avatar('#avatar2', {
                src: "/assets/avatar/avatar.png",
            });
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

字体颜色

* 类型：`string`
* 必选： 否

### `text`

字体头像内容

* 类型：`string`
* 必选：否

### `src`

文件头像路径

* 类型：`string`
* 必选：否

### `code`

唯一标识，通常指定为用 ID 或 账号 组件会根据传入值生成唯一的颜色。

* 类型：`string`
* 必选：否

## 方法

### `render`

重新渲染，可以指定新的选项。

**定义：**

```ts
render(options: AvatarOptions): void;
```
