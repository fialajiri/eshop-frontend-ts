import produce from "immer";
import { OrderActionTypes } from "../../action-types/order-types";
import { OrderAction } from "../../actions/order-actions";
import { OrderDoc } from "../../../interfaces/models";

export interface OrderCreateState {
  loading: boolean;
  success: boolean | undefined;
  error: string[] | null;
  order: OrderDoc | null;
}

export const orderCreateInitialState: OrderCreateState = {
  loading: false,
  success: undefined,
  error: null,
  order: null,
};

export const orderCreateReducer = produce(
  (
    state: OrderCreateState = orderCreateInitialState,
    action: OrderAction
  ): OrderCreateState => {
    switch (action.type) {
      case OrderActionTypes.ORDER_CREATE_REQUEST:
        state.loading = true;
        return state;
      case OrderActionTypes.ORDER_CREATE_ERROR:
        state.loading = false;
        state.error = action.payload;
        state.success = false;
        return state;
      case OrderActionTypes.ORDER_CREATE_SUCCESS:
        state.loading = false;
        state.success = true;
        state.order = action.payload;
        return state;
      default:
        return state;
    }
  },
  orderCreateInitialState
);
