export interface KanbanLinkEditorState {
    from?: string;
    fromKanban?: string;
    fromRect?: {left: number, top: number, width: number, height: number};
    to?: string;
    toKanban?: string;
    toRect?: {left: number, top: number, width: number, height: number};
    dragPos?: {left: number, top: number};
}
