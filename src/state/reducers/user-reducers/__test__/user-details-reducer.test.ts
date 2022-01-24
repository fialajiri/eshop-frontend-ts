import { mockUserDetails } from "../../../../mocks/mock-data/mock-user";
import {
  userDetailsInitialState,
  userDetailsReducer,
  UserDetailsState,
} from "../user-details-reducer";
import { UserActionTypes } from "../../../action-types/user-types";
import { UserState } from "../user-login-reducer";

it("set loading to true upon receiving an action of type USER_DETAILS_REQUEST", async () => {
  const previousState: UserDetailsState = {
    loading: false,
    error: null,
    userDetail: null,
  };
  const expectedState: UserDetailsState = {
    loading: true,
    error: null,
    userDetail: null,
  };

  const newState = userDetailsReducer(previousState, {
    type: UserActionTypes.USER_DETAILS_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type USER_DETAILS__ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: UserDetailsState = {
    loading: true,
    error: null,
    userDetail: null,
  };

  const expectedState: UserDetailsState = {
    loading: false,
    error: payload,
    userDetail: null,
  };

  const newState = userDetailsReducer(previousState, {
    type: UserActionTypes.USER_DETAILS_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set user upon receiving an action of type USER_DETAILS_SUCCESS", async () => {
  const payload = mockUserDetails;
  const previousState: UserDetailsState = {
    loading: true,
    error: null,
    userDetail: null,
  };

  const expectedState: UserDetailsState = {
    loading: false,
    error: null,
    userDetail: payload,
  };

  const newState = userDetailsReducer(previousState, {
    type: UserActionTypes.USER_DETAILS_SUCCESS,
    payload: mockUserDetails,
  });

  expect(newState).toEqual(expectedState);
});

it("set state to initial state receiving an action of type USER_DETAILS_RESET", async () => {
  const previousState: UserDetailsState = {
    loading: true,
    userDetail: mockUserDetails,
    error: null,
  };

  const newState = userDetailsReducer(previousState, {
    type: UserActionTypes.USER_DETAILS_RESET,
  });

  expect(newState).toEqual(userDetailsInitialState);
});
