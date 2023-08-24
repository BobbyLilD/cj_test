import styled from "@emotion/styled";
import { Box, Button, IconButton, InputBase } from "@mui/material";
import {
  COLOR_GREY_NEUTRAL,
  COLOR_DARK_GREY,
  COLOR_DRAWER_BACKGROUND,
  COLOR_ORANGE_MAIN,
  COLOR_PLACEHOLDER,
  COLOR_TEXT_LIGHTGRAY,
  COLOR_DARKER_GREY,
} from "../../../utils/colors";
import { pxToRem } from "../../../utils/helpers";

export const FormContainer = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 580,
  borderRadius: "10px",
  border: `1px solid ${COLOR_GREY_NEUTRAL}`,
  background: COLOR_DRAWER_BACKGROUND,
  boxShadow: "0px 8px 40px 0px rgba(0, 0, 0, 0.30)",
  display: "flex",
  flexDirection: "column",
});

export const TitleInput = styled(InputBase)({
  padding: pxToRem(10),
  margin: `${pxToRem(8)} ${pxToRem(5)} ${pxToRem(24)} ${pxToRem(5)}`,
  fontFamily: "Inter",
  fontSize: pxToRem(22),
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  color: COLOR_TEXT_LIGHTGRAY,
  "::placeholder": {
    color: COLOR_PLACEHOLDER,
  },

  "& .MuiSvgIcon-root": {
    color: COLOR_DARK_GREY,
  },
});

export const SubmitButton = styled(Button)({
    alignSelf: 'end',
    margin: `${pxToRem(12)} ${pxToRem(13)}`,
    padding: `${pxToRem(6)} ${pxToRem(14)}`,
    gap: pxToRem(6),
    fontFamily: 'Inter',
    fontSize: pxToRem(16),
    fontStyle: 'normal',
    fontWeight: 600,
    textTransform: 'none',
    lineHeight: pxToRem(20),
    color: COLOR_GREY_NEUTRAL,
    background: COLOR_ORANGE_MAIN,
    ":hover":{
        background: `${COLOR_ORANGE_MAIN}AA`
    }
})

export const PathContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: pxToRem(6),
    margin: `${pxToRem(7)} ${pxToRem(11)} ${pxToRem(0)} ${pxToRem(11)}`,
    color: COLOR_TEXT_LIGHTGRAY,
    fontFamily: 'Inter',
    fontSize: pxToRem(14),
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
})

export const FolderTitle = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: pxToRem(12),
    padding: `${pxToRem(6)} ${pxToRem(20)}`,
    borderRadius: '5px',
    background: COLOR_DARKER_GREY
})

export const CloseButton = styled(IconButton)({
    position: 'absolute',
    top: pxToRem(11),
    right: pxToRem(13),
    padding: 0,
    color: COLOR_TEXT_LIGHTGRAY
})