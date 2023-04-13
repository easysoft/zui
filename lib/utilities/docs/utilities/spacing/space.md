# 子元素间距

详细配置可参考 [Tailwind 官网](https://tailwindcss.com/docs/space#add-horizontal-space-between-children)。

<Example class="h-96 -overflow-y-auto p-0">
    <table class="table">
        <thead>
            <tr>
                <th>工具类</th>
                <th>属性</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>.space-x-0</td>
                <td><code>margin-left: 0px;</code></td>
            </tr>
            <tr>
                <td>.space-y-0</td>
                <td><code>margin-top: 0px;</code></td>
            </tr>
            <tr>
                <td>.space-x-0.5</td>
                <td><code>margin-left: 0.125rem; /* 2px */</code></td>
            </tr>
            <tr>
                <td>.space-y-0.5</td>
                <td><code>margin-top: 0.125rem; /* 2px */</code></td>
            </tr>
            <tr>
                <td>.space-x-1</td>
                <td><code>margin-left: 0.25rem; /* 4px */</code></td>
            </tr>
            <tr>
                <td>.space-y-1</td>
                <td><code>margin-top: 0.25rem; /* 4px */</code></td>
            </tr>
            <tr>
                <td>.space-x-1.5</td>
                <td><code>margin-left: 0.375rem; /* 6px */</code></td>
            </tr>
            <tr>
                <td>.space-y-1.5</td>
                <td><code>margin-top: 0.375rem; /* 6px */</code></td>
            </tr>
            <tr>
                <td>.space-x-2</td>
                <td><code>margin-left: 0.5rem; /* 8px */</code></td>
            </tr>
            <tr>
                <td>.space-y-2</td>
                <td><code>margin-top: 0.5rem; /* 8px */</code></td>
            </tr>
            <tr>
                <td>.space-x-2.5</td>
                <td><code>margin-left: 0.625rem; /* 10px */</code></td>
            </tr>
            <tr>
                <td>.space-y-2.5</td>
                <td><code>margin-top: 0.625rem; /* 10px */</code></td>
            </tr>
            <tr>
                <td>.space-x-3</td>
                <td><code>margin-left: 0.75rem; /* 12px */</code></td>
            </tr>
            <tr>
                <td>.space-y-3</td>
                <td><code>margin-top: 0.75rem; /* 12px */</code></td>
            </tr>
            <tr>
                <td>.space-x-3.5</td>
                <td><code>margin-left: 0.875rem; /* 14px */</code></td>
            </tr>
            <tr>
                <td>.space-y-3.5</td>
                <td><code>margin-top: 0.875rem; /* 14px */</code></td>
            </tr>
            <tr>
                <td>.space-x-4</td>
                <td><code>margin-left: 1rem; /* 16px */</code></td>
            </tr>
            <tr>
                <td>.space-y-4</td>
                <td><code>margin-top: 1rem; /* 16px */</code></td>
            </tr>
            <tr>
                <td>.space-x-5</td>
                <td><code>margin-left: 1.25rem; /* 20px */</code></td>
            </tr>
            <tr>
                <td>.space-y-5</td>
                <td><code>margin-top: 1.25rem; /* 20px */</code></td>
            </tr>
            <tr>
                <td>.space-x-6</td>
                <td><code>margin-left: 1.5rem; /* 24px */</code></td>
            </tr>
            <tr>
                <td>.space-y-6</td>
                <td><code>margin-top: 1.5rem; /* 24px */</code></td>
            </tr>
            <tr>
                <td>.space-x-7</td>
                <td><code>margin-left: 1.75rem; /* 28px */</code></td>
            </tr>
            <tr>
                <td>.space-y-7</td>
                <td><code>margin-top: 1.75rem; /* 28px */</code></td>
            </tr>
            <tr>
                <td>.space-x-8</td>
                <td><code>margin-left: 2rem; /* 32px */</code></td>
            </tr>
            <tr>
                <td>.space-y-8</td>
                <td><code>margin-top: 2rem; /* 32px */</code></td>
            </tr>
        </tbody>
    </table>
</Example>

### 使用方法

使用 `space-x-*` 来设置元素横向间距。

<Example>
    <div class="inline-flex space-x-4 -bg-stripes-blue">
        <div class="primary rounded p-4">01</div>
        <div class="primary rounded p-4">02</div>
        <div class="primary rounded p-4">03</div>
    </div>
</Example>

```html
<div class="inline-flex space-x-4">
    <div>01</div>
    <div>02</div>
    <div>03</div>
</div>
```

使用 `space-y-*` 来设置元素纵向间距。

<Example>
    <div class="flex -flex-col space-y-4 -bg-stripes-blue">
        <div class="primary rounded p-4">01</div>
        <div class="primary rounded p-4">02</div>
        <div class="primary rounded p-4">03</div>
    </div>
</Example>

```html
<div class="flex -flex-col space-y-4">
    <div>01</div>
    <div>02</div>
    <div>03</div>
</div>
```
