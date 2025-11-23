import {Component, RenderableProps} from 'preact';
import {FormControlProps, FormGroup} from '@zui/form-control/src/components';
import {$} from '@zui/core';
import {FieldSchemaInfo} from '../types';

export interface SchemaFormItemProps {
    schemaInfo: FieldSchemaInfo;
    onChangeField: (path: string, value: unknown) => void;
}

export class SchemaFormItem extends Component<SchemaFormItemProps> {
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
                const targetElement = event.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLSelectElement;
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
        const {title, description, tooltip, disabled, readonly, placeholder} = schema;
        const [widget, widgetProps] = widgetSetting;
        const controlProps: FormControlProps = {
            widget,
            disabled,
            readonly,
            placeholder,
            required,
            props: widgetProps,
            value: value,
            onChange: this._handleChange,
        };
        return (
            <FormGroup
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
