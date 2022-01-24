import { logout } from "../user-logout-action";
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

it("user logout success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(logout());
  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_LOGIN_LOGOUT },
    {
      type: UserActionTypes.USER_CURRENT_RESET,
    },
    {
      type: UserActionTypes.USER_DETAILS_RESET,
    },
    {
      type: UserActionTypes.USER_UDPATE_PROFILE_RESET,
    },
    {
      type: UserActionTypes.USER_LIST_RESET,
    },
  ]);
});
