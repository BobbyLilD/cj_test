import { useState } from "react";
import { FileItemButton, FileTitleTypography } from "./style";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import { FileData } from "../../../types";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { COLOR_TEXT_LIGHTGRAY } from "../../../utils/colors";

interface FileItemProps {
  id: number;
  getFileById: (id: number) => FileData | null;
  onDeleteClick: () => void;
}

const FileItem = ({ id, getFileById, onDeleteClick }: FileItemProps) => {
  const data = getFileById(id);

  return (
      <FileItemButton>
        <MovieCreationOutlinedIcon sx={{color:COLOR_TEXT_LIGHTGRAY}}/>
        <FileTitleTypography primary={data?.title}/>
        <IconButton disableRipple sx={{padding: 0}}>
            <DeleteIcon sx={{color: COLOR_TEXT_LIGHTGRAY}}/>
        </IconButton>
      </FileItemButton>
  );
};

export default FileItem;
