import {Component, $} from '@zui/core';
import {MoveableOptions, MoveableState, MoveableStrategy, EdgeDetectionConfig, EdgeDetectionResult} from '../types';

const MOVEABLE_SELECTOR = '[moveable="true"]';

export class Moveable extends Component<MoveableOptions> {
    static NAME = 'Moveable';

    static DEFAULT: Partial<MoveableOptions> = {
        selector: MOVEABLE_SELECTOR,
        hasMovingClass: 'has-moving',
        movingClass: 'is-moving',
        move: true,
        edgeDetection: false,
    };

    protected _state?: MoveableState;

    protected declare _raf: number;

    get state() {
        return this._state;
    }

    get moveElement() {
        return this._state?.target;
    }

    /**
     * 是否启用边缘检测
     */
    get isEdgeDetectionEnabled() {
        return !!this.options.edgeDetection;
    }

    /**
     * 获取边缘检测区域的相关数值
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

    async afterInit() {
        this.on('mousedown', this._handleMouseDown);
    }

    destroy(): void {
        this._clean();
        $(document).off(this.namespace);
        super.destroy();
    }

    /**
     * 进行边缘检测
     * @returns EdgeDetectionResult | false 是否碰撞到边缘
     */
    protected _edgeDetect(dx: number, dy: number): EdgeDetectionResult | false {
        if (!this.isEdgeDetectionEnabled) {
            return false;
        }

        const edgeRect = this.edgeRect;
        // 容器的边缘位置
        const edgeSizes = {
            left: edgeRect.x + edgeRect.padding,
            right: edgeRect.x + edgeRect.width - edgeRect.padding,
            top: edgeRect.y + edgeRect.padding,
            bottom: edgeRect.y + edgeRect.height - edgeRect.padding,
        };

        const targetRect = this.moveElement!.getBoundingClientRect();
        // 目标元素的边缘位置（本次移动后）
        const targetX = targetRect.x + dx;
        const targetY = targetRect.y + dy;
        const targetSizes = {
            left: targetX,
            right: targetX + targetRect.width,
            top: targetY,
            bottom: targetY + targetRect.height,
        };

        // 是否碰撞到边缘
        const left = targetSizes.left < edgeSizes.left;
        const right = targetSizes.right > edgeSizes.right;
        const top = targetSizes.top < edgeSizes.top;
        const bottom = targetSizes.bottom > edgeSizes.bottom;

        // 需要修正的偏移量
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
     * 移动目标元素
     * @param dx x 变化值
     * @param dy y 变化值
     */
    protected _moveBy(dx: number, dy: number) {
        let targetDx = dx;
        let targetDy = dy;

        // 1. 边缘检测
        const edgeDetectResult = this._edgeDetect(dx, dy);
        if (edgeDetectResult) {
            targetDx += edgeDetectResult.x;
            targetDy += edgeDetectResult.y;
        }

        // 2. 调整目标元素的数值
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
        this._state = {
            ...this._state!,
            deltaX: deltaX + targetDx,
            deltaY: deltaY + targetDy,
        };

        this.options.onMove?.call(this, event, this._state);
        this.options.onChange?.call(this, this._state, this._state, event);
    }

    /**
     * 使用 position 移动元素
     * @param dx x 变化值
     * @param dy y 变化值
     */
    protected _moveByPosition(dx: number, dy: number) {
        const {target} = this._state!;
        const currentLeft = parseFloat(target.style.left || '0');
        const currentTop = parseFloat(target.style.top || '0');

        target.style.left = `${currentLeft + dx}px`;
        target.style.top = `${currentTop + dy}px`;
    }

    /**
     * 使用 transform 移动元素
     * @param dx x 变化值
     * @param dy y 变化值
     */
    protected _moveByTransform(dx: number, dy: number) {
        const {target} = this._state!;
        const currentTranslate = Moveable.getTranslate(target);

        const left = currentTranslate.left + dx;
        const top = currentTranslate.top + dy;

        target.style.transform = `translate(${left}px, ${top}px)`;
    }

    /**
     * 使用 scroll 移动元素
     * @param dx x 变化值
     * @param dy y 变化值
     */
    protected _moveByScroll(dx: number, dy: number) {
        const {target} = this._state!;
        target.scrollLeft -= dx;
        target.scrollTop -= dy;
    }

    /**
     * 移动开始
     * @param x 鼠标的 x 坐标
     * @param y 鼠标的 y 坐标
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
     * 移动中/移动结束
     * @param x 鼠标的 x 坐标
     * @param y 鼠标的 y 坐标
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

    protected _handleMouseMove = (event: MouseEvent) => {
        const state = this._state;
        if (!state || !event.buttons) {
            return;
        }
        event.preventDefault();

        this._moveTo(event.screenX, event.screenY, event);
    };

    protected _handleMouseUp = (event: MouseEvent) => {
        const state = this._state;
        if (!state) {
            return;
        }

        this.options.onMoveEnd?.call(this, event, state);
        this._clean();
    };

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
