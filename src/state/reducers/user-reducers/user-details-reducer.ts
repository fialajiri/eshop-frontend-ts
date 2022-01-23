import { UserAction } from "../../actions/user-actions";
import { UserActionTypes } from "../../action-types/user-types";
import produce from "immer";
import { UserDoc } from "../../../interfaces/models";
import { UserState } from "./user-login-reducer";

export const userDetailsInitialState: UserState = {
  loading: false,
  error: null,
  user: null,
  success: undefined,
};

export const userDetailsReducer = produce(
  (
    state: UserState = userDetailsInitialState,
    action: UserAction
  ): UserState => {
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
        state.user = action.payload;
        return state;
      default:
        return state;
    }
  },
  userDetailsInitialState
);
