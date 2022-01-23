import produce from "immer";
import { UserAction } from "../../actions/user-actions";
import { UserActionTypes } from "../../action-types/user-types";
import { UserDoc } from "../../../interfaces/models";

export interface UserState {
  loading: boolean;
  error: string[] | null;
  user: UserDoc | null;
  success: boolean | undefined
}

export const userLogininitialState: UserState = {
  loading: false,
  error: null,
  user: null,
  success: undefined
};

export const userLoginReducer = produce(
  (state: UserState = userLogininitialState, action: UserAction): UserState => {
    switch (action.type) {
      case UserActionTypes.USER_LOGIN_REQUEST:
        state.loading = true;
        state.error = null;
        return state;

      case UserActionTypes.USER_LOGIN_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;

      case UserActionTypes.USER_LOGIN_SUCCESS:
        state.loading = false;
        state.user = action.payload;
        return state;

      default:
        return state;
    }
  },
  userLogininitialState
);
