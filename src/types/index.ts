export interface FolderData {
    id: number;
    title: string;
    parentFolderId: number | null;
    childFolderIdList: number[];
    fileIdList: number[];
}

export interface FileData {
    id: number;
    title: string;
    parentFolderId: number;
}

export enum ItemType {
    FOLDER,
    FILE
}