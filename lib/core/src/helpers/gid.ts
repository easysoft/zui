import {$} from '../cash';

export function nextGid() {
    return $.guid++;
}
