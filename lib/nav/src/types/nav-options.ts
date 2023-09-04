import type {ListProps} from '@zui/list';

export interface NavOptions extends ListProps {
    type?: 'primary' | 'secondary' | 'pills' | 'tabs',
    stacked?: boolean;
}
