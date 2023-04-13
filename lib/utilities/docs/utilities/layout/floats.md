# 浮动

用于设置元素浮动或清除浮动影响的工具类。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in floatJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

::: tip 提示
浮动应当仅适用于实现文字环绕效果，布局请使用 `flex` 等工具类。
:::

## 效果展示

### 向右浮动

使用工具类 `pull-right` 将一个元素浮动到其容器的右边。

<Example background="light-grid">
  <div class="clearfix">
    <img class="pull-right ml-4 h-24" src="/favicon.svg">
    <p>ZUI3 是一个开箱即用的组合式前端 UI 框架。ZUI3 组件库内置了大量组件，并支持集中开发、调试和打包，其中打包还支持只选择指定的组件进行个性化定制，同步输出组件库文档。但当需求扩展到组件库之外时，就需要用到扩展组件库了。ZUI3 支持扩展组件库模式，可以从其他位置引入一个或多个组件库目录，享受集中开发、调试和打包。下面介绍扩展组件库的使用方法。ZUI3 每个组件在一个独立的目录内，拥有自己的 package.json 文件，使得组件可以独立作为 npm 包来使用，也可以单独作为子项目进行开发维护。通常组件通过在 package.json 文件中设置属性 private: true 来让包仅在 zui3 工作空间内可用，但组件仍然拥有作为公开的包发布到 npm 上进行独立使用。</p>
  </div>
</Example>

```html
<div class="clearfix">
  <img class="pull-right ml-2 h-24" src="/favicon.svg">
  <p>ZUI3 是一个开箱即用的组合式前端 UI 框架。ZUI3 组件库内置了大量组件，并支持集中开发、调试和打包，其中打包还支持只选择指定的组件进行个性化定制，同步输出组件库文档。但当需求扩展到组件库之外时，就需要用到扩展组件库了。ZUI3 支持扩展组件库模式，可以从其他位置引入一个或多个组件库目录，享受集中开发、调试和打包。下面介绍扩展组件库的使用方法。ZUI3 每个组件在一个独立的目录内，拥有自己的 package.json 文件，使得组件可以独立作为 npm 包来使用，也可以单独作为子项目进行开发维护。通常组件通过在 package.json 文件中设置属性 private: true 来让包仅在 zui3 工作空间内可用，但组件仍然拥有作为公开的包发布到 npm 上进行独立使用。</p>
</div>
```

### 向左浮动

使用工具类 `pull-left` 将一个元素浮动到其容器的左边。

<Example background="light-grid">
  <div class="clearfix">
    <img class="pull-left mr-4 h-24" src="/favicon.svg">
    <p>ZUI3 是一个开箱即用的组合式前端 UI 框架。ZUI3 组件库内置了大量组件，并支持集中开发、调试和打包，其中打包还支持只选择指定的组件进行个性化定制，同步输出组件库文档。但当需求扩展到组件库之外时，就需要用到扩展组件库了。ZUI3 支持扩展组件库模式，可以从其他位置引入一个或多个组件库目录，享受集中开发、调试和打包。下面介绍扩展组件库的使用方法。ZUI3 每个组件在一个独立的目录内，拥有自己的 package.json 文件，使得组件可以独立作为 npm 包来使用，也可以单独作为子项目进行开发维护。通常组件通过在 package.json 文件中设置属性 private: true 来让包仅在 zui3 工作空间内可用，但组件仍然拥有作为公开的包发布到 npm 上进行独立使用。</p>
  </div>
</Example>

```html
<div class="clearfix">
  <img class="pull-left mr-4 h-24" src="/favicon.svg">
  <p>ZUI3 是一个开箱即用的组合式前端 UI 框架。ZUI3 组件库内置了大量组件，并支持集中开发、调试和打包，其中打包还支持只选择指定的组件进行个性化定制，同步输出组件库文档。但当需求扩展到组件库之外时，就需要用到扩展组件库了。ZUI3 支持扩展组件库模式，可以从其他位置引入一个或多个组件库目录，享受集中开发、调试和打包。下面介绍扩展组件库的使用方法。ZUI3 每个组件在一个独立的目录内，拥有自己的 package.json 文件，使得组件可以独立作为 npm 包来使用，也可以单独作为子项目进行开发维护。通常组件通过在 package.json 文件中设置属性 private: true 来让包仅在 zui3 工作空间内可用，但组件仍然拥有作为公开的包发布到 npm 上进行独立使用。</p>
</div>
```

<script setup>
  const floatJson = [
    {name: 'pull-right', desc: 'float: right;'},
    {name: 'pull-left', desc: 'float: left;'},
    {name: 'clearfix', desc: '.clearfix::after {content: ""; display: block; clear: both;}'},
  ]
</script>
