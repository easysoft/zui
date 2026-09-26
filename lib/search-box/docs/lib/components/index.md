# 搜索框

输入关键词、提交搜索并清除内容。以下示例以已按[快速上手](/guide/start/)加载 ZUI 为前提。

## 基础用法


<div id="search-basic" data-doc-example="search-basic">

::: tabs

== 示例

<Example>
  <ZUI id="searchBasic" use="searchBox" :options="searchBasicOptions" />
</Example>

== HTML

```html
<div id="searchBasic"></div>

<script>
const instance = new zui.SearchBox('#searchBasic', {name: 'query', placeholder: '搜索项目名称或编号'});
</script>
```

:::

</div>

## 圆形外观与图标


<div id="search-circle" data-doc-example="search-circle">

::: tabs

== 示例

<Example>
  <ZUI id="searchCircle" use="searchBox" :options="searchCircleOptions" />
</Example>

== HTML

```html
<div id="searchCircle"></div>

<script>
const instance = new zui.SearchBox('#searchCircle', {circle: true, mergeIcon: true, defaultValue: 'ZUI', placeholder: '搜索团队成员'});
</script>
```

:::

</div>

## 输入、清除与快捷键

默认延迟 500 毫秒触发 onChange；Enter 触发 onEnter，Escape 清除内容。非空内容清除时会先触发 onClear，再触发 onChange，所以最后显示“输入：”。
<div id="search-events" data-doc-example="search-events">

::: tabs

== 示例

<Example>
  <ZUI id="searchEvents" use="searchBox" :options="searchEventsOptions" />
<output id="searchEventsResult" aria-live="polite">等待输入</output>
</Example>

== HTML

```html
<div id="searchEvents"></div>
<output id="searchEventsResult" aria-live="polite">等待输入</output>

<script>
const instance = new zui.SearchBox('#searchEvents', {
    placeholder: '输入关键词后按 Enter',
    delay: 500,
    onChange(value) {
        document.querySelector('#searchEventsResult').textContent = '输入：' + value;
    },
    onEnter(value) {
        document.querySelector('#searchEventsResult').textContent = '搜索：' + value;
    },
    onClear() {
        document.querySelector('#searchEventsResult').textContent = '已清除';
    },
});
</script>
```

:::

</div>

## 受控输入

设置 value 后，由调用方保存并回传值。受控输入建议 delay: 0，让每次编辑立即同步；搜索请求可在业务层单独延迟。
<div id="search-controlled" data-doc-example="search-controlled">

::: tabs

== 示例

<Example>
  <ZUI id="searchControlled" use="searchBox" :options="searchControlledOptions" />
<output id="searchControlledResult" aria-live="polite">当前值：ZUI</output>
</Example>

== HTML

```html
<div id="searchControlled"></div>
<output id="searchControlledResult" aria-live="polite">当前值：ZUI</output>

<script>
const instance = new zui.SearchBox('#searchControlled', {
    value: 'ZUI',
    delay: 0,
    onChange(value) {
        zui.SearchBox.get('#searchControlled').render({value});
        document.querySelector('#searchControlledResult').textContent = '当前值：' + value;
    },
});
</script>
```

:::

</div>

## 禁用


<div id="search-disabled" data-doc-example="search-disabled">

::: tabs

== 示例

<Example>
  <ZUI id="searchDisabled" use="searchBox" :options="searchDisabledOptions" />
</Example>

== HTML

```html
<div id="searchDisabled"></div>

<script>
const instance = new zui.SearchBox('#searchDisabled', {defaultValue: '不可编辑', disabled: true, placeholder: '请先选择项目'});
</script>
```

:::

</div>

## 只读

只读输入可聚焦和选择文字，不能编辑或清除。
<div id="search-readonly" data-doc-example="search-readonly">

::: tabs

== 示例

<Example>
  <ZUI id="searchReadonly" use="searchBox" :options="searchReadonlyOptions" />
</Example>

== HTML

```html
<div id="searchReadonly"></div>

<script>
const instance = new zui.SearchBox('#searchReadonly', {defaultValue: '只读关键词', readonly: true});
</script>
```

:::

</div>

## 选项

<Props>
id?: string; // 内部输入框 ID；通过 label 的 for 关联标签。
name?: string; // 表单字段名。
className?: ClassNameLike; // 组件 CSS 类。
rootClass?: ClassNameLike; // 根元素 CSS 类。
rootStyle?: JSX.CSSProperties; // 根元素样式。
style?: JSX.CSSProperties; // 组件样式。
compact?: boolean; // 紧凑模式。
circle?: boolean; // 圆形外观。
/** onChange 延迟，单位毫秒；0 表示立即通知。 */
delay?: number = 500;
defaultValue?: string; // 非受控输入的初始值。
value?: string; // 受控输入值，需要在 onChange 中更新。
placeholder?: string; // 占位文字。
disabled?: boolean; // 禁用输入。
readonly?: boolean; // 只读输入。
clearIcon?: boolean | IconType = true; // 显示清除图标或指定图标。
searchIcon?: boolean | IconType = true; // 显示搜索图标或指定图标。
mergeIcon?: boolean | IconType; // 将搜索图标放在尾部，与清除图标共用位置。
prefixClass?: ClassNameLike; // 前缀容器 CSS 类。
suffixClass?: ClassNameLike; // 后缀容器 CSS 类。
hotkeys?: HotkeysSettings = true; // 默认启用 Enter 和 Escape；false 关闭快捷键。
onChange?: (value: string, event: Event | undefined) => void; // 内容变化后通知。
onEnter?: (value: string, event: Event | undefined) => void; // Enter 按下时通知。
onClear?: (event: Event | undefined) => void; // 清除操作后通知。
onFocus?: (event: FocusEvent) => void; // 获得焦点。
onBlur?: (event: FocusEvent) => void; // 失去焦点。
</Props>

## 方法与生命周期

- `instance.render({value, disabled, readonly})`：更新选项；省略的字段保持原值。
- `instance.$.focus()`、`instance.$.blur()`：聚焦或移开焦点。
- `instance.$.clear()`：清空内容，回调的 `event` 可以为 `undefined`；禁用或只读时不会清除。
- `instance.destroy()`：销毁实例并清理输入监听、延迟通知和快捷键。

## 中文输入与键盘

输入法组合期间不触发 onChange；组合结束后按 delay 通知最终值。输入框支持 Tab 聚焦；Enter 和 Escape 由 hotkeys 控制。为业务输入框提供可见 label，不要仅用 placeholder 作为名称。

更多配置见[输入框](/lib/forms/input-control/)；框架生命周期接入见[在 React 中使用 ZUI vanilla 组件](/lib/basic/core/use-zui-in-react.html)。

<script setup>
const searchBasicOptions = {name: 'query', placeholder: '搜索项目名称或编号'};

const searchCircleOptions = {circle: true, mergeIcon: true, defaultValue: 'ZUI', placeholder: '搜索团队成员'};

const searchEventsOptions = {
    placeholder: '输入关键词后按 Enter',
    delay: 500,
    onChange(value) {
        document.querySelector('#searchEventsResult').textContent = '输入：' + value;
    },
    onEnter(value) {
        document.querySelector('#searchEventsResult').textContent = '搜索：' + value;
    },
    onClear() {
        document.querySelector('#searchEventsResult').textContent = '已清除';
    },
};

const searchControlledOptions = {
    value: 'ZUI',
    delay: 0,
    onChange(value) {
        zui.SearchBox.get('#searchControlled').render({value});
        document.querySelector('#searchControlledResult').textContent = '当前值：' + value;
    },
};

const searchDisabledOptions = {defaultValue: '不可编辑', disabled: true, placeholder: '请先选择项目'};

const searchReadonlyOptions = {defaultValue: '只读关键词', readonly: true};
</script>
