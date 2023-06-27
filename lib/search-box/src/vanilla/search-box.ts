import {ComponentFromReact} from '@zui/core';
import {SearchBox as SearchBoxReact} from '../components';
import {SearchBoxOptions} from '../types';

export class SearchBox extends ComponentFromReact<SearchBoxOptions, SearchBoxReact> {
    static NAME = 'SearchBox';

    static Component = SearchBoxReact;
}
