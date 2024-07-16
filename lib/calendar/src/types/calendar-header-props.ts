import type {HElementProps} from '@zui/core';
export interface CalendarHeaderProps extends HElementProps {
    month:number;
    year:number;
    onDateChange: (month: number, year: number) => void;
    onMonthChange: (direction: 'prev' | 'next') => void;
    locale?: 'zh-CN' | 'zh-TW' | 'en';
}