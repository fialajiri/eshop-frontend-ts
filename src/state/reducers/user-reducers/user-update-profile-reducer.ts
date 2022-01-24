import { UserAction } from "../../actions/user-actions";
import { UserActionTypes } from "../../action-types/user-types";

import { UserDetailsState } from "./user-details-reducer";
import produce from "immer";

export const userUpdateProfileInitialState: UserDetailsState = {
  loading: false,
  error: null,
  userDetail: null,
  
};

export const userUpdateProfileReducer = produce(
  (state: UserDetailsState = userUpdateProfileInitialState, action: UserAction) => {
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
        state.userDetail = action.payload;        
        return state;
      case UserActionTypes.USER_UDPATE_PROFILE_RESET:
        return userUpdateProfileInitialState;
    }
  },
  userUpdateProfileInitialState
);
