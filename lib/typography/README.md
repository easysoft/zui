# Typography

## Links

```html:example
<a href="/base/">This is a link!</a>
```

## Inline Text

```html:example: col p-3 items-start
<strong>Bold Text</strong>
<em>Emphatic Text</em>
<i>Idiomatic Text</i>
<small>Small Text</small>
<q>Inline Quotation</q>
```

## Code

```html:example: col p-3 items-start
<code>Inline Code</code>
<samp>Sample Output</samp>
<kbd>Keyboard Input</kbd>
<var>Variable</var>
```

## Pre

```html:example: p-3
<pre>
import {Messager} from 'zui';

Messager.show('Hello World!');
console.log('Hello World!');
</pre>
```

## Block Quotation

```html:example: p-3
<blockquote cite="https://www.huxley.net/bnw/four.html">
  <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
  <figcaption>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
</blockquote>
```

## Headings

```html:example: p-3
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## List

### `<ul>`

```html:example: p-3
<ul class="list-disc">
  <li>Milk</li>
  <li>
    Cheese
    <ul>
      <li>Blue cheese</li>
      <li>Feta</li>
    </ul>
  </li>
</ul>
```

### `<ol>`

```html:example: p-3
<ol class="list-decimal">
  <li>Mix flour, baking powder, sugar, and salt.</li>
  <li>In another bowl, mix eggs, milk, and oil.</li>
  <li>Stir both mixtures together.</li>
  <ol>
    <li>Fill muffin tray 3/4 full.</li>
    <li>Bake for 20 minutes.</li>
  </ol>
</ol>
```

### `<dl>`

```html:example: p-3
<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>

  <dt>Morgawr</dt>
  <dd>A sea serpent.</dd>

  <dt>Owlman</dt>
  <dd>A giant owl-like creature.</dd>
</dl>
```

## 文章

```html:example: p-3
<article class="article">
  <h1>HTML5</h1>
  <p>HTML5是HTML最新的修订版本，2014年10月由<a
      href="https://zh.wikipedia.org/wiki/%E4%B8%87%E7%BB%B4%E7%BD%91%E8%81%94%E7%9B%9F"
      target="_blank">万维网联盟</a>（W3C）完成标准制定。目标是替换1999年所制定的HTML 4.01和XHTML
    1.0标准，以期能在互联网应用迅速发展的时候，使网络标准达到匹配当代的网络需求。广义论及HTML5时，实际指的是包括HTML、CSS和JavaScript在内的一套技术组合。它希望能够减少网页浏览器对于需要插件的丰富性网络应用服务（Plug-in-Based
    Rich Internet Application，RIA），例如：AdobeFlash、Microsoft Silverlight与Oracle JavaFX的需求，并且提供更多能有效加强网络应用的标准集。</p>
    <blockquote>
      <p>具体来说，HTML5添加了许多新的语法特征，其中包括 <code>&lt;video&gt;</code>、<code>&lt;audio&gt;</code> 和 <code>&lt;canvas&gt;</code> 元素，同时集成了SVG内容。这些元素是为了更容易的在网页中添加和处理多媒体和图片内容而添加的。其它新的元素如 <code>&lt;section&gt;</code>、<code>&lt;article&gt;</code>、<code>&lt;header&gt;</code> 和 <code>&lt;nav&gt;</code> 则是为了丰富文档的数据内容。新的属性的添加也是为了同样的目的。同时也有一些属性和元素被移除掉了。一些元素，像 <code>&lt;a&gt;</code>、<code>&lt;cite&gt;</code> 和 <code>&lt;menu&gt;</code> 被修改，重新定义或标准化了。同时APIs和DOM已经成为HTML5中的基础部分了。HTML5还定义了处理非法文档的具体细节，使得所有浏览器和客户端程序能够一致地处理语法错误。</p>
    </blockquote>
  <h2>发展历史</h2>
  <p>HTML 5草案的前身名为Web Applications
    1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google
    Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</p>
  <p>2014年10月28日，W3C正式发布HTML5.0推荐标准。</p>
  <img src="https://www.openzui.com/docs/img/slide1.jpg">
  <h3>标准化进程</h3>
  <p>2004年6月，Mozilla基金会和Opera软件公司在万维网联盟（W3C）所主办的研讨会上提出了一份联合建议书，这份提案主要针对该技术能向下兼容浏览器的同时，也可以扩展更多新技术[17]，其中Web Forms
    2.0初步规范草案被提出，但因W3C已着力于XHTML的发展，故此建议书于8票赞成，14票反对下被否决[18]，这引起部分人的不满，不久后，一些厂商宣布成立网页超文本技术工作小组（WHATWG）组织，以继续推动该规范的开发工作，该组织再度提出Web
    Applications 1.0规范草案，后来这两种规范逐渐合并成今天的HTML5。2007年，获得W3C接纳，并成立了新的HTML工作团队。</p>
  <h3>2014计划</h3>
  <p>2012年9月，W3C提出计划要在2014年底前发布一个HTML5推荐标准，并在2016年底前发布HTML5.1推荐标准。</p>
  <h4>核心HTML标准</h4>
  <p>HTML5.0，HTML5.1和HTML5.2的合并时间表：</p>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>2012</th>
        <th>2013</th>
        <th>2014</th>
        <th>2015</th>
        <th>2016</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>HTML 5.0</td>
        <td>候选版</td>
        <td>征求评价</td>
        <td>推荐标准</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>HTML 5.1</td>
        <td>第一工作草案</td>
        <td></td>
        <td>最后召集</td>
        <td>候选版</td>
        <td>推荐标准</td>
      </tr>
      <tr>
        <td>HTML 5.2</td>
        <td></td>
        <td></td>
        <td></td>
        <td>第一工作草案</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <h2>新应用程序接口（API）</h2>
  <p>除了原先的DOM接口，HTML5增加了更多样化的应用程序接口（API）：</p>
  <ul>
    <li>
      即时二维绘图
      <ul>
        <li>Canvas API：有关动态产出与渲染图形、图表、图像和动画的API</li>
      </ul>
    </li>
    <li>定时媒体播放</li>
    <li>离线存储数据库（离线网络应用程序）</li>
    <li>编辑</li>
    <li>拖放</li>
  </ul>
  <hr>
  <pre>import {Messager} from 'zui';

Messager.show('Hello World!');
console.log('Hello World!', 'And this is a very long long long long long long long long long long long long long long long long long long long long long long long long code');
</pre>
</article>
```
