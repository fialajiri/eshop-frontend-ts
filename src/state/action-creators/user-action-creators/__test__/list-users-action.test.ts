import { listUsers } from "../list-users-action";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { UserAction } from "../../../actions/user-actions";
import { UserActionTypes } from "../../../action-types/user-types";
import { reduxThunkTestStore } from "../../../../test-utils/testing-library-utils";
import { mockUsers } from "../../../../mocks/mock-data/mock-user";

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

it("list users success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(listUsers());
  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_LIST_REQUEST },
    {
      type: UserActionTypes.USER_LIST_SUCCESS, payload: mockUsers
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(listUsers());
  expect(reduxTestStore.getState().userList.users).toEqual(mockUsers);
});

it("list users failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.get(`${process.env.BACKEND_URL}/api/users/getallusers`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(listUsers());

  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_LIST_REQUEST },
    { type: UserActionTypes.USER_LIST_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(listUsers());  
  expect(reduxTestStore.getState().userList.error).toEqual(payload);
});