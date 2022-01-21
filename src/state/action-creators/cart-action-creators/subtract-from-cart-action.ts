import { CartAction } from "../../actions/cart-actions";
import { CartActionTypes } from "../../action-types/cart-types";
import { CartDoc } from "../../../interfaces/models";
import { Dispatch } from "react";
import axios from "axios";
import { RootState } from "../..";

export const subtractFromCart = (productId: string, quantity: number) => {
  return async (dispatch: Dispatch<CartAction>, getState: () => RootState) => {
    dispatch({
      type: CartActionTypes.CART_REQUEST,
    });

    try {
      const cartId = getState().cartState.cart!.id;

      const { data: cart }: { data: CartDoc } = await axios.put(
        `${process.env.BACKEND_URL}/api/cart/subtractfromcart/${cartId}`,
        {
          productId,
          quantity,
        }
      );
      dispatch({
        type: CartActionTypes.CART_UPDATE_SUCCESS,
        payload: cart,
      });
    } catch (err: any) {
      dispatch({
        type: CartActionTypes.CART_ERROR,
        payload: err.message,
      });
    }
  };
};