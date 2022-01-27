import { createProduct, CreateProductData, UpdateProductData } from "..";
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

const productData: CreateProductData = {
  name: "P1",
  categories: [],
  description: "some good stuff",
  countInStock: 10,
  //@ts-ignore
  images: ["image.jpg"] ,
  price: 1000,
};

it("create product success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(createProduct(productData));
  expect(store.getActions()).toEqual([
    { type: ProductActionTypes.PRODUCT_CREATE_REQUEST },
    {
      type: ProductActionTypes.PRODUCT_CREATE_SUCCESS,
      payload: mockProducts[0],
    },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(createProduct(productData));
  expect(reduxTestStore.getState().productCreate.product).toEqual(
    mockProducts[0]
  );
});

it("create product failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.post(`${process.env.BACKEND_URL}/api/products`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(createProduct(productData));

  expect(store.getActions()).toEqual([
    { type: ProductActionTypes.PRODUCT_CREATE_REQUEST },
    { type: ProductActionTypes.PRODUCT_CREATE_ERROR, payload: payload },
  ]);

  // @ts-ignore
  await reduxTestStore.dispatch(createProduct(productData));  
  expect(reduxTestStore.getState().productCreate.error).toEqual(payload);
});
