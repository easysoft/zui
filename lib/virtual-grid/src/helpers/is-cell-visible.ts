import {BoundingRect} from '../types';

export function isCellVisible(cellBounding: BoundingRect, visibleBounding: BoundingRect, offsetX = 0, offsetY = 0): boolean {
    const left = cellBounding.left + offsetX;
    const top = cellBounding.top + offsetY;
    return !(left > (visibleBounding.left + visibleBounding.width) || top > (visibleBounding.top + visibleBounding.height) || (left + cellBounding.width) < visibleBounding.left || (top + cellBounding.height) < visibleBounding.top);
}
