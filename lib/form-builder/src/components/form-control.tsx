import {Component, type ComponentType, type RenderableProps, type JSX} from 'preact';
import {classes, ClassNameLike, mergeProps, nextGid, Component as ZUIComponent} from '@zui/core';
import {ZUI} from '@zui/core/src/react/components/zui';
import {Checkbox, CheckList} from '@zui/checkbox/src/component';
import type {CheckboxProps, CheckListProps} from '@zui/checkbox';
import type {FormWidgetType} from '../types';

export type FormControlProps = {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    name?: string;
    placeholder?: string;
    readonly?: boolean;
    disabled?: boolean;
    required?: boolean;
    value?: unknown;
    props?: Record<string, unknown>;
    widget?: FormWidgetType;
    onChange?: (value: unknown) => void;
};

export class FormControl extends Component<FormControlProps> {
    protected _defaultID = `_form-control-${nextGid()}`;

    protected _renderZUIComponent(widget: FormWidgetType, props: Record<string, unknown>) {
        if ((widget as typeof ZUIComponent).ZUI) {
            return <ZUI $use={widget as typeof ZUIComponent} $options={props} />;
        }

        const Component = widget as ComponentType;
        return <Component {...props} />;
    }

    protected _renderSelect(props: Record<string, unknown>) {
        const {items = [], className, multiple, ...rest} = props;
        return (
            <select className={classes('form-control', className as ClassNameLike)} multiple={multiple as boolean} {...rest}>
                {
                    (items as {text: string; value: string}[]).map(item => (
                        <option value={item.value}>{item.text}</option>
                    ))
                }
            </select>
        );
    }

    protected _renderCheckbox(props: Record<string, unknown>) {
        const {className, type, name, defaultValue, disabled, ...rest} = props;
        return (
            <Checkbox
                type={type as CheckboxProps['type']}
                id={name as string ?? this._defaultID}
                className={className as ClassNameLike}
                name={name as string}
                defaultChecked={!!defaultValue}
                disabled={!!disabled}
                {...rest}
            />
        );
    }

    protected _renderCheckList(props: Record<string, unknown>) {
        const {items = [], type = 'radio', className, disabled, block = false, name, defaultValue, ...rest} = props;
        return (
            <CheckList
                type={type as CheckListProps['type']}
                items={items as CheckListProps['items']}
                className={className as ClassNameLike}
                name={name as string}
                defaultChecked={defaultValue as string[] | string}
                disabled={!!disabled}
                inline={!block}
                {...rest}
            />
        );
    }

    protected _renderText(props: Record<string, unknown>) {
        const {value, className, ...rest} = props;
        return (
            <div className={classes('form-static-text', className as ClassNameLike)} {...rest}>{value as string}</div>
        );
    }

    protected _renderTextarea(props: Record<string, unknown>) {
        const {value, className, ...rest} = props;
        return (
            <textarea className={classes('form-control', className as ClassNameLike)} {...rest}>{value as string}</textarea>
        );
    }

    protected _renderInput(props: Record<string, unknown>) {
        const {type = 'text', className, ...rest} = props;
        return (
            <input type={type as string} className={classes('form-control', className as ClassNameLike)} {...rest} />
        );
    }

    render(props: RenderableProps<FormControlProps>) {
        const {widget = 'input', props: widgetProps, ...others} = props;
        const finalWidgetProps = mergeProps({}, others, widgetProps);
        if (typeof widget === 'function') {
            return this._renderZUIComponent(widget, finalWidgetProps);
        }

        if (widget === 'select' || widget === 'multiSelect') {
            return this._renderSelect({
                multiple: widget === 'multiSelect',
                ...finalWidgetProps,
            });
        }

        if (widget === 'checkbox' || widget === 'switch') {
            return this._renderCheckbox({
                type: widget,
                ...finalWidgetProps,
            });
        }

        if (widget === 'checkboxList' || widget === 'switchList' || widget === 'radioList' || widget === 'radio') {
            return this._renderCheckList({
                type: widget === 'switchList' ? 'switch' : ((widget === 'radioList' || widget === 'radio') ? 'radio' : 'checkbox'),
                ...finalWidgetProps,
            });
        }

        if (widget === 'text') {
            return this._renderText(finalWidgetProps);
        }

        if (widget === 'textarea') {
            return this._renderTextarea(finalWidgetProps);
        }

        if (widget === 'input') {
            return this._renderInput(finalWidgetProps);
        }

        return <ZUI $use={widget} $options={finalWidgetProps} />;
    }
}
