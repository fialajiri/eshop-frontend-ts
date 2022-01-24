import {
  userUpdateProfile,
  userUpdateProfileData,
} from "../update-user-profile-action";
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

const mockedData: userUpdateProfileData = {
  firstName: "John",
  lastName: "Rambo",
};

it("register user success", async () => {
  const store = setupMockStore();

  //@ts-ignore
  await store.dispatch(userUpdateProfile(mockedData));
  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_UPDATE_PROFILE_REQUEST },
    {
      type: UserActionTypes.USER_UPDATE_PROFILE_SUCCESS,
      payload: mockUserDetails,
    },
   
  ]);
});

it("user register failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.post(`${process.env.BACKEND_URL}/api/users/updateprofile`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
//@ts-ignore
  await store.dispatch(userUpdateProfile(mockedData));

  expect(store.getActions()).toEqual([
    { type: UserActionTypes.USER_UPDATE_PROFILE_REQUEST },
    { type: UserActionTypes.USER_UPDATE_PROFILE_ERROR, payload: payload },
  ]);
});
