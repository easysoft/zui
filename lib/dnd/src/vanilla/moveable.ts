import {Component, $, Cash} from '@zui/core';
import {MoveableOptions, MoveableState} from '../types';

const MOVEABLE_SELECTOR = '[moveable="true"]';

export class Moveable extends Component<MoveableOptions> {
    static NAME = 'Moveable';

    static DEFAULT: Partial<MoveableOptions> = {
        selector: MOVEABLE_SELECTOR,
        hasMovingClass: 'has-moving',
        movingClass: 'is-moving',
        move: true,
    };

    protected _state?: MoveableState;

    protected declare _raf: number;

    get state() {
        return this._state;
    }

    get moveElement() {
        return this._state?.target;
    }

    async afterInit() {
        this.on('mousedown', this._handleMouseDown);
    }

    destroy(): void {
        this._clean();
        $(document).off(this.namespace);
        super.destroy();
    }

    protected _setState(event: MouseEvent, target?: HTMLElement) {
        event.preventDefault();
        let newState = {
            x: event.pageX,
            y: event.pageY,
        } as MoveableState;
        const oldState = this._state;
        if (target) {
            const $target = $(target);
            if (this.options.move === true) {
                const position = $target.css('position');
                newState.strategy = (position === 'fixed' || position === 'absolute') ? 'position' : 'transform';
            } else {
                newState.strategy = 'none';
            }
            const position = $target.position()!;
            newState = $.extend(newState, {
                target,
                startX: newState.x,
                startY: newState.y,
                deltaX: 0,
                deltaY: 0,
                startLeft: position.left,
                startTop: position.top,
                left: position.left,
                top: position.top,
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
        const {strategy, target: currentTarget} = newState;
        if (strategy === 'position') {
            $(currentTarget).css({left: newState.left, top: newState.top});
        } else if (strategy === 'transform') {
            $(currentTarget).css('transform', `translate(${newState.deltaX}px, ${newState.deltaY}px)`);
        }
        this.options.onChange?.call(this, newState, oldState, event);
    }

    protected _handleMouseDown = (event: MouseEvent) => {
        const {options} = this;
        const {selector, handle, onMoveStart} = options;
        const $clickTarget = $(event.target as HTMLElement);
        const $moveElement = $clickTarget.closest(selector);

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

        this._setState(event, moveElement);
        $(document).off('mousemove mouseup').on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
    };

    protected _handleMouseMove = (event: MouseEvent) => {
        if (!this._state) {
            return;
        }
        if (this._raf) {
            cancelAnimationFrame(this._raf);
        }
        this._raf = requestAnimationFrame(() => {
            this._raf = 0;
            this._setState(event);
            this.options.onMove?.call(this, event, this._state!);
        });
    };

    protected _handleMouseUp = (event: MouseEvent) => {
        if (!this._state) {
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
}
