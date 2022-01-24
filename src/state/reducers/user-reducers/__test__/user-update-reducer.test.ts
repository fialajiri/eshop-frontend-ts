import { mockedUser } from "../../../../mocks/mock-data/mock-user";
import { userUpdateReducer, UserUpdateState } from "../user-update-reducer";
import { UserActionTypes } from "../../../action-types/user-types";
import { UserState } from "../user-login-reducer";


it("set loading to true upon receiving an action of type USER_UPDATE_REQUEST", async () => {
  const previousState: UserUpdateState = {
    loading: false,
    success: false,
    error: null,
   
    
  };
  const expectedState: UserUpdateState = {
    loading: true,
    success: false,
    error: null,
    
  };

  const newState = userUpdateReducer(previousState, {
    type: UserActionTypes.USER_UPDATE_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type USER_UPDATE_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: UserUpdateState = {
    loading: true,
    success: false,
    error: null,
    
  };

  const expectedState: UserUpdateState = {
    loading: false,
    success: false,
    error: payload,
    
  };

  const newState = userUpdateReducer(previousState, {
    type: UserActionTypes.USER_UPDATE_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set user upon receiving an action of type USER_UPDATE_SUCCESS", async () => {
  const payload = mockedUser
  const previousState: UserUpdateState = {
    loading: true,
    success: false,
    error: null,
    
  };

  const expectedState: UserUpdateState = {
    loading: false,
    success: true,
    error: null,
    
  };

  const newState = userUpdateReducer(previousState, {
    type: UserActionTypes.USER_UPDATE_SUCCESS,
    payload: mockedUser
  });

  expect(newState).toEqual(expectedState);
});