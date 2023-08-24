import React, { useState } from "react";
import { CssBaseline, List } from "@mui/material";
import { CatalogDrawer, PageContainer } from "./App.style";
import FolderItem from "./components/Catalog/FolderItem";
import { FolderData } from "./types";

const folderListDataMock: FolderData[] = [
  {
    id: 1,
    title: "FOLDER TITLE",
    childFolderIdList: [2],
    fileIdList: [],
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

function App() {
  const [activeFolderId, setActiveFolderID] = useState(0);
  const [folderList, setFolderList] = useState(folderListDataMock);
  const getFolderById = (id: number) => {
    if (id > 0 && id <= folderList.length) return folderList[id - 1];
    return null;
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <PageContainer>
        <CatalogDrawer open variant="permanent" anchor="left">
          <List sx={{ width: "100%" }}>
            {folderList
              .filter((v) => !v.parentFolderId)
              .map((v) => (
                <FolderItem
                  key={v.id}
                  id={v.id}
                  getFolderById={getFolderById}
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
