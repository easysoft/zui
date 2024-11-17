import {Component, type RefObject, createRef} from 'preact';
import {createDate, formatDate, formatString} from '@zui/helpers';
import {$, i18n} from '@zui/core';
import {Menu} from '@zui/menu/src/component';
import {Button} from '@zui/button/src/component';
import {Toolbar} from '@zui/toolbar/src/component';
import type {ToolbarItemOptions} from '@zui/toolbar';
import type {DatePickerMenuProps, DatePickerMenuState} from '../types';
import '@zui/css-icons/src/icons/chevron.css';
import {MiniCalendar} from './mini-calendar';
import {ValueSelector} from './value-selector';
import {getDate} from '../helpers';

export class DatePickerMenu extends Component<DatePickerMenuProps, DatePickerMenuState> {
    #ref: RefObject<HTMLDivElement> = createRef();

    constructor(props: DatePickerMenuProps) {
        super(props);
        const {date} = props;
        const currentDate = getDate(date) || new Date();
        this.state = {
            select: 'day',
            year: currentDate.getFullYear(),
            month: currentDate.getMonth() + 1,
        };
    }

    #handleClick = (event: MouseEvent) => {
        const $element = $(event.target as HTMLElement).closest('[data-set-date]');
        if ($element.length) {
            this.changeDate($element.dataset('set-date') as string);
        }
    };

    #switchToPrevMonth = () => {
        const {year, month} = this.state;
        if (month === 1) {
            this.setState({year: year - 1, month: 12});
        } else {
            this.setState({month: month - 1});
        }
    };

    #switchToNextMonth = () => {
        const {year, month} = this.state;
        if (month === 12) {
            this.setState({year: year + 1, month: 1});
        } else {
            this.setState({month: month + 1});
        }
    };

    #changeYear = (year: number) => {
        this.setState({year, select: 'day'});
    };

    #changeMonth = (month: number) => {
        this.setState({month, select: 'day'});
    };

    #renderMenu(props: DatePickerMenuProps) {
        return Menu.render(props.menu, [], {
            onClickItem: (item) => {
                const value = item.item.value;
                if (typeof value === 'string') {
                    this.changeDate(value);
                }
            },
        }, this);
    }

    #renderFooter(props: DatePickerMenuProps) {
        let {actions} = props;
        const {todayText = i18n.getLang('today'), clearText} = props;
        if (actions === undefined) {
            actions = [{text: todayText, 'data-set-date': formatDate(new Date(), 'yyyy-MM-dd')} as ToolbarItemOptions];
        }
        if (Array.isArray(actions)) {
            actions = {items: actions};
        }
        return (
            <div className="date-picker-menu-footer">
                <Toolbar btnProps={{className: 'ghost text-primary'}} {...actions} />
                {clearText ? <Button type="ghost text-link" data-set-date="">{clearText}</Button> : null}
            </div>
        );
    }

    changeDate = (date: string) => {
        this.props.onChange?.(date);
    };

    protected _showSelect(select: 'year' | 'month' | 'day') {
        this.setState((preState) => {
            if (preState.select === select) {
                return {select: 'day'};
            }
            return {select};
        });
    }

    render(props: DatePickerMenuProps, state: DatePickerMenuState) {
        const {
            date,
            yearText = i18n.getLang('yearFormat') || '{0}',
            weekNames = i18n.getLang('weekNames'),
            monthNames = i18n.getLang('monthNames'),
            minDate: minDateSetting,
            maxDate: maxDateSetting,
            weekStart,
        } = props;
        const currentDate = getDate(date);
        const {
            year,
            month,
            select,
        } = state;
        const isSelectDay = select === 'day';
        const minDate = minDateSetting ? minDateSetting : createDate('1970-1-1');
        const maxDate = maxDateSetting ? maxDateSetting : createDate('2099-12-31');
        return (
            <div className="date-picker-menu row" ref={this.#ref} onClick={this.#handleClick}>
                {this.#renderMenu(props)}
                <div className="cell" style="width: 312px">
                    <div className="row p-2">
                        <Button type={select === 'year' ? 'primary-pale' : 'ghost'} size="sm" caret onClick={this._showSelect.bind(this, 'year')}>{formatString(yearText, year)}</Button>
                        <Button type={select === 'month' ? 'primary-pale' : 'ghost'} size="sm" caret onClick={this._showSelect.bind(this, 'month')}>{monthNames ? monthNames[month - 1] : month}</Button>
                        <div className="flex-auto"></div>
                        {
                            isSelectDay
                                ? (
                                    <div>
                                        <Button type="ghost" size="sm" square onClick={this.#switchToPrevMonth}><i className="chevron-left"></i></Button>
                                        <Button type="ghost" size="sm" square onClick={this.#switchToNextMonth}><i className="chevron-right"></i></Button>
                                    </div>
                                )
                                : null
                        }
                    </div>
                    {
                        isSelectDay
                            ? (
                                <MiniCalendar
                                    weekStart={weekStart}
                                    weekNames={weekNames}
                                    monthNames={monthNames}
                                    maxDate={maxDate}
                                    minDate={minDate}
                                    year={year}
                                    month={month}
                                    selections={currentDate || []}
                                    onClickDate={this.changeDate}
                                    isAllowDate={props.isAllowDate}
                                />
                            )
                            : null
                    }
                    {
                        select === 'year'
                            ? (
                                <ValueSelector
                                    className="date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin"
                                    value={year}
                                    min={minDate.getFullYear()}
                                    max={maxDate.getFullYear()}
                                    onChange={this.#changeYear}
                                />
                            )
                            : (
                                select === 'month'
                                    ? (
                                        <ValueSelector
                                            className="date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin"
                                            value={month}
                                            min={1}
                                            max={12}
                                            onChange={this.#changeMonth}
                                        />
                                    )
                                    : null
                            )
                    }
                    {isSelectDay ? this.#renderFooter(props) : null}
                </div>
            </div>
        );
    }
}
