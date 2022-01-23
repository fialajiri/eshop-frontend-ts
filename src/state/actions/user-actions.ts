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

export interface UserRegisterRequestAction {
  type: UserActionTypes.USER_REGISTER_REQUEST;
}

export interface UserRegisterSuccessAction {
  type: UserActionTypes.USER_REGISTER_SUCCESS;
  payload: UserDoc;
}

export interface UserRegisterErrorAction {
  type: UserActionTypes.USER_REGISTER_ERROR;
  payload: string[];
}

export interface UserDetailsRequestAction {
  type: UserActionTypes.USER_DETAILS_REQUEST;
}

export interface UserDetailsSuccessAction {
  type: UserActionTypes.USER_DETAILS_SUCCESS;
  payload: UserDoc;
}

export interface UserDetailsErrorAction {
  type: UserActionTypes.USER_DETAILS_ERROR;
  payload: string[];
}

export interface UserDetailsResetAction {
  type: UserActionTypes.USER_DETAILS_RESET;
}

export interface UserUpdateProfileRequestAction {
  type: UserActionTypes.USER_UPDATE_PROFILE_REQUEST;
}

export interface UserUpdateProfileSuccessAction {
  type: UserActionTypes.USER_UPDATE_PROFILE_SUCCESS;
  payload: UserDoc;
}

export interface UserUpdateProfileErrorAction {
  type: UserActionTypes.USER_UPDATE_PROFILE_ERROR;
  payload: string[];
}

export interface UserUpdateProfileResetAction {
  type: UserActionTypes.USER_UDPATE_PROFILE_RESET;
}

export interface UserListRequestAction {
  type: UserActionTypes.USER_LIST_REQUEST;
}

export interface UserListSuccessAction {
  type: UserActionTypes.USER_LIST_SUCCESS;
  payload: UserDoc[];
}

export interface UserListErrorAction {
  type: UserActionTypes.USER_LIST_ERROR;
  payload: string[];
}

export interface UserListResetAction {
  type: UserActionTypes.USER_LIST_RESET;
}

export interface UserDeleteRequestAction {
  type: UserActionTypes.USER_DELETE_REQUEST;
}

export interface UserDeleteSuccessAction {
  type: UserActionTypes.USER_DELETE_SUCCESS;
}

export interface UserDeleteErrorAction {
  type: UserActionTypes.USER_DELETE_ERROR;
  payload: string[];
}

export interface UserUpdateRequestAction {
  type: UserActionTypes.USER_UPDATE_REQUEST;
}

export interface UserUpdateSuccessAction {
  type: UserActionTypes.USER_UPDATE_SUCCESS;
  payload: UserDoc;
}

export interface UserUpdateErrorAction {
  type: UserActionTypes.USER_UPDATE_ERROR;
  payload: string[];
}

export interface UserUpdateResetAction {
  type: UserActionTypes.USER_UDPATE_RESET;
}

export type UserAction =
  | UserLoginRequestAction
  | UserLoginSuccessAction
  | UserLoginErrorAction
  | UserRegisterRequestAction
  | UserRegisterErrorAction
  | UserRegisterSuccessAction
  | UserDetailsRequestAction
  | UserDetailsErrorAction
  | UserDetailsSuccessAction
  | UserDetailsResetAction
  | UserUpdateProfileRequestAction
  | UserUpdateProfileSuccessAction
  | UserUpdateProfileErrorAction
  | UserUpdateProfileResetAction
  | UserListRequestAction
  | UserListSuccessAction
  | UserListErrorAction
  | UserListResetAction
  | UserDeleteRequestAction
  | UserDeleteSuccessAction
  | UserDeleteErrorAction
  | UserUpdateRequestAction
  | UserUpdateSuccessAction
  | UserUpdateErrorAction
  | UserUpdateResetAction;
