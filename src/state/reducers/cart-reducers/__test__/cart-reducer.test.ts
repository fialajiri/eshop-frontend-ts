import { cartReducer, cartInitailState, CartState } from "../cart-reducer";
import { CartActionTypes } from "../../../action-types/cart-types";
import { mockCart } from "../../../../mocks/mock-data/mock-cart";
import { CartDoc } from "../../../../interfaces/models";

it("set loading to true upon receiving an action of type GET_CART_REQUEST", async () => {
  const expectedState: CartState = {
    loading: true,
    error: null,
    cart: null,
  };

  const newState = cartReducer(cartInitailState, {
    type: CartActionTypes.CART_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type GET_CART_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: CartState = {
    loading: true,
    error: null,
    cart: null,
  };

  const expectedState: CartState = {
    loading: false,
    error: payload,
    cart: null,
  };

  const newState = cartReducer(cartInitailState, {
    type: CartActionTypes.CART_ERROR,
    payload: payload,
  });
  expect(newState).toEqual(expectedState);
});

it("set cart state upon receiving an action of type CART_UPDATE_SUCCESS", async () => {
  const payload: CartDoc = mockCart;

  const previousState: CartState = {
    loading: true,
    error: null,
    cart: null,
  };

  const expectedState: CartState = {
    loading: false,
    error: null,
    cart: payload,
  };

  const newState = cartReducer(cartInitailState, {
    type: CartActionTypes.CART_UPDATE_SUCCESS,
    payload: payload,
  });
  expect(newState).toEqual(expectedState);
});
