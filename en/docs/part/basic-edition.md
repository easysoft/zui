section: basic
id: edition
description: Choose the right version
icon: icon-code-fork
filter: xuanzebanben xzbb
---

# Version and Customization

ZUI has web components for almost all basic contents in web applications. Not all applications require all the components, so the content is not packaged as on CSS file and one JS file. For ZUI standard, only general components are included, which fits almost all scenarios.

Light-weighted applications require even less contents. For ZUI Lite, general contents in ZUI are included and compressed to a smaller size. You can find '.lite' files in dist/ and that is the ZUI Lite.

## ZUI Standard

General components are included. Precompiled ZUI Standard looks like this:

```
zui/
└── dist/
    ├── css/                   CSS files
    │   ├── zui.css
    │   └── zui.min.css
    ├── js/                    Javascript files
    │   ├── zui.js
    │   └── zui.min.js
    └── fonts/                 icon font files
        ├── zenicon.eot
        ├── zenicon.ttf
        ├── zenicon.woff
        └── zenicon.svg
```

## ZUI Lite

General components are included in ZUI Lite which is included in ZUI Standard. Precompiled ZUI Lite looks like this:

```
zui/
└── dist/
    ├── css/                  CSS files
    │   ├── zui.lite.css
    │   └── zui.lite.min.css
    ├── js/                   Javascript files
    │   ├── zui.lite.js
    │   └── zui.lite.min.js
    └── fonts/                icon font files
        ├── zenicon.eot
        ├── zenicon.ttf
        ├── zenicon.woff
        └── zenicon.svg
```

## Independent Components

Some components is not included in ZUI Standard nor ZUI Lite, so refer to the right file and use it. The directory of an independent component looks like this:  

```
zui/
└── dist/
    └── lib/                   Independent component
        ├── chosen/            Chosen
        ├── datetimepicker/    Datetimepicker
        ├── datatable/         Datatable
        └── ...                More...
```

<div class="alert alert-warning-inverse">
  <h4>Tips</h4>
  <p>ZUI has independent components that require jQuery and other ZUI plug-ins.</p>
</div>

## Component list

The component list helps you quickly find out if a component is included in the specified version. Currently, ZUI has <span class="components-count"></span> components, excluding merged components.

<table class="table table-bordered" id="buildTable">
  <thead>
    <tr>
      <th data-width="auto">Components</th>
      <th data-width="7%" style="width: 7%" class="text-center">ZUI Standard</th>
      <th data-width="7%" style="width: 7%" class="text-center">ZUI Lite</th>
      <th data-width="7%" style="width: 7%" class="text-center">Independent Components</th>
      <th data-width="15%" style="width: 15%" class="text-center">Source</th>
      <th data-width="9%" style="width: 9%" class="text-center">License</th>
      <th data-width="30%" style="width: 30%" class="text-center">Version and Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="5" class="text-muted">Loading the list...</td>
    </tr>
  </tbody>
</table>

<div class="alert alert-primary-inverse">
  <h4>Tips</h4>
  <p>Almost all third-party components are customized by ZUI, and they are not always synchronized with the latest version.</p>
</div>

## Use Gulp to customize

ZUI uses [Gulp](http://gulpjs.com/) as a build tool. Gulp is a great and easy tool to use. Here are brief steps to compile ZUI. If you want to know more, please visit [Gulp Official Website](http://gulpjs.com/)。

### Install Gulp

Gulp is based on Node.js. Before installing Gulp, [download and install node.js](http://nodejs.org/download/). The latested Node.js contains npm [node packaged modules](http://npmjs.org/). npm is a tool to manage extension packages in node.js.

After installing Node.js, execute:

*   Global Gulp installation: `npm install -g gulp`；
*   Go to ZUI source directory and execute `npm install`. npm will read `package.json` and automatically install Gulp and all dependent extension packages.

### Compile with Gulp

Complete the steps above and then start to compile. The built-in `build` commands can do most of the compilation. Here are common commands built in ZUI.

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 200px">Command</th>
      <th style="width: 40%">Note</th>
      <th>Output Directory</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`gulp build -standard`</td>
      <td>ZUI Standard</td>
      <td>
        <ul>
          <li>`dist/js/zui*.js`</li>
          <li>`dist/css/zui*.css`</li>
          <li>`dist/fonts/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -lite`</td>
      <td>ZUI Lite</td>
      <td>
        <ul>
          <li>`dist/js/zui.lite*.js`</li>
          <li>`dist/css/zui.lite*.css`</li>
          <li>`dist/fonts/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -dist`</td>
      <td>Standard, Lite and Independent Components</td>
      <td>
        <ul>
          <li>`dist/js/**`</li>
          <li>`dist/css/**`</li>
          <li>`dist/fonts/**`</li>
          <li>`dist/lib/*/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp dist`</td>
      <td>`gulp build -dist` simple writing</td>
      <td>
        <ul>
          <li>`dist/js/**`</li>
          <li>`dist/css/**`</li>
          <li>`dist/fonts/**`</li>
          <li>`dist/lib/*/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp lib`</td>
      <td>`gulp build -lib` simple writing to compile all independent components</td>
      <td>
        <ul>
          <li>`dist/lib/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -doc`</td>
      <td>Assets required in document compilation</td>
      <td>
        <ul>
          <li>`doc/js/zui*.js`</li>
          <li>`doc/css/zui*.css`</li>
          <li>`doc/fonts/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -theme`</td>
      <td>Compilation theme</td>
      <td>
        <ul>
          <li>`dist/css/zui-theme*.css`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -[build name]`</td>
      <td>Compile independent component package. `[build name]`: package name, e.g. `calendar`, `kindeditor`, `chosen` etc.</td>
      <td>
        <ul>
          <li>`dist/lib/[build name]/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -[control name]`</td>
      <td>Compile independent control. `[control name]`: control name, e.g. `button`, `alerts`, `panels` etc.</td>
      <td>
        <ul>
          <li>`dist/lib/[control name]/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp watch:doc`</td>
      <td colspan="2">Listen document changes in `src/`. Once it is changed, call `gulp build -doc`.</td>
    </tr>
    <tr>
      <td>`gulp watch:dist`</td>
      <td colspan="2">Listen document changes in `src/`. Once it is changed, call `gulp build -dist`.</td>
    </tr>
    <tr>
      <td>`gulp watch:theme`</td>
      <td colspan="2">Listen document changes in `src/`. Once it is changed, call `gulp build -theme`.</td>
    </tr>
    <tr>
      <td>`gulp prettify:js`</td>
      <td colspan="2">Optimize all assets Javascript source files in in `src/`.</td>
    </tr>
  </tbody>
</table>

You can also define your own compilation by editing `gulpfile.js`.

### Customize gulpfile

You can create `gulpfile.custom.js` in ZUI root directory, and then customize gulp in this file.

```js
// File:gulpfile.custom.js
// export function(gulp, $)
module.exports = function(gulp, $) {
    // Customize gulp 'hello'
    gulp.task('hello', function() {
        console.log('hello world!');
    });

    // The second $ includes available functions and data in gulpfile.js
    // $: {
    //     less: less,
    //     cssmin: cssmin,
    //     csscomb: csscomb,
    //     autoprefixer: autoprefixer,
    //     concat: concat,
    //     header: header,
    //     uglify: uglify,
    //     rename: rename,
    //     change: change,
    //     sourcemaps: sourcemaps,
    //     prettify: jsbeautifier
    //     buildBundle: buildBundle,
    //     zui: zui,
    //     pkg: pkg,
    //     del: del,
    //     mkdirp: mkdirp,
    //     runSequence: runSequence
    // }
};
```

<script>
function onPageLoad() {
  return false;
}
function afterPageLoad() {
    if($.doc) {
        $.doc.displayPkgLibTable($('#buildTable'));
    }
    setTimeout($.doc.stopPageLoading, 1500);
}
</script>
