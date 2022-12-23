import {DatepickerBasicProps} from './datepicker-basic-props';
import {DatepickerPlacement} from './datepicker-placement';

export interface DatepickerProps extends DatepickerBasicProps {
    date?: string | Date;
    placement?: DatepickerPlacement;
    arrow?: boolean | number;
    showToday?: boolean;
    onChange?: (newDate: string | Date) => void;
}
