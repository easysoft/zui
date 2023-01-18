import type {JSX, ComponentType, ComponentChildren, VNode} from 'preact';
import {ClassNameLike} from '../../../browser-helpers/src/classes';

export type SwitchProps = {
    component?: string | ComponentType;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren | (() => ComponentChildren);
    onChange?: JSX.GenericEventHandler<HTMLInputElement>;
    disabled?: boolean;
    defaultChecked?: boolean;
    icon?: string | VNode;
    surffixIcon?: string | VNode;
    text?: ComponentChildren;
};
