import { OrderActionTypes } from "../action-types/order-types";
import { OrderDoc } from "../../interfaces/models";

export interface OrderCreateRequestAction {
  type: OrderActionTypes.ORDER_CREATE_REQUEST;
}

export interface OrderCreateErrorAction {
  type: OrderActionTypes.ORDER_CREATE_ERROR;
  payload: string[];
}

export interface OrderCreateSuccessAction {
  type: OrderActionTypes.ORDER_CREATE_SUCCESS;
  payload: OrderDoc;
}

export interface OrderDetailsRequestAction {
  type: OrderActionTypes.ORDER_DETAILS_REQUEST;
}

export interface OrderDetailsErrorAction {
  type: OrderActionTypes.ORDER_DETAILS_ERROR;
  payload: string[];
}

export interface OrderDetailsSuccessAction {
  type: OrderActionTypes.ORDER_DETAILS_SUCCESS;
  payload: OrderDoc;
}

export interface OrderPaidRequestAction {
  type: OrderActionTypes.ORDER_PAID_REQUEST;
}

export interface OrderPaidErrorAction {
  type: OrderActionTypes.ORDER_PAID_ERROR;
  payload: string[];
}

export interface OrderPaidSuccessAction {
  type: OrderActionTypes.ORDER_PAID_SUCCESS;
}

export interface OrderPaidResetAction {
  type: OrderActionTypes.ORDER_PAID_RESET;
}

export interface OrderListMyOrdersRequestAction {
  type: OrderActionTypes.ORDER_LIST_MY_REQUEST;
}

export interface OrderListMyOrdersErrorAction {
  type: OrderActionTypes.ORDER_LIST_MY_ERROR;
  payload: string[];
}

export interface OrderListMyOrdersSuccessAction {
  type: OrderActionTypes.ORDER_LIST_MY_SUCCESS;
  payload: OrderDoc[];
}

export interface OrderListMyOrdersResetAction {
  type: OrderActionTypes.ORDER_LIST_MY_RESET;
}

export interface OrderListRequestAction {
  type: OrderActionTypes.ORDER_LIST_REQUEST;
}

export interface OrderListErrorAction {
  type: OrderActionTypes.ORDER_LIST_ERROR;
  payload: string[];
}

export interface OrderListSuccessAction {
  type: OrderActionTypes.ORDER_LIST_SUCCESS;
  payload: OrderDoc[];
}

export interface OrderDeliveredRequestAction {
  type: OrderActionTypes.ORDER_DELIVERED_REQUEST;
}

export interface OrderDeliveredErrorAction {
  type: OrderActionTypes.ORDER_DELIVERED_ERROR;
  payload: string[];
}

export interface OrderDeliveredSuccessAction {
  type: OrderActionTypes.ORDER_DELIVERED_SUCCESS;
}

export interface OrderDeliveredResetAction {
  type: OrderActionTypes.ORDER_DELIVERED_RESET;
}

export type OrderAction =
  | OrderCreateRequestAction
  | OrderCreateErrorAction
  | OrderCreateSuccessAction
  | OrderDetailsRequestAction
  | OrderDetailsErrorAction
  | OrderDetailsSuccessAction
  | OrderPaidRequestAction
  | OrderPaidErrorAction
  | OrderPaidSuccessAction
  | OrderPaidResetAction
  | OrderListMyOrdersRequestAction
  | OrderListMyOrdersErrorAction
  | OrderListMyOrdersSuccessAction
  | OrderListMyOrdersResetAction
  | OrderListRequestAction
  | OrderListErrorAction
  | OrderListSuccessAction
  | OrderDeliveredRequestAction
  | OrderDeliveredSuccessAction
  | OrderDeliveredErrorAction
  | OrderDeliveredResetAction;
