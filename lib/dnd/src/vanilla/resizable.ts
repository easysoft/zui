import {Component, $} from '@zui/core';
import {ResizableOptions, ResizableState, SizeRect, ChangeRect, EdgeDetectionConfig, DistanceRect} from '../types';
import {Moveable} from './moveable';

import '../css/resizable.css';

/** 缩放手柄元素的 CSS 类名。CSS class name for resize handle elements. */
const RESIZABLE_HANDLER_CLASS = 'zui-resizable-handle';

/**
 * 边缘检测区域的矩形描述，包含位置、尺寸和内边距。
 * Rectangle describing the edge detection area, including position, dimensions, and padding.
 */
type EdgeRect = SizeRect & {
    padding: number | DistanceRect;
};

/**
 * 边缘检测结果：各轴方向上是否超出边界。
 * Edge detection result: whether each axis has exceeded the boundary.
 */
interface EdgeDetectionResult {
    /** x 方向是否越界。Whether x-axis is out of bounds. */
    x: boolean;
    /** y 方向是否越界。Whether y-axis is out of bounds. */
    y: boolean;
}

/**
 * 元素缩放组件。在目标元素的八个方向（上、下、左、右及四个角）生成拖拽手柄，
 * 通过鼠标拖拽实现元素的尺寸调整和位置偏移，支持最小宽高限制和边缘检测。
 *
 * Element resize component. Creates drag handles in eight directions (N/S/E/W and four corners)
 * around the target element. Supports resizing via mouse drag with minimum size constraints
 * and optional edge detection.
 */
export class Resizable extends Component<ResizableOptions> {
    static NAME = 'Resizable';

    static DEFAULT: Partial<ResizableOptions> = {
        edgeDetection: false,
        x: 'left',
        y: 'top',
        minWidth: 0,
        minHeight: 0,
    };

    /** 当前缩放状态。Current resize state. */
    protected _state?: ResizableState;

    /** 鼠标是否处于按下状态。Whether the mouse button is currently held down. */
    protected _isMouseDown = false;

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
    get edgeRect(): EdgeRect {
        const rect: EdgeRect = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            padding: 0,
        };

        if (this.isEdgeDetectionEnabled) {
            const {container, distance}: EdgeDetectionConfig = this.options.edgeDetection;
            if (container === 'viewport') {
                rect.width = window.innerWidth;
                rect.height = window.innerHeight;
            }

            rect.padding = distance;
        }

        return rect;
    }

    /** 获取所有缩放手柄元素。Get all resize handle elements. */
    get handles() {
        return $(this._element).find(`.${RESIZABLE_HANDLER_CLASS}`);
    }

    /**
     * 初始化：在目标元素内创建八个方向的缩放手柄并绑定 mousedown 事件。
     * Initialize: create eight directional resize handles inside the target element and bind mousedown.
     */
    async afterInit() {
        const container = $(this._element);

        const directions = ['n', 'e', 's', 'w', 'ne', 'nw', 'se', 'sw'];
        directions.forEach((dir) => {
            const handle = $(`<div class="${RESIZABLE_HANDLER_CLASS}" data-dir="${dir}"></div>`);

            container.append(handle);
        });

        $(this.handles).on('mousedown', this._handleMouseDown);
    }

    /**
     * 处理 mousedown 事件：记录拖拽方向和起始鼠标坐标，绑定全局 mousemove/mouseup 事件。
     * Handle mousedown: record the drag direction and starting mouse coordinates,
     * bind global mousemove/mouseup events.
     */
    protected _handleMouseDown = (event: MouseEvent) => {
        event.preventDefault();

        const dir = $(event.target).data('dir');

        const state: ResizableState = {
            handle: dir,
            startX: event.screenX,
            startY: event.screenY,
        };

        this._state = state;
        this._isMouseDown = true;

        $(document)
            .on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this))
            .on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
    };

    /**
     * 处理 mousemove 事件：执行边缘检测后计算尺寸变化并应用。
     * Handle mousemove: perform edge detection, compute size changes, and apply them.
     */
    protected _handleMouseMove = (event: MouseEvent) => {
        event.preventDefault();

        if (!this._isMouseDown || !event.buttons) return;

        let result = {
            x: false,
            y: false,
        };
        if (this.isEdgeDetectionEnabled) {
            result = this._edgeDetect(event.clientX, event.clientY);
        }

        this._moveTo(event.screenX, event.screenY, result.x, result.y);

        this._state = {
            ...this._state,
            startX: event.screenX,
            startY: event.screenY,
        };
    };

    /**
     * 处理 mouseup 事件：结束缩放操作，移除全局事件监听。
     * Handle mouseup: end the resize operation and remove global event listeners.
     */
    protected _handleMouseUp = (event: MouseEvent) => {
        event.preventDefault();

        this._isMouseDown = false;

        $(document).off(`mousemove${this.namespace} mouseup${this.namespace}`);
    };

    /**
     * 对鼠标指针位置进行边缘检测，判断各轴方向是否超出容器边界。
     * Perform edge detection on the mouse pointer position, checking if each axis exceeds container bounds.
     *
     * @param x 鼠标 clientX 坐标。Mouse clientX coordinate.
     * @param y 鼠标 clientY 坐标。Mouse clientY coordinate.
     * @returns 各轴的越界状态，未启用边缘检测时返回 false。Per-axis out-of-bounds status, or false if disabled.
     */
    protected _edgeDetect(x: number, y: number): EdgeDetectionResult | false {
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
        const left = edgeX + pLeft;
        const right = edgeX + width - pRight;
        const top = edgeY + pTop;
        const bottom = edgeY + height - pBottom;

        return {
            x: x < left || x > right,
            y: y < top || y > bottom,
        };
    }

    /**
     * 根据拖拽方向和鼠标位移计算尺寸与位置的变化量（ChangeRect），然后调用 `_resizeBy` 应用。
     * 不同方向的拖拽手柄对宽高和偏移的影响各不相同，且受定位基准边缘（x/y）影响。
     *
     * Compute size and position deltas (ChangeRect) based on the drag direction and mouse displacement,
     * then call `_resizeBy` to apply. Different handle directions affect width/height/offset differently,
     * and behavior depends on the positioning anchor edge (x/y option).
     *
     * @param x  当前 screenX 坐标。Current screenX.
     * @param y  当前 screenY 坐标。Current screenY.
     * @param ox x 方向是否越界（越界时该轴位移归零）。Whether x-axis is out of bounds (zeroes the axis delta).
     * @param oy y 方向是否越界（越界时该轴位移归零）。Whether y-axis is out of bounds (zeroes the axis delta).
     */
    protected _moveTo = (x: number, y: number, ox: boolean, oy: boolean) => {
        const {
            handle,
            startX,
            startY,
        } = this._state;

        let rect: ChangeRect = {
            dx: 0,
            dy: 0,
            dw: 0,
            dh: 0,
        };

        const cx = ox ? 0 : x - startX;
        const cy = oy ? 0 : y - startY;

        const baseX = this.options.x;
        const baseY = this.options.y;

        switch (handle) {
            case 'n':
                rect = {
                    dx: 0,
                    dy: baseY === 'top' ? cy : 0,
                    dw: 0,
                    dh: -cy,
                };
                break;
            case 's':
                rect = {
                    dx: 0,
                    dy: baseY === 'bottom' ? cy : 0,
                    dw: 0,
                    dh: cy,
                };
                break;
            case 'w':
                rect = {
                    dx: baseX === 'left' ? cx : 0,
                    dy: 0,
                    dw: -cx,
                    dh: 0,
                };
                break;
            case 'e':
                rect = {
                    dx: baseX === 'right' ? cx : 0,
                    dy: 0,
                    dw: cx,
                    dh: 0,
                };
                break;
            case 'ne':
                rect = {
                    dx: baseX === 'right' ? cx : 0,
                    dy: baseY === 'top' ? cy : 0,
                    dw: cx,
                    dh: -cy,
                };
                break;
            case 'nw':
                rect = {
                    dx: baseX === 'left' ? cx : 0,
                    dy: baseY === 'top' ? cy : 0,
                    dw: -cx,
                    dh: -cy,
                };
                break;
            case 'se':
                rect = {
                    dx: baseX === 'right' ? cx : 0,
                    dy: baseY === 'bottom' ? cy : 0,
                    dw: cx,
                    dh: cy,
                };
                break;
            case 'sw':
                rect = {
                    dx: baseX === 'left' ? cx : 0,
                    dy: baseY === 'bottom' ? cy : 0,
                    dw: -cx,
                    dh: cy,
                };
                break;
            default:
        }

        this._resizeBy(rect);
    };

    /**
     * 将 ChangeRect 中的增量应用到目标元素的尺寸和位置上。
     * 使用 `transform: translate()` 定位，并强制执行最小宽高约束。
     *
     * Apply the ChangeRect deltas to the target element's size and position.
     * Uses `transform: translate()` for positioning and enforces minimum width/height constraints.
     */
    protected _resizeBy = (rect: ChangeRect) => {
        const targetRect = this._element.getBoundingClientRect();
        const translate = Moveable.getTranslate(this._element);

        let width = targetRect.width + rect.dw;
        let height = targetRect.height + rect.dh;
        let x = translate.left + rect.dx;
        let y = translate.top + rect.dy;

        const {
            minWidth,
            minHeight,
        } = this.options;

        if (minWidth && width < minWidth) {
            width = minWidth;
            x = translate.left;
        }
        if (minHeight && height < minHeight) {
            height = minHeight;
            y = translate.top;
        }

        this._element.style.width = `${width}px`;
        this._element.style.height = `${height}px`;
        this._element.style.transform = `translate(${x}px, ${y}px)`;

        this.options.onChange?.call(this, this._state, {
            ...rect,
            width,
            height,
            x,
            y,
        });
    };

    /**
     * 销毁组件：移除手柄事件监听和全局事件监听。
     * Destroy the component: remove handle event listeners and global event listeners.
     */
    destroy(): void {
        $(this.handles).off('mousedown');
        $(document).off(`mousemove${this.namespace} mouseup${this.namespace}`);
    }
}
