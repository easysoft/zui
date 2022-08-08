export interface DTableState {
    scrollTop: number,
    scrollLeft: number,
    hiddenRows: Record<string, boolean>,
    hiddenCols: Record<string, boolean>,
}
