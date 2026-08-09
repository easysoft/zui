import {Component} from 'preact';
import {classes} from '@zui/core';
import {isCellVisible} from '../helpers/is-cell-visible';
import type {VirtualGridOptions} from '../types/virtual-grid-options';
import {GridCell} from './grid-cell';

export class VirtualGrid extends Component<VirtualGridOptions> {
    render() {
        const {width, height, cells, left, top, visibleBounding, onRenderCell, className, style, children, offsetX = 0, offsetY = 0, ...others} = this.props;
        const visibleCells = visibleBounding ? cells.filter(cell => isCellVisible(cell.bounding, visibleBounding, offsetX, offsetY)) : cells;

        return (
            <div className={classes('virtual-grid', className)} style={{position: 'relative', width, height, left, top, ...style}} {...others}>
                {
                    visibleCells.map(cell => (<GridCell key={cell.key} offsetX={offsetX} offsetY={offsetY} {...cell} onRender={cell.onRender ?? onRenderCell} />))
                }
                {children}
            </div>
        );
    }
}
