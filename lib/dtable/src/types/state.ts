export interface DTableState {
    scrollTop: number,
    scrollLeft: number,
    hiddenCols: Record<string, boolean>,
    [props: string]: unknown;
}
