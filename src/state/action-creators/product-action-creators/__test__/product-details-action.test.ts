import { productDetails } from "..";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { mockProducts } from "../../../../mocks/mock-data/mock-products";
import { ProductAction } from "../../../actions/product-actions";
import { ProductActionTypes } from "../../../action-types/product-types";
import { reduxThunkTestStore } from "../../../../test-utils/testing-library-utils";

const setupMockStore = () => {
  const initialState = {};
  type State = typeof initialState;
  const middlewares = [thunk];
  const mockStore = configureStore<
    State,
    ThunkDispatch<State, any, ProductAction>
  >(middlewares);

  return mockStore(initialState);
};

it("product details success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(productDetails(mockProducts[0].id));
  expect(store.getActions()).toEqual([
    { type: ProductActionTypes.PRODUCT_DETAILS_REQUEST },
    {
      type: ProductActionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: mockProducts[0],
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(productDetails('myCategory'));
  expect(reduxTestStore.getState().productDetails.product).toEqual(
    mockProducts[0]
  );
});

it("product details failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.get(`${process.env.BACKEND_URL}/api/products/${mockProducts[0].id}`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(productDetails('myCategory'));

  expect(store.getActions()).toEqual([
    { type: ProductActionTypes.PRODUCT_DETAILS_REQUEST},
    { type: ProductActionTypes.PRODUCT_DETAILS_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(productDetails('myCategory'));
  expect(reduxTestStore.getState().productDetails.error).toEqual(payload);
});