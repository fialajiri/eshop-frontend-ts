import { userUpdateData, updateUser } from "../update-user-action";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { UserAction } from "../../../actions/user-actions";
import { UserActionTypes } from "../../../action-types/user-types";

import { mockUserDetails } from "../../../../mocks/mock-data/mock-user";

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

const mockedData: userUpdateData = {
  id : "123",
  firstName: "John",
  lastName: "Rambo",
};

it("user update success", async () => {
  const store = setupMockStore();

   await store.dispatch(updateUser(mockedData));
  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_UPDATE_REQUEST },
    {
      type: UserActionTypes.USER_UPDATE_SUCCESS,     
    },
  ]);
});

it("user update failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.put(
      `${process.env.BACKEND_URL}/api/users/*`,
      (req, res, ctx) => res(ctx.status(500))
    )
  );

  const store = setupMockStore();  
  await store.dispatch(updateUser(mockedData));

  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_UPDATE_REQUEST },
    { type: UserActionTypes.USER_UPDATE_ERROR, payload: payload },
  ]);
});
