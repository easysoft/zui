import type {HElementProps} from '@zui/core';
export interface CalendarHeaderProps extends HElementProps {
    date: Date;
    onDateChange: (date: Date) => void;
    onMonthChange: (direction: 'prev' | 'next') => void;
    locale?: 'zh-CN' | 'zh-TW' | 'en';
}