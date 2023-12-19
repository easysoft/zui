import {ComponentChildren, RenderableProps} from 'preact';
import {Icon, classes, i18n} from '@zui/core';
import {formatDate, createDate} from '@zui/helpers';
import {Pick} from '@zui/pick/src/components/pick';
import {PickOptions, PickPopProps, PickState, PickTriggerProps} from '@zui/pick/src/types';
import {DatePickerOptions} from '../types';
import {DatePickerMenu} from './date-picker-menu';
import '@zui/css-icons/src/icons/calendar.css';

export class DatePicker extends Pick<PickState, DatePickerOptions> {
    static defaultProps = {
        ...Pick.defaultProps,
        popWidth: 'auto',
        popMaxHeight: 320,
        format: 'yyyy-MM-dd',
        icon: true,
    } as Partial<PickOptions>;

    constructor(props: DatePickerOptions) {
        super(props);
        const {value} = this.state as PickState;
        if (value) {
            (this.state as PickState).value = formatDate(value === 'today' ? new Date() : value, props.format);
        }
    }

    setDate = (value: string) => {
        const {onInvalid, defaultValue = '', required, disabled, readonly, format} = this.props;
        if (disabled || readonly) {
            return;
        }
        const date = createDate(value);
        const isInvalid = !value || Number.isNaN(date.getDay());
        this.setState({value: isInvalid ? (required ? defaultValue : '') : formatDate(date, format)}, () => {
            if (!isInvalid && onInvalid) {
                onInvalid(value);
            }
            this.toggle(false);
        });
    };

    _handleInputFocus = () => {
        this.toggle(true);
    };

    _handleInputChange = (event: Event) => {
        this.setDate((event.target as HTMLInputElement).value);
    };

    _handleClearBtnClick = () => {
        this.setDate('');
    };

    _renderTrigger(props: DatePickerOptions, state: PickState): ComponentChildren {
        const {placeholder, icon, required, disabled, readonly} = props;
        const {value = '', open} = state;
        const id = `date-picker-${this.id}`;
        let iconView: ComponentChildren;
        if (open && !required && value.length) {
            iconView = <button type="button" className="btn size-sm square ghost" onClick={this._handleClearBtnClick}><span className="close"></span></button>;
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
                onFocus={this._handleInputFocus}
                onChange={this._handleInputChange}
            />,
            iconView ? <label key="icon" for={id} className="input-control-suffix">{iconView}</label> : null,
        ];
    }

    protected _getTriggerProps(props: RenderableProps<DatePickerOptions>, state: Readonly<PickState>): PickTriggerProps<PickState> {
        const triggerProps = super._getTriggerProps(props, state);
        return {
            ...triggerProps,
            className: classes(triggerProps.className, 'date-picker input-control has-suffix-icon'),
        };
    }

    protected _getPopProps(props: RenderableProps<DatePickerOptions>, state: Readonly<PickState>): PickPopProps<PickState> {
        const popProps = super._getPopProps(props, state);
        return {
            ...popProps,
            className: classes(popProps.className, 'popup'),
        };
    }

    _renderPop(props: DatePickerOptions, state: PickState): ComponentChildren {
        const {weekNames, monthNames, weekStart, yearText, todayText = i18n.getLang('today'), clearText, menu, actions, minDate, maxDate, required} = props;
        return (
            <DatePickerMenu
                onChange={this.setDate}
                date={state.value}
                weekNames={weekNames}
                monthNames={monthNames}
                weekStart={weekStart}
                yearText={yearText}
                todayText={todayText}
                clearText={required ? '' : clearText}
                menu={menu}
                actions={actions}
                minDate={minDate}
                maxDate={maxDate}
            />
        );
    }
}
