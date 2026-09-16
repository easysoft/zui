# 远程查询

Query 辅助层使用 TanStack Query Core 管理请求、缓存和失效，通过只读 signal 提供结果，支持 Preact 类组件和 vanilla 控制器，全程无需 hooks。

## 基础用法

下面的示例使用模拟请求，可以直接运行；实际项目将 `queryFn` 替换为自己的请求函数。

```js
const client = new zui.QueryClient({
    defaultOptions: {queries: {staleTime: 30_000, retry: 1}},
});
client.mount();

const users = zui.createQuery(client, {
    queryKey: ['users'],
    queryFn: async () => [{id: 1, name: '张三'}],
});

const stop = zui.effect(() => {
    const {data, error, isPending, isFetching} = users.result.value;
    console.log({data, error, isPending, isFetching});
});
users.mount();

// 在所属页面或应用销毁时调用。
function destroy() {
    stop();
    users.destroy();
    client.unmount();
}
```

同一个应用身份范围共享一个稳定的 `QueryClient`，每个组件创建自己的查询实例。相同客户端、相同 `queryKey` 的查询共享缓存和正在执行的请求。`result` 是缓存状态的只读投影，不应直接修改 `result.value.data`；更新缓存使用 `client.setQueryData()` 或 `client.invalidateQueries()`。

## 查询生命周期

| 成员 | 行为 |
| --- | --- |
| `client` | 创建时绑定的客户端，只读 |
| `result` | 只读 signal，包含 TanStack Observer 的 `data`、`error`、`status`、`isPending`、`isFetching` 等结果 |
| `mount()` | 开始订阅，按查询配置自动加载；重复调用不会重复订阅 |
| `setOptions(options)` | 替换完整配置，重新应用客户端默认值；修改分页、筛选条件时也更新 `queryKey` |
| `refetch(options?)` | 显式请求，返回结果 Promise；挂载前也可调用，使用 `{throwOnError: true}` 让请求错误拒绝 Promise |
| `destroy()` | 释放当前实例的订阅和计时器，保留共享缓存；重复调用安全 |

创建查询不会自动订阅或请求。`destroy()` 后保留最后一次 signal 快照，实例不能再次挂载或更新配置；控制器的异步操作返回拒绝的 Promise，同步操作抛出错误。重新进入页面时创建新实例。

结果中的 `refetch`、`mutate`、分页等操作与控制器上的对应方法一致，也遵守销毁约定。

`QueryClient.mount()/unmount()` 管理焦点、网络恢复等全局事件；查询实例只管理自己的 Observer，不会自动挂载客户端，也不会在销毁时清空客户端缓存。最后一个订阅者销毁时，TanStack Query 可以通过请求实际使用的 `AbortSignal` 取消请求：

```js
const users = zui.createQuery(client, {
    queryKey: ['users', {page: 1}],
    queryFn: async ({signal}) => {
        const response = await fetch('/api/users?page=1', {signal});
        if (!response.ok) {
            throw new Error(`请求失败：${response.status}`);
        }
        return response.json();
    },
});
```

请求函数应返回数据或抛出错误，不要把失败转换为空数组或 `null`。辅助层沿用 Query Core 的缓存、重试、`enabled`、`select`、`placeholderData` 和轮询语义；不会自动把错误抛给 Preact Error Boundary，也不提供 Suspense 渲染。

## Preact Context

模块开发时从 `@zui/core` 导入。`QueryClientProvider` 用类组件管理客户端的挂载与卸载，`static contextType` 在类组件中取得客户端。以下示例使用模拟数据，可直接挂到页面中的容器：

```tsx
import {
    HElement,
    QueryClient,
    QueryClientContext,
    QueryClientProvider,
    createQuery,
    render,
    resolveQueryClient,
    type HElementProps,
} from '@zui/core';

type User = {id: number; name: string};
type Props = HElementProps & {projectId: number; queryClient?: QueryClient};

function usersOptions(projectId: number) {
    return {
        queryKey: ['project', projectId, 'users'] as const,
        queryFn: async (): Promise<User[]> => [
            {id: 1, name: `项目 ${projectId} 的成员`},
        ],
    };
}

class ProjectUsers extends HElement<Props> {
    static contextType = QueryClientContext;

    declare context: QueryClient | undefined;

    private _users = createQuery(
        resolveQueryClient(this.props.queryClient, this.context),
        usersOptions(this.props.projectId),
    );

    componentDidMount() {
        this._users.mount();
        super.componentDidMount();
    }

    componentDidUpdate(previousProps: Props) {
        if (previousProps.projectId !== this.props.projectId) {
            this._users.setOptions(usersOptions(this.props.projectId));
        }
    }

    componentWillUnmount() {
        this._users.destroy();
        super.componentWillUnmount();
    }

    protected _getChildren() {
        const {data, error, isPending, isFetching} = this._users.result.value;
        if (error) {
            return <p role="alert">{error.message}</p>;
        }
        if (isPending) {
            return <p>加载中…</p>;
        }
        return <ul aria-busy={isFetching}>
            {data.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>;
    }
}

const client = new QueryClient({defaultOptions: {queries: {staleTime: 30_000}}});
const container = document.createElement('div');
document.body.append(container);
render(
    <QueryClientProvider client={client}>
        <ProjectUsers projectId={1} />
    </QueryClientProvider>,
    container,
);

// 页面销毁：render(null, container); container.remove();
```

`resolveQueryClient(explicitClient?, contextClient?)` 按“显式客户端 → Context → 抛出缺失错误”解析，不创建隐式全局客户端。显式覆盖使用的客户端仍应由应用或对应 Provider 管理生命周期。

`HElement` 和 `HElementSignals` 会透传构造函数的 context，因此没有自定义构造函数时，可以直接在类字段初始化中使用 `this.context`。子类如有自定义构造函数，须把第二个参数传给 `super(props, context)`；中间基类也须继续透传。

函数组件可以通过 `QueryClientContext.Consumer` 读取客户端，再把它交给拥有生命周期的子组件；不要在每次 render 的 Consumer 回调内创建查询或发起请求：

```tsx
<QueryClientContext.Consumer>
    {client => <ProjectUsers projectId={1} queryClient={resolveQueryClient(client)} />}
</QueryClientContext.Consumer>
```

多个 Provider 可以共享同一个客户端。Provider 更换 `client` 时会配对卸载旧客户端、挂载新客户端，但已创建的查询实例仍绑定原客户端。切换账号或服务端时，建议创建对应客户端并用身份标识作为 Provider 的 `key`，让子组件重建查询：

```tsx
<QueryClientProvider key={identityKey} client={identityClient}>
    <ProjectUsers projectId={1} />
</QueryClientProvider>
```

也可以在组件更新时主动销毁旧查询并创建新查询。独立的 Preact 渲染根不会自动继承 Context；通过 `ComponentFromReact` 或 Web Component 创建的独立渲染树，需要显式传入客户端或在该树内提供 Provider。

## 修改数据

`createMutation()` 创建时不发送请求。`mutate(variables, options?)` 显式执行修改，并在需要时自动开始订阅；返回 Promise，请处理其拒绝。`reset()` 将结果恢复到 idle，`setOptions()` 和 `destroy()` 与查询使用同样的生命周期约定。

```js
const renameUser = zui.createMutation(client, {
    mutationFn: async ({id, name}) => {
        const response = await fetch(`/api/users/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name}),
        });
        if (!response.ok) {
            throw new Error(`保存失败：${response.status}`);
        }
    },
    onSuccess: () => client.invalidateQueries({queryKey: ['users']}),
});

try {
    await renameUser.mutate({id: 1, name: '李四'});
} catch (error) {
    console.error(error);
} finally {
    renameUser.destroy();
}
```

`onSuccess` 返回失效查询的 Promise 时，mutation 会等待重新查询完成。把共享缓存更新放在创建时的 mutation options 中；单次 `mutate()` 的回调遵循 TanStack 的最新观察者语义，销毁后不再触发。销毁或 `reset()` 不会取消已经发送到服务端的修改，创建时的缓存更新回调仍会执行。

## 无限分页

`createInfiniteQuery()` 额外提供 `fetchNextPage()`、`fetchPreviousPage()`，结果包含 `data.pages`、`hasNextPage`、`isFetchingNextPage` 等分页状态。普通查询和无限查询应使用不同的 key。

```js
const pages = zui.createInfiniteQuery(client, {
    queryKey: ['users', 'infinite'],
    initialPageParam: 1,
    queryFn: async ({pageParam, signal}) => {
        const response = await fetch(`/api/users?page=${pageParam}`, {signal});
        if (!response.ok) {
            throw new Error(`请求失败：${response.status}`);
        }
        return response.json(); // 例如 {items: [], page: 1, hasMore: true}
    },
    getNextPageParam: last => last.hasMore ? last.page + 1 : undefined,
});
pages.mount();

// 首次加载完成后，根据 hasNextPage 决定是否加载更多。
// await pages.fetchNextPage();
// 页面销毁时：pages.destroy();
```

## 类型与应用边界

公开入口还提供 `QueryController`、`InfiniteQueryController`、`MutationController`、`QueryClientProviderProps`，以及常用 Query Core options、result、query key 和请求上下文类型。通常由 `queryFn`、`select`、`mutationFn` 和 `initialPageParam` 自动推导数据与参数类型。

领域模块负责 query key、请求函数、缓存时长和修改后的失效关系；组件只持有查询实例并读取 signal。所有影响响应的参数与身份范围应进入 key；草稿、选中项等本地状态继续使用普通 signal。Query 辅助层不替代应用的 HTTP、鉴权或流式连接管理。

行为细节参考 [TanStack Query Core 的 QueryObserver](https://tanstack.com/query/latest/docs/framework/react/reference/classes/QueryObserver)、[QueryClient](https://tanstack.com/query/latest/docs/framework/react/reference/classes/QueryClient) 与 [Preact Context](https://preactjs.com/guide/v10/context/)。
