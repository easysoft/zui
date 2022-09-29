import {definePlugin} from '../../helpers/shared-plugins';

export interface DTableMousemoveTypes {
    pluginOptions: {
        onMouseMove: DTableEventListener<'mousemove'>;
        onDocMousemove: DTableEventListener<'mousemove'>;
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
        const plugins = this.plugins as DTablePlugin<DTableMousemoveTypes>[];
        if (plugins.some(x => x.onMouseMove)) {
            events.mousemove = function (event) {
                if (this.data.mmRafID) {
                    cancelAnimationFrame(this.data.mmRafID);
                    this.data.mmRafID = 0;
                }

                this.data.mmRafID = requestAnimationFrame(() => {
                    plugins.forEach(plugin => plugin.onMouseMove?.call(this, event));
                });
            };
        }
        if (plugins.some(x => x.onDocMousemove)) {
            events.document_mousemove = function (event) {
                if (this.data.dmmRafID) {
                    cancelAnimationFrame(this.data.dmmRafID);
                    this.data.dmmRafID = 0;
                }

                this.data.dmmRafID = requestAnimationFrame(() => {
                    plugins.forEach(plugin => plugin.onDocMousemove?.call(this, event as MouseEvent));
                });
            };
        }
        return events;
    },
};

export default definePlugin(mousemove);
