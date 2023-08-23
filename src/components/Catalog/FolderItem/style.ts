import styled from "@emotion/styled";
import { ListItemButton, ListItemText } from "@mui/material";
import { pxToRem } from "../../../utils/helpers";
import {
  COLOR_GREY_FOCUS,
  COLOR_ORANGE,
  COLOR_TEXT_LIGHTGRAY,
} from "../../../utils/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { default as Folder } from "@mui/icons-material/Folder";

export const FolderTitleTypography = styled(ListItemText)({
  margin: 0,
  "& .MuiTypography-root": {
    fontFamily: "Inter",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "19px",
    letterSpacing: "0em",
    textAlign: "left",
    color: COLOR_TEXT_LIGHTGRAY,
  },
});

export const FolderItemButton = styled(ListItemButton)({
  padding: `${pxToRem(8)} ${pxToRem(11)} ${pxToRem(8)} ${pxToRem(10)}`,
  gap: pxToRem(6),
  borderRadius: '3px'
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
    background: `${COLOR_GREY_FOCUS}A0`
  },
};
