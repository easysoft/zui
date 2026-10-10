# JSON UI

用 JSON 描述界面，通过 CustomContent 渲染已注册的 ZUI 组件，并将事件连接到宿主代码。

## 基础用法

`schema` 保存界面结构，`actions` 保存事件函数。下面的 JSON 描述一个标题和一个保存按钮。

::: tabs

== 示例

<Example>
  <ZUI use="jsonUI" :options="basicOptions" />
  <p role="status" aria-live="polite">{{ actionMessage }}</p>
</Example>

== HTML

```html
<div id="jsonUIBasic"></div>
<p id="jsonUIMessage" role="status"></p>
```

== JS

```js
const schema = {
    tag: 'section',
    children: [
        {tag: 'h3', children: '个人设置'},
        {
            component: 'Button',
            key: 'save',
            props: {text: '保存', type: 'primary'},
            events: {onClick: 'saveProfile'},
        },
    ],
};

const view = new zui.JsonUI('#jsonUIBasic', {
    schema,
    actions: {
        saveProfile() {
            document.querySelector('#jsonUIMessage').textContent = '已触发保存';
        },
    },
});
```

:::

组件必须在渲染前加载并注册。JSON UI 使用现有的 `getReactComponent()` 注册表，名称不区分大小写；应用通过 `registerReactComponent()` 注册的组件也可以直接使用。JSON UI 不根据 JSON 自动下载组件或样式。

## schema 的含义

这里的 **schema 就是描述这份 UI 的 JSON 数据**，与 `CustomContent` 的 `content` 处在同一层次。它可以写在代码中、保存为 JSON 文件，或者由接口、AI 返回；解析后传入 `schema` 即可。

这个名称不表示 JSON Schema 校验标准，也不要求再写一份“描述 schema 的 schema”。它与 FormBuilder 的表单字段 schema 也不同：如果渲染 FormBuilder，其 `props.schema` 仍然是 FormBuilder 自己的业务参数。

节点可以是字符串、数字、`null`、节点数组或描述对象。描述对象分为以下五种：

| 形式 | 示例 | 含义 |
| --- | --- | --- |
| 原生元素 | `{tag: 'button', children: '保存'}` | 直接渲染 HTML 元素，绕过组件注册表 |
| 注册组件 | `{component: 'Button', props: {text: '保存'}}` | 使用注册表中的 Button |
| HTML | `{html: '<strong>说明</strong>'}` | 渲染 HTML，需宿主开启权限 |
| Markdown | `{markdown: '**说明**'}` | 交给宿主渲染器；未配置时显示原文 |
| 异步内容 | `{fetcher: '/ui.json', type: 'custom'}` | 加载后继续渲染 JSON UI |

原生元素和注册组件不能在同一节点同时指定 `tag`、`component`。HTML 和异步节点可以用 `tag` 指定容器。

| 字段 | 用途 |
| --- | --- |
| `tag` | 明确选择原生 HTML 元素，例如 `section`、`button` |
| `component` | 选择已注册的组件或别名，例如 `Button`、`Menu` |
| `props` | 目标组件原有的参数；原生节点使用元素属性，例如 `id`、`className` |
| `children` | 子内容；只有这里的节点会递归按 UI 解释 |
| `key` | 更新和重排时识别节点；不会自动成为 DOM id |
| `events` | 回调属性名到宿主动作名称的映射 |

`props` 中的数据按照目标组件 API 传递，不会递归猜测成 UI。例如 Menu 的 `items`、DTable 的 `data`、FormBuilder 的 `schema` 仍是组件数据。如果目标组件明确将某个内容交给 CustomContent 渲染，该内容再按 JSON UI 的规则处理。

JSON 不能保存函数、DOM 节点或 Preact 节点。函数放在宿主 `actions` 中，不支持在 JSON 中执行表达式或函数源码。JSON UI 不修改输入对象。

输入必须是有限、无循环的纯 JSON 数据。每份描述最多包含 100 层嵌套和 10000 个值（包括 `props` 中的数据）；超出限制会报告对应路径的错误。

### 原生元素与组件

```json
[
  {
    "tag": "button",
    "props": {"type": "button"},
    "children": "原生按钮"
  },
  {
    "component": "Button",
    "props": {"text": "ZUI 按钮", "type": "primary"}
  }
]
```

即使 Button 已注册，`tag: 'button'` 也始终生成原生元素。`component: 'button'` 则按照不区分大小写的注册表查找 Button。未注册的组件会产生带节点路径的错误，不会回退成 HTML 标签。

`tag` 接受内置的被动 HTML 元素集合，涵盖常用结构、文本、表单、表格及媒体元素；不接受 `script`、`style`、`iframe`、`object`、`embed` 或自定义元素名称。原生属性不能包含可执行 URL、字符串事件处理器或 ZUI 自动初始化入口。

所有已注册组件都可以解析，但注册表不包含每个组件的属性类型、说明和事件签名；相应 `props`、回调参数仍需参照目标组件文档。组件原本依赖函数的高级参数不会自动变成 JSON 能力。

## 连接事件

`events` 的键使用目标组件真实的回调属性名，如 `onClick`、`onChange`、`onClickItem`。值是宿主 `actions` 中的函数名。

```js
const view = new zui.JsonUI('#menu', {
    schema: {
        component: 'Menu',
        props: {items: [{text: '账户信息'}, {text: '通知设置'}]},
        events: {onClickItem: 'selectItem'},
    },
    actions: {
        selectItem(info) {
            console.log(info.item.text);
        },
    },
});
```

动作保留组件原来的参数顺序、`this` 和返回值，不统一转换成 `{value}`。要使用组件提供的 `this` 时使用普通函数。业务请求、业务错误处理和状态更新由宿主动作负责。

## 更新和销毁

`render()` 接收新的配置；业务状态由宿主维护。例如更新一个按钮：

```js
const view = new zui.JsonUI('#saveButton', {
    schema: {component: 'Button', props: {text: '保存'}},
});

view.render({
    schema: {
        component: 'Button',
        props: {text: '保存', loading: true},
    },
});

// 不再使用时，卸载界面并清理组件资源。
view.destroy();
```

更新 `actions` 后，事件使用最新映射；已经加载的 lazy 内容不因此重新请求。后续新注册或替换的组件在下一次 `render()` 时生效，没有注册表订阅机制。为数组中需要重排的节点设置稳定 `key`。

更新 `renderMarkdown` 后，下一次渲染使用新回调，包括已经加载的异步 JSON 内容，不会重新请求。原生实例可通过 `view.render({renderMarkdown: undefined})` 移除渲染器，恢复显示 Markdown 原文。

## Markdown 内容

`JsonUIMarkdown` 描述 Markdown 内容，例如：

```json
{
  "key": "description",
  "markdown": "支持 **格式化内容**。",
  "inline": true,
  "props": {"className": "description"}
}
```

| 字段 | 用途 |
| --- | --- |
| `markdown` | 必填字符串；空字符串也合法 |
| `inline` | 可选布尔值，交给宿主决定是否按行内 Markdown 渲染 |
| `props` | 可选 JSON 对象，交给宿主渲染器解释 |
| `key` | 可选字符串或数字，用于保持更新和重排时的节点身份 |

在 `JsonUIOptions` 中设置 `renderMarkdown(node, path)` 后，JSON UI 会在实际渲染时调用它，并使用返回的 Preact `ComponentChildren`。参数 `node` 是通过校验的节点副本，包含上述字段；`path` 沿用节点路径，如 `$`、`$.children[0]`。组件内部交给 CustomContent 的内容使用 `$content` 路径，异步 JSON 响应的路径包含 `.response`。

渲染器可以返回文本、数字、Preact 节点、数组或空内容。返回 `null`、`undefined`、`false` 时显示为空，不回退到原文。JSON UI 不增加 Markdown 容器，也不自动将 `props` 写入 DOM。

未配置 `renderMarkdown` 时，直接将 `markdown` 字符串作为普通文本显示，保留 Markdown 标记，字符串中的 HTML 也不会被解释。`inline` 和 `props` 此时不影响输出。Markdown 节点支持根节点、数组、`children`、嵌套 CustomContent、异步 JSON 和 `loadingContent`。

Markdown 解析、样式以及解析器生成的 HTML 的安全处理由宿主负责。JSON UI 不内置解析库，也不要求额外的 Markdown 权限。渲染器直接抛出异常时，通过现有错误占位和 `onError` 报告；普通异常会附带该 Markdown 节点的路径。

## HTML 内容

直接 HTML 默认关闭，需宿主设置 `capabilities.html: true`：

```js
new zui.JsonUI('#description', {
    schema: {
        tag: 'section',
        html: '<p>支持 <strong>格式化内容</strong>。</p>',
    },
    capabilities: {html: true},
});
```

未执行脚本时，HTML 先经过 DOMPurify 清洗，并移除 ZUI 命令和自动初始化入口。空字符串 `html: ''` 仍是合法的 HTML 节点。

执行脚本必须同时满足：对应 HTML 权限已开启、宿主设置 `capabilities.executeScript: true`，以及内容节点明确写出 `executeScript: true`。请求了未授权的能力会报错。

## 异步内容

`fetcher` 使用 URL 字符串，`type` 必须明确指定。默认仅允许同源 HTTP(S) GET 请求。

| `type` | 响应内容 | 所需权限 |
| --- | --- | --- |
| `custom` | JSON UI，重新进行校验与事件连接 | 无需 HTML 权限 |
| `text` | 纯文本 | 无需 HTML 权限 |
| `html` | HTML | `capabilities.lazyHtml: true` |

```js
new zui.JsonUI('#remoteUI', {
    schema: {
        fetcher: '/ui/profile.json',
        type: 'custom',
        loadingContent: {tag: 'p', children: '正在加载…'},
        errorText: '加载失败',
    },
    actions: {
        saveProfile() {
            console.log('异步界面的保存动作');
        },
    },
});
```

`/ui/profile.json` 返回普通的 JSON UI 描述，例如：

```json
{
  "component": "Button",
  "props": {"text": "保存"},
  "events": {"onClick": "saveProfile"}
}
```

支持 `tag`、容器 `props`、`loadingContent`、`loadingText`、`errorText`、`clearBeforeLoad`、`loadingIndicator` 和 `executeScript`。`loadingContent` 可以是 JSON UI 描述；异步 JSON 和其中的占位内容遵守同一校验与权限策略。

宿主可以提供 `allowRequest(url)` 明确允许额外来源，参数是解析后的 `URL` 对象，返回 `true` 才允许请求：

```js
new zui.JsonUI('#remoteUI', {
    schema: {fetcher: 'https://ui.example.com/profile.json', type: 'custom'},
    allowRequest: url => url.origin === 'https://ui.example.com',
});
```

该回调替代默认的同源判断；需要同时允许同源时在回调中包含相应条件。它不会绕过浏览器的跨域请求限制。复杂 Ajax 配置与函数 fetcher 不属于 JSON 协议。

## 校验与错误

`validateJsonUI(schema, options?)` 返回首个错误组成的数组；空数组表示通过协议校验。它检查节点结构、已注册组件、动作映射和内容权限，不校验所有组件的业务参数。Markdown 节点仅进行协议校验，不调用 `renderMarkdown`，也不要求配置该回调。

```js
const errors = zui.validateJsonUI(schema, {actions});
if (errors.length) {
    console.log(errors.map(error => error.message));
}
```

创建或更新时会自动校验。无效更新保留上一次有效界面，并通过 `onError` 报告错误；运行时嵌套内容或异步内容被拒绝时，显示错误占位并通知回调。

```js
new zui.JsonUI('#preview', {
    schema,
    actions,
    onError(error) {
        console.error(error.path, error.message);
    },
});
```

### 权限边界

`html`、`lazyHtml`、`executeScript` 是三个独立开关，默认均为 `false`。权限和 `allowRequest` 在实例创建时固定；修改时应销毁并重新创建实例。JSON 和异步响应不能开启权限。

权限在共享的 CustomContent、HElement、HtmlContent、LazyContent 渲染路径生效，包括注册别名和组件内部再次使用这些渲染器的内容。`component: 'html'` 或 `component: 'lazy'` 不能绕过对应限制。

已注册组件本身是宿主信任的代码。自定义组件自行解释表达式、操作 DOM、请求资源或创建独立渲染树的行为不属于这个内容策略的沙箱范围。

`renderMarkdown` 同样属于宿主信任的代码，JSON 节点不能定义此回调，也不能在嵌套 JsonUI 中覆盖它。渲染器返回的内容如果使用 CustomContent、HElement、HtmlContent 或 LazyContent，仍遵守这些组件的现有内容策略。

## 源码工作区：Preact 与类型

以下 `@zui/*` 入口用于 ZUI 源码工作区，需要解析工作区包、编译 TypeScript/JSX 并配置 Preact。标准 npm 包通过 `zui` 和 `zui/css` 接入，使用前文的原生实例 API。

源码中的 Preact 组件从 `@zui/json-ui/react` 导入，属性与原生构造器一致。按需加载 JSON 引用的组件及其样式。

```tsx
import '@zui/button';
import {JsonUI} from '@zui/json-ui/react';
import type {JsonUINode} from '@zui/json-ui';

const schema: JsonUINode = {
    component: 'Button',
    props: {text: '保存'},
    events: {onClick: 'saveProfile'},
};
const actions = {saveProfile: () => console.log('保存')};

<JsonUI schema={schema} actions={actions} />;
```

原生构造器从 `@zui/json-ui` 导入；主入口和 `/react` 均提供公开节点、动作、权限和组件属性类型。

## 选项

<Props>
schema: JsonUINode; // 界面的 JSON 描述。
actions?: Record&lt;string, JsonUIAction&gt;; // 宿主动作映射，events 使用此处的名称。
renderMarkdown?: (node: JsonUIMarkdown, path: string) =&gt; ComponentChildren; // 宿主 Markdown 渲染器；未设置时显示原文。
capabilities?: JsonUICapabilities; // HTML、异步 HTML、脚本能力；各项默认 false。
allowRequest?: (url: URL) =&gt; boolean; // 宿主请求来源策略；默认仅允许同源 HTTP(S)。
onError?: (error: JsonUIError) =&gt; void; // 协议或内容错误，包含 path 和 message。
</Props>

`JsonUICapabilities` 包含可选的 `html`、`lazyHtml`、`executeScript` 布尔属性。宿主负责数据、请求业务和状态，JSON UI 不提供表达式、条件循环或业务流程引擎。

<script setup>
import {ref} from 'vue';

const actionMessage = ref('点击保存按钮观察事件。');
const basicOptions = {
    schema: {
        tag: 'section',
        children: [
            {tag: 'h3', children: '个人设置'},
            {
                component: 'Button',
                key: 'save',
                props: {text: '保存', type: 'primary'},
                events: {onClick: 'saveProfile'},
            },
        ],
    },
    actions: {
        saveProfile() {
            actionMessage.value = '已触发保存';
        },
    },
};
</script>
