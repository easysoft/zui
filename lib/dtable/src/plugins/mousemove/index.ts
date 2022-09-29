import {definePlugin} from '../../helpers/shared-plugins';

export interface DTableMousemoveTypes<D extends DTable = DTable> extends DTablePluginTypes {
    pluginOptions: {
        onMouseMove: DTableEventListener<'mousemove', D>;
        onDocMousemove: DTableEventListener<'mousemove', D>;
    },
    data: {
        mmRafID?: number;
        dmmRafID?: number;
    }
}

export type DTableMousemove = DTableWithPlugin<DTableMousemoveTypes>;

export const mousemove: DTablePlugin<DTableMousemoveTypes> = {
    name: 'mousemove',
    events() {
        const events: DTablePluginEvents<DTableMousemoveTypes> = {};
        if (this.plugins.some(x => x.onMouseMove)) {
            events.mousemove = function (event) {
                if (this.data.mmRafID) {
                    cancelAnimationFrame(this.data.mmRafID);
                    this.data.mmRafID = 0;
                }

                this.data.mmRafID = requestAnimationFrame(() => {
                    for (const plugin of this.plugins) {
                        plugin.onMouseMove?.call(this, event);
                    }
                });
            };
        }
        if (this.plugins.some(x => x.onDocMousemove)) {
            events.document_mousemove = function (event) {
                if (this.data.dmmRafID) {
                    cancelAnimationFrame(this.data.dmmRafID);
                    this.data.dmmRafID = 0;
                }

                this.data.dmmRafID = requestAnimationFrame(() => {
                    for (const plugin of this.plugins) {
                        plugin.onDocMousemove?.call(this, event as MouseEvent);
                    }
                });
            };
        }
        return events;
    },
};

export default definePlugin(mousemove);
