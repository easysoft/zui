import {ComponentFromReact} from '@zui/core';
import type {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';
import {Pager as PagerReact} from '../component/pager';
import {PagerOptions, PagerItemOptions} from '../types';

export class Pager<T extends ActionBasicProps = PagerItemOptions> extends ComponentFromReact<PagerOptions<T>, PagerReact<T>> {
    static NAME = 'Pager';

    static Component = PagerReact;
}
