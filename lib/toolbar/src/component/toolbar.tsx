import {classes, $} from '@zui/core';
import {BtnGroup} from '@zui/btn-group/src/component/btn-group';

import type {Item} from '@zui/list';
import type {ToolbarOptions} from '../types';
import type {ClassNameLike} from '@zui/core/src/helpers';
import type {RenderableProps} from 'preact';

export class Toolbar<T extends ToolbarOptions = ToolbarOptions> extends BtnGroup<T> {
    static NAME = 'toolbar';

    static defaultItemProps: Partial<Item> = {
        btnType: 'ghost',
    };

    protected _getProps(props: RenderableProps<T>): Record<string, unknown> {
        const {gap} = props;
        const propsMap = super._getProps(props);
        if (gap) {
            if (typeof gap === 'number') {
                propsMap.className = classes(propsMap.className as ClassNameLike, `gap-${gap}`);
            } else {
                propsMap.style = $.extend(propsMap.style || {}, {gap: gap});
            }
        }
        return propsMap;
    }
}
