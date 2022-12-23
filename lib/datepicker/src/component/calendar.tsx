import {Component, createRef, h as _h} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import {DatepickerProps} from '../types';
import '@zui/icons';
import dayjs from 'dayjs';
import '@zui/css-icons/src/icons/caret.css';
import DayPanel from './dayPanel';
import MonthAndYearPanel from './monthAndYear';

export class Calendar extends Component<DatepickerProps> {

    DATEROWCOUNT = 6;

    ref = createRef<HTMLMenuElement>();

    state = {
        selectedDate: this.props.date || null,
        type: 'day',
    };

    handleChange(selectedDate: string, isSure = false) {
        this.setState({selectedDate: selectedDate});
        if (isSure) {
            this.props?.onChange(selectedDate);
        }
    }

    handleChangePanel(type: string) {
        this.setState({type: type});
    }

    handleChangeMonth(month: string) {
        this.setState({selectedDate: month, type: 'day'});
    }

    handleChangeYear(year: string) {
        this.setState({selectedDate: year, type: 'month'});
    }

    changeYear(type: string) {
        const year = type === 'subtract' ? dayjs(this.state.selectedDate).subtract(1, 'year').startOf('year').format(this.props.format) : dayjs(this.state.selectedDate).add(1, 'year').startOf('year').format(this.props.format);
        this.handleChange(year);
    }

    clickDay(date: string) {
        const newDate = dayjs(date).format(this.props.format);
        this.handleChange(newDate);
    }

    clickToday() {
        this.handleChange(dayjs().format(this.props.format));
    }

    renderPanel() {
        if (this.state.type === 'day') {
            return _h(DayPanel, {
                ...this.props,
                handleChange: this.handleChange.bind(this),
                handleChangePanel: this.handleChangePanel.bind(this), 
                clickToday: this.clickToday.bind(this),
                clickDay: this.clickDay.bind(this),
                selectedDate: this.state.selectedDate,
                DATEROWCOUNT: this.DATEROWCOUNT,

            });
        } else {
            return _h(MonthAndYearPanel, {
                ...this.props,
                selectedDate: this.state.selectedDate,
                handleChangeMonth: this.handleChangeMonth.bind(this),
            });
        }
    }

    render() {
        const {className} = this.props;
        return (
            <div className={classes('datepicker-calendar', className)} ref={this.ref}>{this.renderPanel()}</div>
        );
    }
}
