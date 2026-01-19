/**
 * 边缘检测详细设置
 */
export interface DistanceRect {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

/**
 * 边缘检测设置
 */
export interface EdgeDetectionConfig {
    /**
     * 容器（暂时仅支持 viewport）
     *
     * - screen 屏幕
     * - window 窗口
     * - viewport 视口
     * - parent 父元素
     * - selector 选择器
     */
    container: 'screen' | 'window' | 'viewport' | 'parent' | 'selector';

    /**
     * 选择器（仅当 container 为 'selector' 时有效）
     */
    selector?: string;

    /**
     * 边缘距离（单位像素）
     */
    distance: number | DistanceRect;
}

/**
 * 边缘检测结果
 */
export interface EdgeDetectionResult {
    /**
     * x/y 方向的偏移量，用于位置修正
     */
    x: number;
    y: number;
}
