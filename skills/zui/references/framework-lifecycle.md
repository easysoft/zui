# Framework lifecycle integration

## Preserve one DOM owner

Render a stable, usually empty host from the application framework. Let ZUI own only that host's internal DOM. Keep framework-rendered children outside it unless the component explicitly documents a slot, portal, or content callback.

Create the ZUI instance after mount, update it through a verified public method, and destroy it before the host is removed. Guard against development-mode double mounting, route transitions, keyed replacements, and asynchronous imports finishing after unmount.

## React

- Hold the host in `useRef` and the instance in another ref.
- Create in `useEffect` or `useLayoutEffect` only when the host exists.
- Return cleanup that calls `destroy()` and clears the instance ref.
- Use a separate update effect only if the component documents incremental updates. Avoid destroy/recreate on every render unless required.
- Do not render React children into a subtree that a ZUI Preact-backed component replaces.
- Do not import a ZUI `/react` entry into React merely because of its name; verify that the release explicitly supports React.

## Vue

- Use a template ref, create in `onMounted`, and destroy in `onBeforeUnmount`.
- Update from a narrow `watch` only through the documented component method.
- Avoid Vue directives or reactive children inside ZUI-owned descendants.

## Svelte

- Create in `onMount` and return a destroy callback.
- Use a reactive update only after the instance exists and only through a supported method.
- Prefer an action wrapper when the same integration repeats; its `update` and `destroy` functions should mirror the ZUI lifecycle.

## Client-side routers and partial-page updates

Destroy instances before a view container is replaced. If the application inserts server-rendered fragments, run the verified ZUI scan helper on the containing subtree after insertion. Avoid scanning the entire document after every navigation because it can duplicate work or reset existing instances.

## SSR and hydration

Some ZUI entries access `window` or `document` during module evaluation. In SSR projects:

1. keep static CSS available to server-rendered markup when the framework permits it;
2. import browser-only JS inside the client lifecycle or through the framework's no-SSR mechanism;
3. instantiate only after hydration has produced the host;
4. render deterministic server markup and avoid letting ZUI rewrite it before hydration completes;
5. cancel or ignore late dynamic-import results after unmount.

Do not add a global `window` shim on the server to mask an SSR-unsafe package. Isolate the browser dependency instead.

## Options and callbacks

Avoid recreating large option objects or callbacks on every framework render when that triggers expensive ZUI updates. Stabilize them using the framework's normal mechanisms, but do not keep stale closures. When a callback must observe current application state, use the framework's supported state/ref pattern rather than reaching into ZUI internals.
