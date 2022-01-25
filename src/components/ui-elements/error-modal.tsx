import React from "react";
import Modal, { IModalOverlayProps } from "./modal";
import Button from "./button";

export interface IErrorModalProps {
  onClear: () => void;
  error: string | undefined;
  modalProps?: IModalOverlayProps;
}

const ErrorModal: React.FC<IErrorModalProps> = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      modalProps={{
        footer: <Button size="small" onClick={props.onClear}>Okay</Button>,
        ...props.modalProps
      }}
      show={!!props.error}
    ></Modal>
  );
};

export default ErrorModal
