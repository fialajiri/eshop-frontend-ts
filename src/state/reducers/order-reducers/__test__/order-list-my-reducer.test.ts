import { orderListMyReducer, OrderListMyState } from "../order-list-my-reducer";
import { OrderActionTypes } from "../../../action-types/order-types";
import { mockOrder } from "../../../../mocks/mock-data/mock-orders";

it("set loading to true upon receiving an action of type ORDER_LIST_MY_REQUEST", async () => {
  const previousState: OrderListMyState = {
    loading: false,
    error: null,
    orders: [],
  };
  const expectedState: OrderListMyState = {
    loading: true,
    error: null,
    orders: [],
  };

  const newState = orderListMyReducer(previousState, {
    type: OrderActionTypes.ORDER_LIST_MY_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type ORDER_LIST_MY_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: OrderListMyState = {
    loading: true,
    error: null,
    orders: [],
  };

  const expectedState: OrderListMyState = {
    loading: false,
    error: payload,
    orders: [],
  };

  const newState = orderListMyReducer(previousState, {
    type: OrderActionTypes.ORDER_LIST_MY_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set orders  upon receiving an action of type ORDER_LIST_MY_SUCCESS", async () => {
  const previousState: OrderListMyState = {
    loading: true,
    error: null,
    orders: [],
  };

  const expectedState: OrderListMyState = {
    loading: false,
    error: null,
    orders: [mockOrder],
  };

  const newState = orderListMyReducer(previousState, {
    type: OrderActionTypes.ORDER_LIST_MY_SUCCESS,
    payload: [mockOrder],
  });

  expect(newState).toEqual(expectedState);
});
