import { getCurrentUserReducer, userCurrentInitialState } from "../user-get-current-reducer";
import { mockedUser } from "../../../../mocks/mock-data/mock-user";
import { UserState } from "../user-login-reducer";
import { UserActionTypes } from "../../../action-types/user-types";

it("set loading to true upon receiving an action of type USER_CURRENT_REQUEST", async () => {
  const previousState: UserState = {
    loading: false,
    user:null,
    error: null,
    success: undefined
  };
  const expectedState: UserState = {
    loading: true,
    user:null,
    error: null,
    success: undefined
  };

  const newState = getCurrentUserReducer(previousState, {
    type: UserActionTypes.USER_CURRENT_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type USER_CURRENT_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: UserState = {
    loading: true,
    user:null,
    error: null,
    success: undefined
  };

  const expectedState: UserState = {
    loading: false,
    user:null,
    error: payload,
    success: undefined
  };

  const newState = getCurrentUserReducer(previousState, {
    type: UserActionTypes.USER_CURRENT_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set user upon receiving an action of type USER_CURRENT_SUCCESS", async () => {
  const previousState: UserState = {
    loading: true,
    user:null,
    error: null,
    success: undefined
  };

  const expectedState: UserState = {
    loading: false,
    user:mockedUser,
    error: null,
    success: undefined
  };

  const newState = getCurrentUserReducer(previousState, {
    type: UserActionTypes.USER_CURRENT_SUCCESS,
    payload: mockedUser,
  });

  expect(newState).toEqual(expectedState);
});

it("set state to initial state receiving an action of type USER_CURRENT_RESET", async () => {
    const previousState: UserState = {
      loading: true,
      user:null,
      error: null,
      success: undefined
    };  
    
  
    const newState = getCurrentUserReducer(previousState, {
      type: UserActionTypes.USER_CURRENT_RESET,
     
    });
  
    expect(newState).toEqual(userCurrentInitialState);
  });
