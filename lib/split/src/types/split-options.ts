import type SplitJS from 'split.js';
import type {Selector, SizeSetting} from '@zui/core';

export interface SplitOptions extends Omit<SplitJS.Options, 'sizes'> {
    /** 折叠/展开时是否启用过渡动画。Whether to animate collapse/expand transitions. */
    animation?: boolean;

    /**
     * 各分栏的初始尺寸，支持百分比（`'50%'`）、像素（`'125px'`/数字）、分数（`'1/2'`）或 `undefined`/`null` 表示自动分配。
     * Initial size of each pane. Accepts percentages, pixels, fractions, or `undefined`/`null` for auto distribution.
     */
    sizes?: (SizeSetting | undefined | null)[];

    /** 是否为垂直（上下）分栏，默认水平（左右）。Whether to split vertically; defaults to horizontal. */
    vertical?: boolean;

    /**
     * 分栏元素，默认取根元素下 `.split-cell` 子元素。可为选择器、元素或它们的数组。
     * The pane elements; defaults to `.split-cell` children of the root. A selector, element, or array of them.
     */
    elements?: Selector | Selector[];

    /**
     * 是否在分隔条上生成折叠按钮。传布尔值对全部分隔条生效，或传布尔数组逐个分隔条控制。
     * Whether to render a toggle button on gutters. A boolean applies to all, or a boolean array controls each gutter.
     */
    toggleBtn?: boolean | boolean[];

    /** 是否允许双击分隔条折叠/展开，默认 `true`。Whether double-clicking a gutter toggles collapse; defaults to `true`. */
    dblClickToggle?: boolean;
}
