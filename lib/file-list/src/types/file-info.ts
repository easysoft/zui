export type FileInfo = {
    /**
     * The unique identifier of the file.
     * If empty, the file will be treated as a new file and generated an unique id automatically.
     */
    id?: number | string;
    title: string;
    extension: string;
    size: number;
    pathname: string;
    addedBy: string;
    addedDate: string;
    downloads?: number;
    deleted?: boolean;
};

/**
 * The file information from the origin file.
 */
export type OriginFileInfo = Partial<FileInfo> & {
    file: File;
};
