import {definePlugin} from '../../helpers/shared-plugins';

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

            return false;
        },
        document_mousemove(event) {
            if (this.data.dmmRafID) {
                cancelAnimationFrame(this.data.dmmRafID);
                this.data.dmmRafID = 0;
            }

            this.data.dmmRafID = requestAnimationFrame(() => {
                this.emitCustomEvent('document_mousemovesmooth', event);
            });

            return false;
        },
    },
};

export default definePlugin(mousemove);
