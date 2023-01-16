# 开关

开关是一个通用组件，可通过JS动态调用。

## 示例

通过构造一个 `Switch` 实例，在一个空的 `<div>` 元素上创建一个开关。

<Example>
  <div id="switch-demo"></div>
</Example>

<script>
export default {
    mounted() {
        onZUIReady(() => {
            const switchDemo = new zui.Switch('#switch-demo', {
                onChange: (event) => {
                    console.log('> onChange', event.target);
                },
                defaultChecked: true,
                disabled: false,
                surffixIcon: 'icon-lightbulb',
                text: '夜间模式',
            });

            const switchLeft = new zui.Switch('#switch-left', {
                onChange: (event) => {
                    console.log('> onChange', event.target);
                },
                className: 'text-left -w-28',
                defaultChecked: false,
                disabled: false,
                icon: 'icon-lightbulb',
                text: '夜间模式',
            });

            const switchRight = new zui.Switch('#switch-right', {
                onChange: (event) => {
                    console.log('> onChange', event.target);
                },
                className: 'text-right -w-28',
                defaultChecked: true,
                disabled: false,
                surffixIcon: 'icon-lightbulb',
                text: '夜间模式',
            });

            const switchDisabled = new zui.Switch('#switch-disabled', {
                onChange: (event) => {
                    console.log('> onChange', event.target);
                },
                defaultChecked: true,
                disabled: true,
                surffixIcon: 'icon-lightbulb',
                text: '夜间模式',
            });
        });
    },
}
</script>

```html
<div id="switch"></div>

<script>
const switchDemo = new zui.Switch('#switch-demo', {
    onChange: (event) => {
        console.log('> onChange', event.target);
    },
    defaultChecked: true,
    disabled: false,
    surffixIcon: 'icon-lightbulb',
    text: '夜间模式',
});
</script>
```

## 对齐

使用 `.text-left` 或 `.text-right` CSS样式来更改文字对齐方向。

<Example>
  <div id="switch-left"></div>
  <div id="switch-right"></div>
</Example>

```html
<div id="switch-left"></div>
<div id="switch-right"></div>

<script>
const switchLeft = new zui.Switch('#switch-left', {
    onChange: (event) => {
        console.log('> onChange', event.target);
    },
    className: 'text-left -w-28',
    defaultChecked: false,
    disabled: false,
    icon: 'icon-lightbulb',
    text: '夜间模式',
});

const switchRight = new zui.Switch('#switch-right', {
    onChange: (event) => {
        console.log('> onChange', event.target);
    },
    className: 'text-right -w-28',
    defaultChecked: true,
    disabled: false,
    surffixIcon: 'icon-lightbulb',
    text: '夜间模式',
});
</script>
```

## 禁用

将 `Switch` 组件 `disabled` 属性设置为 `true`。

<Example>
  <div id="switch-disabled"></div>
</Example>

```html
<div id="switch-disabled"></div>

<script>
const switchDisabled = new zui.Switch('#switch-disabled', {
    onChange: (event) => {
        console.log('> onChange', event.target);
    },
    defaultChecked: true,
    disabled: true,
    surffixIcon: 'icon-lightbulb',
    text: '夜间模式',
});
</script>
```