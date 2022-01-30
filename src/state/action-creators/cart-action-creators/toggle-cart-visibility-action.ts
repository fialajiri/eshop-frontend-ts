import { CartAction } from "../../actions/cart-actions";
import { CartActionTypes } from "../../action-types/cart-types";
import { Dispatch } from "react";

export const toggleCartVisibility = (setVisible: boolean) => {
  return async (dispatch: Dispatch<CartAction>) => {
    if (setVisible) {
      dispatch({ type: CartActionTypes.CART_SHOW });
    } else {
      dispatch({ type: CartActionTypes.CART_HIDE });
    }
  };
};
