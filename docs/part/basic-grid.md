section: basic
id: grid
description: 响应式布局的实现
icon: icon-th
filter: zhagexitong zgxt
---

# 栅格系统

采用 Bootstrap3 的栅格设计。具体使用参考 [Bootstrap grid system](http://getbootstrap.com/css/#grid) ([中文](http://v3.bootcss.com/css/#grid))。

## 栅格参数

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th></th>
      <th>超小屏幕 <small>手机 (&lt;768px)</small></th>
      <th>小屏幕 <small>平板 (≥768px)</small></th>
      <th>中等屏幕 <small>桌面显示器 (≥992px)</small></th>
      <th>大屏幕 <small>大桌面显示器 (≥1200px)</small></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th class="text-nowrap">栅格系统行为</th>
      <td>总是水平排列</td>
      <td colspan="3">开始是堆叠在一起的，当大于这些阈值时将变为水平排列</td>
    </tr>
    <tr>
      <th class="text-nowrap"><code>.container</code> 最大宽度</th>
      <td>None （自动）</td>
      <td>750px</td>
      <td>970px</td>
      <td>1170px</td>
    </tr>
    <tr>
      <th class="text-nowrap">类前缀</th>
      <td>`.col-xs-`</td>
      <td>`.col-sm-`</td>
      <td>`.col-md-`</td>
      <td>`.col-lg-`</td>
    </tr>
    <tr>
      <th class="text-nowrap">列（column）数</th>
      <td colspan="4">12</td>
    </tr>
    <tr>
      <th class="text-nowrap">最大列（column）宽</th>
      <td class="text-muted">自动</td>
      <td>~62px</td>
      <td>~81px</td>
      <td>~97px</td>
    </tr>
    <tr>
      <th class="text-nowrap">槽（gutter）宽</th>
      <td colspan="4">30px （每列左右均有 15px）</td>
    </tr>
    <tr>
      <th class="text-nowrap">可嵌套</th>
      <td colspan="4">是</td>
    </tr>
    <tr>
      <th class="text-nowrap">偏移（Offsets）</th>
      <td colspan="4">是</td>
    </tr>
    <tr>
      <th class="text-nowrap">列排序</th>
      <td colspan="4">是</td>
    </tr>
  </tbody>
</table>

## 非响应式栅格

ZUI 中还包含了一些辅助类用与快捷应用栅格宽度，但不受响应式规则的影响。这些辅助类为 `.col-1`、`.col-2` ~ `.col-12`。