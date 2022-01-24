import { register } from "../user-register-action";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { UserAction } from "../../../actions/user-actions";
import { UserActionTypes } from "../../../action-types/user-types";
import { reduxThunkTestStore } from "../../../../test-utils/testing-library-utils";
import { mockedUser } from "../../../../mocks/mock-data/mock-user";

const setupMockStore = () => {
  const initialState = {};
  type State = typeof initialState;
  const middlewares = [thunk];
  const mockStore = configureStore<
    State,
    ThunkDispatch<State, any, UserAction>
  >(middlewares);

  return mockStore(initialState);
};

it("register user success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(register("test@test.com", "123"));
  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_REGISTER_REQUEST },
    {
      type: UserActionTypes.USER_REGISTER_SUCCESS,
      payload: mockedUser,
    },
    {
      type: UserActionTypes.USER_LOGIN_SUCCESS,
      payload: mockedUser,
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(register("test@test.com", "123"));
  expect(reduxTestStore.getState().userRegister.user).toEqual(
    mockedUser
  );
});

it("user register failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.post(`${process.env.BACKEND_URL}/api/users/signup`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(register("test@test.com", "123"));

  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_REGISTER_REQUEST },
    { type: UserActionTypes.USER_REGISTER_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(register("test@test.com", "123"));
  expect(reduxTestStore.getState().userRegister.error).toEqual(payload);
});
