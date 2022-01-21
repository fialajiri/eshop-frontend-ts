import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

interface CartDrawerProps {
  show: boolean;
  onClick: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = (props) => {
  const content: JSX.Element = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-right"
      mountOnEnter
      unmountOnExit
    >
      <aside className="cart-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("cart-hook")!);
};

export default CartDrawer;
