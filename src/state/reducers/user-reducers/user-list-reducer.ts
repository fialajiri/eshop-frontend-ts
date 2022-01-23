import { UserAction } from "../../actions/user-actions";
import { UserActionTypes } from "../../action-types/user-types";
import produce from "immer";
import { UserDoc } from "../../../interfaces/models";

export interface UserListState {
  loading: boolean;
  error: string[] | null;
  users: UserDoc[];
}

export const userListInitialState: UserListState = {
  loading: false,
  error: null,
  users: [],
};

export const userListReducer = produce(
  (
    state: UserListState = userListInitialState,
    action: UserAction
  ): UserListState => {
    switch (action.type) {
      case UserActionTypes.USER_LIST_REQUEST:
        state.loading = true;
        return state;
      case UserActionTypes.USER_LIST_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case UserActionTypes.USER_LIST_SUCCESS:
        state.loading = false;
        state.users = action.payload;
        return state;
      case UserActionTypes.USER_LIST_RESET:
        return userListInitialState;
      default:
        return state;
    }
  },
  userListInitialState
);
