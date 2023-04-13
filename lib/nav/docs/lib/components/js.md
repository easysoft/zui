# 导航生成器

## 使用方法

<Example>
  <div id="nav1" class="w-full"></div>
</Example>

<script>
export default {
    mounted() {
        onZUIReady(() => {
            const nav = new zui.Nav('#nav1', {
                items: [
                    {text: '首页', icon: 'icon-home', active: true},
                    {text: '动态'},
                    {text: '论坛'},
                    {type: 'divider'},
                    {text: '博客', icon: 'icon-rss'},
                    {text: '关注我们', icon: 'icon-group'},
                    {text: '更多', items: [
                        {text: '设计'},
                        {text: '开发'},
                        {text: '测试'},
                        {text: '发布'},
                        {text: '总结'},
                        {text: '评审'}
                    ]},
                ],
                onClickItem: (info) => {
                    console.log('> nav.onClickItem', info);
                },
            });
        })
    }
}
</script>

## 引入

### 通过 npm

```js
import {Nav} from 'zui/nav';

const nav = new Nav(element, options);
```

### 通过全局对象 `zui`

```js
const nav = new zui.Nav(element, options);
```

### 使用 React 组件

```jsx
import {render} from 'react';
import {Nav} from 'zui/nav/react';

render(element, <Nav {...options} />);
```

### 使用 jQuery 扩展

```js
$(element).nav(options);

const nav = $(element).data('zui.nav');
```

## 更新导航项

调用导航组件实例上的 `render` 方法来更新导航项，并重新进行渲染：

```js
nav.render({
    items: [
     // ... 新的导航项
    ],
    // ... 可以传入其他新的选项
});
```

## 动态导航项

将选项 `items` 设置为一个函数，当需要显示导航时会调用此函数来创建新的导航项列表。

```js
new Nav('#nav', {
    items: () => {
        const itemList = [
            {text: '剪切'},
            {text: '复制', icon: 'icon-copy'},
        ];

        if (clipboardHasContent) {
            itemList.push({text: '粘贴', icon: 'icon-paste'});
        }

        return itemList;
    }
})
```

 ## 构造方法

 **定义：**

 ```ts
 constructor(element: HTMLElement | string, options: NavOptions);
 ```

 **参数：**

 * `element`：指定用于创建导航的容器元素，或者通过字符串指定用于查找容器元素的选择器
 * `options`：指定选项

 **示例：**

 ```ts
 new zui.Nav('#nav', {
     items: [
         {text: '复制', icon: 'icon-copy'},
         {text: '粘贴', icon: 'icon-paste'},
     ]
 });
 ```

 ## 选项

 ### `className`

 类名。

 * 类型：`string | object | array`
 * 必选：否

 ### `items`

 定义导航项列表，可以通过一个函数动态返回导航项列表。

 * 类型：<code>[NavListItem](#navlistitem)[] | () => [NavListItem](#navlistitem)[] | () =>                            Promise<[NavListItem](#navlistitem)[]></code>
 * 必选：是

 ### `hasIcons`

 指定导航项中是否包含左侧图标（方便对图标和文本进行对齐），当此选项为空时会自动根据实际导航项进行判断。

 * 类型：`boolean`
 * 必选：否

 ### `onRenderItem`

 指定一个回调函数用于对组件渲染进行自定义。

 * 类型：<code>(item: [NavListItem](#Navlistitem)) => Partial<[NavListItem](#Navlistitem)> | react.ComponentChildren  | undefined</code>
 * 必选：否

  该回调函数不同内容拥有不同的行为：

 * <code>Partial<[NavListItem]></code>：对原列表项定义对象进行修改；
 * `react.ComponentChildren`：返回自定义渲染内容；
 * `undefined`：不对默认渲染行为进行干预。

 ### `afterRender`

 指定一个回调函数在渲染之后调用。

 ### `afterRender`

 指定一个回调函数在渲染之后调用。

 ## 方法

 ### `render`

 重新渲染，可以指定新的选项。

 **定义：**

 ```ts
 render(options: Partial<NavOptions>): void;
 ```

 **参数：**

 * `options`：需要重新设置的选项


 ## API

 ### `NavOptions`

 选项定义对象。

 ```ts
 interface NavOptions {
     items: NavListItem[] | (() => NavListItem[]);
     className?: string | object | array;
     hasIcons?: boolean;
     children?: ComponentChildren;
     subnavTrigger?: 'click' | 'hover' | 'always';
     onClickItem?: (info: {nav: nav, item: NavItemOptions, index: number, event: MouseEvent}) => void;
     onRenderSubnav?: (info: {nav: nav, item: navItemOptions, h: typeof _h}) => ComponentChildren;
     onRenderItem?: (info: {nav: nav, item: navListItem, index: number, h: typeof _h}) =>                       Partial<navListItem> | ComponentChildren | undefined;
     afterRender?: (info: {nav: nav, firstRender: boolean}) => void;
     beforeDestroy?: (info: {nav: nav}) => void;
 }
 ```

