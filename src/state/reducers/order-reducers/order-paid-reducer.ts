import produce from "immer";
import { OrderActionTypes } from "../../action-types/order-types";
import { OrderAction } from "../../actions/order-actions";

export interface OrderPaidState {
  loading: boolean;
  error: string[] | null;
  success: boolean | undefined;
}

export const orderPaidInitialState: OrderPaidState = {
  loading: false,
  error: null,
  success: undefined,
};

export const orderPaidReducer = produce(
  (
    state: OrderPaidState = orderPaidInitialState,
    action: OrderAction
  ): OrderPaidState => {
    switch (action.type) {
      case OrderActionTypes.ORDER_PAID_REQUEST:
        state.loading = true;
        return state;
      case OrderActionTypes.ORDER_PAID_ERROR:
        state.loading = false;
        state.success = false;
        state.error = action.payload;
        return state;
      case OrderActionTypes.ORDER_PAID_SUCCESS:
        state.loading = false;
        state.success = true;
        return state;
      case OrderActionTypes.ORDER_PAID_RESET:
        return orderPaidInitialState;
      default:
        return state;
    }
  },
  orderPaidInitialState
);