import type {ActionNestedItemProps} from '@zui/action-menu/src/types/action-nested-item-props';
import type {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';

export type MenuNestedItemProps<T extends ActionBasicProps = ActionNestedItemProps> = ActionNestedItemProps<T>;
