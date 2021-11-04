# Picker

## Introduction

The picker is an alternative component to the [Chosen](#javascript/chosen). It is used to pick one or multiple values in options list. It has following features.

## Usage

### Import

Picker is standalone components that need to be imported from local or CDN sources under the Lib directory:

```html
<link href="lib/picker/zui.picker.min.css" rel="stylesheet">
<script src="lib/picker/zui.picker.min.js"></script>
```

Add some elements to page for using picker:

```html
<div class="picker" id="picker">
  <input type="text" name="picker">
</div>
```

Use jQuery method to initialize:

```js
$('#picker').picker(options); // options is initializing options.
```

### General use

Use pattern `.picker>input` or `.picker>input` to build dom structure, then call method `$.fn.picker` to initialize. The `<input>` element type could be `text` or `hidden`. You must set options list for initializing.

<example>
  <div class="row">
    <div class="col-md-6">
      <label for="picker1">Single selection</label>
      <div class="picker" id="picker1" data-placeholder="Select one kind of food">
        <input type="text" name="picker1">
      </div>
    </div>
    <div class="col-md-6">
      <label for="picker2">Multiple selection</label>
      <div class="picker" id="picker2" data-placeholder="Pick some foods" data-multi="true">
        <input type="text" name="picker2">
      </div>
    </div>
  </div>
</example>

```html
<div class="picker" id="picker1" data-placeholder="Select one kind of food">
  <input type="text" name="picker1">
</div>

<script>
var optionList = [
    {text: 'Apple', value: 'apple', keys: 'fruit foods'},
    {text: 'Banana', value: 'banana', keys: 'fruit foods'},
    // ...
];

$('#picker1').picker({list: optionList});
</script>
```

```html
<div class="picker" id="picker2" data-placeholder="Pick some foods" data-multi="true">
  <input type="text" name="picker2">
</div>

<script>
var optionList = [
    {text: 'Apple', value: 'apple', keys: 'fruit foods'},
    {text: 'Banana', value: 'banana', keys: 'fruit foods'},
    // ...
];

$('#picker2').picker({list: optionList});
</script>
```

### Use `<select>`

You can use `<select>` element to initialize picker, all existing `<option>` will be options list automatically.

<example>
  <div class="row">
    <div class="col-md-6">
      <label for="picker3">Use <code>select</code> tag(Single selection)</label>
      <select name="picker3" id="picker3" data-placeholder="Pick a pet..." class="form-control">
        <option value=""></option>
        <option value="cat" data-keys="xiaomao">Cat</option>
        <option value="fish" data-keys="jinyu">Goldfish</option>
        <option value="dragon" data-keys="long">Dragons</option>
        <option value="mammoth" data-keys="mengma">Mammoths</option>
        <option value="gollum" data-keys="gulu">Gollum</option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="picker4">Use <code>select</code> tag(Multiple selection)</label>
      <select name="picker4" id="picker4" data-placeholder="Pick some fruits..." class="form-control" multiple>
        <option value="strawberries" data-keys="caomei">Strawberry </option>
        <option selected value="apple" data-keys="pingguo">Apple</option>
        <option selected value="orange" data-keys="chengzi">Orange</option>
        <option value="cherry" data-keys="yingtao">Cherry</option>
        <option value="banana" data-keys="xiangjiao">Cherry</option>
        <option value="figs" data-keys="wuhuaguo">Figs</option>
        <option value="kiwi" data-keys="mihoutao">Kiwi</option>
        <option value="pineapple" data-keys="biluo">Pineapple</option>
        <option value="cantaloupe" data-keys="hamigua">Cantaloupe</option>
        <option value="watermelon" data-keys="xigua">Watermelon</option>
      </select>
    </div>
  </div>
</example>

```html
<select name="picker3" id="picker3" data-placeholder="Pick a pet..." class="form-control">
  <option value=""></option>
  <option value="cat" data-keys="xiaomao">Cat</option>
  <option value="fish" data-keys="jinyu">Goldfish</option>
  <!-- ... -->
</select>

<script>
$('#picker3').picker();
</script>
```

```html
<select name="picker4" id="picker4" data-placeholder="Pick some fruits..." class="form-control" multiple>
  <option value="strawberries" data-keys="caomei">Strawberries</option>
  <option selected value="apple" data-keys="pingguo">Apple</option>
  <!-- ... -->
</select>

<script>
$('#picker4').picker();
</script>
```

### Drop-list size

**Fixed width**

By default, the width of the drop-list panel is consistent with the width of the container element where the component is located, i.e. '100%'. If you need to modify the width of the drop-list panel, you can set it through the initialization option 'dropwidth'.

<example>
  <div class="row">
    <div class="col-md-6">
      <label for="picker5">Drop-list size 100px（Single selection）</label>
      <div class="picker" id="picker5" data-placeholder="Select one kind of food" data-drop-width="100">
        <input type="text" name="picker5">
      </div>
    </div>
    <div class="col-md-6">
      <label for="picker6">Drop-list size 200px（Multiple selection）</label>
      <div class="picker" id="picker6" data-placeholder="Pick some foods" data-multi="true" data-drop-width="200">
        <input type="text" name="picker6">
      </div>
    </div>
  </div>
</example>

```html
<div class="picker" id="picker5" data-placeholder="Select one kind of food" data-drop-width="100">
  <input type="text" name="picker5">
</div>

<script>
var optionList = [
    {text: 'Apple', value: 'apple', keys: 'fruit foods'},
    {text: 'Banana', value: 'banana', keys: 'fruit foods'},
    // ...
];

$('#picker5').picker({list: optionList});
</script>
```

```html
<div class="picker" id="picker6" data-placeholder="Pick some foods" data-multi="true" data-drop-width="200">
  <input type="text" name="picker6">
</div>

<script>
var optionList = [
    {text: 'Apple', value: 'apple', keys: 'fruit foods'},
    {text: 'Banana', value: 'banana', keys: 'fruit foods'},
    // ...
];

$('#picker6').picker({list: optionList});
</script>
```

**Automatic width**

You can set the option `dropWidth` to` 'auto'`. You can set the option `maxAutoDropWidth` to set the upper limit of the automatic width.

<example>
  <div class="row">
    <div class="col-md-6">
      <label for="picker7">Automatic width（Single selection）</label>
      <div class="picker" id="picker7" data-placeholder="Select one kind of food" data-drop-width="auto">
        <input type="text" name="picker7">
      </div>
    </div>
    <div class="col-md-6">
      <label for="picker8">Automatic width（Multiple selection）</label>
      <div class="picker" id="picker8" data-placeholder="Pick some foods" data-multi="true" data-drop-width="auto">
        <input type="text" name="picker8">
      </div>
    </div>
  </div>
</example>

```html
<div class="picker" id="picker7" data-placeholder="Select one kind of food" data-drop-width="auto">
  <input type="text" name="picker7">
</div>

<script>
var optionList = [
    {text: 'Apple', value: 'apple', keys: 'fruit foods'},
    {text: 'Banana', value: 'banana', keys: 'fruit foods'},
    // ...
];

$('#picker7').picker({list: optionList});
</script>
```

```html
<div class="picker" id="picker8" data-placeholder="Pick some foods" data-multi="true" data-drop-width="auto">
  <input type="text" name="picker8">
</div>

<script>
var optionList = [
    {text: 'Apple', value: 'apple', keys: 'fruit foods'},
    {text: 'Banana', value: 'banana', keys: 'fruit foods'},
    // ...
];

$('#picker8').picker({list: optionList});
</script>
```

### Search from remote

Configure the remote data source by initializing options `remote` for searching options from the remote server and set the value to the picker.

<example>
  <div class="row">
    <div class="col-md-6">
      <label for="picker9">Remote search（Single selection）</label>
      <div class="picker" id="picker9" data-placeholder="Type “zui” or “zentao” to search" data-drop-width="auto">
        <input type="text" name="picker9">
      </div>
    </div>
    <div class="col-md-6">
      <label for="picker10">Remote search（Multiple selection, slow networking）</label>
      <div class="picker" id="picker10" data-placeholder="Type “zui” or “zentao” to search" data-multi="true" data-drop-width="auto">
        <input type="text" name="picker10">
      </div>
    </div>
  </div>
</example>

```html
<div class="picker" id="picker9" data-placeholder="Type “zui” or “zentao” to search" data-drop-width="auto">
  <input type="text" name="picker9">
</div>

<script>
$('#picker9').picker({
    remote: '/picker-select.json?search={search}&limit={limit}',
    dropWidth: 'auto',
    remoteOnly: true
});
</script>
```

```html
<div class="picker" id="picker10" data-placeholder="Type “zui” or “zentao” to search" data-multi="true" data-drop-width="auto">
  <input type="text" name="picker10">
</div>

<script>
$('#picker10').picker({
    remote: '/picker-select.json?search={search}&limit={limit}',
    dropWidth: 'auto',
    remoteOnly: true
});
</script>
```

### Sort values by Drag-and-Drop

When the [Drag-and-Drop](# javascript/sortable) plug-in is imported to the page, the option `sortValuesByDnd` can be turned on to allow the user to drag and drop selected values for sorting.

<example>
  <select id="picker11" name="picker11" data-placeholder="Pick and sort by drag-and-drop..." class="form-control" multiple data-sort-values-by-dnd="true">
    <option value="strawberries" data-keys="caomei">Strawberries</option>
    <option selected value="apple" data-keys="pingguo">Apple</option>
    <option selected value="orange" data-keys="chengzi">Orange</option>
    <option value="cherry" data-keys="yingtao">Cherry</option>
    <option value="banana" data-keys="xiangjiao">Banana</option>
    <option value="figs" data-keys="wuhuaguo">Figs</option>
    <option value="kiwi" data-keys="mihoutao">Kiwi</option>
    <option value="pineapple" data-keys="biluo">Pineapple</option>
    <option value="cantaloupe" data-keys="hamigua">Cantaloupe</option>
    <option value="watermelon" data-keys="xigua">Watermelon</option>
    <option value="plum" data-keys="lizi">Plum</option>
  </select>
  <p id="picker11Value" class="alert">The selected values: apple, orange</p>
</example>

```html
<select id="picker11" name="picker11" data-placeholder="Pick and sort by drag-and-drop..." class="form-control" multiple data-sort-values-by-dnd="true">
  <option value="strawberries" data-keys="caomei">Strawberries</option>
  <option selected value="apple" data-keys="pingguo">Apple</option>
  <!-- ... -->
</select>

<script>
$('#picker11').picker();
</script>
```

<script>
$('#picker11').on('change', function(e, data) {
    $('#picker11Value').text('The selected values: ' + data.value.join(', '));
});
</script>

### Chosen compatibility mode

To facilitate migration from [Chosen](#javascript/chosen), the picker component provides the Chosen compatibility mode. Once the Chosen compatibility mode is enabled, you can use the Chosen initialization method, options, and events without introducing Chosen JS and CSS resources.

<example>
  <div class="row">
    <div class="col-md-6">
      <label class="code" for="picker12">Chosen (Single selection)</label>
      <select id="picker12" name="picker12" data-placeholder="Pick one hero..." class="form-control">
        <option value="amy" data-keys="delaiesi dles">德莱厄斯</option>
        <option value="azalea" data-keys="gulajiasi gljs">古拉加斯</option>
        <option value="bixiaomin" data-keys="kuiyin ky">奎因</option>
        <option value="chenchulian" data-keys="leikedun lkd">雷克顿</option>
        <option value="chenfei" data-keys="aixi ax">埃希</option>
        <option value="chenyao" data-keys="sake sk">萨科</option>
        <option value="chenzhixin" data-keys="lakesi lks">拉克丝</option>
        <option value="chujilu" data-keys="kalimu klm">卡里姆</option>
        <option value="chutingting" data-keys="naideli ndl">奈德丽</option>
        <option value="ctt" data-keys="yizeruier yzre">伊泽瑞尔</option>
        <option value="daitingting" data-keys="xiweier xwe">希维尔</option>
        <option value="dongyanyan" data-keys="feizi fz">菲兹</option>
        <option value="guanxiying" data-keys="yi y">易</option>
        <option value="hejin" data-keys="mengduo md">蒙多</option>
        <option value="heyoumin" data-keys="ruiwen rw">瑞雯</option>
        <option value="hongqian" data-keys="feidetike fdtk">费德提克</option>
        <option value="lifufu" data-keys="heimodingge hmdg">黑默丁格</option>
        <option value="liqiaqia" data-keys="lakesi lks">拉克丝</option>
        <option value="liugang" data-keys="tuqi tq">图奇</option>
        <option value="liujun" data-keys="moteng mt">魔腾</option>
        <option value="lixibi" data-keys="yuelike ylk">约里克</option>
        <option value="liyanling" data-keys="aixi ax">埃希</option>
        <option value="liyunling" data-keys="xiwana xwn">希瓦娜</option>
        <option value="lvtao" data-keys="ruizi rz">瑞兹</option>
        <option value="mianmian0723" data-keys="nuotileisi ntls">诺提勒斯</option>
        <option value="pengjiangxiu" data-keys="delaiwen dlw">德莱文</option>
        <option value="shiyangyang" data-keys="lakesi lks">拉克丝</option>
        <option value="sunguangming" data-keys="ruizi rz">瑞兹</option>
        <option value="sunhao" data-keys="kaier ke">凯尔</option>
        <option value="sunjinliang" data-keys="taidamier tdme">泰达米尔</option>
        <option value="sunningqin" data-keys="lefulan lfl">乐芙兰</option>
        <option value="tengfei" data-keys="wolike wlk">沃里克</option>
        <option value="testRight" data-keys="nunu nn">努努</option>
        <option value="wanglin" data-keys="sake sk">萨科</option>
        <option value="wangyidong" data-keys="airuiliya arly">艾瑞莉娅</option>
        <option value="weizhongxian" data-keys="eyunxiaojie eyxj">厄运小姐</option>
        <option value="wuliehao" data-keys="tuqi tq">图奇</option>
        <option value="wumo" data-keys="xiwana xwn">希瓦娜</option>
        <option value="wwccss" data-keys="bobi bb">波比</option>
        <option value="xuecaijie" data-keys="xiweier xwe">希维尔</option>
        <option value="xueyang" data-keys="suolaka slk">索拉卡</option>
        <option value="yangmiao" data-keys="saien se">赛恩</option>
        <option value="yangwei" data-keys="zhake zk">扎克</option>
        <option value="yangwenbin" data-keys="jiawensishi jwss">嘉文四世</option>
        <option value="yaozeyuan" data-keys="jiakesi jks">贾克斯</option>
        <option value="zhangjiahui" data-keys="amumu amm">阿木木</option>
        <option value="zhangliya" data-keys="yizeruier yzre">伊泽瑞尔</option>
        <option value="zhengqiaoyin" data-keys="jigesi jgs">吉格斯</option>
        <option value="zhubaoxin" data-keys="wei w">蔚</option>
        <option value="zhujinyong" data-keys="kaersasi kess">卡尔萨斯</option>
        <option value="AJAX_search_more" data-keys="gengduo… gd">更多…</option>
      </select>
    </div>
    <div class="col-md-6">
      <label class="code" for="picker13">Chosen (multiple selection)</label>
      <select id="picker13" name="picker13" data-placeholder="Pick some heroes..." class="form-control" multiple>
        <option value="amy" data-keys="delaiesi dles">德莱厄斯</option>
        <option value="azalea" data-keys="gulajiasi gljs">古拉加斯</option>
        <option value="bixiaomin" data-keys="kuiyin ky">奎因</option>
        <option value="chenchulian" data-keys="leikedun lkd">雷克顿</option>
        <option value="chenfei" data-keys="aixi ax">埃希</option>
        <option value="chenyao" data-keys="sake sk">萨科</option>
        <option value="chenzhixin" data-keys="lakesi lks">拉克丝</option>
        <option value="chujilu" data-keys="kalimu klm">卡里姆</option>
        <option value="chutingting" data-keys="naideli ndl">奈德丽</option>
        <option value="ctt" data-keys="yizeruier yzre">伊泽瑞尔</option>
        <option value="daitingting" data-keys="xiweier xwe">希维尔</option>
        <option value="dongyanyan" data-keys="feizi fz">菲兹</option>
        <option value="guanxiying" data-keys="yi y">易</option>
        <option value="hejin" data-keys="mengduo md">蒙多</option>
        <option value="heyoumin" data-keys="ruiwen rw">瑞雯</option>
        <option value="hongqian" data-keys="feidetike fdtk">费德提克</option>
        <option value="lifufu" data-keys="heimodingge hmdg">黑默丁格</option>
        <option value="liqiaqia" data-keys="lakesi lks">拉克丝</option>
        <option value="liugang" data-keys="tuqi tq">图奇</option>
        <option value="liujun" data-keys="moteng mt">魔腾</option>
        <option value="lixibi" data-keys="yuelike ylk">约里克</option>
        <option value="liyanling" data-keys="aixi ax">埃希</option>
        <option value="liyunling" data-keys="xiwana xwn">希瓦娜</option>
        <option value="lvtao" data-keys="ruizi rz">瑞兹</option>
        <option value="mianmian0723" data-keys="nuotileisi ntls">诺提勒斯</option>
        <option value="pengjiangxiu" data-keys="delaiwen dlw">德莱文</option>
        <option value="shiyangyang" data-keys="lakesi lks">拉克丝</option>
        <option value="sunguangming" data-keys="ruizi rz">瑞兹</option>
        <option value="sunhao" data-keys="kaier ke">凯尔</option>
        <option value="sunjinliang" data-keys="taidamier tdme">泰达米尔</option>
        <option value="sunningqin" data-keys="lefulan lfl">乐芙兰</option>
        <option value="tengfei" data-keys="wolike wlk">沃里克</option>
        <option value="testRight" data-keys="nunu nn">努努</option>
        <option value="wanglin" data-keys="sake sk">萨科</option>
        <option value="wangyidong" data-keys="airuiliya arly">艾瑞莉娅</option>
        <option value="weizhongxian" data-keys="eyunxiaojie eyxj">厄运小姐</option>
        <option value="wuliehao" data-keys="tuqi tq">图奇</option>
        <option value="wumo" data-keys="xiwana xwn">希瓦娜</option>
        <option value="wwccss" data-keys="bobi bb">波比</option>
        <option value="xuecaijie" data-keys="xiweier xwe">希维尔</option>
        <option value="xueyang" data-keys="suolaka slk">索拉卡</option>
        <option value="yangmiao" data-keys="saien se">赛恩</option>
        <option value="yangwei" data-keys="zhake zk">扎克</option>
        <option value="yangwenbin" data-keys="jiawensishi jwss">嘉文四世</option>
        <option value="yaozeyuan" data-keys="jiakesi jks">贾克斯</option>
        <option value="zhangjiahui" data-keys="amumu amm">阿木木</option>
        <option value="zhangliya" data-keys="yizeruier yzre">伊泽瑞尔</option>
        <option value="zhengqiaoyin" data-keys="jigesi jgs">吉格斯</option>
        <option value="zhubaoxin" data-keys="wei w">蔚</option>
        <option value="zhujinyong" data-keys="kaersasi kess">卡尔萨斯</option>
        <option value="AJAX_search_more" data-keys="gengduo… gd">更多…</option>
      </select>
    </div>
  </div>
</example>

```html
<select id="picker12" name="picker12" data-placeholder="Pick some heroes..." class="form-control">
  <option value="amy" data-keys="delaiesi dles">德莱厄斯</option>
  <option value="azalea" data-keys="gulajiasi gljs">古拉加斯</option>
  <!-- ... -->
</select>

<script>
// Enable chosen compatibility mode
$.Picker.enableChosen();

// Initialize with Chosen way
$('#picker12').chosen({
    no_results_text: 'Not found',    // 当检索时没有找到匹配项时显示的提示文本
    disable_search_threshold: 10,   // 10 个以下的选择项则不显示检索框
    search_contains: true           // 从任意位置开始检索
}).on('change', function(e, a) {
    console.log('chosen.change', e, a);
}).on('chosen:ready', function(e, a) {
    console.log('chosen.ready', e, a);
}).on('chosen:showing_dropdown', function(e, a) {
    console.log('chosen.showing_dropdown', e, a);
}).on('chosen:hiding_dropdown', function(e, a) {
    console.log('chosen.hiding_dropdown', e, a);
}).on('chosen:no_results', function(e, a) {
    console.log('chosen:no_results', e, a);
});
</script>
```

## Options

You can use an object as the initialization option in initialize method or set options with [data-*] attribute to the picker element. The options that can be used are as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Option</th>
      <th>Name</th>
      <th>Type and values</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`lang`</td>
      <td>Language name</td>
      <td>`'zh_cn'` `'zh_tw'` `'en'`, default is `null`</td>
      <td>If left blank, the language of the browser or page setup is automatically used.</td>
    </tr>
    <tr>
      <td>`multi`</td>
      <td>Multi-selection mode</td>
      <td>`boolean` `'auto'`, default is `'auto'`</td>
      <td>If it is `'auto'`, will check attribute "`multiple`" in `<select>` element, else will set to single-selection mode</td>
    </tr>
    <tr>
      <td>`list`</td>
      <td>Local options list</td>
      <td>`object[]` `function`, default is `null`</td>
      <td>
        <ul>
          <li>Use an array to specify a list of local options, for example `[{text: 'Apple', value: 'apple', keys: 'fruit foods'}, {text: 'Banana', value: 'banana', keys: 'fruit foods'}]`;</li>
          <li>Dynamically returned the list of options through a function, for example `function({search, limit}){}`.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`defaultValue`</td>
      <td>Default value</td>
      <td>`string`, default is `null`</td>
      <td></td>
    </tr>
    <tr>
      <td>`remote`</td>
      <td>Remote request configuration</td>
      <td>`object` `function` `string`, default is `null`</td>
      <td>
        <p>The remote request configuration can be set as follows:</p>
        <ul>
          <li>Request URL address, use `{search}` to preset the search string in the address, for example `'/picker/fetch?search={search}&limit={limit}'`;</li>
          <li>JQuery AJAX request options object, for example `{url: '/picker/fetch?search={search}', method: 'GET'}`;</li>
          <li>Specify a function dynamically returned AJAX request configuration object, for example `function(responseData, textStatus, jqXHR, picker) {}`.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`remoteConverter`</td>
      <td>Remote data conversion function</td>
      <td>`function`, default is `null`</td>
      <td>Specify a function to convert the data returned by the remote request to the data required for the selector plugin.</td>
    </tr>
    <tr>
      <td>`remoteOnly`</td>
      <td>Whether to use remote mode only</td>
      <td>`boolean`, default is `false`</td>
      <td>If set to `true`, enable remote mode, only support the list of options through the remote request, and you need to specify the `remote` option at this time.</td>
    </tr>
    <tr>
      <td>`remoteErrorHint`</td>
      <td>Error hint for remote request</td>
      <td>`string`, default is `null`</td>
      <td>If it is not set, the default prompt text is used according to the interface language type, such as the English environment is `Unable to get result from server: {0}`</td>
    </tr>
    <tr>
      <td>`onRemoteError`</td>
      <td>Callback for error request</td>
      <td>`function`, default is `null`</td>
      <td>When the request encounters an error, you can perform some operations through this callback function, and support the text displayed by returning a string as an error message, if not specified, use the `remote error hint` option as a prompt text. , Default is `Unable to get result from server: {0}`.</td>
    </tr>
    <tr>
      <td>`disableEmptySearch`</td>
      <td>Disable empty search</td>
      <td>`boolean`, default is `false`</td>
      <td>If set to ‘true ‘, the list of options will not be displayed when the user does not enter any search keywords.</td>
    </tr>
    <tr>
      <td>`textKey`</td>
      <td>Display text key</td>
      <td>`string`, default is `'text'`</td>
      <td>The name of the property on the option object as the display text.</td>
    </tr>
    <tr>
      <td>`valueKey`</td>
      <td>Value key</td>
      <td>`string`, default is `'value'`</td>
      <td>The name of the property on the option object as the option value.</td>
    </tr>
    <tr>
      <td>`keysKey`</td>
      <td>Search keys key</td>
      <td>`string`, default is `'keys'`</td>
      <td>The name of the property used as the search keywords on the option object.</td>
    </tr>
    <tr>
      <td>`formItem`</td>
      <td>The binding element</td>
      <td>`string`, default is `'auto'`</td>
      <td>It set to `'auto'`, automatically finds the following selector within the current element `'.form-item,input[type="hidden"],select,input[type="text"]'` as the binding form element, If set to `'self'` then use current element, in other cases, use this option as a jQuery selector to find qualified elements within the current element.</td>
    </tr>
    <tr>
      <td>`allowSingleDeselect`</td>
      <td>Allow deselect single selection</td>
      <td>`boolean` `'auto'`, default is `'auto'`</td>
      <td>If set to `true`, a clear button is displayed in the single-selection mode to set the current value to a empty string, If set to `auto`, The clear button only displayed when the available options values contains an empty string, If set to `false`, the clear button does not appear at any time.</td>
    </tr>
    <tr>
      <td>`showMultiSelectedOptions`</td>
      <td>Show selected multiple options</td>
      <td>`boolean`, default is `false`</td>
      <td>If set to `true`, the selected options in multiple selection modes will still appear in the drop-list panel, but they cannot be selected again.</td>
    </tr>
    <tr>
      <td>`autoSelectFirst`</td>
      <td>Select first option automatically</td>
      <td>`boolean`, default is `false`</td>
      <td>If set to `true`, when no default value is specified, the first item in the list of options is automatically selected.</td>
    </tr>
    <!-- <tr>
      <td>`optionItemFormatter`</td>
      <td>选项格式化函数</td>
      <td>`function`, default is `null`</td>
      <td>
        <p>指定一个回调函数, 用于格式化选项列表上的列表项元素, 回调函数参数定义如下</p>
        <ul>
          <li>`$item`: 选项元素;</li>
          <li>`picker`: picker object.</li>
        </ul>
      </td>
    </tr> -->
    <tr>
      <td>`maxSelectedCount`</td>
      <td>Max selected count</td>
      <td>`number`, default is `0`</td>
      <td>Maximum number of options in multi-selection mode, If it is `0`, there is no limit.</td>
    </tr>
    <tr>
      <td>`maxListCount`</td>
      <td>Max list count</td>
      <td>`number`, default is `0`</td>
      <td>The maximum number of options displayed in the list of options, If it is `0`, there is no limit.</td>
    </tr>
    <tr>
      <td>`hideEmptyTextOption`</td>
      <td>Hide option has empty text</td>
      <td>`boolean`, default is `true`</td>
      <td>The options which are empty text will not be displayed in drop-list.</td>
    </tr>
    <tr>
      <td>`searchValueKey`</td>
      <td>Enable search value</td>
      <td>`boolean`, default is `true`</td>
      <td>If set to `true`, allow to search options within its value.</td>
    </tr>
    <tr>
      <td>`emptyResultHint`</td>
      <td>Empty result hint</td>
      <td>`string`, default is `null`</td>
      <td>If set to `null`, the default prompt text is used depending on the interface language type, for example, in the English environment is `Cannot found "{0}"`.</td>
    </tr>
    <tr>
      <td>`hideOnWindowScroll`</td>
      <td>Hide drop-list on scrolling</td>
      <td>`boolean`, default is `true`</td>
      <td>If set to `true` will hide drop-list when scrolling window or page</td>
    </tr>
    <tr>
      <td>`inheritFormItemClasses`</td>
      <td>Inherit classes from form item</td>
      <td>`boolean`, default is `false`</td>
      <td>If set to `true` then inherits the CSS class name from the form element.</td>
    </tr>
    <tr>
      <td>`emptySearchResultHint`</td>
      <td>Hint when no search results</td>
      <td>`string`, default is `null`</td>
      <td>If set to `null`, the default prompt text is used depending on the interface language type, in the English environment is `Cannot found "{0}"`.</td>
    </tr>
    <tr>
      <td>`accurateSearchHint`</td>
      <td>Accurate search hint</td>
      <td>`string`, default is `null`</td>
      <td>If set to `null`, then use the default prompt text according to the interface language type, in the English environment is `'Suggest to provide more keywords'`.</td>
    </tr>
    <!-- <tr>
      <td>`deleteByBackspace`</td>
      <td>允许通过退格键删除</td>
      <td>`boolean`, default is `true`</td>
      <td>多选模式下允许通过退格键删除之前选中的选项, 此选项需要同时启用 `hotkey` 选项.</td>
    </tr> -->
    <tr>
      <td>`disableScrollOnShow`</td>
      <td>Disable scroll when drop-list show</td>
      <td>`boolean`, default is `true`</td>
      <td>If set to `true`, then disable scroll when drop-list has showed.</td>
    </tr>
    <tr>
      <td>`placeholder`</td>
      <td>Placeholder</td>
      <td>`string`, default is `null`</td>
      <td>Tips for the user when the user does not select any option or selected option value</td>
    </tr>
    <tr>
      <td>`maxDropHeight`</td>
      <td>Max height of drop-list</td>
      <td>`number`, default is `250`</td>
      <td></td>
    </tr>
    <tr>
      <td>`dropDirection`</td>
      <td>Drop direction</td>
      <td>`'top'` `'bottom'` `function`, default is `'auto'`</td>
      <td>
        <p>Allows the following:</p>
        <ul>
          <li>`'bottom'`: below the control;</li>
          <li>`'bottom'`: above the control;</li>
          <li>`'auto'`: automatically;</li>
          <li>`function`: Dynamically returned to the direction of each pop-up through a function, the function needs to return `'top'` or `'bottom'`;</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`dropWidth`</td>
      <td>Drop-list width</td>
      <td>`string`, default is `'100%'`</td>
      <td>Support for strings in the form of CSS length units, if set to `'auto'`, automatically calculate a most suitable width according to the option displayed in the drop-down panel, but does not exceed the maximum value of the option `maxAutoDropWidth` specified.</td>
    </tr>
    <tr>
      <td>`maxAutoDropWidth`</td>
      <td>Max drop-list width</td>
      <td>`number`, default is `450`</td>
      <td>When the `dropWidth` option is set to` 'auto'`, use this option value to limit the final width.</td>
    </tr>
    <tr>
      <td>`multiValueSplitter`</td>
      <td>Multiple values splitter</td>
      <td>`string`, default is `','`</td>
      <td>In multi-selection mode, this character is used to splicing all the selected values.</td>
    </tr>
    <tr>
      <td>`searchDelay`</td>
      <td>Search delay time</td>
      <td>`number`, default is `200`</td>
      <td>Delay requests are delayed when searching the word change, avoiding multiple request servers in the short term.</td>
    </tr>
    <tr>
      <td>`autoClearDrop`</td>
      <td>Time for clearing drop-list (ms)</td>
      <td>`number`, default is `60000`</td>
      <td>Automatically clear the generated drop-list element time, if set to `0`, do not automatically clear.</td>
    </tr>
    <!-- <tr>
      <td>`fixLabelFor`</td>
      <td>修正 for 属性</td>
      <td>`boolean`, default is `true`</td>
      <td>为 label 元素自动修正 `for` 属性.</td>
    </tr> -->
    <tr>
      <td>`hotkey`</td>
      <td>Enable hotkey</td>
      <td>`boolean`, default is `true`</td>
      <td>If enable hotkey, then user can press key <kbd>Up</kbd>、<kbd>Down</kbd> to select option, use <kbd>Enter</kbd> key to confirm option, use <kbd>Backspace</kbd> key to delete the forward selection in multiple-selection mode.</td>
    </tr>
    <tr>
      <td>`sortValuesByDnd`</td>
      <td>Sort values by drag-and-drop</td>
      <td>`boolean`, default is `false`</td>
      <td>If set to `true`, It is supported to drag and discount the options that have been selected in multi-selection mode. Note that the page is introduced into [Drag and drop](#javascript/sortable) plugin.</td>
    </tr>
    <tr>
      <td>`valueMustInList`</td>
      <td>Value must in options list</td>
      <td>`boolean`, default is `true`</td>
      <td>If set to `true`, then the selected value must be the value of the options provided in the list of options, this option requires options `remoteOnly` Set to` false`.</td>
    </tr>
  </tbody>
</table>

## Methods

### `setValue(value)`

Set the selected value, where the parameter `value` is the value to set.

```js
// Get instance object of picker
var myPicker = $('#myPicker').data('zui.picker');

// Set selected value.
myPicker.setValue();
```

### `getValue()`

Get selected value.

```js
// Get instance object of picker
var myPicker = $('#myPicker').data('zui.picker');

// Get selected value.
myPicker.setValue();
```

### `focus()`

Focus searchbox.

```js
// Get instance object of picker
var myPicker = $('#myPicker').data('zui.picker');

// Focus searchbox
myPicker.focus();
```

### `showDropList()`

Show drop-list panel.

```js
// Get instance object of picker
var myPicker = $('#myPicker').data('zui.picker');

// Show drop-list panel
myPicker.showDropList();
```

### `hideDropList()`

Hide drop-list panel.

```js
// Get instance object of picker
var myPicker = $('#myPicker').data('zui.picker');

// Hide drop-list panel
myPicker.hideDropList();
```

### `destroy()`

Destory picker.

```js
// Get instance object of picker
var myPicker = $('#myPicker').data('zui.picker');

// Destory picker
myPicker.destroy();
```

## Events

### `onSelect`

Triggered when an option is selected, the callback function parameter `event` object property is defined as follows:

* `value`: the selected value;
* `picker`: picker object.

```js
// Set event callback when initializing
$('#picker').picker({
    onSelect: function(event) {
        // Handle event
    }
});
```

```js
// Use jquery method $().on() to bind event
$('#picker').on('select', function(event) {
    // Handle event
});
```

### `onDeselect`

Triggered when an option is deselected, the callback function parameter `event` object property is defined as follows:

* `value`: The deselected value;
* `picker`: picker object.

```js
// Set event callback when initializing
$('#picker').picker({
    onDeselect: function(event) {
        // Handle event
    }
});
```

```js
// Use jquery method $().on() to bind event
$('#picker').on('deselect', function(event) {
    // Handle event
});
```

### `beforeChange`

Triggered before selected value change, the callback function parameter `event` object property is defined as follows:

* `value`: new value;
* `oldValue`: old value.

```js
// Set event callback when initializing
$('#picker').picker({
    onBeforeChange: function(event) {
        // Handle event
    }
});
```

```js
// Use jquery method $().on() to bind event
$('#picker').on('beforeChange', function(event) {
    // Handle event
});
```

### `onChange`

Triggered after selected value changed, the callback function parameter `event` object property is defined as follows:

* `value`: changed value;
* `picker`: picker object.

```js
// Set event callback when initializing
$('#picker').picker({
    onChange: function(event) {
        // Handle event
    }
});
```

```js
// Use jquery method $().on() to bind event
$('#picker').on('change', function(event) {
    // Handle event
});
```

### `onReady`

Triggered when picker is ready to use, the callback function parameter `event` object property is defined as follows:

* `picker`: picker object.

```js
// Set event callback when initializing
$('#picker').picker({
    onReady: function(event) {
        // Handle event
    }
});
```

```js
// Use jquery method $().on() to bind event
$('#picker').on('ready', function(event) {
    // Handle event
});
```

### `onNoResults`

Triggered when there is no results on searching, the callback function parameter `event` object property is defined as follows:

* `search`: searching keywords;
* `picker`: picker object.

```js
// Set event callback when initializing
$('#picker').picker({
    onNoResults: function(event) {
        // Handle event
    }
});
```

```js
// Use jquery method $().on() to bind event
$('#picker').on('noResults', function(event) {
    // Handle event
});
```

### `onShowingDrop`

Triggered before drop-list panel show, the callback function parameter `event` object property is defined as follows:

* `picker`: picker object.

```js
// Set event callback when initializing
$('#picker').picker({
    onShowingDrop: function(event) {
        // Handle event
    }
});
```

```js
// Use jquery method $().on() to bind event
$('#picker').on('showingDrop', function(event) {
    // Handle event
});
```

### `onHidingDrop`

Triggered before drop-list panel hide, the callback function parameter `event` object property is defined as follows:

* `picker`: picker object.

```js
// Set event callback when initializing
$('#picker').picker({
    onHidingDrop: function(event) {
        // Handle event
    }
});
```

```js
// Use jquery method $().on() to bind event
$('#picker').on('hidingDrop', function(event) {
    // Handle event
});
```

### `onShowedDrop`

Triggered after drop-list panel showed, the callback function parameter `event` object property is defined as follows:

* `picker`: picker object.

```js
// Set event callback when initializing
$('#picker').picker({
    onShowedDrop: function(event) {
        // Handle event
    }
});
```

```js
// Use jquery method $().on() to bind event
$('#picker').on('showedDrop', function(event) {
    // Handle event
});
```

### `onHiddenDrop`

Triggered after drop-list panel hide, the callback function parameter `event` object property is defined as follows:

* `picker`: picker object.

```js
// Set event callback when initializing
$('#picker').picker({
    onHiddenDrop: function(event) {
        // Handle event
    }
});
```

```js
// Use jquery method $().on() to bind event
$('#picker').on('hiddenDrop', function(event) {
    // Handle event
});
```

<script src="../dist/lib/picker/zui.picker.js"></script>
<script src="../dist/lib/sortable/zui.sortable.js"></script>
<script src="../dist/lib/AJAXFake/zui.AJAXFake"></script>
<link href="../dist/lib/picker/zui.picker.css" rel="stylesheet">

<script>
// 以下模拟服务器响应, 动态返回搜索结果
var allRemoteItems = [];
for (var i = 1; i <= 100; ++i) {
  allRemoteItems.push({text: 'ZUI Zentao ' + i, value: 'zui-' + i});
}
for (var i = 1; i <= 100; ++i) {
  allRemoteItems.push({text: 'Zentao project ' + i, value: 'zentao-' + i});
}
var fakeServerRoute = function(options) {
    search = options.data.search.toLowerCase();
    var items = [];
    for (var i = 0; i < allRemoteItems.length; ++i) {
      var item = allRemoteItems[i];
      if(item.text.toLowerCase().indexOf(search) >= 0 || item.value.toLowerCase().indexOf(search) >= 0) {
        items.push(item);
      }
      if (items.length >= options.data.limit) break;
    }
    return items;
};
$.fakeServer('/picker-select.json', fakeServerRoute, 2000);
$.fakeServer('/picker-select-fast.json', fakeServerRoute, 100);

var localPickerOptions = [
  {text: 'Apple', value: 'apple', keys: 'fruit foods'},
  {text: 'Banana', value: 'banana', keys: 'fruit foods'},
  {text: 'Orange', value: 'orange', keys: 'fruit foods'},
  {text: 'Sushi', value: 'sushi', keys: 'japanese foods'},
  {text: 'Noodles', value: 'noodles', keys: 'china foods'},
  {text: 'Dumplings', value: 'dumplings', keys: 'china foods'},
  {text: 'Water', value: 'water', keys: 'drink'},
  {text: 'Cake', value: 'cake', keys: 'foods'},
  {text: 'Rice', value: 'rice', keys: 'foods china'},
  {text: 'Pizza', value: 'pizza', keys: 'foods'},
  {text: 'Salad', value: 'salad', keys: 'foods'},
  {text: 'Cookie', value: 'cookie', keys: 'foods'},
  {text: 'Book', value: 'book'},
  {text: 'Cafe', value: 'Cafe', keys: 'drink'},
];

$('#picker1,#picker2,#picker5,#picker6,#picker7,#picker8').picker({list: localPickerOptions});
$('#picker3,#picker4,#picker11').picker();
$('#picker9').picker({
    remote: '/picker-select-fast.json',
    dropWidth: 'auto',
    remoteOnly: true
});
$('#picker10').picker({
    remote: '/picker-select.json',
    dropWidth: 'auto',
    remoteOnly: true
});

$.Picker.enableChosen();
$('#picker12,#picker13').chosen({
    no_results_text: 'Not found',
    disable_search_threshold: 10,
    search_contains: true
}).on('change', function(e, a) {
    console.log('chosen.change', e, a);
}).on('chosen:ready', function(e, a) {
    console.log('chosen.ready', e, a);
}).on('chosen:showing_dropdown', function(e, a) {
    console.log('chosen.showing_dropdown', e, a);
}).on('chosen:hiding_dropdown', function(e, a) {
    console.log('chosen.hiding_dropdown', e, a);
}).on('chosen:no_results', function(e, a) {
    console.log('chosen:no_results', e, a);
});
</script>
