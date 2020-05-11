section: view
id: article
description: Used to display graphic content with titles and other information
icon: icon-file-text-alt
filter: wenzhang wz
---

# Article

The article view is used to display graphic content with titles and other information.

## Structure

Article view use `.article` class as a parent container and the following special elements as child containers:

<table class="table">
  <tbody>
    <tr>
      <td style="width: 100px">`<header>`</td>
      <td style="width: 80px">header</td>
      <td>Include article title, article information and abstract</td>
    </tr>
    <tr>
      <td>`.content`</td>
      <td>text</td>
      <td>Stack sections in `.article`</td>
    </tr>
    <tr>
      <td>`<footer>`</td>
      <td>bottom</td>
      <td>Show additional information about copyright and articles</td>
    </tr>
  </tbody>
</table>

General HTML Structure is:

```html
<article class="article">
  <!-- Article header -->
  <header>
    <h1>Article title</h1>
    <!-- Article attribute list -->
    <dl class="dl-inline">
      <dt>Attribute</dt>
      <dd>Value</dd>
      ...
    </dl>
    <div class="abstract">
      <p>Summary</p>
    </div>
  </header>
  <!-- The body of the article -->
  <section class="content">
    ...
  </section>
  <!-- Bottom of the article -->
  <footer>
    <ul class="pager pager-justify">
      <li class="previous"><a href="#"><i class="icon-arrow-left"></i> Previous</a></li>
      <li><a href="#"><i class="icon-list-ul"></i> Table of Contents</a></li>
      <li class="next disabled"><a href="#">No next article <i class="icon-arrow-right"></i></a></li>
    </ul>
  </footer>
</article>
```

### Supported body tags

In the body `.content`, you can embed the following elements. You don't have to add extra classes to these elements for consistent appearance and adaptability.

 - `<h1> ~ <h6>`
 - `<p>`
 - `<ul>`、`<ol>`
 - `<dl>`
 - `<table>`
 - `<img>`
 - `<blockquote>`
 - `<pre>`

## Comprehensive examples

<example>
  <article class="article">
    <header contenteditable="true">
      <h1 class="text-center">HTML5</h1>
      <dl class="dl-inline">
        <dt>Source:</dt>
        <dd>Wikipedia</dd>
        <dt>Last Revision:</dt>
        <dd>August 12, 2016 (Friday) 12:53</dd>
        <dt></dt>
        <dd class="pull-right"><span class="label label-success">HTML</span> <span class="label label-warning">Web Design</span> <span class="label label-info">W3C</span> <span class="label label-danger"><i class="icon-eye-open"></i> 235</span></dd>
      </dl>
      <section class="abstract">
        <p><strong>Summary: </strong> HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it.</p>

        <p>HTML5 is the fifth and current major version of HTML, and subsumes XHTML. The current standard, the HTML Living Standard is developed by WHATWG, which is made up of the major browser vendors (Apple, Google, Mozilla, and Microsoft), with the Living Standard also existing in an abridged version.</p>
      </section>
    </header>
    <section class="content" contenteditable="true">
      <p>HTML5 is the fifth and current major version of HTML, and subsumes XHTML. The current standard, the HTML Living Standard is developed by WHATWG, which is made up of the major browser vendors (Apple, Google, Mozilla, and Microsoft), with the Living Standard also existing in an abridged version.</p>
      
      <p>HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the latest multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</p>
      <blockquote>
      <p>Many new syntactic features are included. To natively include and handle multimedia and graphical content, the new elements were added, and support for scalable vector graphics (SVG) content and MathML for mathematical formulas. To enrich the semantic content of documents, new page structure elements are added. New attributes are introduced, some elements and attributes have been removed, and others have been changed, redefined, or standardized.</p>
       <p>The APIs and Document Object Model (DOM) are now fundamental parts of the HTML5 specification and HTML5 also better defines the processing for any invalid documents.</p>
      </blockquote>
      <h2>Development History</h2>
      <p>The Web Hypertext Application Technology Working Group (WHATWG) began work on the new standard in 2004. At that time, HTML 4.01 had not been updated since 2000, and the World Wide Web Consortium (W3C) was focusing future developments on XHTML 2.0. In 2009, the W3C allowed the XHTML 2.0 Working Group's charter to expire and decided not to renew it.</p>
      <p>On 16 September 2014, W3C moved HTML5 to Proposed Recommendation. On 28 October 2014, HTML5 was released as a W3C Recommendation, bringing the specification process to completion. On 1 November 2016, HTML 5.1 was released as a W3C Recommendation. On 14 December 2017, HTML 5.2 was released as a W3C Recommendation.</p>
      <img src="docs/img/slide1.jpg" alt="">
      <h3>Standardization process</h3>
      <p>The Mozilla Foundation and Opera Software presented a position paper at a World Wide Web Consortium (W3C) workshop in June 2004, focusing on developing technologies that are backward-compatible with existing browsers, including an initial draft specification of Web Forms 2.0. The workshop concluded with a vote—8 for, 14 against—for coninuing work on HTML. Immediately after the workshop, WHATWG was formed to start work based upon that position paper, and a second draft, Web Applications 1.0, was also announced. The two specifications were later merged to form HTML5. The HTML5 specification was adopted as the starting point of the work of the new HTML working group of the W3C in 2007.</p>
      <h3>2014</h3>
      <p>On 16 September 2014, W3C moved HTML5 to Proposed Recommendation. On 28 October 2014, HTML5 was released as a W3C Recommendation, bringing the specification process to completion. On 1 November 2016, HTML 5.1 was released as a W3C Recommendation. On 14 December 2017, HTML 5.2 was released as a W3C Recommendation.</p>
      <h4>HTML Standard</h4>
      <p>HTML5.0, HTML5.1, and HTML5.2 consolidation schedule:</p>
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
            <td>Candidate</td>
            <td>Request for evaluation</td>
            <td>Recommendation</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>HTML 5.1</td>
            <td>First working draft</td>
            <td></td>
            <td>Final call</td>
            <td>Candidate</td>
            <td>Recommendation</td>
          </tr>
          <tr>
            <td>HTML 5.2</td>
            <td></td>
            <td></td>
            <td></td>
            <td>First working draft</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h2>New application interface(API)</h2>
      <p>Except the original DOM interface, HTML5 added a more diverse application interface(API):</p>
      <ul>
        <li>
          Instant two-dimensional drawing
          <ul>
            <li>Canvas API: About dynamic output and rendering graphics, chart, image and animation API</li>
          </ul>
        </li>
        <li>Timed media playback</li>
        <li>Offline storage database(Offline web application)</li>
        <li>edit</li>
        <li>Drag and drop</li>
      </ul>
    </section>
    <footer contenteditable="true">
      <p class="pull-right text-muted">This article is under the terms of CC BY-SA 3.0.</p>
      <p class="text-important">Excerpt from Wikipedia HTML5 Entry.</p>
      <ul class="pager pager-justify">
        <li class="previous"><a target="_blank" href="https://zh.wikipedia.org/wiki/"><i class="icon-arrow-left"></i> HTML</a></li>
        <li class="next disabled"><a target="_blank" href="https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#Standards">W3C standard <i class="icon-arrow-right"></i></a></li>
      </ul>
    </footer>
  </article>
</example>

<template class="pre-scrollable linenums"/>

```html
<article class="article">
  <header>
    <h1 class="text-center">HTML5</h1>
    <dl class="dl-inline">
      <dt>Source:</dt>
      <dd>Wikipedia</dd>
      <dt>Last Revision:</dt>
      <dd>August 12, 2016 (Friday) 12:53</dd>
      <dt></dt>
      <dd class="pull-right"><span class="label label-success">HTML</span> <span class="label label-warning">Web Design</span> <span class="label label-info">W3C</span> <span class="label label-danger"><i class="icon-eye-open"></i> 235</span></dd>
    </dl>
    <section class="abstract">
      <p><strong>Summary: </strong>HTML5 is a software solution stack that defines the properties and behaviors of     web page content by implementing a markup based pattern to it.</p>

      <p>HTML5 is the fifth and current major version of HTML, and subsumes XHTML. The current standard, the HTML Living Standard is developed by WHATWG, which is made up of the major browser vendors (Apple, Google, Mozilla, and Microsoft), with the Living Standard also existing in an abridged version.</p>
    </section>
  </header>
  <section class="content">
    <p>HTML5 is the fifth and current major version of HTML, and subsumes XHTML. The current standard, the HTML Liv    ing Standard is developed by WHATWG, which is made up of the major browser vendors (Apple, Google, Mozilla, and Microsoft), with the Living Standard also existing in an abridged version.</p>

    <p>HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the latest multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</p>
    <blockquote>
      <p>Many new syntactic features are included. To natively include and handle multimedia and graphical content, the new elements were added, and support for scalable vector graphics (SVG) content and MathML for mathematical formulas. To enrich the semantic content of documents, new page structure elements are added. New attributes are introduced, some elements and attributes have been removed, and others have been changed, redefined, or standardized.</p>
       
      <p>The APIs and Document Object Model (DOM) are now fundamental parts of the HTML5 specification and HTML5 also better defines the processing for any invalid documents.</p>
    </blockquote>
    <h2>Development History</h2>
    <p>The Web Hypertext Application Technology Working Group (WHATWG) began work on the new standard in 2004. At that time, HTML 4.01 had not been updated since 2000, and the World Wide Web Consortium (W3C) was focusing future developments on XHTML 2.0. In 2009, the W3C allowed the XHTML 2.0 Working Group's charter to expire and decided not to renew it.</p>
    <p>On 16 September 2014, W3C moved HTML5 to Proposed Recommendation. On 28 October 2014, HTML5 was released as a W3C Recommendation, bringing the specification process to completion. On 1 November 2016, HTML 5.1 was released as a W3C Recommendation. On 14 December 2017, HTML 5.2 was released as a W3C Recommendation.</p>
    <img src="docs/img/slide1.jpg" alt="">
    <h3>Standardization process</h3>
    <p>The Mozilla Foundation and Opera Software presented a position paper at a World Wide Web Consortium (W3C) workshop in June 2004, focusing on developing technologies that are backward-compatible with existing browsers, including an initial draft specification of Web Forms 2.0. The workshop concluded with a vote—8 for, 14 against—for coinuing work on HTML. Immediately after the workshop, WHATWG was formed to start work based upon that position paper, and a second draft, Web Applications 1.0, was also announced. The two specifications were later merged to form HTML5. The HTML5 specification was adopted as the starting point of the work of the new HTML working group of the W3C in 2007.</p>
     <h3>2014</h3>
     <p>On 16 September 2014, W3C moved HTML5 to Proposed Recommendation. On 28 October 2014, HTML5 was released as a W3C Recommendation, bringing the specification process to completion. On 1 November 2016, HTML 5.1 was released as a W3C Recommendation. On 14 December 2017, HTML 5.2 was released as a W3C Recommendation.</p>
     <h4>HTML Standard</h4>
    <p>HTML5.0, HTML5.1, and HTML5.2 consolidation schedule:</p>
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
          <td>Candidate</td>
          <td>Request for evaluation</td>
          <td>Recommendation</td>
          <td></td>
          <td></td> 
        </tr>
        <tr>
          <td>HTML 5.1</td>
          <td>First working draft</td>
          <td></td>
          <td>Final call</td>
          <td>Candidate</td>
          <td>Recommendation</td>
        </tr>
        <tr>
          <td>HTML 5.2</td>
          <td></td>
          <td></td>
          <td></td>
          <td>First working draft</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2>New application interface(API)</h2>
    <p>Except the original DOM interface. HTML5 added a more diverse application interface(API):</p>
    <ul>
      <li>
        Instant two-dimensional drawing
        <ul>
          <li>Canvas API: About dynamic output and rendering graphics, chart, image and animation API</li>
        </ul>
      </li>
      <li>Timed media playback</li>
      <li>Offline storage database(Offline web application)</li>
      <li>edit</li>
      <li>Drag and drop</li>
    </ul>
  </section>
  <footer>
    <p class="pull-right text-muted">This article is under the terms of CC-BY-SA-3.0.</p>
    <p class="text-important">Excerpt from Wikipedia HTML5.</p>
    <ul class="pager pager-justify">
      <li class="previous"><a target="_blank" href="https://en.wikipedia.org/wiki/HTML5"><i class="icon-arrow-left"></i> HTML</a></li>
      <li class="next disabled"><a target="_blank" href="https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#Standards">W3C standard <i class="icon-arrow-right"></i></a></li>
    </ul>
  </footer>
</article>
```

## Condensed article view

Pass for `.article` Add to `article-condensed` Class to get a more compact view of the article，Suitable for placement in containers without padding。

<example class="no-padding">
  <article class="article article-condensed">
    <header contenteditable="true">
      <dl class="dl-inline pull-right">
        <dt>Source:</dt>
        <dd>Wikipedia</dd>
        <dt>Last Revision:</dt>
        <dd>August 12, 2016(Friday) 12:53</dd>
        <dt></dt>
        <dd class="pull-right"><span class="label label-success">HTML</span> <span class="label label-warning">Web Design</span> <span class="label label-info">W3C</span> <span class="label label-danger"><i class="icon-eye-open"></i> 235</span></dd>
      </dl>
      <h1>HTML5</h1>
      <section class="abstract">
        <p><strong>Summary: </strong>HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it.</p>
        
        <p>HTML5 is the fifth and current major version of HTML, and subsumes XHTML. The current standard, the HTML Living Standard is developed by WHATWG, which is made up of the major browser vendors (Apple, Google, Mozilla, and Microsoft), with the Living Standard also existing in an abridged version.</p>
     </section>
   </header>
   <section class="content" contenteditable="true">
     <p>HTML5 is the fifth and current major version of HTML, and subsumes XHTML. The current standard, the HTML Living Standard is developed by WHATWG, which is made up of the major browser vendors (Apple, Google, Mozilla, and Microsoft), with the Living Standard also existing in an abridged version.</p>
 
     <p>HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the latest multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</p>
     <blockquote>
     <p>Many new syntactic features are included. To natively include and handle multimedia and graphical content, the new elements were added, and support for scalable vector graphics (SVG) content and MathML for mathematical formulas. To enrich the semantic content of documents, new page structure elements are added. New attributes are introduced, some elements and attributes have been removed, and others have been changed, redefined, or standardized.</p>

      <p>The APIs and Document Object Model (DOM) are now fundamental parts of the HTML5 specification and HTML5 also better defines the processing for any invalid documents.</p>
     </blockquote>
     <h2>Development History</h2>
     <p>The Web Hypertext Application Technology Working Group (WHATWG) began work on the new standard in 2004. At that time, HTML 4.01 had not been updated since 2000, and the World Wide Web Consortium (W3C) was focusing future developments on XHTML 2.0. In 2009, the W3C allowed the XHTML 2.0 Working Group's charter to expire and decided not to renew it.</p>
     <p>On 16 September 2014, W3C moved HTML5 to Proposed Recommendation. On 28 October 2014, HTML5 was released as a W3C Recommendation, bringing the specification process to completion. On 1 November 2016, HTML 5.1 was released as a W3C Recommendation. On 14 December 2017, HTML 5.2 was released as a W3C Recommendation.</p>
     <img src="docs/img/slide1.jpg" alt="">
      <h3>Standardization process</h3>
      <p>The Mozilla Foundation and Opera Software presented a position paper at a World Wide Web Consortium (W3C) work    shop in June 2004, focusing on developing technologies that are backward-compatible with existing browsers, including an initial draft specification of Web Forms 2.0. The workshop concluded with a vote—8 for, 14 against—r continuing work on HTML. Immediately after the workshop, WHATWG was formed to start work based upon that position paper, and a second draft, Web Applications 1.0, was also announced. The two specifications were later merged to form HTML5. The HTML5 specification was adopted as the starting point of the work of the new HTML working group of the W3C in 2007.</p>
      <h3>2014</h3>
      <p>On 16 September 2014, W3C moved HTML5 to Proposed Recommendation. On 28 October 2014, HTML5 was released as a W3C Recommendation, bringing the specification process to completion. On 1 November 2016, HTML 5.1 was released as a W3C Recommendation. On 14 December 2017, HTML 5.2 was released as a W3C Recommendation.</p>
      <h4>HTML Standard</h4>
      <p>HTML5.0, HTML5.1 and HTML5.2 consolidation schedule:</p>
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
            <td>Candidate</td>
            <td>Request for evaluation</td>
            <td>Recommendation</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>HTML 5.1</td>
            <td>First working draft</td>
            <td></td>
            <td>Final call</td>
            <td>Candidate</td>
            <td>Recommendation</td>
          </tr>
          <tr>
            <td>HTML 5.2</td>
            <td></td>
            <td></td>
            <td></td>
            <td>First working draft</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <h2>New application interface(API)</h2>
      <p>Except the original DOM interface. HTML5 added a more diverse application interface(API):</p>
      <ul>
        <li>
          Instant two-dimensional drawing
          <ul>
            <li>Canvas API: About dynamic output and rendering graphics, chart, image and animation API</li>
          </ul>
        </li>
        <li>Timed media playback</li>
        <li>Offline storage database(Offline web application)</li>
        <li>edit</li>
        <li>Drag and drop</li>
      </ul>
    </section>
    <footer contenteditable="true">
      <p class="pull-right text-muted">This article is under the terms of CC-BY-SA-3.0.</p>
      <p class="text-important">Excerpt from Wikipedia HTML5.</p>
      <ul class="pager pager-justify">
        <li class="previous"><a target="_blank" href="https://en.wikipedia.org/wiki/HTML5"><i class="icon-arrow-left"></i> HTML</a></li>
        <li class="next disabled"><a target="_blank" href="https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#Standards">W3C standard <i class="icon-arrow-right"></i></a></li>
      </ul>
    </footer>
  </article>
</example>

<template class="pre-scrollable linenums"/>

```html
<article class="article article-condensed">
  <header>
    <dl class="dl-inline pull-right">
      <dt>Source:</dt>
      <dd>Wikipedia</dd>
      <dt>Last Revision:</dt>
      <dd>August 12, 2016(Friday) 12:53</dd>
      <dt></dt>
      <dd class="pull-right"><span class="label label-success">HTML</span> <span class="label label-warning">Web Design</span> <span class="label label-info">W3C</span> <span class="label label-danger"><i class="icon-eye-open"></i> 235</span></dd>
    </dl>
    <h1>HTML5</h1>
    <section class="abstract">
      <p><strong>Summary: </strong>HTML5 is a software solution stack that defines the properties and behaviors of web page content by implementing a markup based pattern to it.</p>
      <p>HTML5 is the fifth and current major version of HTML, and subsumes XHTML. The current standard, the HTML Living Standard is developed by WHATWG, which is made up of the major browser vendors (Apple, Google, Mozilla, and Microsoft), with the Living Standard also existing in an abridged version.</p>
    </section>
  </header>
  <section class="content">
    <p>HTML5 is the fifth and current major version of HTML, and subsumes XHTML. The current standard, the HTML Living Standard is developed by WHATWG, which is made up of the major browser vendors (Apple, Google, Mozilla, and Microsoft), with the Living Standard also existing in an abridged version.</p>
    <p>HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the latest multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</p>
    <blockquote>
      <p>Many new syntactic features are included. To natively include and handle multimedia and graphical content, the new elements were added, and support for scalable vector graphics (SVG) content and MathML for mathematical formulas. To enrich the semantic content of documents, new page structure elements are added. New attributes are introduced, some elements and attributes have been removed, and others have been changed, redefined, or standardized.</p> 
      <p>The APIs and Document Object Model (DOM) are now fundamental parts of the HTML5 specification and HTML5 also better defines the processing for any invalid documents.</p>
    </blockquote>
    <h2>Development History</h2>
    <p>The Web Hypertext Application Technology Working Group (WHATWG) began work on the new standard in 2004. At that time, HTML 4.01 had not been updated since 2000, and the World Wide Web Consortium (W3C) was focusing future developments on XHTML 2.0. In 2009, the W3C allowed the XHTML 2.0 Working Group's charter to expire and decided not to renew it.</p>
    <p>On 16 September 2014, W3C moved HTML5 to Proposed Recommendation. On 28 October 2014, HTML5 was released as a W3C Recommendation, bringing the specification process to completion. On 1 November 2016, HTML 5.1 was released as a W3C Recommendation. On 14 December 2017, HTML 5.2 was released as a W3C Recommendation.</p>
    <img src="docs/img/slide1.jpg" alt="">
    <h3>Standardization process</h3>
    <p>The Mozilla Foundation and Opera Software presented a position paper at a World Wide Web Consortium (W3C) work shop in June 2004, focusing on developing technologies that are backward-compatible with existing browsers, including an initial draft specification of Web Forms 2.0. The workshop concluded with a vote—8 for, 14 against—for continuing work on HTML. Immediately after the workshop, WHATWG was formed to start work based upon that position paper, and a second draft, Web Applications 1.0, was also announced. The two specifications were later merged to form HTML5. The HTML5 specification was adopted as the starting point of the work of the new HTML working group of the W3C in 2007.</p>
     <h3>2014</h3>
     <p>On 16 September 2014, W3C moved HTML5 to Proposed Recommendation. On 28 October 2014, HTML5 was released as a W3C Recommendation, bringing the specification process to completion. On 1 November 2016, HTML 5.1 was released as a W3C Recommendation. On 14 December 2017, HTML 5.2 was released as a W3C Recommendation.</p>
    <h4>HTML Standard</h4>
    <p>HTML5.0, HTML5.1 and HTML5.2 consolidation schedule:</p>
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
          <td>Candidate</td>
          <td>Request for evaluation</td>
          <td>Recommendation</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>HTML 5.1</td>
          <td>First working draft</td>
          <td></td>
          <td>Final call</td>
          <td>Candidate</td>
          <td>Recommendation</td>
        </tr>
        <tr>
          <td>HTML 5.2</td>
          <td></td>
          <td></td>
          <td></td>
          <td>First working draft</td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <h2>New application interface(API)</h2>
    <p>Except the original DOM interface. HTML5 added a more diverse application interface(API):</p>
    <ul>
      <li>
        Instant two-dimensional drawing
        <ul>
          <li>Canvas API: About dynamic output and rendering graphics, chart, image and animation API</li>
        </ul>
      </li>
      <li>Timed media playback</li>
      <li>Offline storage database(Offline web application)</li>
      <li>edit</li>
      <li>Drag and drop</li>
    </ul>
  </section>
  <footer>
    <p class="pull-right text-muted">This article is under the terms of CC-BY-SA-3.0.</p>
    <p class="text-important">Excerpt from Wikipedia HTML5.</p>
    <ul class="pager pager-justify">
      <li class="previous"><a target="_blank" href="https://en.wikipedia.org/wiki/HTML5"><i class="icon-arrow-left"></i> HTML</a></li>
      <li class="next disabled"><a target="_blank" href="https://en.wikipedia.org/wiki/World_Wide_Web_Consortium#Standards">W3C standard <i class="icon-arrow-right"></i></a></li>
    </ul>
  </footer>
</article>
```

<div class="alert with-icon">
  <i class="icon-smile"></i>
  <div class="content">
    <p>Thank <a class="alert-link" href="http://weibo.com/snowinfish" target="_blank">@snowinfish</a> very much for all the images used in the demo.</p>
    <p class="margin-zero">Images are for ZUI Demo only. Please do not use any image without being authorized.</p>
  </div>
</div>
