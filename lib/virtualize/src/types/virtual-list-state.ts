export type VirtualListState = {
    position?: string;
    totalSize: number;
    scroll: number;
    sizeMap: Record<string, number>;
};
