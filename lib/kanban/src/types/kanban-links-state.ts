export type KanbanLinksState = {
    layout: Record<string, {left: number, top: number, bottom: number, right: number}>;
    scrollTop: number;
    scrollLeft: number;
};
