import type {DatepickerBasicProps} from './datepicker-basic-props';
import type {Placement, Strategy} from '@floating-ui/dom';

export type DatepickerProps = DatepickerBasicProps & Partial<{
    date: string;
    placement: Placement;
    arrow: boolean | number;
    showToday: boolean;
    onChange: (newDate: string) => void;
    strategy: Strategy;
    trigger: 'hover' | 'click';
}>;
