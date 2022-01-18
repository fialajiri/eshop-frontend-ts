import { UserActionTypes } from "../../../action-types/user-types";
import { UserAction } from "../../../actions/user-actions";
import {
  userLoginReducer,
  userLogininitialState,
  UserState,
} from "../user-login-reducer";

describe("testing userLoginReducer", () => {
  it("should return the initial state", async () => {
    //@ts-ignore
    expect(userLoginReducer(undefined, {})).toEqual(userLogininitialState);
  });

  it("should handle a user login request properly ", async () => {
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

    expect(
      userLoginReducer(previousState, {
        type: UserActionTypes.USER_LOGIN_REQUEST,
      })
    ).toEqual(expectedState);
  });

  it("should handler the error request properly", async () => {
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

    expect(
      userLoginReducer(previousState, {
        type: UserActionTypes.USER_LOGIN_ERROR,
        payload: ["Something went wrong", "Thats too bad"],
      })
    ).toEqual(expectedState);
  });

  it("on successfull login it should set the user state", async () => {
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

    expect(
      userLoginReducer(previousState, {
        type: UserActionTypes.USER_LOGIN_SUCCESS,
        payload: { id: "123456789", email: "test@test.com", isAdmin: true },
      })
    ).toEqual(expectedState);
  });
});
