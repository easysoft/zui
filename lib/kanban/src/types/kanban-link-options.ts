import type {Item} from '@zui/common-list';

export type KanbanLinkSide = '' | 'top' | 'right' | 'left' | 'bottom';

export type KanbanLinkPointType = 'none' | 'arrow' | 'dot' | 'diamond' | 'square';

export type KanbanLinkShape = 'straight' | 'fold' | 'curve';

export type KanbanLinkStyle = 'solid' | 'dashed' | 'dotted';

export interface KanbanLinkOptions extends Item {
    /** 连线起始元素 ID。 */
    from: string;

    /** 连线结束元素 ID。 */
    to: string;

    /** 起始指向的元素侧面位置。 */
    fromSide?: KanbanLinkSide; // "top" | "right" | "left" | "bottom"

    /** 结束指向的元素侧面位置。 */
    toSide?: KanbanLinkSide; // "top" | "right" | "left" | "bottom"

    /** 起始点类型。 */
    fromPoint?: KanbanLinkPointType; // "arrow" | "dot" | "triangle" | "diamond"

    /** 结束点类型。 */
    toPoint?: KanbanLinkPointType; // "arrow" | "dot" | "triangle" | "diamond"

    /** 线条颜色。 */
    color?: string;

    /** 线条样式。 */
    lineStyle?: KanbanLinkStyle; // "solid" | "dashed" | "dotted"

    /** 线条宽度。 */
    weight?: number;

    /** 线条形状。 */
    shape?: KanbanLinkShape; // "line" | "fold" | "curve"

    /** 标签文本。 */
    text?: string;

    /** 文本颜色。 */
    textColor?: string;

    /** 文本大小。 */
    textSize?: number;

    deleted?: boolean;
}
