# 字体

## 字号

当前 ZUI 默认字号配置。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th class="w-12">名称</th>
        <th class="w-12">大小</th>
        <th class="w-12">像素</th>
        <th class="w-30">行高</th>
        <th>效果展示</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in globalFontSize">
        <td>{{item.name}}</td>
        <td>{{item.size}}</td>
        <td>{{item.pixel}}</td>
        <td>line-height: {{item.lineHeight}}</td>
        <td>
          <div :class="item.className">ZUI</div>
        </td>
      </tr>
    </tbody>
   </table>
</Example>

### 单位概念

root：根元素的大小。

px（pixel，像素）：相对长度单位。像素 px 数计相对于显示器屏幕分辨率而言的。

rem：CSS3 新增的一个相对单位。使用 rem 为元素设定字体大小时，相对的只是 HTML 根元素。

## 字体

当前 ZUI 默认字体配置。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>名称</th>
        <th>类型</th>
        <th class="w-96">定义</th>
        <th>效果展示</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in fontFamilyJson">
        <td>{{item.name}}</td>
        <td>{{item.type}}</td>
        <td>{{item.desc}}</td>
        <td><span :class="item.name">{{`${item.name} 字体`}}</span></td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const globalFontSize = [
    {name: 'root', size: '16px',  pixel: '16px', className: 'root'},
    {name: 'xs', size: '0.75rem', pixel: '12px', lineHeight: '1rem', className: 'text-xs'},
    {name: 'sm', size: '0.75rem', pixel: '12px', lineHeight: '1rem', className: 'text-sm'},
    {name: 'base', size: '0.8125rem', pixel: '13px', lineHeight: '1.25rem', className: 'text-base'},
    {name: 'lg', size: '1rem', pixel: '16px', lineHeight: '1.5rem', className: 'text-lg'},
    {name: 'xl', size: '1.125rem', pixel: '18px', lineHeight: '1.75rem', className: 'text-xl'},
    {name: '2xl', size: '1.5rem', pixel: '24px', lineHeight: '2rem', className: 'text-2xl'},
    {name: '3xl', size: '1.875rem', pixel: '30px', lineHeight: '2.25rem', className: '-text-3xl'},
    {name: '4xl', size: '2.25rem', pixel: '36px', lineHeight: '2.5rem', className: '-text-4xl'},
    {name: '5xl', size: '3rem', pixel: '48px', lineHeight: '1', className: '-text-5xl'},
    {name: '6xl', size: '3.75rem', pixel: '60px', lineHeight: '1', className: '-text-6xl'},
    {name: '7xl', size: '4.5rem', pixel: '72px', lineHeight: '1', className: '-text-7xl'},
    {name: '8xl', size: '6rem', pixel: '96px', lineHeight: '1', className: '-text-8xl'},
    {name: '9xl', size: '8rem', pixel: '128px', lineHeight: '1', className: '-text-9xl'}
  ];

  const fontFamilyJson = [
    {name: 'sans', type: '无衬线字体', desc: 'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'},
    {name: 'serif',type: '衬线字体', desc: 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'},
    {name: 'mono', type: '等款字体', desc: 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'},
  ];
</script>
