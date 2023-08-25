import { List } from "@mui/material";
import React, { useMemo, useState } from "react";
import {
  folderListDataMock,
  fileListMock,
} from "../../App.test";
import { ItemType, FileData, FolderData } from "../../types";
import FolderItem from "./FolderItem";
import AddItemModal from "./Forms/AddItem";
import DeleteItemModal from "./Forms/DeleteItem";

const Catalog = () => {
  const [activeFolderId, setActiveFolderID] = useState(0);
  const onActiveFolderChange = (id: number) => {
    setActiveFolderID(id);
  };
  const [folderList, setFolderList] = useState(folderListDataMock);
  const getFolderById = (id: number) => {
    const item = folderList.find((v) => v.id === id);
    if (item) return item;
    return null;
  };
  const [fileList, setFileList] = useState(fileListMock);
  const getFileById = (id: number) => {
    const item = fileList.find((v) => v.id === id);
    if (item) return item;
    return null;
  };

  const [newItemModalOpen, setNewItemModalOpen] = useState(false);
  const [newItemType, setNewItemType] = useState(ItemType.FILE);
  const changeNewItemModalOpen = () => {
    setNewItemModalOpen(!newItemModalOpen);
  };
  const onNewItemClick = (type: ItemType) => {
    setNewItemType(type);
    changeNewItemModalOpen();
  };
  const addNewFile = (title: string) => {
    const newFileId = Date.now();
    const newFile: FileData = {
      id: newFileId!,
      title: title,
      parentFolderId: activeFolderId,
    };
    const parentFolderIdx = folderList.findIndex(
      (v) => v.id === activeFolderId
    );
    if (parentFolderIdx) {
      const parentFolder = folderList[parentFolderIdx];
      parentFolder.fileIdList.push(newFileId!);
      setFileList([...fileList, newFile]);
      setFolderList([
        ...folderList.slice(0, parentFolderIdx),
        parentFolder,
        ...folderList.slice(parentFolderIdx + 1),
      ]);
    }
  };

  const addNewFolder = (title: string) => {
    const newFolderId = Date.now();
    const newFolder: FolderData = {
      id: newFolderId!,
      title: title,
      parentFolderId: activeFolderId,
      childFolderIdList: [],
      fileIdList: [],
    };
    const parentFolderIdx = folderList.findIndex(
      (v) => v.id === activeFolderId
    );
    if (parentFolderIdx) {
      const parentFolder = folderList[parentFolderIdx];
      parentFolder.childFolderIdList.push(newFolderId!);
      setFolderList([
        ...folderList.filter((v) => v.id !== parentFolder.id),
        parentFolder,
        newFolder,
      ]);
    }
  };

  const [deleteItemModalOpen, setDeleteItemModalOpen] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState<number>(0);
  const [deleteItemType, setDeleteItemType] = useState(ItemType.FOLDER);
  const changeDeleteItemModalOpen = () => {
    setDeleteItemModalOpen(!deleteItemModalOpen);
  };
  const onDeleteClick = (id: number, type: ItemType) => {
    setDeleteItemId(id);
    setDeleteItemType(type);
    changeDeleteItemModalOpen();
  };
  const getItemPath = () => {
    let parentFolderId: number | null = null;
    let path: string[] = [];
    if (deleteItemType === ItemType.FILE) {
      const file = fileList.find((v) => v.id === deleteItemId);
      if (file) {
        path.push(file.title);
        parentFolderId = file.parentFolderId;
      }
    }
    if (deleteItemType === ItemType.FOLDER) {
      const folder = folderList.find((v) => v.id === deleteItemId);
      if (folder) {
        path.push(folder.title);
        if (folder.parentFolderId) {
          parentFolderId = folder.parentFolderId!;
        }
      }
    }
    if (!parentFolderId) return path;
    while (parentFolderId !== null && parentFolderId !== 1) {
      const parentFolder = folderList.find((v) => v.id === parentFolderId);
      if (parentFolder) {
        path.push(parentFolder.title);
        parentFolderId = parentFolder.parentFolderId;
      }
    }
    return path;
  };

  const deleteItem = () => {
    if (deleteItemType === ItemType.FILE) {
      const file = fileList.find((v) => v.id === deleteItemId);
      if (file) {
        const parentFolder = folderList.find(
          (v) => v.id === file.parentFolderId
        );
        if (parentFolder) {
          parentFolder.fileIdList = parentFolder.fileIdList.filter(
            (v) => v !== deleteItemId
          );
          setFolderList([
            ...folderList.filter((v) => v.id !== parentFolder.id),
            parentFolder,
          ]);
          setFileList([...fileList.filter((v) => v.id !== deleteItemId)]);
        }
      }
    } else {
      const folder = folderList.find((v) => v.id === deleteItemId);
      if (folder) {
        const parentFolder = folderList.find(
          (v) => v.id === folder.parentFolderId
        );
        if (parentFolder) {
          parentFolder.childFolderIdList =
            parentFolder.childFolderIdList.filter((v) => v !== deleteItemId);
          const deepClean = cleanUp(folder);
          setFolderList([
            ...folderList.filter(
              (v) =>
                !deepClean[0].includes(v.id) &&
                v.id !== parentFolder.id &&
                v.id !== folder.id
            ),
            parentFolder,
          ]);
          setFileList([
            ...fileList.filter((v) => !deepClean[1].includes(v.id)),
          ]);
        }
      }
    }
  };

  const cleanUp = (folder: FolderData): [number[], number[]] => {
    let folderIdList: number[] = [];
    let fileIdList: number[] = [];
    fileIdList.push(...folder.fileIdList);
    for (let id of folder.childFolderIdList) {
      folderIdList.push(id);
      const childFolder = folderList.find((v) => v.id === id);
      if (childFolder) {
        const deepClean = cleanUp(childFolder);
        folderIdList.push(...deepClean[0]);
        fileIdList.push(...deepClean[1]);
      }
    }
    return [folderIdList, fileIdList];
  };

  const rows = useMemo(() => {
    return folderList[0].childFolderIdList.map((v) => (
        <FolderItem
          key={v}
          id={v}
          getFolderById={getFolderById}
          getFileById={getFileById}
          onClick={onActiveFolderChange}
          onDeleteClick={onDeleteClick}
          onAddItemClick={onNewItemClick}
        />
      ))
  }, [folderList])

  return (
    <React.Fragment>
      <AddItemModal
        folderId={activeFolderId}
        getFolderById={getFolderById}
        modalOpen={newItemModalOpen}
        changeModalOpen={changeNewItemModalOpen}
        newItemType={newItemType}
        onSubmit={(value) =>
          newItemType === ItemType.FILE
            ? addNewFile(value)
            : addNewFolder(value)
        }
      />
      <DeleteItemModal
        modalOpen={deleteItemModalOpen}
        changeModalOpen={changeDeleteItemModalOpen}
        itemId={deleteItemId}
        deleteItemType={deleteItemType}
        getItemPath={getItemPath}
        onDelete={deleteItem}
      />
      <List sx={{ width: "100%" }}>
        {rows}
      </List>
    </React.Fragment>
  );
};

export default Catalog;
