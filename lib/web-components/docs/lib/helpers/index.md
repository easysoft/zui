# Web Components

通过原生自定义元素使用 ZUI，当前试验支持 `zui-button`、`zui-pager` 和 `zui-picker`。组件采用 Light DOM，复用 ZUI 样式和交互实现。

## 基础用法

将本地构建产物放在同一静态资源目录中，即可直接使用标签：

```html
<link rel="stylesheet" href="./style.css">
<script src="./zui-web-components.auto.js" defer></script>

<form>
  <label for="owner">负责人</label>
  <zui-picker id="owner" name="owner" value="hao" required></zui-picker>
  <zui-button text="提交" type="primary" btn-type="submit"></zui-button>
</form>

<script>
const picker = document.querySelector('#owner');
picker.items = [
    {value: 'hao', text: 'Hao'},
    {value: 'tom', text: 'Tom'},
];
picker.addEventListener('zui-change', event => {
    console.log(event.detail.value);
});
</script>
```

复杂 property 可以在标签注册前赋值，升级时会保留。原生表单通过 `name` 和当前 `value` 提交选择结果。

## 构建与引入

在 ZUI 仓库根目录执行 `pnpm build:web-components`，输出 `dist/web-components/`。这是包含 JS、CSS 和 TypeScript 声明的本地试验包，尚未发布到 npm。

在消费项目中安装该目录后，可以显式注册全部组件：

```sh
pnpm add /absolute/path/to/zui3/dist/web-components
```

```js
import '@zui/web-components/css';
import {defineAll} from '@zui/web-components/all';

defineAll();
```

也可以只引入需要的组件入口：

```js
import '@zui/web-components/css';
import {definePicker} from '@zui/web-components/picker';

definePicker();
```

| 入口 | 用途 |
| --- | --- |
| `@zui/web-components` | 工厂、基类和属性描述 helper，不注册组件 |
| `/button`、`/picker` | 专门适配器、类型和显式 `defineXxx()` |
| `/pager` | 转出 Pager 库的元素类及兼容 `definePager()`；导入时自动注册 Pager |
| `/all` | 三个组件的导出及 `defineAll()`；导入时已自动注册 Pager |
| `/auto` | ESM 自动注册全部三个组件 |
| `/css` | 完整样式，包含基础变量与辅助类 |
| `zui-web-components.auto.js` | 浏览器普通 script，自动注册；导出到 `window.ZuiWebComponents` |

ESM 入口共享运行时。同一页面选择 ESM 或普通 script 中的一种接入方式，并只加载一个版本；浏览器不允许重新定义同名标签。同一实现重复调用 `defineAll()` 或 `defineXxx()` 安全。

运行时仅用于浏览器。SSR 项目应在客户端挂载阶段动态导入；类型可以通过 `import type` 引入。Picker 依赖 `ElementInternals` 表单关联能力，本轮验证覆盖当前 Playwright 的 Chromium、Firefox 和 WebKit，未提供旧浏览器 polyfill。

## 组件库拥有配置

通用工厂及生命周期运行时位于 `@zui/core`。组件库在类上声明 `static WebComponent`，`Component.register()` 根据 `autoDefine` 决定是否自动注册；不声明配置的组件保持原有行为。

工厂自动识别 `component`：ZUI `Component` 和 `ComponentFromReact` 子类走原生实例生命周期，Preact 组件类和函数走直接渲染。`createWebComponent(config)` 创建并复用构造器，`defineWebComponent(config, tagName)` 执行显式注册。详细配置和类型示例见[组件基类](/lib/basic/core/component.html#由组件库声明-web-component)。

Pager 已迁移至此机制，直接加载 `@zui/pager` 即可使用 `<zui-pager>`，本包 `/pager` 入口复用同一份配置与构造器。Button 和 Picker 继续保留各自的行为适配器，表单关联等专属行为不会由工厂自动推导。

## 属性与更新

标量使用 HTML attribute；数组、对象、函数使用 JavaScript property，不能将 JSON 字符串填入 `items` 属性。

```js
const picker = document.querySelector('zui-picker');
picker.items = [{value: 'hao', text: 'Hao'}];
picker.value = 'hao';
picker.setOptions({disabled: false, placeholder: '请选择'});
await picker.ready;
picker.focus();
```

| 规则 | 说明 |
| --- | --- |
| 命名 | JS 的 `recPerPage` 对应 HTML 的 `rec-per-page` |
| 布尔值 | `disabled`、`loading`、`required` 等遵循存在即为真的 HTML 语义；`disabled="false"` 仍表示禁用 |
| 联合类型 | Picker 的 `multiple`、`search` 接受空属性、`true`、`false` 或正整数 |
| 数字 | Pager 接受非负整数，`recPerPage` 至少为 1；非法值回退到默认值 |
| 批量更新 | 同一轮 property 更新合并渲染，状态可立即读取；`options` 返回快照 |
| 就绪 | `ready` 在当前连接首次渲染完成时解决，不代表异步 items 已加载，也不是每次更新的完成通知 |
| 生命周期 | 持续移出文档后卸载内部组件、清理浮层；同一轮 DOM 移动保留实例，重新连接时重新挂载 |

第一轮通过 `text` 设置按钮文字，通过 `items` 配置列表；未实现 Shadow DOM、原生 slot、服务端渲染或全部原生 ZUI 选项的透传。不要修改组件内部 DOM。

## 按钮

```html
<zui-button text="保存" type="primary" btn-type="submit"></zui-button>
<zui-button text="重置" btn-type="reset"></zui-button>
<zui-button text="加载中" loading></zui-button>
```

| 属性 / property | 默认值 | 说明 |
| --- | --- | --- |
| `text` | `""` | 纯文本内容 |
| `type` | `""` | ZUI 外观，例如 `primary` |
| `btn-type` / `btnType` | `"button"` | 原生按钮类型 |
| `size` | `""` | 尺寸，例如 `sm`、`lg` |
| `icon` | `""` | 图标字符串，使用图标时需加载对应图标资源 |
| `url`、`target` | `""` | 链接地址和打开方式 |
| `disabled`、`loading`、`active` | `false` | 禁用、加载、激活状态 |
| `loading-text` / `loadingText` | `""` | 加载文字 |
| `name`、`value`、`form` | `""` | 传给内部原生控件的表单属性 |

`focus()`、`click()` 委托内部按钮或链接；点击通过原生 `click` 事件传播。提交和重置由内部原生按钮完成。

## 分页

```html
<zui-pager page="1" rec-total="120" rec-per-page="20" aria-label="结果分页"></zui-pager>
```

`page` 默认 `1`，`recTotal` 默认 `0`，`recPerPage` 默认 `10`。只读 `pageTotal` 返回总页数，当前页通过现有 Pager 规则限制在有效范围内。`items` 和 `linkCreator` 通过 property 设置，沿用 Pager 的对应类型。

用户换页触发 `zui-change`，`detail` 包含 `PagerInfo` 和 `originalEvent`。直接赋值不会触发该用户事件。

## Picker 与表单

| 属性 / property | 默认值 | 说明 |
| --- | --- | --- |
| `items` | 空列表 | 通过 property 设置，沿用 Picker 的 items 类型 |
| `value` property | `""` | 当前值；多选以逗号分隔，例如 `"hao,tom"` |
| `value` attribute、`defaultValue` | `""` | 表单重置时恢复的默认值 |
| `name` | `""` | 表单字段名 |
| `placeholder` | `""` | 空值提示 |
| `disabled`、`readonly`、`required` | `false` | 禁用、只读和必填 |
| `multiple` | `false` | `true` 启用多选，正整数限制选择数量 |
| `search` | `true` | 搜索开关；正整数同样视为开启 |

`value` property 和 attribute 分离：用户修改或通过 property 赋值后，再修改 attribute 只改变默认值；`form.reset()` 恢复默认值且不触发 `zui-change`。多选提交一个逗号分隔字符串字段，组件不会额外插入同名隐藏表单项。

支持原生 `FormData`、`form.reset()`、`label for`、`fieldset disabled`，以及 `form`、`labels`、`validity`、`validationMessage`、`willValidate`、`checkValidity()`、`reportValidity()` 和 `setCustomValidity(message)`。`show()`、`hide()` 返回 Promise。

```js
picker.addEventListener('zui-before-change', event => {
    if (event.detail.value === 'restricted') {
        event.preventDefault();
    }
});
```

| 事件 | detail | 触发时机 |
| --- | --- | --- |
| `zui-before-change` | `{value, oldValue}` | 用户修改前，可同步 `preventDefault()` 取消 |
| `zui-change` | `{value, oldValue}` | 用户修改完成，每次有效修改触发一次 |
| `zui-shown`、`zui-hidden` | `{}` | 浮层展开、关闭 |
| `zui-error` | `{error}` | 通用适配器渲染失败；首次挂载失败同时拒绝 `ready` |

这些自定义事件均冒泡且 `composed: true`。程序赋值保持静默；在 `zui-before-change` 回调中赋新值，以该新值为准。

`label for`、`aria-label`、`aria-labelledby`、`aria-describedby` 可为控件提供名称和说明。选择器支持键盘打开、选项导航、选择与关闭，关闭后恢复焦点。完整键盘操作和屏幕阅读器体验仍需结合宿主页面验证。
