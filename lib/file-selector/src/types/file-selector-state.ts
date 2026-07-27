import type {FileInfo} from './file-info';

export interface FileSelectorState {
    files: FileInfo[];
    renaming: string;
    inputKey: number;
    newName?: string;
    dragging?: boolean;
    deletedFiles?: string[];
    renamedFiles?: Record<string, string>;
}
