import {classes} from '@zui/core';
import dayjs from 'dayjs';
import '@zui/css-icons/src/icons/caret.css';
import {createGroups, generateArrayNumber} from '../helpers/index';
import {DatepickerProps} from '../types';

type MonthPanelProps = DatepickerProps & {
    selectedDate: string;
    year: string;
    handleChangeMonth: (month: string)=> void;
};

const MonthPanel = (props: MonthPanelProps) => {
    const {format, selectedDate, minDate, maxDate, year, handleChangeMonth} = props;
    const minMonth = dayjs(minDate).format('M');
    const maxMonth = dayjs(maxDate).format('M');
    const monthPanel = createGroups(generateArrayNumber(1, 12), 3);

    const onClickMonth = (showMonth: string, isDisable: boolean) => {
        if (isDisable) {
            return;
        }
        handleChangeMonth(showMonth);
    };

    return (
        <div className={classes('datepicker-calendar-month', 'not-hide-datepicker')}>
            <table className="datepicker-calendar-month-table">
                <tbody className="datepicker-calendar-month-table-body">
                    {monthPanel.map((group, groupKey) => <tr key={groupKey}>{group.map((month, monthKey) => {
                        const classList = ['text-center'];
                        const showMonth = dayjs(`${year}-${month}-01`).format(format);
                        const isDisable = !!(minMonth && dayjs(selectedDate).isBefore(minMonth) ||
                        maxMonth && dayjs(selectedDate).isBefore(maxMonth));

                        return (<td key={monthKey} className={classes(classList)}>
                            <div className={classes('btn', 'size-sm', 'ghost', 'datepicker-calendar-month', isDisable ? 'disabled' : '')} onClick={() => {onClickMonth(showMonth, isDisable);}}>
                                {dayjs(showMonth).format('MM')} 月
                            </div>
                        </td>);
                    })}</tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default MonthPanel;
