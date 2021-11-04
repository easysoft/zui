# 下拉选择器

## 介绍

选择器用于方便用户从多个选项列表中进行选择，是 [Chosen](#javascript/chosen) 插件的替代组件，相比较 Chosen 拥有如下特性：

* 性能更好的选项列表实现，不用一次性将所有选项显示在界面上，支持选项数目上限更大，体验更加流畅；
* 无需提前将所有可选项通过 `<option>` 插入到页面上，支持直接通过 JS 创建或实时生成可用选项；
* 选项列表还可以实时从服务器获取，无需受本地数据限制；
* 全局共享的弹出层元素，无需为页面上每一个选择器空间创建单独的弹出层元素；
* 弹出层不受选择器元素父级元素 `overflow` 样式影响导致弹出层出现在滚动区域之外而不可见的问题；
* 兼容 Chosen 用法，方便从 Chosen 迁移。

## 使用

### 引入

选择器组件为独立组件，需要从本地或 CDN 单独引入 lib 目录下的资源：

```html
<link href="lib/picker/zui.picker.min.css" rel="stylesheet">
<script src="lib/picker/zui.picker.min.js"></script>
```

在页面上添加需要启用选择器的元素：

```html
<div class="picker" id="picker">
  <input type="text" name="picker">
</div>
```

使用 jQuery 插件方法 `$.fn.picker` 进行初始化：

```js
$('#picker').picker(options); // options 为初始化选项对象
```

### 一般使用

使用 `.picker>input` 或 `.picker>input` 来构建选择器组件所需的元素，然后调用 `$.fn.picker` 方法来进行初始化。其中 `<input>` 元素的类型可以为 `text` 或 `hidden`，在初始化时必须通过 `list` 选项指定可选项列表。

<example>
  <div class="row">
    <div class="col-md-6">
      <label for="picker1">单选形式</label>
      <div class="picker" id="picker1" data-placeholder="选择一种食物">
        <input type="text" name="picker1">
      </div>
    </div>
    <div class="col-md-6">
      <label for="picker2">多选形式</label>
      <div class="picker" id="picker2" data-placeholder="选择几种食物" data-multi="true">
        <input type="text" name="picker2">
      </div>
    </div>
  </div>
</example>

```html
<div class="picker" id="picker1" data-placeholder="选择一种食物">
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
<div class="picker" id="picker2" data-placeholder="选择几种食物" data-multi="true">
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

### 使用 `<select>`

可以直接在 `<select>` 元素上初始化选择器组件，此时所有已存在的 `<option>` 都将自动作为选项。

<example>
  <div class="row">
    <div class="col-md-6">
      <label for="picker3">使用 <code>select</code> 单选形式</label>
      <select name="picker3" id="picker3" data-placeholder="选择一个宠物..." class="form-control">
        <option value=""></option>
        <option value="cat" data-keys="xiaomao">小猫</option>
        <option value="fish" data-keys="jinyu">金鱼</option>
        <option value="dragon" data-keys="long">龙</option>
        <option value="mammoth" data-keys="mengma">猛犸</option>
        <option value="gollum" data-keys="gulu">咕噜</option>
      </select>
    </div>
    <div class="col-md-6">
      <label for="picker4">使用 <code>select</code> 多选形式</label>
      <select name="picker4" id="picker4" data-placeholder="选择一些爱吃的水果..." class="form-control" multiple>
        <option value="strawberries" data-keys="caomei">草莓</option>
        <option selected value="apple" data-keys="pingguo">苹果</option>
        <option selected value="orange" data-keys="chengzi">橙子</option>
        <option value="cherry" data-keys="yingtao">樱桃</option>
        <option value="banana" data-keys="xiangjiao">香蕉</option>
        <option value="figs" data-keys="wuhuaguo">无花果</option>
        <option value="kiwi" data-keys="mihoutao">猕猴桃</option>
        <option value="pineapple" data-keys="biluo">菠萝</option>
        <option value="cantaloupe" data-keys="hamigua">哈密瓜</option>
        <option value="watermelon" data-keys="xigua">西瓜</option>
      </select>
    </div>
  </div>
</example>

```html
<select name="picker3" id="picker3" data-placeholder="选择一个宠物..." class="form-control">
  <option value=""></option>
  <option value="cat" data-keys="xiaomao">小猫</option>
  <option value="fish" data-keys="jinyu">金鱼</option>
  <!-- ... -->
</select>

<script>
$('#picker3').picker();
</script>
```

```html
<select name="picker4" id="picker4" data-placeholder="选择一些爱吃的水果..." class="form-control" multiple>
  <option value="strawberries" data-keys="caomei">草莓</option>
  <option selected value="apple" data-keys="pingguo">苹果</option>
  <!-- ... -->
</select>

<script>
$('#picker4').picker();
</script>
```

### 下拉面板宽度

**固定宽度**

下拉面板宽度默认情况下宽度与组件所在容器元素宽度一致即 `'100%'`。如果需要修改下拉面板宽度可以通过初始化选项 `dropWidth` 来设置。

<example>
  <div class="row">
    <div class="col-md-6">
      <label for="picker5">下拉面板宽度 100px（单选形式）</label>
      <div class="picker" id="picker5" data-placeholder="选择一种食物" data-drop-width="100">
        <input type="text" name="picker5">
      </div>
    </div>
    <div class="col-md-6">
      <label for="picker6">下拉面板宽度 200px（多选形式）</label>
      <div class="picker" id="picker6" data-placeholder="选择几种食物" data-multi="true" data-drop-width="200">
        <input type="text" name="picker6">
      </div>
    </div>
  </div>
</example>

```html
<div class="picker" id="picker5" data-placeholder="选择一种食物" data-drop-width="100">
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
<div class="picker" id="picker6" data-placeholder="选择几种食物" data-multi="true" data-drop-width="200">
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

**自动宽度**

将选项 `dropWidth` 设置为 `'auto'` 则自动根据下拉菜单中显示的选项显示文本长度决定下拉面板宽度，尽可能使面板宽度更小的同时保证下拉选项文本显示完整。此时可以设置 `maxAutoDropWidth` 来设置自动宽度上限。

<example>
  <div class="row">
    <div class="col-md-6">
      <label for="picker7">自动下拉面板宽度（单选形式）</label>
      <div class="picker" id="picker7" data-placeholder="选择一种食物" data-drop-width="auto">
        <input type="text" name="picker7">
      </div>
    </div>
    <div class="col-md-6">
      <label for="picker8">自动下拉面板宽度（多选形式）</label>
      <div class="picker" id="picker8" data-placeholder="选择几种食物" data-multi="true" data-drop-width="auto">
        <input type="text" name="picker8">
      </div>
    </div>
  </div>
</example>

```html
<div class="picker" id="picker7" data-placeholder="选择一种食物" data-drop-width="auto">
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
<div class="picker" id="picker8" data-placeholder="选择几种食物" data-multi="true" data-drop-width="auto">
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

### 远程搜索

通过初始化选项 `remote` 来配置远程数据源，以便于从服务器搜索选项并设置选择器的值。

<example>
  <div class="row">
    <div class="col-md-6">
      <label for="picker9">远程搜索（单选形式）</label>
      <div class="picker" id="picker9" data-placeholder="输入“禅道”或“ZUI”来搜索" data-drop-width="auto">
        <input type="text" name="picker9">
      </div>
    </div>
    <div class="col-md-6">
      <label for="picker10">远程搜索（多选形式，网速慢）</label>
      <div class="picker" id="picker10" data-placeholder="输入“禅道”或“ZUI”来搜索" data-multi="true" data-drop-width="auto">
        <input type="text" name="picker10">
      </div>
    </div>
  </div>
</example>

```html
<div class="picker" id="picker9" data-placeholder="输入“禅道”或“ZUI”来搜索" data-drop-width="auto">
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
<div class="picker" id="picker10" data-placeholder="输入“禅道”或“ZUI”来搜索" data-multi="true" data-drop-width="auto">
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

### 拖放排序

当页面上引入[拖放排序](#javascript/sortable)插件后，可以通过开启选项 `sortValuesByDnd` 来允许用户拖放选中的值进行排序。

<example>
  <select id="picker11" name="picker11" data-placeholder="选择并拖放进行排序..." class="form-control" multiple data-sort-values-by-dnd="true">
    <option value="strawberries" data-keys="caomei">草莓</option>
    <option selected value="apple" data-keys="pingguo">苹果</option>
    <option selected value="orange" data-keys="chengzi">橙子</option>
    <option value="cherry" data-keys="yingtao">樱桃</option>
    <option value="banana" data-keys="xiangjiao">香蕉</option>
    <option value="figs" data-keys="wuhuaguo">无花果</option>
    <option value="kiwi" data-keys="mihoutao">猕猴桃</option>
    <option value="pineapple" data-keys="biluo">菠萝</option>
    <option value="cantaloupe" data-keys="hamigua">哈密瓜</option>
    <option value="watermelon" data-keys="xigua">西瓜</option>
    <option value="plum" data-keys="lizi">李子</option>
  </select>
  <p id="picker11Value" class="alert">选中的值为：apple, orange</p>
</example>

```html
<select id="picker11" name="picker11" data-placeholder="选择并拖放进行排序..." class="form-control" multiple data-sort-values-by-dnd="true">
  <option value="strawberries" data-keys="caomei">草莓</option>
  <option selected value="apple" data-keys="pingguo">苹果</option>
  <!-- ... -->
</select>

<script>
$('#picker11').picker();
</script>
```

<script>
$('#picker11').on('change', function(e, data) {
    $('#picker11Value').text('选中的值为：' + data.value.join(', '));
});
</script>

### Chosen 兼容模式

为便于从 [Chosen](#javascript/chosen) 进行迁移，下拉选择器组件提供了 Chosen 兼容模式。启用 Chosen 兼容模式后，可以在无需引入 Chosen JS 和 CSS 资源的情况下使用 Chosen 初始化方法、选项和事件。

<example>
  <div class="row">
    <div class="col-md-6">
      <label class="code" for="picker12">Chosen 多选兼容模式</label>
      <select id="picker12" name="picker12" data-placeholder="选择几位英雄..." class="form-control">
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
        <option value="ajax_search_more" data-keys="gengduo… gd">更多…</option>
      </select>
    </div>
    <div class="col-md-6">
      <label class="code" for="picker13">Chosen 多选兼容模式</label>
      <select id="picker13" name="picker13" data-placeholder="选择几位英雄..." class="form-control" multiple>
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
        <option value="ajax_search_more" data-keys="gengduo… gd">更多…</option>
      </select>
    </div>
  </div>
</example>

```html
<select id="picker12" name="picker12" data-placeholder="选择几位英雄..." class="form-control">
  <option value="amy" data-keys="delaiesi dles">德莱厄斯</option>
  <option value="azalea" data-keys="gulajiasi gljs">古拉加斯</option>
  <!-- ... -->
</select>

<script>
// 启用 Chosen 兼容模式
$.Picker.enableChosen();

// 使用 Chosen 的方式进行初始化
$('#picker12').chosen({
    no_results_text: '没有找到啊',    // 当检索时没有找到匹配项时显示的提示文本
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

## 选项

在进行初始化时允许传入一个对象或者使用 [data-*] 属性参数作为初始化选项。可以使用的选项如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>参数</th>
      <th>名称</th>
      <th>类型和可选值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`lang`</td>
      <td>界面语言名称</td>
      <td>`'zh_cn'` `'zh_tw'` `'en'`，默认 `null`</td>
      <td>如果留空则自动使用浏览器或页面设置的语言。</td>
    </tr>
    <tr>
      <td>`multi`</td>
      <td>是否为多选模式</td>
      <td>`boolean` `'auto'`，默认 `'auto'`</td>
      <td>如果设置为 `'auto'`，对于 `<select>` 会判断 `multiple` 属性，否则作为单选模式。</td>
    </tr>
    <tr>
      <td>`list`</td>
      <td>本地选项列表</td>
      <td>`object[]` `function`，默认 `null`</td>
      <td>
        <ul>
          <li>使用数组指定本地选项列表，例如 `[{text: 'Apple', value: 'apple', keys: 'fruit foods'}, {text: 'Banana', value: 'banana', keys: 'fruit foods'}]`；</li>
          <li>通过一个函数动态返回选项列表，例如 `function({search, limit}){}`。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`defaultValue`</td>
      <td>默认值</td>
      <td>`string`，默认 `null`</td>
      <td>默认选中的选项的值。</td>
    </tr>
    <tr>
      <td>`remote`</td>
      <td>远程请求配置</td>
      <td>`object` `function` `string`，默认 `null`</td>
      <td>
        <p>可以通过如下方式设置远程请求配置：</p>
        <ul>
          <li>请求 URL 地址，使用 `{search}` 来预设地址中的搜索字符串，例如 `'/picker/fetch?search={search}&limit={limit}'`；</li>
          <li>JQuery Ajax 请求配置对象，例如 `{url: '/picker/fetch?search={search}', method: 'GET'}`；</li>
          <li>指定一个函数动态返回 Ajax 请求配置对象，例如 `function(responseData, textStatus, jqXHR, picker) {}`。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`remoteConverter`</td>
      <td>远程数据转换函数</td>
      <td>`function`，默认 `null`</td>
      <td>指定一个函数用于将远程请求返回的数据转换为选择器插件所需的数据。</td>
    </tr>
    <tr>
      <td>`remoteOnly`</td>
      <td>是否仅使用远程模式</td>
      <td>`boolean`，默认 `false`</td>
      <td>如果设置为 `true`，则启用远程模式，仅支持通过远程请求获取选项列表，此时需要同时指定 `remote` 选项。</td>
    </tr>
    <tr>
      <td>`remoteErrorHint`</td>
      <td>远程请出错时的提示文本</td>
      <td>`string`，默认 `null`</td>
      <td>如果不进行设置，则根据界面语言类型使用默认的提示文本，例如中文环境下是 `'无法从服务器获取结果 - ...'`</td>
    </tr>
    <tr>
      <td>`onRemoteError`</td>
      <td>远程请求错误时回调函数</td>
      <td>`function`，默认 `null`</td>
      <td>在远程请求出错时调用，可以通过此回调函数执行一些操作，并支持通过返回一个字符串作为错误信息提示文本显示在弹出面板上，如果不指定，则使用 `remoteErrorHint` 选项作为提示文本，默认为 `'无法从服务器获取结果'`。</td>
    </tr>
    <tr>
      <td>`disableEmptySearch`</td>
      <td>是否禁用空字符作为搜索词</td>
      <td>`boolean`，默认 `false`</td>
      <td>如果设置为 `true`，当用户不输入任何搜索关键字时将不会显示选项列表。</td>
    </tr>
    <tr>
      <td>`textKey`</td>
      <td>选项显示文本名</td>
      <td>`string`，默认 `'text'`</td>
      <td>选项对象上作为显示文本的属性名。</td>
    </tr>
    <tr>
      <td>`valueKey`</td>
      <td>选项值名</td>
      <td>`string`，默认 `'value'`</td>
      <td>选项对象上作为选项值的属性名。</td>
    </tr>
    <tr>
      <td>`keysKey`</td>
      <td>关键词名</td>
      <td>`string`，默认 `'keys'`</td>
      <td>选项对象上作为搜索关键词的属性名。</td>
    </tr>
    <tr>
      <td>`formItem`</td>
      <td>绑定的表单元素</td>
      <td>`string`，默认 `'auto'`</td>
      <td>如果设置为 `'auto'`，自动在当前元素内查找符合如下选择器 `'.form-item,input[type="hidden"],select,input[type="text"]'` 的元素作为绑定的表单元素，如果设置为 `'self'` 则使用当前元素作为表单元素，其他情况则将此选项作为 jQuery 选择器在当前元素内查找符合条件的元素。</td>
    </tr>
    <tr>
      <td>`allowSingleDeselect`</td>
      <td>允许清除单选值</td>
      <td>`boolean` `'auto'`，默认 `'auto'`</td>
      <td>如果设置为 `true`，在单选模式会显示一个清除按钮用于将当前值设置为空字符串，如果设置为 `auto`，当可用选项中包含空字符串时会显示清除按钮，如果设置为 `false`，任何时候都不会显示清除按钮。</td>
    </tr>
    <tr>
      <td>`showMultiSelectedOptions`</td>
      <td>显示已选中的多选选项</td>
      <td>`boolean`，默认 `false`</td>
      <td>如果设置为 `true`，在多选模式下基本用户已经选中的选项仍然会出现在下拉面板中，但无法进行再次选中。</td>
    </tr>
    <tr>
      <td>`autoSelectFirst`</td>
      <td>是否自动选中第一项</td>
      <td>`boolean`，默认 `false`</td>
      <td>如果设置为 `true`，当没有指定默认值时，自动选中可选项列表中的第一项。</td>
    </tr>
    <!-- <tr>
      <td>`optionItemFormatter`</td>
      <td>选项格式化函数</td>
      <td>`function`，默认 `null`</td>
      <td>
        <p>指定一个回调函数，用于格式化选项列表上的列表项元素，回调函数参数定义如下</p>
        <ul>
          <li>`$item`：选项元素；</li>
          <li>`picker`：选择器实例对象。</li>
        </ul>
      </td>
    </tr> -->
    <tr>
      <td>`maxSelectedCount`</td>
      <td>最多选择数目</td>
      <td>`number`，默认 `0`</td>
      <td>多选模式下最多选择的选项数目，如果为 `0` 则无限制。</td>
    </tr>
    <tr>
      <td>`maxListCount`</td>
      <td>最多选项数目</td>
      <td>`number`，默认 `0`</td>
      <td>选项列表中最多显示的选项数目，如果为 `0` 则无限制。</td>
    </tr>
    <tr>
      <td>`hideEmptyTextOption`</td>
      <td>隐藏显示文本为空的选项</td>
      <td>`boolean`，默认 `true`</td>
      <td>当选项显示文本为空时，不在选项列表中显示此选项。</td>
    </tr>
    <tr>
      <td>`searchValueKey`</td>
      <td>是否搜索选项值</td>
      <td>`boolean`，默认 `true`</td>
      <td>当设置为 `true` 时，允许使用搜索词匹配选项的值。</td>
    </tr>
    <tr>
      <td>`emptyResultHint`</td>
      <td>无可用选项时的提示</td>
      <td>`string`，默认 `null`</td>
      <td>如果设置为 `null`，则根据界面语言类型使用默认的提示文本，例如中文环境下是 `'没有可选项'`。</td>
    </tr>
    <tr>
      <td>`hideOnWindowScroll`</td>
      <td>滚动页面时隐藏下拉菜单</td>
      <td>`boolean`，默认 `true`</td>
      <td>如果设置为 `true` 滚动窗口或页面时隐藏下拉菜单</td>
    </tr>
    <tr>
      <td>`inheritFormItemClasses`</td>
      <td>从表单元素集成类</td>
      <td>`boolean`，默认 `false`</td>
      <td>如果设置为 `true` 则从表单元素继承 CSS 类名。</td>
    </tr>
    <tr>
      <td>`emptySearchResultHint`</td>
      <td>无搜索结果时的提示</td>
      <td>`string`，默认 `null`</td>
      <td>如果设置为 `null`，则根据界面语言类型使用默认的提示文本，例如中文环境下是 `'沒有找到 “{0}”'`。</td>
    </tr>
    <tr>
      <td>`accurateSearchHint`</td>
      <td>需要精确搜索时的提示</td>
      <td>`string`，默认 `null`</td>
      <td>如果设置为 `null`，则根据界面语言类型使用默认的提示文本，例如中文环境下是 `'请提供更多关键词缩小匹配范围'`。</td>
    </tr>
    <!-- <tr>
      <td>`deleteByBackspace`</td>
      <td>允许通过退格键删除</td>
      <td>`boolean`，默认 `true`</td>
      <td>多选模式下允许通过退格键删除之前选中的选项，此选项需要同时启用 `hotkey` 选项。</td>
    </tr> -->
    <tr>
      <td>`disableScrollOnShow`</td>
      <td>临时禁用页面滚动</td>
      <td>`boolean`，默认 `true`</td>
      <td>当下拉菜单显示时会暂时禁用页面滚动。</td>
    </tr>
    <tr>
      <td>`placeholder`</td>
      <td>未选择时提示文本</td>
      <td>`string`，默认 `null`</td>
      <td>当用户没有选中任何选项或者选中的选项值为空时的提示文本</td>
    </tr>
    <tr>
      <td>`maxDropHeight`</td>
      <td>下拉面板最大高度</td>
      <td>`number`，默认 `250`</td>
      <td></td>
    </tr>
    <tr>
      <td>`dropDirection`</td>
      <td>下拉面板弹出方向</td>
      <td>`'top'` `'bottom'` `function`，默认 `'auto'`</td>
      <td>
        <p>允许如下形式：</p>
        <ul>
          <li>`'bottom'`：显示在控件下方；</li>
          <li>`'bottom'`：显示在控件上方；</li>
          <li>`'auto'`：根据控件在页面上的位置，自动选择可用空间更大的方向弹出；</li>
          <li>`function`：通过一个函数动态返回每次弹出的方向，该函数需要返回 `'top'` 或 `'bottom'`；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`dropWidth`</td>
      <td>下拉面板宽度</td>
      <td>`string`，默认 `'100%'`</td>
      <td>支持 CSS 长度单位形式的字符串，如果设置为 `'auto'` 则自动根据下拉面板中展示的选项显示宽度计算出一个最合适的宽度，但不超过选项 `maxAutoDropWidth` 指定的最大值。</td>
    </tr>
    <tr>
      <td>`maxAutoDropWidth`</td>
      <td>下拉面板最大自动宽度</td>
      <td>`number`，默认 `450`</td>
      <td>当 `dropWidth` 选项设置为 `'auto'` 时，使用此选项值限制最终宽度。</td>
    </tr>
    <tr>
      <td>`multiValueSplitter`</td>
      <td>多选值分隔字符</td>
      <td>`string`，默认 `','`</td>
      <td>在多选模式下，使用此字符来拼接选中的所有选项的值。</td>
    </tr>
    <tr>
      <td>`searchDelay`</td>
      <td>搜索请求延时（毫秒）</td>
      <td>`number`，默认 `200`</td>
      <td>当搜索词变更时会进行延时请求，避免短期内多次请求服务器。</td>
    </tr>
    <tr>
      <td>`autoClearDrop`</td>
      <td>自动清除时间（毫秒）</td>
      <td>`number`，默认 `60000`</td>
      <td>自动清除生成的下拉菜单元素时间，如果设置为 `0` 则不自动清除。</td>
    </tr>
    <!-- <tr>
      <td>`fixLabelFor`</td>
      <td>修正 for 属性</td>
      <td>`boolean`，默认 `true`</td>
      <td>为 label 元素自动修正 `for` 属性。</td>
    </tr> -->
    <tr>
      <td>`hotkey`</td>
      <td>启用快捷键</td>
      <td>`boolean`，默认 `true`</td>
      <td>启用快捷键后，可以在下拉面板显示时通过 <kbd>Up</kbd>、<kbd>Down</kbd> 选择选项，通过 <kbd>Enter</kbd> 键确认选项，通过 <kbd>Backspace</kbd> 键删除前一个选中项。</td>
    </tr>
    <tr>
      <td>`sortValuesByDnd`</td>
      <td>拖放对选中值排序</td>
      <td>`boolean`，默认 `false`</td>
      <td>如果设置为 `true`，则支持在多选模式下对已经选中的选项进行拖放排序。注意需要页面引入[拖放排序](#javascript/sortable)插件。</td>
    </tr>
    <tr>
      <td>`valueMustInList`</td>
      <td>值必须在选项列表中</td>
      <td>`boolean`，默认 `true`</td>
      <td>如果设置为 `true`，则选中的值必须为选项列表中提供的选项的值，此选项要求选项 `remoteOnly` 设置为 `false`。</td>
    </tr>
  </tbody>
</table>

## 方法

### `setValue(value)`

设置选中的值，其中参数 `value` 为要设置的值。

```js
// 获取选择器实例对象
var myPicker = $('#myPicker').data('zui.picker');

// 设置选中的值。
myPicker.setValue();
```

### `getValue()`

获取选中的值。

```js
// 获取选择器实例对象
var myPicker = $('#myPicker').data('zui.picker');

// 获取选中的值。
myPicker.setValue();
```

### `focus()`

激活搜索框。

```js
// 获取选择器实例对象
var myPicker = $('#myPicker').data('zui.picker');

// 激活搜索框
myPicker.focus();
```

### `showDropList()`

显示下拉菜单。

```js
// 获取选择器实例对象
var myPicker = $('#myPicker').data('zui.picker');

// 显示下拉菜单
myPicker.showDropList();
```

### `hideDropList()`

隐藏下拉菜单。

```js
// 获取选择器实例对象
var myPicker = $('#myPicker').data('zui.picker');

// 隐藏下拉菜单
myPicker.hideDropList();
```

### `destroy()`

销毁选择器。

```js
// 获取选择器实例对象
var myPicker = $('#myPicker').data('zui.picker');

// 执行销毁
myPicker.destroy();
```

## 事件

### `onSelect`

当有选项选中时触发，回调函数参数 `event` 对象属性定义如下：

* `value`：选中的值；
* `picker`：选择器实例对象。

```js
// 在初始化的时候设置事件回调函数
$('#picker').picker({
    onSelect: function(event) {
        // 处理事件
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#picker').on('select', function(event) {
    // 处理事件
});
```

### `onDeselect`

当有选项取消选中时触发，回调函数参数 `event` 对象属性定义如下：

* `value`：被取消选中的值；
* `picker`：选择器实例对象。

```js
// 在初始化的时候设置事件回调函数
$('#picker').picker({
    onDeselect: function(event) {
        // 处理事件
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#picker').on('deselect', function(event) {
    // 处理事件
});
```

### `beforeChange`

当有选中值变更时触发，回调函数参数 `event` 对象属性定义如下：

* `value`：新的值；
* `oldValue`：旧的值。

```js
// 在初始化的时候设置事件回调函数
$('#picker').picker({
    onBeforeChange: function(event) {
        // 处理事件
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#picker').on('beforeChange', function(event) {
    // 处理事件
});
```

### `onChange`

当值变更后时触发，回调函数参数 `event` 对象属性定义如下：

* `value`：变更后的值；
* `picker`：选择器实例对象。

```js
// 在初始化的时候设置事件回调函数
$('#picker').picker({
    onChange: function(event) {
        // 处理事件
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#picker').on('change', function(event) {
    // 处理事件
});
```

### `onReady`

当可用时时触发，回调函数参数 `event` 对象属性定义如下：

* `picker`：选择器实例对象。

```js
// 在初始化的时候设置事件回调函数
$('#picker').picker({
    onReady: function(event) {
        // 处理事件
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#picker').on('ready', function(event) {
    // 处理事件
});
```

### `onNoResults`

当无匹配选时触发，回调函数参数 `event` 对象属性定义如下：

* `search`：当前搜索关键词文本；
* `picker`：选择器实例对象。

```js
// 在初始化的时候设置事件回调函数
$('#picker').picker({
    onNoResults: function(event) {
        // 处理事件
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#picker').on('noResults', function(event) {
    // 处理事件
});
```

### `onShowingDrop`

当显示下拉菜单时触发，回调函数参数 `event` 对象属性定义如下：

* `picker`：选择器实例对象。

```js
// 在初始化的时候设置事件回调函数
$('#picker').picker({
    onShowingDrop: function(event) {
        // 处理事件
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#picker').on('showingDrop', function(event) {
    // 处理事件
});
```

### `onHidingDrop`

当隐藏下拉菜单时触发，回调函数参数 `event` 对象属性定义如下：

* `picker`：选择器实例对象。

```js
// 在初始化的时候设置事件回调函数
$('#picker').picker({
    onHidingDrop: function(event) {
        // 处理事件
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#picker').on('hidingDrop', function(event) {
    // 处理事件
});
```

### `onShowedDrop`

当显示下拉菜单时触发，回调函数参数 `event` 对象属性定义如下：

* `picker`：选择器实例对象。

```js
// 在初始化的时候设置事件回调函数
$('#picker').picker({
    onShowedDrop: function(event) {
        // 处理事件
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#picker').on('showedDrop', function(event) {
    // 处理事件
});
```

### `onHiddenDrop`

当隐藏下拉菜单时触发，回调函数参数 `event` 对象属性定义如下：

* `picker`：选择器实例对象。

```js
// 在初始化的时候设置事件回调函数
$('#picker').picker({
    onHiddenDrop: function(event) {
        // 处理事件
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#picker').on('hiddenDrop', function(event) {
    // 处理事件
});
```

<script src="dist/lib/picker/zui.picker.js"></script>
<script src="dist/lib/sortable/zui.sortable.js"></script>
<script src="dist/lib/ajaxFake/zui.ajaxFake"></script>
<link href="dist/lib/picker/zui.picker.css" rel="stylesheet">

<script>
// 以下模拟服务器响应，动态返回搜索结果
var allRemoteItems = [];
for (var i = 1; i <= 100; ++i) {
  allRemoteItems.push({text: 'ZUI第' + i + '期', value: 'zui-' + i});
}
for (var i = 1; i <= 100; ++i) {
  allRemoteItems.push({text: '禅道项目管理第' + i + '期', value: 'zentao-' + i});
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
    no_results_text: '没有找到啊',    // 当检索时没有找到匹配项时显示的提示文本
    disable_search_threshold: 10, // 10 个以下的选择项则不显示检索框
    search_contains: true         // 从任意位置开始检索
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
