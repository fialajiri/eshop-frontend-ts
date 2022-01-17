import { UserActionTypes } from "../action-types/user-types";
import { User, UserAction } from "../actions/user-actions";
import { Dispatch } from "redux";
import axios from "axios";

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionTypes.USER_LOGIN_REQUEST,
    });

    try {
      const { data }: { data: User } = await axios.post(`${process.env.BACKEND_URL}/api/users/login`, {
        email,
        password,
      });
      dispatch({ type: UserActionTypes.USER_LOGIN_SUCCESS, payload: data });
    } catch (err: any) {
      dispatch({
        type: UserActionTypes.USER_LOGIN_ERROR,
        payload: err.message,
      });
    }
  };
};
