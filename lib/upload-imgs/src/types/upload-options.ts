export type UploadOptions = {
    name: string;
} & Partial<{
    icon: string;
    showIcon: boolean;
    multiple: boolean;
    listPosition: 'bottom' | 'top';
    renameBtn: boolean;
    deleteBtn: boolean;
    uploadText: string;
    renameText: string;
    deleteText: string;
    confirmText: string;
    cancelText: string;
    tip: string;
    btnClass: string;
    onChange: (files: File[]) => void;
    onDelete: (file: File) => void;
    onRename: (newName: string, oldName: string) => void;
    draggable: boolean;
    limitCount: number;
    accept: string;
    defaultFileList: File[];
    limitSize: `${number}${'B' | 'KB' | 'MB' | 'GB'}` | false;
    duplicatedHint: string;
    exceededSizeHint: string;
    exceededCountHint: string;
}>;
