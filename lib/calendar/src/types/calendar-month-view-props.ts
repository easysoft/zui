import type {ListitemProps} from '@zui/list';
import type {CalendarCategory} from './calendar-category';
import type {CalendarEvent} from './calendar-event';

/**
 * 月视图的属性接口
 */
export type CalendarMonthViewProps = {
    /** 当前日期 */
    date?: number;

    /** 一周从星期几开始，默认 1 */
    weekStart?: number;

    /** 视图上最大日历事件数量 */
    maxEventCount?: number;

    /** 日历集 */
    categories?: CalendarCategory[];

    /** 日历事件 */
    events?: CalendarEvent[];

    /** 日期格式，默认 'yyyy-MM-dd' */
    dateFormat?: string | ((date: Date) => string);

    /** 渲染日历事件 */
    eventRender?: (event: CalendarEvent, category: CalendarCategory, item: ListitemProps) => Partial<ListitemProps> | void | false;
};
