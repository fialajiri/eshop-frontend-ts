import { ProductActionTypes } from "../action-types/product-types";
import { ProductDoc } from "../../interfaces/models";

export interface ProductListRequestAction {
  type: ProductActionTypes.PRODUCT_LIST_REQUEST;
}

export interface ProductListSuccessAction {
  type: ProductActionTypes.PRODUCT_LIST_SUCCESS;
  payload: {
    products: ProductDoc[];
    page: number;
    pages: number;
    category: string | undefined;
  };
}

export interface ProductListErrorAction {
  type: ProductActionTypes.PRODUCT_LIST_ERROR;
  payload: string[];
}

export interface ProductDetailsRequestAction {
  type: ProductActionTypes.PRODUCT_DETAILS_REQUEST;
}

export interface ProductDetailsSuccessAction {
  type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS;
  payload: ProductDoc;
}

export interface ProductDetailsErrorAction {
  type: ProductActionTypes.PRODUCT_DETAILS_ERROR;
  payload: string[];
}

export interface ProductCreateRequestAction {
  type: ProductActionTypes.PRODUCT_CREATE_REQUEST;
}

export interface ProductCreateSuccessAction {
  type: ProductActionTypes.PRODUCT_CREATE_SUCCESS;
  payload: ProductDoc;
}

export interface ProductCreateErrorAction {
  type: ProductActionTypes.PRODUCT_CREATE_ERROR;
  payload: string[];
}

export interface ProductCreateResetAction {
  type: ProductActionTypes.PRODUCT_CREATE_RESET;
}

export interface ProductUpdateRequestAction {
  type: ProductActionTypes.PRODUCT_UPDATE_REQUEST;
}

export interface ProductUpdateErrorAction {
  type: ProductActionTypes.PRODUCT_UPDATE_ERROR;
  payload: string[];
}

export interface ProductUpdateSuccessAction {
  type: ProductActionTypes.PRODUCT_UPDATE_SUCCESS;
  payload: ProductDoc;
}

export interface ProductUpdateResetAction {
  type: ProductActionTypes.PRODUCT_UPDATE_RESET;
}

export interface ProductDeleteRequestAction {
  type: ProductActionTypes.PRODUCT_DELETE_REQUEST;
}

export interface ProductDeleteErrorAction {
  type: ProductActionTypes.PRODUCT_DELETE_ERROR;
  payload: string[];
}

export interface ProductDeleteSuccessAction {
  type: ProductActionTypes.PRODUCT_DELETE_SUCCESS;
}

export type ProductAction =
  | ProductListRequestAction
  | ProductListSuccessAction
  | ProductListErrorAction
  | ProductDetailsRequestAction
  | ProductDetailsSuccessAction
  | ProductDetailsErrorAction
  | ProductCreateRequestAction
  | ProductCreateSuccessAction
  | ProductCreateErrorAction
  | ProductCreateResetAction
  | ProductUpdateRequestAction
  | ProductUpdateErrorAction
  | ProductUpdateSuccessAction
  | ProductUpdateResetAction
  | ProductDeleteRequestAction
  | ProductDeleteErrorAction
  | ProductDeleteSuccessAction;
