import React, { useState, useEffect } from "react";

import NavigationLinks from "./navigation-links";
import SideDrawer from "../../ui-elements/side-drawer";
import Backdrop from "../../ui-elements/backdrop";
import Cart from "../../cart/cart";
import CartDrawer from "../../cart/cart-drawer";
import { useTypedSelector } from "../../../hooks/use-types-selector";
import { useActions } from "../../../hooks/use-actions";

const MainNavigation: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [renderDrawer, setRenderDrawwer] = useState(false); 
  const [renderCart, setRenderCart] = useState(false);

  const { isCartVisible } = useTypedSelector((state) => state.cartState);
  const { toggleCartVisibility } = useActions();

  

  const openDrawerHandler = () => {
    setDrawerIsOpen((prevState) => !prevState);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
    var x = document.getElementById("navi-toggle");
    // @ts-ignore
    x.checked = false;
  };

  const disableScrolling = () => {
    if (drawerIsOpen || isCartVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  useEffect(() => {
    disableScrolling();
  }, [drawerIsOpen, isCartVisible]);

  useEffect(() => {
    setRenderDrawwer(true);
    setRenderCart(true);
  }, []);

  return (
    <div className="navigation">
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {isCartVisible && <Backdrop onClick={() => toggleCartVisibility(false)} />}
      {renderDrawer && (
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="navigation__drawer">
            <NavigationLinks />
          </nav>
        </SideDrawer>
      )}
      {renderCart && (
        <CartDrawer show={isCartVisible}>
          <nav className="navigation__drawer">
            <Cart />
          </nav>
        </CartDrawer>
      )}
      <div className={"main__navigation"}>
        <input
          type="checkbox"
          className="main__navigation__checkbox"
          id="navi-toggle"
          onChange={openDrawerHandler}
        />

        <label htmlFor="navi-toggle" className="main__navigation__button">
          <span className="main__navigation__icon">&nbsp;</span>
        </label>

        <nav className="main__navigation__links">
          <NavigationLinks />
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
