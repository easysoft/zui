# Releases

## v 1.9.2

[2020-07-09]

This release is to fix bugs and to optimize features.

ZUI official website is https://www.openzui.com/ and English version is available[English Manual(https://www.openzui.com/en/ )](https://www.openzui.com/en/ )。

### Changelog

* CSS basics and helper classes
  * Optimized the style of dropdown triangles and reduced the opacity.
  * Added `text-wrap` and `text-nowrap` to set the style of breaking lines.
* Rich text editor(KindEditor)
  * Optimized the style of the placeholder.
  * Optimized the interaction of pasting images; it is forbidden to submit forms when uploading an image.
  * Optimized code autoformat; an ankor in a link is not missed, e.g. `<a href="#heading1" />`.
  * Fixed the invalid setting of box sizes of popout windows.
  * Fixed the invalid selected cells by tab if cells are merged.
  * Fixed the invalid switching to other cell elements by tab.
  * Fixed the invalid canceling after pasting images.
  * Fixed the incorrect display of the right-click menu of a cell.
* Switch, checkbox and radio
  * Optimized the background color of switches and advanced checkbox and radio([issue #156](https://github.com/easysoft/zui/issues/161))
* Input-group
  * Optimized the box style of using several `.input-group-addon`.
* Nav
  * Enhance basic style for navs, use `.nav`, `.nav.nav-default` or `.nav.nav-simple`.
* Icon
  * Optimized the baseline height of font icons to ensure the center-alignment of mixed fonts and icons.
  * Removed `icon-renren` icon.
* Dropdown
  * Optimized the shadow of a dropdown.
  * Fixed the invalid display of dropdowns unders some conditions.
* Form
  * Optimized the look of the dropdown triangle `<select>` in macOS.
* Chosen
  * Added `no_wrap` to forbid breaklines in dropdown texts and set is off by default.
  * Added `sort_field` and `sort_value_splitter` to record the order of checkbox being selected.
  * Added `drop_item_height` to set the height of dropdown options, the dropdown style, and the popout direction. This option is auto calculated, and the height has to be set if CSS is changed.
  * Optimized `change` parameters. When a user does reverse select, the second parameter of `deselected` will be callback via the event.
  * Optimized the style of the clear button, the dropdown and the interaction of the dropdown.
  * Fixed the invalid global default setting option `$.fn.chosen.Constructor.DEFAULTS`.
  * Fixed the invalid initial setting option `middle_highlight` when `max_drop_width` is on.
* Context menu
  * Added an intial option `className` to name elements of a popout menu.
  * Optimized `html` for menu items. If specified, HTML text will be used to create menu items, rather than the text of menu items. It is convenient for users to create any interactive menu items.
* Modal and modal trigger
  * Added `$.zui.reloadModal(urlOrOptions, modalID)` to reload the content on the specified remote dialog. When the dialog content is reloaded, a loading prompt animation will be displayed.
  * Fixed the issue that the content of the pre-update dialog may still be retained on the dialog after dynamically updating the content of the remote dialog.
  * Fixed the issue that `$.fn.show()` and `$.zui.ModalTrigger.DEFAULTS` cannot be used at the same time.
  * Fixed the issue that `scrollInside` is not working sometimes and optimized it for browse window changes.
  * Fixed the issue that it fails to load iframe and no valid HTML string is called back when listening `broken`.
  * Fixed the issue that `modal-scroll-inside` error when `scrollInside` is on([issue #168](https://github.com/easysoft/zui/issues/168)).
* Tree
  * Added `'active'` to `initialState` to activate all nodes and their parent nodes(make active nodes visible).
  * Added `$.fn.expandSelect(selector)` to expand a node and its parent node.
* Messager
  * Optimized the look displayed with icons.
  * Optimized global default options. `$.zui.Messager.DEFAULTS.icons` can be used to preset icons.
* Image cutter
  * Added `onSizeError`. If the image size is not consistent with `minWidth` and `minHeight`, `{width, height}` will be called back to remind the user to change it.
* Progress bar
  * Optimize the style. Internal color blocks now have rounded appearance.
* Calendar
  * Added `hideFirstDayNumber` to hide the first day of a month(January, not January 1).
  * Fixed misspelling caused `$.fn.removeEvents()` issue ([@JIMhackKING](https://github.com/JIMhackKING) [issue #157](https://github.com/easysoft/zui/issues/157)).
* Load indicator
  * Optimized the style used with icons.
  * Optimized the style of the overlay and reduced the opacity.
* Uploader
  * Optimized the fault tolerance of JSON content called back by a remote server. It is deemed as uploaded, if no specified `status` or `result` in JSON.
  * Fixed the IE browser compatibility.
* Datagrid 2
  * Added `onClickCell` to listen clicking cells.
  * Fixed description error in `gotoPage` document([issue #156](https://github.com/easysoft/zui/issues/156)).
  * Fixed the conflict between mouse hovering and interlaced colors.
* Datagrid
  * Optimized updating large data performance and disabled the animation.
  * Fixed the horizontal scroll bar in the flexible area is 1-pixel offset.
* JavaScript helper methods
  * Reconstruct `$.zui.uuid()`. The string length is 12 and was 10.
  * Fixed the issue that `$.zui.browser` checks IE11.
* jQuery
  * Built-in jQuery `3.4.1`. `1.12.4` is still valid.
* Globalization
  * If no language is not specified in `lang` of `<html>`, English is set by default.
* Theme
  * Fixed the issue that the checkbox color is not applied in a theme selected.
* Document
  * Added English document https://www.openzui.com/en/
  * Corrected misspelling in the document.

## v 1.9.1

[2019-05-10]

Greatly optimized Kindeditor Interactive experience，Redo Kindeditor Internal table function。

### Update details

* CSS basis：
  * improved Default font list，adjusted“Microsoft Yahei”Font weight，Place it at the end of the font list，increased “Siyuan Blackbody” with “Siyuan Song”；
* Rich text editor（Kindeditor）：
  * Redo Table editing function，Contains the following key features：
    * Redo Toolbar icon，Optimized insert table interaction experience，Now click on the table icon button，Pop up row and column selection panel，Quickly insert a table by sliding the mouse to select the number of table rows and columns to insert，After inserting the form，The cursor will automatically be placed in the first cell；
    * New by <kbd>Tab</kbd> Key to switch the function of the cursor in the cell，A new line is automatically created when the cursor is already in the last cell in the table，And move the cursor to the first cell of the new line；
    * New Select multiple cell features，Allow the following methods to perform multiple selection operations：
      * Click on the left side of the first cell of each row to quickly select all cells on the entire row.；
      * Click on the top side of the first cell of each column to quickly select all cells on the entire column.；
      * Click and hold on one cell and drag to another cell，You can select all cells in the range of the drag and drop rectangle；
    * New Ability to apply styles or actions to selected cells，Currently supports the following operations：
      * Merge all selected cells；
      * Delete the row or column of all selected cells；
      * Operation on text base styles，Including bold、Underline、Strikethrough、Font、Text color, background color, etc.；
      * Operation on content alignment，Including left、Centered、Waiting right；
      * Change operation on content type，Including switch list type, etc.；
    * Redo Table cell style settings dialog style，Added settings for cell border size and text color；
    * optimization Table style settings，Styles such as borders and interlaced colors are now applied directly to the cell.，Instead of passing CSS Class name，Avoid in ZUI Lost style if the base style is missing；
    * optimization The item on the right-click menu，Does not display when some items are not available in certain situations，For example, it does not appear when the cursor is on the last line.“Merge cells down”Menu Item；
    * optimization The interaction of inserting a table into a table，Support for editing nested tables；
    * repair Sometimes right click on the cell，There is no problem with cell-related menu items on the pop-up context menu.；
  * New by `placeholder` Option for the editor to set and display placeholder text when there is no content；
  * New by `pasteImage` Option to implement automatic map upload function；
  * New by `spellcheck` Option to enable or disable spell checking；
  * New by `transferTab` Option disables editor <kbd>Tab</kbd> Key insertion space function，Instead, implement the activation editor on the page one form control；
  * New by `syncAfterBlur` Option implementation automatically performs synchronization when the editor loses focus（`sync()`）operating；
  * New by `simpleWrap` Options to optimize source formatting，When this option is `true` Time，Block-level element content in source code does not appear as a new line；
  * optimization Form indentation style，Now indented by default 2 Space，Instead of Tab；
  * optimization Preview interface style；
  * repair Can&#39;t pass `themeType` Option to specify a problem with the theme style sheet；
* Chosen：
  * New `max_drop_width` Option，Used to enable automatic adjustment of the drop-down menu width based on the text length of the drop-down menu item（[STORY #220](https://zui.5upm.com/story-view-220.html)）；
  * New `highlight_selected` Option，Used to make the selected item on the drop-down menu always have a highlight effect，And distinguish it from the effect when hovering over the mouse（[STORY #217](https://zui.5upm.com/story-view-217.html)）；
* Data table2：
  * repair in `height` Set as `page` The problem that the mouse cannot scroll（[BUG #28](https://zui.5upm.com/bug-view-28.html)）；
* Form：
  * optimization Up `<select>` in macOS Forced to have a rounded appearance on the system；
* Dialog（`modal`）：
  * repair In extreme cases, the browser console appears `e.preventDefault is undefined` error。

## v 1.9.0

[2019-03-04]

New <a href="http://zui.sexy#control/loading" target="_blank">Load indicator</a>，And solved the known problem。

### Update details

* New <a href="http://zui.sexy#control/loading" target="_blank">Load indicator</a>；
* CSS basis：
  * repair Up `.clearfix` Declare duplicate questions（[issue #99](https://github.com/easysoft/zui/issues/99)）；
  * optimization Link `<a>` And default on button elements CSS Animation effect，Now only for the part CSS Attributes（E.g `color`、`background` Wait）Enable animation；
* Auxiliary class：
  * New `.no-margin` Auxiliary class is used to force the removal of the margin of the element；
* Grid：
  * New `.col-1`、`.col-2` ~ `.col-12` Auxiliary class，Used for quick width settings，But does not provide responsive effects；
* Button：
  * optimization Button appearance，Text shadow style removed，Make it flatter；
* switch：
  * optimization Style when activated；
* Multiple selection and radio button；
  * New Advanced look and feel instead of native style on the browser；
* Dialog and dialog triggers：
  * New `scrollInside` The option is to set whether to display the scroll bar inside the dialog box when the height of the dialog box is not enough.；
  * optimization `position` Option，Support for using a function to dynamically return the position when the dialog was opened；
  * repair In rare cases, the contents of the remote dialog box are not displayed correctly.；
  * repair Automatically adjust the height of the dialog box to keep shaking in extreme cases；
* navigation：
  * New `.nav-default` Class to provide basic navigation styles，Easy to customize personalized navigation；
* Drop-down menu：
  * repair In some cases, when the submenu is displayed to the left, the position is incorrect.（[@Night wind](http://forum.zui.sexy/thread/453.html)）；
* Color selector：
  * repair Up `updateColor` Option invalidation；
* search bar：
  * optimization Interface interaction，Now click the Clear button to automatically activate the input box.；
  * repair Up `onKeyDown` Event invalidation；
* Chosen：
  * New `saerch_compact` Option for applying a more compact radio selection box appearance，The search box is merged with the selection box to display；
  * optimization style，Now if the original form element has `.form-control` class，Customize Chosen The width of the control is set to `100%`；
  * repair Very few cases，display Chosen There is no problem with the search box being activated after the drop-down panel；
  * repair In some cases, the radio button drop-down list keeps scrolling.；
* Rich text editor：
  * optimization Kindeditor Interface style，Removed animation effects to improve performance；
  * repair Kindeditor Bottom horizontal scroll bar sometimes can&#39;t click；
  * repair Kindeditor in IE11 The problem of pasting content is always pasted to the end of the content；
* File Upload：
  * New `autoResetFails` Option to automatically reset uploaded failed files；
  * `plupload` upgrade to `2.3.6`；
* Tree menu：
  * optimization DOM structure，When a node（`<li>`）When activated（have `.active` class），Automatically added on the active parent node `.has-active-item` class，Easy to customize advanced look；
* Pager：
  * repair Get the default language invalidation problem；
* Data table：
  * optimization Build a data table function from the original form，Will now keep the original table cells `title` Attributes；
  * repair In Safari The scrollable area on the browser shows an incorrect question；
  * repair The scrollable area horizontal scroll bar sometimes has 2 Pixel is not aligned；
* Data table2:
  * New `onSelectRow` event，Used to monitor row selection status changes；
  * repair sometimes `showRowIndex` The option did not work as expected；
  * repair When using a remote data source, sometimes the request for data twice to the server after initialization is complete；
  * repair On the cell data object `value` Attribute is `undefined` When displayed on the interface as `'undefined'` The problem，Now instead of showing anything；
  * repair The problem that the interface is garbled when the scroll bar is no longer re-rendered by default position；
* Article view：
  * optimization Multiple styles of horizontal display；
* calendar：
  * New `resetData(data)` Method to reset calendar data；
  * New `eventSorter` Option，Used to specify a callback function to compare two event objects，Sort events every time the calendar is rendered；
* Tab manager：
  * repair `reopen()` Method sometimes does not work；
* Drag and drop sort：
  * New `dropToClass` with `stopPropagation` Option；
* Drag and drop selection：
  * New `listenClick` Option，If set to false，Then the user clicks on the element but does not select anything when there is no drag operation.；
* Auxiliary tool：
  * optimization `$.zui.uuid()` method，Now the method will useß 36 Binary string instead of number，Reduce the length of the result；
  * optimization `$.zui.Color` Construction method，stand by RGB Color string format，E.g `new $.zui.Color('rgba(255,0,0,0.5)')`；
* theme：
  * repair The custom theme does not include the appearance of the scrollbar。

## v 1.8.1

[2018-01-18]

Solved the problem of community feedback in the past two weeks。

### Update details

+ Data table2:
  * Fixed `responsive` Options and `checkbox` Option to enable conflicting issues at the same time[@YNZZZ](http://forum.zui.sexy/thread/417.html)）；
  * Fixed `configs` middle `html` Attribute and column configuration `html` Property is set to `true` When there is no problem（[@YNZZ](http://forum.zui.sexy/thread/422.html)）；
  * Fixed Column configuration `valueOperator` Did not work as expected，At the same time, it fixes the problem that the parameters in the value conversion period function are incomplete.（[@zz](http://forum.zui.sexy/thread/419.html)）；
  * Fixed The default date value conversion period does not work as expected（[@YNZZZ](http://forum.zui.sexy/thread/417.html)）；
  * Fixed `checkByClickRow` with `selectable` Option conflict，when `checkByClickRow` When disabled，If you turn on drag and drop selection，You can only drag and drop in the column of the check box.（[@YNZZZ](http://forum.zui.sexy/thread/416.html)）；
  * Fixed Windows The upper roller is in the opposite direction，The problem that the scroll distance is too small，And added `mouseWheelFactor` Parameters are used to control the scrolling speed and direction of the wheel；
  * Fixed When the data is not defined `id` or `rowId` Get the selected row number as `undefined` The problem；
  * Fixed `showRowIndex` Set as `false` Column width confusion；
  * improved Cache mechanism，The default cache size is now `1`；
  * improved Line number column width automatic calculation method，Avoid problems with ellipsis sometimes（[@Xu Yelong](http://forum.zui.sexy/thread/424.html)）
+ Data table1:
  * Fixed After enabling local storage，The sort operation direction is not displayed in the expected order，See issue #79；
+ Context menu：
  * Fixed `html` The option is set to `true` Did not work as expected；
+ Button group：
  * Fixed Vertical button group in the upper right corner is rounded at right angles；
+ Auxiliary class：
  * increased `.no-padding` Class is used to remove all padding of elements；
+ Date selector：
  * improved internal `input-group-addon` The left border has a double width problem；
+ calendar：
  * will `hideEmptyWeekends` The default value is set to `false`；
+ Picture Viewer：
  * increase `setImage(image, caption)` with `show()` Method for manual control of display and update content（QQ group @Shenzhen Renault Watch Industry-it）；

thank [@neo20](https://github.com/easysoft/zui/pull/94)、[zora-han](https://github.com/easysoft/zui/pull/93) submitted Pull Request。Welcome feedback，Best is in[Forum post](http://forum.zui.sexy/forum/)or[in Github Submit on issue](https://github.com/easysoft/zui/issues)，More capable students are welcome[submit Pull Request](https://github.com/easysoft/zui/pulls)。

## v 1.8.0

[2018-01-05]

1.8 Version brings a lot of new JS Component，Including new<a href="http://zui.sexy#view/datagrid" target="_blank">Data table2</a>、<a href="http://zui.sexy#view/tabs" target="_blank">Tab manager</a>、<a href="http://zui.sexy#javascript/contextmenu" target="_blank">Context menu</a>、<a href="http://zui.sexy#javascript/searchbox" target="_blank">search bar</a>、<a href="http://zui.sexy#component/input-control" target="_blank">Input box</a>with<a href="http://zui.sexy#javascript/pagerjs" target="_blank">Pager</a>。

### New feature preview

* Data table2Support for custom data sources（Including remote data），Provide row and row fixed、Sort、Pagination、search for、Row selection、Adaptive、Heavyweight functions such as cross-row and column cells，And flexible and convenient to customize（Old version data tables will no longer continue to support，Will 1.9 Eliminated）；
* Tab Manager maximizes tab control functionality，You can now dynamically load content using tabs，Even remote page numbers，Can also be opened manually、Close tab，Just as easy as using a browser tab；
* The context menu allows you to pop up a menu that floats near the mouse cursor anywhere，Very convenient to listen to the right mouse button and shield system behavior to customize your own right-click menu；
* The pager provides fully automated paging interface control management，Just give the current page number and the number of entries.；
* The search box provides a common search input box+Button combination interface，And provide a delayed trigger event for listening to the search box text change event，Use the search box to easily customize the modern word search interaction function；
* The input box creates a modern form of built-in labels and icons into the input box，Create a more beautiful form interface。

### Update details

+ New <a href="http://zui.sexy#view/datagrid" target="_blank">Data table2</a>；
+ New <a href="http://zui.sexy#view/tabs" target="_blank">Tab manager</a>；
+ New <a href="http://zui.sexy#javascript/contextmenu" target="_blank">Context menu</a>；
+ New <a href="http://zui.sexy#javascript/pagerjs" target="_blank">Pager</a>；
+ New <a href="http://zui.sexy#javascript/searchbox" target="_blank">search bar</a>；
+ New <a href="http://zui.sexy#component/input-control" target="_blank">Input box</a>；
+ tooltip：
  * repair Triggered event name；
+ icon：
  * optimization Up `icon-check-plus` with `icon-check-minus` icon，It looks bigger now；
  * repair Icon rotation auxiliary class in IE8 Problem implemented in；
+ Input group：
  * repair `.fix-padding` in IE8 Invalid problem；
+ File Upload：
  * optimization Support for server return value，When the server returns a field that contains `name` The file name on the interface is automatically updated when the property is；
  * optimization Display the uploaded message，Multiple messages will now be merged；
  * optimization For static files（`staticFiles`）Support，Now the number and size of static files will be calculated in the prompt.；
  * repair `renameActionOnDone` Callback function execution parameter `doRenameFile` Invalid method；
  * repair The error message returned after the upload is completed does not show the problem；
  * repair Seven cattle upload can not be used；
  * repair File upload button at IE10 The following browsers are unable to click on the issue；
+ chart：
  * repair Graph call `addData()` Method when displaying mouse hover tag error；
+ Chosen：
  * optimization Search strategy，Search now `<option>` Up `value` Attributes；
  * optimization when `drop_direction` The option is set to `'auto'` Time，The pop-up direction will not change with the number of entries.；
  * repair When the user clicks on one allows the user to scroll inside the container chosen Automatically change the position of the parent element&#39;s scroll position；
+ Modal box：
  * optimization `moveable` Option，When set to `'inside'` Does not allow the user to move the modal box outside the visible area of the window；
+ Modal box trigger：
  * repair `className` Option invalidation；
  * repair Sometimes when the user clicks on the link to trigger the execution in the text JavaScript Code problem；
  * repair `broken` The error text content returned in the event is not displayed.；
+ Drag and drop：
  * optimization Support for drag and drop decisions，increase `canMoveHere` Option；
  * optimization `move` Option，Now you can use a callback function to perform the move operation；
+ Drag and drop sort：
  * optimization Drag and drop initialization options，Increase the pair `lazy`、`canMoveHere`、`nested` Option pair support；
  * repair `start` Event parameters are not available in the event `event` The problem；
  * repair `destroy` Invalid question；
  * repair Newly added items cannot be sorted；
+ Tree menu：
  * optimization Icon，It looks like the icon is bigger now.；
+ Organization Chart：
  * repair Sometimes the connection line is drawn incorrectly；
  * optimization The default color of the icon；
  * optimization Node object structure，stand by `foldable` Property to set whether the node can be collapsed；
+ calendar：
  * optimization The area where the interface responds to the drag and drop event when dragging and dropping to the date，Now drag and drop to any location on the date cell.；
  * optimization Correct `dragThenDrop` Option support，Now you can use an object to initialize the drag and drop plugin；
  * optimization Support for the interface last weekend，use `hideEmptyWeekends` Option to collapse the weekend column；
+ Floating message：
  * repair Up `contentClass` Option invalidation；
+ Form：
  * repair in Android Check box and radio box location issues；
+ Equipment detection aid：
  * increase Detection function for the operating system，in `<html>` Will be added automatically `os-win` or `os-mac` Auxiliary classes are used to apply styles to different operating systems；
+ theme：
  * increase Pair of switches、Support for components such as tree menus，Optimized the appearance of buttons in the theme when pressed；
+ other：
  * Removed `svg` label `max-width` Style setting，Avoid causing conflicts in some map controls。


## v 1.7.0

[2017-06-19]

This update fixes key components such as file uploads. bug，Added a new view：Organization Chart，Easily draw multi-level tree organization chart，Support node dynamic update and hierarchical folding control。

### Update details

* Organization Chart：
  - Increase the organization chart view，Easily draw multi-level tree organization chart，Support for update and fold control；
* icon：
  - Added some new icons：`.icon-plus-sign-alt`，`.icon-check-plus`，`.icon-chanzhi`，，`.icon-chanzhi-pro`，，`.icon-zsite`，，`.icon-zsite-pro`；
* File Upload：
  - Fix when renaming is enabled，Do not display the delete button；
  - repair `multipart_params` Invalid option setting；
  - When option `multipart_params` For function time，The callback function will use the current file object as the first argument，Default value as the second parameter；
  - File download button will be used `download` Attribute specifies the file download file name；
  - When file extension renaming is disabled（`renameExtension` Set as `false`），Do not display extensions when renaming；
  - Fixed an issue where the file list was not updated after sometimes renaming；
* Auxiliary class：
  - You can now add text colors using color-named helper classes、Background style，include（`.text-red`，`.text-green`，`.bg-yellow`，`hl-blue` Wait）；
* Dialog trigger：
  - Support use `className` Option to specify additional dialogs for the generated dialog CLASS Attributes；
* chart：
  - Pie chart supports setting the line height of external text labels（use `scaleLineHeight` Option）；
  - Fixed chart pair ZUI Independent component `colorset.js` Dependence，Now quickly specify the chart color matching does not need to be introduced separately `colorset.js` Plugin；
* Data table：
  - increase `fixCellHeight` Option to disable automatic line height adjustment（Line height can be used CSS set up，So avoiding the performance of each automatic calculation），The default is `true`（Enable automatic adjustment，Behaves consistently with previous versions）；
* dash board：
  - Repair panel configuration `panelAttrs` with `colAttrs` Invalid option；
* Color processing：
  - `$.zui.Color` Class add class method `get(colorName)`，Used to quickly create a new color instance；
* Drag and drop、Drag and drop、Drag and drop selection、Drag and drop sort：
  - increase `mouseButton` The option is to specify which mouse button to click to start the drag and drop operation.；
  - Drag and drop sort repair call `destroy()` Method error；
* Input group：
  - Optimize the rounded border effect of the input group in a compact form；
* Document：
  - Added documentation for all independent components `lib` Tips for resources under the directory；
  - Used by the documentation website ZUI No longer customized separately，Use now ZUI Standard edition。

## v 1.6.0

[2017-03-17]

### Update details

* File Upload：
  - Add file upload view，Support the following features：
    + Provide a variety of preset file list interface，Including normal list、Large list and grid；
    + Support large file fragment upload；
    + Supports display of status information such as file upload progress and upload speed；
    + Support for custom interface templates，Flexible customization of personalized file upload interface；
    + Support drag and drop file upload；
    + Support file queue，Can upload files automatically or manually；
    + Support seven cattle js-sdk upload files，Just need simple configuration；
    + Support for image file thumbnails and personal icons for displaying files；
    + Support for filtering image file size and format、Support for preprocessing image files（Including scaling、Cutting, etc.）；
    + stand by HTML5、flash、serverlight Upload files in other forms；
    + Support for identifying server results，Includes upload results and automatically downloads the download address for the download button；
    + Support for displaying static files in file list；
* icon：
  - Added some font icons，include `.icon-database`、`.icon-eraser`、`.icon-strikethrouth`、`.icon-underline`、`.icon-header`、`.icon-italic`；
  - Fixed icon rotation helper class in lower version IE Invalid question；
* Switch control：
  - New switch control `.switch`，Detailed access http://zui.sexy/#control/switch ；
* Document website：
  - Fix when the page opens dialog box `ESC` The key causes the document page to close and the background layer of the dialog box still has problems causing the page to be unavailable.；
  - Fixed path to some resources on the document，The documentation now supports access to the secondary directory of the URL.；
  - The sample code on the documentation adds a language type hint；
* Tab navigation：
  - Add vertical tabbed navigation，use `.nav.nav-tabs.nav-stacked` achieve；
* Vertical menu：
  - Fix the problem that the collapsed indicator icon is incorrect when the vertical menu is initially initialized；
  - Vertical menu is deprecated，Tree menu is now available `.tree.tree-menu` To implement the function of the vertical menu，See the documentation for details. [view → Tree menu → Tree navigation menu](#view/tree/1)；
* Tree menu：
  - Add a tree navigation menu appearance，use `.tree.tree-menu` achieve；
  - Fixed `.tree-lines` In some cases the connection line is inconsistent or beyond；
* chart：
  - Changed configuration item `multiTooltipTemplate` Default value，The data table name to which the data value belongs is now displayed by default；
  - Optimize the label display strategy on the pie chart，Now the label will automatically select the appropriate location to display，Will not overlap；
* Drag and drop：
  - Redo drag and drop plugin，Support for initializing multiple dragged elements at once（Including dynamically added elements），Improved performance；
* Drag and drop：
  - Redo drag and drop plugin，Support for a set of elements（Including dynamically added elements）Drag and drop operation，Improved performance；
* Drag and drop sort：
  - Refactored drag and drop sorting plugin，Improved plug-in performance，Solved the problem of causing the card after multiple calls；
* Drag and drop selection：
  - Fixed sometimes `finish` The event has not been triggered；
  - Fixed in extreme cases `mouseup` The event did not trigger the problem that caused the selection box to disappear.；
  - Improved performance during drag-and-drop interaction；
* Kanban：
  - Improved performance，Fixed an issue where duplicate entries on the kanban were repeatedly bound while dragging；
* calendar：
  - Improved performance，Fixed an issue that caused a calendar event that could not be placed and dropped in some extreme cases；
* dash board：
  - The dashboard now supports adjusting the height of the panel by dragging the bottom edge of the panel，Panels on the same row automatically adjust height when one of the heights changes to be consistent；
  - Improved plug-in efficiency；
* Prompt message：
  - increased `tipClass` with `tipId` Option；
  - Add multiple color themes，able to pass `tipClass` To specify；
* Pop-up panel：
  - Added multiple color themes；
  - Fixed a call in manual `$().tooltip('hide')` after that，Did not remove dynamically generated from the page `.tooltip` Element problem；
* Drop-down menu：
  - increase `.dropdown-hover` Classes can be used to implement the drop-down menu panel without the need to click the trigger button.；
* Typesetting：
  - Ordered list increase `.ol-pd-2`、`.ol-pd-3`、`.ol-pd-4` Special class to fix left margin，And provided a JS method `$().fixOlPd()` Manually correct；
  - `<hr>` Element added `.divider` with `.divider-sm` Class obtains dividing lines with different margins；
  - for MacOS Increase the font of the apple；
* Floating message：
  - Fixed when custom action buttons were specified and `onAction` Prompt when event callback function `result` Undefined big problem；
  - Fixed method name naming error，`destory` Corrected to `destroy`；
  - Fixed use `new` Method to report an error when creating an instance（issue #32）；
* Rich text editor：
  - Refactoring the packaging task，Fixed in `dist` There is no problem with the plugin resource in the directory；
  - Fixed an issue where the buttons on the dialog box on some browsers were incomplete on the English interface.；
* Date selector：
  - Fixed post after emptying button，The issue of the left and right switch date button on the date panel pops up again.；
  - New `eleClass` with `eleId` Option to specify for dynamically generated date selection panel elements CLASS with ID Attributes；
* Color selector：
  - Fixed `updateColors()` with `addColor()` Method can&#39;t directly add color values in string form；
  - Fixed in jQuery 3.x+ Reporting the wrong question；
* Chosen：
  - increase `middle_hightlight` Select to make the option selected when opening the drop-down panel as far as possible in the middle of the list；
* theme：
  - Fixed an issue where setting the fillet values for panel groups and labels is invalid in the theme；
* other：
  - `.show` Auxiliary class will use `!important` Modification，Avoid failure in some cases；
  - Add an auxiliary method `$.zui.strCode(str)` To convert a string to a unique value，Any string corresponds to a unique integer；


## v 1.5.0

[2016-09-06]

Add drag and drop selection and color picker plugin，A large number of components are optimized based on community feedback，Fixed a problem that has been discovered，Join Alipay and Taobao related font icons。
Document website has been greatly improved，Added two-column browsing mode for widescreen users，Most component documentation is updated，More comprehensive description of more examples and code。

### Update details：

 * Document website：
    - Add some basic content documents，Some missing documentation components are updated，include：Multiple selection and radio button、Color、drag、Drag and drop sorting, etc.，A lot of old documents get updated；
    - Added two-column browsing mode，Enable simultaneous browsing of catalog and page content on widescreen devices，Requires browser window width not less than `1200px`；
    - All internal pages are converted to Markdown format，Easier to maintain；
    - Fixing the first access to the document sometimes fails to get the disease display successfully ZUI version number，And can&#39;t open automatically URL Specified subpage；
    - Fixed an issue that sometimes caused errors when loading internal pages；
    - Fix incorrect logo information at the top of internal page，All originated from Bootstrap The content of the component has a special logo on the internal page.，After the compression is no longer displayed in the source and package file list drop-down menus（contain `*.min.*`）File link，The file link will point to the current version of the link instead of the latest development file.；
    - repair“Choose version and customization”Inaccurate list of page components，Increase display component source information；
    - When used `file:` When the protocol accesses the first page of the document, the prompt information deployed to the server is displayed.；
    - Fix the problem that the error message does not display after the content page fails to load；
    - Optimize document resources（include JSON Files and pictures），Increase loading speed；
    - The current version of the new or updated document content page will display the corresponding logo in the directory.；
    - Enhanced document search，stand by `v:` with `v:new` Command to find updates and new content；
    - Improved document index data，More convenient to search for content，More accurate directory information；
    - Optimize the problem of creating many useless elements on the main page after opening the date selection plugin page；
    - The document website is no longer IE8-10 Provide full support；
    - Optimize the experience of documents on mobile devices；
 * Color selector：
    - Add color selection plugin，Convenient for the user to select a preset color or enter a color value，in `dist/colorpicker` Related files can be found under the directory；
 * Drag and drop selection：
    - Add drag and drop selection plugin，It is convenient for the user to select the elements in the area by dragging the area，in `dist/selectable` Related files can be found under the directory；
 * icon：
    - Add Alipay and Taobao icons；
    - use `.icon` Class implementation monospace icon；
 * Tree menu：
    - `initialState` Option added `preserve` value，Allow local storage to restore the state of the user since the last operation；
    - Added a new set of options to support dynamic builds and updates DOM node，Add export data function；
    - optimization `.tree-lines` Option，No extra cables will be displayed at any time；
 * Floating message：
    - Multiple messages can now be displayed simultaneously on a page with multiple message examples；
    - Now you can customize the action button to the right of the message.，Can display multiple operation buttons simultaneously；
    - Classes that support dynamically created message elements by option；
    - New `destory` method，Remove dynamically created elements from the page；
 * Kindeitor：
    - Unable to load on repair page `kindeditor.min.css` The problem；
    - Remove `dist/kindeditor` Some unused files in the directory；
    - Kindeitor Automatically adds to the editor container element when it gets focus `.hover` Class to achieve focus appearance，No longer need users to manually bind `afterFocus` with `afterBlur` Event to achieve；
 * UEditor：
    - for UEditor Add theme style sheet，allowable `dist/ueditor/` Found under the directory；
 * jQuery：
    - Repair and jQuery 2.* and 3.* An error occurred when the version was used together；
 * Drop-down menu：
    - Optimize drop-down menus with submenus，Can be submenu `.dropdown-menu` Add to `.pull-left` Class to change the submenu popup direction；
    - Optimize the triangle icon style in the drop-down menu button；
 * Bookmark page：
    - Now you can add by adding a trigger element `[data-tab]` Attributes to quickly enable tabs；
 * fold：
    - Optimize the implementation of folded grouping，More than just a panel，Any grouping of the same parent element can now be used to implement any grouping；
 * Grid and layout：
    - increase `.container-fluid` with `.container-fixed-*`；
    - `.responsive-*` Can cooperate `.inline` with `.inline-block` use；
 * Typesetting：
    - increase `.dl-inline` Auxiliary class；
    - Optimize the appearance of the reference block；
 * Code：
    - New pair `<kbd>` Appearance style；
    - New `.code` Class application monospace font style；
 * scroll bar：
    - Scrollbar appearance is only for mobile devices；
 * progress bar：
    - Optimize the appearance of stripes；
 * Labels and logos：
    - Optimize label and logo look，Optimize its style when navigating or working with other components；
 * form：
    - New `.table-auto` Class implementation automatic width table；
 * Form：
    - Optimize form controls and views，Remove the pair in the form `.control-label` Dependence；
 * Navigation and navigation bar：
    - restricted `.navbar-brand` Horizontal padding，Will not appear too small；
 * Local storage：
    - Fixed an issue where local storage was unavailable and an error occurred；
    - Calling related methods now when local storage is not available will not cause an error，This data will be stored in memory；
 * tooltip：
    - Repair use `show` Method update content invalidation problem；
 * Dialog、Dialog trigger：
    - repair iframe Dialog settings `[data-height]` Problems that cannot be displayed after；
    - Fix dialog trigger `loaded` Event sometimes called twice；
    - Redesigned full screen dialog appearance，`.modal-body` Allow scrolling after the content is exceeded；
 * Modal dialog：
    - Adjust button order，Now indicates that the active button will be displayed in front.；
 * Paging：
    - Fixing activated entries and disabled entry styles sometimes does not work；
    - Optimize the appearance of activated entries；
 * calendar：
    - repair“Nowadays”Buttons are also prohibited from clicking in different years.；
    - repair `startDate` Invalid option setting；
 * dash board：
    - New `data` Option，Allows dynamic creation of panel content via data；
    - Support for changing the grid size by dragging the edge of the panel；
    - Optimize strategies for updating panel content from a distance；
    - Optimize the appearance of the action buttons；
    - New `.panel-loading` Dynamic icon in app loading；
 * Picture Viewer：
    - Fix the problem of jitter when opening the image browsing page；
 * Color：
    - `isColor` Now is the class method，No need to call on the instance；
    - Allowed to pass `Color.names` Access all named colors；
 * Data table：
    - When fixing the fixed head `z-index` Over the assembly to block the rest of the page；
    - Support drag and drop selection；
    - Fix click switch to select the line that sometimes fails；
    - Can now pass at any time `chekcs` Attribute to access row selection；
    - `fixedHeader` The option default is set to `false`，Avoid the problem of misplacement in some cases；
 * article：
    - New `.content` Class to replace `.article-content`，in `.content` Elements such as inner paragraphs apply bottom margins；
 * card：
    - Optimize the look of the card view；
 * chart：
    - Fix the problem that the pie chart wraps around the text label and sometimes doesn&#39;t show；
 * Kanban：
    - able to pass `.droppable` Options come from the line to handle the drag and drop process；
    - Remove pair `[data-toggle="boards"]` support；
 * Picture cut：
    - New `resetImage` Method to dynamically set the image to be cut；
 * theme：
    - Fix an incorrect panel color theme in the theme；
    - Fixed an issue where the page break control activated entry in the theme did not apply the theme color match；
 * Developer support：
    - Posted to npm；
    - Support use `npm start` Command to start local document web server（`http-server` achieve）；
    - optimization gulp task，Support more options，New `lib` with `minJSON` task；
    - modify `autoprefixer` Option，Each browser version is now explicitly specified；
    - Removed `navbars.fixed-left.less`、`pager.popover.less`、`auto-trigger.js`、`pager.js`；
    - Can now be used `gulp lib` To call `seperate` task；
    - Optimized documentation debug Browse mode；
    - `boards`、`dashboard`、`sortable` No longer available in the standard version；`bootbox`、`.colorpicker`、`colorset.js`、`dashboard`、`imgready`、`selectable`、`sortable`、`ueditor` Has joined the standalone package；
    - by gulp The generated file mode is changed to `644`。


## v 1.4.0

[2016-01-26]

This time updated most of the documentation，Added necessary code examples。
Easy to use[Tree menu component](http://zui.sexy/#view/tree)joinedZUI。
Theme features are enhanced，In the document[Theme chapter](http://zui.sexy/#basic/theme)Provide real-time preview and compile custom features。
Fixed forums andQQMost of the questions in the group。

### Update details

 * Improve and continually improve the documentation：
     - Most component documentation is updated，Added more examples and sample code；
     - The topic chapters in the document support direct preview of the theme，And can customize the theme configuration and compile and download the theme（This feature is inIE8Not available on older browsers）；
     - Documentation supports viewing source code and packaging information for components；
     - Sample code in the documentation supports replication；
     - Correct multiple links and misspellings in the document；
     - Fix an issue where the scrollbar document could not be loaded and displayed；
 * Typographic style：
     - Change font settings；
     - simplifyCSS CLASSname，`hightlight-*`change name to`hl-*`；
 * Grid system：
     - increase`.col`Auxiliary classes to facilitate custom raster sizes；
 * Prompt message and prompt panel：
     - Prompt message support`tipClass`with`tipId`Option；
     - Prompt message`show(content)`Method increasecontentParameters to dynamically change the content of reality；
 * icon：
     - Icon name`icon-yingyang`Corrected to`icon-yinyang`，`icon-check2`Corrected to`icon-checked`；
     - Fix an issue where icon rotation doesn&#39;t work in non-block-level tags；
     - Update icon font，Changed the font`base height`，Now the icon and text are more natural when mixed；
 * Message Box：
     - Removed the border of the message box，It looks flatter now；
     - increase`.alert-primary-inverse`Dark appearance of the main color matching message box；
 * Labels and logos：
     - Change the padding and line height of labels and logos，Resolve size and alignment issues in some browsers；
 * Button and button set：
     - Change button style，More flattened；
     - The default background color of the link button is now`transparent`；
     - Change the appearance of the button when it is selected or activated，It now looks more obvious；
     - The rounded border of the button can be`variables.less`Separately defined；
     - Change button transition animation time from preset slower time to normal time，Preset time reference`variables.less`Definition in；
     - Fixing the top button on the vertical button group, the first button rounded border shows incorrect question；
 * scroll bar：
      - optimizationWebkitThe style of the scroll bar on the family browser；
 * Form control：
     - Optimize the style of the radio buttons and check boxes in the form，Now looks more centered vertically when mixed with text；
     - Change some of the disabled form item styles，Change the cursor when hovering；
 * navigation：
     - Fix the rounded style of vertical navigation；
 * progress bar：
     - Adjust the appearance of the progress bar，Remove shadow effects，It looks flatter now；
 * Bread crumbs：
     - Change the color of the breadcrumb activation item，It now looks more obvious；
 * Tree menu：
     - Increase tree menu view；
 * Dialog and dialog triggers：
     - Modal box renamed“Dialog”；
     - Dialog box supports full screen dialog，by`.modal-fullscreen`achieve；
     - Fix the problem that the modal box size configuration in the dialog trigger is not applied correctly（[by @remind](https://github.com/easysoft/zui/issues/10)）；
     - Drag and drop dialog box to open the option name by`draggable`change to`moveable`；
     - Added for all types of dialogs`rememberPos`Option to remember the location of the modal box after the user drags；
     - Fixed some bugs when dragging and moving dialogs；
     - Modal box trigger is renamed“Dialog trigger”；
     - In the remote dialogiframeTag increase`allowfullscreen`Attributes(by @YuanXu)；
     - Dialog trigger increases`iframeBodyClass`Options to define in the remote dialogiframeOn the labelCLASS；
     - Fix dialog box pop-up dialog box sometimes has a high degree of non-stop floating jitter problem；
     - Dialog trigger increases`waittime`Options to show when remote content is loaded，increase`broken`Event to listen for events when remote content fails to load；
     - Dialog trigger increases`loadingicon`Options from the icons that appear when you remotely load content；
     - The dialog trigger triggered by the button now re-reads the value of the remote address each time it is triggered，This means that different remote content can be dynamically loaded through the dialog by changing the address parameters each time the dialog pops up.；
 * Date selection：
     - Date selection plugin added`pcikerPosition`Options to control the pop-up and display position of the pop-up panel，If this option is specified as`auto-*`，Automatically determine the most suitable location；
 * ChosenAnd icon selection plugin：
     - forChosenincrease`dropDirection`Option to control the pop-up direction of the pop-up panel，If`auto`Automatically determine the most suitable location；
     - forChosenincrease`lang`Options to set the interface language；
     - optimizationChosenInterface style；
     - Fix icon selection plugin sometimes unavailable；
     - Icon selection plugin can choose more icons，includeWeChaticon；
     - Fix icon selection plugin can&#39;t read and apply language settings correctly；
     - DeepenedChosenPop-up panel shadow effect，Strengthen the distinction between other content；
 * Floating message：
     - Floating messages add a global method to hide all displayed messages；
     - The rounded size of the floating message is`varuables.less`Configurable；
 * Rolling monitor（scrollspy）：
     - Fix scroll listen event name error；
 * Drag and drop sort：
     - Drag and drop sorting component increases`before`event；
     - repair`reset()`Method sometimes works incorrectly；
 * Form：
     - Remove`<select>`Dotted border when popping up in Firefox；
 * Code and code block：
     - Adjust the row height in the code block，Will now show a more compact；
     - When using code blocksprettifyPlugin and enable display line number，Remove excess margins at the bottom；
 * Data table：
     - Support for inheriting table cells when a data table uses a native table as a data source`title`Attributes；
     - Change the horizontal scroll bar mouse cursor style in the data table；
     - Repair data table`load`Method passed`$().datatable('load', newData)`Form call cannot take effect；
     - Change the icon for the selected row in the data table；
     - Data table data increase`keepSort`Attributes to prevent sorting from resetting when updating data；
 * Kanban view：
     - Increase the pair`before`Event support；
 * chart：
     - optimizationchartjs，Ring chart added`showLable`Option to show or hide tags；
     - Histogram increase`showLable`with`scaleValuePlacement`Option to display labels on the specified position on the column；
     - Histogram and bar chart increase`scaleShowBeyondLine`Options to control the axis style；
 * calendar：
     - Fix an issue where an error occurred while updating events in the calendar；
 * Bootbox：
     - changeBootboxEvent name in，versusZUIEvent names in other components are consistent。
     - Bootboxupgrade to4.4.0version；
 * Picture Viewer (Lightbox)：
     - Change the style of the image browsing plugin，It looks flatter now；
     - Fix the image description in the image browsing plugin. Sometimes the content is incorrect.；
 * Picture cropping：
     - Change picture croppedAPI，Add more events，Submitting events contains more image information；
 * Kindeditor:
     - repairKindeditorAt MicrosoftEdgeBrowser andIE8Unusable problem；
 * theme：
     - Greatly optimize the default theme style，Fixed an issue where some third-party components did not correctly apply the theme；
     - Theme adds support for fillet settings；
 * Packaging and compiling：
     - useGulpReplaceGrunt，Remove item pairGruntjsDependence，Refactoring most of the compilation and packaging tasks；
     - Data table removed from the standard version，Has joined a separate component；
     - Icon selection plugin（chosenicons）、Code landscaping highlighting plugin（prettify）And drag and drop sorting plugins into separate component packaging；
     - optimization Code and compilation process，Reduce the standard versionCSSFile size（Decrease3%）；
     - stand by From`src/less/basic/setting.less`Read inLESSConfiguration；
     - Refactoring`package.json`middle`lib`with`builds`data，Use now`zui.json`To manage these data separately；
 * other：
     - ZUIMost of the components in the animation transition time from the original0.3sReduced to0.2s，Animation transitions will be faster；
     - browser.jsincrease`.tip(content)`Method allows the user to customize the browser low version prompt message；
     - Updateexcanvas.js；
     - repairmigrate 1.2Error in；
     - Increase the pairbowersupport；
     - Optimize code structure and code format；
     - Add copyright notice information to some third-party components。

## v 1.3.1

[2015-05-19]

This update optimizes the documentation site experience，Fixed somebug。

### Update details

 * change DocumentUIMassive changes，More compact and easy to use，No longer open in new window，Website increasefavicon；
 * repair An error occurred when the sort component was configured to sort in reverse order；
 * repair Pre-compiled Standard Edition may appearzuiUndefined attribute problem。

## v 1.3.0

[2015-05-15]

A new document website is coming！Keyboard man new benefits：Use search to find content，And support shortcut operation。
Increase chart view component，Support for pie chart、Display of histograms and graphs。
Also fine-tuned the default color，For multiple componentsUIDetails are optimized，Fixed a lot of problems。

### Update details
 * brand new Document website，Support for search and shortcuts，On-demandAjaxGet document content，Support direct displaymarkdownFormatted document content，The documentation for multiple components has been improved；
 * New a set of message box styles with dark background；
 * New Icon component（based onChartJScustom made），Support display curve、Bar chart and pie chart，And the pie chart supports direct display of data tags，Simplifies the color matching of the component，Added datasets for all chart typescolorAttributes，Can be used directlyZUIThe color name in theCSSColor value to specify color；
 * New An auxiliary color matchingjavascriptPlugin，Convenient injavascriptuseZUIDefault color；
 * New Animated helper class for zoom effects；
 * change Multiple components are onjQueryObject andwindowBinding on the object，Now available$.zuiAs a shared object。
 * change Carousel component style，Reduced background transparency of the left and right toggle buttons，Fixed an issue where the icon size on the toggle button was too small；
 * change Icon font，increasedwechatWait for some new icons；
 * change Modal box，Added an option to allow modal boxes to drag and drop headers to change placements in real time；
 * change Dashboard view，Add a new option to change the shape of the panel when dragging，Enhanced experience when dashboards are dragged，Added dark background style；
 * change The logic of the drag and drop component to determine the placement area，Prevents browser default behavior when dragging click events begins，Now easier to use；
 * change Module box size option，Now you can set the modal box size to full screen.；
 * change Default color matching，The new color scheme is more vital，；
 * change Button appearance，Removed button shadow；
 * change The event name exposed by some components；
 * change Link color in the card，No longer use the foreground color but the general link color，Mouse hover appearance is consistent with normal links；
 * change Built-injQueryVersion to1.11；
 * change Tooltips and panel plugins，Added options to set up dynamically generatedDOMofIDwithcss classAttributes，User-friendly styles for specific tooltip messages and panels；
 * change Drag and drop and sort plugins，Increase bindingalwaysevent，Refactoring internal implementation logic；
 * change Calendar component，Fixed some bugs，Adjusted the month view style，Increase support for cross-day events，Now supports English and Traditional Chinese interface，Fixed inIECompatibility issue，Clicking on the date and event callback parameters will include the clicked tag object itself.；
 * change Kanban view，Drag and drop events can be monitored，And cancel this drag and drop operation；
 * change UpChosenComponent，Support for custom dynamic generationDOMofcss classAttributes；Adjusted multi-select interface，Increase search icon；
 * change The style of the code block，Fixed style issue with code with line number；
 * change Page break style in the article view，More harmonious and beautiful；
 * change Event binding object for vertical menu，Fixed an issue where expansion and collapse were invalid under special circumstances；
 * repair datatableSelect all button atreloadAfter failure；
 * repair Calling public methods in modal box triggers may cause errors；
 * repair The message box supports closing when customizing the buildJSThe plugin does not contain a problem that causes the message box close feature to be unavailable.；
 * repair The refresh button click event in the dashboard panel is invalid.；
 * repair Modal box trigger callcloseModalPossible problem，ChangedcloseModalMethod parameter order；
 * repair Error in modal box trigger loading cross-domain remote content；
 * repair UpjQuerySome bugs in the extended helper method；
 * repair The problem of data table sometimes sorting invalid，Fixed inIECalculating row height errors on the browser；
 * repair usehslValue constructionColorInvalid object；
 * Remove Automatic trigger plugin，Because the scenes used are rare；
 * New UpmigrateComponent to solve1.2The following versions are upgraded to1.3Version compatibility issues you may encounter。

## v 1.2.0

[2014-11-18]

ZUI1.2The official version was finally released.！
This release adds a lot of new features，Also fixed a lot of problems，The documentation has also been greatly improved。Welcome everyone to use and feedback questions。

### Update details
 * New Calendar view component，Convenient for the display of the schedule；
 * New Data table view component，Easier to display complex data，Removetable.data.js；
 * Reimplemented modal box trigger，Modal box triggers support simultaneous loading of remote content and real-time content，Adjust position and size in real time based on your content，Redesigned call interface，More convenient to use，Eliminates the hidden danger of modal box trigger conflicts in the general modal box；
 * package.jsonIncrease the configuration of components and their dependencies，Re-implementedGrunttask，Compiling separate components is more convenient，And support package compilation of any component collection，gruntTasks will automatically manage dependencies between components；
 * Greatly update part of the document section，And adjusted the document formatting style，You can view each component property in the document，And give third-party component version and user support information，Document supportIE8，Optimize the performance of documents on small screens；
 * Reimplemented floating message component，More convenient to call，Better animation；
 * Add new third-party componentschartjs，Able to draw simple charts；
 * increasebrowser.js，forIESeries of browsers add version hints helper class；
 * New 'store.js'，Implement local storage common interface，And add a separate page range of independent storage mechanisms，betaThe page identifier in the version is sometimes incorrectbugHas been fixed；
 * New 'jquery.extensions.js'，Add some practicaljQueryExtension method，Easy to develop other components，Remove original'unities.js'；
 * increasearray.js，Provide some practical methods for manipulating arrays；
 * adjusteddistDirectory Structure，Third-party components and components that are suitable for separate calls will be included directlylibIn the catalog；
 * ChosenOptions and grouping supporttitleAttributes，ChosenPop-up list supports custom width，Adjust multiple selectionChosenStyle of the option；
 * repairChosenIn specific circumstancesplaceholderUnable to display questions；
 * DateTime Selector will be able to automaticallyhtmlGet page language settings and apply language settings in the tab；
 * Adjust the left fixed navigation style；
 * indate.jsAdd some practical methods to help with date calculations；
 * Modal box supports two additional default sizes，Fix the problem that the scroll bar flashes when the modal box pops up.；
 * Fix the wrong style of the first line of the code snippet；
 * The additional components of some components whose corresponding files are renamed；
 * Fix specific situationskindeditorIcon cannot be displayed；
 * Optimize block panel view action button event listener mechanism；
 * repaircolor.jsAdd named color support；
 * optimizationbootboxLanguage text in；
 * Table supports fixed layout styles；
 * Pop-up box adds new options to makeJSgenerateDOMofidAttributes，Easy to customize styles；
 * Greatly optimize the code，Fix some inJavascriptError in the code，Improve key code comments，Enhance some code files withrequierejsCompatibility。


## v 1.2.0-beta

[2014-08-05]

### Version highlights
 * Add calendar view component，Convenient for daily display；
 * New data table component，Easily implement complex data presentations；
 * Newly implemented modal box trigger，Support for loading remote content and live content at the same time，Better compatibility；
 * Re-implementedGruntTask configuration，Custom compilation will be more convenient。
 * Lots of component detail optimization，Document update。

### Update details
 * New Calendar view component，Convenient for the display of the schedule；
 * New Data table view component，Easier to display complex data，Removetable.data.js；
 * Reimplemented modal box trigger，Modal box triggers support simultaneous loading of remote content and real-time content，Adjust position and size in real time based on your content，Redesigned call interface，More convenient to use，Eliminates the hidden danger of modal box trigger conflicts in the general modal box；
 * package.jsonIncrease the configuration of components and their dependencies，Re-implementedGrunttask，Compiling separate components is more convenient，And support package compilation of any component collection，gruntTasks will automatically manage dependencies between components；
 * Greatly update part of the document section，And adjusted the document formatting style，You can view each component property in the document，And give third-party component version and user support information，Document supportIE8，Optimize the performance of documents on small screens；
 * Add new third-party componentschartjs，Able to draw simple charts；
 * increasebrowser.js，forIESeries of browsers add version hints helper class；
 * New 'store.js'，Implement local storage common interface，And add a separate page range of independent storage mechanisms；
 * New 'jquery.extensions.js'，Add some practicaljQueryExtension method，Easy to develop other components，Remove original'unities.js'；
 * increasearray.js，Provide some practical methods for manipulating arrays；
 * adjusteddistDirectory Structure，Third-party components and components that are suitable for separate calls will be included directlylibIn the catalog；
 * ChosenOptions and grouping supporttitleAttributes，ChosenPop-up list supports custom width，Adjust multiple selectionChosenStyle of the option；
 * repairChosenIn specific circumstancesplaceholderUnable to display questions；
 * DateTime Selector will be able to automaticallyhtmlGet page language settings and apply language settings in the tab；
 * Adjust the left fixed navigation style；
 * indate.jsAdd some practical methods to help with date calculations；
 * Modal box supports two additional default sizes，Fix the problem that the scroll bar flashes when the modal box pops up.；
 * Fix the wrong style of the first line of the code snippet；
 * The additional components of some components whose corresponding files are renamed；
 * Fix specific situationskindeditorIcon cannot be displayed；
 * Optimize block panel view action button event listener mechanism；
 * repaircolor.jsAdd named color support；
 * optimizationbootboxLanguage text in；
 * Table supports fixed layout styles；
 * Greatly optimize the code，Fix some inJavascriptError in the code，Improve key code comments，Enhance some code files withrequierejsCompatibility。


## v 1.1.0

[2014-08-05]

 * New Drag sorting plugin，Re-send by draggingDOMNode sorting；
 * Enhance ChosenComponent support adds extra data to the list to be selected for indexing；
 * Enhance Drag and drop plugin to increase trigger selector parameters，Can customize the content triggered by the drag event，This parameter supports functions to dynamically get values；
 * repair LightboxDisplay problems on a small screen；
 * repair The problem that the carousel cannot click on the link on the touch screen
 * The project website is changed to [http://zui.sexy](http://zui.sexy)

## v 1.0.0

[2014-07-24]

ZUI The first version is released。
