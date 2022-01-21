import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { addToCart } from "../add-to-cart-action";
import { getCart } from "../get-cart-action";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
import { reduxThunkTestStore } from "../../../../test-utils/testing-library-utils";
import { CartAction } from "../../../actions/cart-actions";
import { CartActionTypes } from "../../../action-types/cart-types";
import { mockCart } from "../../../../mocks/mock-data/mock-cart";

const setupMockStore = () => {
  const initialState = {
    cartState: {
      cart: {
        id: "123",
      },
    },
  };
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
  const productId = "123456";

  // @ts-ignore
  await store.dispatch(addToCart(productId, 4));
  expect(store.getActions()).toEqual([
    { type: CartActionTypes.CART_REQUEST },
    { type: CartActionTypes.CART_UPDATE_SUCCESS, payload: mockCart },
  ]);
  //   @ts-ignore
  await reduxTestStore.dispatch(getCart());

  //   @ts-ignore
  await reduxTestStore.dispatch(addToCart(productId, 4));
  expect(reduxTestStore.getState().cartState.cart).toEqual(mockCart);
});

it("load cart failed", async () => {
  const payload = "Request failed with status code 500";
  const productId = "123456";

  server.resetHandlers(
    rest.put(
      `${process.env.BACKEND_URL}/api/cart/addtocart/${mockCart.id}`,
      (req, res, ctx) => res(ctx.status(500))
    )
  );

  const store = setupMockStore();
  const { reduxThunkTester, reduxTestStore } = reduxThunkTestStore();

  //   @ts-ignore
  await store.dispatch(addToCart(productId, 4));

  expect(store.getActions()).toEqual([
    { type: CartActionTypes.CART_REQUEST },
    { type: CartActionTypes.CART_ERROR, payload: payload },
  ]);
});
