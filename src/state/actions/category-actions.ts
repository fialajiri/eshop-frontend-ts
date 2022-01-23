import { CategoryActionTypes } from "../action-types/category-types";
import { CategoryDoc } from "../../interfaces/models";

export interface CategoryListRequestAction {
  type: CategoryActionTypes.CATEGORY_LIST_REQUEST;
}

export interface CategoryListSuccessAction {
  type: CategoryActionTypes.CATEGORY_LIST_SUCCESS;
  payload: CategoryDoc[];
}

export interface CategoryListErrorAction {
  type: CategoryActionTypes.CATEGORY_LIST_ERROR;
  payload: string[];
}

export interface CategoryCreateRequestAction {
  type: CategoryActionTypes.CATEGORY_CREATE_REQUEST;
}

export interface CategoryCreateSuccessAction {
  type: CategoryActionTypes.CATEGORY_CREATE_SUCCESS;
  payload: CategoryDoc;
}

export interface CategoryCreateErrorAction {
  type: CategoryActionTypes.CATEGORY_CREATE_ERROR;
  payload: string[];
}

export interface CategoryCreateResetAction {
  type: CategoryActionTypes.CATEGORY_CREATE_RESET;
}

export interface CategoryDeleteRequestAction {
  type: CategoryActionTypes.CATEGORY_DELETE_REQUEST;
}

export interface CategoryDeleteSuccessAction {
  type: CategoryActionTypes.CATEGORY_DELETE_SUCCESS;
}

export interface CategoryDeleteErrorAction {
  type: CategoryActionTypes.CATEGORY_DELETE_ERROR;
  payload: string[];
}

export type CategoryAction =
  | CategoryListRequestAction
  | CategoryListSuccessAction
  | CategoryListErrorAction
  | CategoryCreateRequestAction
  | CategoryCreateSuccessAction
  | CategoryCreateErrorAction
  | CategoryCreateResetAction
  | CategoryDeleteRequestAction
  | CategoryDeleteSuccessAction
  | CategoryDeleteErrorAction;
