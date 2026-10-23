import {ComponentFromReact} from '@zui/core';
import {JsonUI as JsonUIReact} from './component/json-ui';
import {JsonUIError} from './types';
import type {JsonUIProps, JsonUIValue} from './types';

/** Render a JSON UI inside a host element. Call destroy() to unmount it. */
export class JsonUI extends ComponentFromReact<JsonUIProps, JsonUIReact> {
    static NAME = 'JsonUI';

    static Component = JsonUIReact;

    /** Return an isolated snapshot of the current document state. */
    getState() {
        return this._requireView().getState();
    }

    /** Shallow-merge top-level state fields in one validated transaction. */
    patchState(patch: Record<string, JsonUIValue>) {
        return this._requireView().patchState(patch);
    }

    /** Restore the latest document defaults without firing watches for the reset itself. */
    resetState() {
        return this._requireView().resetState();
    }

    private _requireView() {
        if (!this.$) throw new JsonUIError('$', 'The view is not mounted.');
        return this.$;
    }
}

JsonUI.register();
