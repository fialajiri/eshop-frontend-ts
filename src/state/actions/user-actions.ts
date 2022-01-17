import { UserActionTypes } from "../action-types/user-types";

export interface User {
  id: string;
  email: string;
  isAdmin: boolean
}

export interface UserLoginRequestAction {
  type: UserActionTypes.USER_LOGIN_REQUEST;
}

export interface UserLoginSuccessAction {
  type: UserActionTypes.USER_LOGIN_SUCCESS;
  payload: User;
}

export interface UserLoginErrorAction {
  type: UserActionTypes.USER_LOGIN_ERROR;
  payload: string[];
}

export type UserAction =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginErrorAction;
