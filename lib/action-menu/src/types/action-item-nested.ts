import type {ActionItem} from './action-item';

export interface ActionItemNested extends ActionItem {
    items?: ActionItemNested[]
}
