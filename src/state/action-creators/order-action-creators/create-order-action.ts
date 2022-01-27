import axios from "axios";
import { OrderActionTypes } from "../../action-types/order-types";
import { OrderAction } from "../../actions/order-actions";
import { AddressDoc, OrderDoc } from "../../../interfaces/models";
import { Dispatch } from "redux";
import { AXIOS_CONFIG } from "../../../interfaces/axios-config";
import { PaymentMethods } from "../../../interfaces/payment-methods-enum";

export interface CreateOrderData {
  cartId: string;
  address: AddressDoc;
  paymentMethod: PaymentMethods;
  shippingPrice: number;
}

export const createOrder = (inputs: CreateOrderData) => {
  return async (dispatch: Dispatch<OrderAction>) => {
    dispatch({ type: OrderActionTypes.ORDER_CREATE_REQUEST });

    try {
      const { data: order }: { data: OrderDoc } = await axios.post(
        `${process.env.BACKEND_URL}/api/orders`,
        { ...inputs },
        AXIOS_CONFIG
      );

      dispatch({ type: OrderActionTypes.ORDER_CREATE_SUCCESS, payload: order });
    } catch (err: any) {
      dispatch({ type: OrderActionTypes.ORDER_CREATE_ERROR, payload: err.message });
    }
  };
};
