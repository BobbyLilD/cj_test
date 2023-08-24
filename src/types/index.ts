export interface FolderData {
    id: number;
    title: string;
    parentFolderId?: number;
    childFolderIdList: number[];
    fileIdList: number[];
}

export interface FileData {
    id: number;
    title: string;
    parentFolder: FolderData;
}