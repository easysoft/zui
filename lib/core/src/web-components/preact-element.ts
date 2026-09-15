import {render} from 'preact';
import {ZuiElement} from './element';

import type {ComponentChild} from 'preact';

/** Shares rendering and full Preact-tree cleanup between renderer adapters. */
export abstract class PreactElement<P extends object> extends ZuiElement<P> {
    protected _render(): void {
        render(this._renderView(), this._container!);
        this._markReady();
    }

    protected _destroy(): void {
        if (this._container) {
            render(null, this._container);
        }
    }

    protected abstract _renderView(): ComponentChild;
}
