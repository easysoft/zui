import {ClassNameLike, HElement, type HElementProps} from '@zui/core';
import {RenderableProps} from 'preact';

export type ContainerWithSideProps = HElementProps & {
};

export class ContainerWithSide extends HElement<ContainerWithSideProps> {
    protected _getClassName(props: RenderableProps<HElementProps>): ClassNameLike {
        return [super._getClassName(props), 'container-with-side'];
    }
}
