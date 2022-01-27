import axios from "axios";
import { OrderActionTypes } from "../../action-types/order-types";
import { OrderAction } from "../../actions/order-actions";
import { OrderDoc } from "../../../interfaces/models";
import { Dispatch } from "redux";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";

export const listOrders = () => {
  return async (dispatch: Dispatch<OrderAction>) => {
    dispatch({ type: OrderActionTypes.ORDER_LIST_REQUEST });

    try {
      const { data: orders }: { data: OrderDoc[] } = await axios.get(
        `${process.env.BACKEND_URL}/api/orders`,
        AXIOS_CONFIG
      );
      dispatch({ type: OrderActionTypes.ORDER_LIST_SUCCESS, payload: orders });
    } catch (err: any) {
      dispatch({ type: OrderActionTypes.ORDER_LIST_ERROR, payload: err.message });
    }
  };
};
