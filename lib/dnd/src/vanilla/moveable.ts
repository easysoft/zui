import {Component, $} from '@zui/core';
import {DistanceRect, MoveableOptions, MoveableState, MoveableStrategy, MoveableUpdateInfo} from '../types';

/** 匹配所有标记了 moveable 属性的元素。Matches all elements with the moveable attribute. */
const MOVEABLE_SELECTOR = '[moveable="true"]';

/** 支持区域限制的移动策略。Movement strategies that support area constraint. */
const CONSTRAINABLE_STRATEGIES: MoveableStrategy[] = ['position', 'transform'];

/**
 * 基于鼠标事件的元素移动组件。
 * 支持 position、transform、scroll 三种移动策略。
 *
 * Mouse-event-driven element movement component.
 * Supports position, transform, and scroll movement strategies.
 */
export class Moveable extends Component<MoveableOptions> {
    static NAME = 'Moveable';

    static DEFAULT: Partial<MoveableOptions> = {
        selector: MOVEABLE_SELECTOR,
        hasMovingClass: 'has-moving',
        movingClass: 'is-moving',
        move: true,
        container: 'window',
    };

    /** 当前移动状态，未在移动时为 undefined。The current move state; undefined when idle. */
    protected _state?: MoveableState;

    /** 最近一次被移动的元素，拖动结束后仍保留，供 update() 区域重排使用。The most recently moved element, kept after a move for update() re-clamping. */
    protected _restTarget?: HTMLElement;

    /** 最近一次被移动元素使用的移动策略。The movement strategy used by the most recently moved element. */
    protected _restStrategy?: MoveableStrategy;

    /** 用于取消动画帧的 ID。The ID for canceling the animation frame. */
    protected declare _raf: number;

    /** 获取当前移动状态。Get the current move state. */
    get state() {
        return this._state;
    }

    /** 获取正在被移动的目标元素。Get the element currently being moved. */
    get moveElement() {
        return this._state?.target;
    }

    /**
     * 初始化：绑定 mousedown 事件以启动移动。
     * Initialize: bind the mousedown event to start moving.
     */
    async afterInit() {
        this.on('mousedown', this._handleMouseDown);
    }

    /**
     * 销毁组件，清理状态并移除事件监听。
     * Destroy the component, clean up state and remove event listeners.
     */
    destroy(): void {
        this._clean();
        $(document).off(this.namespace);
        super.destroy();
    }

    protected _setState(event: MouseEvent, target?: HTMLElement): boolean {
        let newState = {
            event,
            x: event.pageX,
            y: event.pageY,
        } as MoveableState;
        const oldState = this._state;
        if (target) {
            const $target = $(target);
            let strategy: MoveableStrategy;
            if (this.options.move === true) {
                const position = $target.css('position');
                strategy = (position === 'fixed' || position === 'absolute') ? 'position' : 'transform';
            } else {
                strategy = this.options.move || 'none';
            }

            const position = strategy === 'transform' ? Moveable.getTranslate(target) : (strategy === 'scroll' ? {left: target.scrollLeft, top: target.scrollTop} : $target.position()!);
            const clientRect = target.getBoundingClientRect();
            newState = $.extend(newState, {
                strategy,
                target,
                startX: newState.x,
                startY: newState.y,
                deltaX: 0,
                deltaY: 0,
                startLeft: position.left,
                startTop: position.top,
                left: position.left,
                top: position.top,
                scrollLeft: target.scrollLeft,
                scrollTop: target.scrollTop,
                startClientLeft: clientRect.left,
                startClientTop: clientRect.top,
                width: clientRect.width,
                height: clientRect.height,
            });
            this._restTarget = target;
            this._restStrategy = strategy;
        } else if (oldState) {
            const deltaX = newState.x - oldState.startX;
            const deltaY = newState.y - oldState.startY;
            let left = oldState.startLeft + deltaX;
            let top = oldState.startTop + deltaY;
            if (CONSTRAINABLE_STRATEGIES.includes(oldState.strategy)) {
                const clamped = this._clampToContainer(oldState, deltaX, deltaY);
                if (clamped) {
                    left = clamped.left;
                    top = clamped.top;
                }
            }
            newState = $.extend({}, oldState, newState, {
                deltaX,
                deltaY,
                left,
                top,
            });
        }

        const changeResult = this.options.onChange?.call(this, newState, oldState, event);
        if (changeResult === false) {
            return false;
        }
        if (changeResult) {
            newState = $.extend(newState, changeResult);
        }
        this._state = newState;
        this.update(newState);
        this.options.onMove?.call(this, event, newState);
        return true;
    }

    /**
     * 更新移动状态。
     * Update the moveable state.
     *
     * @param state 移动状态。Moveable state.
     * @returns
     */
    update(state?: MoveableState) {
        state = state || this._state;
        if (!state) {
            this._reclampRestTarget();
            return;
        }

        const {strategy, target: currentTarget} = state;
        const $target = $(currentTarget);
        let updateInfo: MoveableUpdateInfo = {};
        if (strategy === 'position') {
            updateInfo.style = {left: state.left, top: state.top};
        } else if (strategy === 'transform') {
            updateInfo.style = {transform: `translate(${state.left}px, ${state.top}px)`};
        } else if (strategy === 'scroll') {
            updateInfo.scrollLeft = currentTarget.scrollLeft - state.deltaX;
            updateInfo.scrollTop = currentTarget.scrollTop - state.deltaY;
        }

        const updateResult = this.options.onUpdate?.call(this, updateInfo, state);
        if (updateResult === false) {
            return;
        }
        if (updateResult) {
            updateInfo = $.extend(updateInfo, updateResult);
        }

        if (updateInfo.style) {
            $target.css(updateInfo.style);
        }
        if (updateInfo.scrollLeft !== undefined) {
            currentTarget.scrollLeft = updateInfo.scrollLeft;
        }
        if (updateInfo.scrollTop !== undefined) {
            currentTarget.scrollTop = updateInfo.scrollTop;
        }
    }

    /**
     * 处理 mousedown 事件：匹配目标元素和手柄，自动推断移动策略，
     * 初始化移动状态并绑定 mousemove/mouseup 事件。
     *
     * Handle mousedown: match target element and handle, auto-detect movement strategy,
     * initialize move state, and bind mousemove/mouseup events.
     */
    protected _handleMouseDown = (event: MouseEvent) => {
        const {options} = this;
        const {selector, handle, onMoveStart} = options;
        const $clickTarget = $(event.target as HTMLElement);
        const $moveElement = selector === 'self' ? this.$element : $clickTarget.closest(selector);

        if (this._state) {
            this._clean();
        }

        const moveElement = $moveElement[0];
        if (!moveElement || (handle && !$clickTarget.closest(handle).length)) {
            return;
        }

        if (onMoveStart && onMoveStart.call(this, event, moveElement) === false) {
            return;
        }

        $moveElement.attr('moveable', 'true');
        const {movingClass, hasMovingClass} = options;
        if (movingClass) {
            $moveElement.addClass(movingClass);
        }
        if (hasMovingClass) {
            this.$element.addClass(hasMovingClass);
        }

        event.preventDefault();
        if (!this._setState(event, moveElement)) {
            if (movingClass) {
                $moveElement.removeClass(movingClass);
            }
            if (hasMovingClass) {
                this.$element.removeClass(hasMovingClass);
            }
            return;
        }
        const {namespace} = this;
        $(document).off(namespace).on(`mousemove${namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${namespace}`, this._handleMouseUp.bind(this));
    };

    /**
     * 处理 mousemove 事件：执行持续移动。当鼠标按钮未被按下时忽略。
     * Handle mousemove: perform continuous movement. Ignored when no mouse button is pressed.
     */
    protected _handleMouseMove = (event: MouseEvent) => {
        const state = this._state;
        if (!state || !event.buttons) {
            return;
        }
        event.preventDefault();
        if (this._raf) {
            cancelAnimationFrame(this._raf);
        }
        this._raf = requestAnimationFrame(() => {
            this._raf = 0;
            this._setState(event);
        });
    };

    /**
     * 处理 mouseup 事件：触发 `onMoveEnd` 回调并执行清理。
     * Handle mouseup: fire the `onMoveEnd` callback and perform cleanup.
     */
    protected _handleMouseUp = (event: MouseEvent) => {
        if (!this._state) {
            return;
        }
        if (this._raf) {
            cancelAnimationFrame(this._raf);
            this._raf = 0;
        }
        this._setState(event);
        this.options.onMoveEnd?.call(this, event, this._state!);
        this._clean();
    };

    /**
     * 清理移动状态：移除全局事件监听、移除 CSS 类名、重置内部状态。
     * Clean up move state: remove global event listeners, remove CSS classes, reset internal state.
     */
    protected _clean() {
        $(document).off(this.namespace);
        const {hasMovingClass, movingClass} = this.options;
        if (hasMovingClass) {
            this.$element.removeClass(hasMovingClass);
        }
        const {moveElement} = this;
        if (moveElement) {
            const $moveElement = $(moveElement);
            if (movingClass) {
                $moveElement.removeClass(movingClass);
            }
        }
        if (this._raf) {
            cancelAnimationFrame(this._raf);
            this._raf = 0;
        }
        this._state = undefined;
    }

    /**
     * 解析 `container` 选项对应的区域矩形（视口坐标），并按 `containerPadding` 收缩（负值则向外扩展）。
     * Resolve the area rect (in viewport coordinates) for the `container` option, shrunk by `containerPadding` (negative values expand it outward).
     *
     * @returns 区域矩形，无法解析或不限制时返回 null。The area rect, or null when unconstrained or unresolvable.
     */
    protected _getContainerRect(): DistanceRect | null {
        const {container, containerPadding} = this.options;
        if (container === false || container === undefined) {
            return null;
        }

        let rect: {left: number; top: number; right: number; bottom: number} | undefined;
        if (container === 'window') {
            rect = {left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight};
        } else {
            let element: Element | null | undefined;
            if (container === 'self') {
                element = this.element;
            } else if (container === 'parent') {
                element = this.element.parentElement;
            } else if (typeof container === 'string') {
                element = document.querySelector(container);
            } else if (typeof (container as {getBoundingClientRect?: unknown}).getBoundingClientRect === 'function') {
                const box = (container as {getBoundingClientRect(): DOMRect}).getBoundingClientRect();
                rect = {left: box.left, top: box.top, right: box.right, bottom: box.bottom};
            }
            if (!rect && element) {
                const box = element.getBoundingClientRect();
                rect = {left: box.left, top: box.top, right: box.right, bottom: box.bottom};
            }
        }

        if (!rect) {
            return null;
        }

        const padding = Moveable.normalizePadding(containerPadding);
        return {
            left: rect.left + padding.left,
            top: rect.top + padding.top,
            right: rect.right - padding.right,
            bottom: rect.bottom - padding.bottom,
        };
    }

    /**
     * 基于起始状态与累计位移，计算被区域限制修正后的 left/top（视口 1:1 位移）。
     * Compute the area-constrained left/top from the start state and accumulated displacement (1:1 viewport movement).
     *
     * @param state  起始移动状态。The starting move state.
     * @param deltaX x 方向累计位移。Accumulated x displacement.
     * @param deltaY y 方向累计位移。Accumulated y displacement.
     * @returns 修正后的 left/top，无区域限制时返回 null。The constrained left/top, or null when unconstrained.
     */
    protected _clampToContainer(state: MoveableState, deltaX: number, deltaY: number): {left: number; top: number} | null {
        const rect = this._getContainerRect();
        if (!rect) {
            return null;
        }
        const {startClientLeft, startClientTop, width, height, startLeft, startTop} = state;
        const clientLeft = Moveable.clamp(startClientLeft + deltaX, rect.left, rect.right - width);
        const clientTop = Moveable.clamp(startClientTop + deltaY, rect.top, rect.bottom - height);
        return {
            left: startLeft + (clientLeft - startClientLeft),
            top: startTop + (clientTop - startClientTop),
        };
    }

    /**
     * 将最近一次被移动的元素按当前区域限制重新夹取到最近合法位置（用于区域变更后手动调用 update）。
     * Re-clamp the most recently moved element to the nearest valid position under the current area constraint (used when update is called after the area changes).
     */
    protected _reclampRestTarget() {
        const target = this._restTarget;
        const strategy = this._restStrategy;
        if (!target || !strategy || !CONSTRAINABLE_STRATEGIES.includes(strategy)) {
            return;
        }
        const rect = this._getContainerRect();
        if (!rect) {
            return;
        }

        const $target = $(target);
        const position = strategy === 'transform' ? Moveable.getTranslate(target) : $target.position()!;
        const clientRect = target.getBoundingClientRect();
        const clientLeft = Moveable.clamp(clientRect.left, rect.left, rect.right - clientRect.width);
        const clientTop = Moveable.clamp(clientRect.top, rect.top, rect.bottom - clientRect.height);
        if (clientLeft === clientRect.left && clientTop === clientRect.top) {
            return;
        }

        const left = position.left + (clientLeft - clientRect.left);
        const top = position.top + (clientTop - clientRect.top);
        this.update({
            strategy,
            target,
            startX: 0,
            startY: 0,
            deltaX: 0,
            deltaY: 0,
            startLeft: position.left,
            startTop: position.top,
            left,
            top,
            x: 0,
            y: 0,
            scrollLeft: target.scrollLeft,
            scrollTop: target.scrollTop,
            startClientLeft: clientRect.left,
            startClientTop: clientRect.top,
            width: clientRect.width,
            height: clientRect.height,
        } as MoveableState);
    }

    /**
     * 将 containerPadding 归一化为四边数值。允许负值，不做非负约束。
     * Normalize containerPadding into four side values. Negative values are allowed.
     *
     * @param padding 边距设置。The padding setting.
     * @returns 四边数值。The four side values.
     */
    static normalizePadding(padding?: number | Partial<DistanceRect>): DistanceRect {
        if (typeof padding === 'number') {
            return {left: padding, top: padding, right: padding, bottom: padding};
        }
        return {
            left: padding?.left ?? 0,
            top: padding?.top ?? 0,
            right: padding?.right ?? 0,
            bottom: padding?.bottom ?? 0,
        };
    }

    /**
     * 将数值夹取到 [min, max] 区间；当 min > max（元素大于区域）时对齐到 min。
     * Clamp a value into [min, max]; aligns to min when min > max (element larger than area).
     *
     * @param value 待夹取的数值。The value to clamp.
     * @param min   下界。The lower bound.
     * @param max   上界。The upper bound.
     * @returns 夹取后的数值。The clamped value.
     */
    static clamp(value: number, min: number, max: number): number {
        return Math.max(min, Math.min(value, max));
    }

    /**
     * 从元素的 computed transform 中解析 translate 偏移量。
     * Parse the translate offset from an element's computed transform matrix.
     *
     * @param element 目标 DOM 元素。The target DOM element.
     * @returns 包含 left 和 top 偏移量的对象。Object with left and top offsets.
     */
    static getTranslate(element: HTMLElement): {left: number; top: number} {
        const style = window.getComputedStyle(element);
        const transform = style.getPropertyValue('transform');
        if (transform === 'none') {
            return {left: 0, top: 0};
        }
        const matrix = transform.match(/^matrix\((.+)\)$/);
        if (!matrix) {
            return {left: 0, top: 0};
        }
        const values = matrix[1].split(', ');
        return {
            left: parseFloat(values[4]),
            top: parseFloat(values[5]),
        };
    }
}
