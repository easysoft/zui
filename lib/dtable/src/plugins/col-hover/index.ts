import {definePlugin} from '../../helpers/shared-plugins';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';

type DTableColHoverTypes = {
    options: Partial<{
        colHover: boolean | 'header';
    }>,
    data: {
        hoverCol?: string | false,
    }
};

type DTableColHover = DTableWithPlugin<DTableColHoverTypes>;

function applyColHover(table: DTableColHover, hoverCol?: string | false) {
    if (hoverCol !== undefined) {
        table.data.hoverCol = hoverCol;
    } else {
        hoverCol = table.data.hoverCol;
    }
    const {current} = table.ref;
    if (!current) {
        return;
    }
    const hoverClass = 'dtable-col-hover';
    current.querySelectorAll(`.${hoverClass}`).forEach(col => col.classList.remove(hoverClass));
    if (typeof hoverCol === 'string' && hoverCol.length) {
        current.querySelectorAll(`.dtable-cell[data-col="${hoverCol}"]`).forEach(x => x.classList.add(hoverClass));
    }
}

export const colHover: DTablePlugin<DTableColHoverTypes> = {
    name: 'col-hover',
    defaultOptions: {
        colHover: false,
    },
    when: options => !!options.colHover,
    events: {
        mouseover(event: Event) {
            const {colHover: hover} = this.options;
            if (!hover) {
                return;
            }

            const cellElement = (event.target as HTMLElement)?.closest<HTMLElement>('.dtable-cell');
            if (!cellElement) {
                return;
            }
            if (hover === 'header' && !cellElement.closest('.dtable-header')) {
                return;
            }
            const colName = cellElement?.getAttribute('data-col') ?? false;
            applyColHover(this, colName);
        },
        mouseleave() {
            applyColHover(this, false);
        },
    },
};

export default definePlugin(colHover, {buildIn: true});
