import { orderDetailsReducer, OrderDetailsState } from "../order-details-reducer";
import { OrderActionTypes } from "../../../action-types/order-types";
import { mockOrder } from "../../../../mocks/mock-data/mock-orders";

it("set loading to true upon receiving an action of type ORDER_DETAILS_REQUEST", async () => {
  const previousState: OrderDetailsState = {
    loading: false,
    error: null,
    orderDetail: null,
  };
  const expectedState: OrderDetailsState = {
    loading: true,
    error: null,
    orderDetail: null,
  };

  const newState = orderDetailsReducer(previousState, {
    type: OrderActionTypes.ORDER_DETAILS_REQUEST,
  });
  expect(newState).toEqual(expectedState);
});

it("set an error upon receiving an action of type ORDER_DETAILS_ERROR", async () => {
  const payload = ["Internal server error"];
  const previousState: OrderDetailsState = {
    loading: true,
    error: null,
    orderDetail: null,
  };

  const expectedState: OrderDetailsState = {
    loading: false,
    error: payload,
    orderDetail: null,
  };

  const newState = orderDetailsReducer(previousState, {
    type: OrderActionTypes.ORDER_DETAILS_ERROR,
    payload,
  });

  expect(newState).toEqual(expectedState);
});

it("set order  upon receiving an action of type ORDER_DETAILS_SUCCESS", async () => {
  const previousState: OrderDetailsState = {
    loading: true,
    error: null,
    orderDetail: null,
  };

  const expectedState: OrderDetailsState = {
    loading: false,
    error: null,
    orderDetail: mockOrder,
  };

  const newState = orderDetailsReducer(previousState, {
    type: OrderActionTypes.ORDER_DETAILS_SUCCESS,
    payload: mockOrder,
  });

  expect(newState).toEqual(expectedState);
});
