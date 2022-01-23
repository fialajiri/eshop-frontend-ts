import { listCategories } from "..";
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

it("load categories success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(listCategories());
  expect(store.getActions()).toEqual([
    { type: CategoryActionTypes.CATEGORY_LIST_REQUEST },
    {
      type: CategoryActionTypes.CATEGORY_LIST_SUCCESS,
      payload: mockCategories,
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(listCategories());
  expect(reduxTestStore.getState().categoryList.categories).toEqual(
    mockCategories
  );
});

it("load categories failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.get(`${process.env.BACKEND_URL}/api/categories`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(listCategories());

  expect(store.getActions()).toEqual([
    { type: CategoryActionTypes.CATEGORY_LIST_REQUEST },
    { type: CategoryActionTypes.CATEGORY_LIST_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(listCategories());
  expect(reduxTestStore.getState().categoryList.error).toEqual(payload);
});
