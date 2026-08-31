# 滚动条

## 滚动条样式

::: tabs

== 示例

<Example>
  <div class="h-32 overflow-scroll whitespace-nowrap">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus.Molestiae saepe deleniti voluptas excepturi nostrum. Consequatur eius non voluptates!Commodi omnis minus quo totam, ab aspernatur sequi vero cum?</p>
    <p>Explicabo asperiores recusandae qui? Aliquam similique eaque animi nemo? Fugiat.Cupiditate eaque, doloribus magnam velit ipsum maiores voluptatum eveniet rem!</p>
    <p>Pariatur sapiente laboriosam cumque itaque, id saepe commodi accusantium neque?</p>
    <p>Cupiditate eaque, doloribus magnam velit ipsum maiores voluptatum eveniet rem!</p>
    <p>Quidem eum, reiciendis iusto rem perspiciatis neque optio! Quae, sint!</p>
    <p>Maxime animi iure enim sint aperiam tempora non voluptatibus dolore.</p>
    <p>Suscipit cumque minus veritatis labore dolor corporis molestias. Rem, pariatur.</p>
    <p>Commodi omnis minus quo totam, ab aspernatur sequi vero cum?</p>
    <p>Repellendus rerum tempora eos praesentium at placeat, quas quibusdam sunt?</p>
    <p>Molestiae saepe deleniti voluptas excepturi nostrum. Consequatur eius non voluptates!</p>
  </div>
</Example>

== HTML

```html
<div class="h-32 overflow-scroll whitespace-nowrap">
  ...
</div>
```

:::

## JavaScript 滚动轨道

`Scrollbar` 用于绘制可拖拽的虚拟滚动轨道。它不会自动移动内容；通过 `onScroll` 将得到的位置同步到内容容器或数据窗口。`scrollSize` 是全部内容长度，`clientSize` 是可视轨道长度。

```tsx
import {Scrollbar} from '@zui/scrollbar/react';

<Scrollbar
  scrollSize={2000}
  clientSize={400}
  defaultScrollPos={0}
  onScroll={scrollPos => updateVisibleRows(scrollPos)}
/>
```

设置 `type="horz"` 可使用水平轴；提供 `wheelContainer`（CSS 选择器或 ref）后，鼠标滚轮会驱动此轨道，且仅在实际位置发生变化时阻止浏览器默认滚动。

## 窄滚动条样式

::: tabs

== 示例

<Example>
  <div class="scrollbar-thin h-32 overflow-scroll whitespace-nowrap">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus.Molestiae saepe deleniti voluptas excepturi nostrum. Consequatur eius non voluptates!Commodi omnis minus quo totam, ab aspernatur sequi vero cum?</p>
    <p>Explicabo asperiores recusandae qui? Aliquam similique eaque animi nemo? Fugiat.Cupiditate eaque, doloribus magnam velit ipsum maiores voluptatum eveniet rem!</p>
    <p>Pariatur sapiente laboriosam cumque itaque, id saepe commodi accusantium neque?</p>
    <p>Cupiditate eaque, doloribus magnam velit ipsum maiores voluptatum eveniet rem!</p>
    <p>Quidem eum, reiciendis iusto rem perspiciatis neque optio! Quae, sint!</p>
    <p>Maxime animi iure enim sint aperiam tempora non voluptatibus dolore.</p>
    <p>Suscipit cumque minus veritatis labore dolor corporis molestias. Rem, pariatur.</p>
    <p>Commodi omnis minus quo totam, ab aspernatur sequi vero cum?</p>
    <p>Repellendus rerum tempora eos praesentium at placeat, quas quibusdam sunt?</p>
    <p>Molestiae saepe deleniti voluptas excepturi nostrum. Consequatur eius non voluptates!</p>
  </div>
</Example>

== HTML

```html
<div class="scrollbar-thin h-32 overflow-scroll whitespace-nowrap">
  ...
</div>
```

:::

## 仅鼠标悬停时显示

::: tabs

== 示例

<Example>
  <div class="scrollbar-hover h-32 overflow-scroll whitespace-nowrap">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus.Molestiae saepe deleniti voluptas excepturi nostrum. Consequatur eius non voluptates!Commodi omnis minus quo totam, ab aspernatur sequi vero cum?</p>
    <p>Explicabo asperiores recusandae qui? Aliquam similique eaque animi nemo? Fugiat.Cupiditate eaque, doloribus magnam velit ipsum maiores voluptatum eveniet rem!</p>
    <p>Pariatur sapiente laboriosam cumque itaque, id saepe commodi accusantium neque?</p>
    <p>Cupiditate eaque, doloribus magnam velit ipsum maiores voluptatum eveniet rem!</p>
    <p>Quidem eum, reiciendis iusto rem perspiciatis neque optio! Quae, sint!</p>
    <p>Maxime animi iure enim sint aperiam tempora non voluptatibus dolore.</p>
    <p>Suscipit cumque minus veritatis labore dolor corporis molestias. Rem, pariatur.</p>
    <p>Commodi omnis minus quo totam, ab aspernatur sequi vero cum?</p>
    <p>Repellendus rerum tempora eos praesentium at placeat, quas quibusdam sunt?</p>
    <p>Molestiae saepe deleniti voluptas excepturi nostrum. Consequatur eius non voluptates!</p>
  </div>
</Example>

== HTML

```html
<div class="scrollbar-hover h-32 overflow-scroll whitespace-nowrap">
  ...
</div>
```

:::
