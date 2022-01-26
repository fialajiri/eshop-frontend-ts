import { UserAction } from "../../actions/user-actions";
import { UserActionTypes } from "../../action-types/user-types";

import { UserDetailsState } from "./user-details-reducer";
import produce from "immer";
import { UserDetailsDoc } from "../../../interfaces/models";

export interface UserUpdateProfileState {
  loading: boolean;
  error: string [] | null;
  success: boolean | undefined;
  userDetail: UserDetailsDoc | null
}

export const userUpdateProfileInitialState: UserUpdateProfileState = {
  loading: false,
  error: null,
  userDetail: null,
  success: undefined
  
};

export const userUpdateProfileReducer = produce(
  (state: UserUpdateProfileState = userUpdateProfileInitialState, action: UserAction) => {
    switch (action.type) {
      case UserActionTypes.USER_UPDATE_PROFILE_REQUEST:
        state.loading = true;
        return state;
      case UserActionTypes.USER_UPDATE_PROFILE_ERROR:
        state.loading = false;
        state.success = false;
        state.error = action.payload;        
        return state;
      case UserActionTypes.USER_UPDATE_PROFILE_SUCCESS:
        state.loading = false;
        state.success = true;
        state.userDetail = action.payload;        
        return state;
      case UserActionTypes.USER_UDPATE_PROFILE_RESET:
        return userUpdateProfileInitialState;
    }
  },
  userUpdateProfileInitialState
);
