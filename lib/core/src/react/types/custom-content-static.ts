import type {ComponentChildren} from 'preact';
import type {HtmlContentProps} from './html-content-props';
import type {HElementProps} from './h-element-props';
import type {LazyContentProps} from './lazy-content-props';

export type CustomContentStatic = ComponentChildren | HtmlContentProps | LazyContentProps | HElementProps;
