import { UserActionTypes } from "../../action-types/user-types";
import { UserAction } from "../../actions/user-actions";
import { UserDoc } from "../../../interfaces/models";
import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import axios from "axios";

export const login = (email: string, password: string) => {
  return async (dispatch: ThunkDispatch<any, any, UserAction>) => {
    dispatch({
      type: UserActionTypes.USER_LOGIN_REQUEST,
    });

    try {
      const { data }: { data: UserDoc } = await axios.post(
        `${process.env.BACKEND_URL}/api/users/signin`,
        {
          email,
          password,
        }
      );
      dispatch({ type: UserActionTypes.USER_LOGIN_SUCCESS, payload: data });
      
    } catch (err: any) {
      dispatch({
        type: UserActionTypes.USER_LOGIN_ERROR,
        payload: err.message,
      });
      
    }
  };
};
