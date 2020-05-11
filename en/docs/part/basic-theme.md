section: basic
id: theme
description: 自定义主题风格
icon: icon-leaf
filter: zhuti zt
---

# Theme

<style>
.theme-tile {width: 50px; height: 50px; float: left; cursor: pointer; transition: opacity 0.2s; position: relative; padding: 10px; margin-right: 10px;}
.theme-tile:hover {opacity: 0.9}
.theme-tile > .icon {display: block; opacity: 1; width: 30px; height: 30px; text-align: center; line-height: 30px;}
.theme-tile > .icon:before {opacity: 0; display: block;}
.theme-tile.active > .icon:before {opacity: 1}
body.theme-changing .theme-tile.active > .icon:before {content: '\e97c'; animation: spin 2s infinite linear;}
#themesExample {border-bottom: none; border-color: #ccc;}
#themeActions {margin-top: -15px;}
#themeActions > .toolbar {padding: 5px 10px 10px; border: 1px solid #ccc; border-top: none}
body.lte-ie-9 #themeActions > .toolbar {display: none}
#themeVariablesLess {border-radius: 0}
</style>

ZUI styles are simple and pleasing. You can use ZUI themes to customize for your requirements.

## ZUI Themes

Click the themes below to change the appearance:

<div class="example themes clearfix hl-primary" id="themesExample">
</div>

<div id="themeActions" class="hl-primary copyable">
  <textarea name="themeVariablesLess" id="themeVariablesLess" rows="7" class="form-control copyable-target"></textarea>
  <div class="toolbar">
    <h5>Theme<span id="currentThemeName">default</span></h5>
    <button type="button" class="btn btn-primary" id="downloadThemeCss">Download zui-theme.css</button>
    <button type="button" class="btn" id="downloadThemeLess">Download variables.theme.less</button>
  </div>
</div>

## Recompile ZUI

You can change the appearance of ZUI components by recompiling ZUI.

### ZUI Configuration

Appearance configuration is in `src/less/basic/variables.less`.

You can change Less values to chage the configuration.

### Import Less

Create a LESS file and save it in `src/less/basic/setting.less`.

This file will overwrite the official settings in `src/less/basic/variables.less`.

### Compile Less

Use `gulp dist` to compile ZUI and save the CSS style table in `dist/css/`.

## Customize your theme

### Configuration Files 

Save the configuration files in `src/less/basic/variables.theme.less`.

You can change Less values to chage the configuration.

### Theme Files

Theme files are in `src/less/theme.less`.

You can change theme files to customize the appearance.

### Compile Less

Use `gulp theme` to compile themes and save the compiled CSS style table in `dist/css/zui-theme.css`. Import the style table and the theme will be applied.

<script>
/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */
var saveAs=saveAs||function(view){"use strict";if(typeof navigator!=="undefined"&&/MSIE [1-9]\./.test(navigator.userAgent)){return}var doc=view.document,get_URL=function(){return view.URL||view.webkitURL||view},save_link=doc.createElementNS("http://www.w3.org/1999/xhtml","a"),can_use_save_link="download"in save_link,click=function(node){var event=new MouseEvent("click");node.dispatchEvent(event)},is_safari=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),webkit_req_fs=view.webkitRequestFileSystem,req_fs=view.requestFileSystem||webkit_req_fs||view.mozRequestFileSystem,throw_outside=function(ex){(view.setImmediate||view.setTimeout)(function(){throw ex},0)},force_saveable_type="application/octet-stream",fs_min_size=0,arbitrary_revoke_timeout=500,revoke=function(file){var revoker=function(){if(typeof file==="string"){get_URL().revokeObjectURL(file)}else{file.remove()}};if(view.chrome){revoker()}else{setTimeout(revoker,arbitrary_revoke_timeout)}},dispatch=function(filesaver,event_types,event){event_types=[].concat(event_types);var i=event_types.length;while(i--){var listener=filesaver["on"+event_types[i]];if(typeof listener==="function"){try{listener.call(filesaver,event||filesaver)}catch(ex){throw_outside(ex)}}}},auto_bom=function(blob){if(/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)){return new Blob(["\ufeff",blob],{type:blob.type})}return blob},FileSaver=function(blob,name,no_auto_bom){if(!no_auto_bom){blob=auto_bom(blob)}var filesaver=this,type=blob.type,blob_changed=false,object_url,target_view,dispatch_all=function(){dispatch(filesaver,"writestart progress write writeend".split(" "))},fs_error=function(){if(target_view&&is_safari&&typeof FileReader!=="undefined"){var reader=new FileReader;reader.onloadend=function(){var base64Data=reader.result;target_view.location.href="data:attachment/file"+base64Data.slice(base64Data.search(/[,;]/));filesaver.readyState=filesaver.DONE;dispatch_all()};reader.readAsDataURL(blob);filesaver.readyState=filesaver.INIT;return}if(blob_changed||!object_url){object_url=get_URL().createObjectURL(blob)}if(target_view){target_view.location.href=object_url}else{var new_tab=view.open(object_url,"_blank");if(new_tab==undefined&&is_safari){view.location.href=object_url}}filesaver.readyState=filesaver.DONE;dispatch_all();revoke(object_url)},abortable=function(func){return function(){if(filesaver.readyState!==filesaver.DONE){return func.apply(this,arguments)}}},create_if_not_found={create:true,exclusive:false},slice;filesaver.readyState=filesaver.INIT;if(!name){name="download"}if(can_use_save_link){object_url=get_URL().createObjectURL(blob);setTimeout(function(){save_link.href=object_url;save_link.download=name;click(save_link);dispatch_all();revoke(object_url);filesaver.readyState=filesaver.DONE});return}if(view.chrome&&type&&type!==force_saveable_type){slice=blob.slice||blob.webkitSlice;blob=slice.call(blob,0,blob.size,force_saveable_type);blob_changed=true}if(webkit_req_fs&&name!=="download"){name+=".download"}if(type===force_saveable_type||webkit_req_fs){target_view=view}if(!req_fs){fs_error();return}fs_min_size+=blob.size;req_fs(view.TEMPORARY,fs_min_size,abortable(function(fs){fs.root.getDirectory("saved",create_if_not_found,abortable(function(dir){var save=function(){dir.getFile(name,create_if_not_found,abortable(function(file){file.createWriter(abortable(function(writer){writer.onwriteend=function(event){target_view.location.href=file.toURL();filesaver.readyState=filesaver.DONE;dispatch(filesaver,"writeend",event);revoke(file)};writer.onerror=function(){var error=writer.error;if(error.code!==error.ABORT_ERR){fs_error()}};"writestart progress write abort".split(" ").forEach(function(event){writer["on"+event]=filesaver["on"+event]});writer.write(blob);filesaver.abort=function(){writer.abort();filesaver.readyState=filesaver.DONE};filesaver.readyState=filesaver.WRITING}),fs_error)}),fs_error)};dir.getFile(name,{create:false},abortable(function(file){file.remove();save()}),abortable(function(ex){if(ex.code===ex.NOT_FOUND_ERR){save()}else{fs_error()}}))}),fs_error)}),fs_error)},FS_proto=FileSaver.prototype,saveAs=function(blob,name,no_auto_bom){return new FileSaver(blob,name,no_auto_bom)};if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){return function(blob,name,no_auto_bom){if(!no_auto_bom){blob=auto_bom(blob)}return navigator.msSaveOrOpenBlob(blob,name||"download")}}FS_proto.abort=function(){var filesaver=this;filesaver.readyState=filesaver.DONE;dispatch(filesaver,"abort")};FS_proto.readyState=FS_proto.INIT=0;FS_proto.WRITING=1;FS_proto.DONE=2;FS_proto.error=FS_proto.onwritestart=FS_proto.onprogress=FS_proto.onwrite=FS_proto.onabort=FS_proto.onerror=FS_proto.onwriteend=null;return saveAs}(typeof self!=="undefined"&&self||typeof window!=="undefined"&&window||this.content);if(typeof module!=="undefined"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!=="undefined"&&define!==null&&define.amd!=null){define([],function(){return saveAs})}

function downloadFile(fileName, content){
    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    saveAs(blob, fileName);
}

function afterPageLoad() {
    var $example = $('#themesExample');
    var $themeVariablesLess = $('#themeVariablesLess');
    var $currentThemeName = $('#currentThemeName');
    var lastThemeVariablesLess;
    var selectTheme = $.zui.store.get('doc_theme', 'default');
    $.each($.doc.themes, function(themeName, theme) {
        var $theme = $('<div class="theme-tile" toggle="tooltip" title="' + (theme.title || themeName) + '"><i class="icon icon-ok"></i></div>');
        $theme.attr('data-theme', themeName);
        $theme.css({
          'background-color': theme.variables['color-primary'],
          'color': theme.variables['color-pale'],
          'border-radius': theme.variables['border-radius-base']
        });
        $theme.find('.icon').css({'background-color': theme.variables['color-secondary'], 'border-radius': theme.variables['border-radius-base']});
        $theme.toggleClass('active', themeName === selectTheme || themeName === selectTheme.name);
        $example.append($theme);
    });

    $example.find('[toggle="tooltip"]').tooltip();

    $example.on('click', '.theme-tile', function() {
        var $theme = $(this);
        $example.children('.theme-tile.active').removeClass('active');
        $theme.addClass('active');
        var theme = $.doc.themes[$theme.data('theme')];
        lastThemeVariablesLess = $.doc.compileThemeVariables(theme).variablesLess;
        $themeVariablesLess.val(lastThemeVariablesLess);
        $currentThemeName.text(theme.title || theme.name);
        $.doc.changeTheme(theme);
    });

    var compileCustomTask;
    var compileCustomTheme = function() {
        $example.children('.theme-tile.active').removeClass('active');
        lastThemeVariablesLess = $themeVariablesLess.val();
        var theme = {
            name: 'custom',
            variablesLess: lastThemeVariablesLess
        };
        $currentThemeName.text('自定义');
        $.doc.changeTheme(theme);
    };

    lastThemeVariablesLess = $.doc.compileThemeVariables(selectTheme).variablesLess;
    $currentThemeName.text(selectTheme.title || selectTheme.name);
    $themeVariablesLess.val(lastThemeVariablesLess).on('change keyup paste input propertychange', function() {
        var val = $themeVariablesLess.val();
        if(!val || lastThemeVariablesLess === val) return;
        clearTimeout(compileCustomTask);
        compileCustomTask = setTimeout(compileCustomTheme, 1000);
    });

    $('#downloadThemeLess').click(function() {
        var today = new Date();
        var pkg = $.doc.pkg;
        var banner = ('/*!\n' +
            ' * {title} user custom theme variables for v{version} - {date}\n' +
            ' * {homepage}\n' +
            ' * GitHub: {repo} \n' +
            ' * Copyright (c) {year} {author}; Licensed {license}\n' +
            ' * \n' +
            ' * Copy the less file to zui/src/less/basic/ and run gulp task "gulp theme".\n' +
            ' */\n\n').format({
            title: pkg.title || pkg.name,
            version: pkg.version,
            date: today.format('YYYY-MM-dd'),
            homepage: pkg.homepage,
            repo: pkg.repository.url,
            year: today.format('YYYY'),
            author: pkg.author,
            license: pkg.license
        });
        downloadFile('variables.theme.less', banner + $themeVariablesLess.val());
    });

    $('#downloadThemeCss').click(function() {
        var today = new Date();
        var pkg = $.doc.pkg;
        var banner = ('/*!\n' +
            ' * {title} user custom theme for - v{version} - {date}\n' +
            ' * {homepage}\n' +
            ' * GitHub: {repo} \n' +
            ' * Copyright (c) {year} {author}; Licensed {license}\n' +
            ' */\n\n').format({
            title: pkg.title || pkg.name,
            version: pkg.version,
            date: today.format('YYYY-MM-dd'),
            homepage: pkg.homepage,
            repo: pkg.repository.url,
            year: today.format('YYYY'),
            author: pkg.author,
            license: pkg.license
        });
        $.doc.compileTheme({
             name: 'custom',
             imports: ["src/less/basic/colorset.less", "src/less/basic/variables.less", "src/less/basic/mixins.less", "src/less/theme.less"],
             variablesLess: $themeVariablesLess.val()
        }, {compress: false}, function(style) {
            downloadFile('zui-theme.css', banner + style.css);
        });
    });
}
</script>

