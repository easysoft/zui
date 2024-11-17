import type {HElementProps} from '@zui/core';
export interface CalendarHeaderProps extends HElementProps {
    date: Date;
    onShowCalendarGroup: () => void;
    onDateChange: (date: Date) => void;
    onMonthChange: (direction: 'prev' | 'next') => void;
}