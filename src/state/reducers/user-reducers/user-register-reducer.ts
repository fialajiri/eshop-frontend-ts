import { UserAction } from "../../actions/user-actions";
import { UserActionTypes } from "../../action-types/user-types";
import { UserState } from "./user-login-reducer";
import produce from "immer";

export const userRegisterInitialState: UserState = {
  loading: false,
  error: null,
  user: null,
  success: undefined
};

export const userRegisterReducer = produce(
  (
    state: UserState = userRegisterInitialState,
    action: UserAction
  ): UserState => {
    switch (action.type) {
      case UserActionTypes.USER_REGISTER_REQUEST:
        state.loading = true;
        return state;
      case UserActionTypes.USER_REGISTER_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case UserActionTypes.USER_REGISTER_SUCCESS:
        state.loading = false;
        state.user = action.payload;
        return state;
      default:
        return state;
    }
  },
  userRegisterInitialState
);
