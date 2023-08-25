import React from "react";
import { CssBaseline } from "@mui/material";
import { CatalogDrawer, PageContainer } from "./App.style";
import Catalog from "./components/Catalog";

function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <PageContainer>
        <CatalogDrawer open variant="permanent" anchor="left">
          <Catalog/>
        </CatalogDrawer>
      </PageContainer>
    </React.Fragment>
  );
}

export default App;
