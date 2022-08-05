import {Component, createRef} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import {DTableLayout} from './types/layout';
import {DTableOptions} from './types/options';
import {ColInfo} from './types/col-info';
import {RowInfo} from './types/row-info';
import {Header} from './components/header';
import {Rows} from './components/rows';
import {Footer} from './components/footer';

export type DTableProps = DTableOptions;

export interface DTableState {
    scrollTop: number,
    scrollLeft: number,
    hiddenRows: Record<string, boolean>,
    hiddenCols: Record<string, boolean>,
}

export class DTable extends Component<DTableProps, DTableState> {
    state: DTableState  = {scrollTop: 0, scrollLeft: 0, hiddenRows: {}, hiddenCols: {}};

    ref = createRef();

    private needUpdateSize = false;

    componentDidMount() {
        if (this.needUpdateSize) {
            this.needUpdateSize = false;
            this.forceUpdate();
        }
    }

    scrollLeft(scrollLeft: number) {
        this.setState({scrollLeft});
    }

    scrollTop(scrollTop: number) {
        this.setState({scrollTop});
    }

    getLayout(): DTableLayout | undefined {
        const options = {...getDefaultOptions(), ...this.props};
        const {
            data,
            header,
            footer,
            rowHeight,
            defaultColWidth,
            minColWidth,
            maxColWidth,
            rowDataMap,
        } = options;
        const {scrollTop = 0, scrollLeft = 0, hiddenRows = {}, hiddenCols = {}} = this.state;
        const headerHeight = header ? (options.headerHeight || rowHeight) : 0;
        const footerHeight = footer ? (options.footerHeight || rowHeight) : 0;

        const limitSize = (size: number, min: number, max: number): number => {
            if (size) {
                if (min) {
                    size = Math.max(min, size);
                }
                if (max) {
                    size = Math.min(max, size);
                }
            }
            return size;
        };

        const fixedLeftCols: ColInfo[] = [];
        const fixedRightCols: ColInfo[] = [];
        const scrollCols: ColInfo[] = [];
        let flexLeftWidth = 0;
        let flexRightWidth = 0;
        options.cols.forEach((col) => {
            if (col.hidden || hiddenCols[col.name]) {
                return;
            }
            const {minWidth = minColWidth, maxWidth = maxColWidth} = col;
            const realWidth = limitSize(col.width ?? 0, minWidth, maxWidth);
            const flex = col.flex ?? 1;
            const flexWidth = flex * limitSize(defaultColWidth, minWidth, maxWidth);
            const colInfo: ColInfo = {
                ...col,
                left: 0,
                flex,
                realWidth,
                flexWidth,
                visible: true,
            };
            if (colInfo.fixed === 'left') {
                colInfo.left = flexLeftWidth;
                flexLeftWidth += realWidth;
                fixedLeftCols.push(colInfo);
            } else if (colInfo.fixed === 'right') {
                colInfo.left = flexRightWidth;
                flexRightWidth += realWidth;
                fixedRightCols.push(colInfo);
            } else {
                scrollCols.push(colInfo);
            }
        });

        let widthSetting = options.width;
        let width = 0;
        if (typeof widthSetting === 'function') {
            widthSetting = widthSetting();
        }
        if (widthSetting === 'auto') {
            width = flexLeftWidth + flexRightWidth;
            scrollCols.forEach(col => {
                if (!col.realWidth) {
                    col.realWidth = col.flexWidth;
                }
                width += col.realWidth;
            });
        } else if (widthSetting === '100%') {
            const parentElement = this.ref.current?.parentElement;
            if (parentElement) {
                width = parentElement.clientWidth;
            } else {
                width = 0;
                this.needUpdateSize = true;
                return;
            }
        } else {
            width = widthSetting;
        }

        let rowsHeightTotal = 0;
        const hiddenProp = rowDataMap?.$hidden ?? '$hidden';
        const rows = data.reduce<RowInfo[]>((list, item) => {
            if (!item[hiddenProp] && !hiddenRows[item.id]) {
                list.push({data: item, top: rowsHeightTotal});
                rowsHeightTotal += rowHeight;
            }
            return list;
        }, []);

        let heightSetting = options.height;
        let height = 0;
        if (typeof heightSetting === 'function') {
            heightSetting = heightSetting();
        }
        if (heightSetting === 'auto') {
            height = headerHeight + footerHeight + rowsHeightTotal;
        } else if (typeof heightSetting === 'object') {
            height = Math.min(heightSetting.max, Math.max(heightSetting.min, headerHeight + footerHeight + rowsHeightTotal));
        } else if (heightSetting === '100%') {
            const parentElement = this.ref.current?.parentElement;
            if (parentElement) {
                height = (parentElement as HTMLElement).clientHeight;
            } else {
                height = 0;
                this.needUpdateSize = true;
                return;
            }
        } else {
            height = heightSetting;
        }

        const rowsHeight = height - headerHeight - footerHeight;
        const scrollBottom = scrollTop + rowsHeight;
        const visibleRows: RowInfo[] = [];

        const scrollWidth = width - flexLeftWidth - flexRightWidth;
        let scrollWidthTotal = 0;
        const flexCols: ColInfo[] = [];
        let flexSum = 0;
        scrollCols.forEach((col) => {
            if (col.realWidth) {
                scrollWidthTotal += col.realWidth;
            } else {
                flexCols.push(col);
                flexSum += col.flex;
            }
        });
        if (flexCols.length) {
            const minFlexWidth = Math.max(0, scrollWidth - scrollWidthTotal);
            flexCols.forEach(col => {
                const {minWidth = minColWidth, maxWidth = maxColWidth} = col;
                col.realWidth = Math.min(maxWidth, Math.max(minWidth, Math.ceil(minFlexWidth * (col.flex ?? 1) / flexSum)));
                scrollWidthTotal += col.realWidth;
            });
        }
        scrollWidthTotal = 0;
        scrollCols.forEach(col => {
            col.left += scrollWidthTotal;
            scrollWidthTotal += col.realWidth;
            if ((col.left + col.realWidth) < scrollLeft || col.left > (scrollLeft + scrollWidth)) {
                col.visible = false;
            }
        });

        const startRowIndex = Math.floor(scrollTop / rowHeight);
        const endRowIndex = Math.min(rows.length, Math.ceil(scrollBottom / rowHeight));
        for (let i = startRowIndex; i < endRowIndex; i++) {
            const row = data[i];
            const rowTop = i * rowHeight;
            visibleRows.push({top: rowTop - scrollTop, data: row});
        }

        return {
            width,
            height,
            rows,
            visibleRows,
            rowHeight,
            rowsHeight,
            rowsHeightTotal,
            header,
            footer,
            headerHeight,
            footerHeight,
            colsInfo: {
                fixedLeftCols,
                fixedRightCols,
                scrollCols,
                flexLeftWidth,
                scrollWidth,
                flexRightWidth,
            },
            scrollWidthTotal,
            scrollBottom,
            scrollTop,
            scrollLeft,
            startRowIndex,
            endRowIndex,
        };
    }

    renderHeader(layout: DTableLayout) {
        const {header, colsInfo,  headerHeight} = layout;
        if (!header) {
            return null;
        }
        if (header === true) {
            return (
                <Header
                    scrollLeft={this.state.scrollLeft}
                    height={headerHeight}
                    {...colsInfo}
                />
            );
        }
        return (
            <div className='dtable-header' style={{height: headerHeight}}>
                {header}
            </div>
        );
    }

    renderRows(layout: DTableLayout) {
        const {headerHeight, rowsHeight, visibleRows, rowHeight, colsInfo} = layout;
        return (
            <Rows
                top={headerHeight}
                height={rowsHeight}
                rows={visibleRows}
                rowHeight={rowHeight}
                scrollLeft={this.state.scrollLeft}
                {...colsInfo}
            />
        );
    }

    renderFooter(layout: DTableLayout) {
        const {footer, footerHeight} = layout;
        if (!footer) {
            return null;
        }
        if (footer === true) {
            return (
                <Footer
                    height={footerHeight}
                />
            );
        }
        return footer;
    }

    render() {
        const layout = this.getLayout();
        const {needUpdateSize} = this;

        console.log('DTable.render', {layout, that: this, needUpdateSize});

        const {className, rowHover, colHover, cellHover, bordered, striped} = this.props;
        const style = {width: layout?.width, height: layout?.height};
        return (
            <div
                className={classes('dtable', className, {
                    '-hover-row': rowHover,
                    '-hover-col': colHover,
                    '-hover-cell': cellHover,
                    '-bordered': bordered,
                    '-striped': striped,
                })}
                style={style}
                ref={this.ref}
            >
                {layout && this.renderHeader(layout)}
                {layout && this.renderRows(layout)}
                {layout && this.renderFooter(layout)}
            </div>
        );
    }
}

export function getDefaultOptions(): Required<DTableOptions> {
    return {
        cols: [],
        className: '',
        width: '100%',
        height: 'auto',
        rowHeight: 35,
        rowDataMap: {},
        data: [],
        defaultColWidth: 80,
        minColWidth: 20,
        maxColWidth: 1000,
        header: true,
        footer: false,
        headerHeight: 0,
        footerHeight: 0,
        scrollbarWidth: 10,
        rowHover: true,
        colHover: true,
        cellHover: false,
        bordered: false,
        striped: true,
        responsive: false,
    };
}
