# 文件列表

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"file-list","summary":"展示本地或服务器文件，支持四种布局、图标、标签、缩略图和悬停预览。","keywords":["文件列表","FileList","附件","缩略图","文件网格"]}
```

## overview

展示本地 File 或已有附件元信息，支持列表、卡片和网格、标签、文件图标及缩略图悬停预览。不负责上传、下载请求或权限，动作由 fileUrl/fileActions 接入。

## setup

workspace `@zui/file-list` 为原生 FileList、类型、注册和样式；`@zui/file-list/react` 为 Preact FileList、类型，也自动加载样式。无 /css 公共入口。样式依赖 css-icons/label/utilities，视图依赖 list/avatar/popover。browser 使用含相关依赖的 JS/CSS。

## vanilla

### vanilla-file-list

```json
{"name":"FileList","summary":"在容器显示文件集合。"}
```

`new FileList(selector, options?:Partial<FileListProps>)`。render(options?,reset?) 更新；$ 为视图；destroy 卸载；FileList.get(selector) 查已有实例。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)。

workspace：

```ts
import {FileList} from '@zui/file-list';
const container = document.createElement('div');
document.body.append(container);
const files = new FileList(container, {items: [{file: new File(['正文'], 'notes.txt', {type: 'text/plain'})}]});
// 页面卸载时：files.destroy(); container.remove();
```

## preact

### preact-file-list

```json
{"name":"FileList","summary":"List 派生的文件视图，自动规范文件元信息。"}
```

workspace（需配置工作区别名、TypeScript 与 Preact JSX）：

```tsx
import {render} from 'preact';
import {FileList} from '@zui/file-list/react';
const container = document.createElement('div');
document.body.append(container);
render(<FileList items={[{file: new File(['内容'], 'notes.txt')}]} mode="cards" />, container);
// 页面卸载时：render(null, container); container.remove();
```
ref 为类实例，列表查询、激活、复选和加载方法见 [List](../list/ai.md#preact-list)。默认 div 根/条目。从 File 填充标题、大小、路径及小写扩展名；无 id 自动生成并按对象身份复用。默认不显示图标/缩略图。创建的图片 Object URL、悬停 Popover 和监听在更新/卸载时清理；调用方提供的远程 URL 不由组件撤销。children/列表状态继承 List。

## web-components

无。

## css

### css-file-list

```json
{"name":"文件列表和视图部件","summary":"根据 mode 和 thumbnail 配置输出的布局。","role":"js-component"}
```

.file-list-item .item-title 为裁剪标题；.file-list-tags > .label 为换行标签。cards 根 .file-list-cards 纵向间距，条目 .file-list-card > .listitem 有边框/阴影；cards-inline 额外横向换行。grid 根 .file-list-grid 换行 flex，.file-list-grid-cell > .listitem 纵向排列和固定宽度，动作定位右上角；hoverItemActions 同时支持 hover/focus-within 显示。has-thumbnails/has-thumbnail 表示缩略图状态。修改 mode/thumbnail props，而非手改类。

## css-variables

### css-file-list-vars

```json
{"name":"网格与头像变量","summary":"设置文件网格尺寸。"}
```

`--file-list-grid-cell-width` 和 `--file-list-grid-gap` 在 grid 模式由根内联 style 写入，默认 120px/8px；用 gridCellWidth/gridGap 配置。`.file-list-grid` 声明 `--avatar-radius:var(--radius-md)`，可在该根覆盖。非 grid 模式没有这两个网格变量的本库默认值。

## javascript

### javascript-file-icons

```json
{"name":"FileList.getFileIcon / getFileIconMap / fileIconOfTypes","summary":"Preact 类静态文件图标映射工具。"}
```

仅在 /react 的 FileList 类上。`getFileIcon(file:FileInfo, setting:FileIconSetting):IconType|null`：false/空值返回 null；字符串原样作为图标；函数调用返回图标；映射按 extension 查找，缺失回退 'file'。不自动从 fileIconOfTypes 开启映射。

`getFileIconMap(groups?:Record<string,string[]>):FileIconMap` 将图标→扩展名数组反转成扩展名→图标，默认使用静态 fileIconOfTypes，不修改输入。默认组包括 file-image（png/jpg/jpeg/gif/bmp/webp/tiff/ico/svg）、file-audio（mp3/wav/flac/ogg/m4a/wma/aac/aiff/alac）、file-video（mp4/avi/mkv/mov/flv/wmv/webm）、file-archive（zip/rar/7z/tar/gz/bz2/xz）、file-code（js/ts/jsx/tsx/html/css/scss/less/json/xml/yml/yaml/toml/ini）、markdown（md/markdown）、file-pdf（pdf）、file-word（doc/docx）、file-excel（xls/xlsx）、file-powerpoint（ppt/pptx）、file-text（txt/csv/log）。

workspace：`const icons = FileList.getFileIconMap()`，FileList 来自 `@zui/file-list/react`；再传 `fileIcon={icons}`。内置图标名解析为本地 SVG，自定义字体名需应用加载资源。

## types

### types-file-list-props

```json
{"name":"FileListProps 与图标类型","summary":"文件显示专有配置，其他行为继承 ListProps。"}
```

`FileListProps<T extends FileInfoLike=FileInfoLike> extends ListProps<T>`；以下均可选：

| 参数 | 类型 | 默认值 / 说明 |
| --- | --- | --- |
| mode | 'list'或'cards'或'cards-inline'或'grid' | 未指定时列表 |
| heading | string 或 ListitemProps | 无；字符串作为标题条目 |
| renderTag | (tag:string)=>CustomContentType 或 Record<string,CustomContentType> | undefined 使用 label，null/false/空串隐藏该标签 |
| fileIcon | false 或 string 或 FileIconMap 或 FileIconGetter | false；映射类型 Record<string,IconType>，getter=(file:FileInfo)=>IconType |
| thumbnail | boolean 或 Partial<AvatarOptions> | false；显示图片/回退图标 |
| thumbnailPreview | boolean 或 {maxWidth?:number;maxHeight?:number;placement?:PopoverOptions['placement']} | false；需要 thumbnail；最大宽高各200px，位置 top-start |
| getThumbnail | (file:T&FileInfo)=>string | 无；空串回退文件 thumbnail 或本地图片预览 |
| fileSizeFormat | false 或 string | '{size}'；false 当前仍保留 formatBytes 文字，只关闭外层模板，不隐藏大小 |
| gridCellWidth / gridGap | number | 120 / 8，像素；gridGap 支持 0 |
| fileUrl | string 或 (file:T&FileInfo)=>string | 无；字符串代入文件字段 |
| fileActions | (file:T&FileInfo)=>ListitemProps['actions'] | 无；单文件动作 |
| itemProps | Partial<T> & ListitemProps | 无；覆盖生成的条目属性 |

getItem/itemRender/beforeRenderItem/onClickItem 使用规范化后的 T&FileInfo&Item，其他字段和回调见 [ListProps](../list/ai.md#types-list-props)。FileListMode、FileInfoLike、FileIconSetting、FileIconGetter、FileIconMap 都是公开类型。
### types-file-info

```json
{"name":"FileInfo / OriginFileInfo / FileInfoLike","summary":"服务器文件和原生 File 的输入结构。"}
```

FileInfo 必需：title:string、size:number（字节）、pathname:string、addedBy:string、addedDate:string。可选 id:number|string、extension:string、thumbnail:string、downloads:number、deleted:boolean、file:File、tags:string|string[]。OriginFileInfo=Partial<FileInfo>&{file:File}；FileInfoLike 为两者联合。tags 字符串视为一个标签不按分隔符拆分，空白标签忽略。extension 默认从 File.name 或 title 最后一个扩展名推导并小写。

## recipes

### recipe-file-grid

```json
{"name":"带缩略图的网格","summary":"启用网格和图片预览。"}
```

workspace，复用 files：`files.render({mode: 'grid', thumbnail: true, thumbnailPreview: true, gridCellWidth: 140})`。原生 File 图片会生成临时预览 URL；非图片可配 fileIcon。

## constraints

- 文件列表不上传文件，也不自动实现删除；deleted 是数据字段，业务操作由应用负责。
- fileSizeFormat=false 不隐藏大小，需 itemProps.subtitle 或自定义渲染明确覆盖。
- 卸载时调用 destroy，避免保留图片 URL 与预览资源。

## references

- [入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/file-list/package.json>)、[实现](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/file-list/src/component/file-list.tsx>)、[数据类型](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/file-list/src/types/file-info.ts>)、[选项](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/file-list/src/types/file-list-props.ts>)、[样式](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/file-list/src/style/index.ts>)
