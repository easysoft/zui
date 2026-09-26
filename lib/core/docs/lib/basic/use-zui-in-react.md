# 在 React 中使用 ZUI vanilla 组件

通过 DOM 容器和 React 生命周期，可以在 React 18、19 应用中使用 ZUI vanilla 组件。React 负责容器和业务状态，ZUI 负责容器内部的渲染与交互。

## 基础示例

下面使用 Picker 实现受控选择器。示例采用 JavaScript，文件扩展名为 `.jsx`；`ZUI` 是下文在应用中定义的桥接组件。

从[快速上手](/guide/start/)获取包含 Picker 的 ZUI 构建，将 `zui.esm.js`、`zui.css` 及配套资源放入应用的 `src/vendor/`，保留资源间的相对路径。以下文件均放在 `src/` 下，适用于支持 JSX 和 CSS 导入的 React 工程。

```jsx [App.jsx]
import {useState} from 'react';
import {ZUI} from './ZUI.jsx';
import './vendor/zui.css';

const items = [
    {value: 'zui', text: 'ZUI'},
    {value: 'zentao', text: '禅道'},
];

export default function App() {
    const [value, setValue] = useState('zui');
    const [disabled, setDisabled] = useState(false);

    return (
        <>
            <ZUI
                name="picker"
                options={{
                    items,
                    value,
                    placeholder: '请选择产品',
                    onChange: nextValue => setValue(nextValue),
                    ...(disabled ? {disabled: true} : {}),
                }}
            />
            <p>
                当前值：
                {value || '未选择'}
            </p>
            <button type="button" onClick={() => setValue('')}>清空</button>
            <button type="button" onClick={() => setDisabled(!disabled)}>
                {disabled ? '启用' : '禁用'}
            </button>
        </>
    );
}
```

`value` 由 React state 管理，Picker 的 `onChange(value, oldValue)` 回调接收值，而不是 React 的事件对象。更多选项见[下拉选择器](/lib/forms/picker/)。

## 封装容器和生命周期

下面提供函数组件与 Hooks、类组件两种实现。任选一种保存为 `ZUI.jsx`，即可用于上面的基础示例。两种实现都接受 `name`、`options`、`className`、`style`，并通过 `ref.current?.$` 提供 vanilla 实例，后面的配置与加载说明对两者都适用。

这个桥接方式适用于在容器内渲染、支持通过选项更新的 vanilla 组件；需要绑定现有输入框、特定标签或特殊销毁参数的组件，应按其 API 单独适配。

### 方式一：函数组件与 Hooks

使用 `useRef` 保存 DOM 和实例，`useEffect` 负责创建、配置同步和清理，`useImperativeHandle` 暴露实例访问入口。

```jsx [ZUI.jsx]
import {forwardRef, useEffect, useImperativeHandle, useRef} from 'react';
import {create} from './vendor/zui.esm.js';

export const ZUI = forwardRef(function ZUI({name, options, className, style}, ref) {
    const elementRef = useRef(null);
    const instanceRef = useRef(null);

    useImperativeHandle(ref, () => ({
        get $() {
            return instanceRef.current;
        },
    }), []);

    // 组件类型变化或卸载时清理；普通 options 更新不销毁实例。
    useEffect(() => {
        return () => {
            const instance = instanceRef.current;
            instanceRef.current = null;
            instance?.destroy();
        };
    }, [name]);

    useEffect(() => {
        const nextOptions = {
            ...options,
            $replace: false,
            $optionsFromDataset: false,
            $notDestroyOnDetach: true,
            $options: undefined,
            $fetcher: undefined,
        };
        const instance = instanceRef.current;
        if (instance) {
            instance.resetOptions(nextOptions);
            if (instance.inited) {
                instance.render();
            }
        } else {
            const created = create(name, elementRef.current, nextOptions);
            if (!created) {
                throw new Error(`ZUI 组件 "${name}" 不可用，请检查名称和已加载的构建。`);
            }
            instanceRef.current = created;
        }
    }, [name, options]);

    return <div ref={elementRef} className={className} style={style} />;
});
```

两个 Effect 分别处理实例清理和配置同步。`name` 改变时，React 先执行旧 Effect 的清理，再执行新 Effect，随后使用新名称和当前配置创建实例。只有 `options` 改变时，复用现有实例同步配置。不要在依赖 `[name, options]` 的 Effect 中返回销毁函数，否则每次配置对象变化都会重建实例。

`forwardRef` 用于兼容 React 18 的 `ref` 传递方式。`useImperativeHandle` 暴露的是带 `$` getter 的句柄，每次访问都读取当前实例，组件类型切换后不会保留旧实例。

### 方式二：类组件

使用 `componentDidMount` 创建实例，`componentDidUpdate` 同步配置或切换组件类型，`componentWillUnmount` 销毁实例。

```jsx [ZUI.jsx]
import {Component, createRef} from 'react';
import {create} from './vendor/zui.esm.js';

export class ZUI extends Component {
    _element = createRef();

    _instance = null;

    get $() {
        return this._instance;
    }

    _getOptions() {
        return {
            ...this.props.options,
            $replace: false,
            $optionsFromDataset: false,
            $notDestroyOnDetach: true,
            $options: undefined,
            $fetcher: undefined,
        };
    }

    _create() {
        const {name} = this.props;
        this._instance = create(name, this._element.current, this._getOptions());
        if (!this._instance) {
            throw new Error(`ZUI 组件 "${name}" 不可用，请检查名称和已加载的构建。`);
        }
    }

    _destroy() {
        const instance = this._instance;
        this._instance = null;
        instance?.destroy();
    }

    componentDidMount() {
        this._create();
    }

    componentDidUpdate(previousProps) {
        if (previousProps.name !== this.props.name) {
            this._destroy();
            this._create();
        } else if (previousProps.options !== this.props.options) {
            const instance = this._instance;
            instance.resetOptions(this._getOptions());
            if (instance.inited) {
                instance.render();
            }
        }
    }

    componentWillUnmount() {
        this._destroy();
    }

    render() {
        const {className, style} = this.props;
        return <div ref={this._element} className={className} style={style} />;
    }
}
```

React 类组件的 `render()` 不接收 props 参数，使用 `this.props` 读取当前属性。普通配置更新调用现有实例的方法，不重新创建实例。

### 两种方式的共同约定

两种封装都保留固定的空 `div`，只向它传递 `className` 和 `style`，不透传 `children`、`ref` 或 `dangerouslySetInnerHTML`。`$replace: false` 阻止 ZUI 替换 React 持有的容器；`$notDestroyOnDetach: true` 将实例销毁交给 React 卸载流程。

配置统一来自 `options`，封装会禁用 dataset、`$options` 和 `$fetcher` 等额外配置来源。需要远程配置时，在 React 中加载数据后更新 `options`。

ZUI 的实例创建和初始化完成是两个时刻。初始化前发生更新时，只替换配置，让首次渲染使用最新配置；初始化完成后才调用 `render()`。通过 React ref 的 `ref.current?.$` 可以取得 vanilla 实例，其销毁仍由封装负责。需要访问内部视图或调用依赖初始化的方法时，使用目标组件的就绪回调，例如 `$onInited`。

React Strict Mode 在开发环境中会额外执行一次 Effect 的 setup 和 cleanup；类组件则会经历“挂载 → 卸载 → 再挂载”。两种实现都会在清理时销毁并清空实例引用，下次初始化时创建新实例，无需用“只初始化一次”的标志绕过清理。

## 更新选项与重新创建

两种封装都把 `options` 作为当前配置的完整快照，而不是增量补丁：

- 更新时创建新对象，不要原地修改 `options` 或其内部数组。上面的示例在每次渲染时创建配置对象，回调也会同步为当前版本。
- 从 `options` 中移除字段时，`resetOptions()` 会重新合并组件默认配置，不会继续保留上一轮的配置值。示例移除 `disabled` 后恢复 Picker 的默认启用状态。
- 随后调用不带重置参数的 `render()`，避免 `render(options, true)` 额外触发部分组件的内部状态重置。各组件如何响应配置变化，以其 API 为准。
- 需要持续受控的字段，应一直传入，例如清空 Picker 时传 `value: ''`。移除 `value` 可能切换为组件内部状态管理，不等同于清空。

`className` 和 `style` 用于容器样式；不要再通过 `options.$class`、`options.$style` 同时修改该容器。React JSX 生成的元素也不能直接作为 ZUI 内部 Preact 视图的 `children` 或渲染回调结果，两者的渲染树和 Context 相互独立。

`name` 改变时，封装会销毁旧实例并创建新实例。对于只在初始化时读取的配置，或者需要完整重置内部状态的场景，可以改变 React 的 `key`：

```jsx
<ZUI key={recordId} name="picker" options={options} />
```

不要让 `key` 随每次渲染变化，否则会丢失焦点、展开状态等交互状态。也不要同时在该容器上使用 `zui-create` 或再次手动创建实例。

## 加载 ZUI

### ESM

上面的 `ZUI.jsx` 从构建产物导入 `create`，模块系统会在执行使用方代码前完成依赖加载。无需轮询 `window.zui`，也无需调用 `defineFn()`；后者用于注册 Cash 的插件方法。

在只有客户端渲染的 React 工程中，可使用以下入口。HTML 页面需要提供 `<div id="root"></div>`。

```jsx [main.jsx]
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
);
```

### 已有全局 `zui` 的页面

如果应用通过 `<script>` 加载 UMD 产物，在 React 入口执行前加载 ZUI 脚本和样式。例如，将资源放在应用静态资源目录下的 `vendor/`：

```html
<link rel="stylesheet" href="/vendor/zui.css">
<div id="root"></div>
<script src="/vendor/zui.js"></script>
<script type="module" src="/src/main.jsx"></script>
```

此时移除 `App.jsx` 中的 CSS 导入，并将 `ZUI.jsx` 中导入 `create` 的语句替换为下面的函数；其他代码保持不变。两种加载方式选择一种即可。

```js
function create(name, element, options) {
    if (typeof window === 'undefined' || typeof window.zui?.create !== 'function') {
        throw new Error('请在挂载 React 组件前加载 ZUI。');
    }
    return window.zui.create(name, element, options);
}
```

若脚本由应用已有的加载器异步注入，应在它的加载成功回调中挂载使用 ZUI 的 React 子树，并处理脚本加载失败。不要给上述 ZUI 脚本增加 `async` 后仍假设它会先于 React 入口执行。

### 按需加载和服务端渲染

ZUI vanilla 运行时依赖浏览器 DOM。在 SSR 应用中，使用框架提供的仅客户端加载方式，或在 Effect 中动态导入包含 ZUI 的模块。只把实例创建放进 Effect，仍在服务端静态导入 ZUI，并不能隔离运行时的浏览器依赖。

以下组件可作为前面 ESM 示例的客户端加载入口。它在加载完成后再挂载 `App`，同时处理加载失败和等待期间卸载：

```jsx [ClientApp.jsx]
import {useEffect, useState} from 'react';

export default function ClientApp() {
    const [App, setApp] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let disposed = false;
        import('./App.jsx').then(
            (module) => {
                if (!disposed) {
                    setApp(() => module.default);
                }
            },
            (reason) => {
                if (!disposed) {
                    setError(reason instanceof Error ? reason.message : String(reason));
                }
            },
        );
        return () => {
            disposed = true;
        };
    }, []);

    if (error !== null) {
        return (
            <p role="alert">
                加载失败：
                {error}
            </p>
        );
    }
    return App ? <App /> : <p role="status">正在加载组件…</p>;
}
```

卸载标记不取消模块下载，而是阻止过期回调继续挂载组件。使用 React Server Components 的框架时，还需按框架规则将此入口声明为客户端组件。

相关说明：[通过 Effect 控制外部组件](https://react.dev/reference/react/useEffect#controlling-a-non-react-widget)、[useImperativeHandle](https://react.dev/reference/react/useImperativeHandle)、[类组件生命周期](https://react.dev/reference/react/Component#adding-lifecycle-methods-to-a-class-component)、[DOM 操作边界](https://react.dev/learn/manipulating-the-dom-with-refs#best-practices-for-dom-manipulation-with-refs)。
