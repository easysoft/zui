import {ComponentFromReact} from '@zui/core';
import {Tree as TreeReact} from '../components';
import {TreeOptions} from '../types';

export class Tree extends ComponentFromReact<TreeOptions, TreeReact> {
    static NAME = 'Tree';

    static Component = TreeReact;
}
