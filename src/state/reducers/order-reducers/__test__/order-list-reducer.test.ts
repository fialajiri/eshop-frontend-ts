import { orderListReducer, OrderListState } from "../order-list-reducer";
import { OrderActionTypes } from "../../../action-types/order-types";
import { mockOrder } from "../../../../mocks/mock-data/mock-orders";

it("set loading to true upon receiving an action of type ORDER_LIST_REQUEST", async () => {
  const previousState: OrderListState = {
    loading: false,
    error: null,
    orders: [],
  };
  const expectedState: OrderListState = {
    loading: true,
    error: null,
    orders: [],
  };

  const newState = orderListReducer(previousState, {
    type: OrderActionTypes.ORDER_LIST_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type ORDER_LIST_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: OrderListState = {
    loading: true,
    error: null,
    orders: [],
  };

  const expectedState: OrderListState = {
    loading: false,
    error: payload,
    orders: [],
  };

  const newState = orderListReducer(previousState, {
    type: OrderActionTypes.ORDER_LIST_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set orders  upon receiving an action of type ORDER_LIST_SUCCESS", async () => {
  const previousState: OrderListState = {
    loading: true,
    error: null,
    orders: [],
  };

  const expectedState: OrderListState = {
    loading: false,
    error: null,
    orders: [mockOrder],
  };

  const newState = orderListReducer(previousState, {
    type: OrderActionTypes.ORDER_LIST_SUCCESS,
    payload: [mockOrder],
  });

  expect(newState).toEqual(expectedState);
});
