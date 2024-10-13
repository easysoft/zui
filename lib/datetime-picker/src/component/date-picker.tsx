import {ComponentChildren, RenderableProps} from 'preact';
import {Icon, classes} from '@zui/core';
import {formatDate} from '@zui/helpers';
import {Pick} from '@zui/pick/src/components/pick';
import {PickOptions, PickPopProps, PickState, PickTriggerProps} from '@zui/pick/src/types';
import {getDate, campDate} from '../helpers';
import {DatePickerOptions} from '../types';
import {DatePickerMenu} from './date-picker-menu';
import '@zui/css-icons/src/icons/calendar.css';

export class DatePicker<T extends DatePickerOptions = DatePickerOptions> extends Pick<PickState, T> {
    static defaultProps = {
        ...Pick.defaultProps,
        popWidth: 'auto',
        popMaxHeight: 320,
        format: 'yyyy-MM-dd',
        icon: true,
        limitPopInScreen: false,
    } as Partial<PickOptions>;

    protected _date: Date | null | undefined;

    getDefaultState(props?: RenderableProps<T> | undefined): PickState {
        const state = super.getDefaultState(props);
        return {
            ...state,
            value: this._calcValue(state.value),
        };
    }

    getDate() {
        return this._date;
    }

    setDate = (value: string, force?: boolean) => {
        const {disabled, readonly} = this.props;
        if (!force && (disabled || readonly)) {
            return;
        }

        const newValue = this._calcValue(value);
        return this.changeState({value: newValue}, () => {
            this._afterSetDate();
        });
    };

    setValue(value: string, silent?: boolean) {
        if (silent) {
            const trigger = this._trigger.current;
            if (trigger) {
                trigger._skipTriggerChange = value;
            }
        }
        return this.setDate(value, true) as Promise<PickState>;
    }

    _calcValue(value: string): string {
        const {onInvalid, defaultValue = '', required, allowInvalid, format} = this.props;
        let date = this._parseDate(value);
        if (!date && onInvalid) {
            const invalidResult = onInvalid(value);
            if (invalidResult) {
                date = this._parseDate(invalidResult);
            }
        }

        this._date = date;
        return date ? formatDate(date, format) : (allowInvalid ? value : (required ? defaultValue : ''));
    }

    _getDateRange(value: string): [min: Date | null, max: Date | null] {
        const {minDate, maxDate} = this.props;
        return [getDate(typeof minDate === 'function' ? minDate(value) : minDate), getDate(typeof maxDate === 'function' ? maxDate(value) : maxDate)];
    }

    _parseDate(value: string): Date | null {
        const date = getDate(value);
        return (date && this._isAllowDate(date)) ? campDate(date, ...this._getDateRange(value)) : null;
    }

    _afterSetDate() {
        this.toggle(false);
    }

    _handleInputFocus = () => {
        this.toggle(true);
    };

    _handleInputChange = (event: Event) => {
        this.setDate((event.target as HTMLInputElement).value);
    };

    _handleClearBtnClick = () => {
        this.setDate('');
    };

    _handleSetDate = (date: string) => {
        this.setDate(date);
    };

    _renderTrigger(props: DatePickerOptions, state: PickState): ComponentChildren {
        const {placeholder, icon, required, disabled, readonly, display} = props;
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
        const displayValue = open ? value : (display ? display(value, this._date) : value);
        return [
            <input
                key="input"
                id={id}
                type="text"
                className="form-control"
                placeholder={placeholder}
                value={displayValue}
                disabled={disabled}
                readOnly={readonly}
                autoComplete="off"
                onFocus={this._handleInputFocus}
                onChange={this._handleInputChange}
            />,
            iconView ? <label key="icon" for={id} className="input-control-suffix">{iconView}</label> : null,
        ];
    }

    protected _getTriggerProps(props: RenderableProps<T>, state: Readonly<PickState>): PickTriggerProps<PickState> {
        const triggerProps = super._getTriggerProps(props, state);
        return {
            ...triggerProps,
            className: classes(triggerProps.className, 'date-picker input-control has-suffix-icon'),
        };
    }

    protected _getPopProps(props: RenderableProps<T>, state: Readonly<PickState>): PickPopProps<PickState> {
        const popProps = super._getPopProps(props, state);
        return {
            ...popProps,
            className: classes(popProps.className, 'popup'),
        };
    }

    protected _isAllowDate(date: Date): boolean {
        return this.props.isAllowDate?.call(this, date) ?? true;
    }

    _renderPop(props: T, state: PickState): ComponentChildren {
        const {weekNames, monthNames, weekStart, yearText, todayText, clearText, menu, actions, required, isAllowDate} = props;
        const [minDate, maxDate] = this._getDateRange(state.value);
        return (
            <DatePickerMenu
                onChange={this._handleSetDate}
                date={this._date}
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
                isAllowDate={isAllowDate ? this._isAllowDate.bind(this) : undefined}
            />
        );
    }
}
