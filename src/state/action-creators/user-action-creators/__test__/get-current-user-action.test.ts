import { getCurrentUser } from "../get-current-user-action";
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

it("current user success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(getCurrentUser());
  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_CURRENT_REQUEST },
    {
      type: UserActionTypes.USER_CURRENT_SUCCESS, payload: mockedUser
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(getCurrentUser());
  expect(reduxTestStore.getState().userCurrent.user).toEqual(mockedUser);
});

it("current user failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.get(`${process.env.BACKEND_URL}/api/users/currentuser`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(getCurrentUser());

  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_CURRENT_REQUEST },
    { type: UserActionTypes.USER_CURRENT_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(getCurrentUser());
  expect(reduxTestStore.getState().userCurrent.error).toEqual(payload);
});
