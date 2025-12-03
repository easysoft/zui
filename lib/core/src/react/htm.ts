import htm from 'htm';
import vhtml from 'vhtml';
import {h} from './preact';

const jsx = htm.bind(h);
const html = htm.bind(vhtml);

export {
    htm,
    html,
    jsx,
    vhtml,
};
