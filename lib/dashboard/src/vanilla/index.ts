import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {Dashboard as DashboardReact} from '../components';
import type {DashboardOptions} from '../types/options';

export class Dashboard extends ComponentFromReact<DashboardOptions, DashboardReact> {
    static NAME = 'Dashboard';

    static Component = DashboardReact;
}
