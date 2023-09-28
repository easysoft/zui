export interface KanbanLinkEditorState {
    from?: string;
    fromRect?: {left: number, top: number, width: number, height: number};
    to?: string;
    toRect?: {left: number, top: number, width: number, height: number};
    dragPos?: {left: number, top: number};
}
