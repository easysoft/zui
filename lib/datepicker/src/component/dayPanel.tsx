import {classes} from '@zui/browser-helpers/src/classes';
import '@zui/icons';
import dayjs, {Dayjs} from 'dayjs';
import '@zui/css-icons/src/icons/caret.css';
import {createGroups} from '../helpers/index';
import {CalendarDayItemProps} from '../types';

interface CalendarListProps {
    [index: number]: Array<CalendarDayItemProps>
}

const DayPanel = (props) => {
    const {format, minDate, maxDate, tagDate, DATEROWCOUNT, showOtherMonth, clickDay, selectedDate, handleChangePanel, showToday, handleChange, clickToday} = props;

    const addMonth = (date: string | Date) => {
        if (!dayjs(date).isValid()) {
            return '';
        }
        return dayjs(date).add(1, 'months').format(format);
    };
    
    const subtractMonth = (date: string | Date) => {
        if (!dayjs(date).isValid()) {
            return '';
        }
        return dayjs(date).subtract(1, 'months').format(format);
    };

    const showPrevMonth = () => {
        const month = subtractMonth(selectedDate || dayjs().format(format));
        handleChange(month);
    };

    const showNextMonth = () => {
        const nextMonth = addMonth(selectedDate || dayjs().format(format));
        handleChange(nextMonth);
    };

    const onClear = () => {
        handleChange('', true);
    };

    const onSubmit = () => {
        handleChange(selectedDate, true);
    };

    
    const renderMonthDay = (totalDays: number, addDayNumber: number, preMonth: Dayjs, isOtherMonth: boolean) => {
        const today = dayjs();
        const currentDate = dayjs(selectedDate);

        const preMonFirstDayList: CalendarDayItemProps[] = new Array(totalDays);
        for (let d = 0; d < totalDays; d++) {
            const dayNumber = addDayNumber + d + 1;
            const eachDate = preMonth.set('date', dayNumber);
            
            const isDisable = isOtherMonth && !showOtherMonth ? true : 
                (minDate && eachDate.isBefore(minDate, 'date') ||
                maxDate && eachDate.isAfter(maxDate, 'date'));

            preMonFirstDayList[d] = {
                isSelected: currentDate.isSame(preMonth.set('date', dayNumber), 'date'),
                isToday: today.isSame(eachDate, 'date'),
                isDisable: !!isDisable,
                isTag: !!tagDate?.includes(eachDate.format(format)),
                date: eachDate,
                isOtherMonth: isOtherMonth,
                onClick: () => !isDisable ? clickDay(eachDate) : {},
            };
        }
        return preMonFirstDayList;
    };

    const renderPreMonthDay = () => {
        const currentDate = dayjs(selectedDate);
        const today = dayjs();
        const panelYearMonth = selectedDate ? currentDate : today;
        const currentMonFirstWeek = panelYearMonth.set('date', 1).day();

        const preMonthFirstContainer = currentMonFirstWeek === 0 ? 6 : currentMonFirstWeek - 1;
        const preMonth = panelYearMonth.subtract(1, 'month');
        const preMonthLastDay = Number(preMonth.endOf('month').get('date'));
        const preMonthFirstDay = preMonthLastDay - preMonthFirstContainer;

        return renderMonthDay(preMonthFirstContainer, preMonthFirstDay, preMonth, true);
    };

    const renderNextMonthDay = () => {
        const currentDate = dayjs(selectedDate);
        const today = dayjs();
        const panelYearMonth = selectedDate ? currentDate : today;
        const currentMonFirstWeek = panelYearMonth.set('date', 1).day();
        const preMonthFirstContainer = currentMonFirstWeek === 0 ? 6 : currentMonFirstWeek - 1;

        const panelMonthLastDay = panelYearMonth.endOf('month').get('date');
        const nextMonth = panelYearMonth.add(1, 'month');
        const nextMonthEndContainer = (7 * 6) % (preMonthFirstContainer + panelMonthLastDay);

        return renderMonthDay(nextMonthEndContainer, 0, nextMonth, true);
    };

    const renderCurrentMonthDays = () => {
        const dateValue = selectedDate;
        const today = dayjs();
        const panelYearMonth = selectedDate ? dayjs(dateValue) : today;
        const currentMonthLastDay = panelYearMonth.endOf('month').get('date');
        const currentDayList = renderMonthDay(currentMonthLastDay, 0, panelYearMonth, false);
        
        const preMonthDay = renderPreMonthDay();
        const nextMonthDay = renderNextMonthDay();
        const monthDateList = [...preMonthDay, ...currentDayList, ...nextMonthDay];

        return createGroups(monthDateList, DATEROWCOUNT);
    };

    const weeks = ['一', '二', '三', '四', '五', '六', '日'];
    const calendarTable: CalendarListProps = renderCurrentMonthDays();
    const newSelectedDate = selectedDate || dayjs().format(format);
    return (
        <div className={classes('datepicker-calendar-day')}>
            <div className="datepicker-calendar-bar not-hide-datepicker">
                <div class="flex">
                    <button type="button" className="btn ghost" onClick={() => handleChangePanel('year')}>
                        <span>{dayjs(newSelectedDate).format('YYYY 年 MM 月')}</span>
                        <span class="caret"></span>
                    </button>
                </div>
                
                <div class="flex">
                    {
                        showToday && <button type="button" className="btn ghost" onClick={() => {clickToday();}}>
                            今天
                        </button>
                    }
                    
                    <button type="button" className="btn ghost" onClick={() => showPrevMonth()}>
                        <i className="icon icon-angle-left" />
                    </button>
                    <button type="button" className="btn ghost"  onClick={() => showNextMonth()}>
                        <i className="icon icon-angle-right" />
                    </button>
                </div>
            </div>
            <table className="datepicker-calendar-table not-hide-datepicker">
                <thead className="datepicker-calendar-thead">
                    <tr>
                        {weeks.map((item, key) => <th key={key}>{item}</th>)}
                    </tr>
                </thead>
                <tbody className="datepicker-calendar-tbody">
                    {calendarTable.map((week, weekKey) => <tr key={weekKey}>{week.map((day, dayKey) => {
                        const classList = ['text-center'];
                        if (day.isToday) {
                            classList.push('datepicker-calendar-today');
                        }
                        if (day.isSelected) {
                            classList.push('datepicker-calendar-selected-date');
                        }
                        if (day.isOtherMonth) {
                            classList.push('datepicker-calendar-other-month');
                        }
                        if (day.isTag) {
                            classList.push('datepicker-calendar-tag');
                        }
                        return (<td key={dayKey} className={classes(classList)}>
                            <div className={classes('btn', 'ghost', 'datepicker-calendar-date', day.isDisable ? 'disabled' : '')} onClick={day.onClick}>
                                {!showOtherMonth && day.isOtherMonth ? '' : dayjs(day.date).format('DD')}
                            </div>
                        </td>);
                    })}</tr>)}
                </tbody>
            </table>
            <div class="datepicker-calendar-footer text-right mt-1">
                <button type="button" className="btn ghost text-primary" onClick={onClear}>
                    <span>清除</span>
                </button>
                <button type="button" className="btn ghost text-primary" onClick={onSubmit}>
                    <span>确认</span>
                </button>
            </div>
        </div>
    );
};

export default DayPanel;
