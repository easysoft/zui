section: basic
id: typography
description: Typesetting
icon: icon-font
filter: paiban pb
---

# Typesetting

## Font

ZUI provides three font families which fit both Chinese and English scenarios.

<table class="table">
  <tbody>
    <tr>
      <th>Sans Serif</th>
      <td>`@font-family-sans-serif:  "Helvetica Neue", Helvetica, Tahoma, Arial, 'PingFang SC', 'Source Han Sans CN', 'Source Han Sans', 'Source Han Serif', 'Hiragino Sans GB', 'WenQuanYi Micro Hei', 'Microsoft YaHei', sans-serif;`</td>
    </tr>
    <tr>
      <th>Serif</th>
      <td>`Georgia, "Times New Roman", Times, serif`</td>
    </tr>
    <tr>
      <th>Monospace</th>
      <td>`Monaco, Menlo, Consolas, "Courier New", monospace`</td>
    </tr>
  </tbody>
</table>

[Sans Serif](http://zh.wikipedia.org/wiki/%E7%84%A1%E8%A5%AF%E7%B7%9A%E5%AD%97%E9%AB%94) is the default font, for it is perfect for screens; Serif is for special text and titles, but it is not recommende to use it in small pixels; Monospace is for codes.

Font size is **13px** by deafult for the best display on all screens. ZUI supports smaller font, but it should be > **12px**. Row height by default is 1.38 times of the font size, 18px. The row height of H1~H6 is 1.2 times of the font size.

## Typesetting

Text is an important part of a page, so a nice typesetting is the cornerstone of a user interface. Below is the typesetting in ZUI for web desgin.

<table class="table">
  <tbody>
    <tr>
      <th style="width:30%">Element</th>
      <th>Tag</th>
      <th>Size</th>
      <th>Note</th>
    </tr>
    <tr>
      <td><h1>Header 1</h1></td>
      <td>`<h1>`</h1></td>
      <td>26px</td>
      <td>Only one Header 1 for each page.</td>
    </tr>
    <tr>
      <td><h2>Header 2</h2></td>
      <td>`<h2>`</h2></td>
      <td>22px</td>
      <td>Secondary title of a page. One page might have several Header 2s.</td>
    </tr>
    <tr>
      <td><h3>Header 3</h3></td>
      <td>`<h3>`</h3></td>
      <td>16px bold</td>
      <td>Tertiary hearder on a page and is embedded in Header 2.</td>
    </tr>
    <tr>
      <td><h4>Header 4</h4></td>
      <td>`<h4>`</h4></td>
      <td>15px bold</td>
      <td>Fourth-level header on a page and is embedded in Header 3.</td>
    </tr>
    <tr>
      <td><h5>Header 5</h5></td>
      <td>`<h5>`</h5></td>
      <td>13px bold grey</td>
      <td>Fifth-level header on a page and is embedded in Header 4.</td>
    </tr>
    <tr>
      <td><h6>Header 6</h6></td>
      <td>`<h6>`</h6></td>
      <td>12px bold grey</td>
      <td>Sixth-level header on a page and is embedded in Header 5.</td>
    </tr>
    <tr>
      <td><p>This is a passage.</p></td>
      <td>`<p>`</p></td>
      <td>13px</td>
      <td>Height is 20px. Each passage has 10px above.</td>
    </tr>
    <tr>
      <td><p class="lead">This is an outstanding passage.</p></td>
      <td>`<p class="lead">`</p></td>
      <td>20px</td>
      <td>It has fonts in larger size and will add a `.lead` to p.</td>
    </tr>
    <tr>
      <td><strong>Strong</strong></td>
      <td>`<strong>`</strong></td>
      <td>13px</td>
      <td>Strong is used to emphasize the content.</td>
    </tr>
    <tr>
      <td><em>Emphasize</em></td>
      <td>`<em>`</em></td>
      <td>13px</td>
      <td></td>
    </tr>
    <tr>
      <td><small>Small</small></td>
      <td>`<small>`</small></td>
      <td>12px grey</td>
      <td>Small is 85% of the noral font size. Usually it is 11.9px.</td>
    </tr>
    <tr>
      <td>[Hyperlink](#)</td>
      <td>`<a>`</a></td>
      <td>13px</td>
      <td>It has colors to differentiate from each other. When hovering, an underline will show.</td>
    </tr>
    <tr>
      <td>
        <ol>
          <li>This is an ordered list.</li>
          <li>It has three items.</li>
          <li>As an exampe.</li>
        </ol>
      </td>
      <td>`<ol><li>...</li></ol>`</td>
      <td>13px</td>
      <td>Items that shoud be ordered can be listed like this.</td>
    </tr>
    <tr>
      <td>
        <ul>
          <li>This is a list.</li>
          <li>It has three items.</li>
          <li>As an example.</li>
        </ul>
      </td>
      <td>`<ul><li>...</li></ul>`</td>
      <td>13px</td>
      <td>Items that don't have to be ordered can be listed like this.</td>
    </tr>
    <tr>
      <td><blockquote>This is a block quote.</blockquote></td>
      <td>`<blockquote>`</td>
      <td>13px</td>
      <td>It is used to quote a large amount of text.</td>
    </tr>
    <tr>
      <td><q>This is embeded quote.</q></td>
      <td>`<q>`</q></td>
      <td>13px</td>
      <td>It is used to quote terms in the body.</td>
    </tr>
    <tr>
      <td><pre><code>&lt;div&gt;
  &lt;p&gt;&#x4ee3;&#x7801;&#x533a;&#x57df;&lt;/p&gt;
&lt;/div&gt;</code></pre></td>
      <td>`<pre><code>...</code>`</pre></td>
      <td>13px monospace</td>
      <td>Code will be added a box around it and displayed in monospaced font. Refer to [Code Prettify](#prettify)。</td>
    </tr>
  </tbody>
</table>
