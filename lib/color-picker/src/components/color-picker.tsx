import {ComponentChildren} from 'preact';
import {Icon, $} from '@zui/core';
import '@zui/css-icons/src/icons/close.css';
import {Pick} from '@zui/pick/src/components/pick';
import {PickOptions, PickState, PickTriggerProps} from '@zui/pick/src/types';
import {ColorPickerOptions} from '../types';

export class ColorPicker extends Pick<PickState, ColorPickerOptions> {
    static defaultProps = {
        ...Pick.defaultProps,
        className: 'color-picker rounded btn square size-sm ghost',
        popClass: 'color-picker-pop popup',
        colors: ['#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e', '#14b8a6', '#0ea5e9', '#6366f1', '#a855f7', '#d946ef', '#ec4899'],
        closeBtn: true,
        popWidth: 'auto',
        popMinWidth: 176,
    } as Partial<PickOptions>;

    componentDidMount(): void {
        this.syncColor();
    }

    syncColor() {
        const {syncBackground, syncBorder, syncColor, syncValue} = this.props;
        const cssValue = this.state.value || '';
        if (syncBackground) {
            $(syncBackground).css('backgroundColor', cssValue);
        }
        if (syncBorder) {
            $(syncBorder).css('borderColor', cssValue);
        }
        if (syncColor) {
            $(syncColor).css('color', cssValue);
        }
        if (syncValue) {
            $(syncValue).text(cssValue);
        }
    }

    _handleChange(value: string | undefined, prevValue: string | undefined) {
        super._handleChange(value, prevValue);
        this.syncColor();
    }

    _renderTrigger(props: ColorPickerOptions, state: PickState): ComponentChildren {
        const {icon} = props;
        const {value} = state;
        return [
            icon ? <Icon key="icon" icon={icon} /> : <span class="color-picker-item bg-current ring" style={{background: value}}></span>,
        ];
    }

    _getTriggerProps(props: ColorPickerOptions, state: PickState): PickTriggerProps {
        const triggerProps = super._getTriggerProps(props, state);
        triggerProps.style = $.extend({
            color: state.value,
        }, triggerProps.style);
        return triggerProps;
    }

    _renderPop(props: ColorPickerOptions, state: PickState): ComponentChildren {
        const {colors = [], closeBtn, heading} = props;
        const {value} = state;
        let headingView: ComponentChildren;
        if (heading) {
            headingView = (<div key="heading" className="color-picker-heading">
                {heading}
                {closeBtn ? <button className="btn ghost square rounded size-sm" data-dismiss="pick"><span class="close"></span></button> : null}
            </div>);
        }
        return [
            headingView,
            <div key="row" className="color-picker-row">
                {colors.map((color) => (<button key={color} className="btn color-picker-item" style={{backgroundColor: color}} data-pick-value={color}>{value === color ? <Icon icon="check" /> : null}</button>))}
                <button className="btn color-picker-item" data-pick-value=""><Icon className="text-fore" icon="trash" /></button>
            </div>,
        ];
    }
}
