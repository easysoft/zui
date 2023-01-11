# 全局配置

##  配色表

当前 ZUI 的默认调色板。

<Example background="light-circle">
  <div class="flex flex-col mb-6" v-for="item in colorTable">
    <div class="w-24">
      <p class="text-sm font-bold">{{item.en}}</p>
      <p class="text-sm">{{item.cn}}</p>
    </div>
    <div class="flex flex-1" v-for="colorItem in item.list">
      <div>
        <div class="w-10 h-8 rounded" :style="`background-color: ${colorItem.color};`"></div>
        <p class="text-sm">{{colorItem.number}}</p>
        <p class="text-sm">{{colorItem.color}}</p>
      </div>
    </div>
  </div>
</Example>

## 语义化配色表

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>名称</th>
        <th>配色</th>
        <th>语义</th>
        <th>效果展示</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in themeColor">
        <td>{{item.name}}</td>
        <td>{{item.color}}</td>
        <td>{{item.desc}}</td>
        <td>
          <div class="w-10 h-3" :style="`background-color: ${item.display};`"></div>
        </td>
      </tr>
    </tbody>
   </table>
</Example>

## 特殊颜色

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>名称</th>
        <th>当前</th>
        <th>意义</th>
        <th>效果展示</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in globalSpecialColor">
        <td>{{item.name}}</td>
        <td>{{item.current}}</td>
        <td>{{item.desc}}</td>
        <td>
          <div class="h-3" :style="`background-color: ${item.display};`" v-if="index < 8"></div>
          <span :style="`color: ${item.display};`" v-else>颜色展示</span>
        </td>
      </tr>
    </tbody>
   </table>
</Example>

## 字体

当前默认字体配置。

<Example>
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
          <div :class="item.display" v-if="index < 8">ZUI3 组合式前端 UI 框架</div>
          <div :class="item.display" v-else>ZUI</div>
        </td>
      </tr>
    </tbody>
   </table>
</Example>

### 单位概念

root：根元素的大小。

px（pixel，像素）：相对长度单位。像素 px 数计相对于显示器屏幕分辨率而言的。

rem：CSS3 新增的一个相对单位。使用 rem 为元素设定字体大小时，相对的只是 HTML 根元素。

## 间距

默认情况下，一个间距单位等于 0.25rem，在通用浏览器中默认为 4px。

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>名称</th>
        <th>大小</th>
        <th>像素</th>
        <th>效果展示</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in spaceJson">
        <td>{{item.name}}</td>
        <td>{{item.size}}</td>
        <td>{{item.pixel}}</td>
        <td><div class="h-2 bg-secondary" :style="item.display"></div></td>
      </tr>
    </tbody>
   </table>
</Example>

## 圆角配置

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>名称</th>
        <th>大小</th>
        <th>效果展示</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in globalRound">
        <td>{{item.name}}</td>
        <td>{{item.size}}</td>
        <td><div class="w-8 h-8 bg-secondary" :style="item.display"></div></td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const spaceJson = [
    {name: '0', size: '0px', pixel:'0px', display: 'width: 0px;'},
    {name: 'px', size: '1px', pixel:'1px', display: 'width: 1px;'},
    {name: '0.5', size: '0.125rem', pixel:'2px', display: 'width: 2px;'},
    {name: '1', size: '0.25rem', pixel:'4px', display: 'width: 4px;'},
    {name: '1.5', size: '0.375rem', pixel:'6px', display: 'width: 6px;'},
    {name: '2', size: '0.5rem', pixel:'8px', display: 'width: 8px;'},
    {name: '2.5', size: '0.625rem', pixel:'10px', display: 'width: 10px;'},
    {name: '3', size: '0.75rem', pixel:'12px', display: 'width: 12px;'},
    {name: '3.5', size: '0.875rem', pixel:'14px', display: 'width: 14px;'},
    {name: '4', size: '1rem', pixel:'16px', display: 'width: 16px;'},
    {name: '5', size: '1.25rem', pixel:'20px', display: 'width: 20px;'},
    {name: '6', size: '1.5rem', pixel:'24px', display: 'width: 24px;'},
    {name: '7', size: '1.75rem', pixel:'28px', display: 'width: 28px;'},
    {name: '8', size: '2rem', pixel:'32px', display: 'width: 32px;'},
  ]
  const globalFontSize = [
    {name: 'root', size: '16px',  pixel: '16px', display: 'root'},
    {name: 'xs', size: '0.75rem', pixel: '12px', lineHeight: '1rem', display: 'text-xs'},
    {name: 'sm', size: '0.75rem', pixel: '12px', lineHeight: '1rem', display: 'text-sm'},
    {name: 'base', size: '0.8125rem', pixel: '13px', lineHeight: '1.25rem', display: 'text-base'},
    {name: 'lg', size: '1rem', pixel: '16px', lineHeight: '1.5rem', display: 'text-lg'},
    {name: 'xl', size: '1.125rem', pixel: '18px', lineHeight: '1.75rem', display: 'text-xl'},
    {name: '2xl', size: '1.5rem', pixel: '24px', lineHeight: '2rem', display: 'text-2xl'},
    {name: '3xl', size: '1.875rem', pixel: '30px', lineHeight: '2.25rem', display: '-text-3xl'},
    {name: '4xl', size: '2.25rem', pixel: '36px', lineHeight: '2.5rem', display: '-text-4xl'},
    {name: '5xl', size: '3rem', pixel: '48px', lineHeight: '1', display: '-text-5xl'},
    {name: '6xl', size: '3.75rem', pixel: '60px', lineHeight: '1', display: '-text-6xl'},
    {name: '7xl', size: '4.5rem', pixel: '72px', lineHeight: '1', display: '-text-7xl'},
    {name: '8xl', size: '6rem', pixel: '96px', lineHeight: '1', display: '-text-8xl'},
    {name: '9xl', size: '8rem', pixel: '128px', lineHeight: '1', display: '-text-9xl'}
  ]
  const globalRound = [
    {name: 'none', size: '0px', display: 'border-radius:0px;'},
    {name: 'sm', size: '0.125rem', display: 'border-radius:0.125rem;'},
    {name: 'DEFAULT', size: '0.25rem', display: 'border-radius:0.25rem;'},
    {name: 'md', size: '0.375rem', display: 'border-radius:0.375rem;'},
    {name: 'lg', size: '0.5rem', display: 'border-radius:0.5rem;'},
    {name: 'xl', size: '0.75rem', display: 'border-radius:0.75rem;'},
    {name: 'full', size: '9999px', display: 'border-radius:9999px;'}
  ]
  const globalSpecialColor = [
    {name: '继承', current: 'inherit', desc: 'inherit', display: 'inherit'},
    {name: '当前', current: 'current', desc: 'currentColor', display: 'inherit'},
    {name: '透明', current: 'transparent', desc: 'transparent', display: 'transparent'},
    {name: '纯黑', current: 'black', desc: '#000', display: '#000'},
    {name: '纯白', current: 'white', desc: '#fff', display: '#fff'},
    {name: '画布（页面背景）', current: 'canvas', desc: 'white', display: 'white'},
    {name: '画布反色', current: 'inverse', desc: 'black', display: 'black'},
    {name: '控件背景', current: 'surface', desc: 'gray[100] （即：#f4f5f7）', display: '#f4f5f7'},
    {name: '文本', current: 'fore', desc: 'gray[800] （即：#3c4353）', display: '#3c4353'},
    {name: '焦点', current: 'focus', desc: 'young[300] （即：#6ca7ff）', display: '#6ca7ff'},
    {name: '链接', current: 'link', desc: 'young[500] （即：#2b80ff）', display: '#2b80ff'},
    {name: '链接（hover）', current: 'linkHover', desc: 'young[600] （即：#0066fa）', display: '#0066fa'},
  ]
  const themeColor = [
    {name: 'primary', color: 'young', desc: '主要：主题的、可链接、正常', display: '#2b80ff'},
    {name: 'secondary', color: 'blue', desc: '次要：次级、常态的', display: '#37b2fe'},
    {name: 'success', color: 'green', desc: '成功：完成、积极', display: '#17ce97'},
    {name: 'warning', color: 'yellow', desc: '关注：提示、重点', display: '#ffa34d'},
    {name: 'danger', color: 'red', desc: '警告：提示、异常、警醒', display: '#ff5858'},
    {name: 'important', color: 'magenta', desc: '重要：优先', display: '#ff4f9e'},
    {name: 'special', color: 'purple', desc: '特殊：触动、激情', display: '#9d5eff'},
  ]
  const colorTable = [
    {
      en: 'Young', 
      cn: '青春蓝', 
      list: [
        {number: '50', color: '#f9ffff'},
        {number: '100', color: '#eff5ff'},
        {number: '200', color: '#cadfff'},
        {number: '300', color: '#6ca7ff'},
        {number: '400', color: '#438eff'},
        {number: '500', color: '#2b80ff'},
        {number: '600', color: '#0066fa'},
        {number: '700', color: '#0c60e1'},
        {number: '800', color: '#0650c2'},
        {number: '900', color: '#053b8f'},

      ]
    },
    {
      en: 'Wave blue', 
      cn: '波涛蓝', 
      list: [
        {number: '50', color: '#eff6ff'},
        {number: '100', color: '#e7f6ff'},
        {number: '200', color: '#cdecff'},
        {number: '300', color: '#7acdff'},
        {number: '400', color: '#57bfff'},
        {number: '500', color: '#37b2fe'},
        {number: '600', color: '#18a6fd'},
        {number: '700', color: '#1099ed'},
        {number: '800', color: '#007cc8'},
        {number: '900', color: '#06609d'},

      ]
    },
    {
      en: 'Fresh green', 
      cn: '葱绿', 
      list: [
        {number: '50', color: '#a7f5de'},
        {number: '100', color: '#e3f9f3'},
        {number: '200', color: '#c5f3e5'},
        {number: '300', color: '#63e1bc'},
        {number: '400', color: '#44cfa5'},
        {number: '500', color: '#17ce97'},
        {number: '600', color: '#11a578'},
        {number: '700', color: '#098f67'},
        {number: '800', color: '#11815f'},
        {number: '900', color: '#10634a'},

      ]
    },
    {
      en: 'Yellow', 
      cn: '蛋壳', 
      list: [
        {number: '50', color: '#fffcfa'},
        {number: '100', color: '#fff4ea'},
        {number: '200', color: '#ffe8d2'},
        {number: '300', color: '#ffbf83'},
        {number: '400', color: '#ffb46d'},
        {number: '500', color: '#ffa34d'},
        {number: '600', color: '#ff8e25'},
        {number: '700', color: '#ef7b0f'},
        {number: '800', color: '#e97103'},
        {number: '900', color: '#bd7634'},

      ]
    },
    {
      en: 'Carved red', 
      cn: '剔红', 
      list: [
        {number: '50', color: '#fffafa'},
        {number: '100', color: '#ffebeb'},
        {number: '200', color: '#ffd5d5'},
        {number: '300', color: '#ff9696'},
        {number: '400', color: '#ff7474'},
        {number: '500', color: '#ff5858'},
        {number: '600', color: '#fb2b2b'},
        {number: '700', color: '#d91b1b'},
        {number: '800', color: '#ba1313'},
        {number: '900', color: '#ba1313'},

      ]
    },
    {
      en: 'Magenta', 
      cn: '洋红色/粉', 
      list: [
        {number: '50', color: '#fffafc'},
        {number: '100', color: '#feebf4'},
        {number: '200', color: '#fcd6e8'},
        {number: '300', color: '#fc94c2'},
        {number: '400', color: '#ff79b5'},
        {number: '500', color: '#ff4f9e'},
        {number: '600', color: '#e33a86'},
        {number: '700', color: '#d11c6d'},
        {number: '800', color: '#bc145f'},
        {number: '900', color: '#a80c52'},

      ]
    },
    {
      en: 'Purple', 
      cn: '爱琴海/紫色', 
      list: [
        {number: '50', color: '#fcfaff'},
        {number: '100', color: '#f1eafc'},
        {number: '200', color: '#e2d3f9'},
        {number: '300', color: '#c6a0ff'},
        {number: '400', color: '#b280ff'},
        {number: '500', color: '#9d5eff'},
        {number: '600', color: '#8b51e6'},
        {number: '700', color: '#7f46d9'},
        {number: '800', color: '#763ad4'},
        {number: '900', color: '#6231b0'},

      ]
    },
    {
      en: 'gray', 
      cn: '灰色', 
      list: [
        {number: '50', color: '#fcfdfe'},
        {number: '100', color: '#f4f5f7'},
        {number: '200', color: '#edeef2'},
        {number: '300', color: '#e3e4e9'},
        {number: '400', color: '#e6eaf1'},
        {number: '500', color: '#9ea3b0'},
        {number: '600', color: '#838a9d'},
        {number: '700', color: '#5e626d'},
        {number: '800', color: '#3c4353'},
        {number: '900', color: '#1b1f28'},

      ]
    },
    {
      en: 'zinc', 
      cn: '锌灰色', 
      list: [
        {number: '50', color: '#fafafa'},
        {number: '100', color: '#f8f8f8'},
        {number: '200', color: '#eeeeee'},
        {number: '300', color: '#e2e5e8'},
        {number: '400', color: '#c4c4c4'},
        {number: '500', color: '#71717a'},
        {number: '600', color: '#52525b'},
        {number: '700', color: '#3f3f46'},
        {number: '800', color: '#27272a'},
        {number: '900', color: '#18181b'},
      ]
    },
  ]
</script>
