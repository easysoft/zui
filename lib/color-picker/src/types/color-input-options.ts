import type {ClassNameLike} from '@zui/core/src/helpers';

export type ColorInputOptions = {
    id?: string;
    className?: ClassNameLike;
    name?: string;
    value?: string;
    defaultValue?: string;
    alpha?: boolean;
    hint?: string;
    onChange?: (value: string, event: Event) => void;
};
