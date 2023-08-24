import { FileData, FolderData } from "./types";

export const folderListDataMock: FolderData[] = [
  {
    id: 1,
    title: "root",
    childFolderIdList: [2],
    fileIdList: [],
    parentFolderId: null,
  },
  {
    id: 2,
    title: "FOLDER TITLE",
    childFolderIdList: [3],
    fileIdList: [1],
    parentFolderId: 1,
  },
  {
    id: 3,
    title: "FOLDER TITLE 2",
    childFolderIdList: [4],
    parentFolderId: 2,
    fileIdList: [],
  },
  {
    id: 4,
    title: "FOLDER TITLE 3",
    childFolderIdList: [5],
    parentFolderId: 3,
    fileIdList: [],
  },
  {
    id: 5,
    title: "FOLDER TITLE 4",
    childFolderIdList: [],
    parentFolderId: 4,
    fileIdList: [],
  },
];

export const fileListMock: FileData[] = [
  {
    id: 1,
    title: "File Title",
    parentFolderId: 2,
  },
];
