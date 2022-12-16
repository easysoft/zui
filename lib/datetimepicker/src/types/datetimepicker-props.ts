import {DatetimepickerBasicProps} from './datetimepicker-basic-props';
import {DatetimepickerPlacement} from './datetimepicker-placement';

export interface DatetimepickerProps extends DatetimepickerBasicProps {
    date?: string | Date;
    trigger?: 'click';
    placement?: DatetimepickerPlacement;
    type?: string;
    arrow?: boolean | number;
    autoClose?: boolean;
    showToday?: boolean;
    onChange?: (newDate: string | Date) => void;
    onChangeYearMonthPanel?: (yearMonth: {year: number, month: number}) => void;
}
