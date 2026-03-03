import type {CustomContentType, HElementProps} from '@zui/core';
import type {DateLike} from '@zui/helpers';
import type {ToolbarSetting} from '@zui/toolbar';
import type {ListitemProps} from '@zui/list';
import type {CalendarCategory} from './calendar-category';
import type {CalendarEvent} from './calendar-event';
import type {CalendarViewMode} from './calendar-view-mode';
import type {CalendarHeaderProps} from '../component/calendar-header';

/**
 * 日历组件的属性接口
 */
export type CalendarProps = HElementProps & {
    /** 头部标题 */
    headerTitle?: CustomContentType;

    /** 头部操作栏 */
    headerActions?: ToolbarSetting;

    /** 头部属性 */
    headerProps?: Partial<CalendarHeaderProps>;

    /** 当前日期 */
    date?: DateLike;

    /** 日历视图，默认 'month' */
    view?: CalendarViewMode;

    /** 日历集，默认 [] */
    categories?: CalendarCategory[];

    /** 日历事件，默认 [] */
    events?: CalendarEvent[];

    /** 默认日历集，默认 '' */
    defaultCategory?: string;

    /** 是否只读 */
    readonly?: boolean;

    /** 一周从星期几开始，默认 1 */
    weekStart?: number;

    /** 日期格式，默认 'yyyy-MM-dd' */
    dateFormat?: string | ((date: Date) => string);

    /** 月份格式，默认 'yyyy-MM' */
    monthFormat?: string | ((date: Date) => string);

    /** 操作栏配置 */
    actions?: ToolbarSetting;

    /** 渲染日历事件 */
    eventRender?: (event: CalendarEvent, category: CalendarCategory, item: ListitemProps) => Partial<ListitemProps> | void | false;

    /** 视图上最大日历事件数量 */
    maxEventCount?: number;

    /** 点击日历事件 */
    onClickEvent?: (event: CalendarEvent, category: CalendarCategory, mouseEvent: MouseEvent) => void;

    /** 切换日期回调函数 */
    onSwitchDate?: (date: Date, mode: CalendarViewMode) => void;
};
