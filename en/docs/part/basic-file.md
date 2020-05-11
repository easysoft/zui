section: basic
id: file
description: Precompiled files and source code structure
icon: icon-sitemap
filter: wenjianmulujiegou wjmljg
---

# Contents

## Precompiled ZUI

Once downloaded, unzip the compressed folder and you’ll see something like this:

```
zui/
├── css/
│   ├── zui.css
│   ├── zui.min.css
│   ├── zui.lite.css
│   ├── zui.lite.min.css
│   ├── zui-theme.css
│   └── zui-theme.min.css
├── js/
│   ├── zui.js
│   ├── zui.min.js
│   ├── zui.lite.js
│   └── zui.lite.min.js
├── fonts/
│   ├── zenicon.eot
│   ├── zenicon.svg
│   ├── zenicon.ttf
│   └── zenicon.woff
└── lib
```

‘zui’, ‘zui.lite’, and ‘zui-theme’ are three types of compilation provided. ‘zui.lite’ is the lite style, and ‘zui-theme’ is the theme style. Minified files are also available(‘*.min.css’). JS files are in js/, font icons are in fonts/, and independent components are in lib/.

## ZUI source code

ZUI source code includes the precompiled CSS and JavaScript assets, along with documents and examples. More specifically, it includes the following and more, if you want to customize your project:

```
zui/
├── src/                       ZUI source directory
│   ├── less/
│   ├── js/
│   ├── fonts/
│   └── apps/                 Custom compilation
├── dist/                      Precompiled distributable directory
│   ├── css/
│   ├── js/
│   └── fonts/
├── docs/                      Documents
│   └── example/              Examples used in documents 
├── assets/                    Assets dependable, including jquery
├── Gruntfile.js               Grunt files
└── index.html                 Document index
```
