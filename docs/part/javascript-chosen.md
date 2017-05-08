section: javascript
id: chosen
description: 提供数据选择和筛选功能
icon: icon-search
filter: 
---

# Chosen

Chosen是用来增强单选列表和多选列表的更佳选择。

<div class="alert alert-danger">
  <h4>兼容性问题</h4>
  <p>在触摸屏及移动设备上无法启用 Chosen。</p>
</div>

## 示例

### 单项选择和多项选择

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <select data-placeholder="选择一个宠物..." class="chosen-select form-control" tabindex="2">
        <option value=""></option>
        <option value="cat">小猫</option>
        <option value="fish">金鱼</option>
        <option value="dragon">龙</option>
        <option value="mammoth">猛犸</option>
        <option value="gollum">咕噜</option>
      </select>
    </div>
    <div class="col-md-6">
      <select data-placeholder="选择一些爱吃的水果..." class="chosen-select form-control" tabindex="2" multiple="">
        <option value="strawberries">草莓</option>
        <option value="apple">苹果</option>
        <option value="orange">橙子</option>
        <option value="cherry">樱桃</option>
        <option value="banana">香蕉</option>
        <option value="figs">无花果</option>
      </select>
    </div>
  </div>
</div>

```js
$('select.chosen-select').chosen({
    no_results_text: '没有找到',    // 当检索时没有找到匹配项时显示的提示文本
    disable_search_threshold: 10, // 10 个以下的选择项则不显示检索框
    search_contains: true         // 从任意位置开始检索
});
```

### 扩展检索

有时我们希望用户检索的更加开心，例如为汉语选项添加拼音检索支持。Chosen提供了扩展字段专门用来检索，只需要为`<option>`标签增加`data-keys="*"`属性。

`data-keys`属性可以用空格或英文逗号来分隔多个供检索的关键字。

<div class="example">
  <select data-placeholder="使用拼音检索，试试“m”或“xm”" class="chosen-select form-control" tabindex="2">
    <option value=""></option>
    <option value="cat" data-keys="xiaomao xm 猫科动物">小猫</option>
    <option value="fish" data-keys="jinyu jy">金鱼</option>
    <option value="dragon" data-keys="long">龙</option>
    <option value="mammoth" data-keys="mengma mm">猛犸</option>
    <option value="gollum" data-keys="gulu gl 神话">咕噜</option>
  </select>
</div>

<div class="alert alert-primary-inverse">
  <h4>提示</h4>
  <p>扩展检索本身并不提供拼音检索功能，如果你需要支持使用拼音检索时，需要你自己在chosen初始化之前在<code>data-keys</code>属性中写入拼音字符串。</p>
</div>

## 用法

### 引入资源

Chosen 为独立组件，你需要从本地或 CDN 单独引入 lib 目录下的资源：

```html
<link href="lib/chosen/chosen.min.css" rel="stylesheet">
<script src="lib/chosen/chosen.min.js"></script>
```

### 选项

<table class="table table-bordered">
  <thead>
    <tr>
      <th>参数</th>
      <th style="width: 80px">名称</th>
      <th style="width: 300px">可选值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`lang`</td>
      <td>界面语言</td>
      <td>
        <ul>
          <li><code>'zh_cn'</code>（默认）</li>
          <li><code>'zh_tw'</code></li>
          <li><code>'en'</code></li>
        </ul>
      </td>
      <td>如果不设置此值，会自动优先从 `<html>` 的 `[lang]` 属性作为界面语言设置。</td>
    </tr>
    <tr>
      <td>`allow_single_deselect`</td>
      <td>允许取消单选</td>
      <td>
        <ul>
          <li><code>'true'</code>：允许取消</li>
          <li><code>'false'</code>（默认）：不允许</li>
        </ul>
      <td>如果允许单选取消，则会在用户选择选项之后，显示一个移除按钮，点击此按钮会移除用户选择的项目。</td>
    </tr>
    <tr>
      <td>`disable_search`</td>
      <td>禁用检索</td>
      <td>
        <ul>
          <li><code>'true'</code>：禁用</li>
          <li><code>'false'</code>（默认）：不禁用</li>
        </ul>
      </td>
      <td>禁用检索功能，将不再现实搜索框来让用户检索选项。</td>
    </tr>
    <tr>
      <td>`disable_search_threshold`</td>
      <td>自动禁用的最大值</td>
      <td>数字，默认为`0`</td>
      <td>当可选选项数目小于或等于此值时，自动禁用检索选项。</td>
    </tr>
    <tr>
      <td>`inherit_select_classes`</td>
      <td>继承 `<select>` 的 CLASS</td>
      <td>默认为`false`</td>
      <td>如果设置为`true`，chosen 在初始化之后会获取原 `<select>` 上的CSS CLASS 值并添加在chosen容器 `.chosen-container`上。</select></td>
    </tr>
    <tr>
      <td>`max_selected_options`</td>
      <td>最大选择数目</td>
      <td>数字，默认为`Infinity`</td>
      <td>仅多选生效；当用户选择的选项数目达到此值时，将会触发`chosen:maxselected`事件。</td>
    </tr>
    <tr>
      <td>`no_results_text`</td>
      <td>无结果时的文本</td>
      <td>字符串，默认从语言配置获取</td>
      <td>当用户检索时没有匹配的结果会显示此文本。</td>
    </tr>
    <tr>
      <td>`placeholder_text`</td>
      <td>空值占位文本</td>
      <td>字符串，默认为`""`</td>
      <td>当用户没有选择选项时显示此文本；此选项也可以通过`<select>`的`data-placeholder`属性来指定。</select></td>
    </tr>
    <tr>
      <td>`placeholder_text_multiple`</td>
      <td>多选空值占位文本</td>
      <td>字符串，默认为`""`</td>
      <td>如果没有设置此选项，则会尝试读取`placeholder_text`选项的值。</td>
    </tr>
    <tr>
      <td>`placeholder_text_single`</td>
      <td>单选空值占位文本</td>
      <td>字符串，默认为`""`</td>
      <td>如果没有设置此选项，则会尝试读取`placeholder_text`选项的值。</td>
    </tr>
    <tr>
      <td>`search_contains`</td>
      <td>启用任意位置检索</td>
      <td>默认为`false`</td>
      <td>默认情况下，仅仅会从选项或检索关键字的开始进行匹配，例如`"he"`仅仅能匹配`"hello"`，不能匹配`"ahead"`，如果启用此选项，则可以从关键的任意位置进行匹配。</td>
    </tr>
    <tr>
      <td>`single_backstroke_delete`</td>
      <td>启用退格键删除</td>
      <td>默认为`true`</td>
      <td>仅多选生效；启用此选项允许用户在多选时按退格键（Backspace）和删除键（Delete）来删除上一个选择项。</td>
    </tr>
    <tr>
      <td>`width`</td>
      <td>宽度</td>
      <td>默认为原始`<select>`的宽度</select></td>
      <td>默认chosen的宽度与原始的`<select>`一致，如果原始的`</select>`在chosen初始化之前不可见，可能需要手动指定一个宽度，否则chosen的宽度会为`0`；如果使用响应式布局，建议宽度设定为`'100%'`。</td>
    </tr>
    <tr>
      <td>`display_disabled_options`</td>
      <td>显示不可选的选项</td>
      <td>默认为`true`</td>
      <td>默认情况下会在选项列表中显示不可选的选项，禁用此选项来隐藏不可选的选项。</td>
    </tr>
    <tr>
      <td>`display_selected_options`</td>
      <td>显示已选择的选项</td>
      <td>默认为`true`</td>
      <td>仅多选生效；禁用此选项则在选项列表中隐藏已选择的选项。</td>
    </tr>
    <tr>
      <td>`drop_direction`</td>
      <td>选项列表弹出方向</td>
      <td>
        <ul>
          <li><code>"auto"</code>（默认) 自动决定</li>
          <li><code>"down"</code></li>
          <li><code>"up"</code></li>
        </ul>
      </td>
      <td>在自动决定情况下默认向下弹出，如果下方空间不够会自动改为向上弹出</td>
    </tr>
  </tbody>
</table>

#### 事件

Chosen的事件绑定在原始`<select>`上，使用jQuery方法来监听事件。目前可以使用以下事件：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>事件</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`change`</td>
      <td>当选择的值发生改变时发生。</td>
    </tr>
    <tr>
      <td>`chosen:ready`</td>
      <td>当完成初始化之后触发。</td>
    </tr>
    <tr>
      <td>`chosen:maxselected`</td>
      <td>当达到最大选择数目（通过`max_selected_options`指定）时发生</td>
    </tr>
    <tr>
      <td>`chosen:showing_dropdown`</td>
      <td>当弹出显示选项列表时发生。</td>
    </tr>
    <tr>
      <td>`chosen:hiding_dropdown`</td>
      <td>当隐藏选项列表时发生。</td>
    </tr>
    <tr>
      <td>`chosen:no_results`</td>
      <td>当没有检索到匹配的选项时发生。</td>
    </tr>
  </tbody>
</table>

```js
$('select.chosen-select').on('change', function(){
    // 用户改变了选择，快快处理
});
```

#### 方法

可以通过触发事件来调用chosen的方法。

```js
// 当原始select中的选项发生变化时通知chosen更新选项列表
$('select.chosen-select').trigger('chosen:updated');
```

所有可以通过事件触发的方法有：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>触发事件</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`chosen:updated`</td>
      <td>通知chosen重新从原始select中更新选项列表。</td>
    </tr>
    <tr>
      <td>`chosen:activate`</td>
      <td>让chosen激活并获取焦点；激活之后的chosen会捕获用户输入并执行操作。</td>
    </tr>
    <tr>
      <td>`chosen:open`</td>
      <td>打开（弹出）选项列表面板。</td>
    </tr>
    <tr>
      <td>`chosen:close`</td>
      <td>隐藏选项列表面板。</td>
    </tr>
  </tbody>
</table>

详细用法可以参考[chosen官方文档](http://harvesthq.github.io/chosen/options.html)。

## 图标选择插件

### 示例

为方便选择[漂亮的图标](#control/icon)，依赖于Chosen新作了[图标](#control/icon)选择插件。

<div class="example">
  <form>
    <select class="chosen-icons form-control" name="chosenIcons" id="chosenIcons" data-value="icon-star"></select>
  </form>
</div>

```js
$('select.chosen-icons').chosenIcons(options);
```

### 用法

图标选择插件独立组件，并且依赖 Chosen 插件，你需要从本地或 CDN 单独引入 lib 目录下的资源：

```html
<!-- 引入 Chosen 相关资源 -->
<link href="lib/chosen/chosen.min.css" rel="stylesheet">
<script src="lib/chosen/chosen.min.js"></script>

<!-- 引入图标选择插件相关资源 -->
<link href="lib/chosenicons/zui.chosenicons.min.css" rel="stylesheet">
<script src="lib/chosenicons/zui.chosenicons.min.js"></script>
```

图标选择插件可以使用chosen的所有选项和方法。

<script>
function onPageLoad() {return false;}
function afterPageLoad() {
    if($.fn.chosen) $('#pageBody .chosen-select').chosen({
        allow_single_deselect: true,
        search_contains: true,
        width: '100%'
    });
    if($.fn.chosenIcons) $('#chosenIcons').chosenIcons();
    setTimeout($.doc.stopPageLoading, 500);
}
</script>
