import { ProductActionTypes } from "../action-types/product-types";
import { ProductDoc } from "../../interfaces/models";

export interface ProductListRequestAction {
  type: ProductActionTypes.PRODUCT_LIST_REQUEST;
}

export interface ProductListSuccessAction {
  type: ProductActionTypes.PRODUCT_LIST_SUCCESS;
  payload: ProductDoc[];
}

export interface ProductListErrorAction {
  type: ProductActionTypes.PRODUCT_LIST_ERROR;
  payload: string[];
}

export type ProductAction =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListErrorAction;
