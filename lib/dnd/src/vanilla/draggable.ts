import {Component, $, Cash} from '@zui/core';
import {DraggableOptions} from '../types';

const DROPPABLE_SELECTOR = '[droppable="true"]';

export class Draggable extends Component<DraggableOptions> {
    static NAME = 'Draggable';

    static DEFAULT: Partial<DraggableOptions> = {
        selector: 'li',
        dropEffect: 'move',
        hasDraggingClass: 'has-dragging',
        draggingClass: 'is-dragging',
        droppableClass: 'is-droppable',
        droppingClass: 'is-dropping',
    };

    protected _dragElement?: HTMLElement;

    protected _dropElement?: HTMLElement;

    protected _$targets?: Cash;

    async afterInit() {
        this.on('mousedown', this._handleMouseDown);
        this.on('dragstart', this._handleDragStart);
        this.on('dragend', this._handleDragEnd);
        if (this.options.onDrag) {
            this.on('drag', this._handleDrag);
        }
        this.on('dragover', this._handleDragOver);
        this.on('dragenter', this._handleDragEnter);
        this.on('dragleave', this._handleDragLeave);
        this.on('drop', this._handleDrop);
        $(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
    }

    destroy(): void {
        this._clean();
        $(document).off(this.namespace);
        super.destroy();
    }

    protected _handleMouseDown = (event: MouseEvent) => {
        const {selector, handle, beforeDrag} = this.options;
        const $clickTarget = $(event.target as HTMLElement);
        const $dragElement = $clickTarget.closest(selector);

        const dragElement = $dragElement[0];
        if (!dragElement || (handle && !$clickTarget.closest(handle).length)) {
            return;
        }

        if (beforeDrag && beforeDrag.call(this, event, dragElement) === false) {
            return;
        }

        $dragElement.attr('draggable', 'true');
        const {draggingClass} = this.options;
        if (draggingClass) {
            $dragElement.addClass(draggingClass);
        }

        this._dragElement = dragElement;
    };

    protected _handleDragStart = (event: DragEvent) => {
        const dragElement = this._dragElement;
        if (!dragElement) {
            event.preventDefault();
            return;
        }
        const {options} = this;
        const {onDragStart} = options;
        if (onDragStart && onDragStart.call(this, event, dragElement) === false) {
            this._clean();
            return;
        }

        const {$element} = this;
        const {target, selector, droppableClass, hasDraggingClass} = options;
        const $targets = (typeof target === 'function' ? $(target.call(this, dragElement)) : $element.find(target || selector || DROPPABLE_SELECTOR));
        if (droppableClass) {
            $element.find(droppableClass).removeClass(droppableClass);
            $targets.addClass(droppableClass);
        }
        if (hasDraggingClass) {
            $element.addClass(hasDraggingClass);
        }
        $element.find(DROPPABLE_SELECTOR).removeAttr('droppable');
        $targets.attr('droppable', 'true');
        this._$targets = $targets;

    };

    protected _setDragEffect(event: DragEvent) {
        const {dropEffect} = this.options;
        if (dropEffect) {
            event.dataTransfer!.dropEffect = dropEffect;
        }
    }

    protected _handleDrag = (event: DragEvent) => {
        const dragElement = this._dragElement;
        if (!dragElement) {
            return;
        }
        this._setDragEffect(event);
        this.options.onDrag?.call(this, event, dragElement);
    };

    protected _handleDragEnd = (event: DragEvent) => {
        const dragElement = this._dragElement;
        this._clean();
        if (dragElement) {
            this.options.onDragEnd?.call(this, event, dragElement);
        }
    };

    protected _handleDragEnter = (event: DragEvent) => {
        const dragElement = this._dragElement;
        if (!dragElement) {
            return;
        }
        const target = $(event.target as HTMLElement).closest(DROPPABLE_SELECTOR)[0];
        if (!target) {
            return;
        }
        event.preventDefault();
        this._dropElement = target;
        const {droppingClass} = this.options;
        if (droppingClass) {
            $(target).addClass(droppingClass);
        }
        this._setDragEffect(event);
        this.options.onDragEnter?.call(this, event, dragElement, target);
    };

    protected _handleDragOver = (event: DragEvent) => {
        const dragElement = this._dragElement;
        const dropElement = $(event.target as HTMLElement).closest(DROPPABLE_SELECTOR)[0];
        if (!dragElement || !dropElement) {
            return;
        }
        this._dropElement = dropElement;
        event.preventDefault();
        const {onDragOver} = this.options;
        this._setDragEffect(event);
        if (onDragOver) {
            onDragOver.call(this, event, dragElement, dropElement);
        }
    };

    protected _handleDragLeave = (event: DragEvent) => {
        const dragElement = this._dragElement;
        const dropElement = $(event.target as HTMLElement).closest(DROPPABLE_SELECTOR)[0];
        if (!dragElement || !dropElement) {
            return;
        }
        this._dropElement = dropElement;
        event.preventDefault();
        this.options.onDragEnter?.call(this, event, dragElement, dropElement);
        const {droppingClass} = this.options;
        if (droppingClass) {
            $(dropElement).removeClass(droppingClass);
        }
        this._dropElement = undefined;
    };

    protected _handleDrop = (event: DragEvent) => {
        const dropTarget = $(event.target as HTMLElement).closest(DROPPABLE_SELECTOR)[0];
        if (!dropTarget) {
            return;
        }
        event.preventDefault();
        this.options.onDrop?.call(this, event, this._dragElement!, dropTarget);
    };

    _clean() {
        const {draggingClass, droppableClass, droppingClass, hasDraggingClass} = this.options;
        if (hasDraggingClass) {
            this.$element.removeClass(hasDraggingClass);
        }
        const dragElement = this._dragElement;
        if (dragElement) {
            const $dragElement = $(dragElement);
            $dragElement.removeAttr('draggable');
            if (draggingClass) {
                $dragElement.removeClass(draggingClass);
            }
            this._dragElement = undefined;
        }

        const dropTarget = this._dropElement;
        if (dropTarget) {
            this._dropElement = undefined;
        }

        const $targets = this._$targets;
        if ($targets) {
            if (droppableClass) {
                $targets.removeClass(droppableClass);
            }
            if (droppingClass) {
                $targets.removeClass(droppingClass);
            }
            this._$targets = undefined;
        }
    }
}
