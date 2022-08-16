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

## 响应鼠标悬停行变色

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
## 带所有边框的表格

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
  ## 紧凑的表格外观

 使用组件类`.table-condensed`更为紧凑的表格外观

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
## 固定布局的表格外观

 使用组件类`.table-fixed`固定布局的表格外观

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
       <td>后天</td>
       <td>后天</td>
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
      <td>后天</td>
      <td>后天</td>
    </tr>
  </tbody>
</table>
 ```
 ## primary warning success

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
      <tr>
        <td>禅道旗舰版</td>
        <td>禅道研发</td>
        <td>明天</td>
        <td>明天</td>
      </tr>
      <tr class="success">
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
     <td>后天</td>
     <td>后天</td>
   </tr>
 </tbody>
</table>
```
