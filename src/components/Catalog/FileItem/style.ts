import styled from "@emotion/styled";
import { ListItemButton, ListItemText } from "@mui/material";
import { pxToRem } from "../../../utils/helpers";
import { COLOR_TEXT_LIGHTGRAY } from "../../../utils/colors";

export const FileItemButton = styled(ListItemButton)({
  width: 340,
  padding: `${pxToRem(8)} ${pxToRem(11)} ${pxToRem(8)} ${pxToRem(40)}`,
  gap: pxToRem(6),
  alignItems: "center",
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

export const FileTitleTypography = styled(ListItemText)({
  margin: 0,
  "& .MuiTypography-root": {
    fontFamily: "Inter",
    fontSize: pxToRem(16),
    fontWeight: 400,
    lineHeight: pxToRem(19),
    letterSpacing: "0em",
    textAlign: "left",
    color: COLOR_TEXT_LIGHTGRAY,
  },
});
