import {Component} from 'preact';
import {isCellVisible} from '../helpers/is-cell-visible';
import {VirtualGridOptions} from '../types/virtual-grid-options';
import {GridCell} from './grid-cell';

export class VirtualGrid extends Component<VirtualGridOptions> {
    render() {
        const {width, height, cells, left, top, visibleBounding, onRenderCell, style, children, offsetX = 0, offsetY = 0, ...others} = this.props;
        const visibleCells = visibleBounding ? cells.filter((cell) => isCellVisible(cell.bounding, visibleBounding, offsetX, offsetY)) : cells;

        return (
            <div style={{width, height, left, top, ...style}} {...others}>
                {
                    visibleCells.map((cell) => (<GridCell offsetX={offsetX} offsetY={offsetY} {...cell} />))
                }
                {children}
            </div>
        );
    }
}
