# 表单

## 基本用法

为 `<form>` 元素使用类 `.form` 类来获得表单外观，将[表单控件](/lib/forms/form-control/)放置在表单控件组 `.form-group` 内，将表单操作按钮放置在表单操作栏 `.form-actions` 中。

::: tabs

== 示例

<Example>
  <form class="form w-56">
    <div class="form-group">
      <label class="form-label">账号</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label class="form-label">密码</label>
      <input type="password" class="form-control" />
    </div>
    <div class="form-actions">
      <button type="submit" class="btn primary btn-wide">登录</button>
    </div>
  </form>
</Example>

== HTML

```html
<form class="form w-56">
  <div class="form-group">
    <label class="form-label">账号</label>
    <input type="text" class="form-control" />
  </div>
  <div class="form-group">
    <label class="form-label">密码</label>
    <input type="password" class="form-control" />
  </div>
  <div class="form-actions">
    <button type="submit" class="btn primary btn-wide">登录</button>
  </div>
</form>
```

:::

## 水平布局的表单

为 `<form>` 元素使用类 `.form-horz` 类来让表单实现水平布局。

::: tabs

== 示例

<Example>
  <form class="form form-horz">
    <div class="form-group">
      <label class="form-label">账号</label>
      <input type="text" class="form-control" />
    </div>
    <div class="form-group">
      <label class="form-label">密码</label>
      <input type="password" class="form-control" />
    </div>
    <div class="form-actions">
      <button type="submit" class="btn primary btn-wide">登录</button>
    </div>
  </form>
</Example>

== HTML

```html
<form class="form form-horz">
  <div class="form-group">
    <label class="form-label">账号</label>
    <input type="text" class="form-control" />
  </div>
  <div class="form-group">
    <label class="form-label">密码</label>
    <input type="password" class="form-control" />
  </div>
  <div class="form-actions">
    <button type="submit" class="btn primary btn-wide">登录</button>
  </div>
</form>
```

:::

在水平布局表单中，如果需要在一行包含多个表单控件，可以使用 `.form-row` 类，下面是一个更复杂的例子：

::: tabs

== 示例

<Example>
  <form class="form form-horz">
    <div class="form-row">
      <div class="w-1/2 form-group">
        <label class="form-label" for="smallInput">小型框</label>
        <input class="form-control" type="text" id="smallInput" placeholder="输入框或选择框（10个字符以内）">
        <div class="form-tip">可以放在同一行的字段满足：可连着填写，字段意义上有相似性</div>
      </div>
      <div class="w-1/2 form-group">
        <label class="form-label" for="middleInput">中型框</label>
        <input class="form-control" type="text" id="middleInput">
      </div>
    </div>
    <div class="form-row">
      <div class="w-1/2 form-group">
        <label class="form-label" for="startDate">输入组</label>
        <div class="input-group">
          <div class="input-control has-suffix-icon">
            <input id="startDate" type="text" class="rounded-r-none form-control" placeholder="开始时间">
            <label for="startDate" class="input-control-suffix"><i class="icon icon-calendar"></i></label>
          </div>
          <span class="input-group-addon">至</span>
          <div class="input-control has-suffix-icon">
            <input id="endDate" type="text" class="rounded-l-none form-control" placeholder="结束时间">
            <label for="endDate" class="input-control-suffix"><i class="icon icon-calendar"></i></label>
          </div>
        </div>
      </div>
      <div class="w-1/2 form-group no-label">
        <div class="check-list-inline">
          <div class="checkbox-primary">
            <input type="checkbox" name="primaryRadioGroup2" checked="checked" id="unset">
            <label for="unset">待定</label>
          </div>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="w-1/2 form-group has-error">
        <label class="form-label" for="shortTitle">短标题类</label>
        <input id="shortTitle" type="text" class="form-control" placeholder="">
        <div class="form-tip">此表单项为必填</div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label" for="longTitle">长标题类</label>
        <input id="longTitle" type="text" class="form-control" placeholder="">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label" for="longTitle">编辑器</label>
        <textarea rows="5" class="form-control" placeholder="输入一些文本" >Hello, world!</textarea>
      </div>
    </div>
    <div class="form-row">
      <div class="w-1/2 form-group">
        <label class="form-label" for="linkProduct">关联产品</label>
        <select class="form-control" data-placeholder="选择一个产品..." id="linkProduct">
          <option value=""></option>
          <option value="cat">小猫</option>
          <option value="fish">金鱼</option>
          <option value="dragon">龙</option>
          <option value="mammoth">猛犸</option>
        </select>
      </div>
      <div class="w-1/2 form-group">
        <label class="form-label" for="linkPlan">关联计划</label>
        <select class="rounded form-control" data-placeholder="选择一个计划..." id="linkPlan">
          <option value=""></option>
          <option value="cat">小猫</option>
          <option value="fish">金鱼</option>
          <option value="dragon">龙</option>
          <option value="mammoth">猛犸</option>
        </select>
      </div>
    </div>
    <div class="form-row">
      <div class="w-1/2 form-group">
        <label class="form-label" for="manager">负责人</label>
        <div class="input-group">
          <select class="form-control" id="manager">
            <option value=""></option>
            <option value="cat">小猫</option>
            <option value="fish">金鱼</option>
            <option value="dragon">龙</option>
            <option value="mammoth">猛犸</option>
          </select>
          <label class="input-group-addon" for="productManager">产品负责人</label>
          <select class="rounded-r-none form-control" id="productManager">
            <option value=""></option>
            <option value="cat">小猫</option>
            <option value="fish">金鱼</option>
            <option value="dragon">龙</option>
            <option value="mammoth">猛犸</option>
          </select>
        </div>
      </div>
      <div class="w-1/2 form-group no-label">
        <div class="input-group">
          <label class="rounded-l-none input-group-addon" for="testManager">测试负责人</label>
          <select class="form-control" id="testManager">
            <option value=""></option>
            <option value="cat">小猫</option>
            <option value="fish">金鱼</option>
            <option value="dragon">龙</option>
            <option value="mammoth">猛犸</option>
          </select>
          <label class="input-group-addon" for="releaseManager">发布负责人</label>
          <select class="form-control" id="releaseManager">
            <option value=""></option>
            <option value="cat">小猫</option>
            <option value="fish">金鱼</option>
            <option value="dragon">龙</option>
            <option value="mammoth">猛犸</option>
          </select>
        </div>
        <div class="form-tip text-success">强关联字段，有灰色底色进行连接，3个以上框的自适应宽度</div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="font-bold form-label required" for="taskTitle">任务标题</label>
        <div class="input-group">
          <input id="taskTitle" type="text" class="form-control" placeholder="请输入任务标题">
          <label class="input-group-addon" for="priList">优先级</label>
          <select class="w-40 form-control" id="priList">
            <option value=""></option>
            <option value="cat">小猫</option>
            <option value="fish">金鱼</option>
            <option value="dragon">龙</option>
            <option value="mammoth">猛犸</option>
          </select>
          <label class="input-group-addon" for="taskEst">预计</label>
          <div class="input-control has-suffix-icon">
            <input id="taskEst" type="text" class="form-control" placeholder="工时">
            <label for="taskEst" class="text-right input-control-suffix text-red">H</label>
          </div>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label" for="inlineRadio">是否继续</label>
        <div class="check-list-inline">
          <div class="radio-primary">
            <input type="radio" name="primaryRadioGroup1" id="primaryradio1">
            <label for="primaryradio1">是</label>
          </div>
          <div class="radio-primary">
            <input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio2">
            <label for="primaryradio2">否</label>
          </div>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label" for="inlineRadioList">是否公开</label>
        <div class="check-list">
          <div class="radio-primary">
            <input type="radio" name="primaryRadioGroup2" id="primaryradio3">
            <label for="primaryradio3">默认公开 <span class="muted">（有项目视图权限即可访问）</span></label>
          </div>
          <div class="radio-primary">
            <input type="radio" name="primaryRadioGroup2" checked="checked" id="primaryradio4">
            <label for="primaryradio4">私有 <span class="muted">（只有项目负责人、团队成员和干系人可访问）</span></label>
          </div>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="w-1/2 form-group">
        <label class="form-label" for="halfExample1">注入环节</label>
        <input class="form-control" type="text" id="halfExample1">
      </div>
      <div class="w-1/2 form-group">
        <label class="form-label" for="halfExample2">发现环节</label>
        <select class="form-control" id="halfExample2">
            <option value=""></option>
            <option value="cat">小猫</option>
            <option value="fish">金鱼</option>
            <option value="dragon">龙</option>
            <option value="mammoth">猛犸</option>
          </select>
      </div>
    </div>
    <div class="form-row">
      <div class="gap-4 form-group">
        <button type="submit" class="btn primary">提交</button>
        <button type="submit" class="btn">取消</button>
      </div>
    </div>
  </form>
</Example>

== HTML

```html
<form class="form form-horz">
  <div class="form-row">
    <div class="w-1/2 form-group">
      <label class="form-label" for="smallInput">小型框</label>
      <input class="form-control" type="text" id="smallInput" placeholder="输入框或选择框（10个字符以内）">
      <div class="form-tip">可以放在同一行的字段满足：可连着填写，字段意义上有相似性</div>
    </div>
    <div class="w-1/2 form-group">
      <label class="form-label" for="middleInput">中型框</label>
      <input class="form-control" type="text" id="middleInput">
    </div>
  </div>
  <div class="form-row">
    <div class="w-1/2 form-group">
      <label class="form-label" for="startDate">输入组</label>
      <div class="input-group">
        <div class="input-control has-suffix-icon">
          <input id="startDate" type="text" class="rounded-r-none form-control" placeholder="开始时间">
          <label for="startDate" class="input-control-suffix"><i class="icon icon-calendar"></i></label>
        </div>
        <span class="input-group-addon">至</span>
        <div class="input-control has-suffix-icon">
          <input id="endDate" type="text" class="rounded-l-none form-control" placeholder="结束时间">
          <label for="endDate" class="input-control-suffix"><i class="icon icon-calendar"></i></label>
        </div>
      </div>
    </div>
    <div class="w-1/2 form-group no-label">
      <div class="check-list-inline">
        <div class="checkbox-primary">
          <input type="checkbox" name="primaryRadioGroup2" checked="checked" id="unset">
          <label for="unset">待定</label>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="w-1/2 form-group has-error">
      <label class="form-label" for="shortTitle">短标题类</label>
      <input id="shortTitle" type="text" class="form-control" placeholder="">
      <div class="form-tip">此表单项为必填</div>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="longTitle">长标题类</label>
      <input id="longTitle" type="text" class="form-control" placeholder="">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="longTitle">编辑器</label>
      <textarea rows="5" class="form-control" placeholder="输入一些文本" >Hello, world!</textarea>
    </div>
  </div>
  <div class="form-row">
    <div class="w-1/2 form-group">
      <label class="form-label" for="linkProduct">关联产品</label>
      <select class="form-control" data-placeholder="选择一个产品..." id="linkProduct">
        <option value=""></option>
        <option value="cat">小猫</option>
        <option value="fish">金鱼</option>
        <option value="dragon">龙</option>
        <option value="mammoth">猛犸</option>
      </select>
    </div>
    <div class="w-1/2 form-group">
      <label class="form-label" for="linkPlan">关联计划</label>
      <select class="rounded form-control" data-placeholder="选择一个计划..." id="linkPlan">
        <option value=""></option>
        <option value="cat">小猫</option>
        <option value="fish">金鱼</option>
        <option value="dragon">龙</option>
        <option value="mammoth">猛犸</option>
      </select>
    </div>
  </div>
  <div class="form-row">
    <div class="w-1/2 form-group">
      <label class="form-label" for="manager">负责人</label>
      <div class="input-group">
        <select class="form-control" id="manager">
          <option value=""></option>
          <option value="cat">小猫</option>
          <option value="fish">金鱼</option>
          <option value="dragon">龙</option>
          <option value="mammoth">猛犸</option>
        </select>
        <label class="input-group-addon" for="productManager">产品负责人</label>
        <select class="rounded-r-none form-control" id="productManager">
          <option value=""></option>
          <option value="cat">小猫</option>
          <option value="fish">金鱼</option>
          <option value="dragon">龙</option>
          <option value="mammoth">猛犸</option>
        </select>
      </div>
    </div>
    <div class="w-1/2 form-group no-label">
      <div class="input-group">
        <label class="rounded-l-none input-group-addon" for="testManager">测试负责人</label>
        <select class="form-control" id="testManager">
          <option value=""></option>
          <option value="cat">小猫</option>
          <option value="fish">金鱼</option>
          <option value="dragon">龙</option>
          <option value="mammoth">猛犸</option>
        </select>
        <label class="input-group-addon" for="releaseManager">发布负责人</label>
        <select class="form-control" id="releaseManager">
          <option value=""></option>
          <option value="cat">小猫</option>
          <option value="fish">金鱼</option>
          <option value="dragon">龙</option>
          <option value="mammoth">猛犸</option>
        </select>
      </div>
      <div class="form-tip text-success">强关联字段，有灰色底色进行连接，3个以上框的自适应宽度</div>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="font-bold form-label required" for="taskTitle">任务标题</label>
      <div class="input-group">
        <input id="taskTitle" type="text" class="form-control" placeholder="请输入任务标题">
        <label class="input-group-addon" for="priList">优先级</label>
        <select class="w-40 form-control" id="priList">
          <option value=""></option>
          <option value="cat">小猫</option>
          <option value="fish">金鱼</option>
          <option value="dragon">龙</option>
          <option value="mammoth">猛犸</option>
        </select>
        <label class="input-group-addon" for="taskEst">预计</label>
        <div class="input-control has-suffix-icon">
          <input id="taskEst" type="text" class="form-control" placeholder="工时">
          <label for="taskEst" class="text-right input-control-suffix text-red">H</label>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="inlineRadio">是否继续</label>
      <div class="check-list-inline">
        <div class="radio-primary">
          <input type="radio" name="primaryRadioGroup1" id="primaryradio1">
          <label for="primaryradio1">是</label>
        </div>
        <div class="radio-primary">
          <input type="radio" name="primaryRadioGroup1" checked="checked" id="primaryradio2">
          <label for="primaryradio2">否</label>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label" for="inlineRadioList">是否公开</label>
      <div class="check-list">
        <div class="radio-primary">
          <input type="radio" name="primaryRadioGroup2" id="primaryradio3">
          <label for="primaryradio3">默认公开 <span class="muted">（有项目视图权限即可访问）</span></label>
        </div>
        <div class="radio-primary">
          <input type="radio" name="primaryRadioGroup2" checked="checked" id="primaryradio4">
          <label for="primaryradio4">私有 <span class="muted">（只有项目负责人、团队成员和干系人可访问）</span></label>
        </div>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="w-1/2 form-group">
      <label class="form-label" for="halfExample1">注入环节</label>
      <input class="form-control" type="text" id="halfExample1">
    </div>
    <div class="w-1/2 form-group">
      <label class="form-label" for="halfExample2">发现环节</label>
      <select class="form-control" id="halfExample2">
          <option value=""></option>
          <option value="cat">小猫</option>
          <option value="fish">金鱼</option>
          <option value="dragon">龙</option>
          <option value="mammoth">猛犸</option>
        </select>
    </div>
  </div>
  <div class="form-row">
    <div class="gap-4 form-group">
      <button type="submit" class="btn primary">提交</button>
      <button type="submit" class="btn">取消</button>
    </div>
  </div>
</form>
```

:::

## 网格布局

为 `<form>` 元素使用类 `.form-grid` 类来让表单实现网格布局。

::: tabs

== 示例

<Example>
  <form class="form form-grid">
    <div class="form-group w-1/2">
      <label class="form-label" for="program">所属项目集 <i class="icon icon-question-sign muted"></i></label>
      <select class="form-control" id="program">
        <option>ZUI</option>
        <option>禅道</option>
      </select>
      <div class="form-tip">为 <code>.form-group</code> 添加 <code>w-*</code> 辅助类来设置宽度</div>
    </div>
    <div class="form-group w-1/2">
      <div class="form-label">项目类型</div>
      <div class="check-list-inline">
        <label class="radio">
          <input type="radio" name="type" checked> 产品型
        </label>
        <label class="radio">
          <input type="radio" name="type"> 项目型
        </label>
      </div>
    </div>
    <div class="form-group w-1/2">
      <label class="form-label required" for="name">
        项目名称
        <label class="checkbox">
          <input type="checkbox" name="iteration" checked> 启用迭代
        </label>
      </label>
      <input type="text" class="form-control" id="name">
    </div>
    <div class="form-group w-1/2">
      <label class="form-label" for="manager">
        负责人
      </label>
      <select class="form-control" id="manager">
        <option value=""></option>
        <option value="cat">小猫</option>
        <option value="fish">金鱼</option>
        <option value="dragon">龙</option>
        <option value="mammoth">猛犸</option>
      </select>
    </div>
    <div class="form-group w-1/2">
      <label class="form-label required" for="start">
        计划日期
      </label>
      <div class="center-row">
        <input type="date" class="form-control" id="start" placeholder="选择日期" />
        <span class="px-2">-</span>
        <input type="date" class="form-control" placeholder="选择日期" />
      </div>
    </div>
    <div class="form-grid-wrap"></div>
    <div class="form-group w-1/2">
      <label class="form-label required" for="days">
        可用工作日（单位：天）
      </label>
      <input type="text" class="form-control" id="days">
    </div>
    <div class="form-group w-full">
      <label class="form-label required" for="days">
        项目描述
      </label>
      <textarea rows="5" class="form-control" placeholder="输入一些文本">Hello, world!</textarea>
    </div>
    <div class="form-actions">
      <button type="submit" class="btn primary">提交</button>
      <button type="submit" class="btn">取消</button>
    </div>
  </form>
</Example>

== HTML

```html
```

:::

## 帮助性文本

使用 `form-tip` 来显示帮助性的文本并添加到表单控件组中。

::: tabs

== 示例

<Example>
  <div class="form-group">
    <label class="form-label" for="exampleInputAccount2">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount2" placeholder="输入用来注册的用户名">
    <label class="form-tip text-warning" for="exampleInputAccount2">用户名可以包含特殊字符及汉字。</label>
  </div>
</Example>

== HTML

```html
<div class="form-group">
  <div class="form-group">
    <label class="form-label" for="exampleInputAccount2">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount2" placeholder="输入用来注册的用户名">
    <label class="form-tip text-warning" for="exampleInputAccount2">用户名可以包含特殊字符及汉字。</label>
  </div>
</div>
```

:::

## 校验状态

通过为表单控件组添加 `has-warning`、`has-error`、`has-success` 类即可应用相应的效验状态样式。这些样式会影响到表单控件组内的 `label`、`.form-control` 和 `.form-tip` 元素。

::: tabs

== 示例

<Example>
  <form class="form">
    <div class="form-group has-success">
      <label class="form-label" for="inputSuccess1">输入框（success）</label>
      <input type="text" class="form-control" id="inputSuccess1">
      <label class="form-tip" for="inputSuccess1">这是帮助性提示文本。</label>
    </div>
    <div class="form-group has-warning">
      <label class="form-label" for="inputWarning1">输入框（warning）</label>
      <input type="text" class="form-control" id="inputWarning1">
    </div>
    <div class="form-group has-error">
      <label class="form-label" for="inputError1">输入框（error）</label>
      <input type="text" class="form-control" id="inputError1">
    </div>
  </form>
</Example>

== HTML

```html
<form class="form">
  <div class="form-group has-success">
    <label class="form-label" for="inputSuccess1">输入框（success）</label>
    <input type="text" class="form-control" id="inputSuccess1">
    <label class="form-tip" for="inputSuccess1">这是帮助性提示文本。</label>
  </div>
  <div class="form-group has-warning">
    <label class="form-label" for="inputWarning1">输入框（warning）</label>
    <input type="text" class="form-control" id="inputWarning1">
  </div>
  <div class="form-group has-error">
    <label class="form-label" for="inputError1">输入框（error）</label>
    <input type="text" class="form-control" id="inputError1">
  </div>
</form>
```

:::

## 表单分组

使用fieldset 将多个表单控件放置在一起进行分组。在`<fieldset>` 内使用 `<legend>` 来定义分组标题。

::: tabs

== 示例

<Example>
  <form class="form">
    <fieldset>
      <legend><div class="form-title">账号信息</div></legend>
      <div class="form-group">
        <label class="form-label" for="exampleInputAccount3">账号</label>
        <input type="text" class="form-control" id="exampleInputAccount3" placeholder="电子邮件/手机号/用户名">
      </div>
      <div class="form-group">
        <label class="form-label">密码</label>
        <input type="password" class="form-control" />
      </div>
    </fieldset>
    <fieldset>
      <legend><div class="form-title">额外内容</div></legend>
      <div class="check-list">
        <label class="radio">
          <input type="radio" name="exampleRadioOption2"> 使用默认选项
        </label>
        <label class="radio">
          <input type="radio" name="exampleRadioOption2"> 让我自定义选项
        </label>
      </div>
    </fieldset>
    <div class="form-actions">
      <button type="submit" class="btn primary btn-wide">提交</button>
    </div>
  </form>
</Example>

== HTML

```html
<form class="form">
  <fieldset>
    <legend><div class="form-title">账号信息</div></legend>
    <div class="form-group">
      <label class="form-label" for="exampleInputAccount3">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount3" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
      <label class="form-label">密码</label>
      <input type="password" class="form-control" />
    </div>
  </fieldset>
  <fieldset>
    <legend><div class="form-title">额外内容</div></legend>
    <div class="check-list">
      <label class="radio">
        <input type="radio" name="exampleRadioOption2"> 使用默认选项
      </label>
      <label class="radio">
        <input type="radio" name="exampleRadioOption2"> 让我自定义选项
      </label>
    </div>
  </fieldset>
  <div class="form-actions">
    <button type="submit" class="btn primary btn-wide">提交</button>
  </div>
</form>
```

:::

## 标记必填项

标记必填项的一种通用方法是在标签上添加星标 `*` , 在表单控件组中只需要为表单组标签 `.form-label` 添加 `required` 类。

::: tabs

== 示例

<Example>
  <form class="form w-56">
    <div class="form-group">
      <label for="exampleInputAccount8" class="form-label required">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword8" class="form-label required">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword8">
    </div>
    <div class="form-actions">
      <button type="submit" class="btn primary btn-wide">提交</button>
    </div>
  </form>
</Example>

== HTML

```html
<form class="form">
  <div class="form-group">
    <label for="exampleInputAccount8" class="form-label required">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword8" class="form-label required">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword8">
  </div>
  <div class="form-actions">
    <button type="submit" class="btn primary btn-wide">提交</button>
  </div>
</form>
```

:::

水平布局的表单中也可以使用：

::: tabs

== 示例

<Example>
  <form class="form-grid">
    <div class="form-group">
      <label for="exampleInputAccount8" class="form-label required">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword8" class="form-label required">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword8">
    </div>
  </form>
</Example>

== HTML

```html
<form class="form-grid">
  <div class="form-group">
    <label for="exampleInputAccount8" class="form-label required">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount8" placeholder="电子邮件/手机号/用户名">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword8" class="form-label required">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword8">
  </div>
</form>
```

:::

## CSS 类

表单提供了如下 CSS 类

  | 类        | 类型           | 作用  |
  | ------------- |:-------------:| ----- |
  | `form-group`      | 实体类 | 元素作为表单组件 |
  | `form-label`        | 实体类 | 元素作为表单组标签 |
  | `form-control`    | 实体类 | 元素作为表单控件组件 |
  | `form-tip`        | 实体类 | 元素作为表单控件的提示性文本 |
  | `form-actions` | 实体类 | 元素作为表单按钮容器 |
  | `form-grid` | 修饰类 | 为表单启用水平排列样式 |
  | `required`        | 修饰类 | 为表单控件启用必填标记样式 |
  | `has-error`       | 修饰类 | 为表单控件启用报错样式 |
  | `has-warning`     | 修饰类 | 为表单控件启用警告样式 |
  | `has-success`     | 修饰类 | 为表单控件启用成功样式 |

## CSS 变量

 | 变量名称 | 变量含义 |
 | -------- | -------- |
 | `--form-label-color`       | 表单组标签颜色 |
 | `--form-tip-color`   | 帮助性文本默认颜色  |
 | `--form-grid-label-width`    | 水平布局时表单表单组标签宽度  |
