# 组件基础

## Cash 辅助方法

为了方便手动构造、调用组件，增加了一系列 jQuery 风格的方法。

### 获取组件实例 `$.fn.zui`

**定义：**

```ts
/* 获取元素上的找到的最后一个组件实例。 */
$(selector).zui();

/* 获取元素上的找到的所有组件实例。 */
$(selector).zui(true);

/* 获取元素上指定名称的最后一个组件实例，当前元素没有对应实例时，自动向父级元素查找，直到找到。 */
$(selector).zui(componentName);

/* 当元素上被初始化了多个同名组件实例的情况下，获取元素上指定名称的最后一个符合特定 key 组件实例，当前元素没有对应实例时，自动向父级元素查找，直到找到。 */
$(selector).zui(componentName, key);

/* 当元素上被初始化了多个同名组件实例的情况下，获取所有指定名称的组件实例。 */
$(selector).zui(componentName, true);
```

**举例：**

```js
/* 获取 picker 实例。 */
const picker = $('#myPicker').zui('picker');

/* 执行重新渲染。 */
picker.render({items: newItems, name: newName});

/* 修改 picker 的当前值。 */
picker.$.setValue('newValue');

/* 销毁组件。 */
picker.destroy();
```

### 初始化组件实例或调用组件方法

**定义：**

```ts
/* 无选项形式在元素上初始化一个组件。 */
$(selector).componentName();

/* 指定选项在元素上初始化一个组件。 */
$(selector).componentName(options);

/* 当元素上已经有被初始化的组件，则会使用选项调用 render 方法。 */
$(selector).componentName(renderOptions);

/* 调用组件实例上的方法，或者组件实例 $ 对象上的方法。 */
$(selector).componentName(methodName);

/* 调用组件实例上的方法并指定方法参数。 */
$(selector).componentName(methodName, ...args);
```

**举例：**

```js
/* 在 #myColor 上初始化 color */
$('#myColor').colorPicker();

/* 在 #myPicker 上使用选项初始化 picker */
$('#myPicker').picker({name: 'product', items: productItems});

/* 重新渲染修改 items。 */
$('#myPicker').picker({items: newProductItems});

/* 调用实例 $.setValue 方法。 */
$('#myPicker').picker('setValue', newValue);

/* 调用 destroy 方法销毁组件。 */
$('#myPicker').picker('destroy');

/* 综合使用：初始化 datePicker 并获取实例。 */
const datePicker = $('#myDate').datePicker({defaultValue: 'today'}).zui();

/* 修改 placeholder 和类名。 */
datePicker.render({placeholder: '请输入日期', className: 'has-error'});

/* 设置值。 */
datePicker.$.setValue('2023-07-13');

/* 销毁。 */
datePicker.destroy();
```
