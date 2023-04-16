# 表单

## `.form` `.form-group`

```html:example
<form class="form w-80">
  <div class="form-group">
    <label class="form-label required" for="exampleInputAccount1">账号</label>
    <input type="text" class="form-control" id="exampleInputAccount1" placeholder="电子邮件/手机号/用户名">
  </div>
  <div class="form-group">
    <label class="form-label required" for="exampleInputPassword1">密码</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="">
  </div>
  <div class="form-group">
    <label class="form-label" for="exampleInputMoney1">捐赠金额</label>
    <div class="input-group">
      <span class="input-group-addon">￥</span>
      <input type="number" class="form-control" id="exampleInputMoney1" placeholder="人民币">
      <span class="input-group-addon">.00</span>
    </div>
    <div class="form-tip">最低捐赠金额为 ￥10.00</div>
  </div>
  <button type="submit" class="btn primary">提交</button>
</form>
```

## `.form-grid`

```html:example
<form class="form form-grid" style="max-width: 1000px">
  <div class="form-row">
    <div class="w-1/2 form-group">
      <label class="form-label" for="smallInput">小型框</label>
      <input class="w-1/2 form-control" type="text" id="smallInput" placeholder="输入框或选择框（10个字符以内）">
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
      <select class="rounded-r-none form-control" data-placeholder="选择一个产品..." id="linkProduct">
        <option value=""></option>
        <option value="cat">小猫</option>
        <option value="fish">金鱼</option>
        <option value="dragon">龙</option>
        <option value="mammoth">猛犸</option>
      </select>
    </div>
    <div class="w-1/2 form-group no-label">
      <div class="input-group">
        <label class="rounded-l-none input-group-addon" for="linkPlan">关联计划</label>
        <select class="rounded form-control" data-placeholder="选择一个计划..." id="linkPlan">
          <option value=""></option>
          <option value="cat">小猫</option>
          <option value="fish">金鱼</option>
          <option value="dragon">龙</option>
          <option value="mammoth">猛犸</option>
        </select>
      </div>
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
  <div class="w-1/2 form-row">
    <div class="form-group">
      <input id="shortTitle2" type="text" class="form-control" placeholder="">
    </div>
  </div>
  <div class="w-1/2 form-row">
    <div class="form-group">
      <div class="input-group">
        <select class="form-control" id="testManager1">
          <option value=""></option>
          <option value="cat">小猫</option>
          <option value="fish">金鱼</option>
          <option value="dragon">龙</option>
          <option value="mammoth">猛犸</option>
        </select>
        <label class="input-group-addon" for="releaseManager1">XXXXXXXX</label>
        <select class="form-control" id="releaseManager1">
          <option value=""></option>
          <option value="cat">小猫</option>
          <option value="fish">金鱼</option>
          <option value="dragon">龙</option>
          <option value="mammoth">猛犸</option>
        </select>
      </div>
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

## `.form-selection`

```html:example
<form class="form w-80">
  <div class="form-selection">
    <div class="form-heading">
      <div class="form-title">账号信息</div>
    </div>
    <div class="form-group">
      <label class="form-label required" for="exampleInputAccount3">账号</label>
      <input type="text" class="form-control" id="exampleInputAccount3" placeholder="电子邮件/手机号/用户名">
    </div>
    <div class="form-group">
      <label class="form-label required" for="exampleInputPassword3">密码</label>
      <input type="password" class="form-control" id="exampleInputPassword3" placeholder="">
    </div>
  </div>
  <div class="form-selection">
    <div class="form-heading">
      <div class="form-title">地址信息</div>
    </div>
    <div class="form-group">
      <label class="form-label required" for="addressExample1">地址</label>
      <input type="text" class="form-control" id="addressExample1" placeholder="">
    </div>
  </div>
  <div class="form-selection">
    <div class="form-heading">
      <div class="form-title">捐赠信息</div>
    </div>
    <div class="form-group">
      <label class="form-label" for="exampleInputMoney1">捐赠金额</label>
      <div class="input-group">
        <span class="input-group-addon">￥</span>
        <input type="number" class="form-control" id="exampleInputMoney1" placeholder="人民币">
        <span class="input-group-addon">.00</span>
      </div>
      <div class="form-tip">最低捐赠金额为 ￥10.00</div>
    </div>
  </div>
  <button type="submit" class="btn primary">提交</button>
</form>
```

```html:example
<form class="form form-grid">
  <div class="form-selection">
    <div class="form-heading">
      <div class="form-title">账号信息</div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label required" for="exampleInputAccount3">账号</label>
        <input type="text" class="form-control" id="exampleInputAccount3" placeholder="电子邮件/手机号/用户名">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label required" for="exampleInputPassword3">密码</label>
        <input type="password" class="form-control" id="exampleInputPassword3" placeholder="">
      </div>
    </div>
  </div>
  <div class="form-selection">
    <div class="form-heading">
      <div class="form-title">地址信息</div>
    </div>
    <div class="form-group">
      <label class="form-label required" for="addressExample1">地址</label>
      <input type="text" class="form-control" id="addressExample1" placeholder="">
    </div>
  </div>
  <div class="form-selection">
    <div class="form-heading">
      <div class="form-title">捐赠信息</div>
    </div>
    <div class="form-group">
      <label class="form-label" for="exampleInputMoney1">捐赠金额</label>
      <div class="input-group">
        <span class="input-group-addon">￥</span>
        <input type="number" class="form-control" id="exampleInputMoney1" placeholder="人民币">
        <span class="input-group-addon">.00</span>
      </div>
      <div class="form-tip">最低捐赠金额为 ￥10.00</div>
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
