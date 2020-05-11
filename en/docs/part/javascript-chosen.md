section: javascript
id: chosen
description: Provide data selection and filters
icon: icon-search
filter:
---

# Chosen

Chosen is a better choice for enhancing single-select lists and multi-select lists.

<div class="alert alert-danger">
  <h4>Compatibility</h4>
  <p>Chosen cannot be enabled on touch screens or mobile devices. </p>
</div>

## Examples

### Single-select and multi-select

<div class="example">
  <div class="row">
    <div class="col-md-3">
      <select data-placeholder="Choose a pet..." class="chosen-select form-control" tabindex="2">
        <option value=""></option>
        <option value="cat">Kitten</option>
        <option value="fish">Goldfish</option>
        <option value="dragon">Dragon</option>
        <option value="mammoth">Mammoth</option>
        <option value="gollum">Gollum</option>
      </select>
    </div>
    <div class="col-md-3">
      <select data-placeholder="Choose fruits that you love..." class="chosen-select form-control" tabindex="2" multiple="">
        <option value="strawberries">Strawberry</option>
        <option value="apple">Apple</option>
        <option value="orange">Orange</option>
        <option value="cherry" selected>Cherry</option>
        <option value="banana" selected>Banana</option>
        <option value="figs" selected>Fig</option>
      </select>
    </div>
  </div>
</div>

```html
<select data-placeholder="Choose a pet..." class="chosen-select form-control" tabindex="2">
  <option value=""></option>
  <option value="cat">Kitten</option>
  <option value="fish">Goldfish</option>
  <option value="dragon">Dragon</option>
  <option value="mammoth">Mammoth</option>
  <option value="gollum">Gollum</option>
</select>
```

```html
<select data-placeholder="Choose fruits that you love..." class="chosen-select form-control" tabindex="2" multiple="">
  <option value="strawberries">Strawberry</option>
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="cherry">Cherry</option>
  <option value="banana">Banana</option>
  <option value="figs">Fig</option>
</select>
```

```js
$('select.chosen-select').chosen({
    no_results_text: 'Not found.',    //  Tooltip text displayed when no match is found.
    disable_search_threshold: 10, // The search box is not displayed if less than 10 options.
    search_contains: true         // Start searching anywhere.
});
```

### Extended search

Chosen has extended fields which are for retrieval. Add `data-keys="*"` attributes to`<option>`.

`data-keys` attributes can separate multiple keywords for retrieval with spaces or commas.

<div class="example">
  <select data-placeholder="Use pinyin search，Try“m”or“xm”" class="chosen-select form-control" tabindex="2">
    <option value=""></option>
    <option value="cat" data-keys="xiaomao xm cats">Kitten</option>
    <option value="fish" data-keys="jinyu jy fish">Goldfish</option>
    <option value="dragon" data-keys="long">Dragon</option>
    <option value="mammoth" data-keys="mengma mm elephant">Mammoth</option>
    <option value="gollum" data-keys="gulu gl myth">Gollum</option>
  </select>
</div>

```html
<select data-placeholder="Use pinyin search，Try“m”or“xm”" class="chosen-select form-control" tabindex="2">
  <option value=""></option>
  <option value="cat" data-keys="xiaomao xm Cats">Kitten</option>
  <option value="fish" data-keys="jinyu jy fish">Goldfish</option>
  <option value="dragon" data-keys="long">Dragon</option>
  <option value="mammoth" data-keys="mengma mm elephant">Mammoth</option>
  <option value="gollum" data-keys="gulu gl myth">Gollum</option>
</select>
```

```js
$('select.chosen-select').chosen({
    no_results_text: 'could not find it',    // Tooltip text displayed when no match is found.
    disable_search_threshold: 10, //  The search box is not displayed if less than 10 options.
    search_contains: true         // Start searching anywhere.
});
```

<div class="alert alert-primary-inverse">
  <h4>Tips</h4>
  <p>Extended search does not provide pinyin search. If you need support pinyin, add pinyin string in <code>data-keys</code> before the initialization.</p>
</div>

### Adjust popout width

#### Fixed width

Usually the width of the popout is the same as that of the dropdown button. You can still use `drop_width` to change the width of the popout. In the example below, the width is fixed as `200px`:

<div class="example">
  <select class="chosen-select form-control" data-drop_width="200px">
    <option value=""></option>
    <option value="cat">Kitten</option>
    <option value="fish">Goldfish</option>
    <option value="dragon">Dragon</option>
    <option value="mammoth">Mammoth</option>
    <option value="gollum">Gollum</option>
  </select>
</div>

```html
<select class="chosen-select form-control" data-drop_width="200px">
  <option value=""></option>
  <option value="cat">Kitten</option>
  <option value="fish">Goldfish</option>
  <option value="dragon">Dragon</option>
  <option value="mammoth">Mammoth</option>
  <option value="gollum">Gollum</option>
</select>
```

#### Auto width

Sometimes the popout panel width has to be set based on the length of the text in the popout. In order to minimize popout width, use `drop_max_width` to set a maximum width. The maximum width in the following example does not exceed `300px`:

<div class="example">
  <div class="row">
    <div class="col" style="width: 120px">
      <select class="chosen-select form-control" data-max_drop_width="200" style="width: 100px">
        <option value=""></option>
        <option value="cat">Kitten</option>
        <option value="fish">The tail of the goldfish is soooooooooooooooooooooooooooooooooooooooooooo long.</option>
        <option value="dragon">Dragon</option>
        <option value="mammoth">Mammoth</option>
        <option value="gollum">Gollum</option>
      </select>
    </div>
  </div>
</div>

```html
<div class="row">
  <div class="col" style="width: 120px">
    <select class="chosen-select form-control" data-max_drop_width="200" style="width: 100px">
      <option value=""></option>
      <option value="cat">Kitten</option>
      <option value="fish">The tail of the goldfish is soooooooooooooooooooooooooooooooooooooooooooo long.</option>
      <option value="dragon">Dragon</option>
      <option value="mammoth">Mammoth</option>
      <option value="gollum">Gollum</option>
    </select>
  </div>
</div>
```

### Compact single-select

`compact_search` is used to enable a more compact single-select which can be used with the search box.

<div class="example">
  <select class="chosen-select form-control" data-compact_search="true">
    <option value=""></option>
    <option value="cat">Kitten</option>
    <option value="fish">Goldfish</option>
    <option value="dragon">Dragon</option>
    <option value="mammoth">Mammoth</option>
    <option value="gollum">Gollum</option>
  </select>
</div>

```html
<select class="chosen-select form-control" data-compact_search="true">
  <option value=""></option>
  <option value="cat">Kitten</option>
  <option value="fish">Goldfish</option>
  <option value="dragon">Dragon</option>
  <option value="mammoth">Mammoth</option>
  <option value="gollum">Gollum</option>
</select>
```

```js
$('select.chosen-select').chosen({
    compact_search: true           // Enable compact single-select
});
```

### Record the order in which multi-select options are selected

Use `[data-sort_field]` or initialization options `sort_field` to specify a form field(a text library or a hidden field) to store the order of the selected options.

<div class="example">
  <select data-placeholder="Choose some fruit that you love..." class="chosen-select form-control" tabindex="2" multiple="" data-sort_field="#chosenSortField" data-sort_value_spliter=",">
    <option value="strawberries">Strawberry</option>
    <option value="apple">Apple</option>
    <option value="orange">Orange</option>
    <option value="cherry" selected>Cherry</option>
    <option value="banana" selected>Banana</option>
    <option value="figs" selected>Fig</option>
  </select>
  <input type="text" class="form-control" readonly="readonly" value="figs,cherry,banana" id="chosenSortField" style="margin-top: 10px">
</div>

```html
<select data-placeholder="Choose fruits that you love..." class="chosen-select form-control" tabindex="2" multiple="" data-sort_field="#chosenSortField" data-sort_value_spliter=",">
  <option value="strawberries">Strawberry</option>
  <option value="apple">Apple</option>
  <option value="orange">Orange</option>
  <option value="cherry" selected>Cherry</option>
  <option value="banana" selected>Banana</option>
  <option value="figs" selected>Fig</option>
</select>
<input type="text" class="form-control" readonly="readonly" value="figs,cherry,banana" id="chosenSortField" style="margin-top: 10px">
```

## How to use it

### Introducing resources

Chosen, as an independent component, requires resources in lib/ to be introduced from local or CDN:

```html
<link href="lib/chosen/chosen.min.css" rel="stylesheet">
<script src="lib/chosen/chosen.min.js"></script>
```

### Options

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Parameter</th>
      <th style="width: 80px">Name</th>
      <th style="width: 300px">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`lang`</td>
      <td>Language on the interface</td>
      <td>
        <ul>
          <li><code>'zh_cn'</code>(default)</li>
          <li><code>'zh_tw'</code></li>
          <li><code>'en'</code></li>
        </ul>
      </td>
      <td>If this value is not set, `[lang]` of `<html>` will be taken as interface language.</td>
    </tr>
    <tr>
      <td>`allow_single_deselect`</td>
      <td>Allow cancellation on single-select</td>
      <td>
        <ul>
          <li><code>'true'</code>: Allow cancellation</li>
          <li><code>'false'</code>(default): Not allowed</li>
        </ul>
      <td>If cancellation on single-select is allowed, a remove button will be displayed after an item is selected.Click this button, the user selected item will be removed.</td>
    </tr>
    <tr>
      <td>`disable_search`</td>
      <td>Disable search</td>
      <td>
        <ul>
          <li><code>'true'</code>: Disable</li>
          <li><code>'false'</code>(default): Not disabled</li>
        </ul>
      </td>
      <td>Disable search. The search box will no longer be displayed to allow users to search options.</td>
    </tr>
    <tr>
      <td>`disable_search_threshold`</td>
      <td>Automatically disable the maximum</td>
      <td>Number. The default is`0`.</td>
      <td>Automatically disable search options, if the number of options is less than or equal to this value.</td>
    </tr>
    <tr>
      <td>`inherit_select_classes`</td>
      <td>inherit `<select>` class</td>
      <td>The default is `false`</td>
      <td>If set as `true`, chosen will get the original CSS CLASS Value of `<select>` after initialization, and add it to `.chosen-container`.</select></td>
    </tr>
    <tr>
      <td>`max_selected_options`</td>
      <td>Maximum number of selected</td>
      <td>Number. The default is `Infinity`.</td>
      <td>Only valid for multi-selections. When the number of options selected reaches this value, `chosen:maxselected` event will be triggered.</td>
    </tr>
    <tr>
      <td>`no_results_text`</td>
      <td>Text without results</td>
      <td>String. Get from language configuration by default.</td>
      <td>This text is displayed when there is no match results.</td>
    </tr>
    <tr>
      <td>`placeholder_text`</td>
      <td>Null placeholder text</td>
      <td>String，The default is`""`</td>
      <td>Display this text when the user selects no option. You can also specify it `data-placeholder` in `<select>`of`data-placeholder`.</select></td>
    </tr>
    <tr>
      <td>`placeholder_text_multiple`</td>
      <td>Multi-select null  placeholder text</td>
      <td>String. The default is`""`.</td>
      <td>If this option is not set, the value of `placeholder_text` will be read.</td>
    </tr>
    <tr>
      <td>`placeholder_text_single`</td>
      <td>Single-select null placeholder text</td>
      <td>String. The default is`""`.</td>
      <td>If this option is not set，the value of `placeholder_text` will be read.</td>
    </tr>
    <tr>
      <td>`search_contains`</td>
      <td>Enable search anywhere</td>
      <td>The default is`false`.</td>
      <td>The default is to match the option or keywords from the beginning of an item, e.g. `"he"` only matches `"hello"` but not `"ahead"`. If this option is enabled, you can match it from any part of the item.</td>
    </tr>
    <tr>
      <td>`compact_search`</td>
      <td>Whether compact single-select is enabled.</td>
      <td>The default is `false`.</td>
      <td>If set as `true`, the search box is displayed with the selection box.</td>
    </tr>
    <tr>
      <td>`single_backstroke_delete`</td>
      <td>Enable backspace deletion</td>
      <td>The default is `true`.</td>
      <td>Only valid for multiple elections. Enable this option to allow users to press the backspace and delete to delete the previous selection.</td>
    </tr>
    <tr>
      <td>`width`</td>
      <td>width</td>
      <td>The default is original width of `<select>`.</td>
      <td>The default width of chosen is the same as the original width of `<select>`. If original`</select>` in chosen is invisible before initialization, specify a width, otherwise the width will be`0`. If a responsive layout is used, the recommended width is `'100%'`.</td>
    </tr>
    <tr>
      <td>`display_disabled_options`</td>
      <td>Show options that are not available</td>
      <td>The default is `true`.</td>
      <td>Unavailable options are displayed by default on the list. Disable this option to hide options that are not available.</td>
    </tr>
    <tr>
      <td>`display_selected_options`</td>
      <td>Show selected options</td>
      <td>The default is `true`.</td>
      <td>Only valid for multi-select. Disable this option to hide the selected option on the list.</td>
    </tr>
    <tr>
      <td>`drop_direction`</td>
      <td>Direction that the options pop out.</td>
      <td>
        <ul>
          <li><code>"auto"</code>(default): based on the height and position of the options.</li>
          <li><code>"down"</code></li>
          <li><code>"up"</code></li>
        </ul>
      </td>
      <td>Pops down by default. If there is not enough space, it will be popped up. The position is not changed during the search.</td>
    </tr>
    <tr>
      <td>`drop_width`</td>
      <td>Width of the option menu</td>
      <td>e.g. `200px`</td>
      <td>If this option is not specified, it is the same as the width of the option button.</td>
    </tr>
    <tr>
      <td>`max_drop_width`</td>
      <td>Maximum width of the option menu</td>
      <td>The value of this option can only be numbers. `px` as its the unit.</td>
      <td>Use this option to automatically adjust the option width based on the length of the text on the options.</td>
    </tr>
    <tr>
      <td>`highlight_selected`</td>
      <td>Whether to always highlight the selected item</td>
      <td>The default is `true`.</td>
      <td></td>
    </tr>
    <tr>
      <td>`middle_highlight`</td>
      <td>Align the highlighted option in the middle</td>
      <td>
        <ul>
          <li><code>false</code>(default): The highlight option position is not changed.</li>
          <li><code>true</code>: The highlighted option is in the middle of the list when scrolling the list.</li>
          <li><code>"always"</code>: The highlighted option is in the middle of the list when scrolling the list and switching the option.</li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>`no_wrap`</td>
      <td>Whether to disable option text wrapping</td>
      <td>
        <ul>
          <li><code>false</code>(default): Do not disable line breaks and allow line breaks.</li>
          <li><code>true</code>: Disable line breaks.</li>
        </ul>
      </td>
      <td></td>
    </tr>
    <tr>
      <td>`sort_field`</td>
      <td>Form field used to the order of multi-selected</td>
      <td>The value of this option can be DOM element, jQuery Object, and a string jQuery objects select.</td>
      <td>Form fields can hide fields or text boxes.</td>
    </tr>
    <tr>
      <td>`sort_value_spilter`</td>
      <td>Character used for splitting when recording the order of multi-selection values.</td>
      <td>The default is `','`.</td>
      <td></td>
    </tr>
  </tbody>
</table>

#### Events

Chosen events are bound in the original `<select>`, and use jQuery to listen events. The following events are available:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`change`</td>
      <td>Triggered when the selected value changes.</td>
    </tr>
    <tr>
      <td>`chosen:ready`</td>
      <td>Triggered when initialization is completed.</td>
    </tr>
    <tr>
      <td>`chosen:maxselected`</td>
      <td>Triggered when reaching the maximum number of selections( use `max_selected_options` to specify).</td>
    </tr>
    <tr>
      <td>`chosen:showing_dropdown`</td>
      <td>Triggered when the option menu pops out.</td>
    </tr>
    <tr>
      <td>`chosen:hiding_dropdown`</td>
      <td>Triggered when the option menu is hidden.</td>
    </tr>
    <tr>
      <td>`chosen:no_results`</td>
      <td>Triggered when no matching options are found.</td>
    </tr>
  </tbody>
</table>

```js
$('select.chosen-select').on('change', function(){
    // The user changed the selection. Fix it now!
});
```

#### Methods

Trigger an event to call chosen methods.

```js
// When options inn the original select changed, enable th chose to update the option menu.
$('select.chosen-select').trigger('chosen:updated');
```

All methods that can be triggered by events are:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Trigger Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`chosen:updated`</td>
      <td>Notify a chosen to update option menu in the original select.</td>
    </tr>
    <tr>
      <td>`chosen:activate`</td>
      <td>Activate the chosen and get focus.After activated, chosen will capture the input and actions from the user.</td>
    </tr>
    <tr>
      <td>`chosen:open`</td>
      <td>Turn on(pop out) option menu panel.</td>
    </tr>
    <tr>
      <td>`chosen:close`</td>
      <td>Hide option menu panel.</td>
    </tr>
  </tbody>
</table>

Refer to[chosen Official document](http://harvesthq.github.io/chosen/options.html) for more.

## Icon plugin

### Examples

For [Beautiful icons](#control/icon), [icon](#control/icon) plugin is developed based on chosen.

<div class="example">
  <form>
    <select class="chosen-icons form-control" name="chosenIcons" id="chosenIcons" data-value="icon-star"></select>
  </form>
</div>

```html
<select class="chosen-icons form-control" name="chosenIcons" id="chosenIcons" data-value="icon-star"></select>
```

```js
$('select.chosen-icons').chosenIcons(options);
```

### How to use it

Icon plugin is an independent component, and denpends on chosen plugin. You have to introduce resources in lib/ from local or CDN:

```html
<!-- Introduce Chosen related resources -->
<link href="lib/chosen/chosen.min.css" rel="stylesheet">
<script src="lib/chosen/chosen.min.js"></script>

<!-- Introduce icon plugin related resources -->
<link href="lib/chosenicons/zui.chosenicons.min.css" rel="stylesheet">
<script src="lib/chosenicons/zui.chosenicons.min.js"></script>
```

Icon plugin can use all options and methods of chosen.

<link href="../dist/lib/chosen/chosen.min.css" rel="stylesheet">
<script src="../dist/lib/chosen/chosen.min.js"></script>
<link href="../dist/lib/chosenicons/zui.chosenicons.min.css" rel="stylesheet">
<script src="../dist/lib/chosenicons/zui.chosenicons.min.js"></script>
<script>
function onPageLoad() {return false;}
function afterPageLoad() {
    if($.fn.chosen) {
        $('#pageBody .chosen-select').each(function() {
            $(this).chosen($.extend({
                allow_single_deselect: true,
                search_contains: true,
                width: '100%'
            }, $(this).data()));
        }).on('change', function(e, data){
            console.log('change', e, data);
        });
    }
    if($.fn.chosenIcons) $('#chosenIcons').chosenIcons();
    setTimeout($.doc.stopPageLoading, 500);
}
</script>
