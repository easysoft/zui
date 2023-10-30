import {ComponentChildren, RenderableProps} from 'preact';
import {Icon, classes} from '@zui/core';
import {formatDate, createDate} from '@zui/helpers';
import {Pick} from '@zui/pick/src/components/pick';
import {PickOptions, PickState, PickTriggerProps} from '@zui/pick/src/types';
import {TimePickerOptions} from '../types';
import {TimePickerMenu} from './time-picker-menu';
import '@zui/css-icons/src/icons/time.css';
import '@zui/css-icons/src/icons/close.css';

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

export class TimePicker extends Pick<PickState, TimePickerOptions> {
    static defaultProps = {
        ...Pick.defaultProps,
        popWidth: 'auto',
        popMaxHeight: 320,
        minuteStep: 5,
        format: 'hh:mm',
        icon: true,
    } as Partial<PickOptions>;

    constructor(props: TimePickerOptions) {
        super(props);
        const state = this.state as PickState;
        if (state.value === 'now') {
            state.value = formatDate(new Date(), props.format);
        }
    }

    #handleInputFocus = () => {
        this.toggle(true);
    };

    #handleInputChange = (event: Event) => {
        this.setTime((event.target as HTMLInputElement).value);
    };

    #handleChange = (type: 'hour' | 'minute', value: string) => {
        this.setTime({[type]: value});
    };

    #handleClearBtnClick = () => {
        this.setTime('');
    };

    setTime(value: string | {hour?: number, minute?: number}) {
        if (this.props.disabled) {
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

        const date = parseTime(valueString);
        const {onInvalid, required, defaultValue} = this.props;
        this.setState({value: date ? formatDate(date, this.props.format) : (required ? defaultValue : '')}, () => {
            if (!date && onInvalid) {
                onInvalid(valueString);
            }
        });
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
            iconView = <button type="button" className="btn size-sm square ghost" onClick={this.#handleClearBtnClick}><span className="close"></span></button>;
        } else if (icon) {
            if (icon === true) {
                iconView = <i class="i-time"></i>;
            } else {
                iconView = <Icon icon={icon} />;
            }
        }
        return [
            <input key="input" id={id} type="text" className="form-control" placeholder={placeholder} value={value} disabled={disabled} readOnly={readonly} autoComplete="off" onFocus={this.#handleInputFocus} onChange={this.#handleInputChange} />,
            iconView ? <label key="icon" for={id} className="input-control-suffix">{iconView}</label> : null,
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
        return <TimePickerMenu hour={hour} minute={minute} minuteStep={props.minuteStep} onChange={this.#handleChange} />;
    }
}
