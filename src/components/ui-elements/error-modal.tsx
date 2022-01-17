import React from "react";
import Modal, { IModalOverlayProps } from "./modal";

export interface IErrorModalProps {
  onClear: () => {};
  error: string[] | null;
  modalProps: IModalOverlayProps;
}

const ErrorModal: React.FC<IErrorModalProps> = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      modalProps={{
        footer: <button onClick={props.onClear}>Okay</button>,
      }}
      show={!!props.error}
    ></Modal>
  );
};
