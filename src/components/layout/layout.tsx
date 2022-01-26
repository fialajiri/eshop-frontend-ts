import { Fragment } from "react";
import { useActions } from "../../hooks/use-actions";
import { useEffect } from "react";

import Header from "./header/header";

const Layout: React.FC = (props) => {
  const { getCart, getCartById } = useActions();

  useEffect(() => {
    let cartId = ''
    try {
      const cartId: string = JSON.parse(localStorage.getItem("cartId") || "");
      console.log("use Effecting");

    } catch (err){
      console.log(err)
    }

    if (cartId !== "") {
      console.log(cartId);
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
