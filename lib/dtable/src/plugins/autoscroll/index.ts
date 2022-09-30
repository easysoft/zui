import {definePlugin} from '../../helpers/shared-plugins';

export interface DTableAutoscrollTypes {
    methods: {
        scrollTo: (this: DTableAutoscroll, info: {col?: ColInfoLike, row?: RowInfoLike, extra?: number, delay?: number}) => boolean;
        startScrollToMouse: (this: DTableAutoscroll, options?: {interval?: number, onlyInside?: boolean}) => void;
        stopScrollToMouse: (this: DTableAutoscroll) => void;
    },
    data: {
        scrollToTimer?: number;
    }
}

export type DTableAutoscroll = DTableWithPlugin<DTableAutoscrollTypes>;

export const autoscroll: DTablePlugin<DTableAutoscrollTypes> = {
    name: 'autoscroll',
    methods: {
        scrollTo({col, row, extra = 2, delay = 0}) {
            if (this.data.scrollToTimer) {
                clearTimeout(this.data.scrollToTimer);
            }
            if (delay) {
                this.data.scrollToTimer = window.setTimeout(() => this.scrollTo({col, row, extra}), delay);
                return true;
            }
            const colInfo = this.getColInfo(col);
            const rowInfo = this.getRowInfo(row);
            if (!colInfo && !rowInfo) {
                return false;
            }
            const scrollInfo: {scrollLeft?: number, scrollTop?: number} = {};
            const {layout} = this;
            if (colInfo) {
                const {scrollLeft, colsInfo} = layout;
                const colRight = colInfo.left + colInfo.realWidth;
                if (colInfo.left < scrollLeft) {
                    scrollInfo.scrollLeft = colInfo.left - extra;
                } else if (colRight > (colsInfo.scrollWidth + scrollLeft)) {
                    scrollInfo.scrollLeft = colRight - colsInfo.scrollWidth + extra;
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
    },
};

export default definePlugin(autoscroll);
