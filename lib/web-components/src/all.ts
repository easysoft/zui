import {defineButton} from './button';
import {definePager} from './pager';
import {definePicker} from './picker';

export * from './main';
export * from './button';
export * from './pager';
export * from './picker';

/** Explicitly register the three supported elements in the current window. */
export function defineAll(): void {
    defineButton();
    definePager();
    definePicker();
}
