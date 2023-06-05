# 下拉面板 Popovers

```html:example
<div class="w-96 p-4">
    <div class="input-control has-prefix-icon" id="trigger" data-target="#panel">
        <input id="inputExample1" type="text" class="form-control" placeholder="搜索">
        <label for="inputExample1" class="input-control-prefix"><i class="icon icon-search"></i></label>
    </div>
    <form id="panel" class="bg-white col h-64 of-hidden shadow" style="width: 352px;">
        <div class="flex-auto of-y-auto pt-4 pl-4 pb-4">
            <label class="checkbox">
                <input type="checkbox" name="matrix-1"> 场景矩阵 1
            </label>
            <label class="checkbox">
                <input type="checkbox" name="matrix-2"> 场景矩阵 2
            </label>
            <label class="checkbox">
                <input type="checkbox" name="matrix-3"> 场景矩阵 3
            </label>
            <label class="checkbox">
                <input type="checkbox" name="matrix-4"> 场景矩阵 4
            </label>
            <label class="checkbox">
                <input type="checkbox" name="matrix-5"> 场景矩阵 5
            </label>
            <label class="checkbox">
                <input type="checkbox" name="matrix-6"> 场景矩阵 6
            </label>
            <label class="checkbox">
                <input type="checkbox" name="matrix-7"> 场景矩阵 7
            </label>
            <label class="checkbox">
                <input type="checkbox" name="matrix-8"> 场景矩阵 8
            </label>
            <label class="checkbox">
                <input type="checkbox" name="matrix-9"> 场景矩阵 9
            </label>
            <label class="checkbox">
                <input type="checkbox" name="matrix-10"> 场景矩阵 10
            </label>
            <label class="checkbox">
                <input type="checkbox" name="matrix-11"> 场景矩阵 11
            </label>
            <label class="checkbox">
                <input type="checkbox" name="matrix-12"> 场景矩阵 12
            </label>
        </div>
        <div class="flex justify-end p-3 border gap-2">
            <button class="btn size-sm" type="reset">恢复默认</button>
            <button class="btn primary size-sm" type="submit" data-dismiss="popovers">确认</button>
        </div>
    </form>
</div>
```
