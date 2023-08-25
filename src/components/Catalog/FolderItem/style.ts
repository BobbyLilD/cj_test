import styled from "@emotion/styled";
import {
  Box,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { pxToRem } from "../../../utils/helpers";
import {
  COLOR_GREY_FOCUS,
  COLOR_MENU_BACKGROUND,
  COLOR_ORANGE,
  COLOR_TEXT_LIGHTGRAY,
} from "../../../utils/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { default as Folder } from "@mui/icons-material/Folder";

export const FolderTitleTypography = styled(ListItemText)({
  margin: 0,
  "& .MuiTypography-root": {
    fontFamily: "Inter",
    fontSize: pxToRem(16),
    fontWeight: 400,
    lineHeight: pxToRem(19),
    letterSpacing: "0em",
    textAlign: "left",
    color: COLOR_TEXT_LIGHTGRAY,
    maxWidth: 160,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

export const FolderItemButton = styled(ListItemButton)({
  width: 340,
  padding: `${pxToRem(8)} ${pxToRem(11)} ${pxToRem(8)} ${pxToRem(10)}`,
  gap: pxToRem(6),
  borderRadius: "3px",
  "& .MuiIconButton-root": {
    opacity: 0,
    transition: "opacity linear 0.1s",
  },
  ":hover": {
    "& .MuiIconButton-root": {
      opacity: 1,
    },
  },
});

export const ExpandIcon = styled(ExpandMoreIcon)({
  color: COLOR_TEXT_LIGHTGRAY,
  transition: "all linear 0.1s",
});

export const FolderIcon = styled(Folder)({
  color: COLOR_TEXT_LIGHTGRAY,
});

export const ItemActiveSX = {
  background: COLOR_GREY_FOCUS,
  ":before": {
    content: "''",
    width: 3,
    height: 20,
    background: COLOR_ORANGE,
    borderRadius: "3px",
    position: "absolute",
    left: 0,
  },
  ":hover": {
    background: `${COLOR_GREY_FOCUS}A0`,
  },
};

export const RightButtonContainer = styled(Box)({
  display: "flex",
  gap: pxToRem(20),
});

export const AddMenu = styled(Menu)({
  transform: "translate(-10.125rem, 0.125rem)",
  "& .MuiMenu-paper": {
    background: COLOR_MENU_BACKGROUND,
    boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.10)",
  },
  "& .MuiMenu-list": {
    padding: `${pxToRem(10)} ${pxToRem(12)}`,
    borderRadius: "3px",
    display: "inline-flex",
    flexDirection: "column",
    gap: pxToRem(8),
  },
});

export const AddMenuItem = styled(MenuItem)({
  display: "flex",
  gap: pxToRem(8),
  color: COLOR_TEXT_LIGHTGRAY,
  padding: 0,
  fontFamily: "Inter",
  fontSize: pxToRem(16),
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
});
