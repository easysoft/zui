export type FileInfo = {
    id: number;
    title: string;
    extension: string;
    size: number;
    pathname: string;
    addedBy: string;
    addedDate: string;
    downloads?: number;
    deleted?: boolean;
};
