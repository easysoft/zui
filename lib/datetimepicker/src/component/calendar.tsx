import {Component, createRef} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import {DatetimepickerProps, CalendardataProps} from '../types';
import '@zui/icons';
import dayjs, {Dayjs} from 'dayjs';

interface CalendarListProps {
    [index: number]: Array<CalendardataProps>
}

export class Calendar extends Component<DatetimepickerProps> {

    DATEROWCOUNT = 6;

    ref = createRef<HTMLMenuElement>();

    state = {
        selectedDate: this.props.date || null,
    };

    addMonth(date: string | Date) {
        if (!dayjs(date).isValid()) {
            return '';
        }
        return dayjs(date).add(1, 'months').format(this.props.format);
    }

    subtractMonth(date: string | Date) {
        if (!dayjs(date).isValid()) {
            return '';
        }
        return dayjs(date).subtract(1, 'months').format(this.props.format);
    }

    handleChange(selectedDate: string) {
        this.setState({selectedDate: selectedDate});
        this.props.onChange(selectedDate);
    }

    handleChangePanel(type: string) {
        if (type === 'month') {
            this.ref.current?.querySelector('.calendar-day')?.classList.add('hidden');
            this.ref.current?.querySelector('.calendar-month')?.classList.toggle('hidden');
            
        } else {
            this.ref.current?.querySelector('.calendar-day')?.classList.add('hidden');
            this.ref.current?.querySelector('.calendar-year')?.classList.toggle('hidden');
        }
    }

    generateArrayNumber(start = 0, end = 0) {
        const array = [];
        for (let i = start; i <= end; i++) {
            array.push(i);
        }
        return array;
    }

    createGroups(array: number[] | object[], numGroups: number) {
        const perGroup = Math.ceil(array.length / numGroups);
        return new Array(numGroups).fill({}).map((_, i) => array.slice(i * perGroup, (i + 1) * perGroup));
    }

    renderMonthDay(totalDays: number, addDayNumber: number, preMonth: Dayjs, isOtherMonth: boolean) {
        const today = dayjs();
        const currentDate = dayjs(this.state.selectedDate);

        const preMonFirstDayList: CalendardataProps[] = new Array(totalDays);
        for (let d = 0; d < totalDays; d++) {
            const dayNumber = addDayNumber + d + 1;
            const eachDate = preMonth.set('date', dayNumber);
            
            const isDisable = isOtherMonth && !this.props.showOtherMonth ? true : 
                (this.props.minDate && eachDate.isBefore(this.props.minDate, 'date') ||
                this.props.maxDate && eachDate.isAfter(this.props.maxDate, 'date') ||
                this.props.minYear && eachDate.isBefore(dayjs(`${this.props.minYear}-01-01`), 'year') ||
                this.props.maxYear && eachDate.isAfter(dayjs(`${this.props.maxYear}-12-31`), 'year'));

            preMonFirstDayList[d] = {
                isSelectedDate: currentDate.isSame(preMonth.set('date', dayNumber), 'date'),
                isToday: today.isSame(eachDate, 'date'),
                isDisable: !!isDisable,
                isTag: !!this.props.tagDate?.includes(eachDate.format(this.props.format)),
                date: eachDate,
                dayNumber: isOtherMonth && !this.props.showOtherMonth ? 0 : dayNumber,
                isOtherMonth: isOtherMonth,
            };
        }
        return preMonFirstDayList;
    }

    renderPreMonthDay() {
        const currentDate = dayjs(this.state.selectedDate);
        const today = dayjs();
        const panelYearMonth = this.state.selectedDate ? currentDate : today;
        const currentMonFirstWeek = panelYearMonth.set('date', 1).day();

        const preMonthFirstContainer = currentMonFirstWeek === 0 ? 6 : currentMonFirstWeek - 1;
        const preMonth = panelYearMonth.subtract(1, 'month');
        const preMonthLastDay = Number(preMonth.endOf('month').get('date'));
        const preMonthFirstDay = preMonthLastDay - preMonthFirstContainer;

        return this.renderMonthDay(preMonthFirstContainer, preMonthFirstDay, preMonth, true);
    }

    renderNextMonthDay() {
        const currentDate = dayjs(this.state.selectedDate);
        const today = dayjs();
        const panelYearMonth = this.state.selectedDate ? currentDate : today;
        const currentMonFirstWeek = panelYearMonth.set('date', 1).day();
        const preMonthFirstContainer = currentMonFirstWeek === 0 ? 6 : currentMonFirstWeek - 1;

        const panelMonthLastDay = panelYearMonth.endOf('month').get('date');
        const nextMonth = panelYearMonth.add(1, 'month');
        const nextMonthEndContainer = (7 * 6) % (preMonthFirstContainer + panelMonthLastDay);

        return this.renderMonthDay(nextMonthEndContainer, 0, nextMonth, true);
    }

    renderCurrentMonthDays() {
        const dateValue = this.state.selectedDate;
        const today = dayjs();
        const panelYearMonth = this.state.selectedDate ? dayjs(dateValue) : today;
        const currentMonthLastDay = panelYearMonth.endOf('month').get('date');
        const currentDayList = this.renderMonthDay(currentMonthLastDay, 0, panelYearMonth, false);
        
        const preMonthDay = this.renderPreMonthDay();
        const nextMonthDay = this.renderNextMonthDay();
        const monthDateList = [...preMonthDay, ...currentDayList, ...nextMonthDay];

        return this.createGroups(monthDateList, this.DATEROWCOUNT);
    }

    handleChangeMonth(month: string) {
        this.setState({selectedDate: month});
        this.ref.current?.querySelector('.calendar-month')?.classList.toggle('hidden');
        this.ref.current?.querySelector('.calendar-day')?.classList.toggle('hidden');
    }

    handleChangeYear(year: string) {
        this.setState({selectedDate: year});
        this.ref.current?.querySelector('.calendar-year')?.classList.toggle('hidden');
        this.ref.current?.querySelector('.calendar-month')?.classList.toggle('hidden');
    }

    renderDayPanel() {
        const {className} = this.props;
        const weeks = ['一', '二', '三', '四', '五', '六', '日'];
        const calendarTable: CalendarListProps = this.renderCurrentMonthDays();
        return (
            <div className={classes('calendar-day', className)}>
                <div className="calendar-bar">
                    <div class="flex">
                        <button type="button" className="btn ghost" onClick={() => {
                            const prevYear = dayjs(this.state.selectedDate).subtract(1, 'year').startOf('year').format(this.props.format);
                            this.handleChange(prevYear);
                        }}>
                            <i className="icon icon-double-angle-left" />
                        </button>
                        <button type="button" className="btn ghost" onClick={() => {
                            const prevMonth = this.subtractMonth(this.state.selectedDate || dayjs().format(this.props.format));
                            this.handleChange(prevMonth);
                        }}>
                            <i className="icon icon-angle-left" />
                        </button>
                    </div>
                    <div class="flex">
                        <button type="button" className="btn ghost" onClick={() => this.handleChangePanel('year')}>
                            {dayjs(this.state.selectedDate).format('YYYY 年')}
                        </button>
                        <button type="button" className="btn ghost" onClick={() => this.handleChangePanel('month')}>
                            {dayjs(this.state.selectedDate).format('MM 月')}
                        </button>
                    </div>
                    
                    <div class="flex">
                        <button type="button" className="btn ghost" onClick={() => {
                            const nextMonth = this.addMonth(this.state.selectedDate || dayjs().format(this.props.format));
                            this.handleChange(nextMonth);
                        }}>
                            <i className="icon icon-angle-right" />
                        </button>
                        <button type="button" className="btn ghost" onClick={() => {
                            const nextYear = dayjs(this.state.selectedDate).add(1, 'year').startOf('year').format(this.props.format);
                            this.handleChange(nextYear);
                        }}>
                            <i className="icon icon-double-angle-right" />
                        </button>
                    </div>
                </div>
                <table className="calendar-table">
                    <thead className="calendar-table-head">
                        <tr>
                            {weeks.map((item, key) => <th key={key}>{item}</th>)}
                        </tr>
                    </thead>
                    <tbody className="calendar-table-body">
                        {calendarTable.map((week, weekKey) => <tr key={weekKey}>{week.map((day, dayKey) => {
                            const classList = ['text-center'];
                            if (day.isToday) {
                                classList.push('calendar-today');
                            }
                            if (day.isSelectedDate) {
                                classList.push('calendar-selected-date');
                            }
                            if (day.isOtherMonth) {
                                classList.push('calendar-other-month');
                            }
                            if (day.isTag) {
                                classList.push('calendar-tag');
                            }
                            return (<td key={dayKey} className={classes(classList)}>
                                <div className={classes('btn', 'ghost', 'calendar-date', day.isDisable ? 'disabled' : '')} onClick={() => {
                                    if (day.isDisable) {
                                        return;
                                    }
                                    const newDate = dayjs(day.date).format(this.props.format);
                                    this.handleChange(newDate);
                                }}>
                                    {day && day.dayNumber || ''}
                                </div>
                            </td>);
                        })}</tr>)}
                    </tbody>
                </table>
            </div>
        );
    }

    renderMonthPanel() {
        const monthPanel = this.createGroups(this.generateArrayNumber(1, 12), 4);
        return (
            <div className={classes('calendar-month', 'hidden')}>
                <div className="calendar-bar">
                    <button type="button" className="btn ghost" onClick={() => {
                        const prevYear = dayjs(this.state.selectedDate).subtract(1, 'year').startOf('year').format(this.props.format);
                        this.handleChange(prevYear);
                    }}>
                        <i className="icon icon-angle-left" />
                    </button>
                    <button type="button" className="btn ghost" onClick={() => this.handleChangePanel('year')}>
                        {dayjs(this.state.selectedDate).format('YYYY 年')}
                    </button>
                    <button type="button" className="btn ghost" onClick={() => {
                        const nextYear = dayjs(this.state.selectedDate).add(1, 'year').startOf('year').format(this.props.format);
                        this.handleChange(nextYear);
                    }}>
                        <i className="icon icon-angle-right" />
                    </button>
                </div>
                <table className="calendar-month-table">
                    <tbody className="calendar-month-table-body">
                        {monthPanel.map((group, groupKey) => <tr key={groupKey}>{group.map((month, monthKey) => {
                            const classList = ['text-center'];
                            const year = dayjs(this.state.selectedDate).year();
                            const showMonth = dayjs(`${year}-${month}-01`).format(this.props.format);
                            
                            return (<td key={monthKey} className={classes(classList)}>
                                <div className={classes('btn', 'ghost', 'calendar-month')} onClick={() => {
                                    this.handleChangeMonth(showMonth);
                                }}>
                                    {dayjs(showMonth).format('MM')} 月
                                </div>
                            </td>);
                        })}</tr>)}
                    </tbody>
                </table>
            </div>
        );
    }

    renderYearPanel() {
        const currentYear = dayjs(this.state.selectedDate).year();
        const years = this.createGroups(this.generateArrayNumber(currentYear, currentYear + 11), 3);
        return (
            <div className={classes('calendar-year', 'hidden')}>
                <div className="calendar-bar">
                    <button type="button" className="btn ghost" onClick={() => {
                        const prevYear = dayjs(this.state.selectedDate).subtract(12, 'year').startOf('year').format(this.props.format);
                        this.handleChange(prevYear);
                    }}>
                        <i className="icon icon-angle-left" />
                    </button>
                    <div>{dayjs(this.state.selectedDate).year()} - {currentYear + 11}</div>
                    <button type="button" className="btn ghost" onClick={() => {
                        const nextYear = dayjs(this.state.selectedDate).add(12, 'year').startOf('year').format(this.props.format);
                        this.handleChange(nextYear);
                    }}>
                        <i className="icon icon-angle-right" />
                    </button>
                </div>
                <table className="calendar-month-table">
                    <tbody className="calendar-month-table-body">
                        {years.map((group, groupKey) => <tr key={groupKey}>{group.map((year, yearKey) => {
                            const classList = ['text-center'];
                            const defaultMonth = dayjs(this.state.selectedDate).month();
                            const showMonth = dayjs(`${year}-${defaultMonth}-01`).format(this.props.format);
                            const isDisableYear = this.props.minYear && year <= this.props.minYear || this.props.maxYear && year > this.props.maxYear;
                            return (<td key={yearKey} className={classes(classList)}>
                                <div className={classes('btn', 'ghost', 'calendar-month', isDisableYear ? 'disabled' : '')} onClick={() => {
                                    if (isDisableYear) {
                                        return;
                                    }
                                    this.handleChangeYear(showMonth);
                                }}>
                                    {dayjs(showMonth).format('YYYY')}
                                </div>
                            </td>);
                        })}</tr>)}
                    </tbody>
                </table>
            </div>
        );
    }

    render() {
        return (
            <div className={classes('datetimepicker-calendar')} ref={this.ref}>
                {this.renderDayPanel()}
                {this.renderMonthPanel()}
                {this.renderYearPanel()}
            </div>
        );
    }
}
