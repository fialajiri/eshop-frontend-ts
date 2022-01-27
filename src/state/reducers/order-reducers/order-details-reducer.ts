import produce from "immer";
import { OrderActionTypes } from "../../action-types/order-types";
import { OrderAction } from "../../actions/order-actions";
import { OrderDoc } from "../../../interfaces/models";

export interface OrderDetailsState {
  loading: boolean;
  error: string[] | null;
  orderDetail: OrderDoc | null;
}

export const orderDetailsInitialState: OrderDetailsState = {
  loading: false,
  error: null,
  orderDetail: null,
};

export const orderDetailsReducer = produce(
  (
    state: OrderDetailsState = orderDetailsInitialState,
    action: OrderAction
  ): OrderDetailsState => {
    switch (action.type) {
      case OrderActionTypes.ORDER_DETAILS_REQUEST:
        state.loading = true;
        return state;
      case OrderActionTypes.ORDER_DETAILS_ERROR:
        state.loading = false;
        state.error = action.payload;
        return state;
      case OrderActionTypes.ORDER_DETAILS_SUCCESS:
        state.loading = false;
        state.orderDetail = action.payload;
        return state;
      default:
        return state;
    }
  },
  orderDetailsInitialState
);
