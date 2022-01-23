import { UserAction } from "../../actions/user-actions";
import { UserActionTypes } from "../../action-types/user-types";
import produce from "immer";

export interface UserDeleteState {
  loading: boolean;
  success: boolean | undefined;
  error: string[] | null;
}

export const userDeleteInitialState: UserDeleteState = {
  loading: false,
  success: undefined,
  error: null,
};

export const userDeleteReducer = produce(
  (
    state: UserDeleteState = userDeleteInitialState,
    action: UserAction
  ): UserDeleteState => {
    switch (action.type) {
      case UserActionTypes.USER_DELETE_REQUEST:
        state.loading = true;
        return state;
      case UserActionTypes.USER_DELETE_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case UserActionTypes.USER_DELETE_SUCCESS:
        state.loading = false;
        state.success = true;
      default:
        return state;
    }
  },
  userDeleteInitialState
);
