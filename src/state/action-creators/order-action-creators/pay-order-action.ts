import axios from "axios";
import { OrderActionTypes } from "../../action-types/order-types";
import { OrderAction } from "../../actions/order-actions";
import { Dispatch } from "redux";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export const payOrder = (orderId: string) => {
  return async (dispatch: Dispatch<OrderAction>) => {
    dispatch({ type: OrderActionTypes.ORDER_PAID_REQUEST });

    try {
      await axios.put(
        `${process.env.BACKEND_URL}/api/orders/pay/${orderId}`,
        AXIOS_CONFIG
      );

      dispatch({ type: OrderActionTypes.ORDER_PAID_SUCCESS });
    } catch (err: any) {
      dispatch({ type: OrderActionTypes.ORDER_PAID_ERROR, payload: err.message });
    }
  };
};
