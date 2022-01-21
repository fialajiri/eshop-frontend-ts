import { UserActionTypes } from "../../../action-types/user-types";
import {
  userLoginReducer,  
  UserState,
} from "../user-login-reducer";

describe("testing userLoginReducer", () => {
  it("return the previous state for unknown action type ", async () => {
    const previousState: UserState = {
      loading: true,
      error: null,
      user: null,
    };

    //@ts-ignore
    expect(userLoginReducer(previousState, { type: "unknown" })).toEqual(
      previousState
    );
  });

  it("set loading to true for action type USER_LOGIN_REQUEST ", async () => {
    const previousState: UserState = {
      loading: false,
      error: null,
      user: null,
    };

    const expectedState: UserState = {
      loading: true,
      error: null,
      user: null,
    };

    const newState = userLoginReducer(previousState, {
      type: UserActionTypes.USER_LOGIN_REQUEST,
    });

    expect(newState).toEqual(expectedState);
  });

  it("return correct payload for action type USER_LOGIN_ERROR", async () => {
    const previousState: UserState = {
      loading: true,
      error: null,
      user: null,
    };

    const expectedState: UserState = {
      loading: false,
      error: ["Something went wrong", "Thats too bad"],
      user: null,
    };

    const newState = userLoginReducer(previousState, {
      type: UserActionTypes.USER_LOGIN_ERROR,
      payload: ["Something went wrong", "Thats too bad"],
    });

    expect(newState).toEqual(expectedState);
  });

  it("return correct payload for action type USER_LOGIN_SUCCESS", async () => {
    const previousState: UserState = {
      loading: true,
      error: null,
      user: null,
    };

    const expectedState: UserState = {
      loading: false,
      error: null,
      user: { id: "123456789", email: "test@test.com", isAdmin: true },
    };

    const newState = userLoginReducer(previousState, {
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: { id: "123456789", email: "test@test.com", isAdmin: true },
    });

    expect(newState).toEqual(expectedState);
  });
});
