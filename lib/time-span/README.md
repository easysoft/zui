# 时间标签

## 日期时间格式化标签

```html:example
<p>现在是：<strong zui-create="timespan" zui-create-timespan="{time: Date.now(), format: 'yyyy年MM月dd日 HH:mm'}"></strong></p>
<p>不合法的时间：<u zui-create="timespan" zui-create-timespan="{time: '2026-1x23 10:00:00', format: 'yyyy年MM月dd日 HH:mm'}"></u></p>
```

## Time Ago 标签

```html:example
<p>页面加载于： <strong zui-create="timeago" zui-create-timeago="{time: Date.now()}"></strong></p>
<p>功能开发于： <strong zui-create="timeago" zui-create-timeago="{time: '2026-1-22 10:00:00'}"></strong></p>
<p>不合法的时间： <strong zui-create="timeago" zui-create-timeago="{time: '2026-1x22 10:00:00', hint: '2026-1-22 10:00:00'}"></strong></p>
<p>3 小时后： <strong zui-create="timeago" zui-create-timeago="{time: Date.now() + 1000 * 60 * 60 * 3 + 100}"></strong></p>
<p>一天后： <strong zui-create="timeago" zui-create-timeago="{time: Date.now() + 1000 * 60 * 60 * 25}"></strong></p>
<p>一年后： <strong zui-create="timeago" zui-create-timeago="{time: Date.now() + 1000 * 60 * 60 * 25 * 365}"></strong></p>
```
