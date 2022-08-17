# 表格

## 基本用法

使用组件类`.table`来获得外观 通常搭配`<table>`元素使用.

<Example class="flex grep-4">
  <table class="table">
    <thead>
      <tr>
        <th>项目名称</th>
        <th>负责人</th>
        <th>计划开始</th>
        <th>计划完成</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>今天</td>
        <td>今天</td>
      </tr>
      <tr>
        <td>禅道旗舰版</td>
        <td>禅道研发</td>
        <td>明天</td>
        <td>明天</td>
      </tr>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>后天</td>
        <td>后天</td>
      </tr>
    </tbody>
  </table>
</Example>

```html
<table class="table">
 <thead>
   <tr>
     <th>项目名称</th>
     <th>负责人</th>
     <th>计划开始</th>
     <th>计划完成</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>禅道开源版</td>
     <td>禅道研发</td>
     <td>今天</td>
     <td>今天</td>
   </tr>
   <tr>
     <td>禅道旗舰版</td>
     <td>禅道研发</td>
     <td>明天</td>
     <td>明天</td>
   </tr>
   <tr>
     <td>禅道开源版</td>
     <td>禅道研发</td>
     <td>后天</td>
     <td>后天</td>
   </tr>
 </tbody>
</table>
```

## 斑马纹表格

使用组件类`.table-striped`获得斑马纹表格外观 

<Example class="flex grep-4">
 <table class="table table-striped">
  <thead>
    <tr>
      <th>项目名称</th>
      <th>负责人</th>
      <th>计划开始</th>
      <th>计划完成</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>今天</td>
      <td>今天</td>
    </tr>
    <tr>
      <td>禅道旗舰版</td>
      <td>禅道研发</td>
      <td>明天</td>
      <td>明天</td>
    </tr>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>后天</td>
      <td>后天</td>
    </tr>
  </tbody>
 </table>
</Example>

```html
<table class="table table-striped">
  <thead>
    <tr>
      <th>项目名称</th>
      <th>负责人</th>
      <th>计划开始</th>
      <th>计划完成</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>今天</td>
      <td>今天</td>
    </tr>
    <tr>
      <td>禅道旗舰版</td>
      <td>禅道研发</td>
      <td>明天</td>
      <td>明天</td>
    </tr>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>后天</td>
      <td>后天</td>
    </tr>
  </tbody>
</table>
```

## 响应鼠标悬停行变色表格

 使用组件类`.table-row-hover`获得响应鼠标悬停行变色表格外观

<Example>
  <table class="table table-row-hover">
    <thead>
      <tr>
        <th>项目名称</th>
        <th>负责人</th>
        <th>计划开始</th>
        <th>计划完成</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>今天</td>
        <td>今天</td>
      </tr>
      <tr>
        <td>禅道旗舰版</td>
        <td>禅道研发</td>
        <td>明天</td>
        <td>明天</td>
      </tr>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>后天</td>
        <td>后天</td>
      </tr>
    </tbody>
  </table>
</Example>

```html
<table class="table -hover">
  <thead>
    <tr>
      <th>项目名称</th>
      <th>负责人</th>
      <th>计划开始</th>
      <th>计划完成</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>今天</td>
      <td>今天</td>
    </tr>
    <tr>
      <td>禅道旗舰版</td>
      <td>禅道研发</td>
      <td>明天</td>
      <td>明天</td>
    </tr>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>后天</td>
      <td>后天</td>
    </tr>
  </tbody>
</table>
 ```

## 带所有边框的表格

使用组件类`.table-bordered`获得带所有边框的表格外观

<Example>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>项目名称</th>
        <th>负责人</th>
        <th>计划开始</th>
        <th>计划完成</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>今天</td>
        <td>今天</td>
      </tr>
      <tr>
        <td>禅道旗舰版</td>
        <td>禅道研发</td>
        <td>明天</td>
        <td>明天</td>
      </tr>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>后天</td>
        <td>后天</td>
      </tr>
    </tbody>
  </table>
</Example>

```html
<table class="table table-bordered">
  <thead>
    <tr>
      <th>项目名称</th>
      <th>负责人</th>
      <th>计划开始</th>
      <th>计划完成</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>今天</td>
      <td>今天</td>
    </tr>
    <tr>
      <td>禅道旗舰版</td>
      <td>禅道研发</td>
      <td>明天</td>
      <td>明天</td>
    </tr>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>后天</td>
      <td>后天</td>
    </tr>
  </tbody>
</table>
 ```

## 禁掉所有边框的表格 

 使用组件类`.table-borderless`获得不带所有边框的表格外观

<Example>
  <table class="table table-borderless">
    <thead>
      <tr>
        <th>项目名称</th>
        <th>负责人</th>
        <th>计划开始</th>
        <th>计划完成</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>今天</td>
        <td>今天</td>
      </tr>
      <tr>
        <td>禅道旗舰版</td>
        <td>禅道研发</td>
        <td>明天</td>
        <td>明天</td>
      </tr>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>后天</td>
        <td>后天</td>
      </tr>
    </tbody>
  </table>
</Example>

 ```html
<table class="table table-borderless">
 <thead>
   <tr>
     <th>项目名称</th>
     <th>负责人</th>
     <th>计划开始</th>
     <th>计划完成</th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>禅道开源版</td>
     <td>禅道研发</td>
     <td>今天</td>
     <td>今天</td>
   </tr>
   <tr>
     <td>禅道旗舰版</td>
     <td>禅道研发</td>
     <td>明天</td>
     <td>明天</td>
   </tr>
   <tr>
     <td>禅道开源版</td>
     <td>禅道研发</td>
     <td>后天</td>
     <td>后天</td>
   </tr>
 </tbody>
</table>
```

## 紧凑的表格

 使用组件类`.table-condensed`更为紧凑的表格外观, 单元格内边距变小

  <Example>
   <table class="table table-condensed">
     <thead>
       <tr>
         <th>项目名称</th>
         <th>负责人</th>
         <th>计划开始</th>
         <th>计划完成</th>
       </tr>
     </thead>
     <tbody>
       <tr>
         <td>禅道开源版</td>
         <td>禅道研发</td>
         <td>今天</td>
         <td>今天</td>
       </tr>
       <tr>
         <td>禅道旗舰版</td>
         <td>禅道研发</td>
         <td>明天</td>
         <td>明天</td>
       </tr>
       <tr>
         <td>禅道开源版</td>
         <td>禅道研发</td>
         <td>后天</td>
         <td>后天</td>
       </tr>
     </tbody>
   </table>
 </Example>

 ```html
 <table class="table table-condensed">
  <thead>
    <tr>
      <th>项目名称</th>
      <th>负责人</th>
      <th>计划开始</th>
      <th>计划完成</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>今天</td>
      <td>今天</td>
    </tr>
    <tr>
      <td>禅道旗舰版</td>
      <td>禅道研发</td>
      <td>明天</td>
      <td>明天</td>
    </tr>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>后天</td>
      <td>后天</td>
    </tr>
  </tbody>
</table>
 ```

## 固定布局的表格

 使用组件类`.table-fixed`固定布局的表格外观,表格和列的宽度通过表格的宽度来设置，某一列的宽度仅由该列首行的单元格决定。在当前列中，该单元格所在行之后的行并不会影响整个列宽.且单元格不会换行。

<Example>
 <table class="table table-fixed">
   <thead>
     <tr>
       <th>项目名称</th>
       <th>负责人</th>
       <th>计划开始</th>
       <th>计划完成</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td>禅道开源版</td>
       <td>禅道研发</td>
       <td>今天</td>
       <td>今天</td>
     </tr>
     <tr>
       <td>禅道旗舰版</td>
       <td>禅道研发</td>
       <td>明天</td>
       <td>明天</td>
     </tr>
     <tr>
       <td>禅道开源版</td>
       <td>禅道研发</td>
       <td>下下下下下下下周的周天</td>
       <td>下下下下下下下下周的周天</td>
     </tr>
   </tbody>
  </table>
</Example>

 ```html
<table class="table table-fixed">
  <thead>
    <tr>
      <th>项目名称</th>
      <th>负责人</th>
      <th>计划开始</th>
      <th>计划完成</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>今天</td>
      <td>今天</td>
    </tr>
    <tr>
      <td>禅道旗舰版</td>
      <td>禅道研发</td>
      <td>明天</td>
      <td>明天</td>
    </tr>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>下下下下下下下周的周天</td>
      <td>下下下下下下下下周的周天</td>
    </tr>
  </tbody>
</table>
 ```

## 自动宽度表格
<Example>
  <table class="table w-auto max-w-full">
    <thead>
      <tr>
        <th>项目名称</th>
        <th>负责人</th>
        <th>计划开始</th>
        <th>计划完成</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>今天</td>
        <td>今天</td>
      </tr>
      <tr>
        <td>禅道旗舰版</td>
        <td>禅道研发</td>
        <td>明天</td>
        <td>明天</td>
      </tr>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>下下下下下下下周的周天</td>
        <td>下下下下下下下下周的周天</td>
      </tr>
    </tbody>
  </table>
</Example>

```html
<table class="table w-auto max-w-full">
  <thead>
    <tr>
      <th>项目名称</th>
      <th>负责人</th>
      <th>计划开始</th>
      <th>计划完成</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>今天</td>
      <td>今天</td>
    </tr>
    <tr>
      <td>禅道旗舰版</td>
      <td>禅道研发</td>
      <td>明天</td>
      <td>明天</td>
    </tr>
    <tr>
      <td>禅道开源版</td>
      <td>禅道研发</td>
      <td>下下下下下下下周的周天</td>
      <td>下下下下下下下下周的周天</td>
    </tr>
  </tbody>
</table>
```

## 特殊颜色行表格 

使用色彩类`.primary`等获得带有固定色彩行的表格外观

 <Example>
  <table class="table">
    <thead>
      <tr>
        <th>项目名称</th>
        <th>负责人</th>
        <th>计划开始</th>
        <th>计划完成</th>
      </tr>
    </thead>
    <tbody>
      <tr class="primary">
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>今天</td>
        <td>今天</td>
      </tr>
      <tr class="warning">
        <td>禅道旗舰版</td>
        <td>禅道研发</td>
        <td>明天</td>
        <td>明天</td>
      </tr>
      <tr class="success">
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>下下下下下下下周的周天</td>
        <td>下下下下下下下下周的周天</td>
      </tr>
    </tbody>
   </table>
 </Example>

```html
<table class="table">
 <thead>
   <tr>
     <th>项目名称</th>
     <th>负责人</th>
     <th>计划开始</th>
     <th>计划完成</th>
   </tr>
 </thead>
 <tbody>
   <tr class="primary">
     <td>禅道开源版</td>
     <td>禅道研发</td>
     <td>今天</td>
     <td>今天</td>
   </tr>
   <tr>
     <td>禅道旗舰版</td>
     <td>禅道研发</td>
     <td>明天</td>
     <td>明天</td>
   </tr>
   <tr class="success">
     <td>禅道开源版</td>
     <td>禅道研发</td>
     <td>下下下下下下下周的周天</td>
     <td>下下下下下下下下周的周天</td>
   </tr>
 </tbody>
</table>
```

## CSS 类

按钮提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `table`      | 实体类 | 元素作为表格组件 |

## CSS 变量

| 变量名称 | 变量含义 |
| -------- | -------- |
| --table-striped-color | 表格斑马纹行背景色     |
| --table-hover-color   | 表格行响应鼠标悬停变化背景颜色 |
| --table-border-color  | 表格边框颜色 |
