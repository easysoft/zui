import {Component, $} from '@zui/core';
import {MoveableOptions, MoveableState, MoveableStrategy, EdgeDetectionConfig, EdgeDetectionResult} from '../types';

/** 匹配所有标记了 moveable 属性的元素。Matches all elements with the moveable attribute. */
const MOVEABLE_SELECTOR = '[moveable="true"]';

/**
 * 基于鼠标事件的元素移动组件。
 * 支持 position、transform、scroll 三种移动策略，以及可选的边缘检测防止元素移出容器。
 *
 * Mouse-event-driven element movement component.
 * Supports position, transform, and scroll movement strategies, with optional edge detection
 * to prevent elements from being moved outside a container boundary.
 */
export class Moveable extends Component<MoveableOptions> {
    static NAME = 'Moveable';

    static DEFAULT: Partial<MoveableOptions> = {
        selector: MOVEABLE_SELECTOR,
        hasMovingClass: 'has-moving',
        movingClass: 'is-moving',
        move: true,
        edgeDetection: false,
    };

    /** 当前移动状态，未在移动时为 undefined。The current move state; undefined when idle. */
    protected _state?: MoveableState;

    /** 获取当前移动状态。Get the current move state. */
    get state() {
        return this._state;
    }

    /** 获取正在被移动的目标元素。Get the element currently being moved. */
    get moveElement() {
        return this._state?.target;
    }

    /**
     * 是否启用边缘检测。
     * Whether edge detection is enabled.
     */
    get isEdgeDetectionEnabled() {
        return !!this.options.edgeDetection;
    }

    /**
     * 获取边缘检测区域的矩形信息（位置、尺寸和内边距）。
     * Get the edge detection area rectangle (position, dimensions, and padding).
     */
    get edgeRect() {
        const rect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            padding: 0,
        };

        if (this.isEdgeDetectionEnabled) {
            const {container, distance}: EdgeDetectionConfig = this.options.edgeDetection as EdgeDetectionConfig;
            if (container === 'viewport') {
                rect.width = window.innerWidth;
                rect.height = window.innerHeight;
            }

            rect.padding = distance;
        }

        return rect;
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

    /**
     * 对目标元素在给定位移下执行边缘检测，返回需要修正的偏移量。
     * 如果元素移动后会超出容器边界，返回将其拉回边界所需的 x/y 修正值。
     *
     * Perform edge detection for the target element with the given displacement.
     * Returns x/y correction offsets needed to pull the element back within bounds.
     *
     * @param dx x 方向的位移。Displacement in the x direction.
     * @param dy y 方向的位移。Displacement in the y direction.
     * @returns 修正偏移量，未启用边缘检测时返回 false。Correction offsets, or false if edge detection is disabled.
     */
    protected _edgeDetect(dx: number, dy: number): EdgeDetectionResult | false {
        if (!this.isEdgeDetectionEnabled) {
            return false;
        }

        const {
            x: edgeX,
            y: edgeY,
            width,
            height,
            padding,
        } = this.edgeRect;

        const isPaddingRect = !Number.isInteger(padding);
        const pLeft = isPaddingRect ? padding.left : padding;
        const pRight = isPaddingRect ? padding.right : padding;
        const pTop = isPaddingRect ? padding.top : padding;
        const pBottom = isPaddingRect ? padding.bottom : padding;
        const edgeSizes = {
            left: edgeX + pLeft,
            right: edgeX + width - pRight,
            top: edgeY + pTop,
            bottom: edgeY + height - pBottom,
        };

        const targetRect = this.moveElement!.getBoundingClientRect();
        const targetX = targetRect.x + dx;
        const targetY = targetRect.y + dy;
        const targetSizes = {
            left: targetX,
            right: targetX + targetRect.width,
            top: targetY,
            bottom: targetY + targetRect.height,
        };

        const left = targetSizes.left < edgeSizes.left;
        const right = targetSizes.right > edgeSizes.right;
        const top = targetSizes.top < edgeSizes.top;
        const bottom = targetSizes.bottom > edgeSizes.bottom;

        let x = 0;
        if (right) {
            x = edgeSizes.right - targetSizes.right;
        } else if (left) {
            x = edgeSizes.left - targetSizes.left;
        }
        let y = 0;
        if (bottom) {
            y = edgeSizes.bottom - targetSizes.bottom;
        } else if (top) {
            y = edgeSizes.top - targetSizes.top;
        }

        return {
            x,
            y,
        };
    }

    /**
     * 按给定的增量移动目标元素。先执行边缘检测修正，再根据策略实际移动元素，最后触发回调。
     * Move the target element by the given delta. Applies edge detection correction first,
     * then moves the element according to the strategy, and finally fires callbacks.
     *
     * @param dx x 方向增量。Delta in the x direction.
     * @param dy y 方向增量。Delta in the y direction.
     */
    protected _moveBy(dx: number, dy: number) {
        let targetDx = dx;
        let targetDy = dy;

        const edgeDetectResult = this._edgeDetect(dx, dy);
        if (edgeDetectResult) {
            targetDx += edgeDetectResult.x;
            targetDy += edgeDetectResult.y;
        }

        switch (this._state!.strategy) {
            case 'position':
                this._moveByPosition(targetDx, targetDy);
                break;
            case 'transform':
                this._moveByTransform(targetDx, targetDy);
                break;
            case 'scroll':
                this._moveByScroll(targetDx, targetDy);
                break;
            default:
        }

        const {deltaX, deltaY, event} = this._state!;
        const oldState = this._state!;
        this._state = {
            ...oldState,
            deltaX: deltaX + targetDx,
            deltaY: deltaY + targetDy,
        };

        this.options.onMove?.call(this, event, this._state);
        this.options.onChange?.call(this, this._state, oldState, event);
    }

    /**
     * 通过修改 CSS `left`/`top` 属性移动元素。
     * Move the element by updating its CSS `left`/`top` properties.
     */
    protected _moveByPosition(dx: number, dy: number) {
        const {target} = this._state!;
        const currentLeft = parseFloat(target.style.left || '0');
        const currentTop = parseFloat(target.style.top || '0');

        target.style.left = `${currentLeft + dx}px`;
        target.style.top = `${currentTop + dy}px`;
    }

    /**
     * 通过修改 CSS `transform: translate()` 移动元素。
     * Move the element by updating its CSS `transform: translate()`.
     */
    protected _moveByTransform(dx: number, dy: number) {
        const {target} = this._state!;
        const currentTranslate = Moveable.getTranslate(target);

        const left = currentTranslate.left + dx;
        const top = currentTranslate.top + dy;

        target.style.transform = `translate(${left}px, ${top}px)`;
    }

    /**
     * 通过调整容器的 `scrollLeft`/`scrollTop` 实现滚动移动（方向取反）。
     * Move by adjusting the container's `scrollLeft`/`scrollTop` (direction is inverted).
     */
    protected _moveByScroll(dx: number, dy: number) {
        const {target} = this._state!;
        target.scrollLeft -= dx;
        target.scrollTop -= dy;
    }

    /**
     * 记录移动起始坐标，重置累计偏移量。
     * Record the starting mouse coordinates and reset accumulated displacement.
     *
     * @param x 起始 screenX 坐标。Starting screenX coordinate.
     * @param y 起始 screenY 坐标。Starting screenY coordinate.
     */
    protected _moveStart(x: number, y: number) {
        this._state = {
            ...this._state!,
            fromX: x,
            fromY: y,
            lastX: x,
            lastY: y,
            deltaX: 0,
            deltaY: 0,
        };
    }

    /**
     * 计算自上次移动以来的增量并执行移动，同时更新 lastX/lastY。
     * Compute the delta since the last move, execute the move, and update lastX/lastY.
     *
     * @param x 当前 screenX 坐标。Current screenX coordinate.
     * @param y 当前 screenY 坐标。Current screenY coordinate.
     * @param event 当前鼠标事件。Current mouse event.
     */
    protected _moveTo(x: number, y: number, event: MouseEvent) {
        const {
            lastX,
            lastY,
        } = this._state!;

        const dx = x - lastX;
        const dy = y - lastY;

        this._moveBy(dx, dy);

        this._state = {
            ...this._state!,
            lastX: x,
            lastY: y,
            event,
        };
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

        // 根据元素 CSS position 自动选择移动策略：
        // absolute/fixed/relative → position 策略，其他 → transform 策略
        let strategy: MoveableStrategy;
        if (this.options.move === true) {
            const position = $(moveElement).css('position');
            strategy = (position === 'fixed' || position === 'absolute' || position === 'relative') ? 'position' : 'transform';
        } else {
            strategy = this.options.move || 'none';
        }

        this._state = {
            event,
            target: moveElement,
            strategy,
        } as MoveableState;
        this._moveStart(event.screenX, event.screenY);

        $(document).off('mousemove mouseup').on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
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

        this._moveTo(event.screenX, event.screenY, event);
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

        this.options.onMoveEnd?.call(this, event, state);
        this._clean();
    };

    /**
     * 清理移动状态：移除全局事件监听、移除 CSS 类名、重置内部状态。
     * Clean up move state: remove global event listeners, remove CSS classes, reset internal state.
     */
    protected _clean() {
        $(document).off('mousemove mouseup');
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
