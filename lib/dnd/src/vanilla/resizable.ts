import {Component, $} from '@zui/core';
import {ResizableOptions, ResizableState, SizeRect, ChangeRect, EdgeDetectionConfig, DistanceRect} from '../types';
import {Moveable} from './moveable';

import '../css/resizable.css';

const RESIZABLE_HANDLER_CLASS = 'zui-resizable-handle';

/**
 * 边缘数据
 */
type EdgeRect = SizeRect & {
    padding: number | DistanceRect;
};

/**
 * 边缘检测结果
 */
interface EdgeDetectionResult {
    x: boolean;
    y: boolean;
}

export class Resizable extends Component<ResizableOptions> {
    static NAME = 'Resizable';

    static DEFAULT: Partial<ResizableOptions> = {
        edgeDetection: false,
        x: 'left',
        y: 'top',
        minWidth: 0,
        minHeight: 0,
    };

    protected _state?: ResizableState;

    /**
     * 是否按下鼠标
     */
    protected _isMouseDown = false;

    /**
     * 是否启用边缘检测
     */
    get isEdgeDetectionEnabled() {
        return !!this.options.edgeDetection;
    }

    /**
     * 获取边缘检测区域的相关数值
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

    get handles() {
        return $(this._element).find(`.${RESIZABLE_HANDLER_CLASS}`);
    }

    /**
     * 初始化
     */
    async afterInit() {
        // 添加 8 个方向的拖动目标
        const container = $(this._element);

        const directions = ['n', 'e', 's', 'w', 'ne', 'nw', 'se', 'sw'];
        directions.forEach((dir) => {
            const handle = $(`<div class="${RESIZABLE_HANDLER_CLASS}" data-dir="${dir}"></div>`);

            container.append(handle);
        });

        $(this.handles).on('mousedown', this._handleMouseDown);
    }

    /**
     * 鼠标按下
     */
    protected _handleMouseDown = (event: MouseEvent) => {
        event.preventDefault();

        // 数据和状态初始化
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
     * 鼠标移动
     */
    protected _handleMouseMove = (event: MouseEvent) => {
        event.preventDefault();

        // 检查是否按下鼠标按钮
        if (!this._isMouseDown || !event.buttons) return;

        // 边缘检测
        // 注意：目前仅判断鼠标指针位置
        // 是否超出边缘
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
     * 鼠标松开
     */
    protected _handleMouseUp = (event: MouseEvent) => {
        event.preventDefault();

        this._isMouseDown = false;

        $(document).off(`mousemove${this.namespace} mouseup${this.namespace}`);
    };

    /**
     * 对鼠标指针进行边缘检测
     * @param x 鼠标指针 clientX
     * @param y 鼠标指针 clientY
     * @returns EdgeDetectionResult | false 是否碰撞到边缘
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
        // 容器的边缘位置
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
     * 处理鼠标移动
     * @param x 鼠标指针 screenX
     * @param y 鼠标指针 screenY
     * @param ox 指针 x 方向是否越界
     * @param oy 指针 y 方向是否越界
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

        // 定位基准边缘
        const baseX = this.options.x;
        const baseY = this.options.y;

        // 逐个精确处理尺寸和位置变化
        // 注意，与元素的定位边缘有关
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
     * 移动和调整尺寸
     */
    protected _resizeBy = (rect: ChangeRect) => {
        const targetRect = this._element.getBoundingClientRect();
        const translate = Moveable.getTranslate(this._element);

        let width = targetRect.width + rect.dw;
        let height = targetRect.height + rect.dh;
        let x = translate.left + rect.dx;
        let y = translate.top + rect.dy;

        // 最小宽度/高度检测
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

    destroy(): void {
        $(this.handles).off('mousedown');
        $(document).off(`mousemove${this.namespace} mouseup${this.namespace}`);
    }
}
