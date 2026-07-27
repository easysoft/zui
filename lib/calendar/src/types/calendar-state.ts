import type {CalendarCategory} from './calendar-category';
import type {CalendarEvent} from './calendar-event';
import type {CalendarViewMode} from './calendar-view-mode';

/**
 * 日历组件的状态接口
 */
export type CalendarState = {
    /** 当前日期 */
    date: number;

    /** 日历视图 */
    mode: CalendarViewMode;

    /** 是否只读 */
    readonly: boolean;

    /** 修改的日历集 */
    modifidCategories: CalendarCategory[];

    /** 修改的日历事件 */
    modifiedEvents: CalendarEvent[];
};
