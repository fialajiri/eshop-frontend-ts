import produce from "immer";
import { UserAction } from "../../actions/user-actions";
import { UserActionTypes } from "../../action-types/user-types";
import { UserDoc } from "../../../interfaces/models";
import { UserState } from "./user-login-reducer";

export const userCurrentInitialState: UserState = {
  loading: false,
  error: null,
  user: null,
  success: undefined,
};

export const getCurrentUserReducer = produce(
  (state: UserState = userCurrentInitialState, action: UserAction) => {
    switch (action.type) {
      case UserActionTypes.USER_CURRENT_REQUEST:
        state.loading = true;
        return state;
      case UserActionTypes.USER_CURRENT_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case UserActionTypes.USER_CURRENT_SUCCESS:
        state.loading = false;
        state.user = action.payload;
        return state;
      case UserActionTypes.USER_CURRENT_RESET:
        return userCurrentInitialState;
      default:
        return state;
    }
  },
  userCurrentInitialState
);
