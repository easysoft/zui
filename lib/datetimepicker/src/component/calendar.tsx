import {Component, createRef, render} from 'preact';
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

    renderMonthDay(totalDays: number, addDayNumber: number, preMonth: Dayjs, isOtherMonth: boolean) {
        const today = dayjs();
        const currentDate = dayjs(this.state.selectedDate);

        const preMonFirstDayList: CalendardataProps[] = new Array(totalDays);
        for (let d = 0; d < totalDays; d++) {
            const dayNumber = addDayNumber + d + 1;
            const eachDate = preMonth.set('date', dayNumber);
            const isDisable = isOtherMonth && !this.props.showOtherMonth ? true : 
                ((this.props.minDate && eachDate.isBefore(this.props.minDate, 'date')) ||
                (this.props.maxDate && eachDate.isAfter(this.props.maxDate, 'date')));
            
            preMonFirstDayList[d] = {
                isSelectedDate: currentDate.isSame(preMonth.set('date', dayNumber), 'date'),
                isToday: today.isSame(eachDate, 'date'),
                isDisable: !!isDisable,
                isTag: this.props.tagDate?.includes(eachDate.format()),
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

    createGroups(arr: object[], numGroups: number) {
        const perGroup = Math.ceil(arr.length / numGroups);
        return new Array(numGroups).fill({}).map((_, i) => arr.slice(i * perGroup, (i + 1) * perGroup));
    }

    handleChangeMonth(month: string) {
        console.log(month);
        render(this.renderDayPanel(), this.ref.current);

    }

    renderMonthPanel() {
        const monthPanel = [['一月', '二月', '三月'], ['四月', '五月', '六月'], [ '七月', '八月', '九月'], [ '十月', '十一月', '十二月']];
        return (
            <div className={classes('datetimepicker-month')}>
                <div className="calendar-bar">
                    <button type="button" className="btn ghost prev-month" onClick={() => {
                        const prevYear = dayjs(this.state.selectedDate).subtract(1, 'year').startOf('year').format(this.props.format);
                        this.handleChange(prevYear);
                    }}>
                        <i className="icon icon-angle-left" />
                    </button>
                    <button type="button" className="btn ghost" onClick={() => this.handleChangePanel('year')}>
                        {dayjs(this.state.selectedDate).format('YYYY 年')}
                    </button>
                    <button type="button" className="btn ghost prev-month" onClick={() => {
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
                            return (<td key={monthKey} className={classes(classList)}>
                                <div className={classes('btn', 'ghost', 'calendar-month')} onClick={() => {
                                    this.handleChangeMonth(month);
                                }}>
                                    {month}
                                </div>
                            </td>);
                        })}</tr>)}
                    </tbody>
                </table>
            </div>
        );
    }

    handleChangePanel(type: string) {
        console.log(type);
        // if (type === 'month') {
        //     render(this.renderMonthPanel(), this.ref.current);
        // } else {
        //     console.log('year');
        // }

    }

    renderDayPanel() {
        const {className} = this.props;
        const weeks = ['一', '二', '三', '四', '五', '六', '日'];
        const calendarTable: CalendarListProps = this.renderCurrentMonthDays();
       
        return (
            <div className={classes('datetimepicker-calendar', className)}>
                <div className="calendar-bar">
                    <div class="flex">
                        <button type="button" className="btn ghost prev-month" onClick={() => {
                            const prevYear = dayjs(this.state.selectedDate).subtract(1, 'year').startOf('year').format(this.props.format);
                            this.handleChange(prevYear);
                        }}>
                            <i className="icon icon-double-angle-left" />
                        </button>
                        <button type="button" className="btn ghost prev-month" onClick={() => {
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
                        <button type="button" className="btn ghost next-month" onClick={() => {
                            const nextMonth = this.addMonth(this.state.selectedDate || dayjs().format(this.props.format));
                            this.handleChange(nextMonth);
                        }}>
                            <i className="icon icon-angle-right" />
                        </button>
                        <button type="button" className="btn ghost prev-month" onClick={() => {
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

    render() {
        // return this.renderDayPanel();
        return (
            <div className="datetimepicker-box" ref={this.ref}>
                {this.renderDayPanel()}
            </div>
        );
    }
}
