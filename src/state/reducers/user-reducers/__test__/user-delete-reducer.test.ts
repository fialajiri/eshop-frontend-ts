import { userDeleteReducer, UserDeleteState } from "../user-delete-reducer";
import { UserActionTypes } from "../../../action-types/user-types";

it("set loading to true upon receiving an action of type USER_DELETE_REQUEST", async () => {
  const previousState: UserDeleteState = {
    loading: false,
    success: false,
    error: null,
  };
  const expectedState: UserDeleteState = {
    loading: true,
    success: false,
    error: null,
  };

  const newState = userDeleteReducer(previousState, {
    type: UserActionTypes.USER_DELETE_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type USER_DELETE_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: UserDeleteState = {
    loading: true,
    success: false,
    error: null,
  };

  const expectedState: UserDeleteState = {
    loading: false,
    success: false,
    error: payload,
  };

  const newState = userDeleteReducer(previousState, {
    type: UserActionTypes.USER_DELETE_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set succes to true upon receiving an action of type USER_DELETE_SUCCESS", async () => {
  const previousState: UserDeleteState = {
    loading: true,
    success: false,
    error: null,
  };

  const expectedState: UserDeleteState = {
    loading: false,
    success: true,
    error: null,
  };

  const newState = userDeleteReducer(previousState, {
    type: UserActionTypes.USER_DELETE_SUCCESS,
  });

  expect(newState).toEqual(expectedState);
});
