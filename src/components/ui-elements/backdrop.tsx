import React from "react";
import ReactDOM from "react-dom";

export interface IBackdropProps {
  onClick: () => void;
}

const Backdrop: React.FC<IBackdropProps> = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop" onClick={props.onClick}></div>,
    document.getElementById("backdrop-hook")!
  );
};

export default Backdrop;
