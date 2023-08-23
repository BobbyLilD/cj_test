import React from "react";
import { CssBaseline, List } from "@mui/material";
import { CatalogDrawer, PageContainer } from "./App.style";
import FolderItem from "./components/Catalog/FolderItem";
import { FolderData } from "./types";

const folderDataMock: FolderData = {
  title: "FOLDER TITLE",
  childFolderList: [],
  fileList: [],
};

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <PageContainer>
        <CatalogDrawer open variant="permanent" anchor="left">
          <List sx={{width: '100%'}}>
            <FolderItem data={folderDataMock} />
          </List>
        </CatalogDrawer>
      </PageContainer>
    </React.Fragment>
  );
}

export default App;
