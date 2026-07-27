/**
 * 元素移动策略。
 * Strategy used to physically move an element on screen.
 *
 * - `'position'` — 通过修改 CSS `left`/`top` 属性移动（适用于 `absolute`/`fixed`/`relative` 定位元素）。
 *                  Move by updating CSS `left`/`top` (requires positioned element).
 * - `'transform'` — 通过修改 CSS `transform: translate()` 移动。
 *                   Move by updating CSS `transform: translate()`.
 * - `'scroll'`    — 通过调整容器 `scrollLeft`/`scrollTop` 实现滚动移动。
 *                   Move by adjusting container `scrollLeft`/`scrollTop`.
 * - `'none'`      — 不进行实际移动，仅触发回调（适用于自定义移动逻辑）。
 *                   No physical move; callbacks still fire (useful for custom move logic).
 */
export type MoveableStrategy = 'position' | 'transform' | 'scroll' | 'none';
