import { UserActionTypes } from "../../action-types/user-types";
import { UserAction } from "../../actions/user-actions";
import { AddressDoc } from "../../../interfaces/models";

import { Dispatch } from "redux";
import axios from "axios";

export interface userUpdateData {
  id: string;
  firstName?: string;
  lastName?: string;
  isAdmin?: boolean;
  addresses?: AddressDoc[];
}

export const updateUser = (data: userUpdateData) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.USER_UPDATE_REQUEST });

    try {
      await axios.put(`${process.env.BACKEND_URL}/api/users/${data.id}`, {
        ...data,
      });
      dispatch({ type: UserActionTypes.USER_UPDATE_SUCCESS });
    } catch (err: any) {
      dispatch({
        type: UserActionTypes.USER_UPDATE_ERROR,
        payload: err.message,
      });
    }
  };
};
