import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { getCart } from "../get-cart-action";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { reduxThunkTestStore } from "../../../../test-utils/testing-library-utils";
import { CartAction } from "../../../actions/cart-actions";
import { CartActionTypes } from "../../../action-types/cart-types";
import { mockCart } from "../../../../mocks/mock-data/mock-cart";

const setupMockStore = () => {
  const initialState = {};
  type State = typeof initialState;
  const middlewares = [thunk];
  const mockStore = configureStore<
    State,
    ThunkDispatch<State, any, CartAction>
  >(middlewares);
  const store = mockStore(initialState);

  return store;
};

it("load cart success", async () => {
  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(getCart())
  expect(store.getActions()).toEqual([
    { type: CartActionTypes.CART_REQUEST },
    { type: CartActionTypes.CART_UPDATE_SUCCESS, payload: mockCart },
  ]);
  // @ts-ignore
  await reduxTestStore.dispatch(getCart());
  expect(reduxTestStore.getState().cartState.cart).toEqual(mockCart);
});

it("load cart failed", async () => {
  const payload = "Request failed with status code 500";

  server.resetHandlers(
    rest.get(`${process.env.BACKEND_URL}/api/cart`, (req, res, ctx) =>
      res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  await store.dispatch(getCart());
  

  expect(store.getActions()).toEqual([
    { type: CartActionTypes.CART_REQUEST },
    { type: CartActionTypes.CART_ERROR, payload: payload },
  ]);

  

  // @ts-ignore
  await reduxTestStore.dispatch(getCart());
  expect(reduxTestStore.getState().cartState.error).toEqual(payload);
});
