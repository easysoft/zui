import {DatepickerBasicProps} from './datepicker-basic-props';
import {DatepickerPlacement} from './datepicker-placement';

export interface DatepickerProps extends DatepickerBasicProps {
    date?: string | Date;
    trigger?: 'click';
    placement?: DatepickerPlacement;
    type?: string;
    arrow?: boolean | number;
    showToday?: boolean;
    onChange?: (newDate: string | Date) => void;
}
