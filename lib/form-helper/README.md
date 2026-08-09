# 表单助手

## 示例

```html:example
<form id="formHelperExample" class="form form-grid canvas" style="max-width: 800px">
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
      <button type="button" class="btn ghost square"><i class="icon icon-plus"></i></button>
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
