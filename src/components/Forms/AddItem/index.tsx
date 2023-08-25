import { Divider, InputAdornment, Modal } from "@mui/material";
import {
  CloseButton,
  FolderTitle,
  FormContainer,
  PathContainer,
  SubmitButton,
  TitleInput,
} from "./style";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { FolderData, ItemType } from "../../../types";
import { Clear, Folder } from "@mui/icons-material";
import { useState } from "react";

interface AddItemModalProps {
  folderId: number;
  getFolderById: (id: number) => FolderData | null;
  modalOpen: boolean;
  changeModalOpen: () => void;
  newItemType: ItemType;
  onSubmit: (title: string) => void;
}

const AddItemModal = ({
  folderId,
  getFolderById,
  modalOpen,
  changeModalOpen,
  newItemType,
  onSubmit,
}: AddItemModalProps) => {
  const folderData = getFolderById(folderId);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const onValueChange = (val: string) => {
    setValue(val);
  };
  const onFormSubmit = () => {
    if (value.trim() !== "") {
      setError(false);
      onSubmit(value);
      setValue("");
      changeModalOpen();
    } else {
      setValue('');
      setError(true);
    }
  };

  return (
    <Modal open={modalOpen} onClose={changeModalOpen} disableAutoFocus>
      <FormContainer>
        <CloseButton disableRipple onClick={changeModalOpen}>
          <Clear fontSize="small" />
        </CloseButton>
        <PathContainer>
          <FolderTitle>
            <Folder />
            {folderData?.title}
          </FolderTitle>
          <ChevronRightOutlinedIcon />
          {`New ${newItemType === ItemType.FILE ? "Sequence" : "Folder"}`}
        </PathContainer>
        <TitleInput
          error={error}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          placeholder={`Enter ${
            newItemType === ItemType.FILE ? "sequence" : "folder"
          } name`}
          startAdornment={
            <InputAdornment position="start">
              <MovieCreationOutlinedIcon />
            </InputAdornment>
          }
          fullWidth
        />
        <Divider sx={{ background: "#333333" }} />
        <SubmitButton onClick={onFormSubmit}>
          <AddBoxIcon />
          Add Sequence
        </SubmitButton>
      </FormContainer>
    </Modal>
  );
};

export default AddItemModal;
