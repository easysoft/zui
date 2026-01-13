# 复制按钮

## 工具提示形式

```html:example
<textarea id="textForCopying1" class="form-control mb-2">Text for copying.</textarea>
<button type="button" class="btn" zui-toggle="copybtn" zui-toggle-copybtn="{target: '#textForCopying1'}"><span class="text">点击复制</span></button>
```

## 内容覆盖形式

```html:example
<textarea id="textForCopying2" class="form-control mb-2">Text for copying.</textarea>
<button type="button" class="btn" zui-toggle="copybtn" zui-toggle-copybtn='{mode: "overlay", target: "#textForCopying2"}'><span class="text">点击复制</span></button>
```
