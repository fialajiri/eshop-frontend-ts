import { deleteCategory } from "..";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { CategoryAction } from "../../../actions/category-actions";
import { mockCategories } from "../../../../mocks/mock-data/mock-categories";
import { reduxThunkTestStore } from "../../../../test-utils/testing-library-utils";
import { CategoryActionTypes } from "../../../action-types/category-types";

const setupMockStore = () => {
  const initialState = {};
  type State = typeof initialState;
  const middlewares = [thunk];
  const mockStore = configureStore<
    State,
    ThunkDispatch<State, any, CategoryAction>
  >(middlewares);

  return mockStore(initialState);
};

it("delete category success", async () => {
  const store = setupMockStore();

  await store.dispatch(deleteCategory(mockCategories[0].id));
  expect(store.getActions()).toEqual([
    { type: CategoryActionTypes.CATEGORY_DELETE_REQUEST },
    {
      type: CategoryActionTypes.CATEGORY_DELETE_SUCCESS,
    },
  ]);
});

it("delete category failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.delete(`${process.env.BACKEND_URL}/api/categories/${mockCategories[0].id}`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();

  await store.dispatch(deleteCategory(mockCategories[0].id));

  expect(store.getActions()).toEqual([
    { type: CategoryActionTypes.CATEGORY_DELETE_REQUEST },
    { type: CategoryActionTypes.CATEGORY_DELETE_ERROR, payload: payload },
  ]);
});
