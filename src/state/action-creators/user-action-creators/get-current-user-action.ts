import { UserActionTypes } from "../../action-types/user-types";
import { UserAction } from "../../actions/user-actions";
import { Dispatch } from "redux";
import axios from "axios";
import { UserDoc } from "../../../interfaces/models";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export const getCurrentUser = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.USER_CURRENT_REQUEST });

    try {
      const { data: currentUser }: { data: UserDoc } = await axios.get(
        `${process.env.BACKEND_URL}/api/users/currentuser`,
        AXIOS_CONFIG
      );
      dispatch({
        type: UserActionTypes.USER_CURRENT_SUCCESS,
        payload: currentUser,
      });
    } catch (err: any) {
      dispatch({
        type: UserActionTypes.USER_CURRENT_ERROR,
        payload: err.message,
      });
    }
  };
};
