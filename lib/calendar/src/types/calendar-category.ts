import type {IconType} from '@zui/core';
import type {CalendarEvent} from './calendar-event';

/**
 * 日历集的属性接口
 */
export type CalendarCategory = {
    /** 日历集的唯一标识 */
    id: string;

    /** 日历集的名称 */
    name?: string;

    /** 日历集的描述 */
    desc?: string;

    /** 日历集的颜色 */
    color?: string;

    /** 日历集的背景颜色 */
    background?: string;

    /** 日历集的图标 */
    icon?: IconType;

    /** 日历集的事件 */
    events?: CalendarEvent[];

    /** 是否只读 */
    readonly?: boolean;

    /** 日历集的排序 */
    order?: number;

    /** 是否隐藏 */
    hidden?: boolean;

    /** 日历集的自定义数据 */
    data?: Record<string, unknown>;
};
