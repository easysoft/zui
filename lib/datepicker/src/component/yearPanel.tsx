import {classes} from '@zui/core';
import dayjs from 'dayjs';
import '@zui/css-icons/src/icons/caret.css';
import {createGroups, generateArrayNumber} from '../helpers/index';
import {DatepickerProps} from '../types';

type YearPanelProps = DatepickerProps & {
    selectedDate: string;
    handleChangeYear: (year: string)=> void;
    handleChange: (selectedDate: string, isSure: boolean)=> void;
};

const YearPanel = (props: YearPanelProps) => {
    const {format, selectedDate, handleChangeYear, handleChange} = props;

    const currentYear = dayjs(selectedDate).year();
    const years = createGroups(generateArrayNumber(currentYear, currentYear + 11), 4);
    return (
        <div className={classes('datepicker-calendar-year')}>
            <div className="datepicker-calendar-bar">
                <button type="button" className="btn ghost" onClick={() => {
                    const prevYear = dayjs(selectedDate).subtract(12, 'year').startOf('year').format(format);
                    handleChange(prevYear, false);
                }}>
                    <i className="icon icon-angle-left" />
                </button>
                <div>{dayjs(selectedDate).year()} - {currentYear + 11}</div>
                <button type="button" className="btn ghost" onClick={() => {
                    const nextYear = dayjs(selectedDate).add(12, 'year').startOf('year').format(format);
                    handleChange(nextYear, false);
                }}>
                    <i className="icon icon-angle-right" />
                </button>
            </div>
            <table className="datepicker-calendar-month-table">
                <tbody className="datepicker-calendar-month-table-body">
                    {years.map((group, groupKey) => <tr key={groupKey}>{group.map((year, yearKey) => {
                        const classList = ['text-center'];
                        const defaultMonth = dayjs(selectedDate).month();
                        const showMonth = dayjs(`${year}-${defaultMonth}-01`).format(format);
                        return (<td key={yearKey} className={classes(classList)}>
                            <div className={classes('btn', 'ghost', 'datepicker-calendar-month')} onClick={() => {handleChangeYear(showMonth);}}>
                                {dayjs(showMonth).format('YYYY')}
                            </div>
                        </td>);
                    })}</tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default YearPanel;
