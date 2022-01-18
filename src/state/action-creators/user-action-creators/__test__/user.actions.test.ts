import axios from "axios";

import { login } from "../user-login-action";
import { UserActionTypes } from "../../../action-types/user-types";

describe("userActions", () => {
  it("Login successfull, create USER_LOGIN_REQUEST and USER_LOGIN_SUCCESS", async () => {
    const expected = [
      { type: UserActionTypes.USER_LOGIN_REQUEST },
      { type: UserActionTypes.USER_LOGIN_SUCCESS, payload: [] },
    ];

    const mockedPost = jest
      .spyOn(axios, "post")
      .mockImplementation(() => Promise.resolve({ data: [] }));

    const dispatch = jest.fn();
    await login("test_user", "test@test.com")(dispatch);

    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  });
});
