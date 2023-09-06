import type {Item} from '@zui/list';
import type {ToolbarOptions} from '@zui/toolbar';

export type TreeActionsSetting = Item[] | ToolbarOptions | ((item: Item) => Item[] | ToolbarOptions);
