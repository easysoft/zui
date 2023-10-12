import {ClassNameLike, classes, mergeProps} from '@zui/core';
import {Card} from './card';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {CardItemProps} from '../types';

export class CardItem<P extends CardItemProps = CardItemProps, S = {}> extends Card<P, S> {
    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return props.className;
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const {innerAttrs, innerClass, innerComponent: InnerComponent = 'div'} = props;
        const innerProps = mergeProps({className: classes('card', innerClass)}, innerAttrs);
        return <InnerComponent {...innerProps}>
            {super._getChildren(props)}
        </InnerComponent>;
    }
}
