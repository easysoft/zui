import type {Cash} from '@zui/core';
import type {DistanceRect} from '../types/edge-detection';
import type {MoveableContainer} from '../types/moveable-options';

export type DndSelector = 'self' | (string & {});

/**
 * 将数值夹取到 [min, max] 区间；当 min > max（元素大于区域）时对齐到 min。
 * Clamp a value into [min, max]; aligns to min when min > max.
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

/**
 * 将 containerPadding 归一化为四边数值。允许负值，不做非负约束。
 * Normalize containerPadding into four side values. Negative values are allowed.
 */
export function normalizePadding(padding?: number | Partial<DistanceRect>): DistanceRect {
    if (typeof padding === 'number') {
        return {left: padding, top: padding, right: padding, bottom: padding};
    }
    return {
        left: padding?.left ?? 0,
        top: padding?.top ?? 0,
        right: padding?.right ?? 0,
        bottom: padding?.bottom ?? 0,
    };
}

/**
 * 从元素的 computed transform 中解析 translate 偏移量。
 * Parse the translate offset from an element's computed transform matrix.
 */
export function getTranslate(element: HTMLElement): {left: number; top: number} {
    const style = window.getComputedStyle(element);
    const transform = style.getPropertyValue('transform');
    if (transform === 'none') {
        return {left: 0, top: 0};
    }
    const matrix = transform.match(/^matrix\((.+)\)$/);
    if (!matrix) {
        return {left: 0, top: 0};
    }
    const values = matrix[1].split(', ');
    return {
        left: parseFloat(values[4]),
        top: parseFloat(values[5]),
    };
}

/**
 * 判断点击目标是否满足 handle 限制。
 * Check whether the clicked target satisfies the handle constraint.
 */
export function matchesHandle($target: Cash, handle?: string): boolean {
    return !handle || !!$target.closest(handle).length;
}

/**
 * 解析 container 选项对应的元素（当可解析为 DOM 元素时）。
 * Resolve the element for a container option when it can be resolved to a DOM element.
 */
export function resolveContainerElement(container: MoveableContainer | undefined, rootElement: Element): Element | null {
    if (!container || container === 'window') {
        return null;
    }
    if (container === 'self') {
        return rootElement;
    }
    if (container === 'parent') {
        return rootElement.parentElement;
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
 * 解析 container 选项对应的区域矩形（视口坐标），并按 containerPadding 收缩。
 * Resolve the area rect for a container option, shrunk by containerPadding.
 */
export function resolveContainerRect(
    container: MoveableContainer | undefined,
    containerPadding: number | Partial<DistanceRect> | undefined,
    rootElement: Element,
): DistanceRect | null {
    if (container === false || container === undefined) {
        return null;
    }

    let rect: {left: number; top: number; right: number; bottom: number} | undefined;
    if (container === 'window') {
        rect = {left: 0, top: 0, right: window.innerWidth, bottom: window.innerHeight};
    } else {
        const element = resolveContainerElement(container, rootElement);
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

    const padding = normalizePadding(containerPadding);
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
export function getMatchingTargets(rootElement: HTMLElement, selector?: DndSelector): HTMLElement[] {
    if (selector === 'self') {
        return [rootElement];
    }
    if (!selector) {
        return [];
    }
    return Array.from(rootElement.querySelectorAll<HTMLElement>(selector));
}
