import type {FileSize} from './file-size';

export type StaticFileInfo = {
    name: string;
    size: FileSize;
    type?: string;
    id?: string;
    url?: string;
};
