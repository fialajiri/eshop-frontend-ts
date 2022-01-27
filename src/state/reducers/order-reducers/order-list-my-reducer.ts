import produce from "immer";
import { OrderActionTypes } from "../../action-types/order-types";
import { OrderAction } from "../../actions/order-actions";
import { OrderDoc } from "../../../interfaces/models";

export interface OrderListMyState {
  loading: boolean;
  error: string[] | null;
  orders: OrderDoc[];
}

export const orderListMyInitialState: OrderListMyState = {
  loading: false,
  error: null,
  orders: [],
};

export const orderListMyReducer = produce(
  (
    state: OrderListMyState = orderListMyInitialState,
    action: OrderAction
  ): OrderListMyState => {
    switch (action.type) {
      case OrderActionTypes.ORDER_LIST_MY_REQUEST:
        state.loading = true;
        return state;
      case OrderActionTypes.ORDER_LIST_MY_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case OrderActionTypes.ORDER_LIST_MY_SUCCESS:
        state.loading = false;
        state.orders = action.payload;
        return state;
      case OrderActionTypes.ORDER_LIST_MY_RESET:
        return orderListMyInitialState;
      default:
        return state;
    }
  },
  orderListMyInitialState
);
