import type {ComponentChildren, JSX} from 'preact';
import {type ClassNameLike, CustomContent, CustomContentType, Icon, classes} from '@zui/core';
import {FormControl, type FormControlProps} from './form-control';

export type FormGroupProps = {
    name?: string;

    label?: CustomContentType;

    style?: JSX.CSSProperties;

    hint?: CustomContentType;

    className?: ClassNameLike;

    tooltip?: string;

    required?: boolean;

    labelClass?: ClassNameLike;

    children?: ComponentChildren;

    control?: FormControlProps;
};

export function FormGroup(props: FormGroupProps) {
    const {children, name, label, tooltip, labelClass, required, style, className, hint, control} = props;
    return (
        <div className={classes('form-group', className, control?.widget === 'text' ? 'is-static-text' : null)} data-name={name} style={style}>
            {label !== undefined ? (
                <label class={classes('form-label', labelClass, required ? 'required' : '')} for={name}>
                    <div class="form-label-text" title={typeof label === 'string' ? label : undefined}>
                        <CustomContent content={label} />
                    </div>
                    {tooltip ? <div className="state" zui-toggle="tooltip" data-content={tooltip}><Icon icon="info" /></div> : null}
                </label>
            ) : null}
            {control ? <FormControl {...control} /> : null}
            {children}
            {hint ? <CustomContent className="form-tip" content={hint} /> : null}
        </div>
    );
}
