import {ResizableState} from './resizable-state';

/**
 * 尺寸位置数据
 */
export interface SizeRect {
    /**
     * 宽度
     */
    width: number;
    /**
     * 高度
     */
    height: number;
    /**
     * 横向偏移
     */
    x: number;
    /**
     * 纵向偏移
     */
    y: number;
}

/**
 * 尺寸位置变化数据
 */
export interface ChangeRect {
    /**
     * 宽度变化
     */
    dw: number;
    /**
     * 高度变化
     */
    dh: number;
    /**
     * 横向偏移
     */
    dx: number;
    /**
     * 纵向偏移
     */
    dy: number;
}

/**
 * 元素尺寸位置及变化数据
 */
type ResizeMatrix = SizeRect & ChangeRect;

export type ResizableOption = {
    /**
     * 边缘检测设置
     */
    edgeDetection?: boolean | EdgeDetectionConfig;

    /**
     * x 方向基准边缘
     */
    x: 'left' | 'right';
    /**
     * y 方向基准边缘
     */
    y: 'top' | 'bottom';

    /**
     * 最小宽度
     */
    minWidth: number;
    /**
     * 最小高度
     */
    minHeight: number;

    /**
     * 当位置/尺寸尺寸改变时触发
     * @param state 内部状态
     * @param matrix 变化数据
     */
    onChange?: (state: ResizableState, matrix: ResizeMatrix) => void;
};
