import type {Dayjs} from 'dayjs';

export interface CalendarDayItemProps {
    isSelected: boolean;
    isToday: boolean;
    isDisable: boolean;
    isTag: boolean;
    isOtherMonth: boolean;
    date: Dayjs;
    // dayNumber: number;
    onClick: () => void;
}
