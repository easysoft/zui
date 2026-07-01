import {Component, $} from '@zui/core';
import {MoveableOptions, MoveableState, MoveableStrategy} from '../types';

/** 匹配所有标记了 moveable 属性的元素。Matches all elements with the moveable attribute. */
const MOVEABLE_SELECTOR = '[moveable="true"]';

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
    };

    /** 当前移动状态，未在移动时为 undefined。The current move state; undefined when idle. */
    protected _state?: MoveableState;

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

    protected _setState(event: MouseEvent, target?: HTMLElement) {
        let newState = {
            x: event.pageX,
            y: event.pageY,
        } as MoveableState;
        const oldState = this._state;
        if (target) {
            const $target = $(target);
            let strategy: MoveableStrategy;
            if (this.options.move === true) {
                const position = $target.css('position');
                strategy = (position === 'fixed' || position === 'absolute' || position === 'relative') ? 'position' : 'transform';
            } else {
                strategy = this.options.move || 'none';
            }

            const position = strategy === 'transform' ? Moveable.getTranslate(target) : (strategy === 'scroll' ? {left: target.scrollLeft, top: target.scrollTop} : $target.position()!);
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
            });
        } else if (oldState) {
            const deltaX = newState.x - oldState.startX;
            const deltaY = newState.y - oldState.startY;
            newState = $.extend({}, oldState, newState, {
                deltaX,
                deltaY,
                left: oldState.startLeft + deltaX,
                top: oldState.startTop + deltaY,
            });
        }
        this._state = newState;
        this.options.onChange?.call(this, newState, oldState, event);

        this.update();
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
            return;
        }

        const {strategy, target: currentTarget} = state;
        const $target = $(currentTarget);
        if (strategy === 'position') {
            $target.css({left: state.left, top: state.top});
        } else if (strategy === 'transform') {
            $target.css('transform', `translate(${state.left}px, ${state.top}px)`);
        } else if (strategy === 'scroll') {
            currentTarget.scrollLeft = state.scrollLeft - state.deltaX;
            currentTarget.scrollTop = state.scrollTop - state.deltaY;
        }
        this.options.onUpdate?.call(this, state);
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
        this._setState(event, moveElement);
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
            this.options.onMove?.call(this, event, this._state!);
        });
    };

    /**
     * 处理 mouseup 事件：触发 `onMoveEnd` 回调并执行清理。
     * Handle mouseup: fire the `onMoveEnd` callback and perform cleanup.
     */
    protected _handleMouseUp = (event: MouseEvent) => {
        const state = this._state;
        if (!state) {
            return;
        }
        if (this._raf) {
            cancelAnimationFrame(this._raf);
            this._raf = 0;
        }
        this._setState(event);
        this.options.onMove?.call(this, event, this._state!);
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
        this._state = undefined;
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
