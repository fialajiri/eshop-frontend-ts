import { userListReducer, UserListState } from "../user-list-reducer";
import { mockUsers } from "../../../../mocks/mock-data/mock-user";
import { UserActionTypes } from "../../../action-types/user-types";

it("set loading to true upon receiving an action of type USER_LIST_REQUEST", async () => {
  const previousState: UserListState = {
    loading: false,
    users: [],
    error: null,
  };
  const expectedState: UserListState = {
    loading: true,
    users: [],
    error: null,
  };

  const newState = userListReducer(previousState, {
    type: UserActionTypes.USER_LIST_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type USER_LIST_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: UserListState = {
    loading: true,
    users: [],
    error: null,
  };

  const expectedState: UserListState = {
    loading: false,
    users: [],
    error: payload,
  };

  const newState = userListReducer(previousState, {
    type: UserActionTypes.USER_LIST_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set users upon receiving an action of type USERLIST_SUCCESS", async () => {
  const previousState: UserListState = {
    loading: true,
    users: [],
    error: null,
  };

  const expectedState: UserListState = {
    loading: false,
    users: mockUsers,
    error: null,
  };

  const newState = userListReducer(previousState, {
    type: UserActionTypes.USER_LIST_SUCCESS,
    payload: mockUsers,
  });

  expect(newState).toEqual(expectedState);
});
