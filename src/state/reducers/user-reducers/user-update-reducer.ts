import { UserAction } from "../../actions/user-actions";
import { UserActionTypes } from "../../action-types/user-types";
import produce from "immer";

export interface UserUpdateState {
  loading: boolean;
  error: string[] | null;
  success: boolean | undefined;
}

export const userUpdateInitialState: UserUpdateState = {
  loading: false,
  error: null,
  success: undefined,
};

export const userUpdateReducer = produce(
  (
    state: UserUpdateState = userUpdateInitialState,
    action: UserAction
  ): UserUpdateState => {
    switch (action.type) {
      case UserActionTypes.USER_UPDATE_REQUEST:
        state.loading = true;
        return state;
      case UserActionTypes.USER_UPDATE_ERROR:
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        return state;
      case UserActionTypes.USER_UPDATE_SUCCESS:
        state.loading = false;
        state.success = true;
        return state;
      case UserActionTypes.USER_UDPATE_RESET:
        return userUpdateInitialState;

      default:
        return state;
    }
  },
  userUpdateInitialState
);
