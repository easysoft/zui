import type {ComponentType, JSX} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {CardProps} from './card-props';

export interface CardItemProps extends CardProps {
    innerComponent?: ComponentType | keyof JSX.IntrinsicElements;
    innerClass?: ClassNameLike;
    innerAttrs?: Record<string, unknown>;
}
