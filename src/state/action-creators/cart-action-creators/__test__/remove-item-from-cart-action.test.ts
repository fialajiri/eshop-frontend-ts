import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { removeItemFromCart } from "..";
import { rest } from "msw";
import { server } from "../../../../mocks/server";
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

it("load cart succes", async () => {
  const store = setupMockStore();
  const productId = "123456";

  // @ts-ignore
  await store.dispatch(removeItemFromCart(productId));
  expect(store.getActions()).toEqual([
    { type: CartActionTypes.CART_REQUEST },
    { type: CartActionTypes.CART_UPDATE_SUCCESS, payload: mockCart },
  ]);
});

it("load cart failed", async () => {
  const payload = "Request failed with status code 500";
  const productId = "123456";

  server.resetHandlers(
    rest.put(
      `${process.env.BACKEND_URL}/api/cart/removefromcart/${mockCart.id}`,
      (req, res, ctx) => res(ctx.status(500))
    )
  );

  const store = setupMockStore();

  //   @ts-ignore
  await store.dispatch(removeItemFromCart(productId));

  expect(store.getActions()).toEqual([
    { type: CartActionTypes.CART_REQUEST },
    { type: CartActionTypes.CART_ERROR, payload: payload },
  ]);
});
