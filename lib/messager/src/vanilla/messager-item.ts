import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {MessagerItem as MessagerItemReact} from '../component/messager-item';
import {MessagerProps} from '../types';

export class MessagerItem extends ComponentFromReact<MessagerProps, MessagerItemReact<MessagerProps>> {
    static NAME = 'MessagerHolder';

    static Component = MessagerItem;
}
