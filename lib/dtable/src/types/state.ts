export interface DTableState {
    scrollTop: number,
    scrollLeft: number,
    hoverCol?: string,
    [props: string]: unknown;
}
