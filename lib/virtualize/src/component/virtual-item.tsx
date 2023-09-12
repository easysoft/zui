import {HElement, CustomContent, mergeProps} from '@zui/core';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {VirtualItemProps} from '../types';

export class VirtualItem extends HElement<VirtualItemProps> {
    protected _getChildren(props: RenderableProps<VirtualItemProps>): ComponentChildren {
        const {content, children} = props;
        if (content) {
            return [<CustomContent key="content" content={content} />, children];
        }
        return children;
    }

    protected _getProps(props: RenderableProps<VirtualItemProps>): Record<string, unknown> {
        return mergeProps({style: {position: 'absolute'}}, super._getProps(props));
    }
}
