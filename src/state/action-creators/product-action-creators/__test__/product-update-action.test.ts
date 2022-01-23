import { updateProduct, UpdateProductData } from "..";
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

const productData: UpdateProductData = {
  productId: "123",
  name: "P1",
  categories: [],
  description: "some good stuff",
  countInStock: 10,
  image: "image.jpg",
  price: 1000,
};

it("product update success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(updateProduct(productData));
  expect(store.getActions()).toEqual([
    { type: ProductActionTypes.PRODUCT_UPDATE_REQUEST },
    {
      type: ProductActionTypes.PRODUCT_UPDATE_SUCCESS,
      payload: mockProducts[0],
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(updateProduct(productData));
  expect(reduxTestStore.getState().productUpdate.product).toEqual(
    mockProducts[0]
  );
});

it("product update failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.put(`${process.env.BACKEND_URL}/api/products/*`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(updateProduct(productData));

  expect(store.getActions()).toEqual([
    { type: ProductActionTypes.PRODUCT_UPDATE_REQUEST },
    { type: ProductActionTypes.PRODUCT_UPDATE_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(updateProduct(productData));
  expect(reduxTestStore.getState().productUpdate.error).toEqual(payload);
});
