import type {ToolbarItemOptions} from './toolbar-item-options';
import type {ToolbarOptions} from './toolbar-options';

export type ToolbarSetting<T extends unknown[] = []> = ToolbarItemOptions[] | ToolbarOptions | ((...args: T) => ToolbarItemOptions[] | ToolbarOptions);
