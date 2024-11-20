import {ComponentFromReact} from './component-from-react';
import {CustomContentClass} from './components';
import {CustomContentProps} from './types';

export class Custom extends ComponentFromReact<CustomContentProps, CustomContentClass> {
    static NAME = 'Custom';

    static Component = CustomContentClass;
}

Custom.register();
