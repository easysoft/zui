export type FileInfo = {
    /**
     * The unique identifier of the file.
     * If empty, the file will be treated as a new file and generated an unique id automatically.
     */
    id?: number | string;
    title: string;
    /** Defaults to the native file name's extension, or the title's extension, in lowercase. */
    extension?: string;
    size: number;
    pathname: string;
    /** Cover image URL, also supported for files without a native File object. */
    thumbnail?: string;
    addedBy: string;
    addedDate: string;
    downloads?: number;
    deleted?: boolean;
    file?: File;
    /** One tag or an array of tags. Strings are not split; blank tags are ignored. */
    tags?: string | string[];
};

/**
 * The file information from the origin file.
 */
export type OriginFileInfo = Partial<FileInfo> & {
    file: File;
};
