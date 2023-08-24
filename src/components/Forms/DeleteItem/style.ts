import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import { COLOR_GREY_NEUTRAL, COLOR_DRAWER_BACKGROUND, COLOR_TEXT_LIGHTGRAY, COLOR_RED_MAIN, COLOR_RED_DARK } from "../../../utils/colors";
import { pxToRem } from "../../../utils/helpers";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

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
    alignItems: 'center',
    padding: pxToRem(12)
  });

export const DeleteIcon = styled(DeleteForeverIcon)({
    marginTop: pxToRem(32),
    marginBottom: pxToRem(41),
    color: COLOR_RED_MAIN,
    width: 70,
    height: 70
})

export const ItemPath = styled(Typography)({
    fontFamily: 'Inter',
    fontSize: pxToRem(16),
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: pxToRem(20),
    color: COLOR_TEXT_LIGHTGRAY,
    textAlign: 'center'
})

export const ModalMessage = styled(Typography)({
    fontFamily: 'Inter',
    fontSize: pxToRem(16),
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: pxToRem(20),
    color: COLOR_TEXT_LIGHTGRAY,
    textAlign: 'center'
})

export const ButtonContainer = styled(Box)({
    display: 'flex',
    width: '100%',
    gap: pxToRem(4),
    marginTop: pxToRem(41),
})

export const CancelButton = styled(Button)({
    flex: 1,
    padding: `${pxToRem(6)} ${pxToRem(14)}`,
    borderRadius: '5px',
    background: COLOR_GREY_NEUTRAL,
    fontFamily: 'Inter',
    fontSize: pxToRem(16),
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: pxToRem(20),
    textTransform: 'none',
    color: COLOR_TEXT_LIGHTGRAY,
})

export const DeleteButton = styled(Button)({
    flex: 1,
    padding: `${pxToRem(6)} ${pxToRem(14)}`,
    borderRadius: '5px',
    background: COLOR_RED_DARK,
    fontFamily: 'Inter',
    fontSize: pxToRem(16),
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: pxToRem(20),
    textTransform: 'none',
    color: COLOR_RED_MAIN,
})