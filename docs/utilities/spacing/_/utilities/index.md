# 间距

主要包括外边距（margin），内边距（padding），子元素间距（space）。详细配置可参考 [Tailwind 官网](https://www.tailwindcss.cn/docs/container)。

## 外边距

<Example class="h-96 -overflow-y-auto">
    <table class="table">
	<thead>
	    <tr>
		<th>修饰类</th>
		<th>定义</th>
	    </tr>
	</thead>
	<tbody>
	    <tr>
		<td>.m-0</td>
		<td>margin: 0px;</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-0</td>
		<td>margin-left: 0px;</td>
	    </tr>
	    <tr>
		<td>margin-right: 0px;</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-0</td>
		<td>margin-top: 0px;</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 0px;</td>
	    </tr>
	    <tr>
		<td>.mt-0</td>
		<td>margin-top: 0px;</td>
	    </tr>
	    <tr>
		<td>.mr-0</td>
		<td>margin-right: 0px;</td>
	    </tr>
	    <tr>
		<td>.mb-0</td>
		<td>margin-bottom: 0px;</td>
	    </tr>
	    <tr>
		<td>.ml-0</td>
		<td>margin-left: 0px;</td>
	    </tr>
	    <tr>
		<td>.m-px</td>
		<td>margin: 1px;</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-px</td>
		<td>margin-left: 1px;</td>
	    </tr>
	    <tr>
		<td>margin-right: 1px;</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-px</td>
		<td>margin-top: 1px;</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 1px;</td>
	    </tr>
	    <tr>
		<td>.mt-px</td>
		<td>margin-top: 1px;</td>
	    </tr>
	    <tr>
		<td>.mr-px</td>
		<td>margin-right: 1px;</td>
	    </tr>
	    <tr>
		<td>.mb-px</td>
		<td>margin-bottom: 1px;</td>
	    </tr>
	    <tr>
		<td>.ml-px</td>
		<td>margin-left: 1px;</td>
	    </tr>
	    <tr>
		<td>.m-0.5</td>
		<td>margin: 0.125rem; /* 2px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-0.5</td>
		<td>margin-left: 0.125rem; /* 2px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 0.125rem; /* 2px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-0.5</td>
		<td>margin-top: 0.125rem; /* 2px */</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 0.125rem; /* 2px */</td>
	    </tr>
	    <tr>
		<td>.mt-0.5</td>
		<td>margin-top: 0.125rem; /* 2px */</td>
	    </tr>
	    <tr>
		<td>.mr-0.5</td>
		<td>margin-right: 0.125rem; /* 2px */</td>
	    </tr>
	    <tr>
		<td>.mb-0.5</td>
		<td>margin-bottom: 0.125rem; /* 2px */</td>
	    </tr>
	    <tr>
		<td>.ml-0.5</td>
		<td>margin-left: 0.125rem; /* 2px */</td>
	    </tr>
	    <tr>
		<td>.m-1</td>
		<td>margin: 0.25rem; /* 4px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-1</td>
		<td>margin-left: 0.25rem; /* 4px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 0.25rem; /* 4px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-1</td>
		<td>margin-top: 0.25rem; /* 4px */</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 0.25rem; /* 4px */</td>
	    </tr>
	    <tr>
		<td>.mt-1</td>
		<td>margin-top: 0.25rem; /* 4px */</td>
	    </tr>
	    <tr>
		<td>.mr-1</td>
		<td>margin-right: 0.25rem; /* 4px */</td>
	    </tr>
	    <tr>
		<td>.mb-1</td>
		<td>margin-bottom: 0.25rem; /* 4px */</td>
	    </tr>
	    <tr>
		<td>.ml-1</td>
		<td>margin-left: 0.25rem; /* 4px */</td>
	    </tr>
	    <tr>
		<td>.m-1.5</td>
		<td>margin: 0.375rem; /* 6px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-1.5</td>
		<td>margin-left: 0.375rem; /* 6px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 0.375rem; /* 6px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-1.5</td>
		<td>margin-top: 0.375rem; /* 6px */</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 0.375rem; /* 6px */</td>
	    </tr>
	    <tr>
		<td>.mt-1.5</td>
		<td>margin-top: 0.375rem; /* 6px */</td>
	    </tr>
	    <tr>
		<td>.mr-1.5</td>
		<td>margin-right: 0.375rem; /* 6px */</td>
	    </tr>
	    <tr>
		<td>.mb-1.5</td>
		<td>margin-bottom: 0.375rem; /* 6px */</td>
	    </tr>
	    <tr>
		<td>.ml-1.5</td>
		<td>margin-left: 0.375rem; /* 6px */</td>
	    </tr>
	    <tr>
		<td>.m-2</td>
		<td>margin: 0.5rem; /* 8px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-2</td>
		<td>margin-left: 0.5rem; /* 8px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 0.5rem; /* 8px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-2</td>
		<td>margin-top: 0.5rem; /* 8px */</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 0.5rem; /* 8px */</td>
	    </tr>
	    <tr>
		<td>.mt-2</td>
		<td>margin-top: 0.5rem; /* 8px */</td>
	    </tr>
	    <tr>
		<td>.mr-2</td>
		<td>margin-right: 0.5rem; /* 8px */</td>
	    </tr>
	    <tr>
		<td>.mb-2</td>
		<td>margin-bottom: 0.5rem; /* 8px */</td>
	    </tr>
	    <tr>
		<td>.ml-2</td>
		<td>margin-left: 0.5rem; /* 8px */</td>
	    </tr>
	    <tr>
		<td>.m-2.5</td>
		<td>margin: 0.625rem; /* 10px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-2.5</td>
		<td>margin-left: 0.625rem; /* 10px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 0.625rem; /* 10px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-2.5</td>
		<td>margin-top: 0.625rem; /* 10px */</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 0.625rem; /* 10px */</td>
	    </tr>
	    <tr>
		<td>.mt-2.5</td>
		<td>margin-top: 0.625rem; /* 10px */</td>
	    </tr>
	    <tr>
		<td>.mr-2.5</td>
		<td>margin-right: 0.625rem; /* 10px */</td>
	    </tr>
	    <tr>
		<td>.mb-2.5</td>
		<td>margin-bottom: 0.625rem; /* 10px */</td>
	    </tr>
	    <tr>
		<td>.ml-2.5</td>
		<td>margin-left: 0.625rem; /* 10px */</td>
	    </tr>
	    <tr>
		<td>.m-3</td>
		<td>margin: 0.75rem; /* 12px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-3</td>
		<td>margin-left: 0.75rem; /* 12px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 0.75rem; /* 12px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-3</td>
		<td>margin-top: 0.75rem; /* 12px */</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 0.75rem; /* 12px */</td>
	    </tr>
	    <tr>
		<td>.mt-3</td>
		<td>margin-top: 0.75rem; /* 12px */</td>
	    </tr>
	    <tr>
		<td>.mr-3</td>
		<td>margin-right: 0.75rem; /* 12px */</td>
	    </tr>
	    <tr>
		<td>.mb-3</td>
		<td>margin-bottom: 0.75rem; /* 12px */</td>
	    </tr>
	    <tr>
		<td>.ml-3</td>
		<td>margin-left: 0.75rem; /* 12px */</td>
	    </tr>
	    <tr>
		<td>.m-3.5</td>
		<td>margin: 0.875rem; /* 14px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-3.5</td>
		<td>margin-left: 0.875rem; /* 14px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 0.875rem; /* 14px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-3.5</td>
		<td>margin-top: 0.875rem; /* 14px */</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 0.875rem; /* 14px */</td>
	    </tr>
	    <tr>
		<td>.mt-3.5</td>
		<td>margin-top: 0.875rem; /* 14px */</td>
	    </tr>
	    <tr>
		<td>.mr-3.5</td>
		<td>margin-right: 0.875rem; /* 14px */</td>
	    </tr>
	    <tr>
		<td>.mb-3.5</td>
		<td>margin-bottom: 0.875rem; /* 14px */</td>
	    </tr>
	    <tr>
		<td>.ml-3.5</td>
		<td>margin-left: 0.875rem; /* 14px */</td>
	    </tr>
	    <tr>
		<td>.m-4</td>
		<td>margin: 1rem; /* 16px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-4</td>
		<td>margin-left: 1rem; /* 16px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 1rem; /* 16px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-4</td>
		<td>margin-top: 1rem; /* 16px */</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 1rem; /* 16px */</td>
	    </tr>
	    <tr>
		<td>.mt-4</td>
		<td>margin-top: 1rem; /* 16px */</td>
	    </tr>
	    <tr>
		<td>.mr-4</td>
		<td>margin-right: 1rem; /* 16px */</td>
	    </tr>
	    <tr>
		<td>.mb-4</td>
		<td>margin-bottom: 1rem; /* 16px */</td>
	    </tr>
	    <tr>
		<td>.ml-4</td>
		<td>margin-left: 1rem; /* 16px */</td>
	    </tr>
	    <tr>
		<td>.m-5</td>
		<td>margin: 1.25rem; /* 20px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-5</td>
		<td>margin-left: 1.25rem; /* 20px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 1.25rem; /* 20px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-5</td>
		<td>margin-top: 1.25rem; /* 20px */</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 1.25rem; /* 20px */</td>
	    </tr>
	    <tr>
		<td>.mt-5</td>
		<td>margin-top: 1.25rem; /* 20px */</td>
	    </tr>
	    <tr>
		<td>.mr-5</td>
		<td>margin-right: 1.25rem; /* 20px */</td>
	    </tr>
	    <tr>
		<td>.mb-5</td>
		<td>margin-bottom: 1.25rem; /* 20px */</td>
	    </tr>
	    <tr>
		<td>.ml-5</td>
		<td>margin-left: 1.25rem; /* 20px */</td>
	    </tr>
	    <tr>
		<td>.m-6</td>
		<td>margin: 1.5rem; /* 24px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-6</td>
		<td>margin-left: 1.5rem; /* 24px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 1.5rem; /* 24px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-6</td>
		<td>margin-top: 1.5rem; /* 24px */</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 1.5rem; /* 24px */</td>
	    </tr>
	    <tr>
		<td>.mt-6</td>
		<td>margin-top: 1.5rem; /* 24px */</td>
	    </tr>
	    <tr>
		<td>.mr-6</td>
		<td>margin-right: 1.5rem; /* 24px */</td>
	    </tr>
	    <tr>
		<td>.mb-6</td>
		<td>margin-bottom: 1.5rem; /* 24px */</td>
	    </tr>
	    <tr>
		<td>.ml-6</td>
		<td>margin-left: 1.5rem; /* 24px */</td>
	    </tr>
	    <tr>
		<td>.m-7</td>
		<td>width: 7rem; /* 112px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-7</td>
		<td>margin-left: 1.75rem; /* 28px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 1.75rem; /* 28px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-7</td>
		<td>margin-left: 1.75rem; /* 28px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 1.75rem; /* 28px */</td>
	    </tr>
	    <tr>
		<td>.mt-7</td>
		<td>margin-top: 1.75rem; /* 28px */</td>
	    </tr>
	    <tr>
		<td>.mr-7</td>
		<td>margin-right: 1.75rem; /* 28px */</td>
	    </tr>
	    <tr>
		<td>.mb-7</td>
		<td>margin-bottom: 1.75rem; /* 28px */</td>
	    </tr>
	    <tr>
		<td>.ml-7</td>
		<td>margin-left: 1.75rem; /* 28px */</td>
	    </tr>
	    <tr>
		<td>.m-8</td>
		<td>margin: 2rem; /* 32px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.mx-8</td>
		<td>margin-left: 2rem; /* 32px */</td>
	    </tr>
	    <tr>
		<td>margin-right: 2rem; /* 32px */</td>
	    </tr>
	    <tr>
		<td rowspan="2">.my-8</td>
		<td>margin-top: 2rem; /* 32px */</td>
	    </tr>
	    <tr>
		<td>margin-bottom: 2rem; /* 32px */</td>
	    </tr>
	    <tr>
		<td>.mt-8</td>
		<td>margin-top: 2rem; /* 32px */</td>
	    </tr>
	    <tr>
		<td>.mr-8</td>
		<td>margin-right: 2rem; /* 32px */</td>
	    </tr>
	    <tr>
		<td>.mb-8</td>
		<td>margin-bottom: 2rem; /* 32px */</td>
	    </tr>
	    <tr>
		<td>.ml-8</td>
		<td>margin-left: 2rem; /* 32px */</td>
	    </tr>
	</tbody>
    </table>
</Example>

### 基本使用

可以使用 `m{t|r|b|l}-*` 来设置元素的上、右、下、左 外边距。
可以使用 `mx-*` 来设置元素的横向外边距。
可以使用 `my-*` 来设置元素的纵向外边距。
可以使用 `m-*` 来设置元素的四周外边距。

<Example class="flex items-baseline space-x-4">
  <div class="bd bd-solid bd-primary w-20 rounded">
    <div class="ml-2 p-4 primary rounded">ml-2</div>
  </div>
  <div class="bd bd-solid bd-primary w-16 rounded">
    <div class="mt-6 p-4 primary rounded">mt-6</div>
  </div>
  <div class="bd bd-solid bd-primary w-22 rounded">
    <div class="mb-8 p-4 primary rounded">mb-8</div>
  </div>
 <div class="bd bd-solid bd-primary w-22 rounded">
    <div class="mr-4 p-4 primary rounded">mr-4</div>
  </div>
  <div class="bd bd-solid bd-primary w-22 rounded">
    <div class="mx-4 p-4 primary rounded">mx-4</div>
  </div>
  <div class="bd bd-solid bd-primary w-18 rounded">
    <div class="my-6 p-4 primary rounded">my-6</div>
  </div>
  <div class="bd bd-solid bd-primary w-24 rounded">
    <div class="m-4 p-4 primary rounded">m-4</div>
  </div>
</Example>

```html
<div class="ml-2 ...">ml-2</div>
<div class="mt-6 ...">mt-6</div>
<div class="mb-8 ...">mb-8</div>
<div class="mr-4 ...">mr-4</div>
<div class="mx-4 ...">mx-4</div>
<div class="my-6 ...">my-6</div>
<div class="m-4 ...">m-4</div>
```

## 内边距

<Example class="h-96 -overflow-y-auto">
    <table class="table">
        <thead>
            <tr>
                <th>修饰类</th>
                <th>定义</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>.p-0</td>
                <td>padding: 0px;</td>
            </tr>
            <tr>
                <td rowspan="2">.px-0</td>
                <td>padding-left: 0px;</td>
            </tr>
            <tr>
                <td>padding-right: 0px;</td>
            </tr>
            <tr>
                <td rowspan="2">.py-0</td>
                <td>padding-top: 0px;</td>
            </tr>
            <tr>
                <td>padding-bottop: 0px;</td>
            </tr>
            <tr>
                <td>.pt-0</td>
                <td>padding-top: 0px;</td>
            </tr>
            <tr>
                <td>.pr-0</td>
                <td>padding-right: 0px;</td>
            </tr>
            <tr>
                <td>.pb-0</td>
                <td>padding-bottop: 0px;</td>
            </tr>
            <tr>
                <td>.pl-0</td>
                <td>padding-left: 0px;</td>
            </tr>
            <tr>
                <td>.p-px</td>
                <td>padding: 1px;</td>
            </tr>
            <tr>
                <td rowspan="2">.px-px</td>
                <td>padding-left: 1px;</td>
            </tr>
            <tr>
                <td>padding-right: 1px;</td>
            </tr>
            <tr>
                <td rowspan="2">.py-px</td>
                <td>padding-top: 1px;</td>
            </tr>
            <tr>
                <td>padding-bottop: 1px;</td>
            </tr>
            <tr>
                <td>.pt-px</td>
                <td>padding-top: 1px;</td>
            </tr>
            <tr>
                <td>.pr-px</td>
                <td>padding-right: 1px;</td>
            </tr>
            <tr>
                <td>.pb-px</td>
                <td>padding-bottop: 1px;</td>
            </tr>
            <tr>
                <td>.pl-px</td>
                <td>padding-left: 1px;</td>
            </tr>
            <tr>
                <td>.p-0.5</td>
                <td>padding: 0.125rep; /* 2px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-0.5</td>
                <td>padding-left: 0.125rep; /* 2px */</td>
            </tr>
            <tr>
                <td>padding-right: 0.125rep; /* 2px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-0.5</td>
                <td>padding-top: 0.125rep; /* 2px */</td>
            </tr>
            <tr>
                <td>padding-bottop: 0.125rep; /* 2px */</td>
            </tr>
            <tr>
                <td>.pt-0.5</td>
                <td>padding-top: 0.125rep; /* 2px */</td>
            </tr>
            <tr>
                <td>.pr-0.5</td>
                <td>padding-right: 0.125rep; /* 2px */</td>
            </tr>
            <tr>
                <td>.pb-0.5</td>
                <td>padding-bottop: 0.125rep; /* 2px */</td>
            </tr>
            <tr>
                <td>.pl-0.5</td>
                <td>padding-left: 0.125rep; /* 2px */</td>
            </tr>
            <tr>
                <td>.p-1</td>
                <td>padding: 0.25rep; /* 4px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-1</td>
                <td>padding-left: 0.25rep; /* 4px */</td>
            </tr>
            <tr>
                <td>padding-right: 0.25rep; /* 4px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-1</td>
                <td>padding-top: 0.25rep; /* 4px */</td>
            </tr>
            <tr>
                <td>padding-bottop: 0.25rep; /* 4px */</td>
            </tr>
            <tr>
                <td>.pt-1</td>
                <td>padding-top: 0.25rep; /* 4px */</td>
            </tr>
            <tr>
                <td>.pr-1</td>
                <td>padding-right: 0.25rep; /* 4px */</td>
            </tr>
            <tr>
                <td>.pb-1</td>
                <td>padding-bottop: 0.25rep; /* 4px */</td>
            </tr>
            <tr>
                <td>.pl-1</td>
                <td>padding-left: 0.25rep; /* 4px */</td>
            </tr>
            <tr>
                <td>.p-1.5</td>
                <td>padding: 0.375rep; /* 6px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-1.5</td>
                <td>padding-left: 0.375rep; /* 6px */</td>
            </tr>
            <tr>
                <td>padding-right: 0.375rep; /* 6px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-1.5</td>
                <td>padding-top: 0.375rep; /* 6px */</td>
            </tr>
            <tr>
                <td>padding-bottop: 0.375rep; /* 6px */</td>
            </tr>
            <tr>
                <td>.pt-1.5</td>
                <td>padding-top: 0.375rep; /* 6px */</td>
            </tr>
            <tr>
                <td>.pr-1.5</td>
                <td>padding-right: 0.375rep; /* 6px */</td>
            </tr>
            <tr>
                <td>.pb-1.5</td>
                <td>padding-bottop: 0.375rep; /* 6px */</td>
            </tr>
            <tr>
                <td>.pl-1.5</td>
                <td>padding-left: 0.375rep; /* 6px */</td>
            </tr>
            <tr>
                <td>.p-2</td>
                <td>padding: 0.5rep; /* 8px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-2</td>
                <td>padding-left: 0.5rep; /* 8px */</td>
            </tr>
            <tr>
                <td>padding-right: 0.5rep; /* 8px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-2</td>
                <td>padding-top: 0.5rep; /* 8px */</td>
            </tr>
            <tr>
                <td>padding-bottop: 0.5rep; /* 8px */</td>
            </tr>
            <tr>
                <td>.pt-2</td>
                <td>padding-top: 0.5rep; /* 8px */</td>
            </tr>
            <tr>
                <td>.pr-2</td>
                <td>padding-right: 0.5rep; /* 8px */</td>
            </tr>
            <tr>
                <td>.pb-2</td>
                <td>padding-bottop: 0.5rep; /* 8px */</td>
            </tr>
            <tr>
                <td>.pl-2</td>
                <td>padding-left: 0.5rep; /* 8px */</td>
            </tr>
            <tr>
                <td>.p-2.5</td>
                <td>padding: 0.625rep; /* 10px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-2.5</td>
                <td>padding-left: 0.625rep; /* 10px */</td>
            </tr>
            <tr>
                <td>padding-right: 0.625rep; /* 10px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-2.5</td>
                <td>padding-top: 0.625rep; /* 10px */</td>
            </tr>
            <tr>
                <td>padding-bottop: 0.625rep; /* 10px */</td>
            </tr>
            <tr>
                <td>.pt-2.5</td>
                <td>padding-top: 0.625rep; /* 10px */</td>
            </tr>
            <tr>
                <td>.pr-2.5</td>
                <td>padding-right: 0.625rep; /* 10px */</td>
            </tr>
            <tr>
                <td>.pb-2.5</td>
                <td>padding-bottop: 0.625rep; /* 10px */</td>
            </tr>
            <tr>
                <td>.pl-2.5</td>
                <td>padding-left: 0.625rep; /* 10px */</td>
            </tr>
            <tr>
                <td>.p-3</td>
                <td>padding: 0.75rep; /* 12px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-3</td>
                <td>padding-left: 0.75rep; /* 12px */</td>
            </tr>
            <tr>
                <td>padding-right: 0.75rep; /* 12px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-3</td>
                <td>padding-top: 0.75rep; /* 12px */</td>
            </tr>
            <tr>
                <td>padding-bottop: 0.75rep; /* 12px */</td>
            </tr>
            <tr>
                <td>.pt-3</td>
                <td>padding-top: 0.75rep; /* 12px */</td>
            </tr>
            <tr>
                <td>.pr-3</td>
                <td>padding-right: 0.75rep; /* 12px */</td>
            </tr>
            <tr>
                <td>.pb-3</td>
                <td>padding-bottop: 0.75rep; /* 12px */</td>
            </tr>
            <tr>
                <td>.pl-3</td>
                <td>padding-left: 0.75rep; /* 12px */</td>
            </tr>
            <tr>
                <td>.p-3.5</td>
                <td>padding: 0.875rep; /* 14px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-3.5</td>
                <td>padding-left: 0.875rep; /* 14px */</td>
            </tr>
            <tr>
                <td>padding-right: 0.875rep; /* 14px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-3.5</td>
                <td>padding-top: 0.875rep; /* 14px */</td>
            </tr>
            <tr>
                <td>padding-bottop: 0.875rep; /* 14px */</td>
            </tr>
            <tr>
                <td>.pt-3.5</td>
                <td>padding-top: 0.875rep; /* 14px */</td>
            </tr>
            <tr>
                <td>.pr-3.5</td>
                <td>padding-right: 0.875rep; /* 14px */</td>
            </tr>
            <tr>
                <td>.pb-3.5</td>
                <td>padding-bottop: 0.875rep; /* 14px */</td>
            </tr>
            <tr>
                <td>.pl-3.5</td>
                <td>padding-left: 0.875rep; /* 14px */</td>
            </tr>
            <tr>
                <td>.p-4</td>
                <td>padding: 1rep; /* 16px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-4</td>
                <td>padding-left: 1rep; /* 16px */</td>
            </tr>
            <tr>
                <td>padding-right: 1rep; /* 16px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-4</td>
                <td>padding-top: 1rep; /* 16px */</td>
            </tr>
            <tr>
                <td>padding-bottop: 1rep; /* 16px */</td>
            </tr>
            <tr>
                <td>.pt-4</td>
                <td>padding-top: 1rep; /* 16px */</td>
            </tr>
            <tr>
                <td>.pr-4</td>
                <td>padding-right: 1rep; /* 16px */</td>
            </tr>
            <tr>
                <td>.pb-4</td>
                <td>padding-bottop: 1rep; /* 16px */</td>
            </tr>
            <tr>
                <td>.pl-4</td>
                <td>padding-left: 1rep; /* 16px */</td>
            </tr>
            <tr>
                <td>.p-5</td>
                <td>padding: 1.25rep; /* 20px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-5</td>
                <td>padding-left: 1.25rep; /* 20px */</td>
            </tr>
            <tr>
                <td>padding-right: 1.25rep; /* 20px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-5</td>
                <td>padding-top: 1.25rep; /* 20px */</td>
            </tr>
            <tr>
                <td>padding-bottop: 1.25rep; /* 20px */</td>
            </tr>
            <tr>
                <td>.pt-5</td>
                <td>padding-top: 1.25rep; /* 20px */</td>
            </tr>
            <tr>
                <td>.pr-5</td>
                <td>padding-right: 1.25rep; /* 20px */</td>
            </tr>
            <tr>
                <td>.pb-5</td>
                <td>padding-bottop: 1.25rep; /* 20px */</td>
            </tr>
            <tr>
                <td>.pl-5</td>
                <td>padding-left: 1.25rep; /* 20px */</td>
            </tr>
            <tr>
                <td>.p-6</td>
                <td>padding: 1.5rep; /* 24px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-6</td>
                <td>padding-left: 1.5rep; /* 24px */</td>
            </tr>
            <tr>
                <td>padding-right: 1.5rep; /* 24px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-6</td>
                <td>padding-top: 1.5rep; /* 24px */</td>
            </tr>
            <tr>
                <td>padding-bottop: 1.5rep; /* 24px */</td>
            </tr>
            <tr>
                <td>.pt-6</td>
                <td>padding-top: 1.5rep; /* 24px */</td>
            </tr>
            <tr>
                <td>.pr-6</td>
                <td>padding-right: 1.5rep; /* 24px */</td>
            </tr>
            <tr>
                <td>.pb-6</td>
                <td>padding-bottop: 1.5rep; /* 24px */</td>
            </tr>
            <tr>
                <td>.pl-6</td>
                <td>padding-left: 1.5rep; /* 24px */</td>
            </tr>
            <tr>
                <td>.p-7</td>
                <td>width: 7rep; /* 112px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-7</td>
                <td>padding-left: 1.75rep; /* 28px */</td>
            </tr>
            <tr>
                <td>padding-right: 1.75rep; /* 28px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-7</td>
                <td>padding-left: 1.75rep; /* 28px */</td>
            </tr>
            <tr>
                <td>padding-right: 1.75rep; /* 28px */</td>
            </tr>
            <tr>
                <td>.pt-7</td>
                <td>padding-top: 1.75rep; /* 28px */</td>
            </tr>
            <tr>
                <td>.pr-7</td>
                <td>padding-right: 1.75rep; /* 28px */</td>
            </tr>
            <tr>
                <td>.pb-7</td>
                <td>padding-bottop: 1.75rep; /* 28px */</td>
            </tr>
            <tr>
                <td>.pl-7</td>
                <td>padding-left: 1.75rep; /* 28px */</td>
            </tr>
            <tr>
                <td>.p-8</td>
                <td>padding: 2rep; /* 32px */</td>
            </tr>
            <tr>
                <td rowspan="2">.px-8</td>
                <td>padding-left: 2rep; /* 32px */</td>
            </tr>
            <tr>
                <td>padding-right: 2rep; /* 32px */</td>
            </tr>
            <tr>
                <td rowspan="2">.py-8</td>
                <td>padding-top: 2rep; /* 32px */</td>
            </tr>
            <tr>
                <td>padding-bottop: 2rep; /* 32px */</td>
            </tr>
            <tr>
                <td>.pt-8</td>
                <td>padding-top: 2rep; /* 32px */</td>
            </tr>
            <tr>
                <td>.pr-8</td>
                <td>padding-right: 2rep; /* 32px */</td>
            </tr>
            <tr>
                <td>.pb-8</td>
                <td>padding-bottop: 2rep; /* 32px */</td>
            </tr>
            <tr>
                <td>.pl-8</td>
                <td>padding-left: 2rep; /* 32px */</td>
            </tr>
        </tbody>
    </table>
</Example>

### 基本使用

可以使用 `p{t|r|b|l}-*` 来设置元素的上、右、下、左 内边距。
可以使用 `px-*` 来设置元素的横向内边距。
可以使用 `py-*` 来设置元素的纵向内边距。
可以使用 `p-*` 来设置元素的四周内边距。

<Example class="flex items-baseline space-x-4">
  <div class="primary w-20 rounded pl-2">
    <div class="bd bd-solid bd-canvas p-4 rounded">pl-2</div>
  </div>
  <div class="primary w-16 rounded pt-6">
    <div class="bd bd-solid bd-canvas p-4 rounded">pt-6</div>
  </div>
  <div class="primary w-22 rounded pb-8">
    <div class="bd bd-solid bd-canvas p-4 rounded">pb-8</div>
  </div>
 <div class="primary w-22 rounded pr-4">
    <div class="bd bd-solid bd-canvas p-4 rounded">pr-4</div>
  </div>
  <div class="primary w-22 rounded px-4">
    <div class="bd bd-solid bd-canvas p-4 rounded">px-4</div>
  </div>
  <div class="primary w-18 rounded py-6">
    <div class="bd bd-solid bd-canvas p-4 rounded">py-6</div>
  </div>
  <div class="primary w-22 rounded p-4">
    <div class="bd bd-solid bd-canvas p-4 rounded">p-4</div>
  </div>
</Example>

```html
<div class="pl-2 ...">pl-2</div>
<div class="pt-6 ...">pt-6</div>
<div class="pb-8 ...">pb-8</div>
<div class="pr-4 ...">pr-4</div>
<div class="px-4 ...">px-4</div>
<div class="py-6 ...">py-6</div>
<div class="p-4 ...">p-4</div>
```

## 子元素间距

<Example class="h-96 -overflow-y-auto">
    <table class="table">
        <thead>
            <tr>
                <th>修饰类</th>
                <th>定义</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>.space-x-0</td>
                <td>margin-left: 0px;</td>
            </tr>
            <tr>
                <td>.space-y-0</td>
                <td>margin-top: 0px;</td>
            </tr>
            <tr>
                <td>.space-x-0.5</td>
                <td>margin-left: 0.125rem; /* 2px */</td>
            </tr>
            <tr>
                <td>.space-y-0.5</td>
                <td>margin-top: 0.125rem; /* 2px */</td>
            </tr>
            <tr>
                <td>.space-x-1</td>
                <td>margin-left: 0.25rem; /* 4px */</td>
            </tr>
            <tr>
                <td>.space-y-1</td>
                <td>margin-top: 0.25rem; /* 4px */</td>
            </tr>
            <tr>
                <td>.space-x-1.5</td>
                <td>margin-left: 0.375rem; /* 6px */</td>
            </tr>
            <tr>
                <td>.space-y-1.5</td>
                <td>margin-top: 0.375rem; /* 6px */</td>
            </tr>
            <tr>
                <td>.space-x-2</td>
                <td>margin-left: 0.5rem; /* 8px */</td>
            </tr>
            <tr>
                <td>.space-y-2</td>
                <td>margin-top: 0.5rem; /* 8px */</td>
            </tr>
            <tr>
                <td>.space-x-2.5</td>
                <td>margin-left: 0.625rem; /* 10px */</td>
            </tr>
            <tr>
                <td>.space-y-2.5</td>
                <td>margin-top: 0.625rem; /* 10px */</td>
            </tr>
            <tr>
                <td>.space-x-3</td>
                <td>margin-left: 0.75rem; /* 12px */</td>
            </tr>
            <tr>
                <td>.space-y-3</td>
                <td>margin-top: 0.75rem; /* 12px */</td>
            </tr>
            <tr>
                <td>.space-x-3.5</td>
                <td>margin-left: 0.875rem; /* 14px */</td>
            </tr>
            <tr>
                <td>.space-y-3.5</td>
                <td>margin-top: 0.875rem; /* 14px */</td>
            </tr>
            <tr>
                <td>.space-x-4</td>
                <td>margin-left: 1rem; /* 16px */</td>
            </tr>
            <tr>
                <td>.space-y-4</td>
                <td>margin-top: 1rem; /* 16px */</td>
            </tr>
            <tr>
                <td>.space-x-5</td>
                <td>margin-left: 1.25rem; /* 20px */</td>
            </tr>
            <tr>
                <td>.space-y-5</td>
                <td>margin-top: 1.25rem; /* 20px */</td>
            </tr>
            <tr>
                <td>.space-x-6</td>
                <td>margin-left: 1.5rem; /* 24px */</td>
            </tr>
            <tr>
                <td>.space-y-6</td>
                <td>margin-top: 1.5rem; /* 24px */</td>
            </tr>
            <tr>
                <td>.space-x-7</td>
                <td>margin-left: 1.75rem; /* 28px */</td>
            </tr>
            <tr>
                <td>.space-y-7</td>
                <td>margin-top: 1.75rem; /* 28px */</td>
            </tr>
            <tr>
                <td>.space-x-8</td>
                <td>margin-left: 2rem; /* 32px */</td>
            </tr>
            <tr>
                <td>.space-y-8</td>
                <td>margin-top: 2rem; /* 32px */</td>
            </tr>
        </tbody>
    </table>
</Example>

### 基本用法

使用 `space-x-*` 来设置元素横向间距。

<Example>
    <div class="flex space-x-4">
        <div class="primary rounded p-4">01</div>
        <div class="primary rounded p-4">02</div>
        <div class="primary rounded p-4">03</div>
    </div>
</Example>

```html
<div class="flex space-x-4">
    <div>01</div>
    <div>02</div>
    <div>03</div>
</div>
```

使用 `space-y-*` 来设置元素纵向间距。

<Example>
    <div class="flex -flex-col space-y-4">
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
