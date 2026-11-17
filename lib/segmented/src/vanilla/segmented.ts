import {ComponentFromReact} from '@zui/core';
import {Segmented as SegmentedReact} from '../component';
import type {SegmentedOptions} from '../types';

export class Segmented extends ComponentFromReact<SegmentedOptions, SegmentedReact> {
    static NAME = 'Segmented';

    static Component = SegmentedReact;

    get value() {
        return this.$?.value;
    }
}

Segmented.register();
