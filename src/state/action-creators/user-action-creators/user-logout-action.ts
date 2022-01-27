import { UserActionTypes } from "../../action-types/user-types";
import { UserAction } from "../../actions/user-actions";
import { Dispatch } from "redux";
import axios from "axios";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export const logout = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    await axios.post(`${process.env.BACKEND_URL}/api/users/signout`, AXIOS_CONFIG);

    dispatch({ type: UserActionTypes.USER_LOGIN_LOGOUT });
    dispatch({ type: UserActionTypes.USER_CURRENT_RESET });
    dispatch({ type: UserActionTypes.USER_DETAILS_RESET });
    dispatch({ type: UserActionTypes.USER_UDPATE_PROFILE_RESET });
    dispatch({ type: UserActionTypes.USER_LIST_RESET });
  };
};
