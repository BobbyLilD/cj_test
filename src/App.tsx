import React, { useState } from "react";
import { CssBaseline, List } from "@mui/material";
import { CatalogDrawer, PageContainer } from "./App.style";
import FolderItem from "./components/Catalog/FolderItem";
import { FileData, FolderData, ItemType } from "./types";
import AddItemModal from "./components/Forms/AddItem";
import DeleteItemModal from "./components/Forms/DeleteItem";
import { fileListMock, folderListDataMock } from "./App.test";
import { idGenerator } from "./utils/helpers";

function App() {
  const folderIdGenerator = idGenerator(6);
  const fileIdGenerator = idGenerator(2);
  const [activeFolderId, setActiveFolderID] = useState(0);
  const [folderList, setFolderList] = useState(folderListDataMock);
  const getFolderById = (id: number) => {
    const item = folderList.find((v) => v.id == id);
    if (item) return item;
    return null;
  };
  const [fileList, setFileList] = useState(fileListMock);
  const getFileById = (id: number) => {
    const item = fileList.find((v) => v.id == id);
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
    const newFileId = fileIdGenerator.next().value;
    const newFile: FileData = {
      id: newFileId!,
      title: title,
      parentFolderId: activeFolderId,
    };
    const parentFolderIdx = folderList.findIndex((v) => v.id == activeFolderId);
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
    const newFileId = folderIdGenerator.next().value;
    const newFolder: FolderData = {
      id: newFileId!,
      title: title,
      parentFolderId: activeFolderId,
      childFolderIdList: [],
      fileIdList: [],
    };
    const parentFolderIdx = folderList.findIndex((v) => v.id == activeFolderId);
    if (parentFolderIdx) {
      const parentFolder = folderList[parentFolderIdx]
      parentFolder.childFolderIdList.push(newFileId!);
      setFolderList([
        ...folderList.slice(0, parentFolderIdx),
        parentFolder,
        ...folderList.slice(parentFolderIdx + 1),
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
      path.push(fileList[deleteItemId - 1].title);
      parentFolderId = fileList[deleteItemId - 1].parentFolderId;
    }
    if (deleteItemType === ItemType.FOLDER) {
      path.push(folderList[deleteItemId].title);
      if (folderList[deleteItemId].parentFolderId) {
        parentFolderId = folderList[deleteItemId].parentFolderId!;
      }
    }
    if (!parentFolderId) return path;
    while (parentFolderId != null && parentFolderId != 0) {
      path.push(folderList[parentFolderId].title);
      parentFolderId = folderList[parentFolderId].parentFolderId;
    }
    return path;
  };
  const deleteItem = () => {
    if (deleteItemType === ItemType.FILE) {
      const parentFolder = folderList[fileList[deleteItemId].parentFolderId];
      parentFolder.childFolderIdList = parentFolder.childFolderIdList.filter(
        (v) => v != deleteItemId
      );
      setFolderList([
        ...folderList.slice(0, parentFolder.id),
        parentFolder,
        ...folderList.slice(parentFolder.id + 1),
      ]);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <PageContainer>
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
          onSubmit={() => {}}
        />
        <CatalogDrawer open variant="permanent" anchor="left">
          <List sx={{ width: "100%" }}>
            {folderList[0].childFolderIdList.map((v) => (
              <FolderItem
                key={v}
                id={v}
                getFolderById={getFolderById}
                getFileById={getFileById}
                activeFolderId={activeFolderId}
                onClick={(id: number) => setActiveFolderID(id)}
                onDeleteClick={onDeleteClick}
                onAddItemClick={onNewItemClick}
              />
            ))}
          </List>
        </CatalogDrawer>
      </PageContainer>
    </React.Fragment>
  );
}

export default App;
