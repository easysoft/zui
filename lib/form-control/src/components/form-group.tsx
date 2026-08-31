import type {ComponentChildren, JSX} from 'preact';
import {type ClassNameLike, CustomContent, CustomContentType, Icon, classes, jsRaw} from '@zui/core';
import {type TooltipOptions} from '@zui/tooltip';
import {FormControl, type FormControlProps} from './form-control';

export type FormGroupProps = {
    name?: string;

    label?: CustomContentType;

    style?: JSX.CSSProperties;

    hint?: CustomContentType;

    className?: ClassNameLike;

    tooltip?: string | TooltipOptions;

    required?: boolean;

    disabled?: boolean;

    labelClass?: ClassNameLike;

    children?: ComponentChildren;

    control?: FormControlProps;
};

export function FormGroup(props: FormGroupProps) {
    const {children, name, label, tooltip, labelClass, required, disabled, style, className, hint, control} = props;
    const noLabel = label === undefined || label === null || label === false || (typeof label === 'string' && !label.trim().length);
    const controlName = control?.name ?? name;
    const controlID = (control?.props?.id as string | undefined) ?? controlName;
    return (
        <div className={classes('form-group', className, control?.widget === 'text' ? 'is-static-text' : null, noLabel ? 'no-label' : '')} data-name={name} style={style}>
            {!noLabel ? (
                <label class={classes('form-label', labelClass, required ? 'required' : '')} for={controlID}>
                    <div class="form-label-text" title={typeof label === 'string' ? label : undefined}>
                        <CustomContent content={label} />
                    </div>
                    {tooltip ? <div className="state" zui-toggle="tooltip" zui-toggle-tooltip={jsRaw(typeof tooltip === 'string' ? {content: tooltip} : tooltip)}><Icon icon="info" /></div> : null}
                </label>
            ) : null}
            {control ? <FormControl required={required} disabled={disabled} {...control} name={controlName} props={{id: controlID, ...control.props}} /> : null}
            {children}
            {hint ? <CustomContent className="form-tip" content={hint} /> : null}
        </div>
    );
}
