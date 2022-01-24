import { deleteUser } from "../delete-user-action";
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

it("delete user success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(deleteUser("123"));
  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_DELETE_REQUEST },
    {
      type: UserActionTypes.USER_DELETE_SUCCESS,      
    },
    
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(deleteUser("123"));
  expect(reduxTestStore.getState().userDelete.success).toEqual(
    true
  );
});

it("delete user failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.delete(`${process.env.BACKEND_URL}/api/users/123`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(deleteUser( "123"));

  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_DELETE_REQUEST },
    { type: UserActionTypes.USER_DELETE_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(deleteUser( "123"));
  expect(reduxTestStore.getState().userDelete.error).toEqual(payload);
});