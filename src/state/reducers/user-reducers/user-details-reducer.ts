import { UserAction } from "../../actions/user-actions";
import { UserActionTypes } from "../../action-types/user-types";
import produce from "immer";
import { UserDetailsDoc, UserDoc } from "../../../interfaces/models";
import { UserState } from "./user-login-reducer";

export interface UserDetailsState {
  loading: boolean;
  error: string[] | null;
  userDetail: UserDetailsDoc | null;
}

export const userDetailsInitialState: UserDetailsState = {
  loading: false,
  error: null,
  userDetail: null,
};

export const userDetailsReducer = produce(
  (
    state: UserDetailsState = userDetailsInitialState,
    action: UserAction
  ): UserDetailsState => {
    switch (action.type) {
      case UserActionTypes.USER_DETAILS_REQUEST:
        state.loading = true;
        return state;
      case UserActionTypes.USER_DETAILS_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case UserActionTypes.USER_DETAILS_SUCCESS:
        state.loading = false;
        state.userDetail = action.payload;
        return state;
      case UserActionTypes.USER_DETAILS_RESET:
        return userDetailsInitialState;
      default:
        return state;
    }
  },
  userDetailsInitialState
);
