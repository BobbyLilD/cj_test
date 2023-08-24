import React, { useState } from "react";
import { CssBaseline, List } from "@mui/material";
import { CatalogDrawer, PageContainer } from "./App.style";
import FolderItem from "./components/Catalog/FolderItem";
import { FileData, FolderData } from "./types";

const folderListDataMock: FolderData[] = [
  {
    id: 0,
    title: "root",
    childFolderIdList: [1],
    fileIdList: [],
  },
  {
    id: 1,
    title: "FOLDER TITLE",
    childFolderIdList: [2],
    fileIdList: [1],
    parentFolderId: 0,
  },
  {
    id: 2,
    title: "FOLDER TITLE 2",
    childFolderIdList: [3],
    parentFolderId: 1,
    fileIdList: [],
  },
  {
    id: 3,
    title: "FOLDER TITLE 3",
    childFolderIdList: [4],
    parentFolderId: 2,
    fileIdList: [],
  },
  {
    id: 4,
    title: "FOLDER TITLE 4",
    childFolderIdList: [],
    parentFolderId: 3,
    fileIdList: [],
  },
];

const fileListMock: FileData[] = [
  {
    id: 1,
    title: "File Title",
    parentFolderId: 1,
  },
];

function App() {
  const [activeFolderId, setActiveFolderID] = useState(0);
  const [folderList, setFolderList] = useState(folderListDataMock);
  const getFolderById = (id: number) => {
    if (id > 0 && id < folderList.length) return folderList[id];
    return null;
  };
  const [fileList, setFileList] = useState(fileListMock);
  const getFileById = (id: number) => {
    if (id > 0 && id <= fileList.length) return fileList[id - 1];
    return null;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <PageContainer>
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
                onDeleteClick={() => {}}
                onAddSequenceClick={() => {}}
              />
            ))}
          </List>
        </CatalogDrawer>
      </PageContainer>
    </React.Fragment>
  );
}

export default App;
