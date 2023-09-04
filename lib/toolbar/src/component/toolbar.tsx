import {BtnGroup} from '@zui/btn-group/src/component/btn-group';

import type {Item} from '@zui/list';
import type {ToolbarOptions} from '../types';

export class Toolbar<T extends ToolbarOptions = ToolbarOptions> extends BtnGroup<T> {
    static NAME = 'toolbar';

    static defaultItemProps: Partial<Item> = {
        btnType: 'ghost',
    };
}
