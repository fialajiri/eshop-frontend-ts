import { CartAction } from "../../actions/cart-actions";
import { CartActionTypes } from "../../action-types/cart-types";
import { CartDoc } from "../../../interfaces/models";
import { Dispatch } from "react";
import axios from "axios";

export const getCart = () => {
  return async (dispatch: Dispatch<CartAction>) => {
    dispatch({
      type: CartActionTypes.CART_REQUEST,
    });

    try {
      const { data:cart }: { data: CartDoc } = await axios.get(
        `${process.env.BACKEND_URL}/api/cart`
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
