import {
  orderDeliveredInitialState,
  orderDeliveredReducer,
  OrderDeliveredState,
} from "../order-deliverd-reducer";
import { OrderActionTypes } from "../../../action-types/order-types";

it("set loading to true upon receiving an action of type ORDER_DELIVERED_REQUEST", async () => {
  const previousState: OrderDeliveredState = {
    loading: false,
    error: null,
    success: undefined,
  };
  const expectedState: OrderDeliveredState = {
    loading: true,
    error: null,
    success: undefined,
  };

  const newState = orderDeliveredReducer(previousState, {
    type: OrderActionTypes.ORDER_DELIVERED_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type ORDER_DELIVERED_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: OrderDeliveredState = {
    loading: true,
    error: null,
    success: undefined,
  };

  const expectedState: OrderDeliveredState = {
    loading: false,
    error: payload,
    success: false,
  };

  const newState = orderDeliveredReducer(previousState, {
    type: OrderActionTypes.ORDER_DELIVERED_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set order  upon receiving an action of type ORDER_DELIVERED_SUCCESS", async () => {
  const previousState: OrderDeliveredState = {
    loading: true,
    error: null,
    success: undefined,
  };

  const expectedState: OrderDeliveredState = {
    loading: false,
    error: null,
    success: true,
  };

  const newState = orderDeliveredReducer(previousState, {
    type: OrderActionTypes.ORDER_DELIVERED_SUCCESS,
  });

  expect(newState).toEqual(expectedState);
});

it("set state to initial state  upon receiving an action of type ORDER_DELIVERED_RESET", async () => {
  const previousState: OrderDeliveredState = {
    loading: true,
    error: null,
    success: undefined,
  };

  const newState = orderDeliveredReducer(previousState, {
    type: OrderActionTypes.ORDER_DELIVERED_RESET,
  });

  expect(newState).toEqual(orderDeliveredInitialState);
});
