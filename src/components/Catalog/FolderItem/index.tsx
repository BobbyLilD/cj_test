import { FolderData } from "../../../types";
import {
  ExpandIcon,
  FolderItemButton,
  FolderTitleTypography,
  FolderIcon,
  ItemActiveSX,
} from "./style";
import { useState } from "react";

interface FolderItemProps {
  data: FolderData;
}

const FolderItem = ({ data }: FolderItemProps) => {
  const [openSubList, setOpenSubList] = useState(false);

  return (
    <FolderItemButton
      onClick={() => setOpenSubList(!openSubList)}
      sx={openSubList ? ItemActiveSX : null}
    >
      <ExpandIcon sx={{ transform: !openSubList ? "rotate(-90deg)" : null }} />
      <FolderIcon />
      <FolderTitleTypography primary={data.title} />
    </FolderItemButton>
  );
};

export default FolderItem;
