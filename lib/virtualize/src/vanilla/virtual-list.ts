import {ComponentFromReact} from '@zui/core';
import {VirtualList as VirtualListReact} from '../component';

import type {VirtualListProps} from '../types';
import type {ScrollToOptions} from '@tanstack/virtual-core';

export class VirtualList extends ComponentFromReact<VirtualListProps, VirtualListReact> {
    static NAME = 'VirtualList';

    static Component = VirtualListReact;

    /** Available after the Preact view has mounted (or after an explicit render()). */
    get virtualizer() {
        return this.$?.virtualizer;
    }

    scrollToIndex(index: number, options?: ScrollToOptions): void {
        this.$?.scrollToIndex(index, options);
    }

    scrollToOffset(offset: number, options?: ScrollToOptions): void {
        this.$?.scrollToOffset(offset, options);
    }

    measure(): void {
        this.$?.measure();
    }
}

VirtualList.register();
