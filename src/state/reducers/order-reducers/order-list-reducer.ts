import produce from "immer";
import { OrderActionTypes } from "../../action-types/order-types";
import { OrderAction } from "../../actions/order-actions";
import { OrderDoc } from "../../../interfaces/models";

export interface OrderListState {
  loading: boolean;
  error: string[] | null;
  orders: OrderDoc[];
}

export const orderListInitialState: OrderListState = {
  loading: false,
  error: null,
  orders: [],
};

export const orderListReducer = produce(
  (
    state: OrderListState = orderListInitialState,
    action: OrderAction
  ): OrderListState => {
    switch (action.type) {
      case OrderActionTypes.ORDER_LIST_REQUEST:
        state.loading = true;
        return state;
      case OrderActionTypes.ORDER_LIST_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case OrderActionTypes.ORDER_LIST_SUCCESS:
        state.loading = false;
        state.orders = action.payload;
        return state;
      default:
        return state;
    }
  },
  orderListInitialState
);
