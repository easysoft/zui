import {Component, $} from '@zui/core';
import {
    bindDocumentMouseEvents,
    cancelMouseMoveFrame,
    clamp,
    getMatchingTargets,
    getTranslate,
    matchesHandle,
    normalizePadding,
    requestMouseMoveFrame,
    resolveContainerElement,
    resolveContainerRect,
    unbindDocumentMouseEvents,
} from '../helpers';
import {DistanceRect, MoveableAutoUpdateOptions, MoveableOptions, MoveableState, MoveableStrategy, MoveableUpdateInfo} from '../types';

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
    protected _raf = 0;

    /** autoUpdate 使用的 ResizeObserver。The ResizeObserver used by autoUpdate. */
    protected _resizeObserver?: ResizeObserver;

    /** autoUpdate 绑定到 window 的 scroll/resize 处理器。The scroll/resize handler bound to window by autoUpdate. */
    protected _autoUpdateHandler?: () => void;

    /** autoUpdate 的动画帧 ID（用于节流或 animationFrame 轮询）。The animation frame ID used by autoUpdate (for throttling or animationFrame polling). */
    protected _autoUpdateRaf = 0;

    /** 是否正在进行 animationFrame 轮询。Whether the animationFrame polling loop is running. */
    protected _autoUpdateFrameLoop = false;

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
        if (this.options.autoUpdate) {
            this.startAutoUpdate();
        }
    }

    /**
     * 销毁组件，清理状态并移除事件监听。
     * Destroy the component, clean up state and remove event listeners.
     */
    destroy(): void {
        this.stopAutoUpdate();
        this._clean();
        unbindDocumentMouseEvents(this.namespace);
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
            const strategy = this._resolveStrategy(target);

            const position = strategy === 'transform' ? getTranslate(target) : (strategy === 'scroll' ? {left: target.scrollLeft, top: target.scrollTop} : $target.position()!);
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
            this._syncAutoUpdateTargets();
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
            this._reclampByOption();
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
            // Base the scroll offset on the scroll position captured at move start, not the live (already-updated) value, to avoid accelerating drift.
            updateInfo.scrollLeft = state.scrollLeft - state.deltaX;
            updateInfo.scrollTop = state.scrollTop - state.deltaY;
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
        if (!moveElement || !matchesHandle($clickTarget, handle)) {
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
        bindDocumentMouseEvents(this.namespace, this._handleMouseMove, this._handleMouseUp);
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
        this._raf = requestMouseMoveFrame(this._raf, () => {
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
        this._raf = cancelMouseMoveFrame(this._raf);
        this._setState(event);
        this.options.onMoveEnd?.call(this, event, this._state!);
        this._clean();
    };

    /**
     * 清理移动状态：移除全局事件监听、移除 CSS 类名、重置内部状态。
     * Clean up move state: remove global event listeners, remove CSS classes, reset internal state.
     */
    protected _clean() {
        unbindDocumentMouseEvents(this.namespace);
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
        this._raf = cancelMouseMoveFrame(this._raf);
        this._state = undefined;
    }

    /**
     * 推断目标元素的移动策略：move 为 true 时按其定位方式自动判断，否则使用显式指定的策略。
     * Resolve the movement strategy for the target: auto-detect from its positioning when move is true, otherwise use the explicit strategy.
     *
     * @param target 目标 DOM 元素。The target DOM element.
     * @returns 移动策略。The movement strategy.
     */
    protected _resolveStrategy(target: HTMLElement): MoveableStrategy {
        if (this.options.move === true) {
            const position = $(target).css('position');
            return (position === 'fixed' || position === 'absolute') ? 'position' : 'transform';
        }
        return this.options.move || 'none';
    }

    /**
     * 解析 `container` 选项对应的元素（当可解析为 DOM 元素时）。
     * Resolve the element for the `container` option when it can be resolved to a DOM element.
     *
     * @returns 容器元素，无法解析为元素（如 window、普通对象、false）时返回 null。The container element, or null when it does not resolve to an element (e.g. window, a plain object, or false).
     */
    protected _getContainerElement(): Element | null {
        return resolveContainerElement(this.options.container, this.element);
    }

    /**
     * 解析 `container` 选项对应的区域矩形（视口坐标），并按 `containerPadding` 收缩（负值则向外扩展）。
     * Resolve the area rect (in viewport coordinates) for the `container` option, shrunk by `containerPadding` (negative values expand it outward).
     *
     * @param target 用于解析 `containerPadding` 函数的目标元素。The target element passed to a `containerPadding` function.
     * @param state  用于解析 `containerPadding` 函数的移动状态。The move state passed to a `containerPadding` function.
     * @returns 区域矩形，无法解析或不限制时返回 null。The area rect, or null when unconstrained or unresolvable.
     */
    protected _getContainerRect(target?: HTMLElement, state?: MoveableState): DistanceRect | null {
        return resolveContainerRect(this.options.container, this._resolveContainerPadding(target, state), this.element);
    }

    /**
     * 解析 `containerPadding` 选项：为函数时以当前被移动元素与移动状态调用，否则原样返回。
     * Resolve the `containerPadding` option: call it with the currently moved element and move state when it is a function, otherwise return it as-is.
     *
     * @param target 目标元素，缺省时回退到最近移动的元素或根元素。The target element, falling back to the most recently moved element or the root element.
     * @param state  移动状态，缺省时回退到当前状态。The move state, falling back to the current state.
     * @returns 归一化前的边距值。The padding value before normalization.
     */
    protected _resolveContainerPadding(target?: HTMLElement, state?: MoveableState): number | Partial<DistanceRect> | undefined {
        const {containerPadding} = this.options;
        if (typeof containerPadding === 'function') {
            return containerPadding(target ?? this._restTarget ?? this.element, state ?? this._state);
        }
        return containerPadding;
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
        const rect = this._getContainerRect(state.target, state);
        if (!rect) {
            return null;
        }
        const {startClientLeft, startClientTop, width, height, startLeft, startTop} = state;
        const clientLeft = clamp(startClientLeft + deltaX, rect.left, rect.right - width);
        const clientTop = clamp(startClientTop + deltaY, rect.top, rect.bottom - height);
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
        if (this._restTarget && this._restStrategy) {
            this._reclampElement(this._restTarget, this._restStrategy);
        }
    }

    /**
     * 按 autoUpdate 的 targets 设置选择重排范围：'all' 重排所有匹配 selector 的元素，否则仅重排最近移动的元素。
     * Choose the re-clamp scope by the autoUpdate targets setting: 'all' re-clamps every element matching the selector, otherwise only the most recently moved element.
     */
    protected _reclampByOption() {
        if (this._resolveAutoUpdateOptions()?.targets === 'all') {
            this._reclampAllTargets();
        } else {
            this._reclampRestTarget();
        }
    }

    /**
     * 重排所有匹配 selector 的元素到当前区域限制内的最近合法位置。
     * Re-clamp every element matching the selector to the nearest valid position within the current area constraint.
     */
    protected _reclampAllTargets() {
        /* 仅用于判断容器是否可解析；实际区域按每个元素解析，以支持 containerPadding 为函数的场景。Only used to check whether the container resolves; the actual rect is resolved per element to support a function containerPadding. */
        if (!this._getContainerRect()) {
            return;
        }
        this._getMatchingTargets().forEach((target) => {
            this._reclampElement(target, this._resolveStrategy(target));
        });
    }

    /**
     * 将单个元素按区域限制重新夹取到最近合法位置。
     * Re-clamp a single element to the nearest valid position within the area constraint.
     *
     * @param target   目标元素。The target element.
     * @param strategy 移动策略。The movement strategy.
     * @param rect     预先解析的区域矩形，缺省时内部解析。A pre-resolved area rect; resolved internally when omitted.
     */
    protected _reclampElement(target: HTMLElement, strategy: MoveableStrategy, rect?: DistanceRect | null) {
        if (!CONSTRAINABLE_STRATEGIES.includes(strategy)) {
            return;
        }
        rect = rect ?? this._getContainerRect(target);
        if (!rect) {
            return;
        }

        const $target = $(target);
        const position = strategy === 'transform' ? getTranslate(target) : $target.position()!;
        const clientRect = target.getBoundingClientRect();
        const clientLeft = clamp(clientRect.left, rect.left, rect.right - clientRect.width);
        const clientTop = clamp(clientRect.top, rect.top, rect.bottom - clientRect.height);
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
     * 获取所有匹配 selector 的目标元素（selector 为 "self" 时返回根元素）。
     * Get all target elements matching the selector (returns the root element when selector is "self").
     *
     * @returns 目标元素数组。The array of target elements.
     */
    protected _getMatchingTargets(): HTMLElement[] {
        return getMatchingTargets(this.element, this.options.selector);
    }

    /**
     * 开启自动更新：监听容器区域与目标元素的尺寸/位置变化，自动按当前约束把最近移动的元素重排到最近合法位置。
     * 若已开启会先停止再重新开启。仅对 "position"/"transform" 策略生效。
     *
     * Start auto-updating: watch the container area and target size/position, and re-clamp the most recently moved element under the current constraint.
     * Restarts if already running. Only applies to the "position"/"transform" strategies.
     */
    startAutoUpdate() {
        this.stopAutoUpdate();
        const config = this._resolveAutoUpdateOptions();
        if (!config) {
            return;
        }

        /* selector 为 self 时，即便尚未拖动过也把根元素纳入约束。When selector is 'self', constrain the root element even before any drag. */
        if (!this._restTarget && this.options.selector === 'self') {
            const element = this.element;
            this._restTarget = element;
            this._restStrategy = this._resolveStrategy(element);
        }

        const handler = () => this._scheduleAutoUpdate();
        this._autoUpdateHandler = handler;

        if (config.scroll !== false) {
            window.addEventListener('scroll', handler, {capture: true, passive: true});
        }
        if (config.resize !== false) {
            window.addEventListener('resize', handler);
            if (typeof ResizeObserver !== 'undefined') {
                this._resizeObserver = new ResizeObserver(handler);
            }
        }
        this._syncAutoUpdateTargets();

        /* container 为无法观察的普通对象（仅提供 getBoundingClientRect），或显式要求时，使用 rAF 轮询。When container is an unobservable plain object, or when explicitly requested, poll via rAF. */
        const {container} = this.options;
        const isUnobservableObject = !!container && typeof container === 'object' && !(container instanceof Element);
        if (config.animationFrame || (config.animationFrame !== false && isUnobservableObject)) {
            this._startAutoUpdateFrameLoop();
        }
    }

    /**
     * 停止自动更新，移除所有监听与观察器。
     * Stop auto-updating and remove all listeners and observers.
     */
    stopAutoUpdate() {
        const handler = this._autoUpdateHandler;
        if (handler) {
            window.removeEventListener('scroll', handler, {capture: true} as EventListenerOptions);
            window.removeEventListener('resize', handler);
            this._autoUpdateHandler = undefined;
        }
        if (this._resizeObserver) {
            this._resizeObserver.disconnect();
            this._resizeObserver = undefined;
        }
        this._autoUpdateFrameLoop = false;
        if (this._autoUpdateRaf) {
            cancelAnimationFrame(this._autoUpdateRaf);
            this._autoUpdateRaf = 0;
        }
    }

    /**
     * 归一化 autoUpdate 选项。
     * Normalize the autoUpdate option.
     *
     * @returns 归一化后的配置，未开启时返回 null。The normalized config, or null when disabled.
     */
    protected _resolveAutoUpdateOptions(): MoveableAutoUpdateOptions | null {
        const {autoUpdate} = this.options;
        if (!autoUpdate) {
            return null;
        }
        return autoUpdate === true ? {resize: true, scroll: true} : autoUpdate;
    }

    /**
     * 让 ResizeObserver 观察当前容器元素与最近移动的目标元素（在目标变更后调用以保持同步）。
     * Make the ResizeObserver watch the current container element and the most recently moved target (called after the target changes to keep it in sync).
     */
    protected _syncAutoUpdateTargets() {
        const observer = this._resizeObserver;
        if (!observer) {
            return;
        }
        observer.disconnect();
        const containerElement = this._getContainerElement();
        if (containerElement) {
            observer.observe(containerElement);
        }
        if (this._resolveAutoUpdateOptions()?.targets === 'all') {
            this._getMatchingTargets().forEach(target => observer.observe(target));
        } else if (this._restTarget) {
            observer.observe(this._restTarget);
        }
    }

    /**
     * 通过动画帧节流触发一次重排（避免同一帧内多次监听回调重复计算）。
     * Throttle a single re-clamp via an animation frame (avoids redundant work when multiple listeners fire in the same frame).
     */
    protected _scheduleAutoUpdate() {
        if (this._autoUpdateRaf) {
            return;
        }
        this._autoUpdateRaf = requestAnimationFrame(() => {
            this._autoUpdateRaf = 0;
            /* 拖动进行中时不干预，交由拖动逻辑约束。Do not interfere while dragging; the drag logic handles constraints. */
            if (this._state) {
                return;
            }
            this._reclampByOption();
        });
    }

    /**
     * 启动 animationFrame 轮询循环，每帧按当前约束重排（用于无法被观察的容器）。
     * Start the animationFrame polling loop that re-clamps every frame under the current constraint (for containers that cannot be observed).
     */
    protected _startAutoUpdateFrameLoop() {
        this._autoUpdateFrameLoop = true;
        const loop = () => {
            if (!this._autoUpdateFrameLoop) {
                return;
            }
            if (!this._state) {
                this._reclampByOption();
            }
            this._autoUpdateRaf = requestAnimationFrame(loop);
        };
        this._autoUpdateRaf = requestAnimationFrame(loop);
    }

    /**
     * 将 containerPadding 归一化为四边数值。允许负值，不做非负约束。
     * Normalize containerPadding into four side values. Negative values are allowed.
     *
     * @param padding 边距设置。The padding setting.
     * @returns 四边数值。The four side values.
     */
    static normalizePadding(padding?: number | Partial<DistanceRect>): DistanceRect {
        return normalizePadding(padding);
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
        return clamp(value, min, max);
    }

    /**
     * 从元素的 computed transform 中解析 translate 偏移量。
     * Parse the translate offset from an element's computed transform matrix.
     *
     * @param element 目标 DOM 元素。The target DOM element.
     * @returns 包含 left 和 top 偏移量的对象。Object with left and top offsets.
     */
    static getTranslate(element: HTMLElement): {left: number; top: number} {
        return getTranslate(element);
    }
}
