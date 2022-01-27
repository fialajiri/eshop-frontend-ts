import { UserActionTypes } from "../../action-types/user-types";
import { UserAction } from "../../actions/user-actions";
import { Dispatch } from "redux";
import axios from "axios";
import { UserDetailsDoc } from "../../../interfaces/models";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export const getUserDetails = (userId: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.USER_DETAILS_REQUEST });

    try {
      const { data: userDetails }: { data: UserDetailsDoc } = await axios.get(
        `${process.env.BACKEND_URL}/api/users/${userId}`,
        AXIOS_CONFIG
      );
      dispatch({
        type: UserActionTypes.USER_DETAILS_SUCCESS,
        payload: userDetails,
      });
    } catch (err: any) {
      dispatch({
        type: UserActionTypes.USER_DETAILS_ERROR,
        payload: err.message,
      });
    }
  };
};
