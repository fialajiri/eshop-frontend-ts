import React, { useState, useEffect } from "react";

import NavigationLinks from "./navigation-links";
import SideDrawer from "../../ui-elements/side-drawer";
import Backdrop from "../../ui-elements/backdrop";
import Cart from "../../cart/cart";
import CartDrawer from "../../cart/cart-drawer";

const MainNavigation: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [renderDrawer, setRenderDrawwer] = useState(false);
  const [cartDrawerIsOpen, setCartDrawerIsOpen] = useState(false);
  const [renderCart, setRenderCart] = useState(false);

  const toggleCartHandler = () =>
    setCartDrawerIsOpen((prevState) => !prevState);

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
    if (drawerIsOpen || cartDrawerIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  useEffect(() => {
    disableScrolling();
  }, [drawerIsOpen, cartDrawerIsOpen]);

  useEffect(() => {
    setRenderDrawwer(true);
    setRenderCart(true);
  }, []);

  return (
    <div className="navigation">
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {cartDrawerIsOpen && <Backdrop onClick={toggleCartHandler} />}
      {renderDrawer && (
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="navigation__drawer">
            <NavigationLinks openCart={() => {}} />
          </nav>
        </SideDrawer>
      )}
      {renderCart && (
        <CartDrawer show={cartDrawerIsOpen}>
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
          <NavigationLinks openCart={toggleCartHandler} />
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
