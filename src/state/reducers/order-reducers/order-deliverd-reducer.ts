import produce from "immer";
import { OrderActionTypes } from "../../action-types/order-types";
import { OrderAction } from "../../actions/order-actions";

export interface OrderDeliveredState {
  loading: boolean;
  error: string[] | null;
  success: boolean | undefined;
}

export const orderDeliveredInitialState: OrderDeliveredState = {
  loading: false,
  error: null,
  success: undefined,
};

export const orderDeliveredReducer = produce(
  (
    state: OrderDeliveredState = orderDeliveredInitialState,
    action: OrderAction
  ): OrderDeliveredState => {
    switch (action.type) {
      case OrderActionTypes.ORDER_DELIVERED_REQUEST:
        state.loading = true;
        return state;
      case OrderActionTypes.ORDER_DELIVERED_ERROR:
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        return state;
      case OrderActionTypes.ORDER_DELIVERED_SUCCESS:
        state.loading = false;
        state.success = true;
        return state;
      case OrderActionTypes.ORDER_DELIVERED_RESET:
        return orderDeliveredInitialState;
      default:
        return state;
    }
  },
  orderDeliveredInitialState
);
