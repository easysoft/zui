import {Component, $} from '@zui/core';
import type {DistanceRect, ResizableDirection, ResizableOptions, ResizableState, ResizableUpdateInfo} from '../types';
import {Moveable} from './moveable';

import '../css/resizable.css';

/** 匹配所有标记了 resizable 属性的元素。Matches all elements with the resizable attribute. */
const RESIZABLE_SELECTOR = '[resizable="true"]';

/** 缩放手柄元素的 CSS 类名。CSS class name for resize handle elements. */
const RESIZABLE_HANDLE_CLASS = 'resizable-handle';

/** 缩放手柄选择器。Resize handle selector. */
const RESIZABLE_HANDLE_SELECTOR = `.${RESIZABLE_HANDLE_CLASS}`;

/** 自动生成手柄的标记属性。Marker attribute for generated handles. */
const RESIZABLE_GENERATED_HANDLE_ATTR = 'z-resizable-generated';

/** 默认生成的八个缩放方向。The eight default resize directions. */
const RESIZABLE_DIRECTIONS: ResizableDirection[] = ['n', 'e', 's', 'w', 'ne', 'nw', 'se', 'sw'];

/** 单轴缩放方向。Resize edge on one axis. */
type ResizeAxisEdge = 'start' | 'end' | 'none';

/** 单轴缩放边界。Resize bounds on one axis. */
type ResizeAxisBounds = {
    min: number;
    max: number;
};

/** 计算后要写入的尺寸与 transform 偏移。Computed size and transform offsets to write. */
type ResizeRect = {
    width: number;
    height: number;
    left: number;
    top: number;
};

/** 不暴露到公共 ResizableState 的内部缩放上下文。Internal resize context not exposed through ResizableState. */
type ResizableRuntime = {
    target: HTMLElement;
    startWidth: number;
    startHeight: number;
    startClientLeft: number;
    startClientTop: number;
    startClientRight: number;
    startClientBottom: number;
};

/**
 * 基于鼠标事件的元素尺寸调整组件。
 * 使用八方向手柄调整目标元素尺寸，并通过 transform 调整左/上边拖动时的位置偏移。
 *
 * Mouse-event-driven element resize component.
 * Uses eight directional handles to resize the target element and transform offsets for north/west edges.
 */
export class Resizable extends Component<ResizableOptions> {
    static NAME = 'Resizable';

    static DEFAULT: Partial<ResizableOptions> = {
        selector: RESIZABLE_SELECTOR,
        hasResizingClass: 'has-resizing',
        resizingClass: 'is-resizing',
        container: 'window',
        minWidth: 0,
        minHeight: 0,
    };

    /** 当前公开缩放状态。Current public resize state. */
    protected _state?: ResizableState;

    /** 当前缩放操作的内部上下文。Internal context for the current resize operation. */
    protected _runtime?: ResizableRuntime;

    /** 用于取消动画帧的 ID。The ID for canceling the animation frame. */
    protected _raf = 0;

    /** 获取当前缩放状态。Get the current resize state. */
    get state(): ResizableState | undefined {
        return this._state;
    }

    /** 获取正在被调整尺寸的目标元素。Get the element currently being resized. */
    get resizeElement() {
        return this._runtime?.target;
    }

    /** 获取所有缩放手柄元素。Get all resize handle elements. */
    get handles() {
        return this.$element.find(RESIZABLE_HANDLE_SELECTOR);
    }

    /**
     * 初始化：生成手柄并绑定 mousedown 事件。
     * Initialize: create handles and bind the mousedown event.
     */
    async afterInit() {
        this.refresh();
        this.on('mousedown', this._handleMouseDown);
    }

    /**
     * 刷新自动生成的缩放手柄。
     * Refresh generated resize handles.
     */
    refresh() {
        this._removeGeneratedHandles();
        this._getMatchingTargets().forEach((target) => {
            const $target = $(target);
            RESIZABLE_DIRECTIONS.forEach((direction) => {
                $target.append(`<div class="${RESIZABLE_HANDLE_CLASS}" z-dir="${direction}" ${RESIZABLE_GENERATED_HANDLE_ATTR}="true"></div>`);
            });
        });
    }

    /**
     * 销毁组件，清理状态、移除自动生成的手柄与事件监听。
     * Destroy the component, clean up state, remove generated handles and event listeners.
     */
    destroy(): void {
        this._clean();
        this._removeGeneratedHandles();
        this.$element.off(this.namespace);
        super.destroy();
    }

    /**
     * 设置缩放状态并触发样式更新。
     * Set the resize state and trigger style update.
     */
    protected _setState(event: MouseEvent, target?: HTMLElement, direction?: ResizableDirection): boolean {
        const oldState = this._state;
        let newState: ResizableState;

        if (target && direction) {
            const targetRect = target.getBoundingClientRect();
            const translate = Moveable.getTranslate(target);
            this._runtime = {
                target,
                startWidth: targetRect.width,
                startHeight: targetRect.height,
                startClientLeft: targetRect.left,
                startClientTop: targetRect.top,
                startClientRight: targetRect.right,
                startClientBottom: targetRect.bottom,
            };
            newState = {
                event,
                direction,
                startX: event.pageX,
                startY: event.pageY,
                x: event.pageX,
                y: event.pageY,
                startLeft: translate.left,
                startTop: translate.top,
            };
        } else if (oldState) {
            newState = $.extend({}, oldState, {
                event,
                x: event.pageX,
                y: event.pageY,
            });
        } else {
            return false;
        }

        const changeResult = this.options.onChange?.call(this, newState, oldState, event);
        if (changeResult === false) {
            if (target) {
                this._runtime = undefined;
            }
            return false;
        }
        if (changeResult) {
            newState = $.extend(newState, changeResult);
        }

        this._state = newState;
        this.update(newState);
        this.options.onResize?.call(this, event, newState);
        return true;
    }

    /**
     * 更新目标元素尺寸与位置。
     * Update the target element size and position.
     */
    update(state?: ResizableState) {
        state = state || this._state;
        const runtime = this._runtime;
        if (!state || !runtime) {
            return;
        }

        const rect = this._getResizeRect(state);
        let updateInfo: ResizableUpdateInfo = {
            style: {
                width: rect.width,
                height: rect.height,
                transform: `translate(${rect.left}px, ${rect.top}px)`,
            },
        };

        const updateResult = this.options.onUpdate?.call(this, updateInfo, state);
        if (updateResult === false) {
            return;
        }
        if (updateResult) {
            updateInfo = $.extend(updateInfo, updateResult);
        }

        if (updateInfo.style) {
            $(runtime.target).css(updateInfo.style);
        }
    }

    /**
     * 处理 mousedown 事件：匹配缩放目标与手柄方向，初始化缩放状态并绑定文档事件。
     * Handle mousedown: resolve the resize target and handle direction, initialize state and bind document events.
     */
    protected _handleMouseDown = (event: MouseEvent) => {
        const {options} = this;
        const {selector, onResizeStart} = options;
        const $clickTarget = $(event.target as HTMLElement);
        const $handle = $clickTarget.closest(RESIZABLE_HANDLE_SELECTOR);
        const handle = $handle[0];
        if (!handle) {
            return;
        }

        const direction = $(handle).z('dir') as ResizableDirection | undefined;
        if (!Resizable.isDirection(direction)) {
            return;
        }

        if (this._state) {
            this._clean();
        }

        const $resizeElement = selector === 'self' ? this.$element : $handle.closest(selector || RESIZABLE_SELECTOR);
        const resizeElement = $resizeElement[0];
        if (!resizeElement) {
            return;
        }

        if (onResizeStart && onResizeStart.call(this, event, resizeElement, direction) === false) {
            return;
        }

        const {hasResizingClass, resizingClass} = options;
        if (resizingClass) {
            $resizeElement.addClass(resizingClass);
        }
        if (hasResizingClass) {
            this.$element.addClass(hasResizingClass);
        }

        event.preventDefault();
        if (!this._setState(event, resizeElement, direction)) {
            if (resizingClass) {
                $resizeElement.removeClass(resizingClass);
            }
            if (hasResizingClass) {
                this.$element.removeClass(hasResizingClass);
            }
            return;
        }

        const {namespace} = this;
        $(document).off(namespace).on(`mousemove${namespace}`, this._handleMouseMove).on(`mouseup${namespace}`, this._handleMouseUp);
    };

    /**
     * 处理 mousemove 事件：通过 requestAnimationFrame 节流持续缩放。
     * Handle mousemove: continuously resize with requestAnimationFrame throttling.
     */
    protected _handleMouseMove = (event: MouseEvent) => {
        if (!this._state || !event.buttons) {
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
     * 处理 mouseup 事件：刷新最终状态、触发结束回调并清理。
     * Handle mouseup: flush final state, fire the end callback and clean up.
     */
    protected _handleMouseUp = (event: MouseEvent) => {
        if (!this._state) {
            return;
        }
        event.preventDefault();
        if (this._raf) {
            cancelAnimationFrame(this._raf);
            this._raf = 0;
        }
        this._setState(event);
        this.options.onResizeEnd?.call(this, event, this._state);
        this._clean();
    };

    /**
     * 清理缩放状态：移除文档事件、类名、动画帧与状态。
     * Clean up resize state: remove document events, classes, animation frame and state.
     */
    protected _clean() {
        $(document).off(this.namespace);
        const {hasResizingClass, resizingClass} = this.options;
        if (hasResizingClass) {
            this.$element.removeClass(hasResizingClass);
        }
        const {resizeElement} = this;
        if (resizeElement && resizingClass) {
            $(resizeElement).removeClass(resizingClass);
        }
        if (this._raf) {
            cancelAnimationFrame(this._raf);
            this._raf = 0;
        }
        this._state = undefined;
        this._runtime = undefined;
    }

    /**
     * 根据当前状态计算尺寸和 transform 偏移。
     * Compute size and transform offsets from the current state.
     */
    protected _getResizeRect(state: ResizableState): ResizeRect {
        const runtime = this._runtime!;
        const {direction} = state;
        const deltaX = state.x - state.startX;
        const deltaY = state.y - state.startY;
        const containerRect = this._getContainerRect();
        const xAxis = this._resizeAxis({
            edge: direction.includes('w') ? 'start' : (direction.includes('e') ? 'end' : 'none'),
            startMin: runtime.startClientLeft,
            startMax: runtime.startClientRight,
            delta: deltaX,
            minSize: this.options.minWidth ?? 0,
            maxSize: this.options.maxWidth ?? Number.POSITIVE_INFINITY,
            bounds: containerRect ? {min: containerRect.left, max: containerRect.right} : undefined,
        });
        const yAxis = this._resizeAxis({
            edge: direction.includes('n') ? 'start' : (direction.includes('s') ? 'end' : 'none'),
            startMin: runtime.startClientTop,
            startMax: runtime.startClientBottom,
            delta: deltaY,
            minSize: this.options.minHeight ?? 0,
            maxSize: this.options.maxHeight ?? Number.POSITIVE_INFINITY,
            bounds: containerRect ? {min: containerRect.top, max: containerRect.bottom} : undefined,
        });

        return {
            width: xAxis.max - xAxis.min,
            height: yAxis.max - yAxis.min,
            left: state.startLeft + xAxis.min - runtime.startClientLeft,
            top: state.startTop + yAxis.min - runtime.startClientTop,
        };
    }

    /**
     * 单轴计算尺寸边缘，先应用最小/最大尺寸，再应用容器限制。
     * Compute one axis edge, applying min/max size first and then container bounds.
     */
    protected _resizeAxis(options: {
        edge: ResizeAxisEdge;
        startMin: number;
        startMax: number;
        delta: number;
        minSize: number;
        maxSize: number;
        bounds?: ResizeAxisBounds;
    }): ResizeAxisBounds {
        const {edge, startMin, startMax, delta, bounds} = options;
        const minSize = Math.max(0, options.minSize);
        const maxSize = Math.max(minSize, options.maxSize);
        let min = startMin;
        let max = startMax;

        if (edge === 'start') {
            min = startMin + delta;
            const size = Moveable.clamp(max - min, minSize, maxSize);
            min = max - size;
        } else if (edge === 'end') {
            max = startMax + delta;
            const size = Moveable.clamp(max - min, minSize, maxSize);
            max = min + size;
        }

        if (bounds) {
            if (edge === 'start') {
                min = Math.max(min, bounds.min);
                max = Math.min(max, bounds.max);
                if (max - min < minSize) {
                    min = Math.max(bounds.min, max - minSize);
                }
            } else if (edge === 'end') {
                min = Math.max(min, bounds.min);
                max = Math.min(max, bounds.max);
                if (max - min < minSize) {
                    max = Math.min(bounds.max, min + minSize);
                }
            } else {
                const size = max - min;
                min = Moveable.clamp(min, bounds.min, bounds.max - size);
                max = min + size;
            }
        }

        if (max < min) {
            max = min;
        }
        return {min, max};
    }

    /**
     * 解析 `container` 选项对应的元素（当可解析为 DOM 元素时）。
     * Resolve the element for the `container` option when it can be resolved to a DOM element.
     */
    protected _getContainerElement(): Element | null {
        const {container} = this.options;
        if (!container || container === 'window') {
            return null;
        }
        if (container === 'self') {
            return this.element;
        }
        if (container === 'parent') {
            return this.element.parentElement;
        }
        if (typeof container === 'string') {
            return document.querySelector(container);
        }
        if (container instanceof Element) {
            return container;
        }
        return null;
    }

    /**
     * 解析 `container` 选项对应的区域矩形（视口坐标），并按 `containerPadding` 收缩。
     * Resolve the area rect for the `container` option, shrunk by `containerPadding`.
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
            const element = this._getContainerElement();
            if (element) {
                const box = element.getBoundingClientRect();
                rect = {left: box.left, top: box.top, right: box.right, bottom: box.bottom};
            } else if (typeof (container as {getBoundingClientRect?: unknown}).getBoundingClientRect === 'function') {
                const box = (container as {getBoundingClientRect(): DOMRect}).getBoundingClientRect();
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
     * 获取所有匹配 selector 的目标元素（selector 为 "self" 时返回根元素）。
     * Get all target elements matching selector (returns the root element when selector is "self").
     */
    protected _getMatchingTargets(): HTMLElement[] {
        const {selector} = this.options;
        if (selector === 'self') {
            return [this.element];
        }
        const targets: HTMLElement[] = [];
        if (selector) {
            this.$element.find(selector).each((_index, element) => {
                targets.push(element as HTMLElement);
            });
        }
        return targets;
    }

    /**
     * 移除自动生成的缩放手柄。
     * Remove generated resize handles.
     */
    protected _removeGeneratedHandles() {
        this.$element.find(`${RESIZABLE_HANDLE_SELECTOR}[${RESIZABLE_GENERATED_HANDLE_ATTR}]`).each((_index, element) => {
            element.remove();
        });
    }

    /**
     * 判断值是否为合法方向。
     * Check whether a value is a valid direction.
     */
    static isDirection(value: unknown): value is ResizableDirection {
        return typeof value === 'string' && RESIZABLE_DIRECTIONS.includes(value as ResizableDirection);
    }
}
