import axios from "axios";
import { OrderActionTypes } from "../../action-types/order-types";
import { OrderAction } from "../../actions/order-actions";
import { OrderDoc } from "../../../interfaces/models";
import { Dispatch } from "redux";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export const getOrderDetails = (orderId: string) => {
  return async (dispatch: Dispatch<OrderAction>) => {
    dispatch({ type: OrderActionTypes.ORDER_DETAILS_REQUEST });

    try {
      const { data: orderDetail }: { data: OrderDoc } = await axios.get(
        `${process.env.BACKEND_URL}/api/orders/${orderId}`,
        AXIOS_CONFIG
      );

      dispatch({ type: OrderActionTypes.ORDER_DETAILS_SUCCESS, payload: orderDetail });
    } catch (err: any) {
      dispatch({ type: OrderActionTypes.ORDER_DETAILS_ERROR, payload: err.message });
    }
  };
};
