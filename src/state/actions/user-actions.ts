import { UserActionTypes } from "../action-types/user-types";
import { UserDoc } from "../../interfaces/models";



export interface UserLoginRequestAction {
  type: UserActionTypes.USER_LOGIN_REQUEST;
}

export interface UserLoginSuccessAction {
  type: UserActionTypes.USER_LOGIN_SUCCESS;
  payload: UserDoc;
}

export interface UserLoginErrorAction {
  type: UserActionTypes.USER_LOGIN_ERROR;
  payload: string[];
}

export type UserAction =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginErrorAction;
