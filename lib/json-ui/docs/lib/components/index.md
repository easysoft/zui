# JSON UI

用 JSON 描述界面，通过 CustomContent 渲染已注册的 ZUI 组件。可将事件连接到宿主代码，也可用文档格式声明本地状态、绑定和组件联动。

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

JSON 不能保存函数、DOM 节点或 Preact 节点。函数放在宿主 `actions` 中；文档模式支持下述 JSON 运算，但不执行 JavaScript 表达式或函数源码。JSON UI 不修改输入对象。

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

宿主动作保留组件原来的参数顺序、`this` 和返回值，不统一转换成 `{value}`。要使用组件提供的 `this` 时使用普通函数。业务请求和业务错误处理由宿主负责；本地状态也可交给下面的文档运行时。

## 状态文档

`schema` 可以是旧的单节点/数组，也可以是 `{version: 1, state, ui}` 文档。只有文档的 UI 树启用 `bind`、`model`、`when` 和 JSON 动作；每个实例独立保存状态。

下面的示例只需要 JSON UI、Button 和基础表单样式：输入姓名会更新问候语，勾选框控制内容显隐，按钮恢复初始状态。用户页面无需注册业务函数。

::: tabs

== 示例

<Example>
  <ZUI use="jsonUI" :options="stateOptions" />
</Example>

== 完整代码

```html
<div id="jsonUIStateExample"></div>
<script>
const stateSchema = {
    version: 1,
    state: {name: '', show: true},
    computed: {greeting: {$op: 'concat', args: ['你好，', {$ref: 'state.name'}]}},
    actions: {reset: {type: 'reset'}},
    ui: {
        tag: 'section',
        props: {className: 'col gap-4'},
        children: [
            {
                tag: 'input',
                props: {className: 'form-control', 'aria-label': '姓名', placeholder: '输入姓名'},
                model: {value: {path: 'state.name', event: 'onInput', value: {$ref: 'event.value'}}},
            },
            {
                tag: 'label',
                children: [
                    {tag: 'input', props: {type: 'checkbox'}, model: {checked: {path: 'state.show', event: 'onChange', value: {$ref: 'event.checked'}}}},
                    ' 显示问候语',
                ],
            },
            {tag: 'p', props: {role: 'status'}, when: {$ref: 'state.show'}, bind: {children: {$ref: 'computed.greeting'}}},
            {component: 'Button', props: {text: '重置'}, events: {onClick: {action: 'reset'}}},
        ],
    },
};
const stateView = new zui.JsonUI('#jsonUIStateExample', {schema: stateSchema});
// 所属页面卸载时调用 stateView.destroy()。
</script>
```

:::

| 文档字段 | 类型 | 说明 |
| --- | --- | --- |
| `version` | `1` | 协议版本，必须明确指定 |
| `state` | JSON 对象 | 初始状态，必填；不自动持久化或跨实例共享 |
| `computed` | 表达式映射 | 可选，只读派生值；可引用 state 和其他 computed |
| `actions` | JSON 动作映射 | 可选，与构造选项中的宿主函数 actions 分开 |
| `watch` | 监听规则数组 | 可选，监听状态路径并执行本地动作 |
| `ui` | UI 节点或数组 | 必填；沿用原有节点结构 |

### 引用和运算

表达式只出现在 `computed`、`bind`、`model.value`、`when` 和动作的表达式参数中。普通 `props`、`state` 和表达式读取到的数据不会再次解释；字符串中的模板标记也保持原样。

| 表达式 | 行为 |
| --- | --- |
| `{"$ref":"state.name"}` | 按点分路径读取自有属性；数组下标写作 `state.rows.0.name` |
| `{"$ref":"state.optional","default":null}` | 路径不存在时返回字面量缺省值；省略 default 时报告错误 |
| `{"$literal":{"$ref":"普通数据"}}` | 整个值作为字面量，不解释内部标记 |
| `{"$op":"add","args":[1,2]}` | 内置纯运算；未知运算或参数类型错误会报告路径 |

普通数组和对象表达式也是字面量；要动态读取其成员，使用 `get`。对象含有以 `$` 开头的业务键时使用 `$literal`。支持的运算如下：

| 运算 | 参数和结果 |
| --- | --- |
| `eq` / `ne` | 两个 JSON 值，按结构和值比较；数字 1 与字符串 "1" 不相等 |
| `gt` / `gte` / `lt` / `lte` | 两个数字，返回布尔值 |
| `and` / `or` / `not` | 布尔运算；and/or 接受 1–100 项并短路，not 接受一项 |
| `add` / `sub` / `mul` / `div` | 两个数字；非有限结果（包括除零）报错 |
| `get` | 对象或数组、键、可选缺省值；无缺省值且键不存在时返回 null |
| `length` | 一个字符串或数组，返回长度 |
| `concat` | 1–100 个字符串、数字或布尔值，拼接为字符串 |
| `coalesce` | 1–100 项，依次返回首个非 null 值，全部为 null 时返回 null |
| `if` | 布尔条件、成立值、不成立值；只计算选中的分支 |

所有 computed 在提交前求值，循环依赖会被拒绝。`computed`、`when`、`bind` 和 watch 动作只能读取 `state`、`computed`；组件事件动作和 `model.value` 还可以读取 `args`、`event`。

### 属性绑定和双向绑定

`bind`、`model`、`when` 用于 `tag` / `component` 节点。HTML、Markdown 和 lazy 节点需要这些控制时，放入一个普通父节点。

`bind` 的键是 `props.<路径>` 或 `children`。绑定覆盖静态值，缺失的属性容器会按需创建；重叠目标（如同时绑定 `props.style` 和 `props.style.color`）报错。绑定 children 仅接受文本、数字或 null，不能把业务数据动态解释为 UI 树。回调和 ref 必须走原有事件/宿主入口。

`model` 的键是受控属性名，每项声明 `{path, event, value}`。状态路径必须是 `state` 下的属性；同一属性不能同时由 bind 和 model 控制。目标组件必须支持该受控属性，组件名称不会自动决定事件参数：

| 目标 | 属性 | 事件 | 新值表达式 |
| --- | --- | --- | --- |
| 原生 input | value | onInput | `{"$ref":"event.value"}` |
| 原生 checkbox | checked | onChange | `{"$ref":"event.checked"}` |
| 已注册 Picker | value | onChange | `{"$ref":"args.0"}` |
| 宿主注册的 Checkbox | checked | onChange | `{"$ref":"args.1"}` |

`args` 保留原始参数位置，但只允许读取 JSON 数据；不能读取 DOM 对象、函数或 getter。`event` 是同步提取的固定快照：type，以及适用时的 value、checked、key。需要阻止原生默认行为等操作时仍使用宿主回调。

同一事件先写入 model，再执行 JSON 动作，动作能读到新值和最新 computed。model 收到与当前状态相同的值时忽略整个事件链，防止受控组件回报造成重复联动；未使用 model 的旧事件行为不变。`when` 必须返回布尔值，false 卸载节点但保留文档状态。

### JSON 动作和监听

`events.onClick: "save"` 始终查找宿主函数；`events.onClick: {action: "save"}` 查找文档动作。文档事件还可以直接放一个动作或动作数组。数组按顺序同步执行，支持：

| 动作 | 字段及行为 |
| --- | --- |
| `{"type":"set","path":"state.name","value":"Ada"}` | value 是表达式；只写 state；父容器须存在，可新增对象叶子属性 |
| `{"type":"reset"}` | 恢复最新文档的全部初值，本次重置本身不触发 watch |
| `{"type":"reset","path":"state.name"}` | 恢复指定路径的初值，按普通状态变化触发 watch |
| `{"type":"if","condition":true,"then":[],"else":[]}` | condition 是布尔表达式，then 必填，else 可省略 |
| `{"type":"return","value":false}` | 结束当前事件/监听动作链，事件同步返回求值结果 |
| `{"action":"reset"}` | 引用文档命名动作；递归引用会被拒绝 |

`watch` 每项为 `{paths: ["state.province"], do: 动作或动作数组}`，可引用命名动作。初始化不执行；用户输入和宿主 patchState 导致的实际变化都会触发。规则按声明顺序检查，链式变化继续检查至稳定；同值写入不会重新触发。根据读写路径检测监听环，最多执行 32 轮；单次动作求值和投影有步数上限。

省市联动使用 computed 根据省份取得城市列表，watch 清空旧城市，两个 Picker 的 value 分别绑定状态。可直接查看完整的[省市联动 JSON](/assets/json-ui/state-ui.json)，使用前加载 Picker。

一次事件中的 model、JSON 动作、watch 和计算在私有状态草稿中执行。最终属性仍经过原有内容策略检查，全部通过后才提交；错误保留原状态与界面，并通过 onError 报告。宿主函数在 model 事务提交后调用，不承诺回滚宿主函数的副作用。

### 读取、修改和重置状态

原生实例和 Preact ref 均提供以下方法；仅可用于已挂载的文档模式实例：

| 方法 | 返回及行为 |
| --- | --- |
| `getState()` | 返回独立 JSON 快照，修改快照不影响界面 |
| `patchState(patch)` | 顶层浅合并 JSON 对象，一次事务提交，返回新快照；嵌套对象整体替换 |
| `resetState()` | 恢复最新有效文档的初值，返回快照；重置本身不触发 watch |

这些方法的无效调用或事务错误抛出 JsonUIError。事件执行错误则交给 onError。`onStateChange(state, previous)` 在成功且实际变化的事务提交后调用一次，两个参数都是独立快照；初始化、失败和同值写入不触发。通知回调自身的错误不回滚已提交状态。

普通 `render({schema: nextDocument})` 更新结构、动作和默认值，保留当前状态，不自动补齐新增状态字段。切换到不同业务文档时使用 `render({schema: nextDocument}, true)` 同时重置；只恢复当前文档时调用 resetState。无效更新保留旧文档及其可继续交互的状态。

`render(..., true)` 也遵循原生组件的配置重置语义，需要保留的宿主 actions、onError 等选项须一并传入；resetState() 不重置宿主选项。

本阶段支持本地状态和组件联动，不提供远程数据源、任意 JavaScript、循环节点、持久化或跨实例共享。原有 lazy 内容加载继续可用；lazy 响应使用旧节点协议，不能下发新文档或声明文档绑定。

## 更新和销毁

`render()` 接收新的配置。旧节点模式的业务状态由宿主维护；文档模式遵循上面的状态生命周期。例如更新一个普通按钮：

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
schema: JsonUISchema; // UI 节点或 version 1 状态文档。
actions?: Record&lt;string, JsonUIAction&gt;; // 宿主动作映射，events 使用此处的名称。
renderMarkdown?: (node: JsonUIMarkdown, path: string) =&gt; ComponentChildren; // 宿主 Markdown 渲染器；未设置时显示原文。
capabilities?: JsonUICapabilities; // HTML、异步 HTML、脚本能力；各项默认 false。
allowRequest?: (url: URL) =&gt; boolean; // 宿主请求来源策略；默认仅允许同源 HTTP(S)。
onError?: (error: JsonUIError) =&gt; void; // 协议或内容错误，包含 path 和 message。
onStateChange?: (state: Record&lt;string, JsonUIValue&gt;, previous: Record&lt;string, JsonUIValue&gt;) =&gt; void; // 文档状态成功变更后的独立快照。
</Props>

`JsonUICapabilities` 包含可选的 `html`、`lazyHtml`、`executeScript` 布尔属性。JSON 文档不能修改这些权限；业务网络请求仍由宿主负责。

<script setup>
import {ref} from 'vue';

const stateSchema = {
    version: 1,
    state: {name: '', show: true},
    computed: {greeting: {$op: 'concat', args: ['你好，', {$ref: 'state.name'}]}},
    actions: {reset: {type: 'reset'}},
    ui: {
        tag: 'section',
        props: {className: 'col gap-4'},
        children: [
            {
                tag: 'input',
                props: {className: 'form-control', 'aria-label': '姓名', placeholder: '输入姓名'},
                model: {value: {path: 'state.name', event: 'onInput', value: {$ref: 'event.value'}}},
            },
            {
                tag: 'label',
                children: [
                    {tag: 'input', props: {type: 'checkbox'}, model: {checked: {path: 'state.show', event: 'onChange', value: {$ref: 'event.checked'}}}},
                    ' 显示问候语',
                ],
            },
            {tag: 'p', props: {role: 'status'}, when: {$ref: 'state.show'}, bind: {children: {$ref: 'computed.greeting'}}},
            {component: 'Button', props: {text: '重置'}, events: {onClick: {action: 'reset'}}},
        ],
    },
};
const stateOptions = {schema: stateSchema};

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
