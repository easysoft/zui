# Web Components

通过原生自定义元素使用 ZUI。当前试验支持 Button、Pager 和 Picker，使用 Light DOM，内部复用现有组件。

## 按钮

```html:example: flex flex-wrap gap-3
<zui-button text="主要按钮" type="primary"></zui-button>
<zui-button text="小按钮" size="sm"></zui-button>
<zui-button text="不可用" disabled></zui-button>
<zui-button text="保存" loading loading-text="保存中"></zui-button>
<zui-button text="ZUI 官网" url="https://openzui.com" target="_blank"></zui-button>
```

按钮文字使用 `text`。`type` 控制外观，原生提交和重置使用 `btn-type="submit"`、`btn-type="reset"`。

## 分页

通过键盘或点击换页会触发 `zui-change`；直接设置 `page` 或 `recTotal` 不触发用户事件。

```html:example: col gap-3
<zui-pager id="webcPager" rec-total="123" rec-per-page="20" aria-label="示例分页"></zui-pager>
<div class="flex gap-2">
  <zui-button id="webcPageNext" text="通过 property 设置下一页"></zui-button>
  <zui-button id="webcPageEmpty" text="切换空数据"></zui-button>
</div>
<output id="webcPagerState" aria-live="polite"></output>
```

## 原生表单

可以通过标签、Tab、方向键、Enter 和 Escape 操作选择器。试试必填校验、重置、fieldset 禁用，以及取消选中事件。

```html:example: col gap-3
<form id="webcForm" class="col gap-3">
  <fieldset id="webcFields" class="col gap-3">
    <label id="webcOwnerLabel" for="webcOwner">负责人（必填）</label>
    <zui-picker id="webcOwner" name="owner" value="hao" required placeholder="请选择负责人" lang="zh-CN"></zui-picker>
    <label id="webcReviewersLabel" for="webcReviewers">评审人（最多 3 人）</label>
    <zui-picker id="webcReviewers" name="reviewers" value="tom,amy" multiple="3" placeholder="请选择评审人" lang="zh-CN"></zui-picker>
  </fieldset>
  <div class="flex flex-wrap gap-3">
    <zui-button text="提交表单" type="primary" btn-type="submit"></zui-button>
    <zui-button text="重置" btn-type="reset"></zui-button>
    <zui-button id="webcSetOwner" text="通过 property 设为 Tom"></zui-button>
    <zui-button id="webcClearOwner" text="清空负责人"></zui-button>
  </div>
  <label><input id="webcDisableFields" type="checkbox"> 禁用整个 fieldset</label>
  <label><input id="webcReadonlyOwner" type="checkbox"> 负责人只读</label>
  <label><input id="webcCancelChange" type="checkbox"> 取消负责人下一次修改</label>
  <output id="webcFormState" aria-live="polite"></output>
</form>
```

## 本地接入

在仓库根目录执行 `pnpm build:web-components`，产物位于 `dist/web-components/`，可作为本地包安装，尚未发布到 npm。

```sh
# 在消费项目中使用实际构建目录的绝对路径。
pnpm add /absolute/path/to/zui3/dist/web-components
```

```js
import '@zui/web-components/css';
import {defineAll} from '@zui/web-components/all';

defineAll();
const picker = document.querySelector('zui-picker');
picker.items = [{value: 'hao', text: 'Hao'}, {value: 'tom', text: 'Tom'}];
```

无需构建工具时，将整个产物目录交给静态服务器，加载 `style.css` 和 `zui-web-components.auto.js`。它会自动注册三个标签。

```html
<link rel="stylesheet" href="./style.css">
<script src="./zui-web-components.auto.js" defer></script>
<zui-button text="保存" type="primary"></zui-button>
```

在当前 worktree 运行 `pnpm dev`，访问 `/web-components/` 可打开本页。完整契约见 `docs/lib/helpers/index.md`。
