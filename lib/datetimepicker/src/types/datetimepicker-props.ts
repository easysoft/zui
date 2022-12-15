import {DatetimepickerBasicProps} from '../types/datetimepicker-basic-props';

export interface DatetimepickerProps extends DatetimepickerBasicProps {
    date?: string | Date;
    trigger?: 'click';
    type?: string;
    arrow?: boolean | number;
    autoclose?: boolean;
    // todayHighlight?: number;
    forceParse?: number;
    onChange: (newDate: string | Date) => void;
    onChangeYearMonthPanel?: (yearMonth: {year: number, month: number}) => void;
}
