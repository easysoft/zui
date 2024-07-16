import type {HElementProps} from '@zui/core';
export interface CalendarHeaderProps extends HElementProps {
    selectDate?: Array<string>;
    onTodayClick?: () => void;
    onMonthChange?: (direction: 'prev' | 'next') => void;
    locale?: 'zh-CN' | 'zh-TW' | 'en';
}