import { Collapse, IconButton, List } from "@mui/material";
import { FolderData } from "../../../types";
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
import { useEffect, useRef, useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import { COLOR_TEXT_LIGHTGRAY } from "../../../utils/colors";
import { pxToRem } from "../../../utils/helpers";

interface FolderItemProps {
  id: number;
  getFolderById: (id: number) => FolderData | null;
  activeFolderId: number;
  onClick: (id: number) => void;
  onAddSequenceClick: () => void;
  onDeleteClick: () => void;
}

const FolderItem = ({
  id,
  getFolderById,
  activeFolderId,
  onClick,
  onAddSequenceClick,
  onDeleteClick,
}: FolderItemProps) => {
  const [data, setData] = useState<FolderData | null>(getFolderById(id));

  const [openSubList, setOpenSubList] = useState(false);
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const onAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (openSubList) {
      e.stopPropagation();
    }
    setAddMenuOpen(!addMenuOpen);
  };
  const handleAddMenuClose = (e: any) => {
    setAddMenuOpen(false);
  };

  return (
    <>
      <FolderItemButton
        onClick={() => {
          setOpenSubList(!openSubList);
          onClick(id);
        }}
        sx={activeFolderId === id ? ItemActiveSX : {}}
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
          <IconButton disableRipple sx={{ padding: 0 }}>
            <DeleteIcon sx={{ color: COLOR_TEXT_LIGHTGRAY }} />
          </IconButton>
        </RightButtonContainer>
      </FolderItemButton>
      <Collapse in={openSubList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ paddingLeft: pxToRem(19) }}>
          {data &&
            data.childFolderIdList.map((v) => (
              <FolderItem
                key={v}
                id={v}
                getFolderById={getFolderById}
                onAddSequenceClick={onAddSequenceClick}
                onDeleteClick={onDeleteClick}
                onClick={onClick}
                activeFolderId={activeFolderId}
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
        <AddMenuItem>
          <FolderIcon />
          Add Folder
        </AddMenuItem>
        <AddMenuItem>
          <MovieCreationOutlinedIcon />
          Add Sequence
        </AddMenuItem>
      </AddMenu>
    </>
  );
};

export default FolderItem;
