export interface FolderData {
    title: string;
    parentFolder?: FolderData;
    childFolderList: FolderData[];
    fileList: FileData[];
}

export interface FileData {
    title: string;
    parentFolder: FolderData;
}