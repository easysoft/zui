import {ComponentFromReact} from '@zui/core';
import {VirtualList as VirtualListReact} from '../component';

import type {VirtualListProps} from '../types';

export class VirtualList extends ComponentFromReact<VirtualListProps, VirtualListReact> {
    static NAME = 'VirtualList';

    static Component = VirtualListReact;
}
