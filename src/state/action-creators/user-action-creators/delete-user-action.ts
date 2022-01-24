import { UserActionTypes } from "../../action-types/user-types";
import { UserAction } from "../../actions/user-actions";
import { Dispatch } from "redux";
import axios from "axios";

export const deleteUser = (userId: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.USER_DELETE_REQUEST });

    try {
      await axios.delete(`${process.env.BACKEND_URL}/api/users/${userId}`);
      dispatch({ type: UserActionTypes.USER_DELETE_SUCCESS });
    } catch (err: any) {
      dispatch({
        type: UserActionTypes.USER_DELETE_ERROR,
        payload: err.message,
      });
    }
  };
};
