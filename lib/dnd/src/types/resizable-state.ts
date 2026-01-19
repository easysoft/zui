export type ResizableState = {
    /**
     * 触发的方向
     */
    handle: 'n' | 'e' | 's' | 'w' | 'ne' | 'nw' | 'se' | 'sw';

    /**
     * 鼠标位置 screenX/screenY
     */
    startX: number;
    startY: number;
};
