import {definePlugin} from '../../helpers/shared-plugins';
import mousemove, {DTableMousemoveTypes} from '../mousemove';
import './style.css';

export interface DTableMoveableTypes extends DTablePluginTypes {
    options: {
        moveable?: boolean | 'header';
    },
    methods: {
    },
    data: {
        disableMoveable?: boolean,
        moveableStartInfo?: {x: number, y: number, scrollLeft: number, scrollTop: number}
    },
}

export type DTableMoveable = DTableWithPlugin<DTableMoveableTypes, [DTableMousemoveTypes]>;

export const moveable: DTablePlugin<DTableMoveableTypes, [DTableMousemoveTypes]> = {
    name: 'moveable',
    defaultOptions: {moveable: true},
    plugins: [mousemove],
    when: options => !!options.moveable,
    events: {
        mousedown(event) {
            if (this.data.disableMoveable) {
                return;
            }
            const target = event.target as HTMLElement;
            const flexableDiv = target.closest('.dtable-flexable');
            if (!flexableDiv) {
                return;
            }
            if (this.options.moveable === 'header' && !flexableDiv.closest('.dtable-header')) {
                return;
            }
            const {scrollLeft, scrollTop} = this.layout;
            this.data.moveableStartInfo = {
                x: event.clientX,
                y: event.clientY,
                scrollLeft,
                scrollTop,
            };
            this.ref.current?.classList.add('dtable-moving');
        },
        document_mouseup() {
            this.data.moveableStartInfo = undefined;
            this.ref.current?.classList.remove('dtable-moving');
        },
        document_mousemovesmooth(event) {
            const {moveableStartInfo} = (this as DTableMoveable).data;
            if (!moveableStartInfo) {
                return;
            }
            const {clientX, clientY} = event as MouseEvent;
            const {x, y, scrollLeft, scrollTop} = moveableStartInfo;
            this.scroll({
                scrollLeft: scrollLeft - clientX + x,
                scrollTop: this.options.moveable === 'header' ? undefined : (scrollTop - clientY + y),
            });
        },
    },
};

export default definePlugin(moveable);
