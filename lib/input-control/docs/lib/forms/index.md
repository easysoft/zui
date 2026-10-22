# 输入框

通过鼠标或键盘输入内容，可以在输入框前后位置包含额外的文本或图标，通常用在表单、对话框上面。

## 基本使用

使用 `input-control` 类来获得输入框的外观和交互体验。

::: tabs

== 示例

<Example class="col gap-4">
  <div class="input-control has-prefix">
    <span class="input-control-prefix">用户名</span>
    <input type="text" class="form-control" placeholder="请输入用户名" />
  </div>
  <div class="input-control has-prefix has-suffix">
    <span class="input-control-prefix">用户名</span>
    <input type="text" class="form-control" value="linyue" placeholder="请更换用户名"/>
    <span class="input-control-suffix text-danger">已被占用</span>
  </div>
</Example>

== HTML

```html
<div class="input-control has-prefix">
  <span class="input-control-prefix">用户名</span>
  <input type="text" class="form-control" placeholder="请输入用户名" />
</div>
<div class="input-control has-prefix has-suffix">
  <span class="input-control-prefix">用户名</span>
  <input type="text" class="form-control" value="linyue" placeholder="请更换用户名"/>
  <span class="input-control-suffix text-danger">已被占用</span>
</div>
```

:::

## 包含图标和按钮

::: tabs

== 示例

<Example class="col gap-4">
  <div class="input-control has-prefix-icon">
    <span class="input-control-prefix example-icon example-icon-user" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M8%207a4%204%200%201%200%208%200%204%204%200%201%200-8%200M4%2021v-3c0-6%2016-6%2016%200v3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></span>
    <input type="text" class="form-control" placeholder="请输入用户名" />
  </div>
  <div class="input-control has-prefix-icon has-suffix-icon has-error">
    <span class="input-control-prefix example-icon example-icon-user" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M8%207a4%204%200%201%200%208%200%204%204%200%201%200-8%200M4%2021v-3c0-6%2016-6%2016%200v3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></span>
    <input type="text" class="form-control" value="linyue" placeholder="请更换用户名"/>
    <span class="input-control-suffix text-danger example-icon example-icon-warning-sign" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%203l10%2018H2zM12%209v5m0%203v1%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></span>
  </div>
</Example>

== HTML

```html
<div class="input-control has-prefix-icon">
  <span class="input-control-prefix example-icon example-icon-user" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M8%207a4%204%200%201%200%208%200%204%204%200%201%200-8%200M4%2021v-3c0-6%2016-6%2016%200v3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></span>
  <input type="text" class="form-control" placeholder="请输入用户名" />
</div>
<div class="input-control has-prefix-icon has-suffix-icon has-error">
  <span class="input-control-prefix example-icon example-icon-user" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M8%207a4%204%200%201%200%208%200%204%204%200%201%200-8%200M4%2021v-3c0-6%2016-6%2016%200v3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></span>
  <input type="text" class="form-control" value="linyue" placeholder="请更换用户名"/>
  <span class="input-control-suffix text-danger example-icon example-icon-warning-sign" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%203l10%2018H2zM12%209v5m0%203v1%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></span>
</div>
```

:::

## 前缀和后缀

通过结合类 `has-prefix` `has-suffix` 在输入框上添加前缀或后缀图标或字符。

除了预设的前 / 后缀宽度，还预设了其他两种尺寸，结合 `has-prefix-*` 和 `has-suffix-*` 类进行不同宽度展示。

::: tabs

== 示例

<Example class="col gap-4">
  <div class="input-control has-prefix-sm">
    <span class="input-control-prefix"><i class="example-icon example-icon-user" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M8%207a4%204%200%201%200%208%200%204%204%200%201%200-8%200M4%2021v-3c0-6%2016-6%2016%200v3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
    <input type="text" class="form-control" placeholder="请输入用户名"/>
  </div>
  <div class="input-control has-prefix-sm has-suffix-sm">
    <span class="input-control-prefix"><i class="example-icon example-icon-lock" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2010h14v11H5zM8%2010V6a4%204%200%200%201%208%200v4M12%2014v3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
    <input type="password" class="form-control" placeholder="请输入密码"/>
    <span class="input-control-suffix"><i class="example-icon example-icon-eye" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%2012c5-10%2015-10%2020%200-5%2010-15%2010-20%200zM9%2012a3%203%200%201%200%206%200%203%203%200%201%200-6%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
  </div>
  <div class="input-control has-prefix has-suffix-sm">
    <span class="input-control-prefix">用户名</span>
    <input type="text" class="form-control" placeholder="请输入用户名"/>
    <span class="input-control-suffix"><i class="magnifier"></i></span>
  </div>
  <div class="input-control has-prefix-lg">
    <span class="input-control-prefix">项目访问地址</span>
    <input type="text" class="form-control" placeholder="例如 https://portal.example.com"/>
  </div>
</Example>

== HTML

```html
<div class="input-control has-prefix-sm">
  <span class="input-control-prefix"><i class="example-icon example-icon-user" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M8%207a4%204%200%201%200%208%200%204%204%200%201%200-8%200M4%2021v-3c0-6%2016-6%2016%200v3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
  <input type="text" class="form-control" placeholder="请输入用户名"/>
</div>
<div class="input-control has-prefix-sm has-suffix-sm">
  <span class="input-control-prefix"><i class="example-icon example-icon-lock" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2010h14v11H5zM8%2010V6a4%204%200%200%201%208%200v4M12%2014v3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
  <input type="password" class="form-control" placeholder="请输入密码"/>
  <span class="input-control-suffix"><i class="example-icon example-icon-eye" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%2012c5-10%2015-10%2020%200-5%2010-15%2010-20%200zM9%2012a3%203%200%201%200%206%200%203%203%200%201%200-6%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
</div>
<div class="input-control has-prefix has-suffix">
  <span class="input-control-prefix">用户名</span>
  <input type="text" class="form-control" placeholder="请输入用户名"/>
  <span class="input-control-suffix">点击搜索</span>
</div>
<div class="input-control has-prefix-lg">
  <span class="input-control-prefix">项目访问地址</span>
  <input type="text" class="form-control" placeholder="例如 https://portal.example.com"/>
</div>
```

:::

## 尺寸

除了默认大小，输入框还提供了额外的 2 种预设尺寸。

::: tabs

== 示例

<Example class="col gap-2">
  <div class="flex gap-2">
    <p class="w-36">小号尺寸</p>
    <div class="col gap-2">
      <div class="input-control size-sm w-96">
        <input type="text" class="form-control" placeholder="请输入用户名" />
      </div>
      <div class="input-control size-sm has-prefix has-suffix w-96">
        <span class="input-control-prefix">用户名</span>
        <input type="text" class="form-control size-sm" placeholder="请输入用户名"/>
        <span class="input-control-suffix"><i class="magnifier"></i></span>
      </div>
      <div class="input-control size-sm has-prefix-sm w-96">
        <span class="input-control-prefix"><i class="example-icon example-icon-lock" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2010h14v11H5zM8%2010V6a4%204%200%200%201%208%200v4M12%2014v3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
        <input type="password" class="form-control size-sm" placeholder="请输入密码"/>
      </div>
      <div class="input-control size-sm has-prefix-lg w-96">
        <span class="input-control-prefix">项目访问地址</span>
        <input type="text" class="form-control size-sm" placeholder="例如 https://portal.example.com"/>
      </div>
    </div>
  </div>
  <div class="flex gap-2">
    <p class="w-36">默认尺寸</p>
    <div class="col gap-2">
      <div class="input-control w-96">
        <input type="text" class="form-control" placeholder="请输入用户名" />
      </div>
      <div class="input-control has-prefix has-suffix w-96">
        <span class="input-control-prefix">用户名</span>
        <input type="text" class="form-control" placeholder="请输入用户名"/>
        <span class="input-control-suffix"><i class="magnifier"></i></span>
      </div>
      <div class="input-control has-prefix-sm w-96">
        <span class="input-control-prefix"><i class="example-icon example-icon-lock" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2010h14v11H5zM8%2010V6a4%204%200%200%201%208%200v4M12%2014v3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
        <input type="password" class="form-control" placeholder="请输入密码"/>
      </div>
      <div class="input-control has-prefix-lg w-96">
        <span class="input-control-prefix">项目访问地址</span>
        <input type="text" class="form-control" placeholder="例如 https://portal.example.com"/>
      </div>
    </div>
  </div>
  <div class="flex gap-2">
    <p class="w-36">大号尺寸</p>
    <div class="col gap-2">
      <div class="input-control size-lg w-96">
        <input type="text" class="form-control" placeholder="请输入用户名" />
      </div>
      <div class="input-control size-lg has-prefix has-suffix w-96">
        <span class="input-control-prefix">用户名</span>
        <input type="text" class="form-control size-lg" placeholder="请输入用户名"/>
        <span class="input-control-suffix"><i class="magnifier"></i></span>
      </div>
      <div class="input-control size-lg has-prefix-sm w-96">
        <span class="input-control-prefix"><i class="example-icon example-icon-lock" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2010h14v11H5zM8%2010V6a4%204%200%200%201%208%200v4M12%2014v3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
        <input type="password" class="form-control size-lg" placeholder="请输入密码"/>
      </div>
      <div class="input-control size-lg has-prefix-lg w-96">
        <span class="input-control-prefix">项目访问地址</span>
        <input type="text" class="form-control size-lg" placeholder="例如 https://portal.example.com"/>
      </div>
    </div>
  </div>
</Example>

== HTML

```html
<div class="flex gap-2">
  <p class="w-36">小号尺寸</p>
  <div class="col gap-2">
    <div class="input-control size-sm w-96">
      <input type="text" class="form-control" placeholder="请输入用户名" />
    </div>
    <div class="input-control size-sm has-prefix has-suffix w-96">
      <span class="input-control-prefix">用户名</span>
      <input type="text" class="form-control size-sm" placeholder="请输入用户名"/>
      <span class="input-control-suffix"><i class="magnifier"></i></span>
    </div>
    <div class="input-control size-sm has-prefix-sm w-96">
      <span class="input-control-prefix"><i class="example-icon example-icon-lock" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2010h14v11H5zM8%2010V6a4%204%200%200%201%208%200v4M12%2014v3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
      <input type="password" class="form-control size-sm" placeholder="请输入密码"/>
    </div>
    <div class="input-control size-sm has-prefix-lg w-96">
      <span class="input-control-prefix">项目访问地址</span>
      <input type="text" class="form-control size-sm" placeholder="例如 https://portal.example.com"/>
    </div>
  </div>
</div>
<div class="flex gap-2">
  <p class="w-36">默认尺寸</p>
  <div class="col gap-2">
    <div class="input-control w-96">
      <input type="text" class="form-control" placeholder="请输入用户名" />
    </div>
    <div class="input-control has-prefix has-suffix w-96">
      <span class="input-control-prefix">用户名</span>
      <input type="text" class="form-control" placeholder="请输入用户名"/>
      <span class="input-control-suffix"><i class="magnifier"></i></span>
    </div>
    <div class="input-control has-prefix-sm w-96">
      <span class="input-control-prefix"><i class="example-icon example-icon-lock" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2010h14v11H5zM8%2010V6a4%204%200%200%201%208%200v4M12%2014v3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
      <input type="password" class="form-control" placeholder="请输入密码"/>
    </div>
    <div class="input-control has-prefix-lg w-96">
      <span class="input-control-prefix">项目访问地址</span>
      <input type="text" class="form-control" placeholder="例如 https://portal.example.com"/>
    </div>
  </div>
</div>
<div class="flex gap-2">
  <p class="w-36">大号尺寸</p>
  <div class="col gap-2">
    <div class="input-control size-lg w-96">
      <input type="text" class="form-control" placeholder="请输入用户名" />
    </div>
    <div class="input-control size-lg has-prefix has-suffix w-96">
      <span class="input-control-prefix">用户名</span>
      <input type="text" class="form-control size-lg" placeholder="请输入用户名"/>
      <span class="input-control-suffix"><i class="magnifier"></i></span>
    </div>
    <div class="input-control size-lg has-prefix-sm w-96">
      <span class="input-control-prefix"><i class="example-icon example-icon-lock" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M5%2010h14v11H5zM8%2010V6a4%204%200%200%201%208%200v4M12%2014v3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></span>
      <input type="password" class="form-control size-lg" placeholder="请输入密码"/>
    </div>
    <div class="input-control size-lg has-prefix-lg w-96">
      <span class="input-control-prefix">项目访问地址</span>
      <input type="text" class="form-control size-lg" placeholder="例如 https://portal.example.com"/>
    </div>
  </div>
</div>
```

:::

## 外观类型

配合使用[CSS 工具类](/utilities/)来实现不同输入框的外观。下面展示各种工具类的外观效果。

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap items-end">
  <div class="input-control">
    <input type="text" class="form-control circle" placeholder="请输入用户名" />
  </div>
  <div class="input-control">
    <input type="text" class="form-control shadow" placeholder="请输入用户名" />
  </div>
</Example>

== HTML

```html
<div class="input-control">
  <input type="text" class="form-control circle" placeholder="请输入用户名" />
</div>
<div class="input-control">
  <input type="text" class="form-control shadow" placeholder="请输入用户名" />
</div>
```

:::

## CSS 类

输入框提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `input-control`      | 实体类 | 元素作为输入框组件 |
| `input-control-prefix`      | 工具类 | 输入框前缀元素样式 |
| `input-control-suffix`      | 工具类 | 输入框后缀元素样式 |
| `has-prefix`      | 工具类 | 标记输入框拥有前缀元素 |
| `has-suffix`      | 工具类 | 标记输入框拥有后缀元素 |
| `has-prefix-icon`      | 工具类 | 标记输入框拥有前缀图标 |
| `has-suffix-icon`      | 工具类 | 标记输入框拥有后缀图标 |
| `size-sm`      | 工具类      |   输入框使用小号尺寸 |
| `size-lg`      | 工具类      |   输入框使用大号尺寸 |

## CSS 变量

输入框提供了如下 CSS 变量，可进行全局修改。

| CSS 变量名        | 作用           |
| ------------- |:------------- |
| `--input-fix-width`      | 输入框前/后缀的默认宽度 |
| `--input-fix-width-sm`      | 输入框前/后缀的小号宽度 |
| `--input-fix-width-lg`      | 输入框前/后缀的大号宽度 |
