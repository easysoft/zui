# ajaxForm

基于 `form` 组件和 Ajax 请求的表单验证插件, 用以收集、校验、提交数据。

## 使用

使用 `new AjaxForm` 实例创建 `AjaxForm` 插件。

## 基本使用

使用 `.form .form-group .form-label .form-control`等类元素 与`AjaxForm`插件创建一个表单实例。

表单内若存在 `[data-type="submit"]` 元素，`AjaxForm` 将自动为其点击行为绑定 `submit` 方法；

表单内若存在 `[data-type="reset"]` 元素，`AjaxForm` 将自动为其点击行为绑定 `reset` 方法。

```html:example
 <!-- data-novalidate="true" -->
<form id="ajax-form-1" class="form-horizontal validation" action="url" method='POST'>
  <div class="form-group">
    <label class="form-label required">登录名</label>
    <input type="text" name="name" class="form-control" />
  </div>
  <div class="form-group">
    <label class="form-label required">密码</label>
    <input type="password" name="password" class="form-control" />
  </div>
  <div class="form-group">
    <label class="required">喜欢的水果</label>
    <div class="form-cell">
        <label class="checkbox">
            <input type="checkbox" class="form-control" style="width: auto" value="apple" name="fruit" checked> 苹果
        </label>
        <label class="checkbox">
            <input type="checkbox" class="form-control" style="width: auto" value="banana" name="fruit" checked> 香蕉
        </label>
    </div>
  </div>
  <div class="form-group">
    <button class="btn" data-type="submit" type="button">提交</button>
    <button class="btn" data-type="reset" type="button">重置</button>
  </div>
</form>

<script>
const ajaxForm = new AjaxForm('#ajax-form-1', {
    rules: {
        name: {
            required: true,
            errMsg: '请输入登录名',
        },
        password: {
            required: true,
            errMsg: '请输入密码',
        },
    },
});
// </script>
```

## 规则校验

表单数据提交至 url 前的校验，检查表单数据潜在的问题。格式如下：
```html:example
<form id="ajax-form-2" class="form-horizontal validation" action="url" method='POST'>
  <div class="form-group">
    <label class="form-label required">价格</label>
    <input type="text" name="price" class="form-control" />
  </div>
  <div class="form-group">
    <button class="btn" data-type="submit" type="button">提交</button>
    <button class="btn" data-type="reset" type="button">重置</button>
  </div>
</form>
<script>
const ajaxForm2 = new AjaxForm('#ajax-form-2', {
    rules: {
        price: [{
            required: true,
            errMsg: '请输入价格', // 错误信息提示
        }, {
            regexp: /\d+/,
            errMsg: '价格必须为数字',
        }, {
            validate: (x) => +x > 0,
            errMsg: '价格不能为负数',
        }],
    },
});
</script>
```

## POST 请求

```html:example
<form id="ajax-form-3" class="form-horizontal validation" action="http://jsonplaceholder.typicode.com/posts" method='POST'>
  <div class="form-group">
    <label class="form-label">userId</label>
    <input type="text" name="userId" class="form-control" />
  </div>
  <div class="form-group">
    <label class="form-label">title</label>
    <input type="text" name="title" class="form-control" />
  </div>
  <div class="form-group">
    <label class="form-label">body</label>
    <input type="passwtextord" name="body" class="form-control" />
  </div>
  <div class="form-group">
    <button class="btn" data-type="submit" type="button">submit</button>
    <button class="btn" data-type="reset" type="button">reset</button>
  </div>
</form>
<script>
const ajaxForm3 = new AjaxForm('#ajax-form-3', {
    rules: {
        userId: {
            validate(x) {
                if (!x) return true;
                return /\d+/.test(x);
            },
            errMsg: 'userId must be a number!',
        },
    },
    onLoad: (e) => {
        console.log(e);
        alert(`POST Response:
${JSON.stringify(ajaxForm3.response)}`);
    },
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
});
</script>
```


## GET 请求

```html:example
<form id="ajax-form-4" class="form-horizontal validation" action="http://jsonplaceholder.typicode.com/users" method='GET'>
  <div class="form-group">
    <label class="form-label required">id</label>
    <input type="text" name="id" class="form-control" />
  </div>
  <div class="form-group">
    <button class="btn" data-type="submit" type="button">submit</button>
    <button class="btn" data-type="reset" type="button">reset</button>
  </div>
</form>
<script>
const ajaxForm4 = new AjaxForm('#ajax-form-4', {
    onLoad: (e) => {
        console.log(e);
        alert(`GET Response:
${JSON.stringify(ajaxForm4.response)}`);
    },
    rules: {
        id: [{
            required: true,
            errMsg: 'id is required!',
        }, {
            regexp: /\d+/,
            errMsg: 'id must be a number!',
        }],
    },
});
</script>
```

## GET 请求自定义处理表单数据

```html:example
<form id="ajax-form-5" class="form-horizontal validation" action="http://metaphorpsum.com/paragraphs" method='GET'>
    <div class="form-group">
        <label class="form-label required">paragraphs</label>
        <input type="text" name="paragraphs" class="form-control" />
    </div>
    <div class="form-group">
        <label class="form-label required">sentences</label>
        <input type="text" name="sentences" class="form-control" />
    </div>
    <div class="form-group">
        <label class="form-label">p</label>
        <div class="form-cell">
            <label class="radio">
                <input type="radio" name="p" value="true" class="form-control" style="width: auto;"> true
            </label>
            <label class="radio">
                <input type="radio" name="p" value="false" class="form-control" style="width: auto;" checked> false
            </label>
        </div>
    </div>
    <div class="form-group">
        <button class="btn" data-type="submit" type="button">submit</button>
        <button class="btn" data-type="reset" type="button">reset</button>
    </div>
</form>
<script>
 const ajaxForm5 = new AjaxForm('#ajax-form-5', {
    onLoad: (e) => {
        console.log(e);
        alert(`GET Response:
${JSON.stringify(ajaxForm5.response)}`);
    },
    rules: {
        paragraphs: [{
            required: true,
            errMsg: 'paragraphs is required!',
        }, {
            regexp: /\d+/,
            errMsg: 'paragraphs must be a number!',
        }, {
            validate: (x) => (+x > 0 && +x <= 20),
            errMsg: 'paragraphs must be greater then 0 and less than 20!',
        }],
        sentences: {
            validate: (x) => {
                if (!x) return false;
                if (!/\d+/.test(x)) return false;
                return +x > 0 && +x <= 50;
            },
            errMsg: 'sentences must be greater then 0 and less than 50!',
        },
    },
    generateGetURL: (baseUrl, formData) => {
        const url = `${baseUrl}/${formData.paragraphs}/${formData.sentences}`;
        if (formData.p === 'true') {
            return `${baseUrl}?p=${formData.p}`;
        }
        return url;
    },
    responseType: 'text',
});
</script>
```

## 参数

使用 `AjaxForm()` 构造器初始化一个新的 `AjaxForm` 对象。

注意，当 `options.url` 未提供时，需要在所绑定的 `form` 元素上提供 `action` 值。

options 中的参数将以只读的形式储存在 `AjaxForm` 对象的属性中。

| 名称                   | 类型                                                       | 说明                                                                                                           |  默认值  | 是否必填 |
| ---------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | :------: | :------: |
| form                   | `string\|HTMLFormElement`                                  | 表单元素或表单元素选择器                                                                                       |    -     |    是    |
| options                | `object`                                                   | 选项                                                                                                           |   `{}`   |    否    |
| options.url            | `string`                                                   | 表单提交地址                                                                                                   |    -     |    -     |
| options.method         | `"GET"\|"POST"`                                            | 表单提交方式                                                                                                   | `"POST"` |    -     |
| options.rules          | `Rule\|Array<Rule>`                                        | 检验规则                                                                                                       |    -     |    -     |
| options.headers        | `Record<string, string>`                                   | HTTP 请求头部                                                                                                  |    -     |    -     |
| options.timeout        | `Record<string, string>`                                   | 请求超时时间(ms)                                                                                               |    -     |    -     |
| options.formType       | `"AJAX"\|"FormData"`                                       | 表单类型，`"AJAX"` 将数据经过 JSON.stringify() 转换为字符串发送，`"FormData"` 则将数据以 `FormData` 的形式发送 | `"AJAX"` |    -     |
| options.onLoad         | `(event: Event) => void`                                   | 请求完成时触发                                                                                                 |    -     |    -     |
| options.onLoadend      | `(event: Event) => void`                                   | 资源的加载进度停止之后被触发                                                                                   |    -     |    -     |
| options.onLoadstart    | `(event: Event) => void`                                   | 监听请求开始加载的回调                                                                                         |    -     |    -     |
| options.onError        | `(event: Event) => void`                                   | 程序开始加载时触发                                                                                             |    -     |    -     |
| options.onProgress     | `(event: Event) => void`                                   | 在请求接收到数据的时候被周期性触发                                                                             |    -     |    -     |
| options.onAbort        | `(event: Event) => void`                                   | 请求终止时触发                                                                                                 |    -     |    -     |
| options.onTimeout      | `(event: Event) => void`                                   | 请求超时时触发                                                                                                 |    -     |    -     |
| options.beforeSubmit   | `(formData: Record<string, unknow>\|FormData) => boolean`  | 请求前执行的操作，如果返回值不为 `true`，则不执行 `submit`                                                     |    -     |    -     |
| options.generateGetURL | `(url: string, forData: Record<string, unknow>) => string` | GET 请求时自定义处理表单数据并生成最终的请求地址                                                               |    -     |    -     |

备注：

```ts
type Rule = {
    required: boolean;
    errMsg: string;
} | {
    regexp: RegExp;
    errMsg: string;
} | {
    validate: (value: string) => boolean;
    errMsg: string;
}
```

## 实例属性

| 名称            | 类型                               | 说明                              | 可访问性 |
| --------------- | ---------------------------------- | --------------------------------- | :------: |
| formEl          | `HTMLFormElement`                  | AjaxForm 绑定的 Form 元素         |   只读   |
| formData        | `Record<string, unknow>\|FormData` | 表单数据                          |   只读   |
| status          | `number`                           | 数字状态码                        |   只读   |
| statusText      | `string`                           | 状态值                            |   只读   |
| upload          | `XMLHttpRequestUpload`             | 上传进度                          |   只读   |
| withCredentials | `boolean`                          | 是否创建一个跨站点访问控制请求    |   只读   |
| readyState      | `number`                           | 当前所处的状态                    |   只读   |
| response        | `any`                              | 响应的正文                        |   只读   |
| responseText    | `string`                           | 响应的文本                        |   只读   |
| responseURL     | `string`                           | 响应的序列化 URL                  |   只读   |
| responseXML     | `Document`                         | 请求检索的 HTML 或 XML 的Document |   只读   |

## 实例方法

| 名称                  | 类型                       | 说明                                       |
| --------------------- | -------------------------- | ------------------------------------------ |
| submit                | `() => void`               | 提交表单                                   |
| reset                 | `() => void`               | 重置表单                                   |
| abort                 | `() => void`               | 终止当前请求                               |
| getAllResponseHeaders | `() => string`             | 获取所有响应头                             |
| getResponseHeader     | `(name: string) => string` | 获取指定响应头的字符串                     |
| overrideMimeType      | `(mime: string) => void`   | 指定一个 MIME 类型用于替代服务器指定的类型 |
