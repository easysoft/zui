import {HElement, type HElementProps} from '@zui/core';
import type {RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';

export type ContainerWithSideProps = HElementProps & {
};

export class ContainerWithSide extends HElement<ContainerWithSideProps> {
    static readonly NAME = 'ContainerWithSide';

    protected _getClassName(props: RenderableProps<HElementProps>): ClassNameLike {
        return [super._getClassName(props), 'container-with-side'];
    }
}
