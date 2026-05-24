import {Component, $, Cash} from '@zui/core';
import {DraggableOptions, DraggableState} from '../types';

/** 匹配所有标记了 droppable 属性的元素。Matches all elements with the droppable attribute. */
const DROPPABLE_SELECTOR = '[droppable="true"]';

/**
 * 基于浏览器原生 Drag & Drop API 的拖放组件。
 * 支持可配置的拖拽源、放置目标、手柄、CSS 类名以及全生命周期回调。
 *
 * Drag-and-drop component built on the native HTML5 Drag & Drop API.
 * Supports configurable drag sources, drop targets, handles, CSS classes, and full lifecycle callbacks.
 */
export class Draggable extends Component<DraggableOptions> {
    static NAME = 'Draggable';

    static DEFAULT: Partial<DraggableOptions> = {
        selector: '[draggable="true"]',
        dropEffect: 'move',
        hasDraggingClass: 'has-dragging',
        draggingClass: 'is-dragging',
        droppableClass: 'is-droppable',
        droppingClass: 'is-dropping',
    };

    /** 当前拖放状态。Current drag/drop state. */
    protected _state: DraggableState = {dragging: null, dropping: null};

    /** 当前有效的放置目标元素集合。Current set of valid drop target elements. */
    protected _$targets?: Cash;

    /** 标记是否需要执行清理。Whether cleanup is pending. */
    protected _needClean = true;

    /** 拖拽事件监听容器的 Cash 包装。Cash-wrapped drag event container. */
    protected declare _$dragContainer: Cash;

    /** 放置事件监听容器的 Cash 包装。Cash-wrapped drop event container. */
    protected declare _$dropContainer: Cash;

    /** 获取当前拖放状态。Get the current drag/drop state. */
    get state() {
        return this._state;
    }

    /** 获取当前正在被拖拽的元素。Get the element currently being dragged. */
    get dragElement() {
        return this._state.dragging;
    }

    /** 获取当前悬停的放置目标元素。Get the drop target element currently being hovered. */
    get dropElement() {
        return this._state.dropping;
    }

    /**
     * 初始化事件绑定。在拖拽容器和放置容器上绑定相关的原生拖放事件。
     * Initialize event bindings on drag and drop containers.
     */
    async afterInit() {
        const {namespace} = this;
        const {dragContainer, dropContainer, onDrag} = this.options;
        this._$dragContainer = dragContainer ? $(dragContainer) : this.$element;
        this._$dropContainer = dropContainer ? $(dropContainer) : this._$dragContainer;

        this._$dragContainer.on('mousedown' + namespace, this._handleMouseDown)
            .on('dragstart' + namespace, this._handleDragStart)
            .on('dragend' + namespace, this._handleDragEnd);
        if (onDrag) {
            this._$dragContainer.on('drag' + namespace, this._handleDrag);
        }
        this._$dropContainer.on('dragover' + namespace, this._handleDragOver)
            .on('dragenter' + namespace, this._handleDragEnter)
            .on('dragleave' + namespace, this._handleDragLeave)
            .on('drop' + namespace, this._handleDrop);
        $(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
    }

    /**
     * 销毁组件，移除所有事件监听并执行清理。
     * Destroy the component, removing all event listeners and performing cleanup.
     */
    destroy(): void {
        this._clean();
        $(document).off(this.namespace);
        this._$dragContainer.off(this.namespace);
        this._$dropContainer.off(this.namespace);
        super.destroy();
    }

    /**
     * 更新内部拖放状态，并在状态发生变化时触发 `onChange` 回调。
     * Update the internal drag/drop state and invoke the `onChange` callback when it changes.
     */
    protected _setState(newState: Partial<DraggableState>) {
        const oldState = this._state;
        const {dragging = oldState.dragging, dropping = oldState.dropping} = newState;
        if (dragging === oldState.dragging && dropping === oldState.dropping) {
            return;
        }

        this._state = {dragging, dropping};
        this.options.onChange?.call(this, this._state, oldState);
    }

    /**
     * 处理 mousedown 事件：验证点击目标是否为合法拖拽元素/手柄，
     * 通过 `beforeDrag` 回调判断是否允许拖拽，并标记元素为 draggable。
     * Handle mousedown: validate the click target against the selector/handle,
     * check `beforeDrag` callback, and mark the element as draggable.
     */
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
        this._setState({dragging: dragElement});
    };

    /**
     * 处理原生 dragstart 事件：应用 CSS 类名、筛选合法放置目标、标记 droppable 属性。
     * 如果 `onDragStart` 回调返回 `false` 或无合法放置目标，则取消拖拽。
     * Handle native dragstart: apply CSS classes, filter valid drop targets, and set droppable attributes.
     * Cancels the drag if `onDragStart` returns `false` or there are no valid drop targets.
     */
    protected _handleDragStart = (event: DragEvent) => {
        const {dragElement} = this;
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
        const {target, selector, draggingClass, droppableClass, hasDraggingClass, canDrop} = options;
        if (draggingClass) {
            this.$element.find(draggingClass).removeClass(draggingClass);
            $(dragElement).addClass(draggingClass);
        }

        let $targets = (typeof target === 'function' ? $(target.call(this, dragElement)) : $element.find(target || selector || DROPPABLE_SELECTOR));
        if (canDrop) {
            $targets = $targets.filter((_, ele) => {
                return canDrop.call(this, event, dragElement!, ele) !== false;
            });
        }
        if (!$targets.length) {
            this._clean();
            return;
        }
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

    /**
     * 设置拖拽操作的 dropEffect（copy/move/link/none）。
     * Set the DataTransfer dropEffect for the drag operation.
     */
    protected _setDragEffect(event: DragEvent) {
        const {dropEffect} = this.options;
        if (dropEffect) {
            event.dataTransfer!.dropEffect = dropEffect;
        }
    }

    /**
     * 处理原生 drag 事件，持续触发 `onDrag` 回调。
     * Handle the native drag event; continuously fires the `onDrag` callback.
     */
    protected _handleDrag = (event: DragEvent) => {
        const {dragElement} = this;
        if (!dragElement) {
            return;
        }
        this._setDragEffect(event);
        this.options.onDrag?.call(this, event, dragElement);
    };

    /**
     * 处理原生 dragend 事件，触发 `onDragEnd` 回调并执行清理。
     * Handle the native dragend event; fires `onDragEnd` and performs cleanup.
     */
    protected _handleDragEnd = (event: DragEvent) => {
        const {dragElement} = this;
        if (dragElement) {
            this.options.onDragEnd?.call(this, event, dragElement);
        }
        this._clean();
    };

    /**
     * 处理 dragenter 事件，委托给 `_handleDragOver` 统一处理目标切换逻辑。
     * Handle dragenter by delegating to `_handleDragOver` for unified target-switching logic.
     */
    protected _handleDragEnter = (event: DragEvent) => {
        this._handleDragOver(event);
    };

    /**
     * 处理 dragover 事件：检测放置目标切换，维护 droppingClass 状态，
     * 触发 `onDragEnter` 和 `onDragOver` 回调。
     * Handle dragover: detect drop-target changes, manage droppingClass state,
     * and fire `onDragEnter` / `onDragOver` callbacks.
     */
    protected _handleDragOver = (event: DragEvent) => {
        const {dragElement} = this;
        const $target = $(event.target as HTMLElement);
        const dropElement = $target.closest(DROPPABLE_SELECTOR)[0];
        if (!dragElement || !dropElement) {
            return;
        }
        const oldDropElement = this.state.dropping;
        event.preventDefault();
        this._setDragEffect(event);
        if (oldDropElement !== dropElement) {
            const {droppingClass} = this.options;
            if (droppingClass) {
                if (oldDropElement) {
                    this._leaveDropElement(event, oldDropElement);
                }
                $(dropElement).addClass(droppingClass);
            }
            this._setState({dropping: dropElement});
            this.options.onDragEnter?.call(this, event, dragElement, dropElement);
        }
        this.options.onDragOver?.call(this, event, dragElement, dropElement);
    };

    /**
     * 从放置目标元素上移除 droppingClass 并触发 `onDragLeave` 回调。
     * Remove droppingClass from the drop target and fire the `onDragLeave` callback.
     */
    protected _leaveDropElement(event: DragEvent, dropElement: HTMLElement) {
        const {droppingClass} = this.options;
        if (droppingClass) {
            $(dropElement).removeClass(droppingClass);
        }

        this.options.onDragLeave?.call(this, event, this.dragElement!, dropElement);
    }

    /**
     * 处理 dragleave 事件：仅当离开的是 droppable 元素时触发目标清除。
     * Handle dragleave: only clears the drop target when leaving a droppable element.
     */
    protected _handleDragLeave = (event: DragEvent) => {
        const {dragElement} = this;
        const dropElement = $(event.target as HTMLElement).filter(DROPPABLE_SELECTOR)[0];
        if (!dragElement || !dropElement) {
            return;
        }
        event.preventDefault();
        this._leaveDropElement(event, dropElement);
        this._setState({dropping: null});
    };

    /**
     * 处理 drop 事件：触发 `onDrop` 回调，并在短暂延迟后执行清理以确保事件顺序正确。
     * Handle drop: fire `onDrop` callback and schedule cleanup with a short delay
     * to ensure correct event ordering.
     */
    protected _handleDrop = (event: DragEvent) => {
        const dropTarget = $(event.target as HTMLElement).closest(DROPPABLE_SELECTOR)[0];
        if (dropTarget) {
            event.preventDefault();

            this.options.onDrop?.call(this, event, this.dragElement!, dropTarget);
        }

        this._needClean = true;
        setTimeout(() => {
            if (this._needClean) {
                this._clean();
            }
        }, 50);
    };

    /**
     * 清理拖放状态：移除所有拖拽相关的 CSS 类名和 droppable 属性，重置内部状态。
     * Clean up drag/drop state: remove all drag-related CSS classes and droppable attributes, reset internal state.
     */
    protected _clean() {
        if (this._needClean === false) {
            return;
        }
        this._needClean = false;

        const {draggingClass, droppableClass, droppingClass, hasDraggingClass} = this.options;
        if (hasDraggingClass) {
            this.$element.removeClass(hasDraggingClass);
        }
        const {dragElement} = this;
        if (dragElement) {
            const $dragElement = $(dragElement);
            if (draggingClass) {
                $dragElement.removeClass(draggingClass);
            }
        }
        this._setState({dropping: null, dragging: null});

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
