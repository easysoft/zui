import {$} from '@zui/core';

export type DocumentMouseHandler = (event: MouseEvent) => void;

/**
 * 绑定 document 级别的 mousemove/mouseup 跟踪事件。
 * Bind document-level mousemove/mouseup tracking events.
 */
export function bindDocumentMouseEvents(namespace: string, onMove: DocumentMouseHandler, onUp: DocumentMouseHandler) {
    $(document).off(namespace).on(`mousemove${namespace}`, onMove).on(`mouseup${namespace}`, onUp);
}

/**
 * 移除同 namespace 下的 document 鼠标跟踪事件。
 * Remove document mouse tracking events under the same namespace.
 */
export function unbindDocumentMouseEvents(namespace: string) {
    $(document).off(namespace);
}

/**
 * 用 requestAnimationFrame 节流鼠标更新，并取消上一帧未执行的更新。
 * Throttle mouse updates with requestAnimationFrame and cancel the previous pending frame.
 */
export function requestMouseMoveFrame(currentRaf: number, callback: FrameRequestCallback): number {
    if (currentRaf) {
        cancelAnimationFrame(currentRaf);
    }
    return requestAnimationFrame(callback);
}

/**
 * 取消待执行的鼠标更新帧，并返回 0 方便重置字段。
 * Cancel a pending mouse update frame and return 0 for field reset.
 */
export function cancelMouseMoveFrame(raf: number): 0 {
    if (raf) {
        cancelAnimationFrame(raf);
    }
    return 0;
}
