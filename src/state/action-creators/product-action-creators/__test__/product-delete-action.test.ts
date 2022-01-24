import { deleteProduct } from "..";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { mockProducts } from "../../../../mocks/mock-data/mock-products";
import { ProductAction } from "../../../actions/product-actions";
import { ProductActionTypes } from "../../../action-types/product-types";


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

it("delete product success", async () => {
  const store = setupMockStore();

  await store.dispatch(deleteProduct(mockProducts[0].id));
  expect(store.getActions()).toEqual([
    { type: ProductActionTypes.PRODUCT_DELETE_REQUEST },
    {
      type: ProductActionTypes.PRODUCT_DELETE_SUCCESS,
    },
  ]);
});

it("delete product failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.delete(
      `${process.env.BACKEND_URL}/api/products/${mockProducts[0].id}`,
      (req, res, ctx) => res(ctx.status(500))
    )
  );

  const store = setupMockStore();

  await store.dispatch(deleteProduct(mockProducts[0].id));
  

  expect(store.getActions()).toEqual([
    { type: ProductActionTypes.PRODUCT_DELETE_REQUEST },
    { type: ProductActionTypes.PRODUCT_DELETE_ERROR, payload: payload },
  ]);
});
