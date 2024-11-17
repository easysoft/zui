import {definePlugin} from '../../helpers/shared-plugins';
import {mousemove} from '../mousemove';

import type {DTableMousemoveTypes} from '../mousemove';
import type {ColInfoLike} from '../../types/col';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {RowInfoLike} from '../../types/row';

export type ScrollSide = 'left' | 'right' | 'top' | 'bottom' | 'x' | 'y';

export interface ScrollToMouseOption {
    interval: number,
    onlyInside: boolean,
    speed: number,
    maxStep:  number,
    delay: number,
    detectPadding: number,
    side?: ScrollSide | ScrollSide[],
}

export type ScrollToMouseInfo = ScrollToMouseOption & {startTime: number, position?: {x: number; y: number}};

export interface DTableAutoscrollTypes {
    methods: {
        scrollTo: (this: DTableAutoscroll, info: {col?: ColInfoLike, row?: RowInfoLike, extra?: number}) => boolean;
        startScrollToMouse: (this: DTableAutoscroll, options?: Partial<ScrollToMouseOption>) => void;
        stopScrollToMouse: (this: DTableAutoscroll) => void;
    },
    data: {
        scrollToTimer?: number;
        scrollToMouse?: ScrollToMouseInfo;
    }
}

export type DTableAutoscroll = DTableWithPlugin<DTableAutoscrollTypes, [DTableMousemoveTypes]>;

function tryScrollToMouse(this: DTableAutoscroll) {
    const {scrollToMouse} = this.data;
    if (!scrollToMouse) {
        return this.stopScrollToMouse();
    }
    const {position, startTime, delay} = scrollToMouse;
    if (!position || (Date.now() - startTime) < delay) {
        return;
    }

    const rowsBounding = this.ref.current?.querySelector('.dtable-body')?.getBoundingClientRect();
    if (!rowsBounding) {
        return;
    }
    const centerBounding = this.ref.current?.querySelector('.dtable-scroll-center')?.getBoundingClientRect();
    const {maxStep, detectPadding, speed, side} = scrollToMouse;
    const {x, y} = position;
    const {top, bottom} = rowsBounding;
    const {left, right} = centerBounding || rowsBounding;
    let deltaLeft = 0;
    if (x < (left - detectPadding)) {
        deltaLeft = -Math.max(maxStep, (left - detectPadding) - x);
    } else if (x > (right - detectPadding)) {
        deltaLeft = Math.max(maxStep, x - (right - detectPadding));
    }
    let deltaTop = 0;
    if (y < (top - detectPadding)) {
        deltaTop = -Math.max(maxStep, (top - detectPadding) - y);
    } else if (y > (bottom - detectPadding)) {
        deltaTop = Math.max(maxStep, y - (bottom - detectPadding));
    }
    if (side) {
        const scrollSides = new Set((Array.isArray(side) ? side : [side]).reduce<ScrollSide[]>((sides, item) => {
            if (item === 'x') {
                sides.push('left', 'right');
            } else if (item === 'y') {
                sides.push('top', 'bottom');
            } else {
                sides.push(item);
            }
            return sides;
        }, []));
        if (!scrollSides.has('left') && deltaLeft < 0 || (!scrollSides.has('right') && deltaLeft > 0)) {
            deltaLeft = 0;
        }
        if (!scrollSides.has('top') && deltaTop < 0 || (!scrollSides.has('bottom') && deltaTop > 0)) {
            deltaTop = 0;
        }
    }
    const state: {scrollLeft?: number, scrollTop?: number} = {};
    if (deltaLeft !== 0) {
        state.scrollLeft = this.layout.scrollLeft + speed * deltaLeft;
    }
    if (deltaTop !== 0) {
        state.scrollTop = this.layout.scrollTop + speed * deltaTop;
    }
    this.scroll(state);
}

const autoscrollPlugin: DTablePlugin<DTableAutoscrollTypes, [DTableMousemoveTypes]> = {
    name: 'autoscroll',
    plugins: [mousemove],
    events: {
        document_mousemovesmooth(event) {
            if (!this.data.scrollToMouse) {
                return;
            }
            const {clientX: x, clientY: y} = event as MouseEvent;
            this.data.scrollToMouse.position = {x, y};
        },
    },
    methods: {
        scrollTo({col, row, extra = 2}) {
            const colInfo = this.getColInfo(col);
            const rowInfo = this.getRowInfo(row);
            if (!colInfo && !rowInfo) {
                return false;
            }
            const scrollInfo: {scrollLeft?: number, scrollTop?: number} = {};
            const {layout} = this;
            if (colInfo) {
                const {scrollLeft, cols: colsInfo} = layout;
                const colRight = colInfo.left + colInfo.realWidth;
                if (colInfo.left < scrollLeft) {
                    scrollInfo.scrollLeft = colInfo.left - extra;
                } else if (colRight > (colsInfo.center.width + scrollLeft)) {
                    scrollInfo.scrollLeft = colRight - colsInfo.center.width + extra;
                }
            }
            if (rowInfo) {
                const {scrollTop, rowHeight, rowsHeight} = layout;
                const rowBottom = rowInfo.top + rowHeight;
                if (rowInfo.top < scrollTop) {
                    scrollInfo.scrollTop = rowInfo.top - extra;
                } else if (rowBottom > (rowsHeight + scrollTop)) {
                    scrollInfo.scrollTop = rowBottom - rowsHeight + extra;
                }
            }

            this.scroll(scrollInfo);
            return true;
        },
        startScrollToMouse(options) {
            const setting = {
                interval: 60,
                speed: 0.5,
                delay: 200,
                maxStep: this.options.rowHeight,
                onlyInside: false,
                detectPadding: 30,
                startTime: Date.now(),
                ...options,
            } as ScrollToMouseInfo;
            this.data.scrollToMouse = setting;
            clearInterval(this.data.scrollToTimer);
            this.data.scrollToTimer = window.setInterval(tryScrollToMouse.bind(this), setting.interval);
        },
        stopScrollToMouse() {
            clearInterval(this.data.scrollToTimer);
            this.data.scrollToMouse = undefined;
        },
    },
    onUnmounted() {
        clearInterval(this.data.scrollToTimer);
    },
};

export const autoscroll = definePlugin(autoscrollPlugin);
