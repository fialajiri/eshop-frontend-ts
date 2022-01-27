import axios from "axios";
import { OrderActionTypes } from "../../action-types/order-types";
import { OrderAction } from "../../actions/order-actions";
import { Dispatch } from "redux";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export const deliveredOrder = (orderId: string) => {
  return async (dispatch: Dispatch<OrderAction>) => {
    dispatch({ type: OrderActionTypes.ORDER_DELIVERED_REQUEST });

    try {
      await axios.put(
        `${process.env.BACKEND_URL}/api/orders/delivered/${orderId}`,
        AXIOS_CONFIG
      );

      dispatch({ type: OrderActionTypes.ORDER_DELIVERED_SUCCESS });
    } catch (err: any) {
      dispatch({ type: OrderActionTypes.ORDER_DELIVERED_ERROR, payload: err.message });
    }
  };
};
