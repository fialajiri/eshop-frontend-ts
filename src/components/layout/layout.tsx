import { Fragment } from "react";
import { useActions } from "../../hooks/use-actions";
import { useEffect } from "react";

import Header from "./header/header";

const Layout: React.FC = (props) => {
  const { getCart, getCartById } = useActions();

  useEffect(() => {
    if (localStorage["cartId"]) {
      const cartId = JSON.parse(localStorage.getItem("cartId") || "");
      getCartById(cartId);
    } else {
      getCart();
    }
  }, []);
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
