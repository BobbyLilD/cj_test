import { Modal } from "@mui/material";
import { ItemType } from "../../../../types";
import {
  ButtonContainer,
  CancelButton,
  DeleteButton,
  DeleteIcon,
  FormContainer,
  ItemPath,
  ModalMessage,
} from "./style";
import { useEffect, useState } from "react";

interface DeleteItemModalProps {
  itemId: number;
  getItemPath: (id: number) => string[];
  modalOpen: boolean;
  changeModalOpen: () => void;
  deleteItemType: ItemType;
  onDelete: () => void;
}

const DeleteItemModal = ({
  itemId,
  getItemPath,
  modalOpen,
  changeModalOpen,
  deleteItemType,
  onDelete,
}: DeleteItemModalProps) => {
  const [path, setPath] = useState<string>("");
  useEffect(() => {
    let folders = getItemPath(itemId);
    let res = "";
    for (let i = folders.length - 1; i >= 0; i--) {
      res = res + folders[i] + "/";
    }
    setPath(res.substring(0, res.length - 1));
  }, [itemId]);

  const handleClose = () => {
    changeModalOpen();
  };
  const handleDelete = () => {
    onDelete();
    changeModalOpen();
  }
  return (
    <Modal open={modalOpen} onClose={changeModalOpen} disableAutoFocus>
      <FormContainer>
        <DeleteIcon />
        <ItemPath>{path}</ItemPath>
        <ModalMessage>{`Are you sure you want to delete this ${
          deleteItemType === ItemType.FILE ? "sequence" : "folder"
        }?`}</ModalMessage>
        <ButtonContainer>
          <CancelButton onClick={handleClose}>No, cancel</CancelButton>
          <DeleteButton onClick={handleDelete}>Yes, delete</DeleteButton>
        </ButtonContainer>
      </FormContainer>
    </Modal>
  );
};

export default DeleteItemModal;
