import { Fragment } from "react";
import { useActions } from "../../hooks/use-actions";
import { useEffect } from "react";

import Header from "./header/header";

const Layout: React.FC = (props) => {
  const { getCart, getCartById } = useActions();

  useEffect(() => {
    const cartId: string  = JSON.parse(localStorage.getItem("cartId") || '')

    if (cartId !== '') {
      console.log(cartId)
      getCartById(cartId);
    } else {
      getCart();
    }
  });
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
