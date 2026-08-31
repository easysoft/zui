import {Icon, classes} from '@zui/core';
import {formatDate} from '@zui/helpers';
import {Pick} from '@zui/pick/react';
import {PickOptions, PickState, PickTriggerProps} from '@zui/pick';
import {TimePickerOptions} from '../types';
import {TimePickerMenu} from './time-picker-menu';
import '@zui/css-icons';
import {ComponentChildren, RenderableProps} from 'preact';

const parseTime = (value?: string): Date | undefined => {
    const match = value?.match(/^(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/);
    if (!match) {
        return;
    }
    const [, hourSetting, minuteSetting, secondSetting] = match;
    const hour = Number(hourSetting);
    const minute = Number(minuteSetting);
    const second = secondSetting === undefined ? 0 : Number(secondSetting);
    if (hour > 23 || minute > 59 || second > 59) {
        return;
    }
    return new Date(1999, 0, 1, hour, minute, second);
};

export class TimePicker extends Pick<PickState, TimePickerOptions> {
    static defaultProps = {
        ...Pick.defaultProps,
        popWidth: 'auto',
        popMaxHeight: 320,
        minuteStep: 5,
        format: 'hh:mm',
        icon: true,
    } as Partial<PickOptions>;

    getDefaultState(props?: RenderableProps<TimePickerOptions> | undefined): PickState {
        const state = super.getDefaultState(props);
        if (state.value === 'now') {
            state.value = formatDate(new Date(), (props || this.props).format);
        }
        return state;
    }

    _handleInputFocus = () => {
        this.toggle(true);
    };

    _handleInputChange = (event: Event) => {
        const value = (event.target as HTMLInputElement).value;
        if (parseTime(value)) {
            this.setTime(value);
        }
    };

    _handleInputBlur = (event: FocusEvent) => {
        this.setTime((event.target as HTMLInputElement).value);
    };

    _handleSetTime = (type: 'hour' | 'minute', value: number) => {
        this.setTime({[type]: String(value)});
    };

    _handleClearBtnClick = (event: MouseEvent) => {
        event.stopPropagation();
        this.setTime('');
    };

    setTime(value: string | {hour?: number; minute?: number}, force?: boolean, silent?: boolean) {
        if (!force && (this.props.disabled || this.props.readonly)) {
            return;
        }
        let valueString = '';
        if (typeof value === 'string') {
            valueString = value;
        } else {
            const [hourStr, minuteStr] = (this.state.value || '00:00').split(':');
            const {hour = +hourStr, minute = +minuteStr} = value;
            valueString = `${hour}:${minute}`;
        }

        return this._setTime(valueString, silent);
    }

    protected async _setTime(value: string, silent?: boolean) {
        const beforeChangeResult = await this.props.beforeChange?.call(this, value, this.state.value);
        if (beforeChangeResult === false) {
            return;
        }
        if (typeof beforeChangeResult === 'string') {
            value = beforeChangeResult;
        }
        const date = parseTime(value);
        const {onInvalid, required, defaultValue = '', format} = this.props;
        let resolvedDate = date;
        if (!resolvedDate && onInvalid) {
            const fallback = onInvalid(value);
            if (typeof fallback === 'string') {
                resolvedDate = parseTime(fallback);
            }
        }
        const newValue = resolvedDate ? formatDate(resolvedDate, format) : (required ? defaultValue : '');
        if (silent) {
            const trigger = this._trigger.current;
            if (trigger) {
                trigger._skipTriggerChange = newValue;
            }
        }
        return this.changeState({value: newValue});
    }

    setValue(value: string, silent?: boolean) {
        return this.setTime(value, true, silent) as Promise<PickState>;
    }

    getTime(): [hour: number, minute: number] | null {
        const date = parseTime(this.state.value);
        return date ? [date.getHours(), date.getMinutes()] : null;
    }

    _renderTrigger(props: TimePickerOptions, state: PickState): ComponentChildren {
        const {placeholder, icon, required, disabled, readonly} = props;
        const {value = '', open} = state;
        const id = `time-picker-${this.id}`;
        let iconView: ComponentChildren;
        if (open && !required && value.length) {
            iconView = <button type="button" className="btn size-sm square ghost" onClick={this._handleClearBtnClick}><span className="close"></span></button>;
        } else if (icon) {
            if (icon === true) {
                iconView = <i className="i-time"></i>;
            } else {
                iconView = <Icon icon={icon} />;
            }
        }
        return [
            <input key="input" id={id} type="text" className="form-control" placeholder={placeholder} value={value} disabled={disabled} readOnly={readonly} autoComplete="off" onFocus={this._handleInputFocus} onInput={this._handleInputChange} onBlur={this._handleInputBlur} />,
            iconView ? <span key="icon" className="input-control-suffix">{iconView}</span> : null,
        ];
    }

    protected _getTriggerProps(props: RenderableProps<TimePickerOptions>, state: Readonly<PickState>): PickTriggerProps<PickState> {
        const triggerProps = super._getTriggerProps(props, state);
        return {
            ...triggerProps,
            className: classes(triggerProps.className, 'time-picker input-control has-suffix-icon'),
        };
    }

    _renderPop(props: TimePickerOptions): ComponentChildren {
        const [hour, minute] = this.getTime() || [];
        return <TimePickerMenu hour={hour} minute={minute} minuteStep={props.minuteStep} onChange={this._handleSetTime} />;
    }
}
