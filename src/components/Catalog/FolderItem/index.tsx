import { Collapse, IconButton, List } from "@mui/material";
import { FileData, FolderData, ItemType } from "../../../types";
import {
  ExpandIcon,
  FolderItemButton,
  FolderTitleTypography,
  FolderIcon,
  ItemActiveSX,
  RightButtonContainer,
  AddMenu,
  AddMenuItem,
} from "./style";
import { useRef, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import { COLOR_TEXT_LIGHTGRAY } from "../../../utils/colors";
import { pxToRem } from "../../../utils/helpers";
import FileItem from "../FileItem";

interface FolderItemProps {
  id: number;
  getFolderById: (id: number) => FolderData | null;
  getFileById: (id: number) => FileData | null;
  onClick: (id: number) => void;
  onAddItemClick: (type: ItemType) => void;
  onDeleteClick: (id: number, type: ItemType) => void;
}

const FolderItem = ({
  id,
  getFolderById,
  getFileById,
  onClick,
  onAddItemClick,
  onDeleteClick,
}: FolderItemProps) => {
  const data = getFolderById(id);

  const [openSubList, setOpenSubList] = useState(false);
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const onFolderClick = () => {
    setOpenSubList(!openSubList);
    onClick(id);
  };
  const onAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (openSubList) {
      e.stopPropagation();
      onClick(id);
    }
    setAddMenuOpen(!addMenuOpen);
  };
  const handleAddMenuClose = (e: any) => {
    setAddMenuOpen(false);
  };
  const onDeleteFolderClick = () => {
    onDeleteClick(id, ItemType.FOLDER);
  };

  return (
    <>
      <FolderItemButton
        onClick={onFolderClick}
        sx={openSubList ? ItemActiveSX : {}}
        ref={anchorRef}
      >
        <ExpandIcon
          sx={{ transform: !openSubList ? "rotate(-90deg)" : null }}
        />
        <FolderIcon />
        <FolderTitleTypography primary={data?.title} />
        <RightButtonContainer>
          <IconButton disableRipple sx={{ padding: 0 }} onClick={onAddClick}>
            <AddBoxIcon sx={{ color: COLOR_TEXT_LIGHTGRAY }} />
          </IconButton>
          <IconButton
            disableRipple
            sx={{ padding: 0 }}
            onClick={onDeleteFolderClick}
          >
            <DeleteIcon sx={{ color: COLOR_TEXT_LIGHTGRAY }} />
          </IconButton>
        </RightButtonContainer>
      </FolderItemButton>
      <Collapse in={openSubList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ paddingLeft: pxToRem(19) }}>
          {data &&
            data.childFolderIdList.map((v) => (
              <FolderItem
                key={`folder-${v}`}
                id={v}
                getFileById={getFileById}
                getFolderById={getFolderById}
                onAddItemClick={onAddItemClick}
                onDeleteClick={onDeleteClick}
                onClick={onClick}
              />
            ))}
          {data &&
            data.fileIdList.map((v) => (
              <FileItem
                key={`file-${v}`}
                id={v}
                getFileById={getFileById}
                onDeleteClick={onDeleteClick}
              />
            ))}
        </List>
      </Collapse>
      <AddMenu
        open={addMenuOpen}
        anchorEl={anchorRef.current}
        onClose={handleAddMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <AddMenuItem onClick={() => onAddItemClick(ItemType.FOLDER)}>
          <FolderIcon />
          Add Folder
        </AddMenuItem>
        <AddMenuItem onClick={() => onAddItemClick(ItemType.FILE)}>
          <MovieCreationOutlinedIcon />
          Add Sequence
        </AddMenuItem>
      </AddMenu>
    </>
  );
};

export default FolderItem;
