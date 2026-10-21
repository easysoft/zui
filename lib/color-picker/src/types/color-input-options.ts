import type {ClassNameLike} from '@zui/core/src/helpers';
import type {IconType} from '@zui/core/src/react';

export type ColorInputOptions = {
    id?: string;
    className?: ClassNameLike;
    name?: string;
    value?: string;
    defaultValue?: string;
    alpha?: boolean;
    hint?: string;
    icon?: IconType;
    onChange?: (value: string, event: Event) => void;
    onInput?: (value: string, event: Event) => void;
};
