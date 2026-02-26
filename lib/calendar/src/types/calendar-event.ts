import type {IconType} from '@zui/core';
import type {DateLike} from '@zui/helpers';

/**
 * 日历事件的属性接口
 */
export type CalendarEvent = {
    /** 日历事件的唯一标识 */
    id: string;

    /** 日历事件的标题 */
    title: string;

    /** 日历事件的所属日历集 */
    category?: string;

    /** 日历事件是否为全天事件 */
    allDay?: boolean;

    /** 日历事件的描述 */
    desc?: string;

    /** 日历事件的开始时间 */
    start: DateLike;

    /** 日历事件的结束时间 */
    end?: DateLike;

    /** 日历集的颜色 */
    color?: string;

    /** 日历集的背景颜色 */
    background?: string;

    /** 日历事件的图标 */
    icon?: IconType;

    /** 是否只读 */
    readonly?: boolean;

    /** 是否隐藏 */
    hidden?: boolean;

    /** 日历事件的排序 */
    order?: number;

    /** 日历事件的自定义数据 */
    data?: Record<string, unknown>;
};
