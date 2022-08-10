# 表格:

## table

使用组件类`.table`来获得外观 通常搭配`<table>`元素使用.

```html:example: flex gap-3
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

## -striped

使用组件类`.-striped`获得斑马纹表格外观 

```html:example: flex gap-3
<table class="table -striped">
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

## -row-hover

 使用组件类`.-row-hover`获得响应鼠标悬停行变色表格外观

 ```html:example: flex gap-3
 <table class="table -row-hover">
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
## -bordered

使用组件类`.-bordered`获得带所有边框的表格外观

```html:example: flex gap-3
 <table class="table -bordered">
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
  ## -borderless

 使用组件类`.-borderless`获得不带所有边框的表格外观

 ```html:example: flex gap-3
 <table class="table -borderless">
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
  ## table-condensed

 使用组件类`.table-condensed`更为紧凑的表格外观

 ```html:example: flex gap-3
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
## table-fixed

 使用组件类`.table-fixed`固定布局的表格外观

```html:example
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
 ## -primary -warning -success

使用色彩类`.-primary`等获得带有固定色彩行的表格外观

 ```html:example: flex gap-3
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
        <tr class="-primary">
            <td>禅道开源版</td>
            <td>禅道研发</td>
            <td>今天</td>
            <td>今天</td>
        </tr>
        <tr class="-warning">
            <td>禅道旗舰版</td>
            <td>禅道研发</td>
            <td>明天</td>
            <td>明天</td>
        </tr>
        <tr class="-success">
            <td>禅道开源版</td>
            <td>禅道研发</td>
            <td>后天</td>
            <td>后天</td>
        </tr>
    </tbody>
</table>
```
