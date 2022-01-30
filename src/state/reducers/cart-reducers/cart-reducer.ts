import produce from "immer";
import { CartAction } from "../../actions/cart-actions";
import { CartActionTypes } from "../../action-types/cart-types";
import { CartDoc } from "../../../interfaces/models";

export interface CartState {
  loading: boolean;
  error: string[] | null;
  cart: CartDoc | null;
  isCartVisible: boolean;
}

export const cartInitailState: CartState = {
  loading: false,
  error: null,
  cart: null,
  isCartVisible: false,
};

export const cartReducer = produce(
  (state: CartState = cartInitailState, action: CartAction): CartState => {
    switch (action.type) {
      case CartActionTypes.CART_REQUEST:
        state.loading = true;
        return state;
      case CartActionTypes.CART_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case CartActionTypes.CART_UPDATE_SUCCESS:
        state.loading = false;
        state.cart = action.payload;
        return state;
      case CartActionTypes.CART_SHOW:
        state.isCartVisible = true;
        return state;
      case CartActionTypes.CART_HIDE:
        state.isCartVisible = false;
        return state;

      default:
        return state;
    }
  },
  cartInitailState
);
