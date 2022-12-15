import {Dayjs} from 'dayjs';

export interface CalendardataProps {
    isSelectedDate: boolean;
    isToday: boolean;
    isDisable: boolean;
    isTag?: boolean;
    isOtherMonth?: boolean;
    date: Dayjs;
    dayNumber: number;
}
