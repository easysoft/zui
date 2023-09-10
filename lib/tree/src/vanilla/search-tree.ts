import {ComponentFromReact} from '@zui/core';
import {SearchTree as SearchTreeReact} from '../components';
import {SearchTreeOptions} from '../types';

export class SearchTree extends ComponentFromReact<SearchTreeOptions, SearchTreeReact> {
    static NAME = 'SearchTree';

    static Component = SearchTreeReact;
}
