import {ComponentChildren, RenderableProps} from 'preact';
import {Icon, classes, i18n} from '@zui/core';
import {formatDate, createDate} from '@zui/helpers';
import {Pick} from '@zui/pick/src/components/pick';
import {PickOptions, PickPopProps, PickState, PickTriggerProps} from '@zui/pick/src/types';
import '@zui/css-icons/src/icons/calendar.css';
import {DatetimePickerMenu} from './datetime-picker-menu';
import {DatetimePickerOptions} from '../types/datetime-picker-options';

const parseTime = (value?: string): Date | undefined => {
    if (!value) {
        return;
    }
    const date = createDate(`1999-01-01 ${value}`);
    const isInvalid = Number.isNaN(date.getDay());
    if (isInvalid) {
        return;
    }
    return date;
};

export class DatetimePicker extends Pick<PickState, DatetimePickerOptions> {
    static defaultProps = {
        ...Pick.defaultProps,
        popWidth: 'auto',
        popMaxHeight: 310,
        dateFormat: 'yyyy-MM-dd',
        timeFormat: 'hh:mm',
        joiner: ' ',
        icon: true,
        minuteStep: 5,
    } as Partial<PickOptions>;

    constructor(props: DatetimePickerOptions) {
        super(props);
        const {value} = this.state as PickState;
        const {dateFormat, timeFormat, joiner} = props;
        if (value) {
            (this.state as PickState).value = formatDate(value === 'today' ? new Date() : value, `${dateFormat}${joiner}${timeFormat}`);
        }
    }

    #handleInputFocus = () => {
        this.toggle(true);
    };

    #handleDateInputChange = (event: Event) => {
        this.setDate((event.target as HTMLInputElement).value);
    };

    #handleClearBtnClick = () => {
        this.setDate('');
        const {required, defaultValue} = this.props;
        this.setState({value: required ? defaultValue : ''});
    };

    #handleTimeChange = (type: 'hour' | 'minute', value: string) => {
        this.setTime({[type]: value});
    };

    #handleTimeInputChange = (event: Event) => {
        this.setTime((event.target as HTMLInputElement).value);
    };

    setTime(value: string | {hour?: number, minute?: number}) {
        const {onInvalid, required, defaultValue, timeFormat, joiner, disabled, dateFormat} = this.props;
        if (disabled) {
            return;
        }
        let valueString = '';
        if (typeof value === 'string') {
            valueString = value;
        } else {
            const [, timeString = '00:00'] = this.state.value.split(joiner);
            const [hourStr, minuteStr] = (timeString).split(':');
            const {hour = +hourStr, minute = +minuteStr} = value;
            valueString = `${hour}:${minute}`;
        }

        const date = parseTime(valueString);
        const dateString = this.state.value.split(joiner)[0] || formatDate(new Date(), dateFormat);
        this.setState({value: date ? `${dateString}${joiner}${formatDate(date, timeFormat)}` : (required ? defaultValue : '')}, () => {
            if (!date && onInvalid) {
                onInvalid(valueString);
            }
        });
    }

    getTime(): [hour: number, minute: number] | null {
        const date = parseTime(this.state.value);
        return date ? [date.getHours(), date.getMinutes()] : null;
    }

    setDate = (value: string) => {
        const {onInvalid, defaultValue = '', required, dateFormat, disabled, joiner} = this.props;
        if (disabled) {
            return;
        }
        const date = createDate(value);
        const isInvalid = !value || Number.isNaN(date.getDay());
        const dateString = formatDate(date, dateFormat);
        const [, timeString = '00:00'] = this.state.value.split(joiner);
        this.setState({value: isInvalid ? (required ? defaultValue : '') : `${dateString}${joiner}${timeString}`}, () => {
            if (!isInvalid && onInvalid) {
                onInvalid(value);
            }
        });
    };

    _renderTrigger(props: DatetimePickerOptions, state: PickState): ComponentChildren {
        const {placeholder, icon, required, disabled, readonly} = props;
        const {value = '', open} = state;
        const id = `datetime-picker-${this.id}`;
        let iconView: ComponentChildren;
        if (open && !required && value.length) {
            iconView = (
                <button
                    type="button"
                    className="btn size-sm square ghost"
                    onClick={this.#handleClearBtnClick}>
                    <span className="close"></span>
                </button>
            );
        } else if (icon) {
            if (icon === true) {
                iconView = <i class="i-calendar"></i>;
            } else {
                iconView = <Icon icon={icon} />;
            }
        }
        return [
            <input
                key="input"
                id={id}
                type="text"
                className="form-control"
                placeholder={placeholder}
                value={value}
                disabled={disabled}
                readOnly={readonly}
                autoComplete="off"
                onFocus={this.#handleInputFocus}
                onChange={(e) => {
                    this.#handleDateInputChange(e);
                    this.#handleTimeInputChange(e);
                }}
            />,
            iconView ? <label key="icon" for={id} class="input-control-suffix">{iconView}</label> : null,
        ];
    }

    protected _getTriggerProps(props: RenderableProps<DatetimePickerOptions>, state: Readonly<PickState>): PickTriggerProps<PickState> {
        const triggerProps = super._getTriggerProps(props, state);
        return {
            ...triggerProps,
            className: classes(triggerProps.className, 'datetime-picker input-control has-suffix-icon'),
        };
    }

    protected _getPopProps(props: RenderableProps<DatetimePickerOptions>, state: Readonly<PickState>): PickPopProps<PickState> {
        const popProps = super._getPopProps(props, state);
        return {
            ...popProps,
            className: classes(popProps.className, 'popup'),
        };
    }

    _renderPop(props: DatetimePickerOptions, state: PickState): ComponentChildren {
        const {weekNames, monthNames, weekStart, yearText, todayText = i18n.getLang('today'), clearText, menu, actions, minDate, maxDate, required, minuteStep} = props;
        const [hour, minute] = this.getTime() || [];
        const menuProps = {
            date: {
                onChange: this.setDate,
                date: state.value,
                weekNames,
                monthNames,
                weekStart,
                yearText,
                todayText,
                clearText: required ? '' : clearText,
                menu,
                actions,
                minDate,
                maxDate,
            },
            time: {
                hour,
                minute,
                minuteStep,
                onChange: this.#handleTimeChange,
            },
        };
        return (
            <DatetimePickerMenu {...menuProps} />
        );
    }
}
