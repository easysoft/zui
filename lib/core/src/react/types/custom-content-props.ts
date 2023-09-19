import type {ComponentChildren} from 'preact';
import type {CustomContentType} from './custom-content-type';

export interface CustomContentProps  {
    content: CustomContentType | CustomContentType[];
    generatorThis?: unknown;
    generatorArgs?: unknown[];
    children?: ComponentChildren;
    [prop: string]: unknown;
}
