import { orderCreateReducer, OrderCreateState } from "../order-create-reducer";
import { OrderActionTypes } from "../../../action-types/order-types";
import { mockOrder } from "../../../../mocks/mock-data/mock-orders";


it("set loading to true upon receiving an action of type ORDER_CREATE_REQUEST", async () => {
  const previousState: OrderCreateState = {
    loading: false,    
    error: null,
    order: null,
    success: undefined
  };
  const expectedState: OrderCreateState = {
    loading: true,
    error: null,
    order: null,
    success: undefined
  };

  const newState = orderCreateReducer(previousState, {
    type: OrderActionTypes.ORDER_CREATE_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type ORDER_CREATE_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: OrderCreateState = {
    loading: true,
    error: null,
    order: null,
    success: undefined
  };

  const expectedState: OrderCreateState = {
    loading: false,
    error: payload,
    order: null,
    success: false
  };

  const newState = orderCreateReducer(previousState, {
    type: OrderActionTypes.ORDER_CREATE_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set order  upon receiving an action of type ORDER_CREATE_SUCCESS", async () => {
  const previousState: OrderCreateState = {
    loading: true,
    error: null,
    order: null,
    success: undefined
  };

  const expectedState: OrderCreateState = {
    loading: false,
    error: null,
    order: mockOrder,
    success: true
  };

  const newState = orderCreateReducer(previousState, {
    type: OrderActionTypes.ORDER_CREATE_SUCCESS,
    payload: mockOrder,
  });

  expect(newState).toEqual(expectedState);
});
