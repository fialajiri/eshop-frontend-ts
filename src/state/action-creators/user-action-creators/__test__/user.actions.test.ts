import { login } from "../user-login-action";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { UserAction } from "../../../actions/user-actions";
import { mockedUser } from "../../../../mocks/mock-data/mock-user";
import { UserActionTypes } from "../../../action-types/user-types";

const setup = () => {
  const initialState = {};
  type State = typeof initialState;
  const middlewares = [thunk];
  const mockStore = configureStore<
    State,
    ThunkDispatch<State, any, UserAction>
  >(middlewares);
  const store = mockStore(initialState);

  return store;
};

describe("user actions creators", () => {
  it("load current user success", async () => {
    const store = setup();

    await store.dispatch(login("test@test.com", "123456"));

    expect(store.getActions()).toEqual([
      { type: UserActionTypes.USER_LOGIN_REQUEST },
      { type: UserActionTypes.USER_LOGIN_SUCCESS, payload: mockedUser },
    ]);
  });

  it("load current user failed", async () => {
    const store = setup();
    const payload = "Request failed with status code 500";

    // override default msw response for options endpoint with error response
    server.resetHandlers(
      rest.post("http://localhost:5000/api/users/signin", (req, res, ctx) =>
        res(ctx.status(500))
      )
    );

    await store.dispatch(login("test@test.com", "123456"));

    expect(store.getActions()).toEqual([
      { type: UserActionTypes.USER_LOGIN_REQUEST },
      { type: UserActionTypes.USER_LOGIN_ERROR, payload: payload },
    ]);
  });
});
