import {Component} from 'preact';
import type {RenderableProps} from 'preact';
import {FormGroup} from '@zui/form-control/react';
import type {FormControlProps} from '@zui/form-control/react';
import {$, mergeProps} from '@zui/core';
import {FieldSchemaInfo} from '../types';
import {isSchemaEqual} from '../helpers/is-schema-equal';

export interface SchemaFormItemProps {
    schemaInfo: FieldSchemaInfo;
    onChangeField: (path: string, value: unknown) => void;
}

export class SchemaFormItem extends Component<SchemaFormItemProps> {
    protected _controlKey = 0;

    componentWillReceiveProps({schemaInfo}: SchemaFormItemProps) {
        const previous = this.props.schemaInfo;
        // Value edits belong to the mounted widget. Schema/configuration changes must
        // also reach widgets that only initialize their options in componentDidMount.
        const getOptions = ({schema, widget, required}: FieldSchemaInfo) => [schema.type, widget[0], schema.props, schema.disabled, schema.readonly, schema.placeholder, required];
        const optionsChanged = Object.is(previous.value, schemaInfo.value) && !isSchemaEqual(previous.widget[1], schemaInfo.widget[1]);
        if (optionsChanged || !isSchemaEqual(getOptions(previous), getOptions(schemaInfo))) {
            this._controlKey++;
        }
    }

    protected _handleChange = (event: unknown) => {
        const {schemaInfo, onChangeField} = this.props;
        const onChange = schemaInfo.widget[2];
        let value: unknown;
        if (onChange) {
            value = onChange(event);
        } else {
            if (event === undefined) {
                return;
            }
            if (event instanceof Event) {
                const targetElement = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
                if (targetElement.tagName === 'INPUT' && targetElement.type === 'radio' && !$(targetElement).prop('checked')) {
                    return;
                }
                if (targetElement.tagName === 'INPUT' && targetElement.type === 'checkbox') {
                    value = $(targetElement).prop('checked');
                } else if (targetElement.tagName === 'SELECT' && (targetElement as HTMLSelectElement).multiple) {
                    value = Array.from($(targetElement).val());
                } else {
                    value = targetElement.value;
                }
            } else if (typeof event === 'function' || (typeof event === 'object' && !Array.isArray(event) && !$.isPlainObject(event))) {
                console.warn('[ZUI] Unsupported value type:', typeof event, event);
                return;
            } else {
                value = event;
            }
        }
        onChangeField(schemaInfo.path, value);
    };

    render({schemaInfo}: RenderableProps<SchemaFormItemProps>) {
        const {schema, value, widget: widgetSetting, path, required} = schemaInfo;
        const {title, description, tooltip, disabled, readonly, placeholder, props} = schema;
        const [widget, widgetProps] = widgetSetting;
        const controlProps: FormControlProps = {
            widget,
            disabled,
            readonly,
            placeholder,
            required,
            props: mergeProps({}, widgetProps, props),
            value: value,
            onChange: this._handleChange,
        };
        return (
            <FormGroup
                key={this._controlKey}
                name={path}
                label={title}
                hint={description}
                tooltip={tooltip}
                required={controlProps.required}
                control={controlProps}
            />
        );
    }
}
