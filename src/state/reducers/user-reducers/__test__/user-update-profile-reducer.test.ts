import { mockUserDetails } from "../../../../mocks/mock-data/mock-user";
import {
  userUpdateProfileInitialState,
  userUpdateProfileReducer,
} from "../user-update-profile-reducer";
import { UserUpdateProfileState } from "../user-update-profile-reducer";
import { UserActionTypes } from "../../../action-types/user-types";

it("set loading to true upon receiving an action of type USER_UPDATE_PROFILE_REQUEST", async () => {
  const previousState: UserUpdateProfileState = {
    loading: false,
    error: null,
    userDetail: null,
    success: undefined,
  };
  const expectedState: UserUpdateProfileState = {
    loading: true,
    error: null,
    userDetail: null,
    success: undefined,
  };

  const newState = userUpdateProfileReducer(previousState, {
    type: UserActionTypes.USER_UPDATE_PROFILE_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type USER_UPDATE_PROFILE_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: UserUpdateProfileState = {
    loading: true,
    success: undefined,
    error: null,
    userDetail: null,
  };

  const expectedState: UserUpdateProfileState = {
    loading: false,
    success: false,
    error: payload,
    userDetail: null,
  };

  const newState = userUpdateProfileReducer(previousState, {
    type: UserActionTypes.USER_UPDATE_PROFILE_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set user upon receiving an action of type USER_UPDATE_PROFILE_SUCCESS", async () => {
  const previousState: UserUpdateProfileState = {
    loading: true,
    error: null,
    userDetail: null,
    success: undefined,
  };

  const expectedState: UserUpdateProfileState = {
    loading: false,
    error: null,
    userDetail: mockUserDetails,
    success: true,
  };

  const newState = userUpdateProfileReducer(previousState, {
    type: UserActionTypes.USER_UPDATE_PROFILE_SUCCESS,
    payload: mockUserDetails,
  });

  expect(newState).toEqual(expectedState);
});

it("set state to initial stat upon receiving an action of type USER_UPDATE_PROFILE_RESET", async () => {
  const previousState: UserUpdateProfileState = {
    loading: true,
    error: null,
    userDetail: null,
    success: undefined,
  };

  const newState = userUpdateProfileReducer(previousState, {
    type: UserActionTypes.USER_UDPATE_PROFILE_RESET,
  });

  expect(newState).toEqual(userUpdateProfileInitialState);
});
