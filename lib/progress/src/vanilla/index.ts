import {ComponentFromReact} from '@zui/core';
import {ProgressBar as ProgressBarReact} from '../components';
import {ProgressBarOptions} from '../types';

export class ProgressBar extends ComponentFromReact<ProgressBarOptions, ProgressBarReact> {
    static NAME = 'ProgressBar';

    static Component = ProgressBarReact;
}

ProgressBar.register();
