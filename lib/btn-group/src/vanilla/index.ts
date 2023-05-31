import {ComponentFromReact} from '@zui/core';
import {BtnGroup as BtnGroupReact} from '../component/btn-group';
import {BtnGroupOptions} from '../types/btn-group-options';

export class BtnGroup extends ComponentFromReact<BtnGroupOptions, BtnGroupReact> {
    static NAME = 'BtnGroup';

    static Component = BtnGroupReact;
}
