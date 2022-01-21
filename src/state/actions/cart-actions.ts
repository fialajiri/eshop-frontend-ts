import { CartActionTypes } from "../action-types/cart-types";
import { CartDoc } from "../../interfaces/models";
import { Action } from "redux";

export interface CartRequestAction extends Action {
  type: CartActionTypes.CART_REQUEST;
}

export interface CartErrorAction extends Action{
  type: CartActionTypes.CART_ERROR;
  payload: string[];
}

export interface CartUpdateSuccessAction extends Action {
  type: CartActionTypes.CART_UPDATE_SUCCESS;
  payload: CartDoc;
}

export type CartAction = CartRequestAction | CartErrorAction | CartUpdateSuccessAction;
