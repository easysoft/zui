# 浏览器工具方法

提供了在浏览器环境下的一些工具方法。

## 使用方式

```js
import {browserHelpers} from 'zui';
```

`browserHelpers` 对象上将拥有所有可用的浏览器工具方法。

## `selectText` <span class="text-blue-500 text-sm font-mono bg-blue-100 p-1 rounded">func</span>

选择界面上某个可编辑元素上的文本。可编辑元素包括输入框和 `contenteditable` 属性为 `true` 的 HTML 元素。

**定义**

```ts
/** 指定元素实例执行选择文本操作 */
selectText(element: HTMLElement) => boolean;

/** 指定元素选择器例执行选择文本操作 */ */
selectText(selector: string) => boolean;
```

**参数**

| 参数        | 类型           | 定义  |
| ------------- |:-------------:| ----- |
| `element`      | `Element` | 要执行操作的元素 |
| `selector`      | `string` | 要执行操作的元素选择器文本 |

**返回值**

| 类型           | 定义  |
|:-------------:| ----- |
| `boolean` | 如果操作成功返回 `true`，否则返回 `false` |

**示例**

<Example class="flex flex-col gap-2 items-start">
  <input type="text" id="selectTextInput" value="鹅，鹅，鹅" class="form-control" />
  <button id="selectTextBtn" class="btn" onclick="zui.selectText('#selectTextInput')">点击选中文本框文本</button>
</Example>

```html
<input type="text" id="input" value="鹅，鹅，鹅" />
<button id="button">点击选中文本框文本</button>

<script>
import {selectText} from 'zui/browserHelpers';

button.addEventListener('click', () => {
    selectText(input);
});
</script>
```
