export type ResizableDirection = 'n' | 'e' | 's' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

export type ResizableState = {
    /** 当前关联的鼠标事件。The current mouse event. */
    event: MouseEvent;

    /** 触发的方向。The direction triggered. */
    direction: ResizableDirection;

    /** 移动开始时鼠标 x 坐标。The starting mouse x coordinate. */
    startX: number;

    /** 移动开始时鼠标 y 坐标。The starting mouse y coordinate. */
    startY: number;

    /** 当前鼠标 x 坐标。Current mouse x coordinate. */
    x: number;

    /** 当前鼠标 y 坐标。Current mouse y coordinate. */
    y: number;

    /** 移动开始时目标元素的 left 偏移量。The target's left offset at move start. */
    startLeft: number;

    /** 移动开始时目标元素的 top 偏移量。The target's top offset at move start. */
    startTop: number;
};
