import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {BtnGroup as BtnGroupReact} from '../component/btn-group';
import {BtnGroupOptions} from '../types/btn-group-options';

export class BtnGroup extends ComponentFromReact<BtnGroupOptions, BtnGroupReact> {
    static NAME = 'btngroup';

    static Component = BtnGroupReact;
}
