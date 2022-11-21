import type {ComponentChildren, ComponentType, JSX} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';

export interface PickerBasicProps {
    rootClass?: ClassNameLike;
    component?: string | ComponentType;
    type?: string;
    key?: string | number | symbol;
    attrs?: JSX.HTMLAttributes<HTMLLIElement>;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren | (() => ComponentChildren);
    onSelect?: JSX.MouseEventHandler<HTMLAnchorElement>;
}
