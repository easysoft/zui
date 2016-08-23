section: basic
id: typography
description: 文字排版
icon: icon-font
filter: paiban pb
---

# 排版

## 字体

在ZUI中我们定义了三种字体家族已适应不同的场合。这些字体在中英文环境下都能够很好的显示。

<table class="table">
  <tbody>
    <tr>
      <th>无衬线字体</th>
      <td>`"Helvetica Neue", Helvetica, Tahoma, Arial, 'Microsoft Yahei', 'Hiragino Sans GB', 'WenQuanYi Micro Hei', sans-serif`</td>
    </tr>
    <tr>
      <th>衬线字体</th>
      <td>`Georgia, "Times New Roman", Times, serif`</td>
    </tr>
    <tr>
      <th>等宽字体</th>
      <td>`Monaco, Menlo, Consolas, "Courier New", monospace`</td>
    </tr>
  </tbody>
</table>

使用[无衬线字体](http://zh.wikipedia.org/wiki/%E7%84%A1%E8%A5%AF%E7%B7%9A%E5%AD%97%E9%AB%94)来作为页面的默认字体，因为无衬线字体非常适合在屏幕上显示；衬线字体作为一个额外的选择，但并不推荐在小字号中使用，但可以用于特殊文字或者标题中；等宽字体用来显示程序代码。

默认的字体大小为 **13px**，以保证在所有屏幕上都能有最佳效果。ZUI中也允许使用更小号的字体，不过不要小于 **12px**。默认行高为字体大小的1.38倍，一般为18px。一至六级标题的行高为字体大小的1.2。

## 文字排版

字是组成页面的重要内容，一个好的排版是构建好的用户界面的基石。应根据我们的设计原则来进行文字排版。下表中列举了web设计时会用到的文字排版方式。

<table class="table">
  <tbody>
    <tr>
      <th style="width:30%">元素</th>
      <th>标签</th>
      <th>字体大小</th>
      <th>说明</th>
    </tr>
    <tr>
      <td># 页面标题</td>
      <td>`<h1>`</h1></td>
      <td>26px</td>
      <td>在一个页面只有一个页面标题。</td>
    </tr>
    <tr>
      <td>## 标题</td>
      <td>`<h2>`</h2></td>
      <td>22px</td>
      <td>作为页面第二级标题，可能在一个页面中使用到多个二级标题。</td>
    </tr>
    <tr>
      <td>### 三级标题</td>
      <td>`<h3>`</h3></td>
      <td>16px 粗体</td>
      <td>页面第三级标题，嵌套在二级标题下使用。</td>
    </tr>
    <tr>
      <td>#### 四级标题</td>
      <td>`<h4>`</h4></td>
      <td>15px 粗体</td>
      <td>页面第四级标题，嵌套在三级标题下使用。</td>
    </tr>
    <tr>
      <td>##### 五级标题</td>
      <td>`<h5>`</h5></td>
      <td>13px 粗体 颜色灰色</td>
      <td>页面第五级标题，嵌套在四级标题下使用。</td>
    </tr>
    <tr>
      <td>###### 六级标题</td>
      <td>`<h6>`</h6></td>
      <td>12px 粗体 颜色灰色</td>
      <td>页面第六级标题，嵌套在五级标题下使用。</td>
    </tr>
    <tr>
      <td>这是一个段落</td>
      <td>`<p>`</p></td>
      <td>13px</td>
      <td>正文中大部分由段落组成。段落的行高为20px。段落间在垂直方向上有10px边距。</td>
    </tr>
    <tr>
      <td>这是一个突出的段落</td>
      <td>`<p class="lead">`</p></td>
      <td>20px</td>
      <td>突出的段落具有更大的字体，在一个段落上加`.lead`类。</td>
    </tr>
    <tr>
      <td>**粗体文本**</td>
      <td>`<strong>`</strong></td>
      <td>13px</td>
      <td>通常粗体文本用来强调内容。</td>
    </tr>
    <tr>
      <td>_斜体文本_</td>
      <td>`<em>`</em></td>
      <td>13px</td>
      <td></td>
    </tr>
    <tr>
      <td><small>小的文本</small></td>
      <td>`<small>`</small></td>
      <td>12px 颜色灰色</td>
      <td>small文本字体只有正常字体大小的85%，通常为11.9px。</td>
    </tr>
    <tr>
      <td>[超链接](#)</td>
      <td>`<a>`</a></td>
      <td>13px</td>
      <td>超链接具有不同的颜色以区别其他文本，超链接仅当鼠标悬停时会增加下划线。</td>
    </tr>
    <tr>
      <td>1.  这是一个有序列表
2.包含三个列表项
3.作为示例</td>
      <td>`<ol><li>...</li></ol>`</td>
      <td>13px</td>
      <td>当组织一些并列项目且关注项目之间顺序时可以使用有序列表。</td>
    </tr>
    <tr>
      <td>*   这是一个无序列表
*   包含三个列表项
*   作为示例</td>
      <td>`<ul><li>...</li></ul>`</td>
      <td>13px</td>
      <td>当组织一些并列项目但不关注项目之间顺序时可以使用无序列表。</td>
    </tr>
    <tr>
      <td>&gt; 这是一大段引用内容</td>
      <td>`<blockquote>`</blockquote></td>
      <td>13px</td>
      <td>用于显示一大段引用的内容。</td>
    </tr>
    <tr>
      <td><q>这是内嵌的引用</q></td>
      <td>`<q>`</q></td>
      <td>13px</td>
      <td>用于在正文行内显示引用的术语。</td>
    </tr>
    <tr>
      <td><pre><code>&lt;div&gt;
  &lt;p&gt;&#x4ee3;&#x7801;&#x533a;&#x57df;&lt;/p&gt;
&lt;/div&gt;</code></pre></td>
      <td>`<pre><code>...</code>`</pre></td>
      <td>13px 等宽字体</td>
      <td>代码区域会加上方框，并使用等宽字体显示，详细代码显示规定请参见节[代码高亮](#prettify)。</td>
    </tr>
  </tbody>
</table>
