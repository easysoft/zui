# 表单助手

## 示例

```html:example
<form id="formHelperExample" class="form form-grid canvas" style="max-width: 800px">
  <div class="form-group w-1/2">
    <label class="form-label" for="program">所属项目集 <i class="muted example-icon example-icon-question-sign" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%2012a10%2010%200%201%200%2020%200%2010%2010%200%201%200-20%200M9%208c0-4%207-4%207%200%200%203-4%203-4%206m0%203v1%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></label>
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
  <div class="form-grid-row pb-0">
    <div class="form-grid-col w-1/2">
      <div class="form-label">
        关联产品
        <label class="checkbox disabled">
          <input type="checkbox" name="newProduct" disabled checked> 新产品
        </label>
      </div>
    </div>
    <div class="form-grid-col w-1/2">
      <div class="form-label">
        关联计划
      </div>
    </div>
  </div>
  <div class="form-grid-row pt-0">
    <div class="form-grid-col w-1/2">
      <select class="form-control" id="product">
        <option value=""></option>
        <option value="cat">小猫</option>
        <option value="fish">金鱼</option>
        <option value="dragon">龙</option>
        <option value="mammoth">猛犸</option>
      </select>
    </div>
    <div class="form-grid-col w-1/2">
      <select class="form-control" id="plan">
        <option value=""></option>
        <option value="cat">小猫</option>
        <option value="fish">金鱼</option>
        <option value="dragon">龙</option>
        <option value="mammoth">猛犸</option>
      </select>
    </div>
    <div class="absolute" style="right: -32px">
      <button type="button" class="btn ghost square"><i class="i-plus"></i></button>
    </div>
  </div>
  <div class="form-group w-full">
    <label class="form-label required" for="days">
      项目描述
    </label>
    <textarea rows="5" class="form-control" placeholder="输入一些文本">
Hello, world!
</textarea>
  </div>
  <div class="form-actions">
    <button type="submit" class="btn primary">提交</button>
    <button type="submit" class="btn">取消</button>
  </div>
</form>
```
