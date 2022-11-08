import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import type {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';
import {Pager as PagerReact} from '../component/pager';
import {PagerOptions, PagerItemOptions} from '../types';

export class Pager<T extends ActionBasicProps = PagerItemOptions> extends ComponentFromReact<PagerOptions<T>, PagerReact<T>> {
    static Component = PagerReact;
}
