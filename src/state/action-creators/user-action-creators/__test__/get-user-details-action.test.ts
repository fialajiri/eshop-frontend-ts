import { getUserDetails } from "../get-user-details-action";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { UserAction } from "../../../actions/user-actions";
import { UserActionTypes } from "../../../action-types/user-types";
import { reduxThunkTestStore } from "../../../../test-utils/testing-library-utils";
import { mockedUser, mockUserDetails } from "../../../../mocks/mock-data/mock-user";

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

it("user details success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(getUserDetails("123"));
  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_DETAILS_REQUEST },
    {
      type: UserActionTypes.USER_DETAILS_SUCCESS, payload: mockUserDetails
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(getUserDetails("123"));
  expect(reduxTestStore.getState().userDetails.userDetail).toEqual(mockUserDetails);
});

it("user details failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.get(`${process.env.BACKEND_URL}/api/users/*`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(getUserDetails("123"));

  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_DETAILS_REQUEST },
    { type: UserActionTypes.USER_DETAILS_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(getUserDetails("123"));  
  expect(reduxTestStore.getState().userDetails.error).toEqual(payload);
});
