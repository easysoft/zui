# 消息框

消息框能够轻松展示一些需要引起用户注意的内容。

## 基本使用

为元素添加 `alert` 类来获得消息框的外观。

::: tabs
== 示例

<Example>
  <div class="alert"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
</Example>

== HTML

```html
<div class="alert"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
```

:::

## 包含链接

使用 `.alert-link` 类来为消息框内的链接添加样式。

::: tabs
== 示例

<Example>
  <div class="alert">当前版本包含新的权限设置。<a href="/guide/start/" class="alert-link">查看使用指南</a></div>
</Example>

== HTML

```html
<div class="alert">当前版本包含新的权限设置。<a href="/guide/start/" class="alert-link">查看使用指南</a></div>
```

:::

## 包含关闭按钮

使用 `.alert-close` 类来为消息框内的关闭按钮添加样式。需要注意的是当需要在消息框中包含更多内容时，需要将消息文本放置在 `.alert-text` 中。

::: tabs
== 示例

<Example>
  <div class="alert">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。<a href="/guide/start/" class="alert-link">查看使用指南</a></div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== HTML

```html
<div class="alert">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。<a href="/guide/start/" class="alert-link">查看使用指南</a></div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

:::

## 包含操作按钮

像添加关闭按钮一样，还可以添加其他操作按钮：

::: tabs

== 示例

<Example>
  <div class="alert">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。<a href="/guide/start/" class="alert-link">查看使用指南</a></div>
    <button type="button" class="btn size-sm">不再显示</button>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== HTML

```html
<div class="alert">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。<a href="/guide/start/" class="alert-link">查看使用指南</a></div>
  <button type="button" class="btn size-sm">不再显示</button>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

:::

可以将多个按钮放在工具栏中：

::: tabs
== 示例

<Example>
 <div class="alert">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。<a href="/guide/start/" class="alert-link">查看使用指南</a></div>
    <div class="toolbar gap-3">
      <button type="button" class="btn size-sm">不再显示</button>
      <button type="button" class="btn success size-sm">知道了</button>
    </div>
  </div>
</Example>

== HTML

```html
<div class="alert">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。<a href="/guide/start/" class="alert-link">查看使用指南</a></div>
  <div class="toolbar gap-3">
    <button type="button" class="btn size-sm">不再显示</button>
    <button type="button" class="btn success size-sm">知道了</button>
  </div>
</div>
```

:::

## 外观类型

配合丰富的 [CSS 工具类](/utilities/) 来实现不同消息框的外观。

### 常用

::: tabs

== 示例

<Example class="space-y-2">
  <div class="alert primary">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert success">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 文件已上传，可以继续添加附件。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert danger-pale">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 文件上传失败，请检查网络后重试。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert warning-pale">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 附件超过 10 MB，请压缩后再上传。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert gray-pale">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 暂无新通知，项目动态会显示在这里。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert gray rounded-full">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 所有变更均已保存。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
  <div class="alert black rounded-none">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 系统将在今晚 22:00 进行例行维护。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== HTML

```html
<div class="alert primary">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert success">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 文件已上传，可以继续添加附件。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert danger-pale">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 文件上传失败，请检查网络后重试。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert warning-pale">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 附件超过 10 MB，请压缩后再上传。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-pale">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 暂无新通知，项目动态会显示在这里。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray rounded-full">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 所有变更均已保存。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert black rounded-none">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 系统将在今晚 22:00 进行例行维护。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

:::

### 实心

::: tabs

== 示例

<Example class="space-y-2">
  <div v-for="skin in skinList" class="alert" :class="skin">
    <div class="alert-text"><i class="icon icon-info-sign"></i> {{ messages[skin] }}</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== HTML

```html
<div class="alert primary">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert secondary">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 邀请链接已复制，可发送给团队成员。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert success">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 文件已上传，可以继续添加附件。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert warning">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 附件超过 10 MB，请压缩后再上传。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert danger">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 文件上传失败，请检查网络后重试。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert important">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 本周发布评审安排在周五 15:00。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert special">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 新成员指南已更新，欢迎查看。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 暂无新通知，项目动态会显示在这里。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

:::

### 灰度

::: tabs

== 示例

<Example class="space-y-2">
  <div v-for="skin in shadeLevels" class="alert" :class="`gray-${skin}`">
    <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== HTML

```html
<div class="alert gray-50">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-100">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-200">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-300">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-400">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-500">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-600">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-700">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-800">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-900">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-950">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

:::

### 轮廓

::: tabs

== 示例

<Example class="space-y-2">
  <div v-for="skin in skinList" class="alert" :class="`${skin}-outline`">
    <div class="alert-text"><i class="icon icon-info-sign"></i> {{ messages[skin] }}</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== HTML

```html
<div class="alert primary-outline">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert secondary-outline">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 邀请链接已复制，可发送给团队成员。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert success-outline">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 文件已上传，可以继续添加附件。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert warning-outline">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 附件超过 10 MB，请压缩后再上传。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert danger-outline">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 文件上传失败，请检查网络后重试。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert important-outline">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 本周发布评审安排在周五 15:00。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert special-outline">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 新成员指南已更新，欢迎查看。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-outline">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 暂无新通知，项目动态会显示在这里。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

:::

### 浅色

::: tabs

== 示例

<Example class="space-y-2">
  <div v-for="skin in skinList" class="alert" :class="`${skin}-pale`">
    <div class="alert-text"><i class="icon icon-info-sign"></i> {{ messages[skin] }}</div>
    <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
  </div>
</Example>

== HTML

```html
<div class="alert primary-pale">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 项目设置已更新，下次登录时生效。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert secondary-pale">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 邀请链接已复制，可发送给团队成员。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert success-pale">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 文件已上传，可以继续添加附件。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert warning-pale">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 附件超过 10 MB，请压缩后再上传。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert danger-pale">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 文件上传失败，请检查网络后重试。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert important-pale">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 本周发布评审安排在周五 15:00。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert special-pale">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 新成员指南已更新，欢迎查看。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
<div class="alert gray-pale">
  <div class="alert-text"><i class="icon icon-info-sign"></i> 暂无新通知，项目动态会显示在这里。</div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

:::

## CSS 类

消息框提供了如下 CSS 类：

| 类             | 类型     | 作用               |
| -------------- |:--------:| ------------------ |
| `alert`        | 实体类   | 元素作为消息框组件 |
| `alert-icon`   | 实体类   | 元素作为消息框内左侧图标 |
| `alert-close`| 实体类   | 元素作为消息框关闭按钮 |
| `alert-text`| 实体类   | 元素作为消息框文本内容 |


## CSS 变量

消息框提供了如下 CSS 变量：

| 变量名称             | 变量含义           |
| ---------------------|--------------------|
| `--alert-bg`         | 消息框默认背景色   |

<script setup>
const messages = {
    primary: '项目设置已更新，下次登录时生效。',
    secondary: '邀请链接已复制，可发送给团队成员。',
    success: '文件已上传，可以继续添加附件。',
    warning: '附件超过 10 MB，请压缩后再上传。',
    danger: '文件上传失败，请检查网络后重试。',
    important: '本周发布评审安排在周五 15:00。',
    special: '新成员指南已更新，欢迎查看。',
    gray: '暂无新通知，项目动态会显示在这里。',
};
const skinList = 'primary,secondary,success,warning,danger,important,special,gray'.split(',');
const shadeLevels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
</script>
