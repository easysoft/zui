import type {ComponentChildren} from 'preact';
import type {CustomContentType} from './custom-content-type';

export type CustomContentProps = {
    content: CustomContentType | CustomContentType[];
    generatorThis?: unknown;
    generatorArgs?: unknown[];
    children?: ComponentChildren;
};
