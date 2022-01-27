import { UserActionTypes } from "../../action-types/user-types";
import { UserAction } from "../../actions/user-actions";
import { UserDoc } from "../../../interfaces/models";
import { Dispatch } from "redux";
import axios from "axios";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export const register = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.USER_REGISTER_REQUEST });

    try {
      const { data: user }: { data: UserDoc } = await axios.post(
        `${process.env.BACKEND_URL}/api/users/signup`,
        { email, password },
        AXIOS_CONFIG
      );

      dispatch({ type: UserActionTypes.USER_REGISTER_SUCCESS, payload: user });
      dispatch({ type: UserActionTypes.USER_LOGIN_SUCCESS, payload: user });
    } catch (err: any) {
      dispatch({
        type: UserActionTypes.USER_REGISTER_ERROR,
        payload: err.message,
      });
    }
  };
};
