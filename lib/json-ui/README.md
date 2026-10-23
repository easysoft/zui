# JSON UI

用 JSON 描述界面，由 CustomContent 渲染已注册的 ZUI 组件。`schema` 就是这份界面描述，不是 JSON Schema 校验标准。

## 编辑与预览

选择示例，修改 JSON 后点击“渲染”。基础示例包含 ZUI Button、原生 button 和 Menu；点击按钮或菜单可观察下方事件反馈。未通过校验的更新保留上一次有效界面。

```html:example:col gap-4
<label for="jsonUIScenario">示例</label>
<select id="jsonUIScenario" class="form-control">
  <option value="basic">组件与原生元素</option>
  <option value="state">状态、双向绑定与省市联动</option>
  <option value="html">HTML 内容</option>
  <option value="lazy">异步 JSON UI</option>
  <option value="lazyHTML">异步 HTML</option>
</select>
<div class="row flex-wrap gap-4">
  <label><input id="jsonUIAllowHTML" type="checkbox"> 允许直接 HTML</label>
  <label><input id="jsonUIAllowLazyHTML" type="checkbox"> 允许异步 HTML</label>
</div>
<p>权限由宿主设置，不能在 JSON 中开启。切换权限会重建预览实例；本页不开放脚本执行。</p>
<label for="jsonUISource">UI JSON</label>
<textarea id="jsonUISource" class="form-control font-mono h-auto" rows="22" spellcheck="false" aria-describedby="jsonUIErrors"></textarea>
<div><button id="jsonUIApply" type="button" class="btn primary">渲染</button></div>
<pre id="jsonUIErrors" role="alert" aria-live="polite"></pre>
<div id="jsonUIPreview" aria-label="JSON UI 预览"></div>
<output id="jsonUIEvents" role="status" aria-live="polite">尚未触发事件。</output>
```

组件必须先加载并注册，名称不区分大小写；`tag: "button"` 明确渲染原生元素，`component: "Button"` 使用已注册组件。调试页显式加载 Button、Menu 和 Picker，生产页面需加载实际使用的组件和样式。

`props` 使用目标组件原本的参数，`events` 使用原本的回调属性名。旧节点的事件字符串映射到宿主函数；`version: 1` 文档通过 `state`、`computed`、`bind`、`model`、`watch` 和 JSON 动作实现本地联动。

选择“状态、双向绑定与省市联动”，先选省份和城市，再切换省份观察城市清空；勾选框控制摘要显隐，重置按钮恢复初值。状态变更会显示在下方反馈中。修改 JSON 后“渲染”保留当前状态，切换示例会重建实例。完整协议见正式文档，供 AI 按章节检索的参考位于 `ai.md`。
