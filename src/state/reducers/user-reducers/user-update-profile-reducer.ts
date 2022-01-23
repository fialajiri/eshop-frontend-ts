import { UserAction } from "../../actions/user-actions";
import { UserActionTypes } from "../../action-types/user-types";
import { UserState } from "./user-login-reducer";
import produce from "immer";

export const userUpdateProfileInitialState: UserState = {
  loading: false,
  error: null,
  user: null,
  success: undefined,
};

export const userUpdateProfileReducer = produce(
  (state: UserState = userUpdateProfileInitialState, action: UserAction) => {
    switch (action.type) {
      case UserActionTypes.USER_UPDATE_PROFILE_REQUEST:
        state.loading = true;
        return state;
      case UserActionTypes.USER_UPDATE_PROFILE_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case UserActionTypes.USER_UPDATE_PROFILE_SUCCESS:
        state.loading = false;
        state.user = action.payload;
        return state;
      case UserActionTypes.USER_UDPATE_PROFILE_RESET:
        return userUpdateProfileInitialState;
    }
  },
  userUpdateProfileInitialState
);
