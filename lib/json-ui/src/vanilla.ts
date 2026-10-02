import {ComponentFromReact} from '@zui/core';
import {JsonUI as JsonUIReact} from './component/json-ui';
import type {JsonUIProps} from './types';

/** Render a JSON UI inside a host element. Call destroy() to unmount it. */
export class JsonUI extends ComponentFromReact<JsonUIProps, JsonUIReact> {
    static NAME = 'JsonUI';

    static Component = JsonUIReact;
}

JsonUI.register();
