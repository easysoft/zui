import type {FileInfo} from './file-info';

export interface FileSelectorState {
    files: FileInfo[];
    renaming: string;
    newName?: string;
    inputKey: number;
}
