import { UserActionTypes } from "../../action-types/user-types";
import { UserAction } from "../../actions/user-actions";
import { UserDoc } from "../../../interfaces/models";
import { Dispatch } from "redux";
import axios from "axios";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export const listUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.USER_LIST_REQUEST });

    try {
      const { data: users }: { data: UserDoc[] } = await axios.get(
        `${process.env.BACKEND_URL}/api/users/getallusers`,
        AXIOS_CONFIG
      );
      dispatch({ type: UserActionTypes.USER_LIST_SUCCESS, payload: users });
    } catch (err: any) {
      dispatch({ type: UserActionTypes.USER_LIST_ERROR, payload: err.message });
    }
  };
};
