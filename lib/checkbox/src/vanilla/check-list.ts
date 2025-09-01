import {ComponentFromReact} from '@zui/core';
import {CheckList as CheckListReact} from '../component';
import {CheckListProps} from '../types';

export class CheckList extends ComponentFromReact<CheckListProps, CheckListReact> {
    static NAME = 'CheckList';

    static Component = CheckListReact;
}

CheckList.register();
