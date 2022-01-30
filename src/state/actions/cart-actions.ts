import { CartActionTypes } from "../action-types/cart-types";
import { CartDoc } from "../../interfaces/models";
import { Action } from "redux";

export interface CartRequestAction  {
  type: CartActionTypes.CART_REQUEST;
}

export interface CartErrorAction {
  type: CartActionTypes.CART_ERROR;
  payload: string[];
}

export interface CartUpdateSuccessAction  {
  type: CartActionTypes.CART_UPDATE_SUCCESS;
  payload: CartDoc;
}

export interface CartShowAction {
  type: CartActionTypes.CART_SHOW
}

export interface CartHideAction {
  type: CartActionTypes.CART_HIDE
}

export type CartAction = CartRequestAction | CartErrorAction | CartUpdateSuccessAction | CartShowAction | CartHideAction
