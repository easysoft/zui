# 颜色

当前 ZUI 默认调色板。

<Example background="light-circle">
  <div class="flex flex-col mb-6" v-for="item in colorTable">
    <div class="w-24">
      <p class="text-sm font-bold">{{item.en}}</p>
      <!-- <p class="text-sm">{{item.cn}}</p> -->
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

<Example class="p-0">
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
      <tr v-for="item in themeColor">
        <td>{{item.name}}</td>
        <td>{{item.color}}</td>
        <td>{{item.desc}}</td>
        <td>
          <div class="w-10 h-3" :class="item.className"></div>
        </td>
      </tr>
    </tbody>
   </table>
</Example>

## 特殊颜色

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>名称</th>
        <th>颜色</th>
        <th>意义</th>
        <th>效果展示</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in globalSpecialColor">
        <td>{{item.name}}</td>
        <td>{{item.color}}</td>
        <td>{{item.desc}}</td>
        <td>
          <div class="h-3" :class="item.className" v-if="index < 3"></div>
          <span :class="item.className" v-else>颜色展示</span>
        </td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const colorTable = [
    {
      en: 'primary',
      // cn: '青春蓝',
      list: [
        {number: '50',  color: "#eff6ff"},
        {number: '100', color: "#dbeafe"},
        {number: '200', color: "#bfdbfe"},
        {number: '300', color: "#93c5fd"},
        {number: '400', color: "#60a5fa"},
        {number: '500', color: "#3b82f6"},
        {number: '600', color: "#2563eb"},
        {number: '700', color: "#1d4ed8"},
        {number: '800', color: "#1e40af"},
        {number: '900', color: "#1e3a8a"},
      ]
    },
    {
      en: 'secondary',
      // cn: '波涛蓝',
      list: [
        {number: '50',  color: "#f0f9ff"},
        {number: '100', color: "#e0f2fe"},
        {number: '200', color: "#bae6fd"},
        {number: '300', color: "#7dd3fc"},
        {number: '400', color: "#38bdf8"},
        {number: '500', color: "#0ea5e9"},
        {number: '600', color: "#0284c7"},
        {number: '700', color: "#0369a1"},
        {number: '800', color: "#075985"},
        {number: '900', color: "#0c4a6e"},

      ]
    },
    {
      en: 'success',
      // cn: '葱绿',
      list: [
        {number: '50',  color: "#f0fdf4"},
        {number: '100', color: "#dcfce7"},
        {number: '200', color: "#bbf7d0"},
        {number: '300', color: "#86efac"},
        {number: '400', color: "#4ade80"},
        {number: '500', color: "#22c55e"},
        {number: '600', color: "#16a34a"},
        {number: '700', color: "#15803d"},
        {number: '800', color: "#166534"},
        {number: '900', color: "#14532d"},

      ]
    },
    {
      en: 'warning',
      // cn: '蛋壳',
      list: [
        {number: '50' , color: "#fffbeb"},
        {number: '100', color: "#fef3c7"},
        {number: '200', color: "#fde68a"},
        {number: '300', color: "#fcd34d"},
        {number: '400', color: "#fbbf24"},
        {number: '500', color: "#f59e0b"},
        {number: '600', color: "#d97706"},
        {number: '700', color: "#b45309"},
        {number: '800', color: "#92400e"},
        {number: '900', color: "#78350f"},

      ]
    },
    {
      en: 'danger',
      // cn: '剔红',
      list: [
        {number: '50',  color: "#fef2f2"},
        {number: '100', color: "#fee2e2"},
        {number: '200', color: "#fecaca"},
        {number: '300', color: "#fca5a5"},
        {number: '400', color: "#f87171"},
        {number: '500', color: "#ef4444"},
        {number: '600', color: "#dc2626"},
        {number: '700', color: "#b91c1c"},
        {number: '800', color: "#991b1b"},
        {number: '900', color: "#7f1d1d"},

      ]
    },
    {
      en: 'important',
      // cn: '洋红色/粉',
      list: [
        {number: '50' , color: "#fdf2f8"},
        {number: '100', color: "#fce7f3"},
        {number: '200', color: "#fbcfe8"},
        {number: '300', color: "#f9a8d4"},
        {number: '400', color: "#f472b6"},
        {number: '500', color: "#ec4899"},
        {number: '600', color: "#db2777"},
        {number: '700', color: "#be185d"},
        {number: '800', color: "#9d174d"},
        {number: '900', color: "#831843"},
      ]
    },
    {
      en: 'special',
      // cn: '爱琴海/紫色',
      list: [
        {number: '50' , color: "#faf5ff"},
        {number: '100', color: "#f3e8ff"},
        {number: '200', color: "#e9d5ff"},
        {number: '300', color: "#d8b4fe"},
        {number: '400', color: "#c084fc"},
        {number: '500', color: "#a855f7"},
        {number: '600', color: "#9333ea"},
        {number: '700', color: "#7e22ce"},
        {number: '800', color: "#6b21a8"},
        {number: '900', color: "#581c87"},

      ]
    },
    {
      en: 'gray',
      // cn: '灰色',
      list: [
        {number: '50' , color: "#f8fafc"},
        {number: '100', color: "#f1f5f9"},
        {number: '200', color: "#e2e8f0"},
        {number: '300', color: "#cbd5e1"},
        {number: '400', color: "#94a3b8"},
        {number: '500', color: "#64748b"},
        {number: '600', color: "#475569"},
        {number: '700', color: "#334155"},
        {number: '800', color: "#1e293b"},
        {number: '900', color: "#0f172a"},

      ]
    },
  ];

  const themeColor = [
    {name: 'primary', color: 'primary-500', desc: '主要：主题的、可链接、正常', className: 'bg-primary'},
    {name: 'secondary', color: 'secondary-500', desc: '次要：次级、常态的', className: 'bg-secondary'},
    {name: 'success', color: 'success-500', desc: '成功：完成、积极', className: 'bg-success'},
    {name: 'warning', color: 'warning-500', desc: '关注：提示、重点', className: 'bg-warning'},
    {name: 'danger', color: 'danger-500', desc: '警告：提示、异常、警醒', className: 'bg-danger'},
    {name: 'important', color: 'important-500', desc: '重要：优先', className: 'bg-important'},
    {name: 'special', color: 'special-500', desc: '特殊：触动、激情', className: 'bg-special'},
  ];

  const globalSpecialColor = [
    {name: 'canvas', color: 'white',desc: '画布（页面背景）', className: 'bg-canvas'},
    {name: 'inverse', color: 'block', desc: '画布反色', className: 'bg-inverse'},
    {name: 'surface', color: 'gray-100', desc: '控件背景', className: 'bg-surface'},
    {name: 'fore', color: 'gray-700', desc: '文本', className: 'text-fore'},
    {name: 'focus', color: 'primary-200', desc: '焦点', className: 'text-focus'},
    {name: 'link', color: 'primary-500', desc: '链接', className: 'text-link'},
    {name: 'link-hover', color: 'primary-600', desc: '链接(hover)', className: 'text-link-hover'},
  ];
</script>
