import { UserActionTypes } from "../../action-types/user-types";
import { UserAction } from "../../actions/user-actions";
import {
  UserDoc,
  AddressDoc,
  UserDetailsDoc,
} from "../../../interfaces/models";
import { RootState } from "../..";
import { Dispatch } from "redux";
import axios from "axios";

export interface userUpdateProfileData {
  firstName?: string;
  lastName?: string;
  addresses?: AddressDoc[];
  password?: string;
}

export const updateUserProfile = (data: userUpdateProfileData) => {
  return async (dispatch: Dispatch<UserAction>, getState: () => RootState) => {
    dispatch({ type: UserActionTypes.USER_UPDATE_PROFILE_REQUEST });

    try {
      const userId = getState().userLogin.user?.id;
      const { data: updatedUserProfile }: { data: UserDetailsDoc } =
        await axios.put(
          `${process.env.BACKEND_URL}/api/users/updateprofile/${userId}`,
          { ...data }
        );
      dispatch({
        type: UserActionTypes.USER_UPDATE_PROFILE_SUCCESS,
        payload: updatedUserProfile,
      });
      dispatch({
        type: UserActionTypes.USER_DETAILS_SUCCESS,
        payload: updatedUserProfile,
      });
    } catch (err: any) {
      dispatch({
        type: UserActionTypes.USER_UPDATE_PROFILE_ERROR,
        payload: err.message,
      });
    }
  };
};
