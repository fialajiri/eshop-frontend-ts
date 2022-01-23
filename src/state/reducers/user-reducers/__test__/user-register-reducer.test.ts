import { userRegisterReducer } from "../user-register-reducer";
import { UserState } from "../user-login-reducer";
import { mockedUser, mockUsers } from "../../../../mocks/mock-data/mock-user";
import { UserActionTypes } from "../../../action-types/user-types";

it("set loading to true upon receiving an action of type USER_REGISTER_REQUEST", async () => {
  const previousState: UserState = {
    loading: false,
    user: null,
    error: null,
    success:undefined
  };
  const expectedState: UserState = {
    loading: true,
    user: null,
    error: null,
    success:undefined
  };

  const newState = userRegisterReducer(previousState, {
    type: UserActionTypes.USER_REGISTER_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type USER_REGISTER_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: UserState = {
    loading: true,
    user: null,
    error: null,
    success:undefined
  };

  const expectedState: UserState = {
    loading: false,
    user: null,
    error: payload,
    success: undefined
  };

  const newState = userRegisterReducer(previousState, {
    type: UserActionTypes.USER_REGISTER_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set user  upon receiving an action of type USER_REGISTER_SUCCESS", async () => {
  const previousState: UserState = {
    loading: true,
    user: null,
    error: null,
    success:undefined
  };

  const expectedState: UserState = {
    loading: false,
    user: mockedUser,
    error: null,
    success:undefined
  };

  const newState = userRegisterReducer(previousState, {
    type: UserActionTypes.USER_REGISTER_SUCCESS,
    payload: mockedUser,
  });

  expect(newState).toEqual(expectedState);
});
