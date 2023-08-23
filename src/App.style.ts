import styled from "@emotion/styled";
import { Box, Drawer } from "@mui/material";
import { COLOR_APP_BACKGROUND, COLOR_DRAWER_BACKGROUND } from "./utils/colors";
import { pxToRem } from "./utils/helpers";

export const PageContainer = styled(Box)({
  height: "100dvh",
  width: "100dvw",
  display: "flex",
  alignItems: "stretch",
  background: COLOR_APP_BACKGROUND,
});

export const CatalogDrawer = styled(Drawer)({
  width: 380,
  "& .MuiDrawer-paper": {
    width: 380,
    boxSizing: "border-box",
    background: COLOR_DRAWER_BACKGROUND,
    padding: `${pxToRem(10)} ${pxToRem(12)}`
  },
});
