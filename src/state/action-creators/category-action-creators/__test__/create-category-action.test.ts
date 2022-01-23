import { createCategory } from "..";
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

it("create category success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(createCategory('myCategory'));
  expect(store.getActions()).toEqual([
    { type: CategoryActionTypes.CATEGORY_CREATE_REQUEST },
    {
      type: CategoryActionTypes.CATEGORY_CREATE_SUCCESS,
      payload: mockCategories[0],
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(createCategory('myCategory'));
  expect(reduxTestStore.getState().createCategory.category).toEqual(
    mockCategories[0]
  );
});

it("delete category failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.post(`${process.env.BACKEND_URL}/api/categories`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(createCategory('myCategory'));

  expect(store.getActions()).toEqual([
    { type: CategoryActionTypes.CATEGORY_CREATE_REQUEST },
    { type: CategoryActionTypes.CATEGORY_CREATE_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(createCategory('myCategory'));
  expect(reduxTestStore.getState().createCategory.error).toEqual(payload);
});