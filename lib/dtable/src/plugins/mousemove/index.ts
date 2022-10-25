import {definePlugin} from '../../helpers/shared-plugins';

import type {DTablePluginTypes, DTableWithPlugin, DTablePlugin} from '../../types/plugin';

export interface DTableMousemoveTypes extends DTablePluginTypes {
    data: {
        mmRafID?: number;
        dmmRafID?: number;
    },
    events: {
        mousemovesmooth: MouseEvent;
        document_mousemovesmooth: MouseEvent;
    }
}

export type DTableMousemove = DTableWithPlugin<DTableMousemoveTypes>;

export const mousemove: DTablePlugin<DTableMousemoveTypes> = {
    name: 'mousemove',
    events: {
        mousemove(event) {
            if (this.data.mmRafID) {
                cancelAnimationFrame(this.data.mmRafID);
                this.data.mmRafID = 0;
            }

            this.data.mmRafID = requestAnimationFrame(() => {
                this.emitCustomEvent('mousemovesmooth', event);
            });
            event.preventDefault();
        },
        document_mousemove(event) {
            if (this.data.dmmRafID) {
                cancelAnimationFrame(this.data.dmmRafID);
                this.data.dmmRafID = 0;
            }

            this.data.dmmRafID = requestAnimationFrame(() => {
                this.emitCustomEvent('document_mousemovesmooth', event);
            });
            event.preventDefault();
        },
    },
};

export default definePlugin(mousemove);
