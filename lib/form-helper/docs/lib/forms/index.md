# 表单助手

表单助手（FormHelper）用于更方便地对表单内控件的值进行读取和修改。它会自动在指定的表单容器内按照 `name`、`id` 或自定义属性查找表单字段，并且支持与 Picker 等 ZUI 组件集成，统一读写接口。

## 基本使用

修改下面两个字段后点击“读取数据”，或点击“填入示例数据”同时更新字段和读取结果。

::: tabs

== 示例

<Example class="col gap-3">
  <form ref="formElement" class="col gap-3" @submit.prevent="readValues">
    <label for="formHelperUsername">用户名
      <input id="formHelperUsername" name="username" class="form-control" value="linyue">
    </label>
    <label for="formHelperNotification">通知方式
      <select id="formHelperNotification" name="notification" class="form-control">
        <option value="email">邮件通知</option>
        <option value="desktop">桌面通知</option>
      </select>
    </label>
    <div class="row gap-2">
      <button type="button" class="btn" :disabled="!helperReady" @click="readValues">读取数据</button>
      <button type="button" class="btn" :disabled="!helperReady" @click="fillValues">填入示例数据</button>
    </div>
  </form>
  <pre class="p-3 surface rounded overflow-auto" role="status" aria-live="polite">{{result}}</pre>
</Example>

== HTML

```html
<form id="formHelperExample" class="col gap-3">
  <label for="formHelperUsername">用户名
    <input id="formHelperUsername" name="username" class="form-control" value="linyue">
  </label>
  <label for="formHelperNotification">通知方式
    <select id="formHelperNotification" name="notification" class="form-control">
      <option value="email">邮件通知</option>
      <option value="desktop">桌面通知</option>
    </select>
  </label>
  <div class="row gap-2">
    <button id="formHelperRead" type="button" class="btn">读取数据</button>
    <button id="formHelperFill" type="button" class="btn">填入示例数据</button>
  </div>
</form>
<pre id="formHelperResult" class="p-3 surface rounded overflow-auto" role="status" aria-live="polite"></pre>
```

== JS

```js
const form = document.querySelector('#formHelperExample');
const helper = zui.formHelper(form);
const result = document.querySelector('#formHelperResult');

function readValues() {
    result.textContent = JSON.stringify({
        username: helper.getFieldVal('username'),
        notification: helper.getFieldVal('notification'),
    }, null, 2);
}

function fillValues() {
    helper.setFormData({username: 'chenxi', notification: 'desktop'});
    readValues();
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    readValues();
});
document.querySelector('#formHelperRead').addEventListener('click', readValues);
document.querySelector('#formHelperFill').addEventListener('click', fillValues);
readValues();
```

:::

## 创建实例

通过 `new FormHelper(selector, options?)` 或工厂函数 `formHelper(selector, options?)` 创建实例。`selector` 为表单容器的选择器或 DOM 元素。

```js
// 使用类构造器
const helper = new zui.FormHelper('#myForm');

// 使用工厂函数
const helper = zui.formHelper('#myForm');
```

## 获取字段值

使用 `getFieldVal(query)` 方法获取指定字段的值。`query` 为字段名、ID 或 CSS 选择器。如果字段关联了自定义控件（如 Picker），会通过控件接口获取值。

```js
const helper = zui.formHelper('#myForm');

// 获取 name="username" 的字段值
const username = helper.getFieldVal('username');

// 获取 name="notification" 关联的 Picker 控件的值
const notification = helper.getFieldVal('notification');
```

## 设置字段值

使用 `setFieldVal(query, value)` 方法设置指定字段的值。如果字段关联了自定义控件，会通过控件接口设置值。当字段未找到且 `throwError` 为 `true`（默认）时会抛出错误。

```js
const helper = zui.formHelper('#myForm');

helper.setFieldVal('username', 'linyue');
helper.setFieldVal('notification', 'email');
```

## 批量设置表单数据

使用 `setFormData(data)` 方法一次性设置多个字段的值。

```js
const helper = zui.formHelper('#myForm');

helper.setFormData({
    username: 'linyue',
    email: 'linyue@example.com',
    notification: 'desktop',
});
```

当表单通过异步内容或前端渲染替换了字段节点，并且启用了 `cacheQuery` 时，可调用 `clearCache()` 使后续查询重新读取 DOM；也可以传入单个查询名只清除该字段的缓存。

```js
helper.clearCache();
helper.clearCache('username');
```

## 获取字段信息

使用 `getFieldInfo(query)` 方法获取字段的完整信息，返回一个 `FormField` 对象，包含字段的 DOM 元素、名称、当前值以及关联的控件信息。

```js
const helper = zui.formHelper('#myForm');

const info = helper.getFieldInfo('username');
if (info) {
    console.log(info.name);     // 字段 name 属性
    console.log(info.value);    // 字段当前值
    console.log(info.$field);   // Cash 封装的 DOM 元素
    console.log(info.control);  // 关联的控件信息（如 Picker），无控件时为 undefined
}
```

## 字段查询规则

`query` 参数按以下优先级查找字段：

1. 如果 `query` 以 `#`、`.` 或 `[` 开头，直接作为 CSS 选择器查找；
2. 查找 `[zui-form-field="query"]` 属性的元素；
3. 查找 `[name="query"]` 属性的元素；
4. 当 `matchID` 为 `true`（默认）时，查找 `#query` 的元素；
5. 当 `matchBrackets` 为 `true`（默认）且 `query` 不含 `[` 时，查找 `[name="query[]"]` 或 `[name^="query["]` 的元素。

## 自定义字段查找

通过 `fields` 选项可以自定义字段的查找逻辑，支持函数或按字段名映射的对象。

```js
const helper = zui.formHelper('#myForm', {
    fields: {
        customField: (query, $scope) => {
            // 返回 Cash 对象、FormField 对象或 false（忽略该字段）
            return $scope.find('.my-custom-input');
        },
    },
});
```

也可以使用统一的查找函数处理所有字段：

```js
const helper = zui.formHelper('#myForm', {
    fields: (query, $scope) => {
        return $scope.find(`[data-field="${query}"]`);
    },
});
```

## 注册全局控件

通过 `FormHelper.registerControl(type, finder)` 可注册全局的自定义控件查找器，适用于所有 `FormHelper` 实例。

```js
zui.FormHelper.registerControl('myControl', ($field, $scope) => {
    const $el = $field.closest('[data-my-control]');
    if (!$el.length || !$el.closest($scope).length) {
        return;
    }
    const instance = $el.data('myControlInstance');
    if (!instance) {
        return;
    }
    return {
        $element: $el,
        instance,
        getVal: () => instance.getValue(),
        setVal: (value) => {
            instance.setValue(value);
            return true;
        },
    };
});
```

## 初始化选项

<Props>
/** 当查询参数无法作为 name 匹配时，是否自动将查询参数作为 ID 查询，默认 `true`。 */
matchID?: boolean;
/** 当查询参数无法作为 name 匹配时，是否自动将查询参数作 `name[]` 的形式进行查询，默认 `true`。 */
matchBrackets?: boolean;
/** 是否缓存查询字段，开启后同一 query 只查询一次 DOM，默认 `false`。 */
cacheQuery?: boolean;
/** 是否允许同名字段，当为 `false`（默认）时，查找到多个同名字段会抛出错误。 */
allowSameName?: boolean;
/** 控件查找器映射，用于识别和操作自定义控件（如 Picker）。 */
controls?: object;
/** 表单字段自定义查找器，可以是按字段名映射的对象或统一的查找函数。 */
fields?: object | function;
/** 是否在找不到字段时抛出错误，默认 `true`。 */
throwError?: boolean;
</Props>

## FormField 类型

`getFieldInfo` 返回的字段信息对象结构如下：

<Props>
/** 查询参数。 */
query: string;
/** 字段 name 属性值。 */
name: string;
/** 字段的 Cash 封装的 DOM 元素。 */
\$field: Cash;
/** 字段当前值。 */
value: unknown;
/** 关联的控件信息，无控件时为 undefined。 */
control?: FormControlInfo;
</Props>

## FormControlInfo 类型

关联的控件信息对象结构如下：

<Props>
/** 控件类型标识。 */
type: string;
/** 控件实例。 */
instance: Component;
/** 控件的 Cash 封装的 DOM 元素。 */
\$element: Cash;
/** 获取控件值的方法。 */
getVal: () => unknown;
/** 设置控件值的方法，返回是否成功。 */
setVal: (value: unknown) => boolean | undefined;
</Props>

<script setup>
import {onBeforeUnmount, onMounted, ref} from 'vue';

const formElement = ref();
const helperReady = ref(false);
const result = ref('正在加载表单助手…');
let helper;
let disposed = false;

function readValues() {
    if (!helper) {
        return;
    }
    result.value = JSON.stringify({
        username: helper.getFieldVal('username'),
        notification: helper.getFieldVal('notification'),
    }, null, 2);
}

function fillValues() {
    if (!helper) {
        return;
    }
    helper.setFormData({username: 'chenxi', notification: 'desktop'});
    readValues();
}

onMounted(() => {
    onZUIReady(() => {
        if (disposed) {
            return;
        }
        helper = zui.formHelper(formElement.value);
        helperReady.value = true;
        readValues();
    });
});

onBeforeUnmount(() => {
    disposed = true;
    helper = undefined;
});
</script>
